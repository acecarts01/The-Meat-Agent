'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Lock, ShieldCheck } from 'lucide-react';
import { EnterpriseMerchantPortal } from '@/components/EnterpriseMerchantPortal';
import { VERIFIED_TRUSTPILOT_REVIEWS, TrustpilotReview } from '@/lib/trustpilot-data';

export default function MerchantPortalPage() {
  const [reviews, setReviews] = useState<TrustpilotReview[]>(VERIFIED_TRUSTPILOT_REVIEWS);

  const handleUpdateReviewReply = (
    reviewId: string,
    reply: { author: string; date: string; text: string }
  ) => {
    setReviews((prev) =>
      prev.map((r) => (r.id === reviewId ? { ...r, companyReply: reply } : r))
    );
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col">
      {/* Confidential Top Bar */}
      <div className="bg-stone-900 border-b border-stone-800 px-4 sm:px-6 py-2.5 flex items-center justify-between text-xs sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <div className="p-1 rounded bg-amber-500/10 text-amber-400">
            <Lock className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="font-bold text-white tracking-tight">Private Merchant Desk</span>
            <span className="text-stone-500 mx-2">|</span>
            <span className="text-amber-400 font-mono text-[11px]">Unlisted Private Access URL</span>
          </div>
        </div>

        <Link
          href="/"
          className="text-stone-400 hover:text-white flex items-center gap-1.5 transition-colors font-medium text-xs px-2.5 py-1 rounded bg-stone-800/60 hover:bg-stone-800 border border-stone-700/50"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Exit to Storefront</span>
        </Link>
      </div>

      {/* Main Portal View */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <EnterpriseMerchantPortal
          reviews={reviews}
          onUpdateReviewReply={handleUpdateReviewReply}
        />
      </div>
    </div>
  );
}
