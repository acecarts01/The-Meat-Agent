import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { escapeHtml, shell, field, divider } from '@/lib/emailTemplates';

export const runtime = 'nodejs';

interface WholesalePayload {
  businessName: string;
  abn: string;
  contactName: string;
  email: string;
  phone: string;
  businessType: string;
  deliveryCadence: string;
  estimatedWeeklyVolume: string;
  state: string;
  notes: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let cachedTransporter: ReturnType<typeof nodemailer.createTransport> | null = null;

function getTransporter() {
  if (cachedTransporter) return cachedTransporter;

  const user = process.env.ZOHO_EMAIL;
  const pass = process.env.ZOHO_APP_PASSWORD;
  const host = process.env.ZOHO_SMTP_HOST || 'smtppro.zoho.com.au';

  if (!user || !pass) {
    throw new Error('ZOHO_EMAIL and ZOHO_APP_PASSWORD must be configured.');
  }

  cachedTransporter = nodemailer.createTransport({
    host,
    port: 465,
    secure: true,
    auth: { user, pass },
    pool: true,
    maxConnections: 3,
    maxMessages: 50,
  });

  return cachedTransporter;
}

// Zoho drops SMTP mail addressed back to the authenticating mailbox (self-loop
// suppression). Plus-addressing keeps the admin copy in the same inbox via a
// distinct RCPT TO — see app/api/order/route.ts for the same pattern.
function adminRecipient(fromAddress: string, toAddress: string): string {
  if (toAddress.toLowerCase() !== fromAddress.toLowerCase()) return toAddress;
  const at = fromAddress.indexOf('@');
  if (at === -1) return toAddress;
  return `${fromAddress.slice(0, at)}+wholesale@${fromAddress.slice(at + 1)}`;
}

function generateLeadRef(): string {
  const stamp = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `TMA-WS-${stamp}-${rand}`;
}

function validate(body: Partial<WholesalePayload>): { ok: true; data: WholesalePayload } | { ok: false; error: string } {
  const businessName = (body.businessName || '').trim();
  const abn = (body.abn || '').trim();
  const contactName = (body.contactName || '').trim();
  const email = (body.email || '').trim();
  const phone = (body.phone || '').trim();
  const businessType = (body.businessType || '').trim();
  const deliveryCadence = (body.deliveryCadence || '').trim();
  const estimatedWeeklyVolume = (body.estimatedWeeklyVolume || '').trim();
  const state = (body.state || '').trim();
  const notes = (body.notes || '').trim();

  if (!businessName || businessName.length > 150) return { ok: false, error: 'A valid business name is required.' };
  if (!contactName || contactName.length > 120) return { ok: false, error: 'A valid contact name is required.' };
  if (!email || email.length > 254 || !EMAIL_RE.test(email)) return { ok: false, error: 'A valid email address is required.' };
  if (!phone || phone.length > 40) return { ok: false, error: 'A valid phone number is required.' };
  if (abn.length > 20) return { ok: false, error: 'ABN is too long.' };
  if (notes.length > 2000) return { ok: false, error: 'Notes are too long.' };

  return {
    ok: true,
    data: { businessName, abn, contactName, email, phone, businessType, deliveryCadence, estimatedWeeklyVolume, state, notes },
  };
}

export async function POST(req: NextRequest) {
  let body: Partial<WholesalePayload>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const validated = validate(body);
  if (!validated.ok) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }
  const lead = validated.data;

  const fromAddress = process.env.ZOHO_EMAIL;
  const toAddress = process.env.CONTACT_TO_EMAIL || process.env.ZOHO_EMAIL;

  if (!fromAddress || !toAddress) {
    console.error('Wholesale route misconfigured: missing ZOHO_EMAIL / CONTACT_TO_EMAIL env vars.');
    return NextResponse.json(
      { error: 'Wholesale inquiry service is not configured. Please contact us via WhatsApp instead.' },
      { status: 503 }
    );
  }

  const leadRef = generateLeadRef();
  const placedAt = new Date().toLocaleString('en-AU', { timeZone: 'Australia/Brisbane', dateStyle: 'full', timeStyle: 'short' });
  const sellerTo = adminRecipient(fromAddress, toAddress);

