'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — no-op, value is still visible to copy manually
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="w-full flex items-center justify-between gap-3 bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-left hover:border-stone-700 transition-colors"
    >
      <span className="min-w-0">
        <span className="block text-stone-500 text-xs">{label}</span>
        <span className="block font-mono text-sm break-all">{value}</span>
      </span>
      {copied ? (
        <Check className="w-4 h-4 text-green-400 shrink-0" />
      ) : (
        <Copy className="w-4 h-4 text-stone-500 shrink-0" />
      )}
    </button>
  );
}
