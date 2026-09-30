'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Product160Item,
  ShopCategory160,
  SHOP_CATEGORIES_160,
  generate160Catalog,
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
  ChevronLeft,
} from 'lucide-react';

interface ShopCatalogPageClientProps {
  initialProducts: Product160Item[];
}

export function ShopCatalogPageClient({ initialProducts }: ShopCatalogPageClientProps) {
  const router = useRouter();
  const { cart, cartCount, cartTotal, addToCart, updateQuantity, removeItem, clearCart } = useCart();

  const [viewMode, setViewMode] = useState<'raw' | 'cooked'>('raw');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [addedSku, setAddedSku] = useState<string | null>(null);

  // Modals
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isWholesaleOpen, setIsWholesaleOpen] = useState(false);
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);

  // Filtered
  const filteredProducts = useMemo(() => {
    return initialProducts.filter((p) => {
      const matchCat = selectedCategory === 'all' || p.categorySlug === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchQ =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.subcategory.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [initialProducts, selectedCategory, searchQuery]);

  const ITEMS_PER_PAGE = 16;
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));
  const paginated = filteredProducts.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleAddToCart = (product: Product160Item) => {
    addToCart(product, 1);
    setAddedSku(product.sku);
    setTimeout(() => setAddedSku(null), 1500);
    setIsCartOpen(true);
  };

  const handleNavbarNavigate = (pageKey: ActivePage, categorySlug?: string) => {
    if (pageKey === 'home') {
      router.push('/');
    } else if (pageKey === 'shop') {
      if (categorySlug) {
        setSelectedCategory(categorySlug);
        setPage(1);
      } else {
        setSelectedCategory('all');
        setPage(1);
      }
    } else if (pageKey === 'contact') {
      setIsContactOpen(true);
    } else if (pageKey === 'wholesale') {
      setIsWholesaleOpen(true);
    } else if (pageKey === 'merchant-portal') {
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
          <span className="text-amber-400 font-semibold" aria-current="page">
            Wholesale Butcher Catalog (160 Individual Cuts)
          </span>
        </nav>

        {/* Catalog Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-800 pb-5">
          <div className="space-y-1">
            <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
              Farm-Gate Wholesale Allocations
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              160 Australian Butcher Cuts &amp; Primals
            </h1>
            <p className="text-sm text-stone-400 max-w-2xl">
              Each product features a dedicated page, full technical butchery specifications, dual-perspective stock photography, and direct cold-chain ordering.
            </p>
          </div>

          {/* Perspective Toggle & Search */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="bg-stone-900 border border-stone-800 p-1 rounded-xl flex items-center gap-1">
              <button
                type="button"
                onClick={() => setViewMode('raw')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'raw' ? 'bg-red-600 text-white shadow' : 'text-stone-400 hover:text-white'
                }`}
              >
                Raw Butcher
              </button>
              <button
                type="button"
                onClick={() => setViewMode('cooked')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'cooked' ? 'bg-amber-600 text-white shadow' : 'text-stone-400 hover:text-white'
                }`}
              >
                <Flame className="w-3.5 h-3.5 text-amber-300" />
                <span>Cooked / Plated</span>
              </button>
            </div>

            <div className="relative">
              <Search className="w-3.5 h-3.5 text-stone-500 absolute left-3 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setPage(1);
                }}
                placeholder="Search all 160 cuts..."
                className="bg-stone-900 border border-stone-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-red-500 w-44 sm:w-56 font-mono"
              />
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('all');
              setPage(1);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-red-600 text-white shadow'
                : 'bg-stone-900 border border-stone-800 text-stone-400 hover:text-white'
            }`}
          >
            All Departments ({initialProducts.length})
          </button>
          {SHOP_CATEGORIES_160.map((cat) => (
            <button
              key={cat.slug}
              type="button"
              onClick={() => {
                setSelectedCategory(cat.slug);
                setPage(1);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                selectedCategory === cat.slug
                  ? 'bg-red-600 text-white shadow'
                  : 'bg-stone-900 border border-stone-800 text-stone-400 hover:text-white'
              }`}
            >
              {cat.name} ({cat.itemCount})
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {paginated.map((p) => {
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
                        <span>Individual Page</span>
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
                        title="Add cut to cart"
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pt-6 border-t border-stone-800 flex items-center justify-between">
            <button
              type="button"
              disabled={page === 1}
              onClick={() => {
                setPage((p) => Math.max(1, p - 1));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 ${
                page === 1 ? 'opacity-40 cursor-not-allowed text-stone-500' : 'bg-stone-900 text-stone-200 hover:bg-stone-800 cursor-pointer'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <span className="text-xs font-mono text-stone-400">
              Page {page} of {totalPages} ({filteredProducts.length} Cuts)
            </span>

            <button
              type="button"
              disabled={page === totalPages}
              onClick={() => {
                setPage((p) => Math.min(totalPages, p + 1));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 ${
                page === totalPages ? 'opacity-40 cursor-not-allowed text-stone-500' : 'bg-stone-900 text-stone-200 hover:bg-stone-800 cursor-pointer'
              }`}
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
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
