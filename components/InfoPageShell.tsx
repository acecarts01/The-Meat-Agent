'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navbar, ActivePage } from '@/components/Navbar';
import { useCart } from '@/lib/cart-store';
import { CartAndCheckoutModal } from '@/components/CartAndCheckoutModal';
import { ContactModal } from '@/components/ContactModal';
import { WholesaleModal } from '@/components/WholesaleModal';
import { OrderTrackingModal } from '@/components/OrderTrackingModal';

// Shared shell (navbar, footer, modals) for static trust pages. Page content is passed in as server-rendered children.
export function InfoPageShell({ currentPage, children }: { currentPage: ActivePage; children: React.ReactNode }) {
  const router = useRouter();
  const { cart, cartCount, cartTotal, updateQuantity, removeItem, clearCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isWholesaleOpen, setIsWholesaleOpen] = useState(false);
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);

  const handleNavbarNavigate = (pageKey: ActivePage, categorySlug?: string) => {
    if (pageKey === 'home') router.push('/');
    else if (pageKey === 'shop') router.push(categorySlug ? `/shop/${categorySlug}` : '/shop');
    else if (pageKey === 'contact') setIsContactOpen(true);
    else if (pageKey === 'wholesale') setIsWholesaleOpen(true);
    else if (pageKey === 'merchant-portal') router.push('/merchant-portal');
  };

  return (
    <div className="min-h-screen bg-[#0c0a09] text-stone-100 flex flex-col font-sans antialiased">
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavbarNavigate}
        cartCount={cartCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenWholesale={() => setIsWholesaleOpen(true)}
        onOpenTracking={() => setIsTrackingOpen(true)}
      />
      <main className="flex-1">{children}</main>
      <footer className="mt-10 bg-stone-950 border-t border-stone-900 py-8 px-4 sm:px-6 lg:px-8 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © 2023–2026 The Meat Agent (LPJH HOLDINGS PTY LTD). ABN 55 657 961 058.{' '}
            <a href="mailto:sales@themeatdirect.com.au" className="hover:text-amber-400 transition-colors">
              sales@themeatdirect.com.au
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>•</span>
            <Link href="/shop" className="hover:text-amber-400 transition-colors">Shop</Link>
            <span>•</span>
            <Link href="/blog" className="hover:text-amber-400 transition-colors">Blog</Link>
            <span>•</span>
            <Link href="/about" className="hover:text-amber-400 transition-colors">About</Link>
            <span>•</span>
            <Link href="/shipping" className="hover:text-amber-400 transition-colors">Shipping &amp; Delivery</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-amber-400 transition-colors">Contact</Link>
            <span>•</span>
            <Link href="/returns" className="hover:text-amber-400 transition-colors">Returns</Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-amber-400 transition-colors">Privacy</Link>
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
