'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
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
      bgImage: "/images/products/beef/Beef_0053.webp",
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
      bgImage: "/images/products/beef/Beef_0062.webp",
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
      bgImage: "/images/blog/Hero_MeatBoxes_019.webp",
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
      bgImage: "/images/blog/Hero_MeatBoxes_020.webp",
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
      {/* Background Slides — Ken Burns zoom+pan, warm spotlight, light sweep */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out pointer-events-none ${
            idx === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={slide.bgImage}
            alt={slide.headlinePrefix}
            fill
            priority={idx === 0}
            loading={idx === 0 ? undefined : 'eager'}
            sizes="100vw"
            className={`object-cover brightness-110 saturate-[1.08] ${
              idx === currentSlide ? 'hero-kenburns' : ''
            }`}
          />

          {/* Warm studio spotlight glow behind the product, right-of-centre */}
          <div
            className="absolute inset-0 mix-blend-soft-light opacity-90"
            style={{
              background:
                'radial-gradient(ellipse 60% 70% at 72% 50%, rgba(255,196,110,0.55) 0%, rgba(255,196,110,0.18) 35%, transparent 70%)'
            }}
          />

          {/* Diagonal light sweep — subtle, repeats slowly, adds life without hiding the product */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={`absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/12 to-transparent ${
                idx === currentSlide ? 'hero-sweep' : ''
              }`}
            />
          </div>

          {/* Text-legibility scrim: strong only behind the copy (left), light over the product (right) */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/70 to-stone-950/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/30" />
        </div>
      ))}

      <style jsx global>{`
        @keyframes heroKenBurns {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.14) translate(-1.5%, -1%); }
        }
        .hero-kenburns {
          animation: heroKenBurns 9000ms ease-out forwards;
        }
        @keyframes heroSweep {
          0% { transform: translateX(-120%) skewX(-12deg); opacity: 0; }
          15% { opacity: 1; }
          40% { opacity: 0; }
          100% { transform: translateX(220%) skewX(-12deg); opacity: 0; }
        }
        .hero-sweep {
          animation: heroSweep 6000ms ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-kenburns, .hero-sweep { animation: none !important; }
        }
      `}</style>

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
