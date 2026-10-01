'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChevronRight, Clock, BookOpen } from 'lucide-react';
import { BlogPost } from '@/lib/blog-data';
import { useCart } from '@/lib/cart-store';
import { Navbar, ActivePage } from '@/components/Navbar';
import { CartAndCheckoutModal } from '@/components/CartAndCheckoutModal';
import { ContactModal } from '@/components/ContactModal';
import { WholesaleModal } from '@/components/WholesaleModal';
import { OrderTrackingModal } from '@/components/OrderTrackingModal';

interface BlogIndexClientProps {
  posts: BlogPost[];
}

export function BlogIndexClient({ posts }: BlogIndexClientProps) {
  const router = useRouter();
  const { cart, cartCount, cartTotal, updateQuantity, removeItem, clearCart } = useCart();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isWholesaleOpen, setIsWholesaleOpen] = useState(false);
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);

  const handleNavbarNavigate = (pageKey: ActivePage, categorySlug?: string) => {
    if (pageKey === 'home') {
      router.push('/');
    } else if (pageKey === 'shop') {
      router.push(categorySlug ? `/shop/${categorySlug}/` : '/shop/');
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
        currentPage="blog"
        onNavigate={handleNavbarNavigate}
        cartCount={cartCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenWholesale={() => setIsWholesaleOpen(true)}
        onOpenTracking={() => setIsTrackingOpen(true)}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        <nav aria-label="Breadcrumb" className="text-xs text-stone-400 flex flex-wrap items-center gap-1.5 font-mono">
          <Link href="/" className="hover:text-amber-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
          <span className="text-amber-400 font-semibold" aria-current="page">
            The Butcher&apos;s Journal
          </span>
        </nav>

        <div className="space-y-2 border-b border-stone-800 pb-6">
          <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            The Butcher&apos;s Journal
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Buying Guides &amp; Meat Science, Not Recipe Filler
          </h1>
          <p className="text-sm text-stone-400 max-w-2xl">
            {posts.length} in-depth articles on marbling, aging, cold-chain logistics, and how to
            actually buy smarter — written from inside a working wholesale butchery, not a
            content farm.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="bg-stone-900 border border-stone-800 hover:border-amber-500/60 rounded-xl overflow-hidden flex flex-col group transition-all"
            >
              <div className="relative aspect-[4/3] bg-stone-950 overflow-hidden">
                <Image
                  src={post.heroImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-amber-600 text-stone-950 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase shadow">
                    {post.niche}
                  </span>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col space-y-2">
                <div className="flex items-center gap-1.5 text-[10px] text-stone-500 font-mono">
                  <Clock className="w-3 h-3" />
                  <span>{post.readingMinutes} min read</span>
                </div>
                <h2 className="text-sm font-bold text-white leading-snug group-hover:text-amber-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-xs text-stone-400 line-clamp-3 flex-1">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="mt-16 bg-stone-950 border-t border-stone-900 py-8 px-4 sm:px-6 lg:px-8 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© 2023–2026 The Meat Agent (LPJH HOLDINGS PTY LTD). ABN 55 657 961 058.</div>
          <div className="flex items-center gap-3">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <span>•</span>
            <Link href="/shop/" className="hover:text-amber-400 transition-colors">
              Full 160 Cuts Catalog
            </Link>
          </div>
        </div>
      </footer>

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
