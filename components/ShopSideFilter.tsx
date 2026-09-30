'use client';

import React, { useState } from 'react';
import {
  Filter,
  X,
  ChevronDown,
  ChevronRight,
  Layers,
  Award,
  Tag,
  DollarSign,
  Scale,
  Sparkles,
  Check,
  RefreshCw,
  Flame,
  Building2,
  SlidersHorizontal
} from 'lucide-react';
import { SHOP_CATEGORIES_160, ShopCategory160 } from '@/lib/products-160-data';

export interface PriceRangeOption {
  id: string;
  label: string;
  min: number;
  max: number;
}

export const PRICE_RANGES: PriceRangeOption[] = [
  { id: 'all', label: 'All Prices', min: 0, max: 99999 },
  { id: 'under-50', label: 'Under $50 AUD (Everyday cuts)', min: 0, max: 50 },
  { id: '50-100', label: '$50 – $100 AUD (Prime cuts)', min: 50, max: 100 },
  { id: '100-250', label: '$100 – $250 AUD (Wagyu & roasts)', min: 100, max: 250 },
  { id: '250-plus', label: '$250+ AUD (Competition primals)', min: 250, max: 99999 }
];

export const MARBLING_GRADES = [
  { id: 'all', label: 'All Marbling Grades' },
  { id: 'mb8-plus', label: 'MB8–MB9+ (Competition Wagyu)' },
  { id: 'mb5-7', label: 'MB5–MB7 (Prime Reserve)' },
  { id: 'mb3-4', label: 'MB3–MB4 (Pasture MSA)' },
  { id: 'ultra-lean', label: 'Ultra-Lean / Clean Protein' }
];

