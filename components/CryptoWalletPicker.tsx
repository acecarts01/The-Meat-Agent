'use client';

import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { Copy, Check, QrCode } from 'lucide-react';
import { CRYPTO_WALLETS, CryptoWalletOption } from '@/lib/crypto-wallets';

interface CryptoWalletPickerProps {
  cryptoDiscount: number;
  onWantsOther: () => void;
}

export function CryptoWalletPicker({ cryptoDiscount, onWantsOther }: CryptoWalletPickerProps) {
  const [selected, setSelected] = useState<CryptoWalletOption>(CRYPTO_WALLETS[0]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [qrDataUrl, setQrDataUrl] = useState('');
  const [wantsOther, setWantsOther] = useState(false);
  const copied = copiedId === selected.id;

  useEffect(() => {
    const payload = selected.uriScheme ? `${selected.uriScheme}${selected.address}` : selected.address;
    let cancelled = false;
    QRCode.toDataURL(payload, { width: 176, margin: 1, color: { dark: '#1c1917', light: '#ffffff' } })
      .then((url) => { if (!cancelled) setQrDataUrl(url); })
      .catch(() => { if (!cancelled) setQrDataUrl(''); });
    return () => { cancelled = true; };
  }, [selected]);

  const handleCopy = () => {
    navigator.clipboard.writeText(selected.address);
    setCopiedId(selected.id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  return (
    <div className="p-3 bg-purple-950/40 border border-purple-800/40 rounded-xl text-xs space-y-3">
      <div className="flex items-center justify-between text-purple-300 font-bold">
        <span>10% Crypto Discount Applied:</span>
        <span className="font-mono">-${cryptoDiscount.toFixed(2)} AUD</span>
      </div>

      <div>
        <label className="block text-[10px] font-bold text-purple-300 uppercase tracking-wider mb-1.5">
          Choose Your Coin:
        </label>
        <div className="grid grid-cols-3 gap-1.5">
          {CRYPTO_WALLETS.map((w) => (
            <button
              key={w.id}
              type="button"
              onClick={() => setSelected(w)}
              className={`py-1.5 px-1 rounded-lg border text-[10px] font-semibold transition-all ${
                selected.id === w.id
                  ? 'bg-purple-600 border-purple-400 text-white'
                  : 'bg-stone-950 border-stone-800 text-stone-400'
              }`}
            >
              {w.coin}
              <span className="block text-[9px] opacity-70">{w.network}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-3 items-center bg-stone-950 border border-purple-800/30 rounded-lg p-3">
        <div className="flex-shrink-0 w-[88px] h-[88px] bg-white rounded-md flex items-center justify-center overflow-hidden">
          {qrDataUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={qrDataUrl} alt={`QR code for ${selected.coin} wallet address`} width={88} height={88} />
          ) : (
            <QrCode className="w-8 h-8 text-stone-300" />
          )}
        </div>
        <div className="flex-1 min-w-0 space-y-1">
          <div className="text-[10px] text-stone-400">
            {selected.coin} ({selected.network}) Address — Scan or Copy
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="font-mono font-bold text-purple-300 text-[11px] flex items-start gap-1.5 text-left break-all"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" /> : <Copy className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />}
            <span>{selected.address}</span>
          </button>
        </div>
      </div>

      <p className="text-[10px] text-purple-400">
        Send the exact AUD-equivalent total shown above. Orders are confirmed once the transaction is visible on-chain
        (usually within minutes). Need a coin not listed here?{' '}
        {!wantsOther ? (
          <button
            type="button"
            onClick={() => {
              setWantsOther(true);
              onWantsOther();
            }}
            className="underline font-semibold text-purple-300"
          >
            Request your preferred coin
          </button>
        ) : (
          <span className="text-purple-300 font-semibold">
            Noted — our concierge will arrange it via WhatsApp before you pay.
          </span>
        )}
      </p>
    </div>
  );
}
