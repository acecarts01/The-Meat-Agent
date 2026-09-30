'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Star,
  Quote,
  Award,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { VERIFIED_TRUSTPILOT_REVIEWS, TRUSTPILOT_STATS, TrustpilotReview } from '@/lib/trustpilot-data';

interface HomepageReviewsSliderProps {
  reviews?: TrustpilotReview[];
  onViewAllReviews?: () => void;
  onOpenMerchantPortal?: () => void;
}

export function HomepageReviewsSlider({
  reviews: customReviews,
  onViewAllReviews,
  onOpenMerchantPortal
}: HomepageReviewsSliderProps) {
  const reviews = (customReviews || VERIFIED_TRUSTPILOT_REVIEWS).slice(0, 10);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Group into pairs for desktop, 1 for mobile
  const itemsPerView = 2;
  const maxIndex = Math.ceil(reviews.length / itemsPerView) - 1;

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const currentPair = reviews.slice(currentIndex * itemsPerView, currentIndex * itemsPerView + itemsPerView);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      {/* Header with TrustScore */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#00B67A] font-bold uppercase tracking-wider">
              Verified Australian Customer Feedback
            </span>
            <span className="bg-[#00B67A]/20 text-[#00B67A] border border-[#00B67A]/40 text-[10px] px-2 py-0.2 rounded font-mono font-bold">
              TrustScore 4.4 / 5.0
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
            Real Reviews From Pitmasters &amp; Meat Lovers
          </h2>
          <p className="text-xs text-stone-400 mt-1">
            Unfiltered ratings from home chefs, offset smoker pitmasters, and Australian families restocking bulk freezers.
          </p>
        </div>

        {/* Carousel Prev/Next Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="p-2 rounded-lg bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Previous reviews slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono text-stone-500 px-1">
            0{currentIndex + 1} / 0{maxIndex + 1}
          </span>
          <button
            onClick={handleNext}
            className="p-2 rounded-lg bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Next reviews slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Review Slider Cards */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-500"
      >
        {currentPair.map((review) => (
          <div
            key={review.id}
            className="bg-stone-900/90 border border-stone-800 hover:border-emerald-500/40 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-lg transition-all"
          >
            <div className="space-y-3">
              {/* Star Rating + Verified Buyer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 bg-[#00B67A] text-white flex items-center justify-center text-[10px] font-bold rounded-[2px]"
                    >
                      ★
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Purchase</span>
                </div>
              </div>

              {/* Title & Quote */}
              <h3 className="font-bold text-sm sm:text-base text-white leading-snug">
                &ldquo;{review.title}&rdquo;
              </h3>

              <p className="text-xs text-stone-300 leading-relaxed italic">
                {review.content}
              </p>

              {/* Official Company Reply */}
              {review.companyReply && (
                <div className="bg-stone-950/90 border border-stone-800/90 p-3 rounded-xl text-xs space-y-1 mt-2">
                  <div className="flex items-center justify-between text-emerald-400 font-semibold text-[11px]">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Official Reply from {review.companyReply.author.split('·')[0].trim()}</span>
                    </div>
                    <span className="text-stone-500 font-mono text-[10px]">{review.companyReply.date}</span>
                  </div>
                  <p className="text-stone-300 italic text-[11px] leading-relaxed line-clamp-2">
                    &ldquo;{review.companyReply.text}&rdquo;
                  </p>
                </div>
              )}
            </div>

            {/* Reviewer Details & Product Badge */}
            <div className="pt-3 border-t border-stone-800 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div>
                <strong className="text-white block font-semibold">{review.authorName}</strong>
                <span className="text-stone-500 font-mono text-[11px]">{review.authorLocation}</span>
              </div>

              <div className="bg-stone-950 border border-stone-800 px-2.5 py-1 rounded text-[11px] font-mono text-amber-400">
                {review.purchasedProduct}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trustpilot Banner Line */}
      <div className="bg-stone-900/40 border border-stone-800/80 rounded-xl py-3 px-4 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-400">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#00B67A] text-white flex items-center justify-center text-[10px] font-bold rounded-[2px]">
            ★
          </div>
          <span>Rated <strong>4.4 / 5.0</strong> based on 2,837 genuine Australian customer orders</span>
        </div>

        <div className="flex items-center gap-4">
          {onViewAllReviews && (
            <button
              onClick={onViewAllReviews}
              className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>View All Reviews on Trust Hub</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