interface ShopSideFilterProps {
  selectedCategory: string;
  onSelectCategory: (slug: string) => void;
  availableSubcategories: string[];
  selectedSubcategory: string;
  onSelectSubcategory: (sub: string) => void;
  allBrands: string[];
  selectedBrand: string;
  onSelectBrand: (brand: string) => void;
  selectedPriceRange: string;
  onSelectPriceRange: (rangeId: string) => void;
  selectedMarbling: string;
  onSelectMarbling: (marblingId: string) => void;
  onlyInelastic: boolean;
  onToggleInelastic: () => void;
  dryAgedOnly: boolean;
  onToggleDryAged: () => void;
  onResetAll: () => void;
  activeFilterCount: number;
  totalFilteredCount: number;
  allProductsCount: number;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

export function ShopSideFilter({
  selectedCategory,
  onSelectCategory,
  availableSubcategories,
  selectedSubcategory,
  onSelectSubcategory,
  allBrands,
  selectedBrand,
  onSelectBrand,
  selectedPriceRange,
  onSelectPriceRange,
  selectedMarbling,
  onSelectMarbling,
  onlyInelastic,
  onToggleInelastic,
  dryAgedOnly,
  onToggleDryAged,
  onResetAll,
  activeFilterCount,
  totalFilteredCount,
  allProductsCount,
  isMobileOpen,
  onCloseMobile
}: ShopSideFilterProps) {
  // Collapsible section toggles
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [subcategoriesOpen, setSubcategoriesOpen] = useState(true);
  const [brandsOpen, setBrandsOpen] = useState(true);
  const [marblingOpen, setMarblingOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);
  const [attributesOpen, setAttributesOpen] = useState(true);

  const filterContent = (
    <div className="space-y-6 text-xs text-stone-300">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between border-b border-stone-800 pb-3">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-amber-500" />
          <h2 className="font-bold text-sm text-white tracking-tight">
            Filter 160 Cuts
          </h2>
          {activeFilterCount > 0 && (
            <span className="text-[10px] font-mono text-amber-400 font-bold">
              ({activeFilterCount} Active)
            </span>
          )}
        </div>

        {activeFilterCount > 0 && (
          <button
            type="button"
            onClick={onResetAll}
            className="text-[11px] text-stone-400 hover:text-red-400 transition-colors cursor-pointer flex items-center gap-1 font-medium"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Reset All</span>
          </button>
        )}
      </div>

      {/* SECTION 1: ALL DEPARTMENTS / CATEGORIES */}
      <div className="space-y-2.5">
        <button
          type="button"
          onClick={() => setCategoriesOpen(!categoriesOpen)}
          className="w-full flex items-center justify-between text-left font-bold text-white uppercase tracking-wider text-[11px] py-1 cursor-pointer"
        >
          <span>Categories ({SHOP_CATEGORIES_160.length})</span>
          <ChevronDown className={`w-3.5 h-3.5 text-stone-500 transition-transform ${categoriesOpen ? 'rotate-180 text-amber-400' : ''}`} />
        </button>

        {categoriesOpen && (
          <div className="space-y-1 pt-1 max-h-60 overflow-y-auto pr-1 [scrollbar-width:none]">
            {/* All 160 Products */}
            <button
              type="button"
              onClick={() => {
                onSelectCategory('all');
                onSelectSubcategory('all');
              }}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-amber-950/70 border border-amber-600/60 text-amber-300 font-bold'
                  : 'bg-stone-900/60 border border-stone-850 text-stone-300 hover:bg-stone-900 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-base">🥩</span>
                <span className="truncate">All 160 Wholesale Cuts</span>
              </div>
              <span className="font-mono text-[10px] text-stone-400">
                {allProductsCount}
              </span>
            </button>

            {/* Department Categories */}
            {SHOP_CATEGORIES_160.map((cat) => {
              const isSelected = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => {
                    onSelectCategory(cat.slug);
                    onSelectSubcategory('all');
                  }}
                  className={`w-full text-left px-3 py-1.5 rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-stone-800 border border-stone-700 text-white font-bold'
                      : 'text-stone-300 hover:bg-stone-900/80 hover:text-white'
                  }`}
                >
                  <span className="truncate">{cat.name}</span>
                  <span className="font-mono text-[10px] text-stone-500 shrink-0 ml-2">
                    {cat.itemCount}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* SECTION 2: SUBCATEGORIES */}
      {availableSubcategories.length > 0 && (
        <div className="space-y-2.5 pt-3 border-t border-stone-800/80">
          <button
            type="button"
            onClick={() => setSubcategoriesOpen(!subcategoriesOpen)}
            className="w-full flex items-center justify-between text-left font-bold text-white uppercase tracking-wider text-[11px] py-1 cursor-pointer"
          >
            <span>Subcategories ({availableSubcategories.length})</span>
            <ChevronDown className={`w-3.5 h-3.5 text-stone-500 transition-transform ${subcategoriesOpen ? 'rotate-180 text-amber-400' : ''}`} />
          </button>

          {subcategoriesOpen && (
            <div className="space-y-1 pt-1 max-h-52 overflow-y-auto pr-1 [scrollbar-width:none]">
              {/* All Subcategories option */}
              <button
                type="button"
                onClick={() => onSelectSubcategory('all')}
                className={`w-full text-left px-3 py-1.5 rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                  selectedSubcategory === 'all'
                    ? 'bg-stone-800 text-amber-400 font-bold'
                    : 'text-stone-400 hover:bg-stone-900/80 hover:text-white'
                }`}
              >
                <span>All Subcategories</span>
                {selectedSubcategory === 'all' && <Check className="w-3 h-3 text-amber-400" />}
              </button>

              {availableSubcategories.map((sub) => {
                const isSelected = selectedSubcategory === sub;
                return (
                  <button
                    key={sub}
                    type="button"
                    onClick={() => onSelectSubcategory(sub)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-stone-800 text-amber-400 font-bold'
                        : 'text-stone-400 hover:bg-stone-900/80 hover:text-white'
                    }`}
                  >
                    <span className="truncate">{sub}</span>
                    {isSelected && <Check className="w-3 h-3 text-amber-400 shrink-0 ml-1.5" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* SECTION 3: PROVENANCE BRANDS & STATIONS */}
      {allBrands.length > 0 && (
        <div className="space-y-2.5 pt-3 border-t border-stone-800/80">
          <button
            type="button"
            onClick={() => setBrandsOpen(!brandsOpen)}
            className="w-full flex items-center justify-between text-left font-bold text-white uppercase tracking-wider text-[11px] py-1 cursor-pointer"
          >
            <span>Pastoral Brands ({allBrands.length})</span>
            <ChevronDown className={`w-3.5 h-3.5 text-stone-500 transition-transform ${brandsOpen ? 'rotate-180 text-amber-400' : ''}`} />
          </button>

          {brandsOpen && (
            <div className="space-y-1 pt-1 max-h-52 overflow-y-auto pr-1 [scrollbar-width:none]">
              {/* All Brands option */}
              <button
                type="button"
                onClick={() => onSelectBrand('all')}
                className={`w-full text-left px-3 py-1.5 rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                  selectedBrand === 'all'
                    ? 'bg-stone-800 text-white font-bold'
                    : 'text-stone-400 hover:bg-stone-900/80 hover:text-white'
                }`}
              >
                <span>All Producer Brands</span>
                {selectedBrand === 'all' && <Check className="w-3 h-3 text-amber-400" />}
              </button>

              {allBrands.map((brandName) => {
                const isSelected = selectedBrand === brandName;
                return (
                  <button
                    key={brandName}
                    type="button"
                    onClick={() => onSelectBrand(brandName)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-stone-800 text-amber-400 font-bold'
                        : 'text-stone-400 hover:bg-stone-900/80 hover:text-white'
                    }`}
                  >
                    <span className="truncate">{brandName}</span>
                    {isSelected && <Check className="w-3 h-3 text-amber-400 shrink-0 ml-1.5" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* SECTION 4: MARBLING SCORE & QUALITY GRADE */}
      <div className="space-y-2.5 pt-3 border-t border-stone-800/80">
        <button
          type="button"
          onClick={() => setMarblingOpen(!marblingOpen)}
          className="w-full flex items-center justify-between text-left font-bold text-white uppercase tracking-wider text-[11px] py-1 cursor-pointer"
        >
          <span>Marbling &amp; Grade</span>
          <ChevronDown className={`w-3.5 h-3.5 text-stone-500 transition-transform ${marblingOpen ? 'rotate-180 text-amber-400' : ''}`} />
        </button>

        {marblingOpen && (
          <div className="space-y-1 pt-1">
            {MARBLING_GRADES.map((grade) => {
              const isSelected = selectedMarbling === grade.id;
              return (
                <button
                  key={grade.id}
                  type="button"
                  onClick={() => onSelectMarbling(grade.id)}
                  className={`w-full text-left px-3 py-1.5 rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-stone-800 text-amber-400 font-bold'
                      : 'text-stone-400 hover:bg-stone-900/80 hover:text-white'
                  }`}
                >
                  <span className="truncate">{grade.label}</span>
                  {isSelected && <Check className="w-3 h-3 text-amber-400" />}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* SECTION 5: PRICE RANGE FILTER */}
      <div className="space-y-2.5 pt-3 border-t border-stone-800/80">
        <button
          type="button"
          onClick={() => setPriceOpen(!priceOpen)}
          className="w-full flex items-center justify-between text-left font-bold text-white uppercase tracking-wider text-[11px] py-1 cursor-pointer"
        >
          <span>Price Filter (AUD)</span>
          <ChevronDown className={`w-3.5 h-3.5 text-stone-500 transition-transform ${priceOpen ? 'rotate-180 text-amber-400' : ''}`} />
        </button>

        {priceOpen && (
          <div className="space-y-1 pt-1">
            {PRICE_RANGES.map((pr) => {
              const isSelected = selectedPriceRange === pr.id;
              return (
                <button
                  key={pr.id}
                  type="button"
                  onClick={() => onSelectPriceRange(pr.id)}
                  className={`w-full text-left px-3 py-1.5 rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-stone-800 text-amber-400 font-bold'
                      : 'text-stone-400 hover:bg-stone-900/80 hover:text-white'
                  }`}
                >
                  <span className="truncate">{pr.label}</span>
                  {isSelected && <Check className="w-3 h-3 text-amber-400" />}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* SECTION 6: SPECIAL ATTRIBUTES & TOGGLES */}
      <div className="space-y-2.5 pt-3 border-t border-stone-800/80">
        <button
          type="button"
          onClick={() => setAttributesOpen(!attributesOpen)}
          className="w-full flex items-center justify-between text-left font-bold text-white uppercase tracking-wider text-[11px] py-1 cursor-pointer"
        >
          <span>Commercial Attributes</span>
          <ChevronDown className={`w-3.5 h-3.5 text-stone-500 transition-transform ${attributesOpen ? 'rotate-180 text-amber-400' : ''}`} />
        </button>

        {attributesOpen && (
          <div className="space-y-2 pt-1">
            {/* Family Inelastic Essentials Toggle */}
            <button
              type="button"
              onClick={onToggleInelastic}
              className={`w-full text-left p-2.5 rounded-lg border transition-all flex items-center justify-between cursor-pointer ${
                onlyInelastic
                  ? 'bg-emerald-950/80 border-emerald-500/70 text-emerald-300'
                  : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:border-stone-700 hover:text-white'
              }`}
            >
              <div className="space-y-0.5">
                <div className="font-semibold text-xs flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Family Essentials Only</span>
                </div>
                <div className="text-[10px] text-stone-500">Mince, snags &amp; daily beef staples</div>
              </div>
              <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                onlyInelastic ? 'bg-emerald-500 border-emerald-400 text-stone-950' : 'border-stone-700'
              }`}>
                {onlyInelastic && <Check className="w-3 h-3 stroke-[3]" />}
              </div>
            </button>

            {/* Dry-Aged Only Toggle */}
            <button
              type="button"
              onClick={onToggleDryAged}
              className={`w-full text-left p-2.5 rounded-lg border transition-all flex items-center justify-between cursor-pointer ${
                dryAgedOnly
                  ? 'bg-amber-950/80 border-amber-500/70 text-amber-300'
                  : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:border-stone-700 hover:text-white'
              }`}
            >
              <div className="space-y-0.5">
                <div className="font-semibold text-xs flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>45-Day Dry-Aged Only</span>
                </div>
                <div className="text-[10px] text-stone-500">Sub-zero aged whole primals</div>
              </div>
              <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                dryAgedOnly ? 'bg-amber-500 border-amber-400 text-stone-950' : 'border-stone-700'
              }`}>
                {dryAgedOnly && <Check className="w-3 h-3 stroke-[3]" />}
              </div>
            </button>
          </div>
        )}
      </div>

      {/* Summary Note */}
      <div className="p-3 bg-stone-950/80 border border-stone-800/80 rounded-xl space-y-1 text-[11px] text-stone-500 font-mono">
        <div>Total Matching: <strong className="text-amber-400">{totalFilteredCount}</strong> cuts</div>
        <div>Min Allocation: <strong className="text-white">$423 AUD</strong></div>
      </div>
    </div>
  );

  return (
    <>
      {/* DESKTOP SIDEBAR VIEW (Sticky left column) */}
      <aside className="hidden lg:block w-72 shrink-0">
        <div className="sticky top-20 bg-stone-950/90 border border-stone-800/90 rounded-2xl p-5 shadow-xl backdrop-blur-md max-h-[calc(100vh-6rem)] overflow-y-auto [scrollbar-width:thin]">
          {filterContent}
        </div>
      </aside>

      {/* MOBILE DRAWER MODAL */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            onClick={onCloseMobile}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm animate-fadeIn"
          />

          {/* Drawer Slide-in */}
          <div className="relative ml-auto w-full max-w-xs sm:max-w-sm bg-stone-950 border-l border-stone-800 h-full p-6 overflow-y-auto shadow-2xl flex flex-col justify-between animate-slideInRight z-10">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                <span className="font-bold text-white text-base">Filter Catalog</span>
                <button
                  type="button"
                  onClick={onCloseMobile}
                  className="p-1.5 rounded-lg border border-stone-800 text-stone-400 hover:text-white hover:bg-stone-900 cursor-pointer"
                  aria-label="Close filters"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {filterContent}
            </div>

            {/* Mobile Apply Button */}
            <div className="pt-4 border-t border-stone-800 mt-6 sticky bottom-0 bg-stone-950">
              <button
                type="button"
                onClick={onCloseMobile}
                className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-4 rounded-xl text-xs transition-colors shadow-lg cursor-pointer"
              >
                Apply Filters ({totalFilteredCount} Cuts Found)
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
