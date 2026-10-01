'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import {
  generate160Catalog,
  SHOP_CATEGORIES_160,
  Product160Item,
  ShopCategory160
} from '@/lib/products-160-data';
import { useCart } from '@/lib/cart-store';
import {
  PROVENANCE_BRANDS,
  BLOG_POSTS,
  BlogPostItem
} from '@/lib/catalog-data';
import { Navbar, ActivePage } from '@/components/Navbar';
import { HeroSliderRevolution } from '@/components/HeroSliderRevolution';
import { AutonomousSocialProofPopup } from '@/components/AutonomousSocialProofPopup';
import { HomepageReviewsSlider } from '@/components/HomepageReviewsSlider';
import { ShopCategorySlider } from '@/components/ShopCategorySlider';
import { ShopSideFilter, PRICE_RANGES, MARBLING_GRADES } from '@/components/ShopSideFilter';
import { ContactModal } from '@/components/ContactModal';
import { CartAndCheckoutModal, CartItem } from '@/components/CartAndCheckoutModal';
import { OrderTrackingModal } from '@/components/OrderTrackingModal';
import { WholesaleModal } from '@/components/WholesaleModal';
import { CutCompareTool } from '@/components/CutCompareTool';
import { EnterpriseMerchantPortal } from '@/components/EnterpriseMerchantPortal';
import { HomepageFaqSection } from '@/components/HomepageFaqSection';
import { VERIFIED_TRUSTPILOT_REVIEWS, TrustpilotReview } from '@/lib/trustpilot-data';
import {
  Search,
  Flame,
  ShieldCheck,
  Layers,
  BookOpen,
  ShoppingBag,
  ChefHat,
  Scale,
  Building2,
  Tag,
  Check,
  Truck,
  Filter,
  ArrowRight,
  MessageCircle,
  Phone,
  Mail,
  Award,
  Thermometer,
  Lock,
  Plus,
  Minus,
  Star,
  Clock,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  SlidersHorizontal,
  RefreshCw,
  Copy,
  Share2,
  Eye,
  X
} from 'lucide-react';

