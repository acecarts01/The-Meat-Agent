'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Layers, Tag } from 'lucide-react';
import { SHOP_CATEGORIES_160 } from '@/lib/products-160-data';

interface ShopCategorySliderProps {
  selectedCategory: string;
  onSelectCategory: (categorySlug: string) => void;
  selectedSubcategory: string;
  onSelectSubcategory: (sub: string) => void;
  availableSubcategories: string[];
}

export function ShopCategorySlider({
  selectedCategory,
  onSelectCategory,
  selectedSubcategory,
  onSelectSubcategory,
  availableSubcategories
}: ShopCategorySliderProps) {
  const categoryScrollRef = useRef<HTMLDivElement>(null);
  const subScrollRef = useRef<HTMLDivElement>(null);

  const scrollCategories = (direction: 'left' | 'right') => {
    if (categoryScrollRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      categoryScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollSubs = (direction: 'left' | 'right') => {
    if (subScrollRef.current) {
      const scrollAmount = direction === 'left' ? -220 : 220;
      subScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-3">
      {/* 1. Primary Category Slider (Short slider with prev/next arrows - Fixes screenshot) */}
      <div className="relative flex items-center bg-stone-950 border border-stone-800/90 rounded-2xl p-1.5 shadow-md">
        {/* Left Arrow */}
        <button
          onClick={() => scrollCategories('left')}
          className="p-2 text-stone-400 hover:text-white bg-stone-900/90 hover:bg-stone-800 rounded-xl border border-stone-800 transition-colors shrink-0 z-10 cursor-pointer shadow"
          title="Scroll categories left"
          aria-label="Scroll categories left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Scrollable Track (Zero native scrollbar, generous padding, zero overlapping text) */}
        <div
          ref={categoryScrollRef}
          className="flex items-center gap-2 overflow-x-auto scroll-smooth py-1 px-2.5 mx-1 flex-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {/* All 160 Products Pill */}
          <button
            onClick={() => {
              onSelectCategory('all');
              onSelectSubcategory('all');
            }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 cursor-pointer shadow-sm ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold shadow-md shadow-red-950/60 ring-1 ring-red-400/40'
                : 'bg-stone-900 border border-stone-800 text-stone-300 hover:text-white hover:bg-stone-850 hover:border-stone-700'
            }`}
          >
            <span>All 160 Cuts</span>
            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                selectedCategory === 'all'
                  ? 'bg-black/40 text-amber-200'
                  : 'bg-stone-950 text-stone-400 border border-stone-800'
              }`}
            >
              160
            </span>
          </button>

          {/* 11 Department Pills */}
          {SHOP_CATEGORIES_160.map((cat) => {
            const isSelected = selectedCategory === cat.slug;

            return (
              <button
                key={cat.slug}
                onClick={() => {
                  onSelectCategory(cat.slug);
                  onSelectSubcategory('all');
                }}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 cursor-pointer shadow-sm ${
                  isSelected
                    ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold shadow-md shadow-red-950/60 ring-1 ring-red-400/40'
                    : 'bg-stone-900 border border-stone-800 text-stone-300 hover:text-white hover:bg-stone-850 hover:border-stone-700'
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                    isSelected
                      ? 'bg-black/40 text-amber-200'
                      : 'bg-stone-950 text-stone-400 border border-stone-800'
                  }`}
                >
                  {cat.itemCount}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scrollCategories('right')}
          className="p-2 text-stone-400 hover:text-white bg-stone-900/90 hover:bg-stone-800 rounded-xl border border-stone-800 transition-colors shrink-0 z-10 cursor-pointer shadow"
          title="Scroll categories right"
          aria-label="Scroll categories right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* 2. Secondary Subcategory Slider / Filter (Only shown when subcategories exist) */}
      {availableSubcategories.length > 0 && (
        <div className="relative flex items-center bg-stone-900/60 border border-stone-800/80 rounded-xl p-1">
          <button
            onClick={() => scrollSubs('left')}
            className="p-1.5 text-stone-400 hover:text-white transition-colors shrink-0 cursor-pointer"
            aria-label="Scroll subcategories left"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>

          <div
            ref={subScrollRef}
            className="flex items-center gap-1.5 overflow-x-auto scroll-smooth py-0.5 px-2 flex-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            <span className="text-[11px] font-mono text-stone-500 uppercase tracking-wider pl-1 pr-2 shrink-0 flex items-center gap-1">
              <Tag className="w-3 h-3 text-stone-600" />
              <span>Subcuts:</span>
            </span>

            <button
              onClick={() => onSelectSubcategory('all')}
              className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors shrink-0 cursor-pointer ${
                selectedSubcategory === 'all'
                  ? 'bg-stone-800 text-amber-400 font-bold border border-amber-500/40'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
              }`}
            >
              All Subcuts
            </button>

            {availableSubcategories.map((sub) => {
              const isSubSelected = selectedSubcategory === sub;

              return (
                <button
                  key={sub}
                  onClick={() => onSelectSubcategory(sub)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors shrink-0 cursor-pointer ${
                    isSubSelected
                      ? 'bg-stone-800 text-amber-400 font-bold border border-amber-500/40'
                      : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
                  }`}
                >
                  {sub}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => scrollSubs('right')}
            className="p-1.5 text-stone-400 hover:text-white transition-colors shrink-0 cursor-pointer"
            aria-label="Scroll subcategories right"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
