import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
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

  try {
    const transporter = getTransporter();

    await transporter.sendMail({
      from: `"The Meat Agent — Website" <${fromAddress}>`,
      to: toAddress,
      replyTo: `"${name}" <${email}>`,
      subject: `[Website Inquiry] ${subject} — ${name}`,
      text:
        `New enquiry from themeatdirect.com.au\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Subject: ${subject}\n\n` +
        `Message:\n${message}\n`,
      html:
        `<div style="font-family:Arial,sans-serif;font-size:14px;color:#1c1917;line-height:1.5;">` +
        `<h2 style="margin:0 0 12px;">New Website Enquiry</h2>` +
        `<p><strong>Name:</strong> ${escapeHtml(name)}<br/>` +
        `<strong>Email:</strong> ${escapeHtml(email)}<br/>` +
        `<strong>Phone:</strong> ${escapeHtml(phone)}<br/>` +
        `<strong>Subject:</strong> ${escapeHtml(subject)}</p>` +
        `<p style="white-space:pre-wrap;border-top:1px solid #e7e5e4;padding-top:12px;">${escapeHtml(message)}</p>` +
        `<p style="color:#78716c;font-size:12px;margin-top:16px;">Sent via the Reply Portal on themeatdirect.com.au</p>` +
        `</div>`,
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
      html:
        `<div style="font-family:Arial,sans-serif;font-size:14px;color:#1c1917;line-height:1.5;">` +
        `<p>Hi ${escapeHtml(name)},</p>` +
        `<p>Thanks for reaching out to <strong>The Meat Agent</strong>. Our butchery concierge team has received ` +
        `your enquiry (<em>${escapeHtml(subject)}</em>) and will reply within one business day.</p>` +
        `<p>For an instant response, message us on <a href="https://wa.me/61480804189">WhatsApp</a>.</p>` +
        `<p style="color:#78716c;font-size:12px;margin-top:16px;">The Meat Agent — Meat Direct<br/>22 Wilson Pl, Harrisville QLD 4307</p>` +
        `</div>`,
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
