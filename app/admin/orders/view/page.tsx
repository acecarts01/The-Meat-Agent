import { verifyPayload, OrderTokenPayload } from '@/lib/orderToken';
import { PaymentComposer } from '@/components/admin/PaymentComposer';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export const metadata = { robots: { index: false, follow: false } };

const PAYMENT_LABELS: Record<OrderTokenPayload['paymentMethod'], string> = {
  payid: 'PayID (Osko) — Instant AU Bank Transfer',
  bank: 'EFT Transfer — BSB & Account Invoice',
  crypto: 'Crypto (BTC / USDT) — 10% Discount Applied',
};

export default async function AdminOrderViewPage({
  searchParams,
}: {
  searchParams: Promise<{ t?: string }>;
}) {
  const { t } = await searchParams;
  const order = t ? verifyPayload<OrderTokenPayload>(t) : null;

  if (!order || order.v !== 1) {
    return (
      <div className="min-h-screen bg-stone-950 text-stone-100 flex items-center justify-center px-4">
        <div className="max-w-md text-center space-y-3">
          <AlertTriangle className="w-10 h-10 text-amber-400 mx-auto" />
          <h1 className="text-xl font-bold">Invalid or Expired Order Link</h1>
          <p className="text-stone-400 text-sm">
            This admin order link is invalid. Open the "View Order in Admin" link from the original order
            notification email.
          </p>
          <Link href="/" className="text-red-400 underline text-sm">
            Return to storefront
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <div className="bg-stone-900 border-b border-stone-800 px-4 sm:px-6 py-3 sticky top-0 z-40">
        <span className="font-bold tracking-tight">Order Admin</span>
        <span className="text-stone-500 mx-2">|</span>
        <span className="text-amber-400 font-mono text-xs">{order.orderRef}</span>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <section className="bg-stone-900 border border-stone-800 rounded-xl p-5 space-y-4">
          <h2 className="text-lg font-bold">Order Details</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-stone-500 text-xs">Customer</div>
              <div>{order.fullName}</div>
            </div>
            <div>
              <div className="text-stone-500 text-xs">Email</div>
              <div>
                <a href={`mailto:${order.email}`} className="text-red-400">
                  {order.email}
                </a>
              </div>
            </div>
            <div>
              <div className="text-stone-500 text-xs">Phone</div>
              <div>{order.phone}</div>
            </div>
            <div>
              <div className="text-stone-500 text-xs">Placed</div>
              <div>{order.placedAt} AEST</div>
            </div>
            <div className="sm:col-span-2">
              <div className="text-stone-500 text-xs">Delivery Address</div>
              <div>
                {order.address}
                <br />
                {order.suburb} {order.state} {order.postcode}
              </div>
            </div>
            {order.deliveryNotes && (
              <div className="sm:col-span-2">
                <div className="text-stone-500 text-xs">Delivery Notes</div>
                <div>{order.deliveryNotes}</div>
              </div>
            )}
            <div className="sm:col-span-2">
              <div className="text-stone-500 text-xs">Payment Method</div>
              <div>{PAYMENT_LABELS[order.paymentMethod]}</div>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-4">
            <table className="w-full text-sm">
              <tbody>
                {order.items.map((item, i) => (
                  <tr key={i} className="border-b border-stone-800/60">
                    <td className="py-2">
                      {item.quantity}x {item.name} <span className="text-stone-500">({item.weight})</span>
                    </td>
                    <td className="py-2 text-right">${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-right pt-3 space-y-1 text-sm">
              <div>Subtotal: ${order.subtotal.toFixed(2)}</div>
              <div>Shipping: {order.shippingFee === 0 ? 'FREE' : `$${order.shippingFee.toFixed(2)}`}</div>
              {order.cryptoDiscount > 0 && <div>Crypto Discount: -${order.cryptoDiscount.toFixed(2)}</div>}
              <div className="text-lg font-bold text-amber-400">TOTAL: ${order.total.toFixed(2)} AUD</div>
            </div>
          </div>
        </section>

        <PaymentComposer orderToken={t!} order={order} />
      </div>
    </div>
  );
}
