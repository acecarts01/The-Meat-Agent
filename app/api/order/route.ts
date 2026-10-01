import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { escapeHtml, shell, field, divider, callout, itemsTable, button } from '@/lib/emailTemplates';

export const runtime = 'nodejs';

interface OrderItem {
  sku: string;
  name: string;
  weight: string;
  quantity: number;
  price: number;
}

interface OrderPayload {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  suburb: string;
  state: string;
  postcode: string;
  deliveryNotes: string;
  paymentMethod: 'payid' | 'bank' | 'crypto';
  items: OrderItem[];
  subtotal: number;
  shippingFee: number;
  cryptoDiscount: number;
  total: number;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function generateOrderRef(): string {
  const stamp = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `TMA-${stamp}-${rand}`;
}

function validate(body: Partial<OrderPayload>): { ok: true; data: OrderPayload } | { ok: false; error: string } {
  const fullName = (body.fullName || '').trim();
  const email = (body.email || '').trim();
  const phone = (body.phone || '').trim();
  const address = (body.address || '').trim();
  const suburb = (body.suburb || '').trim();
  const state = (body.state || '').trim();
  const postcode = (body.postcode || '').trim();
  const deliveryNotes = (body.deliveryNotes || '').trim();
  const paymentMethod = body.paymentMethod;
  const items = Array.isArray(body.items) ? body.items : [];

  if (!fullName || fullName.length > 120) return { ok: false, error: 'A valid full name is required.' };
  if (!email || email.length > 254 || !EMAIL_RE.test(email)) return { ok: false, error: 'A valid email address is required.' };
  if (!phone || phone.length > 40) return { ok: false, error: 'A valid phone number is required.' };
  if (!address || address.length > 200) return { ok: false, error: 'A valid delivery address is required.' };
  if (!suburb || suburb.length > 100) return { ok: false, error: 'A valid suburb is required.' };
  if (!state || state.length > 10) return { ok: false, error: 'A valid state is required.' };
  if (!postcode || postcode.length > 10) return { ok: false, error: 'A valid postcode is required.' };
  if (!['payid', 'bank', 'crypto'].includes(paymentMethod || '')) return { ok: false, error: 'A valid payment method is required.' };
  if (items.length === 0) return { ok: false, error: 'Order must contain at least one item.' };
  for (const item of items) {
    if (!item.sku || !item.name || typeof item.quantity !== 'number' || item.quantity <= 0 || typeof item.price !== 'number') {
      return { ok: false, error: 'One or more order items are invalid.' };
    }
  }

  const subtotal = Number(body.subtotal);
  const shippingFee = Number(body.shippingFee);
  const cryptoDiscount = Number(body.cryptoDiscount) || 0;
  const total = Number(body.total);
  if (!Number.isFinite(subtotal) || !Number.isFinite(shippingFee) || !Number.isFinite(total)) {
    return { ok: false, error: 'Invalid order totals.' };
  }

  return {
    ok: true,
    data: {
      fullName,
      email,
      phone,
      address,
      suburb,
      state,
      postcode,
      deliveryNotes,
      paymentMethod: paymentMethod as OrderPayload['paymentMethod'],
      items,
      subtotal,
      shippingFee,
      cryptoDiscount,
      total,
    },
  };
}

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

const PAYMENT_LABELS: Record<OrderPayload['paymentMethod'], string> = {
  payid: 'PayID (Osko) — Instant AU Bank Transfer',
  bank: 'EFT Transfer — BSB & Account Invoice',
  crypto: 'Crypto (BTC / USDT) — 10% Discount Applied',
};

function buildItemsText(items: OrderItem[]): string {
  return items
    .map((i) => `  - ${i.quantity}x ${i.name} (${i.weight}) [${i.sku}] — $${(i.price * i.quantity).toFixed(2)}`)
    .join('\n');
}

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

export async function POST(req: NextRequest) {
  let body: Partial<OrderPayload>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const validated = validate(body);
  if (!validated.ok) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }
  const order = validated.data;

  const fromAddress = process.env.ZOHO_EMAIL;
  const toAddress = process.env.CONTACT_TO_EMAIL || process.env.ZOHO_EMAIL;

  if (!fromAddress || !toAddress) {
    console.error('Order route misconfigured: missing ZOHO_EMAIL / CONTACT_TO_EMAIL env vars.');
    return NextResponse.json(
      { error: 'Order service is not configured. Please contact us via WhatsApp instead.' },
      { status: 503 }
    );
  }

  const orderRef = generateOrderRef();
  const placedAt = new Date().toLocaleString('en-AU', { timeZone: 'Australia/Brisbane', dateStyle: 'full', timeStyle: 'short' });
  const sellerTo = adminRecipient(fromAddress, toAddress);

