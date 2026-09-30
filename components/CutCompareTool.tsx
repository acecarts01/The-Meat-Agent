'use client';

import React, { useState } from 'react';
import { Product160Item } from '@/lib/products-160-data';
import {
  Scale,
  X,
  ArrowRight,
  Flame,
  Award,
  Thermometer,
  ShieldCheck,
  Check
} from 'lucide-react';

interface CutCompareToolProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product160Item[];
  onAddToCart: (product: Product160Item) => void;
}

export function CutCompareTool({ isOpen, onClose, products, onAddToCart }: CutCompareToolProps) {
  // Allow user to select two products to compare side-by-side
  const [skuA, setSkuA] = useState<string>(products[0]?.sku || '');
  const [skuB, setSkuB] = useState<string>(products[4]?.sku || '');

  if (!isOpen) return null;

  const itemA = products.find(p => p.sku === skuA) || products[0];
  const itemB = products.find(p => p.sku === skuB) || products[1];

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="bg-stone-900 border border-stone-800 rounded-2xl max-w-4xl w-full p-6 space-y-6 shadow-2xl relative text-stone-100 max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-white p-1 rounded-full hover:bg-stone-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-600/50 flex items-center justify-center text-purple-400">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-black text-white">Butchery Technical Cut Comparator</h3>
            <p className="text-xs text-stone-400">Side-by-side marbling, fat trim, cooking profiles, and wholesale yield comparison</p>
          </div>
        </div>

        {/* Selection Pickers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-amber-400 mb-1">Select Cut A:</label>
            <select
              value={skuA}
              onChange={(e) => setSkuA(e.target.value)}
              className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500 font-mono"
            >
              {products.map(p => (
                <option key={p.sku} value={p.sku}>
                  [{p.sku}] {p.name} — ${p.price.toFixed(2)} AUD
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-cyan-400 mb-1">Select Cut B:</label>
            <select
              value={skuB}
              onChange={(e) => setSkuB(e.target.value)}
              className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono"
            >
              {products.map(p => (
                <option key={p.sku} value={p.sku}>
                  [{p.sku}] {p.name} — ${p.price.toFixed(2)} AUD
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Card A */}
          {itemA && (
            <div className="bg-stone-950 border border-stone-800 rounded-xl p-5 space-y-4">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-stone-900 border border-stone-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={itemA.images.rawFallback} alt={itemA.name} className="w-full h-full object-cover" />
                <span className="absolute top-2 left-2 bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {itemA.badge}
                </span>
                <span className="absolute top-2 right-2 bg-stone-900/90 text-stone-300 font-mono text-[10px] px-2 py-0.5 rounded">
                  {itemA.sku}
                </span>
              </div>

              <div>
                <span className="text-xs text-amber-500 font-mono">{itemA.category} • {itemA.weight}</span>
                <h4 className="text-base font-bold text-white mt-0.5">{itemA.name}</h4>
                <div className="text-xl font-black text-white font-mono mt-1">${itemA.price.toFixed(2)} AUD</div>
              </div>

              {/* Technical Matrix */}
              <div className="space-y-2 text-xs divide-y divide-stone-800/80 font-mono">
                <div className="pt-2 flex justify-between">
                  <span className="text-stone-400">Marbling Grade:</span>
                  <span className="font-bold text-emerald-400">{itemA.marbling}</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-stone-400">Aging Profile:</span>
                  <span className="text-stone-300">{itemA.dryAging}</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-stone-400">Cold-Chain Spec:</span>
                  <span className="text-stone-300">&lt;2.5°C Sealed</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-stone-400">Target SEO Term:</span>
                  <span className="text-cyan-400 font-sans">{itemA.targetKeyword}</span>
                </div>
              </div>

              <p className="text-xs text-stone-400 font-sans leading-relaxed">{itemA.shortDescription}</p>

              <button
                onClick={() => onAddToCart(itemA)}
                className="w-full bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold py-2.5 rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                Add Cut A to Cart (${itemA.price.toFixed(2)})
              </button>
            </div>
          )}

          {/* Card B */}
          {itemB && (
            <div className="bg-stone-950 border border-stone-800 rounded-xl p-5 space-y-4">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-stone-900 border border-stone-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={itemB.images.rawFallback} alt={itemB.name} className="w-full h-full object-cover" />
                <span className="absolute top-2 left-2 bg-cyan-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {itemB.badge}
                </span>
                <span className="absolute top-2 right-2 bg-stone-900/90 text-stone-300 font-mono text-[10px] px-2 py-0.5 rounded">
                  {itemB.sku}
                </span>
              </div>

              <div>
                <span className="text-xs text-cyan-400 font-mono">{itemB.category} • {itemB.weight}</span>
                <h4 className="text-base font-bold text-white mt-0.5">{itemB.name}</h4>
                <div className="text-xl font-black text-white font-mono mt-1">${itemB.price.toFixed(2)} AUD</div>
              </div>

              {/* Technical Matrix */}
              <div className="space-y-2 text-xs divide-y divide-stone-800/80 font-mono">
                <div className="pt-2 flex justify-between">
                  <span className="text-stone-400">Marbling Grade:</span>
                  <span className="font-bold text-emerald-400">{itemB.marbling}</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-stone-400">Aging Profile:</span>
                  <span className="text-stone-300">{itemB.dryAging}</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-stone-400">Cold-Chain Spec:</span>
                  <span className="text-stone-300">&lt;2.5°C Sealed</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-stone-400">Target SEO Term:</span>
                  <span className="text-cyan-400 font-sans">{itemB.targetKeyword}</span>
                </div>
              </div>

              <p className="text-xs text-stone-400 font-sans leading-relaxed">{itemB.shortDescription}</p>

              <button
                onClick={() => onAddToCart(itemB)}
                className="w-full bg-cyan-600 hover:bg-cyan-500 text-stone-950 font-bold py-2.5 rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                Add Cut B to Cart (${itemB.price.toFixed(2)})
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