export default function MeatStoreExperiencePage() {
  const all160Products = useMemo(() => generate160Catalog(), []);

  // Main Page View (default to 'home', supports direct link ?portal=merchant or #merchant-portal)
  const [currentPage, setCurrentPage] = useState<ActivePage>(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      if (
        searchParams.get('portal') === 'merchant' ||
        searchParams.get('admin') === 'portal' ||
        window.location.hash === '#merchant-portal'
      ) {
        return 'merchant-portal';
      }
    }
    return 'home';
  });

  // Trustpilot Reviews & Official Merchant Reply State
  const [reviews, setReviews] = useState<TrustpilotReview[]>(VERIFIED_TRUSTPILOT_REVIEWS);

  const handleUpdateReviewReply = (
    reviewId: string,
    reply: { author: string; date: string; text: string }
  ) => {
    setReviews((prev) =>
      prev.map((r) => (r.id === reviewId ? { ...r, companyReply: reply } : r))
    );
  };

  // Filter States for Shop Catalog
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [selectedMarbling, setSelectedMarbling] = useState<string>('all');
  const [dryAgedOnly, setDryAgedOnly] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'raw' | 'cooked'>('raw');
  const [onlyInelastic, setOnlyInelastic] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product160Item | null>(null);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  // Pagination for Shop Catalog: 12 products per page
  const PRODUCTS_PER_PAGE = 12;
  const [shopPage, setShopPage] = useState<number>(1);

  // Selected Blog Post Modal
  const [selectedPost, setSelectedPost] = useState<BlogPostItem | null>(null);

  // Cart State from shared storage hook
  const {
    cart,
    cartCount: cartTotalItems,
    cartTotal: cartSubtotal,
    addToCart,
    updateQuantity: handleUpdateQuantity,
    removeItem: handleRemoveItem,
    clearCart: handleClearCart
  } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [modalCopiedLink, setModalCopiedLink] = useState(false);

  // Modals
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isWholesaleOpen, setIsWholesaleOpen] = useState(false);
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  // All Unique Producer Brands from the 160 Products Catalog
  const allBrands = useMemo(() => {
    const set = new Set<string>();
    all160Products.forEach((p) => {
      if (p.brand) set.add(p.brand);
    });
    return Array.from(set).sort();
  }, [all160Products]);

  // Available Subcategories for the Active Category (or all subcategories if 'all')
  const availableSubcategories = useMemo(() => {
    const set = new Set<string>();
    const pool = selectedCategory === 'all'
      ? all160Products
      : all160Products.filter((p) => p.categorySlug === selectedCategory);
    pool.forEach((p) => {
      if (p.subcategory) set.add(p.subcategory);
    });
    return Array.from(set).sort();
  }, [all160Products, selectedCategory]);

  // Filtered Shop Products based on all side filters and search
  const filteredProducts = useMemo(() => {
    return all160Products.filter((p) => {
      // 1. Category Filter
      const matchCat = selectedCategory === 'all' || p.categorySlug === selectedCategory;

      // 2. Subcategory Filter
      const matchSub = selectedSubcategory === 'all' || p.subcategory === selectedSubcategory;

      // 3. Brand Filter
      const matchBrand = selectedBrand === 'all' || p.brand === selectedBrand;

      // 4. Price Range Filter
      let matchPrice = true;
      if (selectedPriceRange === 'under-50') matchPrice = p.price < 50;
      else if (selectedPriceRange === '50-100') matchPrice = p.price >= 50 && p.price <= 100;
      else if (selectedPriceRange === '100-250') matchPrice = p.price > 100 && p.price <= 250;
      else if (selectedPriceRange === '250-plus') matchPrice = p.price > 250;

      // 5. Marbling & Grade Filter
      let matchMarbling = true;
      if (selectedMarbling === 'mb8-plus') matchMarbling = p.marbling.includes('8') || p.marbling.includes('9');
      else if (selectedMarbling === 'mb5-7') matchMarbling = p.marbling.includes('5') || p.marbling.includes('6') || p.marbling.includes('7');
      else if (selectedMarbling === 'mb3-4') matchMarbling = p.marbling.includes('3') || p.marbling.includes('4');
      else if (selectedMarbling === 'ultra-lean') matchMarbling = p.marbling.toLowerCase().includes('lean') || p.marbling.toLowerCase().includes('omega');

      // 6. Inelastic Demand Filter
      const matchInelastic = !onlyInelastic || p.inelastic;

      // 7. Dry-Aged Only Filter
      const matchDryAged = !dryAgedOnly || p.dryAging.toLowerCase().includes('dry-aged') || p.dryAging.toLowerCase().includes('45-day');

      // 8. Keyword Search
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.subcategory.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q);

      return (
        matchCat &&
        matchSub &&
        matchBrand &&
        matchPrice &&
        matchMarbling &&
        matchInelastic &&
        matchDryAged &&
        matchQuery
      );
    });
  }, [
    all160Products,
    selectedCategory,
    selectedSubcategory,
    selectedBrand,
    selectedPriceRange,
    selectedMarbling,
    onlyInelastic,
    dryAgedOnly,
    searchQuery
  ]);

  // Active filter count
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (selectedCategory !== 'all') count++;
    if (selectedSubcategory !== 'all') count++;
    if (selectedBrand !== 'all') count++;
    if (selectedPriceRange !== 'all') count++;
    if (selectedMarbling !== 'all') count++;
    if (onlyInelastic) count++;
    if (dryAgedOnly) count++;
    if (searchQuery.trim()) count++;
    return count;
  }, [
    selectedCategory,
    selectedSubcategory,
    selectedBrand,
    selectedPriceRange,
    selectedMarbling,
    onlyInelastic,
    dryAgedOnly,
    searchQuery
  ]);

  // Reset all filters handler
  const handleResetAllFilters = () => {
    setSelectedCategory('all');
    setSelectedSubcategory('all');
    setSelectedBrand('all');
    setSelectedPriceRange('all');
    setSelectedMarbling('all');
    setOnlyInelastic(false);
    setDryAgedOnly(false);
    setSearchQuery('');
    setShopPage(1);
  };

  // Paginated Products (8 items per page)
  const totalShopPages = Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE));
  const currentShopPage = Math.min(shopPage, totalShopPages);
  const paginatedProducts = useMemo(() => {
    const start = (currentShopPage - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(start, start + PRODUCTS_PER_PAGE);
  }, [filteredProducts, currentShopPage]);

  // Cart operations
  const handleAddToCart = (product: Product160Item) => {
    addToCart(product, 1);
    setIsCartOpen(true);
  };

  // Navigation handler from Navbar
  const handleNavigate = (page: ActivePage, categorySlug?: string) => {
    setCurrentPage(page);
    if (page === 'shop' && categorySlug) {
      setSelectedCategory(categorySlug);
      setSelectedSubcategory('all');
    }
  };

  // Change shop page with smooth scroll
  const handlePageChange = (newPage: number) => {
    setShopPage(newPage);
    const catalogElem = document.getElementById('shop-catalog-anchor');
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0a09] text-stone-100 flex flex-col selection:bg-amber-600 selection:text-white">
      {/* Autonomous Social Proof Toast */}
      <AutonomousSocialProofPopup onSelectReview={() => {}} />

      {/* Main Navbar with Top Announcement Slider & Shop Dropdown */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        cartCount={cartTotalItems}
        cartTotal={cartSubtotal}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenWholesale={() => setIsWholesaleOpen(true)}
        onOpenTracking={() => setIsTrackingOpen(true)}
      />

      {/* ========================================================================= */}
      {/* 1. HOMEPAGE */}
      {/* ========================================================================= */}
      {currentPage === 'home' && (
        <div className="space-y-14">
          {/* Slider Revolution Hero Engine */}
          <HeroSliderRevolution
            onExploreCatalog={() => {
              setCurrentPage('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenWhatsApp={() => {
              window.open('https://wa.me/61480804189?text=Hello%20The%20Meat%20Agent,%20I%20want%20to%20inquire%20about%20your%20Wagyu%20and%20smoker%20primals', '_blank');
            }}
            onOpenReviews={() => {
              const reviewSection = document.getElementById('homepage-reviews-anchor');
              if (reviewSection) {
                reviewSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          />

          {/* 4 Value Pillars Bar */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-stone-900/90 border border-stone-800 p-5 rounded-xl flex items-start gap-3.5 shadow-md">
                <div className="p-2.5 rounded-lg bg-red-950/80 border border-red-800/60 text-red-400 shrink-0">
                  <ChefHat className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">Direct Farm-Gate Allocation</h3>
                  <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                    Bypass supermarket cold-stores and retail markups. Freshly portioned at source from certified Australian pastures.
                  </p>
                </div>
              </div>

              <div className="bg-stone-900/90 border border-stone-800 p-5 rounded-xl flex items-start gap-3.5 shadow-md">
                <div className="p-2.5 rounded-lg bg-blue-950/80 border border-blue-800/60 text-blue-400 shrink-0">
                  <Thermometer className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">Sub-Zero 48hr Cold-Chain</h3>
                  <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                    Insulated thermal wool liners and solid dry ice gel blocks. Guaranteed &lt;2.5°C core temp upon arrival.
                  </p>
                </div>
              </div>

              <div className="bg-stone-900/90 border border-stone-800 p-5 rounded-xl flex items-start gap-3.5 shadow-md">
                <div className="p-2.5 rounded-lg bg-amber-950/80 border border-amber-800/60 text-amber-400 shrink-0">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">Wholesale Minimum from $423</h3>
                  <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                    Accessible commercial pricing for families, fitness meal prep, and competition pitmasters. Free freight over $2,000.
                  </p>
                </div>
              </div>

              <div className="bg-stone-900/90 border border-stone-800 p-5 rounded-xl flex items-start gap-3.5 shadow-md">
                <div className="p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">Licensed Australian Entity</h3>
                  <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                    ABN: 55 657 961 058 (LPJH Holdings Pty Ltd). Trading legally since 2023 with Harrisville &amp; Ipswich QLD depots.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Department Categories Showcase */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-800 pb-4">
              <div>
                <span className="text-xs font-mono text-red-500 font-bold uppercase tracking-wider">
                  Browse by Department
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
                  11 Core Butcher Categories
                </h2>
              </div>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedSubcategory('all');
                  setCurrentPage('shop');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-amber-400 hover:text-amber-300 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>View All 160 Wholesale Cuts</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {SHOP_CATEGORIES_160.slice(0, 8).map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => {
                    setSelectedCategory(cat.slug);
                    setSelectedSubcategory('all');
                    setCurrentPage('shop');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group bg-stone-900 border border-stone-800 hover:border-red-500/60 rounded-xl overflow-hidden text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60 cursor-pointer"
                >
                  <div className="relative aspect-[16/10] bg-stone-950 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cat.heroImage}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
                    <span className="absolute bottom-2.5 right-2.5 bg-stone-950/90 text-amber-400 font-mono text-[10px] font-bold px-2 py-0.5 rounded border border-stone-700">
                      {cat.itemCount} Cuts
                    </span>
                  </div>
                  <div className="p-3.5">
                    <h3 className="font-bold text-sm text-white group-hover:text-amber-400 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-[11px] text-stone-400 mt-1 line-clamp-1">
                      {cat.heroTagline}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Best-Seller Allocations Spotlight */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-800 pb-4">
              <div>
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  Top Wholesale Allocations
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
                  Signature Australian Cuts
                </h2>
                <p className="text-xs text-stone-400 mt-1">
                  Frequently re-ordered family cuts, Wagyu steaks, and pitmaster competition primals.
                </p>
              </div>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setOnlyInelastic(true);
                  setCurrentPage('shop');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-emerald-400 hover:text-emerald-300 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Filter Essential Staples</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {all160Products.slice(0, 4).map((p) => (
                <div
                  key={p.sku}
                  className="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden flex flex-col justify-between hover:border-amber-500/50 transition-all hover:shadow-xl group"
                >
                  <div className="relative aspect-[4/3] bg-stone-950 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.images.rawFallback}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 flex gap-1">
                      <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                        {p.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-2 left-2 bg-stone-950/80 backdrop-blur-sm text-[10px] text-amber-300 font-mono px-2 py-0.5 rounded">
                      {p.marbling} • {p.dryAging}
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="text-[11px] text-amber-500 font-medium">{p.subcategory} • {p.weight}</div>
                      <h3 className="font-bold text-sm text-white mt-0.5 line-clamp-1">{p.name}</h3>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2">{p.shortDescription}</p>
                    </div>

                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div>
                        <div className="text-base font-black text-amber-400 font-mono">
                          ${p.price.toFixed(2)} AUD
                        </div>
                        <div className="text-[10px] text-stone-500 font-mono">SKU: {p.sku}</div>
                      </div>

                      <button
                        onClick={() => handleAddToCart(p)}
                        className="bg-red-600 hover:bg-red-500 text-white text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer shadow-md"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recipes & Culinary Guides (Blog Section on Homepage) */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-800 pb-4">
              <div>
                <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
                  Butcher &amp; Pitmaster Knowledge
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
                  Butchery Guides &amp; Cooking Masterclasses
                </h2>
                <p className="text-xs text-stone-400 mt-1">
                  Master low &amp; slow ironbark smoking, reverse-searing thick ribeyes, and cold-chain meal prep.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {BLOG_POSTS.slice(0, 3).map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="bg-stone-900 border border-stone-800 hover:border-blue-500/50 rounded-xl overflow-hidden flex flex-col justify-between cursor-pointer group transition-all"
                >
                  <div className="relative aspect-[16/10] bg-stone-950 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.imageFallback}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="text-[11px] text-stone-400 font-mono flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-stone-500" />
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="font-bold text-sm text-white group-hover:text-blue-300 transition-colors mt-1.5 leading-snug line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-xs text-stone-400 mt-1.5 line-clamp-2 leading-relaxed">
                        {post.hook}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-[11px] text-amber-500">
                      <span className="font-mono">Read Masterclass</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* CUSTOMER REVIEWS SLIDER (Directly Underneath Blogs on Homepage) */}
          {/* ========================================================================= */}
          <div id="homepage-reviews-anchor">
            <HomepageReviewsSlider
              reviews={reviews}
              onViewAllReviews={() => {
                const catalogElem = document.getElementById('shop-catalog-anchor');
                if (catalogElem) {
                  catalogElem.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />
          </div>

          {/* "Why Meat Direct?" Authority Comparison Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-stone-900 via-stone-900 to-red-950/40 border border-stone-800 rounded-2xl p-6 sm:p-8 lg:p-10 space-y-6">
              <div className="max-w-2xl space-y-2">
                <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider">
                  The Meat Agent Difference
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Supermarket Markups vs Farm-Gate Direct Wholesale
                </h2>
                <p className="text-sm text-stone-300 leading-relaxed">
                  Traditional retail meat passes through multiple central distribution warehouses and open supermarket display counters. Every link adds overhead, price markup, and thermal fluctuation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="bg-stone-950/80 border border-red-900/40 p-5 rounded-xl space-y-3">
                  <div className="text-red-400 font-bold text-sm flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500" />
                    <span>Traditional Supermarket Model</span>
                  </div>
                  <ul className="text-xs text-stone-400 space-y-2 leading-relaxed">
                    <li>• Up to 40% retail shelf markup to cover prime real-estate rent and electricity</li>
                    <li>• Water and brine added to boost pack weight in commodity mince</li>
                    <li>• Fluctuating temperatures during multiple transit legs and retail open display bins</li>
                    <li>• Thin, trimmed steaks designed for speed rather than authentic barbecue moisture</li>
                  </ul>
                </div>

                <div className="bg-stone-950/80 border border-emerald-900/40 p-5 rounded-xl space-y-3">
                  <div className="text-emerald-400 font-bold text-sm flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>The Meat Agent Direct Wholesale Engine</span>
                  </div>
                  <ul className="text-xs text-stone-400 space-y-2 leading-relaxed">
                    <li>• 100% farm-gate direct allocation: zero boutique retailer or middleman markups</li>
                    <li>• 100% pure protein guarantee: zero added water, zero binders, pure whole-muscle grinds</li>
                    <li>• Dedicated refrigerated couriers with solid dry ice keeping core temps &lt;2.5°C</li>
                    <li>• Authentic full-packer briskets, thick-cut 900g dry-aged ribeyes, and custom pitmaster primals</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-stone-800">
                <div className="text-xs text-stone-400">
                  Minimum Order: <strong className="text-amber-400 font-mono">$423 AUD</strong> • Free Freight: <strong className="text-emerald-400 font-mono">Over $2,000 AUD</strong>
                </div>
                <button
                  onClick={() => {
                    setCurrentPage('shop');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold px-6 py-2.5 rounded-lg text-xs flex items-center gap-2 shadow-lg cursor-pointer"
                >
                  <span>Explore 160-Cut Catalog</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* FREQUENTLY ASKED QUESTIONS SECTION (Direct-Answer AEO / GEO Schema) */}
          {/* ========================================================================= */}
          <HomepageFaqSection
            onOpenContact={() => setIsContactOpen(true)}
            onOpenWholesale={() => setIsWholesaleOpen(true)}
          />
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. SHOP PAGE (160 CUTS WITH SIDE FILTER & 12-PER-PAGE PAGINATION) */}
      {/* ========================================================================= */}
      {currentPage === 'shop' && (
        <main id="shop-catalog-anchor" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-800 pb-4">
            <div>
              <span className="text-xs font-mono text-red-500 font-bold uppercase tracking-wider">
                Commercial Allocation Catalog
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
                Shop 160 Australian Wholesale Cuts
              </h1>
              <p className="text-xs text-stone-400 mt-1">
                MSA-graded Wagyu MB9+, dry-aged primals, competition briskets, and family bulk packs direct to your door.
              </p>
            </div>

            {/* Mobile Filter Button (visible on mobile / tablet) */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsMobileFilterOpen(true)}
                className="w-full sm:w-auto bg-stone-900 hover:bg-stone-850 border border-stone-700 text-stone-200 text-xs font-bold px-4 py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
              >
                <Filter className="w-4 h-4 text-amber-400" />
                <span>Filter Cuts ({filteredProducts.length})</span>
                {activeFilterCount > 0 && (
                  <span className="bg-amber-500 text-stone-950 text-[10px] font-mono font-black px-1.5 py-0.2 rounded-full">
                    {activeFilterCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Search, Angle Switcher & Quick Controls */}
          <div className="bg-stone-900 border border-stone-800 p-4 rounded-xl shadow-lg flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Search by cut name, scotch fillet, eye fillet, brisket, mince, wagyu, SKU..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShopPage(1);
                }}
                className="w-full bg-stone-950 border border-stone-800 rounded-lg pl-10 pr-9 py-2.5 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-red-500 transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setShopPage(1);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-300 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Angle Switcher */}
              <div className="flex items-center bg-stone-950 border border-stone-800 p-1 rounded-lg">
                <button
                  type="button"
                  onClick={() => setViewMode('raw')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md flex items-center gap-1.5 transition-all cursor-pointer ${
                    viewMode === 'raw'
                      ? 'bg-red-700 text-white shadow-md'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <Scale className="w-3.5 h-3.5" />
                  <span>Raw Butcher Cut</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('cooked')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md flex items-center gap-1.5 transition-all cursor-pointer ${
                    viewMode === 'cooked'
                      ? 'bg-amber-600 text-white shadow-md'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <Flame className="w-3.5 h-3.5" />
                  <span>Cooked / Plated</span>
                </button>
              </div>

              {/* Mobile Filter Trigger Button */}
              <button
                type="button"
                onClick={() => setIsMobileFilterOpen(true)}
                className="lg:hidden px-3 py-2 text-xs font-semibold rounded-lg border bg-stone-950 border-stone-800 text-stone-300 hover:border-stone-700 flex items-center gap-1.5 cursor-pointer"
              >
                <Filter className="w-3.5 h-3.5 text-amber-400" />
                <span>Filters {activeFilterCount > 0 ? `(${activeFilterCount})` : ''}</span>
              </button>
            </div>
          </div>

          {/* TWO-COLUMN LAYOUT: Side Filter (Left) + Catalog Content (Right) */}
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            {/* 1. Side Filter (Categories, Subcategories, Brands, Prices, Grades, Special Toggles) */}
            <ShopSideFilter
              selectedCategory={selectedCategory}
              onSelectCategory={(slug) => {
                setSelectedCategory(slug);
                setSelectedSubcategory('all');
                setShopPage(1);
              }}
              availableSubcategories={availableSubcategories}
              selectedSubcategory={selectedSubcategory}
              onSelectSubcategory={(sub) => {
                setSelectedSubcategory(sub);
                setShopPage(1);
              }}
              allBrands={allBrands}
              selectedBrand={selectedBrand}
              onSelectBrand={(brand) => {
                setSelectedBrand(brand);
                setShopPage(1);
              }}
              selectedPriceRange={selectedPriceRange}
              onSelectPriceRange={(rangeId) => {
                setSelectedPriceRange(rangeId);
                setShopPage(1);
              }}
              selectedMarbling={selectedMarbling}
              onSelectMarbling={(mId) => {
                setSelectedMarbling(mId);
                setShopPage(1);
              }}
              onlyInelastic={onlyInelastic}
              onToggleInelastic={() => {
                setOnlyInelastic(!onlyInelastic);
                setShopPage(1);
              }}
              dryAgedOnly={dryAgedOnly}
              onToggleDryAged={() => {
                setDryAgedOnly(!dryAgedOnly);
                setShopPage(1);
              }}
              onResetAll={handleResetAllFilters}
              activeFilterCount={activeFilterCount}
              totalFilteredCount={filteredProducts.length}
              allProductsCount={all160Products.length}
              isMobileOpen={isMobileFilterOpen}
              onCloseMobile={() => setIsMobileFilterOpen(false)}
            />

            {/* 2. Main Catalog Column */}
            <div className="flex-1 min-w-0 w-full space-y-4">
              {/* Active Filter Tags with 1-Click Dismissal */}
              {activeFilterCount > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 p-3 bg-stone-900/70 border border-stone-800 rounded-xl text-xs">
                  <span className="text-stone-400 font-medium mr-1 text-[11px]">Active Filters:</span>
                  {selectedCategory !== 'all' && (
                    <span className="inline-flex items-center gap-1 bg-stone-850 text-amber-300 px-2.5 py-1 rounded-md text-[11px] font-medium border border-stone-700">
                      Category: {SHOP_CATEGORIES_160.find(c => c.slug === selectedCategory)?.name || selectedCategory}
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedCategory('all');
                          setSelectedSubcategory('all');
                          setShopPage(1);
                        }}
                        className="hover:text-white ml-0.5 cursor-pointer"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {selectedSubcategory !== 'all' && (
                    <span className="inline-flex items-center gap-1 bg-stone-850 text-amber-300 px-2.5 py-1 rounded-md text-[11px] font-medium border border-stone-700">
                      Subcategory: {selectedSubcategory}
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedSubcategory('all');
                          setShopPage(1);
                        }}
                        className="hover:text-white ml-0.5 cursor-pointer"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {selectedBrand !== 'all' && (
                    <span className="inline-flex items-center gap-1 bg-stone-850 text-amber-300 px-2.5 py-1 rounded-md text-[11px] font-medium border border-stone-700">
                      Brand: {selectedBrand}
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedBrand('all');
                          setShopPage(1);
                        }}
                        className="hover:text-white ml-0.5 cursor-pointer"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {selectedPriceRange !== 'all' && (
                    <span className="inline-flex items-center gap-1 bg-stone-850 text-amber-300 px-2.5 py-1 rounded-md text-[11px] font-medium border border-stone-700">
                      Price: {PRICE_RANGES.find(p => p.id === selectedPriceRange)?.label || selectedPriceRange}
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedPriceRange('all');
                          setShopPage(1);
                        }}
                        className="hover:text-white ml-0.5 cursor-pointer"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {selectedMarbling !== 'all' && (
                    <span className="inline-flex items-center gap-1 bg-stone-850 text-amber-300 px-2.5 py-1 rounded-md text-[11px] font-medium border border-stone-700">
                      Grade: {MARBLING_GRADES.find(m => m.id === selectedMarbling)?.label || selectedMarbling}
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedMarbling('all');
                          setShopPage(1);
                        }}
                        className="hover:text-white ml-0.5 cursor-pointer"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {onlyInelastic && (
                    <span className="inline-flex items-center gap-1 bg-emerald-950/80 text-emerald-300 px-2.5 py-1 rounded-md text-[11px] font-medium border border-emerald-700">
                      Family Essentials
                      <button
                        type="button"
                        onClick={() => {
                          setOnlyInelastic(false);
                          setShopPage(1);
                        }}
                        className="hover:text-white ml-0.5 cursor-pointer"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {dryAgedOnly && (
                    <span className="inline-flex items-center gap-1 bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded-md text-[11px] font-medium border border-amber-700">
                      Dry-Aged Only
                      <button
                        type="button"
                        onClick={() => {
                          setDryAgedOnly(false);
                          setShopPage(1);
                        }}
                        className="hover:text-white ml-0.5 cursor-pointer"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {searchQuery.trim() && (
                    <span className="inline-flex items-center gap-1 bg-stone-850 text-stone-200 px-2.5 py-1 rounded-md text-[11px] font-medium border border-stone-700">
                      Search: &ldquo;{searchQuery}&rdquo;
                      <button
                        type="button"
                        onClick={() => {
                          setSearchQuery('');
                          setShopPage(1);
                        }}
                        className="hover:text-white ml-0.5 cursor-pointer"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={handleResetAllFilters}
                    className="text-[11px] text-red-400 hover:text-red-300 underline ml-2 font-medium cursor-pointer"
                  >
                    Clear all
                  </button>
                </div>
              )}

              {/* Results Summary Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-stone-400 border-b border-stone-800 pb-3">
                <div>
                  Showing <strong className="text-white">{filteredProducts.length === 0 ? 0 : Math.min(filteredProducts.length, (currentShopPage - 1) * PRODUCTS_PER_PAGE + 1)}–{Math.min(filteredProducts.length, currentShopPage * PRODUCTS_PER_PAGE)}</strong> of{' '}
                  <strong className="text-white">{filteredProducts.length}</strong> cuts (Page {currentShopPage} of {totalShopPages})
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-amber-400 font-mono font-medium">Min Order: $423 AUD</span>
                  <span className="text-stone-600">•</span>
                  <span className="text-emerald-400 font-mono font-medium">Free Shipping: Over $2,000 AUD</span>
                </div>
              </div>

              {/* Products Grid: 3 columns on desktop next to the side filter */}
              {paginatedProducts.length === 0 ? (
                <div className="bg-stone-900 border border-stone-800 rounded-2xl p-12 text-center space-y-3">
                  <div className="text-stone-400 text-sm">No products found matching your active filters.</div>
                  <button
                    type="button"
                    onClick={handleResetAllFilters}
                    className="bg-red-600 hover:bg-red-500 text-white font-bold px-4 py-2 rounded-lg text-xs transition-colors cursor-pointer"
                  >
                    Clear All Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {paginatedProducts.map((p) => {
                    const currentImg = viewMode === 'raw' ? p.images.rawFallback : p.images.cookedFallback;

                    return (
                      <div
                        key={p.sku}
                        className="group bg-stone-900/90 rounded-xl border border-stone-800 hover:border-red-500/60 overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
                      >
                        <Link
                          href={`/shop/${p.categorySlug}/${p.slug}/`}
                          className="relative aspect-[4/3] bg-stone-950 overflow-hidden cursor-pointer block"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={currentImg}
                            alt={p.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
                            <span className="bg-red-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow">
                              {p.badge}
                            </span>
                            {p.inelastic && (
                              <span className="bg-emerald-950/90 border border-emerald-500/60 text-emerald-300 text-[9px] font-semibold px-1.5 py-0.5 rounded shadow">
                                Inelastic Staple
                              </span>
                            )}
                          </div>
                          <div className="absolute top-2 right-2">
                            <span className="bg-stone-900/90 text-stone-400 font-mono text-[10px] px-1.5 py-0.5 rounded border border-stone-700">
                              {p.sku}
                            </span>
                          </div>
                          <div className="absolute bottom-2 left-2 bg-stone-950/80 backdrop-blur-sm text-[10px] text-amber-300 font-mono px-2 py-0.5 rounded">
                            {p.marbling} • {p.dryAging}
                          </div>
                        </Link>

                        <div className="p-3.5 flex-1 flex flex-col justify-between space-y-3">
                          <div>
                            <div className="text-[11px] font-medium text-amber-500 mb-0.5 flex items-center justify-between">
                              <span className="truncate">{p.subcategory}</span>
                              <span className="text-stone-400 font-normal shrink-0 ml-1">{p.weight}</span>
                            </div>
                            <Link
                              href={`/shop/${p.categorySlug}/${p.slug}/`}
                              className="font-bold text-sm text-stone-100 group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug cursor-pointer block"
                            >
                              {p.name}
                            </Link>
                            <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                              {p.shortDescription}
                            </p>
                          </div>

                          <div className="pt-2 border-t border-stone-800 space-y-2">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-base font-black text-amber-400 font-mono">
                                  ${p.price.toFixed(2)} AUD
                                </div>
                                <div className="text-[10px] text-stone-400 font-mono">
                                  {p.brand}
                                </div>
                              </div>

                              <div className="flex items-center gap-1.5">
                                <button
                                  onClick={() => setSelectedProduct(p)}
                                  className="p-2 text-stone-400 hover:text-amber-400 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer"
                                  title="Quick View Specification"
                                >
                                  <Eye className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => {
                                    const text = `Hello The Meat Agent! I want to order SKU: ${p.sku} (${p.name} - $${p.price.toFixed(2)} AUD)`;
                                    window.open(`https://wa.me/61480804189?text=${encodeURIComponent(text)}`, '_blank');
                                  }}
                                  className="p-2 text-stone-400 hover:text-emerald-400 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer"
                                  title="Order via WhatsApp"
                                >
                                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                                </button>

                                <button
                                  onClick={() => handleAddToCart(p)}
                                  className="bg-red-600 hover:bg-red-500 text-white text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer shadow-md"
                                >
                                  <Plus className="w-3.5 h-3.5" />
                                  <span>Add</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* PAGINATION CONTROLS */}
              {totalShopPages > 1 && (
                <div className="pt-6 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4">
                  <button
                    disabled={currentShopPage === 1}
                    onClick={() => handlePageChange(currentShopPage - 1)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                      currentShopPage === 1
                        ? 'bg-stone-900/40 text-stone-600 border border-stone-850 cursor-not-allowed'
                        : 'bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-800'
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous Cuts</span>
                  </button>

                  {/* Numbered Page Buttons */}
                  <div className="flex items-center gap-1">
                    {[...Array(totalShopPages)].map((_, i) => {
                      const pNum = i + 1;
                      if (
                        pNum === 1 ||
                        pNum === totalShopPages ||
                        (pNum >= currentShopPage - 1 && pNum <= currentShopPage + 1)
                      ) {
                        return (
                          <button
                            key={pNum}
                            onClick={() => handlePageChange(pNum)}
                            className={`w-9 h-9 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                              currentShopPage === pNum
                                ? 'bg-red-600 text-white shadow-md'
                                : 'bg-stone-900 border border-stone-800 text-stone-400 hover:text-white hover:bg-stone-800'
                            }`}
                          >
                            {pNum}
                          </button>
                        );
                      }
                      if (pNum === currentShopPage - 2 || pNum === currentShopPage + 2) {
                        return (
                          <span key={pNum} className="px-1 text-stone-600 font-mono text-xs">
                            ...
                          </span>
                        );
                      }
                      return null;
                    })}
                  </div>

                  <button
                    disabled={currentShopPage === totalShopPages}
                    onClick={() => handlePageChange(currentShopPage + 1)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                      currentShopPage === totalShopPages
                        ? 'bg-stone-900/40 text-stone-600 border border-stone-850 cursor-not-allowed'
                        : 'bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-800'
                    }`}
                  >
                    <span>Next Cuts</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>
      )}

      {/* ========================================================================= */}
      {/* 3. ABOUT US PAGE */}
      {/* ========================================================================= */}
      {currentPage === 'about' && (
        <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          <div className="border-b border-stone-800 pb-4">
            <span className="text-xs font-mono text-red-500 font-bold uppercase tracking-wider">
              Entity Architecture &amp; Provenance
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
              About The Meat Agent — Meat Direct
            </h1>
            <p className="text-xs text-stone-400 mt-1">
              LPJH HOLDINGS PTY LTD (ABN: 55 657 961 058) • Registered 8/11/2023 • Harrisville &amp; Ipswich QLD
            </p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-stone-300 leading-relaxed bg-stone-900/60 border border-stone-800 p-6 sm:p-8 rounded-2xl">
            <h2 className="text-lg sm:text-xl font-bold text-white">The Direct Wholesale Mission</h2>
            <p>
              The Meat Agent was established in 2023 to bridge the gap between premium Australian pasture-fed producers and discerning home consumers. Traditional retail butcheries and supermarket chains pass livestock through multiple central distribution centers, retail displays, and repackaging lines—adding up to 40% in middleman markup while cycling meat through inconsistent temperatures.
            </p>
            <p>
              We bypass retail storefront overheads by supplying fresh allocations directly from accredited producers in Gippsland (Victoria), the Darling Downs (Queensland), and the New England Tablelands (New South Wales) straight to customer doorsteps in thermal sub-zero cartons.
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-white pt-2">Sub-Zero 48-Hour Cold-Chain Integrity</h2>
            <p>
              Meat quality is fundamentally dictated by cold-chain continuity. When beef or lamb undergoes temperature cycling between 4°C and 8°C in retail counters, moisture purges rapidly, breaking cell walls and destroying the tenderness developed during aging.
            </p>
            <p>
              Every order dispatched from The Meat Agent network is portioned and immediately vacuum-sealed in oxygen-impermeable pouches, packed inside high-density thermal wool insulated cartons, and packed with solid dry-ice blocks engineered to maintain an internal temperature of below 2.5°C for 48 consecutive hours—even when transported through 38°C ambient Australian summer conditions.
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-white pt-2">Official Corporate &amp; Licensing Credentials</h2>
            <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 text-xs font-mono space-y-2 text-stone-400">
              <div>
                <strong>Legal Entity Name:</strong> LPJH HOLDINGS PTY LTD (Body Corporate)
              </div>
              <div>
                <strong>Registered Trading Name:</strong> The Meat Agent — Meat Direct
              </div>
              <div>
                <strong>Australian Business Number (ABN):</strong>{' '}
                <a
                  href="https://abr.business.gov.au/ABN/View?id=55657961058"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 underline font-bold hover:text-amber-300"
                >
                  55 657 961 058 (Click to Verify on Official Australian Business Register)
                </a>
              </div>
              <div>
                <strong>Registration Date:</strong> 8 November 2023 (Renewal: 8 November 2028)
              </div>
              <div>
                <strong>Principal Place of Business:</strong> 22 Wilson Pl, Harrisville QLD 4307
              </div>
              <div>
                <strong>Address for Service of Documents:</strong> 164 Brisbane St, Ipswich QLD 4305
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Product Detail Quick Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-800 max-w-xl w-full rounded-2xl overflow-hidden shadow-2xl space-y-4 p-6 relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex gap-4">
              <div className="w-32 h-32 rounded-xl bg-stone-950 overflow-hidden shrink-0 border border-stone-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={viewMode === 'raw' ? selectedProduct.images.rawFallback : selectedProduct.images.cookedFallback}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-red-400 uppercase font-bold">{selectedProduct.badge}</span>
                <h3 className="font-bold text-base text-white">{selectedProduct.name}</h3>
                <div className="text-xs text-amber-500 font-mono">{selectedProduct.subcategory} • {selectedProduct.weight}</div>
                <div className="text-lg font-black text-amber-400 font-mono pt-1">
                  ${selectedProduct.price.toFixed(2)} AUD
                </div>
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed">
              {selectedProduct.shortDescription}
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-stone-950 p-3 rounded-xl border border-stone-800">
              <div>Marbling: <span className="text-amber-400">{selectedProduct.marbling}</span></div>
              <div>Aging: <span className="text-stone-300">{selectedProduct.dryAging}</span></div>
              <div>Producer: <span className="text-stone-300">{selectedProduct.brand}</span></div>
              <div>Freight Temp: <span className="text-emerald-400">&lt;2.5°C 48hr</span></div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  handleAddToCart(selectedProduct);
                  setSelectedProduct(null);
                }}
                className="flex-1 bg-red-600 hover:bg-red-500 text-white font-bold py-2.5 rounded-lg text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Plus className="w-4 h-4" />
                <span>Add Cut to Cart</span>
              </button>

              <button
                onClick={() => {
                  const text = `Hello The Meat Agent! I want to order ${selectedProduct.name} (${selectedProduct.sku})`;
                  window.open(`https://wa.me/61480804189?text=${encodeURIComponent(text)}`, '_blank');
                }}
                className="bg-[#25D366] text-stone-950 font-bold px-4 py-2.5 rounded-lg text-xs flex items-center gap-1.5 cursor-pointer shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. ENTERPRISE MERCHANT REPLY PORTAL (Official Consumer Dialogue Desk) */}
      {/* ========================================================================= */}
      {currentPage === 'merchant-portal' && (
        <EnterpriseMerchantPortal
          reviews={reviews}
          onUpdateReviewReply={handleUpdateReviewReply}
          onClosePortal={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* Blog Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-800 max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl space-y-4 p-6 relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                {selectedPost.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white">{selectedPost.title}</h2>
              <div className="text-xs text-stone-400 font-mono">{selectedPost.readTime}</div>
            </div>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-stone-950">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={selectedPost.imageFallback} alt={selectedPost.title} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-stone-300 leading-relaxed pt-2">
              <p className="font-semibold text-white">{selectedPost.hook}</p>
              <p>
                Professional butcher preparation begins with temperature regulation. Before applying direct flame, ensure the core temperature is brought up evenly to prevent cold-center shock. Season liberally with coarse kosher salt 45 minutes prior to cooking.
              </p>
              <p>
                When finishing on ironbark coals or cast-iron, aim for high conductive heat to achieve Maillard reaction crusting without overcooking the delicate sub-surface muscle fibers. Rest for 8 minutes before slicing across the grain.
              </p>
            </div>

            <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
              <button
                onClick={() => {
                  setSelectedPost(null);
                  setCurrentPage('shop');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-red-600 hover:bg-red-500 text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-1.5 cursor-pointer"
              >
                <span>Shop Recommended Cuts</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer & Modals */}
      <CartAndCheckoutModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <WholesaleModal
        isOpen={isWholesaleOpen}
        onClose={() => setIsWholesaleOpen(false)}
      />

      <OrderTrackingModal
        isOpen={isTrackingOpen}
        onClose={() => setIsTrackingOpen(false)}
      />

      <CutCompareTool
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        products={all160Products}
        onAddToCart={handleAddToCart}
      />

      {/* ========================================================================= */}
      {/* 4. COMPACT FOOTER (List Form, Official ABN Link, Clean & Professional) */}
      {/* ========================================================================= */}
      <footer className="border-t border-stone-800 bg-[#090707] py-10 px-4 text-xs text-stone-400 mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: Identity & Verified ABN Link */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-black text-base">
              <span>THE MEAT AGENT</span>
              <span className="text-xs bg-red-600/30 text-red-300 border border-red-500/40 px-2 py-0.5 rounded font-mono">
                MEAT DIRECT
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Australian commercial butcher allocation engine. Direct wholesale cold-chain supply for fine dining, competition pitmasters, and bulk families.
            </p>
            <div className="text-[11px] text-stone-400 space-y-1 font-mono pt-1">
              <div>
                <strong>ABN:</strong>{' '}
                <a
                  href="https://abr.business.gov.au/ABN/View?id=55657961058"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 underline font-bold hover:text-amber-300"
                  title="Verify on official Australian Government ABN Lookup"
                >
                  55 657 961 058
                </a>{' '}
                <span className="text-stone-500">(LPJH HOLDINGS PTY LTD)</span>
              </div>
              <div className="text-stone-500">
                Registered 8/11/2023 • Official Entity Status: Registered
              </div>
              <div className="text-stone-500">
                Harrisville &amp; Ipswich QLD • Australia
              </div>
            </div>
          </div>

          {/* Col 2: Top Menu In List Menu Form (as requested) */}
          <div className="space-y-2">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Site Navigation</h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => handleNavigate('shop')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  • Shop All Cuts (160 Products)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('shop', 'beef')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  • Shop by Category (11 Departments)
                </button>
              </li>
              <li>
                <Link
                  href="/blog/"
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  • The Butcher&apos;s Journal (Blog)
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('about')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  • About Us &amp; Provenance
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  • Contact Direct Concierge
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsWholesaleOpen(true)}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  • Wholesale &amp; Commercial Trade
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsTrackingOpen(true)}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  • Track Refrigerated Courier Delivery
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('home');
                    setTimeout(() => {
                      const faqElem = document.getElementById('homepage-faq-section');
                      if (faqElem) {
                        faqElem.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  • Frequently Asked Questions (FAQ)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Order Policies & Settlement */}
          <div className="space-y-2">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Wholesale Rules</h4>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li>• Minimum Order: <strong className="text-amber-400 font-mono">$423.00 AUD</strong></li>
              <li>• Free Shipping: <strong className="text-emerald-400 font-mono">Over $2,000 AUD</strong></li>
              <li>• 10% Crypto Discount (BTC / USDT auto-applied)</li>
              <li>• Freight: 10% GST on cold-chain transport</li>
              <li>• Settlement Rails: PayID (Osko), Bank Transfer, Crypto</li>
              <li>• Dispatch: Sub-Zero Couriers across QLD, NSW &amp; VIC</li>
            </ul>
          </div>

          {/* Col 4: Direct Concierge & Buttons directly underneath */}
          <div className="space-y-2">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Direct Concierge</h4>
            <div className="space-y-2">
              <a
                href="https://wa.me/61480804189"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors font-mono"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp: +61 480 804 189</span>
              </a>
              <a
                href="mailto:sales@themeatdirect.com.au"
                className="flex items-center gap-2 text-white hover:text-amber-400 transition-colors font-mono"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>sales@themeatdirect.com.au</span>
              </a>
              <div className="text-[11px] text-stone-500">
                Operating Hours: Mon–Sat 6:00 AM – 7:00 PM AEST
              </div>

              {/* Action Buttons Directly Underneath Direct Concierge (as requested) */}
              <div className="pt-2 space-y-2">
                <button
                  onClick={() => setIsWholesaleOpen(true)}
                  className="w-full bg-stone-900 hover:bg-stone-800 border border-stone-800 text-cyan-400 hover:text-white px-3 py-2 rounded-lg text-xs transition-colors cursor-pointer flex items-center justify-between"
                >
                  <span>Wholesale Trade Desk</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="w-full bg-stone-900 hover:bg-stone-800 border border-stone-800 text-amber-400 hover:text-white px-3 py-2 rounded-lg text-xs transition-colors cursor-pointer flex items-center justify-between"
                >
                  <span>Contact Concierge Desk</span>
                  <Mail className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Band with Direct Government ABR Link */}
        <div className="max-w-7xl mx-auto pt-6 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <p>
            © 2023–2026 The Meat Agent (LPJH HOLDINGS PTY LTD).{' '}
            <a
              href="https://abr.business.gov.au/ABN/View?id=55657961058"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-amber-400 underline"
            >
              ABN 55 657 961 058 Verified on ABR
            </a>
            .
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[#00B67A] font-semibold">TrustScore 4.4 / 5.0 (2,837 Verified Reviews)</span>
            <span>•</span>
            <span>Australian Consumer Law Compliant</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
