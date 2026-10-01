'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  ChefHat,
  ShoppingBag,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  Layers,
  Award,
  Truck,
  Building2,
  Mail,
  Scale,
  MessageSquare,
  HelpCircle,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { SHOP_CATEGORIES_160 } from '@/lib/products-160-data';
import { TopAnnouncementSlider } from '@/components/TopAnnouncementSlider';

export type ActivePage = 'home' | 'shop' | 'blog' | 'about' | 'contact' | 'wholesale' | 'merchant-portal';

interface NavbarProps {
  currentPage: ActivePage;
  onNavigate: (page: ActivePage, categorySlug?: string) => void;
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  onOpenContact: () => void;
  onOpenWholesale: () => void;
  onOpenTracking: () => void;
}

export function Navbar({
  currentPage,
  onNavigate,
  cartCount,
  cartTotal,
  onOpenCart,
  onOpenContact,
  onOpenWholesale,
  onOpenTracking
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShopDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavigate = (page: ActivePage, categorySlug?: string) => {
    onNavigate(page, categorySlug);
    setMobileMenuOpen(false);
    setShopDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0c0a09]/95 border-b border-stone-800/90 backdrop-blur-xl">
      {/* 1. Top Announcement Bar — Slider Revolution */}
      <TopAnnouncementSlider />

      {/* 2. Main Navigation Bar — Clean, uncrowded layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Identity / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-600 to-amber-700 border border-red-500/50 flex items-center justify-center text-white shadow-lg shadow-red-950/60 group-hover:scale-105 transition-transform">
            <ChefHat className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-base sm:text-lg font-black tracking-tight text-white group-hover:text-amber-400 transition-colors">
                THE MEAT AGENT
              </span>
              <span className="text-[10px] bg-red-600/30 text-red-300 border border-red-500/40 px-1.5 py-0.2 rounded font-mono font-bold">
                MEAT DIRECT
              </span>
            </div>
            <span className="text-[10px] text-stone-400 block -mt-0.5">
              Harrisville &amp; Ipswich QLD • Australia
            </span>
          </div>
        </Link>

        {/* Desktop Primary Navigation Menu: Shop (with dropdown), About Us, Contact, Wholesale */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {/* Shop with Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setShopDropdownOpen(true)}
            onMouseLeave={() => setShopDropdownOpen(false)}
          >
            <div className="flex items-center">
              <Link
                href="/shop/"
                className={`px-3 py-2 rounded-l-lg text-xs font-semibold transition-all cursor-pointer ${
                  currentPage === 'shop'
                    ? 'bg-stone-800 text-white shadow-sm'
                    : 'text-stone-300 hover:text-white hover:bg-stone-900/80'
                }`}
              >
                Shop (160 Cuts)
              </Link>
              <button
                onClick={() => setShopDropdownOpen(!shopDropdownOpen)}
                className={`px-1.5 py-2 rounded-r-lg text-xs font-semibold transition-all cursor-pointer ${
                  currentPage === 'shop'
                    ? 'bg-stone-800 text-white'
                    : 'text-stone-300 hover:text-white hover:bg-stone-900/80'
                }`}
                aria-label="Toggle shop by category dropdown"
              >
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${shopDropdownOpen ? 'rotate-180 text-amber-400' : ''}`} />
              </button>
            </div>

            {/* Shop by Category Dropdown Menu */}
            {shopDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-80 bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl p-3 z-50 animate-fadeIn space-y-2">
                <div className="px-2 pt-1 pb-1.5 border-b border-stone-800 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-3 h-3 text-amber-500" />
                    <span>Shop by Category</span>
                  </span>
                  <Link
                    href="/shop/"
                    className="text-[10px] text-stone-400 hover:text-white transition-colors cursor-pointer"
                  >
                    View All 160
                  </Link>
                </div>

                <div className="max-h-72 overflow-y-auto space-y-1 pr-1 [scrollbar-width:none]">
                  <Link
                    href="/shop/"
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-bold text-white hover:bg-stone-800 flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <span>🥩 All 160 Wholesale Cuts</span>
                    <span className="text-[10px] bg-red-950 text-red-300 border border-red-800 px-1.5 py-0.2 rounded font-mono">
                      160
                    </span>
                  </Link>

                  {SHOP_CATEGORIES_160.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/shop/${cat.slug}/`}
                      className="w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium text-stone-300 hover:text-white hover:bg-stone-800 flex items-center justify-between transition-colors cursor-pointer"
                    >
                      <span className="truncate">{cat.name}</span>
                      <span className="text-[10px] font-mono text-amber-400 bg-stone-950 px-1.5 py-0.2 rounded border border-stone-800 shrink-0 ml-2">
                        {cat.itemCount}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Blog */}
          <Link
            href="/blog/"
            className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              currentPage === 'blog'
                ? 'bg-stone-800 text-white shadow-sm'
                : 'text-stone-300 hover:text-white hover:bg-stone-900/80'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Blog</span>
          </Link>

          {/* About Us */}
          <button
            onClick={() => handleNavigate('about')}
            className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              currentPage === 'about'
                ? 'bg-stone-800 text-white shadow-sm'
                : 'text-stone-300 hover:text-white hover:bg-stone-900/80'
            }`}
          >
            About Us
          </button>

          {/* FAQ */}
          <button
            onClick={() => {
              if (currentPage !== 'home') {
                handleNavigate('home');
                setTimeout(() => {
                  const faqElem = document.getElementById('homepage-faq-section');
                  if (faqElem) faqElem.scrollIntoView({ behavior: 'smooth' });
                }, 150);
              } else {
                const faqElem = document.getElementById('homepage-faq-section');
                if (faqElem) faqElem.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-3 py-2 rounded-lg text-xs font-semibold text-stone-300 hover:text-white hover:bg-stone-900/80 transition-all cursor-pointer"
          >
            FAQ
          </button>

          {/* Contact */}
          <button
            onClick={onOpenContact}
            className="px-3 py-2 rounded-lg text-xs font-semibold text-stone-300 hover:text-white hover:bg-stone-900/80 transition-all cursor-pointer"
          >
            Contact
          </button>

          {/* Wholesale */}
          <button
            onClick={onOpenWholesale}
            className="px-3 py-2 rounded-lg text-xs font-semibold text-stone-300 hover:text-white hover:bg-stone-900/80 transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Building2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Wholesale</span>
          </button>
        </nav>

        {/* Right Actions: WhatsApp + Cart + Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* WhatsApp Direct Concierge */}
          <a
            href="https://wa.me/61480804189?text=Hello%20The%20Meat%20Agent,%20I%20would%20like%20to%20order%20meat%20direct"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-stone-950 text-xs font-bold px-3.5 py-2 rounded-lg transition-all shadow-md shadow-emerald-950/40 cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp (+61 480 804 189)</span>
          </a>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white text-xs font-bold px-3.5 py-2 rounded-lg flex items-center gap-2 shadow-lg shadow-red-950/60 transition-all cursor-pointer relative"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Cart</span>
            <span className="bg-stone-950 text-white font-mono text-[10px] px-1.5 py-0.5 rounded-full font-bold">
              {cartCount}
            </span>
            {cartTotal > 0 && (
              <span className="font-mono text-stone-100 hidden sm:inline font-bold">
                ${cartTotal.toFixed(0)}
              </span>
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-950 border-b border-stone-800 px-4 pt-3 pb-5 space-y-3 animate-fadeIn">
          <div className="space-y-1 text-xs">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full text-left py-2.5 px-3 rounded-lg font-medium flex items-center justify-between transition-colors ${
                currentPage === 'home' ? 'bg-stone-800 text-white font-bold' : 'text-stone-300 hover:bg-stone-900'
              }`}
            >
              <span>Home</span>
            </Link>

            {/* Shop Accordion in Mobile */}
            <div className="border border-stone-800 rounded-lg p-2 space-y-2 bg-stone-900/40">
              <Link
                href="/shop/"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-left font-bold text-amber-400 flex items-center justify-between py-1"
              >
                <span>Shop All 160 Cuts</span>
                <span className="text-[10px] font-mono bg-stone-800 px-2 py-0.5 rounded text-stone-300">
                  160 Items
                </span>
              </Link>

              <div className="grid grid-cols-2 gap-1.5 pt-1 border-t border-stone-800/80">
                {SHOP_CATEGORIES_160.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/shop/${cat.slug}/`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-left text-[11px] text-stone-300 hover:text-white py-1 px-1.5 rounded hover:bg-stone-800 truncate"
                  >
                    • {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/blog/"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full text-left py-2.5 px-3 rounded-lg font-medium flex items-center justify-between transition-colors ${
                currentPage === 'blog' ? 'bg-stone-800 text-white font-bold' : 'text-stone-300 hover:bg-stone-900'
              }`}
            >
              <span>Blog</span>
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            </Link>

            <button
              onClick={() => handleNavigate('about')}
              className={`w-full text-left py-2.5 px-3 rounded-lg font-medium flex items-center justify-between transition-colors ${
                currentPage === 'about' ? 'bg-stone-800 text-white font-bold' : 'text-stone-300 hover:bg-stone-900'
              }`}
            >
              <span>About Us</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (currentPage !== 'home') {
                  handleNavigate('home');
                  setTimeout(() => {
                    const faqElem = document.getElementById('homepage-faq-section');
                    if (faqElem) faqElem.scrollIntoView({ behavior: 'smooth' });
                  }, 150);
                } else {
                  const faqElem = document.getElementById('homepage-faq-section');
                  if (faqElem) faqElem.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full text-left py-2.5 px-3 rounded-lg font-medium text-stone-300 hover:bg-stone-900 flex items-center justify-between"
            >
              <span>Frequently Asked Questions (FAQ)</span>
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full text-left py-2.5 px-3 rounded-lg font-medium text-stone-300 hover:bg-stone-900 flex items-center justify-between"
            >
              <span>Contact Us</span>
              <Mail className="w-3.5 h-3.5 text-stone-400" />
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWholesale();
              }}
              className="w-full text-left py-2.5 px-3 rounded-lg font-medium text-stone-300 hover:bg-stone-900 flex items-center justify-between"
            >
              <span>Wholesale Trade Desk</span>
              <Building2 className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>

          <div className="pt-2 border-t border-stone-800 flex items-center gap-2">
            <a
              href="https://wa.me/61480804189"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#25D366] text-stone-950 text-xs font-bold py-2.5 rounded-lg flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Concierge</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTracking();
              }}
              className="bg-stone-900 text-stone-300 text-xs font-semibold py-2.5 px-3 rounded-lg border border-stone-800"
            >
              Track Order
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
