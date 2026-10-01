'use client';

import React, { useMemo, useState } from 'react';
import { Lock, Send, CheckCircle2 } from 'lucide-react';
import { parsePaymentDetail } from '@/lib/paymentParser';
import type { OrderTokenPayload } from '@/lib/orderToken';

const PASSCODE_STORAGE_KEY = 'tma-admin-passcode';

export function PaymentComposer({
  orderToken,
  order,
}: {
  orderToken: string;
  order: OrderTokenPayload;
}) {
  const [passcode, setPasscode] = useState(
    typeof window !== 'undefined' ? sessionStorage.getItem(PASSCODE_STORAGE_KEY) || '' : ''
  );
  const [passcodeInput, setPasscodeInput] = useState('');
  const [unlocked, setUnlocked] = useState(!!passcode);
  const [blob, setBlob] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const parsedFields = useMemo(() => parsePaymentDetail(blob), [blob]);

  const handleUnlock = () => {
    if (!passcodeInput.trim()) return;
    sessionStorage.setItem(PASSCODE_STORAGE_KEY, passcodeInput.trim());
    setPasscode(passcodeInput.trim());
    setUnlocked(true);
  };

  const handleSend = async () => {
    if (parsedFields.length === 0) return;
    setSending(true);
    setError('');
    try {
      const res = await fetch('/api/admin/send-payment-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-passcode': passcode },
        body: JSON.stringify({ orderToken, paymentBlob: blob }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (res.status === 401) {
          sessionStorage.removeItem(PASSCODE_STORAGE_KEY);
          setUnlocked(false);
          setError('Incorrect passcode. Please re-enter it.');
        } else {
          throw new Error(data.error || 'Failed to send payment details.');
        }
        return;
      }
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send payment details.');
    } finally {
      setSending(false);
    }
  };

  if (!unlocked) {
    return (
      <section className="bg-stone-900 border border-stone-800 rounded-xl p-5 space-y-3">
        <div className="flex items-center gap-2 text-stone-300">
          <Lock className="w-4 h-4" />
          <span className="font-bold text-sm">Enter Admin Passcode</span>
        </div>
        <div className="flex gap-2">
          <input
            type="password"
            value={passcodeInput}
            onChange={(e) => setPasscodeInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
            placeholder="Admin passcode"
            className="flex-1 bg-stone-950 border border-stone-700 rounded-lg px-3 py-2 text-sm"
          />
          <button
            type="button"
            onClick={handleUnlock}
            className="bg-red-700 hover:bg-red-600 text-white font-bold px-4 py-2 rounded-lg text-sm"
          >
            Unlock
          </button>
        </div>
      </section>
    );
  }

  if (sent) {
    return (
      <section className="bg-stone-900 border border-green-800/50 rounded-xl p-5 flex items-center gap-3">
        <CheckCircle2 className="w-6 h-6 text-green-400" />
        <div>
          <div className="font-bold text-green-400">Payment Details Sent</div>
          <div className="text-stone-400 text-sm">
            {order.fullName} ({order.email}) will receive the copy-paste payment details by email.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-stone-900 border border-stone-800 rounded-xl p-5 space-y-4">
      <h2 className="text-lg font-bold">Send Payment Details</h2>
      <p className="text-stone-400 text-sm">
        Paste the real payment details below (bank account, PayID, crypto wallet — any format). Each line
        becomes an individually copy-pasteable field for the customer.
      </p>
      <textarea
        value={blob}
        onChange={(e) => setBlob(e.target.value)}
        placeholder={'BSB: 123-456\nAccount Number: 12345678\nAccount Name: The Meat Agent Pty Ltd\nReference: ' + order.orderRef}
        rows={6}
        className="w-full bg-stone-950 border border-stone-700 rounded-lg px-3 py-2 text-sm font-mono"
      />

      {parsedFields.length > 0 && (
        <div>
          <div className="text-stone-500 text-xs mb-2">Preview — what the customer will see:</div>
          <div className="bg-stone-950 border border-stone-800 rounded-lg divide-y divide-stone-800">
            {parsedFields.map((f, i) => (
              <div key={i} className="flex items-center justify-between px-3 py-2 text-sm">
                <span className="text-stone-500">{f.label}</span>
                <span className="font-mono">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-950/50 border border-red-500/50 text-red-300 text-xs px-3 py-2 rounded-lg">
          {error}
        </div>
      )}

      <button
        type="button"
        onClick={handleSend}
        disabled={parsedFields.length === 0 || sending}
        className="bg-red-700 hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-5 py-2.5 rounded-lg text-sm flex items-center gap-2"
      >
        <Send className="w-4 h-4" />
        {sending ? 'Sending…' : 'Send Payment Details to Customer'}
      </button>
    </section>
  );
}
