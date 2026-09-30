'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Truck,
  Sparkles,
  Award,
  Thermometer,
  Pause,
  Play
} from 'lucide-react';

interface AnnouncementItem {
  id: number;
  icon: React.ReactNode;
  text: string;
  badge?: string;
  badgeColor?: string;
}

export function TopAnnouncementSlider() {
  const announcements: AnnouncementItem[] = [
    {
      id: 1,
      icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />,
      text: "ABN: 55 657 961 058 • Registered Australian Wholesale Meat Distributor (LPJH Holdings Pty Ltd)",
      badge: "ABN Verified",
      badgeColor: "bg-emerald-950 text-emerald-300 border-emerald-800"
    },
    {
      id: 2,
      icon: <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />,
      text: "Minimum Order: $423 AUD • Direct Farm-Gate Commercial Wholesale Pricing Across Australia",
      badge: "$423 Min",
      badgeColor: "bg-amber-950 text-amber-300 border-amber-800"
    },
    {
      id: 3,
      icon: <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />,
      text: "10% Crypto Discount on All Bitcoin (BTC) & USDT Settlements — Auto-Calculated at Checkout",
      badge: "Save 10%",
      badgeColor: "bg-purple-950 text-purple-300 border-purple-800"
    },
    {
      id: 4,
      icon: <Truck className="w-3.5 h-3.5 text-blue-400 shrink-0" />,
      text: "Free Sub-Zero Refrigerated Courier Freight on All Meat Orders Over $2,000 AUD Nationwide",
      badge: "Free Shipping",
      badgeColor: "bg-blue-950 text-blue-300 border-blue-800"
    },
    {
      id: 5,
      icon: <Thermometer className="w-3.5 h-3.5 text-red-400 shrink-0" />,
      text: "Sub-Zero Cold-Chain Active: Maintaining <2.5°C Core Temperature with Solid Ice Gel Bricks for 48 Hours",
      badge: "<2.5°C 48hr",
      badgeColor: "bg-red-950 text-red-300 border-red-800"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4200);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, announcements.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % announcements.length);
  };

  const current = announcements[currentIndex];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="bg-gradient-to-r from-red-950/95 via-stone-900 to-amber-950/95 border-b border-stone-800 text-[11px] py-2 px-3 text-stone-200 select-none transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left Side: Animated Indicator & Slider */}
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <button
            onClick={handlePrev}
            className="p-0.5 text-stone-400 hover:text-white rounded transition-colors cursor-pointer shrink-0"
            aria-label="Previous announcement"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>

          {/* Active Announcement Pill & Text with Smooth Transition */}
          <div className="flex items-center gap-2 overflow-hidden flex-1 min-w-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <div className="flex items-center gap-2 truncate">
              {current.badge && (
                <span
                  className={`text-[9px] font-mono px-1.5 py-0.2 rounded border shrink-0 ${current.badgeColor}`}
                >
                  {current.badge}
                </span>
              )}
              <span className="font-medium text-stone-200 truncate">
                {current.text}
              </span>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="p-0.5 text-stone-400 hover:text-white rounded transition-colors cursor-pointer shrink-0"
            aria-label="Next announcement"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right Side: Step Indicator */}
        <div className="hidden sm:flex items-center gap-1.5 text-stone-500 font-mono text-[10px] shrink-0">
          <span>0{currentIndex + 1}</span>
          <span>/</span>
          <span>0{announcements.length}</span>
          <div className="w-[1px] h-3 bg-stone-800 mx-1" />
          <span className="text-stone-400 font-sans">
            Direct Concierge: <strong className="text-amber-400">+61 480 804 189</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
