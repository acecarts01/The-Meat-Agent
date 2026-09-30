'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Product160Item,
  ShopCategory160,
  SHOP_CATEGORIES_160,
} from '@/lib/products-160-data';
import { useCart } from '@/lib/cart-store';
import { Navbar, ActivePage } from '@/components/Navbar';
import { CartAndCheckoutModal } from '@/components/CartAndCheckoutModal';
import { ContactModal } from '@/components/ContactModal';
import { WholesaleModal } from '@/components/WholesaleModal';
import { OrderTrackingModal } from '@/components/OrderTrackingModal';
import {
  ChevronRight,
  Flame,
  Award,
  Layers,
  ArrowRight,
  Plus,
  MessageCircle,
  ExternalLink,
  Filter,
  Check,
  Star,
  Search,
} from 'lucide-react';

interface CategoryPageClientProps {
  category: ShopCategory160;
  products: Product160Item[];
}

export function CategoryPageClient({ category, products }: CategoryPageClientProps) {
  const router = useRouter();
  const { cart, cartCount, cartTotal, addToCart, updateQuantity, removeItem, clearCart } = useCart();

  const [viewMode, setViewMode] = useState<'raw' | 'cooked'>('raw');
  const [selectedSub, setSelectedSub] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [addedSku, setAddedSku] = useState<string | null>(null);

  // Modals
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isWholesaleOpen, setIsWholesaleOpen] = useState(false);
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);

  // Subcategories
  const subcategories = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => {
      if (p.subcategory) set.add(p.subcategory);
    });
    return Array.from(set).sort();
  }, [products]);

  // Filtered products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchSub = selectedSub === 'all' || p.subcategory === selectedSub;
      const q = searchQuery.toLowerCase().trim();
      const matchQ =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q);
      return matchSub && matchQ;
    });
  }, [products, selectedSub, searchQuery]);

  const handleAddToCart = (product: Product160Item) => {
    addToCart(product, 1);
    setAddedSku(product.sku);
    setTimeout(() => setAddedSku(null), 1500);
    setIsCartOpen(true);
  };

  const handleNavbarNavigate = (page: ActivePage, categorySlug?: string) => {
    if (page === 'home') {
      router.push('/');
    } else if (page === 'shop') {
      if (categorySlug) {
        router.push(`/shop/${categorySlug}/`);
      } else {
        router.push('/shop/');
      }
    } else if (page === 'contact') {
      setIsContactOpen(true);
    } else if (page === 'wholesale') {
      setIsWholesaleOpen(true);
    } else if (page === 'merchant-portal') {
      router.push('/merchant-portal');
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0a09] text-stone-100 flex flex-col font-sans antialiased">
      <Navbar
        currentPage="shop"
        onNavigate={handleNavbarNavigate}
        cartCount={cartCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenWholesale={() => setIsWholesaleOpen(true)}
        onOpenTracking={() => setIsTrackingOpen(true)}
      />

      <main id="main" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs text-stone-400 flex flex-wrap items-center gap-1.5 font-mono">
          <Link href="/" className="hover:text-amber-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
          <Link href="/shop/" className="hover:text-amber-400 transition-colors">
            Shop Catalog
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
          <span className="text-amber-400 font-semibold" aria-current="page">
            {category.name}
          </span>
        </nav>

        {/* Category Hero Banner */}
        <div className="relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 p-6 sm:p-8 md:p-10 shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-500" />
              <span>{category.itemCount} MSA &amp; Farm-Gate Verified Cuts</span>
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {category.name}
            </h1>
            <p className="text-sm text-stone-300 leading-relaxed">
              {category.heroTagline}. Every cut is individually vacuum-sealed in sub-zero cryovac pouches with guaranteed thermal integrity.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="bg-stone-950/90 border border-stone-700/80 text-xs font-mono text-stone-300 px-3 py-1 rounded-lg">
                Demand Rank #{category.inelasticRank} ({category.inelasticTier})
              </span>
              <span className="bg-emerald-950/80 border border-emerald-700/80 text-xs font-mono text-emerald-300 px-3 py-1 rounded-lg">
                &lt;2.5°C Refrigerated Delivery
              </span>
            </div>
          </div>
        </div>

        {/* Filter & View Mode Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-stone-900/80 border border-stone-800 rounded-xl">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedSub('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                selectedSub === 'all'
                  ? 'bg-red-600 text-white'
                  : 'bg-stone-950 border border-stone-800 text-stone-300 hover:text-white'
              }`}
            >
              All {category.name} ({products.length})
            </button>
            {subcategories.map((sub) => (
              <button
                key={sub}
                type="button"
                onClick={() => setSelectedSub(sub)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  selectedSub === sub
                    ? 'bg-red-600 text-white'
                    : 'bg-stone-950 border border-stone-800 text-stone-300 hover:text-white'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Raw vs Cooked Toggle */}
            <div className="bg-stone-950 border border-stone-800 p-1 rounded-lg flex items-center gap-1">
              <button
                type="button"
                onClick={() => setViewMode('raw')}
                className={`px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'raw' ? 'bg-red-600 text-white shadow' : 'text-stone-400 hover:text-white'
                }`}
              >
                Raw View
              </button>
              <button
                type="button"
                onClick={() => setViewMode('cooked')}
                className={`px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                  viewMode === 'cooked' ? 'bg-amber-600 text-white shadow' : 'text-stone-400 hover:text-white'
                }`}
              >
                <Flame className="w-3 h-3 text-amber-300" />
                <span>Cooked View</span>
              </button>
            </div>

            {/* Keyword Search */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-stone-500 absolute left-2.5 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search cuts..."
                className="bg-stone-950 border border-stone-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-red-500 w-36 sm:w-44 font-mono"
              />
            </div>
          </div>
        </div>

        {/* Product Cards Grid with Direct Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProducts.map((p) => {
            const currentImg = viewMode === 'raw' ? p.images.rawFallback : p.images.cookedFallback;

            return (
              <div
                key={p.sku}
                className="bg-stone-900 border border-stone-800 hover:border-red-500/60 rounded-xl overflow-hidden flex flex-col justify-between group transition-all"
              >
                <Link
                  href={`/shop/${p.categorySlug}/${p.slug}/`}
                  className="relative aspect-[4/3] bg-stone-950 overflow-hidden block"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={currentImg}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
                    <span className="bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase shadow">
                      {p.badge}
                    </span>
                    {p.inelastic && (
                      <span className="bg-emerald-950/90 text-emerald-300 text-[8px] font-semibold px-1 py-0.2 rounded border border-emerald-600/50">
                        Inelastic
                      </span>
                    )}
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="bg-stone-950/90 text-stone-400 font-mono text-[9px] px-1.5 py-0.5 rounded border border-stone-800">
                      {p.sku}
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-2 bg-stone-950/90 text-[10px] text-amber-300 font-mono px-1.5 py-0.5 rounded">
                    {p.marbling}
                  </div>
                </Link>

                <div className="p-3.5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="text-[10px] text-amber-500 font-mono flex items-center justify-between">
                      <span className="truncate">{p.subcategory}</span>
                      <span className="text-stone-400 shrink-0 ml-1">{p.weight}</span>
                    </div>

                    <Link
                      href={`/shop/${p.categorySlug}/${p.slug}/`}
                      className="font-bold text-sm text-stone-100 group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug mt-1 block"
                    >
                      {p.name}
                    </Link>

                    <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                      {p.shortDescription}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-stone-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-base font-black text-amber-400 font-mono">
                        ${p.price.toFixed(2)} AUD
                      </div>
                      <div className="text-[10px] text-stone-500 font-mono">
                        {p.brand}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/shop/${p.categorySlug}/${p.slug}/`}
                        className="flex-1 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold py-2 px-2.5 rounded-lg text-center transition-colors flex items-center justify-center gap-1"
                      >
                        <span>Product Page</span>
                        <ArrowRight className="w-3 h-3 text-amber-400" />
                      </Link>

                      <button
                        type="button"
                        onClick={() => handleAddToCart(p)}
                        className={`text-xs font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-1 transition-all cursor-pointer ${
                          addedSku === p.sku
                            ? 'bg-emerald-600 text-white'
                            : 'bg-red-600 hover:bg-red-500 text-white'
                        }`}
                        title="Add to allocation cart"
                      >
                        {addedSku === p.sku ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <CartAndCheckoutModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onClearCart={clearCart}
      />

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <WholesaleModal isOpen={isWholesaleOpen} onClose={() => setIsWholesaleOpen(false)} />
      <OrderTrackingModal isOpen={isTrackingOpen} onClose={() => setIsTrackingOpen(false)} />
    </div>
  );
}
