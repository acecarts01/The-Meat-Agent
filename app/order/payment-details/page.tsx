import { verifyPayload, PaymentTokenPayload } from '@/lib/orderToken';
import { CopyField } from '@/components/CopyField';
import Link from 'next/link';
import { AlertTriangle, ShieldCheck } from 'lucide-react';

export const metadata = { robots: { index: false, follow: false } };

const PAYMENT_LABELS: Record<PaymentTokenPayload['paymentMethod'], string> = {
  payid: 'PayID (Osko) — Instant AU Bank Transfer',
  bank: 'EFT Transfer — BSB & Account Invoice',
  crypto: 'Crypto (BTC / USDT) — 10% Discount Applied',
};

export default async function PaymentDetailsPage({
  searchParams,
}: {
  searchParams: Promise<{ t?: string }>;
}) {
  const { t } = await searchParams;
  const data = t ? verifyPayload<PaymentTokenPayload>(t) : null;

  if (!data || data.v !== 1) {
    return (
      <div className="min-h-screen bg-stone-950 text-stone-100 flex items-center justify-center px-4">
        <div className="max-w-md text-center space-y-3">
          <AlertTriangle className="w-10 h-10 text-amber-400 mx-auto" />
          <h1 className="text-xl font-bold">Link Invalid or Expired</h1>
          <p className="text-stone-400 text-sm">
            Please use the payment details link from your most recent email, or contact us on WhatsApp.
          </p>
          <Link href="/" className="text-red-400 underline text-sm">
            Return to storefront
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 px-4 py-10">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center space-y-1">
          <ShieldCheck className="w-8 h-8 text-red-500 mx-auto" />
          <h1 className="text-xl font-bold">Payment Details</h1>
          <p className="text-stone-400 text-sm">
            Order <span className="font-mono text-amber-400">{data.orderRef}</span>
          </p>
        </div>

        <div className="bg-stone-900 border border-stone-800 rounded-xl p-4 text-center">
          <div className="text-stone-500 text-xs">Amount Due</div>
          <div className="text-2xl font-bold">${data.total.toFixed(2)} AUD</div>
          <div className="text-stone-400 text-xs mt-1">{PAYMENT_LABELS[data.paymentMethod]}</div>
        </div>

        <div className="space-y-2">
          <p className="text-stone-500 text-xs px-1">Tap any field below to copy it:</p>
          {data.fields.map((f, i) => (
            <CopyField key={i} label={f.label} value={f.value} />
          ))}
        </div>

        <p className="text-stone-500 text-xs text-center">
          Once payment is sent, reply to our confirmation email or message us on{' '}
          <a href="https://wa.me/61480804189" className="text-red-400 underline">
            WhatsApp
          </a>{' '}
          with your receipt.
        </p>
      </div>
    </div>
  );
}
