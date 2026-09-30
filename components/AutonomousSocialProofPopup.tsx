'use client';

import React, { useState, useEffect, useRef } from 'react';
import { VERIFIED_TRUSTPILOT_REVIEWS, TrustpilotReview } from '@/lib/trustpilot-data';
import {
  Volume2,
  VolumeX,
  X,
  ShieldCheck,
  ExternalLink,
  Clock,
  Sparkles
} from 'lucide-react';

interface AutonomousSocialProofPopupProps {
  onSelectReview: (review: TrustpilotReview) => void;
}

export function AutonomousSocialProofPopup({ onSelectReview }: AutonomousSocialProofPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [secondsUntilNext, setSecondsUntilNext] = useState(30);
  const [isMuted, setIsMuted] = useState(true); // Default muted to respect browser autoplay policies
  const audioContextRef = useRef<AudioContext | null>(null);

  // Play subtle synth chime via Web Audio API
  const playSubtleChime = React.useCallback(() => {
    if (isMuted) return;
    try {
      if (!audioContextRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12); // A5

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } catch {
      // AudioContext not supported or permission denied
    }
  }, [isMuted]);

  useEffect(() => {
    // Initial popup shows after 4 seconds
    const initialTimeout = setTimeout(() => {
      setIsVisible(true);
      playSubtleChime();
    }, 4000);

    // 30-second interval cycle
    const intervalTimer = setInterval(() => {
      setSecondsUntilNext((prev) => {
        if (prev <= 1) {
          // Trigger next review
          setCurrentIndex((idx) => (idx + 1) % VERIFIED_TRUSTPILOT_REVIEWS.length);
          setIsVisible(true);
          playSubtleChime();
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(intervalTimer);
    };
  }, [playSubtleChime]);

  // Auto-hide popup after 8 seconds of displaying
  useEffect(() => {
    if (isVisible) {
      const hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 8500);
      return () => clearTimeout(hideTimeout);
    }
  }, [isVisible, currentIndex]);

  const review = VERIFIED_TRUSTPILOT_REVIEWS[currentIndex];

  if (!review) return null;

  return (
    <aside aria-label="Recent buyer social proof notifications" className="fixed bottom-4 left-4 z-50 max-w-sm w-full pointer-events-none">
      {/* Toast Notification Container */}
      <div
        className={`pointer-events-auto bg-stone-900/95 border border-stone-800 rounded-xl p-3.5 shadow-2xl backdrop-blur-xl transition-all duration-500 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
        }`}
      >
        {/* Top Meta Line: Live dot + Location + Mute Button + Close */}
        <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-stone-800/80">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-semibold text-emerald-400">
              Verified Order • Just Now
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Audio chime toggle */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="text-stone-400 hover:text-white p-1 rounded hover:bg-stone-800 transition-colors"
              title={isMuted ? "Enable sound notification" : "Mute sound notification"}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
            </button>

            {/* Dismiss button */}
            <button
              onClick={() => setIsVisible(false)}
              className="text-stone-400 hover:text-white p-1 rounded hover:bg-stone-800 transition-colors"
              title="Dismiss notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Reviewer Details & Product */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <div className="font-bold text-xs text-white">
              {review.authorName}{' '}
              <span className="font-normal text-stone-400">in {review.authorLocation}</span>
            </div>
            {/* Authentic Trustpilot Green Stars */}
            <div className="flex items-center gap-0.5">
              {Array.from({ length: review.rating }).map((_, i) => (
                <div
                  key={i}
                  className="w-3.5 h-3.5 bg-[#00B67A] text-white flex items-center justify-center text-[8px] font-bold rounded-[1px]"
                >
                  ★
                </div>
              ))}
            </div>
          </div>

          {/* Purchased Cut Badge */}
          <div className="text-[11px] text-amber-400 font-mono font-medium truncate flex items-center gap-1">
            <span className="text-stone-500">Ordered:</span> {review.purchasedProduct}
          </div>

          {/* Snippet */}
          <p className="text-xs text-stone-300 italic line-clamp-2 leading-relaxed">
            &ldquo;{review.title}&rdquo;
          </p>

          {/* Bottom Controls: Direct Link to Read in Trustpilot Suite */}
          <div className="pt-2 flex items-center justify-between text-[11px]">
            <button
              onClick={() => {
                onSelectReview(review);
                setIsVisible(false);
              }}
              className="text-[#00B67A] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
            >
              <span>Read Full Story</span>
              <ExternalLink className="w-3 h-3" />
            </button>

            {/* Countdown Badge to Next Pulse */}
            <div className="text-[10px] text-stone-500 font-mono flex items-center gap-1">
              <Clock className="w-3 h-3 text-stone-600" />
              <span>Next update in {secondsUntilNext}s</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