  try {
    const transporter = getTransporter();

    // 1. Notify the seller (admin) with full order detail.
    await transporter.sendMail({
      from: `"The Meat Agent — Order System" <${fromAddress}>`,
      to: sellerTo,
      replyTo: `"${order.fullName}" <${order.email}>`,
      subject: `[New Order ${orderRef}] ${order.fullName} — $${order.total.toFixed(2)} AUD`,
      text:
        `New order placed on themeatdirect.com.au\n\n` +
        `Order Ref: ${orderRef}\nPlaced: ${placedAt} AEST\n\n` +
        `Customer: ${order.fullName}\nEmail: ${order.email}\nPhone: ${order.phone}\n\n` +
        `Delivery Address:\n${order.address}\n${order.suburb} ${order.state} ${order.postcode}\n` +
        `Delivery Notes: ${order.deliveryNotes || 'None'}\n\n` +
        `Payment Method: ${PAYMENT_LABELS[order.paymentMethod]}\n\n` +
        `Items:\n${buildItemsText(order.items)}\n\n` +
        `Subtotal: $${order.subtotal.toFixed(2)}\n` +
        `Shipping: ${order.shippingFee === 0 ? 'FREE' : '$' + order.shippingFee.toFixed(2)}\n` +
        (order.cryptoDiscount > 0 ? `Crypto Discount: -$${order.cryptoDiscount.toFixed(2)}\n` : '') +
        `TOTAL: $${order.total.toFixed(2)} AUD\n`,
      html: shell({
        preheader: `New order ${orderRef} from ${order.fullName} — $${order.total.toFixed(2)} AUD`,
        title: `New Order — ${orderRef}`,
        bodyHtml:
          `<h1 style="margin:0 0 4px;font-size:18px;">New Order — ${escapeHtml(orderRef)}</h1>` +
          `<p style="margin:0 0 16px;color:#78716c;font-size:12px;">${escapeHtml(placedAt)} AEST</p>` +
          `<table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;">` +
          field('Customer', escapeHtml(order.fullName)) +
          field('Email', `<a href="mailto:${escapeHtml(order.email)}" style="color:#b91c1c;">${escapeHtml(order.email)}</a>`) +
          field('Phone', escapeHtml(order.phone)) +
          field('Delivery', `${escapeHtml(order.address)}<br/>${escapeHtml(order.suburb)} ${escapeHtml(order.state)} ${escapeHtml(order.postcode)}`) +
          field('Notes', escapeHtml(order.deliveryNotes || 'None')) +
          field('Payment', escapeHtml(PAYMENT_LABELS[order.paymentMethod])) +
          `</table>` +
          divider() +
          itemsTable(order.items) +
          `<p style="margin-top:12px;font-size:13px;">Subtotal: $${order.subtotal.toFixed(2)}<br/>` +
          `Shipping: ${order.shippingFee === 0 ? 'FREE' : '$' + order.shippingFee.toFixed(2)}<br/>` +
          (order.cryptoDiscount > 0 ? `Crypto Discount: -$${order.cryptoDiscount.toFixed(2)}<br/>` : '') +
          `<strong style="font-size:17px;color:#1c1917;">TOTAL: $${order.total.toFixed(2)} AUD</strong></p>`,
      }),
    });

    // 2. Send the customer their order-received confirmation.
    await transporter.sendMail({
      from: `"The Meat Agent" <${fromAddress}>`,
      to: order.email,
      subject: `Order Received — ${orderRef} | The Meat Agent`,
      text:
        `Hi ${order.fullName},\n\n` +
        `Thanks for your order! We've received it and our boning room coordinators at 164 Brisbane St, Ipswich QLD ` +
        `are preparing your cold-chain allocation.\n\n` +
        `Order Reference: ${orderRef}\n` +
        `Placed: ${placedAt} AEST\n\n` +
        `Items:\n${buildItemsText(order.items)}\n\n` +
        `TOTAL: $${order.total.toFixed(2)} AUD\n` +
        `Payment Method: ${PAYMENT_LABELS[order.paymentMethod]}\n\n` +
        `Delivering to:\n${order.address}\n${order.suburb} ${order.state} ${order.postcode}\n\n` +
        `Our logistics desk will contact you via WhatsApp/SMS with courier tracking and live temperature logs. ` +
        `For anything urgent, message us directly: https://wa.me/61480804189\n\n` +
        `The Meat Agent — Meat Direct\nABN 55 657 961 058\n22 Wilson Pl, Harrisville QLD 4307\n`,
      html: shell({
        preheader: `Order ${orderRef} received — your cold-chain allocation is being prepared.`,
        title: `Order Received — ${orderRef}`,
        bodyHtml:
          `<p style="margin:0 0 12px;">Hi ${escapeHtml(order.fullName)},</p>` +
          `<p>Thanks for your order! We've received it and our boning room coordinators at 164 Brisbane St, Ipswich QLD ` +
          `are preparing your cold-chain allocation.</p>` +
          `<p style="margin:16px 0 4px;"><strong>Order Reference:</strong> ${escapeHtml(orderRef)}<br/>` +
          `<strong>Placed:</strong> ${escapeHtml(placedAt)} AEST</p>` +
          divider() +
          itemsTable(order.items) +
          `<p style="margin-top:12px;"><strong style="font-size:17px;">TOTAL: $${order.total.toFixed(2)} AUD</strong><br/>` +
          `<span style="font-size:13px;">Payment Method: ${escapeHtml(PAYMENT_LABELS[order.paymentMethod])}</span></p>` +
          callout(
            `<strong>Delivering to:</strong><br/>${escapeHtml(order.address)}<br/>${escapeHtml(order.suburb)} ${escapeHtml(order.state)} ${escapeHtml(order.postcode)}`
          ) +
          `<p style="font-size:13px;">Our logistics desk will contact you via WhatsApp/SMS with courier tracking and live temperature logs.</p>` +
          button('https://wa.me/61480804189', 'Message Us on WhatsApp'),
      }),
    });

    return NextResponse.json({ ok: true, orderRef });
  } catch (err: unknown) {
    console.error('Order email send failed:', err);
    return NextResponse.json(
      { error: 'We could not process your order right now. Please try WhatsApp Order instead.' },
      { status: 502 }
    );
  }
}
