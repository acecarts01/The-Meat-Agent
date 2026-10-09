import { createHmac, timingSafeEqual } from 'crypto';

export interface OrderTokenItem {
  sku: string;
  name: string;
  weight: string;
  quantity: number;
  price: number;
}

export interface OrderTokenPayload {
  v: 1;
  orderRef: string;
  placedAt: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  suburb: string;
  state: string;
  postcode: string;
  deliveryNotes: string;
  paymentMethod: 'payid' | 'bank' | 'crypto';
  items: OrderTokenItem[];
  subtotal: number;
  gst: number;
  shippingFee: number;
  cryptoDiscount: number;
  total: number;
}

export interface PaymentTokenPayload {
  v: 1;
  orderRef: string;
  fullName: string;
  total: number;
  paymentMethod: 'payid' | 'bank' | 'crypto';
  fields: { label: string; value: string }[];
}

// Stateless, signed order tokens: the full order payload travels inside the token
// itself (HMAC-SHA256 signed), so "View Order in Admin" links work with zero database —
// the admin notification email carries everything the admin page needs to render.

function secret(): string {
  const s = process.env.ORDER_TOKEN_SECRET;
  if (!s) throw new Error('ORDER_TOKEN_SECRET must be configured.');
  return s;
}

function base64url(input: Buffer | string): string {
  return Buffer.from(input).toString('base64url');
}

export function signPayload<T extends object>(payload: T): string {
  const body = base64url(JSON.stringify(payload));
  const sig = base64url(createHmac('sha256', secret()).update(body).digest());
  return `${body}.${sig}`;
}

export function verifyPayload<T>(token: string): T | null {
  const parts = token.split('.');
  if (parts.length !== 2) return null;
  const [body, sig] = parts;
  const expectedSig = base64url(createHmac('sha256', secret()).update(body).digest());

  const sigBuf = Buffer.from(sig);
  const expectedBuf = Buffer.from(expectedSig);
  if (sigBuf.length !== expectedBuf.length || !timingSafeEqual(sigBuf, expectedBuf)) {
    return null;
  }

  try {
    return JSON.parse(Buffer.from(body, 'base64url').toString('utf8')) as T;
  } catch {
    return null;
  }
}
