'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  Check,
  Copy,
  Share2,
  Plus,
  Minus,
  MessageCircle,
  Truck,
  ShieldCheck,
  Thermometer,
  Award,
  Layers,
  ChevronRight,
  Flame,
  Scale,
  Sparkles,
  ShoppingBag,
  ArrowRight,
  Clock,
  MapPin,
  Lock,
  Star,
  CheckCircle2,
  Info,
  ExternalLink,
} from 'lucide-react';

interface ProductDetailClientProps {
  product: Product160Item;
  category: ShopCategory160 | undefined;
  relatedProducts: Product160Item[];
}

export function ProductDetailClient({
  product,
  category,
  relatedProducts,
}: ProductDetailClientProps) {
  const router = useRouter();
  const { cart, cartCount, cartTotal, addToCart, updateQuantity, removeItem, clearCart } = useCart();

  // State
  const [viewMode, setViewMode] = useState<'raw' | 'cooked'>('raw');
  const [quantity, setQuantity] = useState<number>(1);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [addedAnimation, setAddedAnimation] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'specs' | 'cook' | 'coldchain' | 'wholesale'>('specs');

  // Modals
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [isWholesaleOpen, setIsWholesaleOpen] = useState<boolean>(false);
  const [isTrackingOpen, setIsTrackingOpen] = useState<boolean>(false);

  // Direct Product URL
  const currentUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/shop/${product.categorySlug}/${product.slug}/`
    : `https://themeatdirect.com.au/shop/${product.categorySlug}/${product.slug}/`;

  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1800);
    setIsCartOpen(true);
  };

  const handleWhatsAppOrder = () => {
    const text = `Hello The Meat Agent Concierge! I want to order/inquire about:
• Product: ${product.name}
• SKU: ${product.sku}
• Quantity: ${quantity}
• Unit Price: $${product.price.toFixed(2)} AUD
• Direct Link: ${currentUrl}`;
    window.open(`https://wa.me/61480804189?text=${encodeURIComponent(text)}`, '_blank');
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

  // Image source
  const currentImage = viewMode === 'raw' ? product.images.rawFallback : product.images.cookedFallback;

  return (
    <div className="min-h-screen bg-[#0c0a09] text-stone-100 flex flex-col font-sans selection:bg-red-900 selection:text-white antialiased">
      {/* Universal Top Navigation */}
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

      {/* Main Product Container */}
      <main id="main" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
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
          <Link
            href={`/shop/${product.categorySlug}/`}
            className="text-stone-300 hover:text-amber-400 transition-colors font-medium"
          >
            {category?.name || product.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
          <span className="text-amber-400 truncate max-w-[240px] sm:max-w-md font-semibold" aria-current="page">
            {product.name}
          </span>
        </nav>

        {/* Product Hero 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT COLUMN: Dual-Perspective Imagery & Visual Spec (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl bg-stone-950 border border-stone-800 overflow-hidden shadow-2xl group">
              <Image
                src={currentImage}
                alt={`${product.name} - ${viewMode === 'raw' ? 'Raw Butcher Specification cut' : 'Cooked / Plated Presentation'}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Angle Indicator Pill */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 items-start">
                <span className="bg-red-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>{product.badge}</span>
                </span>
                {product.inelastic && (
                  <span className="bg-emerald-950/95 border border-emerald-500/80 text-emerald-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-lg">
                    Inelastic Allocation
                  </span>
                )}
              </div>

              {/* SKU & Barcode Stamp */}
              <div className="absolute top-4 right-4">
                <span className="bg-stone-950/90 backdrop-blur-md text-stone-300 border border-stone-700/80 font-mono text-xs px-2.5 py-1 rounded-lg shadow-lg">
                  SKU: {product.sku}
                </span>
              </div>

              {/* Stock Doubler Perspective Switcher Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
                <div className="bg-stone-950/90 backdrop-blur-md border border-stone-800 p-1.5 rounded-xl shadow-xl flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setViewMode('raw')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      viewMode === 'raw'
                        ? 'bg-red-600 text-white shadow-md'
                        : 'text-stone-400 hover:text-white hover:bg-stone-900'
                    }`}
                  >
                    <span>Raw Butcher Cut</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('cooked')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      viewMode === 'cooked'
                        ? 'bg-amber-600 text-white shadow-md'
                        : 'text-stone-400 hover:text-white hover:bg-stone-900'
                    }`}
                  >
                    <Flame className="w-3.5 h-3.5 text-amber-300" />
                    <span>Plated / Cooked</span>
                  </button>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 bg-stone-950/90 backdrop-blur-md border border-stone-800 px-3 py-1.5 rounded-xl text-[11px] font-mono text-amber-300">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{viewMode === 'raw' ? 'Pre-Cook Trim & Marbling' : 'Seared Crust & Grain'}</span>
                </div>
              </div>
            </div>

            {/* Thumbnail Switchers & Direct Link Share Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 bg-stone-900/60 border border-stone-800/80 rounded-xl">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setViewMode('raw')}
                  className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    viewMode === 'raw' ? 'border-red-500 scale-105' : 'border-stone-800 opacity-60 hover:opacity-100'
                  }`}
                  title="View Raw Butcher Cut"
                >
                  <Image src={product.images.rawFallback} alt="Raw View" fill sizes="64px" className="object-cover" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('cooked')}
                  className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    viewMode === 'cooked' ? 'border-amber-500 scale-105' : 'border-stone-800 opacity-60 hover:opacity-100'
                  }`}
                  title="View Plated Cooked Presentation"
                >
                  <Image src={product.images.cookedFallback} alt="Cooked View" fill sizes="64px" className="object-cover" />
                </button>
                <div className="text-[11px] text-stone-400 font-mono pl-1">
                  Dual-angle butcher verification
                </div>
              </div>

              {/* Direct Link Share & Copy Button */}
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg text-xs font-mono transition-colors cursor-pointer border border-stone-700"
                  title="Copy permanent product link"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">URL Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-amber-400" />
                      <span>Copy Product Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Sub-Zero Cold-Chain Transport Guarantee Banner */}
            <div className="p-4 bg-gradient-to-r from-blue-950/40 via-stone-900 to-stone-900 border border-blue-900/50 rounded-xl flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-blue-950 border border-blue-700/60 flex items-center justify-center text-blue-400 shrink-0">
                <Thermometer className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h2 className="text-xs font-bold text-blue-200 uppercase tracking-wider font-mono">
                  {product.thermalRetention}
                </h2>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Packed in heavy-gauge commercial EPS insulated thermal shippers with frozen food-grade gel blocks. Guaranteed to arrive below 2.5°C across QLD, NSW &amp; VIC refrigerated corridors.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Product Technical Specifications & Purchasing Desk (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Department & Subcategory */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-amber-500" />
                  <span>{product.subcategory}</span>
                </span>
                <span className="text-stone-400 bg-stone-900 px-2 py-0.5 rounded border border-stone-800">
                  {product.weight} Pack
                </span>
              </div>

              {/* Single H1 per page as required */}
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                {product.name}
              </h1>

              {/* Verified Trustpilot Rating Bar */}
              <div className="flex items-center gap-2 text-xs pt-1">
                <div className="flex text-[#00B67A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-stone-300 font-semibold">4.4 / 5.0</span>
                <span className="text-stone-500">•</span>
                <span className="text-stone-400 font-mono">2,837 Verified Reviews</span>
              </div>
            </div>

            {/* Price Card & Wholesale Value */}
            <div className="bg-stone-900/90 border border-stone-800 p-5 rounded-2xl space-y-3">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-xs font-mono text-stone-400 uppercase">Farm-Gate Allocation Price</div>
                  <div className="text-3xl font-black text-amber-400 font-mono tracking-tight mt-0.5">
                    ${product.price.toFixed(2)} <span className="text-sm font-bold text-stone-400">AUD</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-block bg-emerald-950/80 text-emerald-400 border border-emerald-800/80 text-[11px] font-mono px-2 py-0.5 rounded">
                    10% Off with Crypto
                  </span>
                  <div className="text-[11px] text-stone-400 font-mono mt-1">
                    ${(product.price * 0.9).toFixed(2)} AUD with BTC/USDT
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-800/80 text-xs text-stone-300 flex items-center justify-between">
                <span className="text-stone-400 font-mono">Producer Brand:</span>
                <span className="text-white font-semibold">{product.brand}</span>
              </div>
            </div>

            {/* Short Narrative Description */}
            <p className="text-sm text-stone-300 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Technical Specification Matrix (Quick Table) */}
            <div className="grid grid-cols-2 gap-2.5 p-3.5 bg-stone-950 border border-stone-800/90 rounded-xl text-xs font-mono">
              <div className="space-y-0.5">
                <span className="text-stone-500 text-[10px] uppercase">Marbling Grade:</span>
                <div className="text-amber-400 font-bold">{product.marbling}</div>
              </div>
              <div className="space-y-0.5">
                <span className="text-stone-500 text-[10px] uppercase">Dry-Aging Profile:</span>
                <div className="text-stone-200 font-semibold">{product.dryAging}</div>
              </div>
              <div className="space-y-0.5">
                <span className="text-stone-500 text-[10px] uppercase">Portion Weight:</span>
                <div className="text-stone-200">{product.weight}</div>
              </div>
              <div className="space-y-0.5">
                <span className="text-stone-500 text-[10px] uppercase">Cold-Chain Rating:</span>
                <div className="text-emerald-400 font-semibold">&lt;2.5°C Sealed</div>
              </div>
            </div>

            {/* Quantity Selector & Add to Cart Desk */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                {/* Quantity Input */}
                <div className="flex items-center bg-stone-900 border border-stone-800 rounded-xl p-1 shrink-0">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-2 hover:bg-stone-800 text-stone-300 hover:text-white rounded-lg transition-colors cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center font-mono font-bold text-sm text-white">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-2 hover:bg-stone-800 text-stone-300 hover:text-white rounded-lg transition-colors cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Primary Add to Cart Button */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`flex-1 font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xl ${
                    addedAnimation
                      ? 'bg-emerald-600 text-white scale-[1.02]'
                      : 'bg-red-600 hover:bg-red-500 text-white hover:shadow-red-950/60'
                  }`}
                >
                  {addedAnimation ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Allocation Cart!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Allocation Cart • ${(product.price * quantity).toFixed(2)} AUD</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct Concierge WhatsApp Action */}
              <button
                type="button"
                onClick={handleWhatsAppOrder}
                className="w-full bg-stone-900 hover:bg-stone-850 border border-stone-800 hover:border-emerald-500/50 text-[#25D366] hover:text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Instant WhatsApp Concierge Order (SKU: {product.sku})</span>
              </button>
            </div>

            {/* Wholesale Rules & Minimum Order Callout */}
            <div className="p-4 bg-stone-900/60 border border-stone-800 rounded-xl space-y-2 text-xs">
              <div className="font-bold text-stone-200 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-amber-400 font-mono">
                  <ShieldCheck className="w-4 h-4 text-amber-500" />
                  Wholesale Settlement Rules
                </span>
                <span className="text-stone-400 font-mono text-[11px]">ABN Verified</span>
              </div>
              <ul className="text-stone-400 space-y-1 text-[11px] leading-relaxed">
                <li>• Minimum order allocation: <strong className="text-white font-mono">$423.00 AUD</strong> across store</li>
                <li>• Free cold-chain refrigerated delivery on orders <strong className="text-emerald-400 font-mono">over $2,000 AUD</strong></li>
                <li>• 10% auto-discount applied instantly on Bitcoin (BTC) &amp; USDT payments</li>
                <li>• Settlement Rails: PayID (Osko instant), Direct Bank Wire, Crypto</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* COMPREHENSIVE BUTCHERY SPECIFICATION TABS */}
        {/* ========================================================================= */}
        <section aria-labelledby="butchery-spec-heading" className="pt-8 border-t border-stone-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                Technical Butchery Dossier
              </span>
              <h2 id="butchery-spec-heading" className="text-xl sm:text-2xl font-black text-white tracking-tight mt-1">
                Cutting Anatomy, Culinary Temperature &amp; Cold-Chain Integrity
              </h2>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap items-center gap-1 bg-stone-900 p-1 rounded-xl border border-stone-800 self-start">
              <button
                type="button"
                onClick={() => setActiveTab('specs')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === 'specs' ? 'bg-red-600 text-white' : 'text-stone-400 hover:text-white'
                }`}
              >
                Butcher Notes
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('cook')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === 'cook' ? 'bg-red-600 text-white' : 'text-stone-400 hover:text-white'
                }`}
              >
                Cooking Guide
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('coldchain')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === 'coldchain' ? 'bg-red-600 text-white' : 'text-stone-400 hover:text-white'
                }`}
              >
                Cold-Chain Freight
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('wholesale')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === 'wholesale' ? 'bg-red-600 text-white' : 'text-stone-400 hover:text-white'
                }`}
              >
                Wholesale Terms
              </button>
            </div>
          </div>

          {/* Tab 1: Butcher Notes */}
          {activeTab === 'specs' && (
            <div className="bg-stone-900/80 border border-stone-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Scale className="w-4 h-4 text-red-500" />
                <span>Butcher Cutting, Silver Skin Removal &amp; Marbling Notes</span>
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                Hand-cut from MSA-accredited southern Australian prime cattle and heritage breeds. Every cut is individually pre-trimmed of heavy external tallow, inspected for intramuscular fat distribution, and precision vacuum-sealed in heavy-duty cryovac pouches to protect moisture and eliminate oxidation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-1">
                  <div className="text-xs font-mono text-amber-400 font-bold uppercase">Primal Anatomy</div>
                  <div className="text-xs text-stone-300">{product.subcategory} cut directly from whole primal</div>
                </div>
                <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-1">
                  <div className="text-xs font-mono text-amber-400 font-bold uppercase">Aging Profile</div>
                  <div className="text-xs text-stone-300">{product.dryAging} in temperature-calibrated chambers</div>
                </div>
                <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-1">
                  <div className="text-xs font-mono text-amber-400 font-bold uppercase">Cryovac Integrity</div>
                  <div className="text-xs text-stone-300">Sub-zero leak-proof vacuum seal with 21-day fresh chilled life</div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Cooking Guide */}
          {activeTab === 'cook' && (
            <div className="bg-stone-900/80 border border-stone-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-500" />
                <span>Pitmaster Reverse-Sear &amp; Target Internal Core Temperatures</span>
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                For optimal juiciness and tenderness, bring the cut to room temperature for 30 minutes prior to cooking. Season generously with coarse kosher salt and freshly cracked black pepper.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2 text-xs font-mono">
                <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800">
                  <div className="text-red-400 font-bold">Rare (50°C - 52°C)</div>
                  <div className="text-stone-400 text-[11px] mt-1">Cool red center, soft velvet texture</div>
                </div>
                <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800">
                  <div className="text-amber-400 font-bold">Medium-Rare (54°C - 56°C)</div>
                  <div className="text-stone-400 text-[11px] mt-1">Warm pink center, ideal intramuscular rendering</div>
                </div>
                <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800">
                  <div className="text-yellow-400 font-bold">Medium (60°C - 63°C)</div>
                  <div className="text-stone-400 text-[11px] mt-1">Firm pink center with rich savoury glaze</div>
                </div>
                <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800">
                  <div className="text-blue-400 font-bold">Smoker Primal (93°C - 96°C)</div>
                  <div className="text-stone-400 text-[11px] mt-1">Collagen gelatinization, probe-tender like butter</div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Cold-Chain Freight */}
          {activeTab === 'coldchain' && (
            <div className="bg-stone-900/80 border border-stone-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Truck className="w-4 h-4 text-blue-400" />
                <span>Refrigerated Sub-Zero Logistics Guarantee (&lt;2.5°C)</span>
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                We operate direct temperature-monitored refrigerated courier links across Queensland, New South Wales, and Victoria. Every carton contains heavy food-grade eutectic freeze packs ensuring uninterrupted thermal stability for up to 48 hours in transit.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-1">
                  <div className="text-xs font-mono text-blue-400 font-bold uppercase">South East Queensland</div>
                  <div className="text-xs text-stone-300">Brisbane, Gold Coast, Ipswich, Sunshine Coast: Next-day refrigerated drop</div>
                </div>
                <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-1">
                  <div className="text-xs font-mono text-blue-400 font-bold uppercase">Greater Sydney &amp; Regional NSW</div>
                  <div className="text-xs text-stone-300">Overnight refrigerated express trunk routes</div>
                </div>
                <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-1">
                  <div className="text-xs font-mono text-blue-400 font-bold uppercase">Melbourne &amp; Victoria</div>
                  <div className="text-xs text-stone-300">Direct Southern cold-chain hub dispatch</div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Wholesale Terms */}
          {activeTab === 'wholesale' && (
            <div className="bg-stone-900/80 border border-stone-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Commercial B2B Allocation &amp; Volume Tiers</span>
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                Hospitality venues, boutique butcher shops, smokehouse catering operations, and private bulk buying syndicates can access volume wholesale pricing.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 bg-stone-950 p-4 rounded-xl border border-stone-800">
                <div>
                  <div className="text-sm font-bold text-white">Need pallet rates or weekly standing allocations?</div>
                  <div className="text-xs text-stone-400">Speak directly with our Ipswich &amp; Harrisville wholesale trade desk.</div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsWholesaleOpen(true)}
                  className="bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold px-4 py-2 rounded-lg text-xs transition-colors cursor-pointer shrink-0"
                >
                  Open Trade Desk Modal
                </button>
              </div>
            </div>
          )}
        </section>

        {/* ========================================================================= */}
        {/* PRODUCT FAQ — matches the FAQPage JSON-LD emitted in page.tsx */}
        {/* ========================================================================= */}
        {product.faqs && product.faqs.length > 0 && (
          <section aria-labelledby="product-faq-heading" className="pt-8 border-t border-stone-800 space-y-4">
            <div>
              <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider">
                Common Questions
              </span>
              <h2 id="product-faq-heading" className="text-xl sm:text-2xl font-black text-white tracking-tight mt-1">
                About This Cut
              </h2>
            </div>
            <div className="space-y-2">
              {product.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-stone-900 border border-stone-800 rounded-xl p-4 open:border-amber-600/50"
                >
                  <summary className="flex items-center justify-between cursor-pointer text-sm font-semibold text-white gap-3 list-none">
                    <span>{faq.question}</span>
                    <span className="shrink-0 text-amber-400 text-lg leading-none group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-sm text-stone-300 leading-relaxed mt-3">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* RELATED BUTCHER CUTS & ALLOCATIONS */}
        {/* ========================================================================= */}
        {relatedProducts.length > 0 && (
          <section aria-labelledby="related-cuts-heading" className="pt-8 border-t border-stone-800 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider">
                  Complementary Cuts
                </span>
                <h2 id="related-cuts-heading" className="text-xl sm:text-2xl font-black text-white tracking-tight mt-1">
                  More from {category?.name || product.category}
                </h2>
              </div>

              <Link
                href={`/shop/${product.categorySlug}/`}
                className="text-xs text-amber-400 hover:text-white font-mono flex items-center gap-1 transition-colors"
              >
                <span>View all {category?.name || 'department'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.sku}
                  className="bg-stone-900 border border-stone-800 hover:border-red-500/60 rounded-xl overflow-hidden flex flex-col justify-between group transition-all"
                >
                  <Link
                    href={`/shop/${rel.categorySlug}/${rel.slug}/`}
                    className="relative aspect-[4/3] bg-stone-950 overflow-hidden block"
                  >
                    <Image
                      src={rel.images.rawFallback}
                      alt={rel.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">
                        {rel.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-2 left-2 bg-stone-950/80 text-[10px] text-amber-300 font-mono px-1.5 py-0.5 rounded">
                      {rel.marbling}
                    </div>
                  </Link>

                  <div className="p-3 flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <div className="text-[10px] text-amber-500 font-mono truncate">{rel.subcategory}</div>
                      <Link
                        href={`/shop/${rel.categorySlug}/${rel.slug}/`}
                        className="font-bold text-xs text-white group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug mt-0.5 block"
                      >
                        {rel.name}
                      </Link>
                    </div>

                    <div className="pt-2 border-t border-stone-800 flex items-center justify-between">
                      <div className="font-mono font-bold text-sm text-amber-400">
                        ${rel.price.toFixed(2)} AUD
                      </div>
                      <Link
                        href={`/shop/${rel.categorySlug}/${rel.slug}/`}
                        className="bg-stone-800 hover:bg-red-600 text-white text-[11px] font-semibold px-2.5 py-1 rounded transition-colors flex items-center gap-1"
                      >
                        <span>View Cut</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Global Modals for Cart & Checkout */}
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

      {/* Page Footer */}
      <footer className="mt-16 bg-stone-950 border-t border-stone-900 py-8 px-4 sm:px-6 lg:px-8 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © 2023–2026 The Meat Agent (LPJH HOLDINGS PTY LTD). ABN 55 657 961 058.{' '}
            <a href="mailto:sales@themeatdirect.com.au" className="hover:text-amber-400 transition-colors">
              sales@themeatdirect.com.au
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <span>•</span>
            <Link href="/shop/" className="hover:text-amber-400 transition-colors">
              Full 160 Cuts Catalog
            </Link>
            <span>•</span>
            <button onClick={() => setIsWholesaleOpen(true)} className="hover:text-amber-400 transition-colors cursor-pointer">
              Wholesale Desk
            </button>
            <span>•</span>
            <button onClick={() => setIsContactOpen(true)} className="hover:text-amber-400 transition-colors cursor-pointer">
              Contact Concierge
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
