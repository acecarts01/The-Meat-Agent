import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { checkAdminPasscode } from '@/lib/adminAuth';
import { verifyPayload, signPayload, OrderTokenPayload, PaymentTokenPayload } from '@/lib/orderToken';
import { parsePaymentDetail } from '@/lib/paymentParser';
import { escapeHtml, shell, field, divider, button } from '@/lib/emailTemplates';

export const runtime = 'nodejs';

let cachedTransporter: ReturnType<typeof nodemailer.createTransport> | null = null;

function getTransporter() {
  if (cachedTransporter) return cachedTransporter;
  const user = process.env.ZOHO_EMAIL;
  const pass = process.env.ZOHO_APP_PASSWORD;
  const host = process.env.ZOHO_SMTP_HOST || 'smtp.zoho.com';
  if (!user || !pass) throw new Error('ZOHO_EMAIL and ZOHO_APP_PASSWORD must be configured.');
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
  const authError = checkAdminPasscode(req);
  if (authError === 'not-configured') {
    return NextResponse.json({ error: 'Admin passcode is not configured.' }, { status: 503 });
  }
  if (authError === 'unauthorized') {
    return NextResponse.json({ error: 'Incorrect admin passcode.' }, { status: 401 });
  }

  let body: { orderToken?: string; paymentBlob?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const order = body.orderToken ? verifyPayload<OrderTokenPayload>(body.orderToken) : null;
  if (!order || order.v !== 1) {
    return NextResponse.json({ error: 'Invalid or expired order link.' }, { status: 400 });
  }

  const fields = parsePaymentDetail(body.paymentBlob || '');
  if (fields.length === 0) {
    return NextResponse.json({ error: 'Paste the payment details before sending.' }, { status: 400 });
  }

  const fromAddress = process.env.ZOHO_EMAIL;
  if (!fromAddress) {
    return NextResponse.json({ error: 'Email service is not configured.' }, { status: 503 });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://themeatdirect.com.au';
  const paymentTokenPayload: PaymentTokenPayload = {
    v: 1,
    orderRef: order.orderRef,
    fullName: order.fullName,
    total: order.total,
    paymentMethod: order.paymentMethod,
    fields,
  };
  const paymentLink = `${siteUrl}/order/payment-details?t=${encodeURIComponent(signPayload(paymentTokenPayload))}`;

  const fieldsText = fields.map((f) => `${f.label}: ${f.value}`).join('\n');
  const fieldsHtml = fields
    .map(
      (f) =>
        `<tr><td style="padding:8px;border-bottom:1px solid #e7e5e4;color:#78716c;font-size:12px;">${escapeHtml(f.label)}</td>` +
        `<td style="padding:8px;border-bottom:1px solid #e7e5e4;font-family:monospace;font-size:13px;">${escapeHtml(f.value)}</td></tr>`
    )
    .join('');

  try {
    const transporter = getTransporter();
    await transporter.sendMail({
      from: `"The Meat Agent" <${fromAddress}>`,
      to: order.email,
      subject: `Payment Details — ${order.orderRef} | The Meat Agent`,
      text:
        `Hi ${order.fullName},\n\n` +
        `Here are your payment details for order ${order.orderRef} ($${order.total.toFixed(2)} AUD):\n\n` +
        `${fieldsText}\n\n` +
        `Tap-to-copy version: ${paymentLink}\n\n` +
        `Once payment is sent, reply to this email or message us on WhatsApp with your receipt.\n\n` +
        `The Meat Agent — Meat Direct\nABN 55 657 961 058\n22 Wilson Pl, Harrisville QLD 4307\n`,
      html: shell({
        preheader: `Payment details for order ${order.orderRef} — $${order.total.toFixed(2)} AUD`,
        title: `Payment Details — ${order.orderRef}`,
        bodyHtml:
          `<p style="margin:0 0 12px;">Hi ${escapeHtml(order.fullName)},</p>` +
          `<p>Here are your payment details for order <strong>${escapeHtml(order.orderRef)}</strong> ` +
          `(<strong>$${order.total.toFixed(2)} AUD</strong>):</p>` +
          divider() +
          `<table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;"><tbody>${fieldsHtml}</tbody></table>` +
          `<p style="font-size:13px;margin-top:16px;">Tap below for a one-tap-copy version on your phone:</p>` +
          button(paymentLink, 'Open Tap-to-Copy Payment Details') +
          `<p style="font-size:13px;color:#78716c;margin-top:16px;">Once payment is sent, reply to this email or message us on WhatsApp with your receipt.</p>`,
      }),
    });

    return NextResponse.json({ ok: true, paymentLink });
  } catch (err) {
    console.error('Payment details email send failed:', err);
    return NextResponse.json({ error: 'Failed to send payment details email.' }, { status: 502 });
  }
}
