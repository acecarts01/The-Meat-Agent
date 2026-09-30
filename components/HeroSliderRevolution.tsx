'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Flame,
  ShieldCheck,
  Truck,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Award,
  Sparkles,
  MessageCircle,
  ShoppingBag
} from 'lucide-react';

interface HeroSliderRevolutionProps {
  onExploreCatalog: () => void;
  onOpenWhatsApp: () => void;
  onOpenReviews: () => void;
}

export function HeroSliderRevolution({
  onExploreCatalog,
  onOpenWhatsApp,
  onOpenReviews
}: HeroSliderRevolutionProps) {
  const slides = [
    {
      id: 1,
      tagline: "PREMIUM AUSTRALIAN WHOLESALE ALLOCATION",
      headlinePrefix: "FARM-GATE CUTS",
      headlineHighlight: "MEAT DIRECT",
      headlineSuffix: "TO YOUR DOOR",
      subheading: "Bypass supermarket cold storage & boutique middleman markups. Commercial wholesale allocation of MSA-graded Wagyu MB9+, 45-day dry-aged ribeyes, and competition smoker primals.",
      bgImage: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1920&q=85",
      badge: "ABN: 55 657 961 058 • Trading Since 2023",
      techSpecs: ["MSA Graded Wagyu MB9+", "45-Day Dry Aging", "<2.5°C Cold-Chain 48hr"]
    },
    {
      id: 2,
      tagline: "COMPETITION PITMASTER & AMERICAN BBQ",
      headlinePrefix: "14-HOUR IRONBARK",
      headlineHighlight: "FULL PACKER",
      headlineSuffix: "BRISKETS & ASADO",
      subheading: "Uniform 6mm fat cap, thick flat ends, and marbled point muscles. Untrimmed primal cuts that hold moisture and develop deep mahogany bark over long offset smokes.",
      bgImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=85",
      badge: "Competition Grade Primals",
      techSpecs: ["5.5kg+ Packer Briskets", "Flanken Asado Cuts", "English Plate Dino Ribs"]
    },
    {
      id: 3,
      tagline: "INELASTIC GROCERY STAPLES & FAMILY BULK",
      headlinePrefix: "WHOLESALE DIRECT",
      headlineHighlight: "FAMILY BULK PACKS",
      headlineSuffix: "FROM $423 AUD",
      subheading: "100% pure grass-fed beef mince, handcrafted artisan snags, and 10-pack lean gym rumps. Zero fillers, zero added water, packed in heavy-duty vacuum seal.",
      bgImage: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1920&q=85",
      badge: "Wholesale Farm Gate Pricing",
      techSpecs: ["100% Pure Mince (No Water)", "Gluten-Free Snags", "10-Pack Lean Rumps"]
    },
    {
      id: 4,
      tagline: "SUB-ZERO COLD-CHAIN REFRIGERATED FREIGHT",
      headlinePrefix: "SUB-ZERO 48-HR",
      headlineHighlight: "THERMAL FREIGHT",
      headlineSuffix: "NATIONWIDE",
      subheading: "Delivered via dedicated refrigerated couriers with double-thick thermal wool insulation and solid ice gel bricks. Verified <2.5°C core temp upon arrival even in 38°C heat.",
      bgImage: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=1920&q=85",
      badge: "Sub-Zero Thermal Seal",
      techSpecs: ["Insulated Wool Liners", "Solid Dry Ice Bricks", "Real-Time Courier Tracking"]
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const slideInterval = 6000;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const stepTime = 50;
    const increment = (stepTime / slideInterval) * 100;

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((curr) => (curr + 1) % slides.length);
          return 0;
        }
        return prev + increment;
      });
    }, stepTime);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, slides.length, currentSlide]);

  const handleNext = () => {
    setProgress(0);
    setCurrentSlide((curr) => (curr + 1) % slides.length);
  };

  const handlePrev = () => {
    setProgress(0);
    setCurrentSlide((curr) => (curr - 1 + slides.length) % slides.length);
  };

  const handleSelectSlide = (idx: number) => {
    setProgress(0);
    setCurrentSlide(idx);
  };

  const active = slides[currentSlide];

  return (
    <section className="relative w-full min-h-[540px] md:min-h-[620px] lg:min-h-[660px] overflow-hidden bg-stone-950 flex flex-col justify-between border-b border-stone-800">
      {/* Background Slides with Ken Burns Effect */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out pointer-events-none ${
            idx === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-0'
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.bgImage}
            alt={slide.headlinePrefix}
            className={`w-full h-full object-cover transform transition-transform duration-[7000ms] ease-out ${
              idx === currentSlide ? 'scale-105' : 'scale-100'
            }`}
          />
          {/* Deep dark gradient scrim for maximum text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-stone-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/70" />
        </div>
      ))}

      {/* Main Slide Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 md:pt-14 md:pb-10 flex-1 flex flex-col justify-center">
        <div className="max-w-2xl lg:max-w-3xl space-y-4">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 bg-red-950/80 border border-red-600/40 text-red-300 px-3 py-1 rounded text-xs font-mono font-bold tracking-wider uppercase shadow">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{active.tagline}</span>
          </div>

          {/* Headline - Exactly ONE <h1> on slide 1 per WebForge Rule #4 */}
          {active.id === 1 ? (
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
              {active.headlinePrefix} <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-amber-400 via-red-500 to-amber-500 bg-clip-text text-transparent">
                {active.headlineHighlight}
              </span>{' '}
              {active.headlineSuffix}
            </h1>
          ) : (
            <div className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
              {active.headlinePrefix} <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-amber-400 via-red-500 to-amber-500 bg-clip-text text-transparent">
                {active.headlineHighlight}
              </span>{' '}
              {active.headlineSuffix}
            </div>
          )}

          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-lg text-stone-300 font-normal leading-relaxed max-w-xl">
            {active.subheading}
          </p>

          {/* Butchery Tech Specs */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {active.techSpecs.map((spec) => (
              <span
                key={spec}
                className="bg-stone-900/90 border border-stone-800 text-stone-300 font-mono text-xs px-2.5 py-1 rounded flex items-center gap-1.5 shadow"
              >
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>{spec}</span>
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              onClick={onExploreCatalog}
              className="bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold px-6 py-3.5 rounded-lg text-sm flex items-center gap-2 shadow-xl shadow-red-950/60 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Shop 160-Cut Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenWhatsApp}
              className="bg-[#25D366] hover:bg-[#20ba59] text-stone-950 font-bold px-5 py-3.5 rounded-lg text-sm flex items-center gap-2 shadow-xl shadow-emerald-950/50 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order via WhatsApp</span>
            </button>

            <button
              onClick={onOpenReviews}
              className="bg-stone-900/90 hover:bg-stone-800 text-stone-200 border border-stone-800 font-semibold px-4 py-3.5 rounded-lg text-xs flex items-center gap-2 transition-all cursor-pointer"
            >
              <div className="w-4 h-4 bg-[#00B67A] text-white flex items-center justify-center text-[10px] font-bold rounded-[2px]">
                ★
              </div>
              <span>TrustScore 4.4 (2,837 Reviews)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Clean Bottom Navigation & Progress Bar */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-6 flex items-center justify-between gap-4">
        {/* Progress Bar Indicators */}
        <div className="flex items-center gap-2">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => handleSelectSlide(idx)}
              className="group relative h-2 rounded-full overflow-hidden transition-all duration-300 focus:outline-none cursor-pointer"
              style={{
                width: idx === currentSlide ? '50px' : '16px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)'
              }}
              title={`Jump to slide ${idx + 1}`}
            >
              {idx === currentSlide && (
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-red-600 transition-all ease-linear"
                  style={{ width: `${progress}%` }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Slide Controls */}
        <div className="flex items-center gap-2 bg-stone-900/90 border border-stone-800 px-2 py-1 rounded-lg backdrop-blur-md">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1 text-stone-400 hover:text-white rounded transition-colors"
            title={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
          </button>
          <div className="w-[1px] h-3.5 bg-stone-800" />
          <button
            onClick={handlePrev}
            className="p-1 text-stone-400 hover:text-white rounded transition-colors"
            title="Previous slide"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <span className="text-[11px] font-mono text-stone-400 px-1">
            0{currentSlide + 1} / 0{slides.length}
          </span>
          <button
            onClick={handleNext}
            className="p-1 text-stone-400 hover:text-white rounded transition-colors"
            title="Next slide"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