  try {
    const transporter = getTransporter();

    await transporter.sendMail({
      from: `"The Meat Agent — Wholesale Desk" <${fromAddress}>`,
      to: sellerTo,
      replyTo: `"${lead.contactName}" <${lead.email}>`,
      subject: `[Wholesale Inquiry ${leadRef}] ${lead.businessName} — ${lead.businessType || 'Trade Account'}`,
      text:
        `New wholesale/trade inquiry from themeatdirect.com.au/wholesale/\n\n` +
        `Lead Ref: ${leadRef}\nReceived: ${placedAt} AEST\n\n` +
        `Business: ${lead.businessName}\nABN: ${lead.abn || 'Not provided'}\n` +
        `Contact: ${lead.contactName}\nEmail: ${lead.email}\nPhone: ${lead.phone}\n\n` +
        `Venue Type: ${lead.businessType}\nDelivery Cadence Requested: ${lead.deliveryCadence}\n` +
        `Est. Weekly Volume: ${lead.estimatedWeeklyVolume}\nState: ${lead.state}\n\n` +
        `Notes: ${lead.notes || 'None'}\n`,
      html: shell({
        preheader: `New wholesale inquiry ${leadRef} from ${lead.businessName}`,
        title: `New Wholesale Inquiry — ${leadRef}`,
        bodyHtml:
          `<h1 style="margin:0 0 4px;font-size:18px;">New Wholesale Inquiry — ${escapeHtml(leadRef)}</h1>` +
          `<p style="margin:0 0 16px;color:#78716c;font-size:12px;">${escapeHtml(placedAt)} AEST</p>` +
          `<table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;">` +
          field('Business', escapeHtml(lead.businessName)) +
          field('ABN', escapeHtml(lead.abn || 'Not provided')) +
          field('Contact', escapeHtml(lead.contactName)) +
          field('Email', `<a href="mailto:${escapeHtml(lead.email)}" style="color:#b91c1c;">${escapeHtml(lead.email)}</a>`) +
          field('Phone', escapeHtml(lead.phone)) +
          field('Venue Type', escapeHtml(lead.businessType)) +
          field('Delivery Cadence', escapeHtml(lead.deliveryCadence)) +
          field('Est. Weekly Volume', escapeHtml(lead.estimatedWeeklyVolume)) +
          field('State', escapeHtml(lead.state)) +
          `</table>` +
          divider() +
          `<p style="margin:0;color:#1c1917;font-size:13px;white-space:pre-wrap;">${escapeHtml(lead.notes || 'No additional notes.')}</p>`,
      }),
    });

    // Confirmation to the applicant.
    await transporter.sendMail({
      from: `"The Meat Agent — Wholesale Desk" <${fromAddress}>`,
      to: lead.email,
      replyTo: fromAddress,
      subject: `We've received your wholesale application — ${leadRef}`,
      text:
        `Hi ${lead.contactName},\n\n` +
        `Thanks for applying for a trade account with The Meat Agent. Our commercial desk at 164 Brisbane St, ` +
        `Ipswich QLD has your details and will be in touch within 2 business hours with your commercial price list ` +
        `and confirmed delivery schedule.\n\n` +
        `Reference: ${leadRef}\n\n` +
        `If anything is urgent, reach us directly on WhatsApp: +61 480 804 189.\n\n` +
        `— The Meat Agent Wholesale Desk`,
      html: shell({
        title: 'Wholesale Application Received',
        bodyHtml:
          `<h1 style="margin:0 0 12px;font-size:18px;">Thanks, ${escapeHtml(lead.contactName)} — your application is in.</h1>` +
          `<p style="margin:0 0 16px;color:#1c1917;font-size:13px;">Our commercial desk at 164 Brisbane St, Ipswich QLD has your details and will be in touch within 2 business hours with your commercial price list and confirmed delivery schedule.</p>` +
          field('Reference', escapeHtml(leadRef)) +
          divider() +
          `<p style="margin:0;color:#78716c;font-size:12px;">Urgent? WhatsApp us directly: +61 480 804 189</p>`,
      }),
    });
  } catch (err) {
    console.error('Failed to send wholesale inquiry email:', err);
    return NextResponse.json(
      { error: 'Could not send your inquiry right now. Please try WhatsApp instead.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, leadRef });
}
