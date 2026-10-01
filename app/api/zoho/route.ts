import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { escapeHtml, shell, field, divider, button } from '@/lib/emailTemplates';

export const runtime = 'nodejs';

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Zoho silently drops SMTP-submitted mail addressed to the exact same mailbox that
// authenticated the send (self-loop suppression — confirmed: it lands in Sent, never Inbox).
// Plus-addressing the admin copy keeps it routed to the same inbox while being a distinct
// RCPT TO, which Zoho delivers normally.
function adminRecipient(fromAddress: string, toAddress: string): string {
  if (toAddress.toLowerCase() !== fromAddress.toLowerCase()) return toAddress;
  const at = fromAddress.indexOf('@');
  if (at === -1) return toAddress;
  return `${fromAddress.slice(0, at)}+orders@${fromAddress.slice(at + 1)}`;
}

function validate(body: Partial<ContactPayload>): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  const name = (body.name || '').trim();
  const email = (body.email || '').trim();
  const phone = (body.phone || '').trim();
  const subject = (body.subject || '').trim();
  const message = (body.message || '').trim();

  if (!name || name.length > 120) return { ok: false, error: 'A valid name is required.' };
  if (!email || email.length > 254 || !EMAIL_RE.test(email)) return { ok: false, error: 'A valid email address is required.' };
  if (!phone || phone.length > 40) return { ok: false, error: 'A valid phone number is required.' };
  if (!subject || subject.length > 200) return { ok: false, error: 'A subject is required.' };
  if (!message || message.length > 5000) return { ok: false, error: 'A message (under 5000 characters) is required.' };

  return { ok: true, data: { name, email, phone, subject, message } };
}

type Transporter = ReturnType<typeof nodemailer.createTransport>;

let cachedTransporter: Transporter | null = null;

function getTransporter(): Transporter {
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

export async function POST(req: NextRequest) {
  let body: Partial<ContactPayload>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const validated = validate(body);
  if (!validated.ok) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }
  const { name, email, phone, subject, message } = validated.data;

  const fromAddress = process.env.ZOHO_EMAIL;
  const toAddress = process.env.CONTACT_TO_EMAIL || process.env.ZOHO_EMAIL;

  if (!fromAddress || !toAddress) {
    console.error('Zoho contact route misconfigured: missing ZOHO_EMAIL / CONTACT_TO_EMAIL env vars.');
    return NextResponse.json(
      { error: 'Email service is not configured. Please contact us via WhatsApp instead.' },
      { status: 503 }
    );
  }

  const sellerTo = adminRecipient(fromAddress, toAddress);

  try {
    const transporter = getTransporter();

    await transporter.sendMail({
      from: `"The Meat Agent — Website" <${fromAddress}>`,
      to: sellerTo,
      replyTo: `"${name}" <${email}>`,
      subject: `[Website Inquiry] ${subject} — ${name}`,
      text:
        `New enquiry from themeatdirect.com.au\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Subject: ${subject}\n\n` +
        `Message:\n${message}\n`,
      html: shell({
        preheader: `New enquiry from ${name}: ${subject}`,
        title: 'New Website Enquiry',
        bodyHtml:
          `<h1 style="margin:0 0 16px;font-size:18px;">New Website Enquiry</h1>` +
          `<table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;">` +
          field('Name', escapeHtml(name)) +
          field('Email', `<a href="mailto:${escapeHtml(email)}" style="color:#b91c1c;">${escapeHtml(email)}</a>`) +
          field('Phone', escapeHtml(phone)) +
          field('Subject', escapeHtml(subject)) +
          `</table>` +
          divider() +
          `<p style="white-space:pre-wrap;font-size:13px;">${escapeHtml(message)}</p>`,
      }),
    });

    await transporter.sendMail({
      from: `"The Meat Agent" <${fromAddress}>`,
      to: email,
      subject: 'We received your enquiry — The Meat Agent',
      text:
        `Hi ${name},\n\n` +
        `Thanks for reaching out to The Meat Agent. Our butchery concierge team has received your enquiry ` +
        `("${subject}") and will reply within one business day.\n\n` +
        `For an instant response, message us on WhatsApp: https://wa.me/61480804189\n\n` +
        `The Meat Agent — Meat Direct\n22 Wilson Pl, Harrisville QLD 4307\n`,
      html: shell({
        preheader: 'We received your enquiry and will reply within one business day.',
        title: 'Enquiry Received',
        bodyHtml:
          `<p style="margin:0 0 12px;">Hi ${escapeHtml(name)},</p>` +
          `<p>Thanks for reaching out to <strong>The Meat Agent</strong>. Our butchery concierge team has received ` +
          `your enquiry (<em>${escapeHtml(subject)}</em>) and will reply within one business day.</p>` +
          `<p style="font-size:13px;">For an instant response, message us on WhatsApp.</p>` +
          button('https://wa.me/61480804189', 'Message Us on WhatsApp'),
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error('Zoho SMTP send failed:', err);
    return NextResponse.json(
      { error: 'We could not send your message right now. Please try WhatsApp instead.' },
      { status: 502 }
    );
  }
}
