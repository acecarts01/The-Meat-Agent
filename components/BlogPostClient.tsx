'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChevronRight, Clock, BookOpen, ArrowRight, MessageCircle } from 'lucide-react';
import { BlogPost } from '@/lib/blog-data';
import { useCart } from '@/lib/cart-store';
import { Navbar, ActivePage } from '@/components/Navbar';
import { CartAndCheckoutModal } from '@/components/CartAndCheckoutModal';
import { ContactModal } from '@/components/ContactModal';
import { WholesaleModal } from '@/components/WholesaleModal';
import { OrderTrackingModal } from '@/components/OrderTrackingModal';

interface BlogPostClientProps {
  post: BlogPost;
  related: BlogPost[];
}

export function BlogPostClient({ post, related }: BlogPostClientProps) {
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

      <main className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <nav aria-label="Breadcrumb" className="text-xs text-stone-400 flex flex-wrap items-center gap-1.5 font-mono">
          <Link href="/" className="hover:text-amber-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
          <Link href="/blog/" className="hover:text-amber-400 transition-colors">
            Blog
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
          <span className="text-amber-400 font-semibold truncate max-w-[200px]" aria-current="page">
            {post.title}
          </span>
        </nav>

        <div className="space-y-3">
          <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
            {post.niche}
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-xs text-stone-500 font-mono">
            <span>
              {new Date(post.publishedDate).toLocaleDateString('en-AU', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readingMinutes} min read
            </span>
          </div>
        </div>

        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-900 border border-stone-800">
          <Image
            src={post.heroImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        <article className="prose prose-invert prose-sm sm:prose-base max-w-none space-y-6">
          {post.sections.map((section, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-white">{section.heading}</h2>
              {section.body.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-stone-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </article>

        {post.faqs.length > 0 && (
          <div className="border-t border-stone-800 pt-6 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-400" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-2">
              {post.faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="bg-stone-900 border border-stone-800 rounded-lg p-3.5 group"
                >
                  <summary className="text-sm font-semibold text-white cursor-pointer list-none flex items-center justify-between gap-2">
                    <span>{faq.question}</span>
                    <ChevronRight className="w-4 h-4 text-amber-400 shrink-0 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="text-xs text-stone-400 mt-2 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="text-[10px] font-mono text-stone-500 uppercase">Related searches:</span>
          {[post.primaryKeyword, ...post.supportingKeywords].map((kw) => (
            <span
              key={kw}
              className="text-[10px] font-mono text-stone-400 bg-stone-900 border border-stone-800 px-2 py-1 rounded-full"
            >
              {kw}
            </span>
          ))}
        </div>

        <div className="border-t border-stone-800 pt-6 bg-stone-900 border border-stone-800 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-white">Ready to order direct from the source?</h3>
            <p className="text-xs text-stone-400">
              Browse the full 160-cut wholesale catalog or ask our butchery concierge a question.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href={`/shop/${post.categorySlug}/`}
              className="bg-red-600 hover:bg-red-500 text-white text-xs font-bold px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <span>Shop {post.niche}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="https://wa.me/61480804189"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-stone-950 text-xs font-bold px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Ask Us</span>
            </a>
          </div>
        </div>

        {related.length > 0 && (
          <div className="border-t border-stone-800 pt-6 space-y-4">
            <h2 className="text-lg font-bold text-white">Related Reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}/`}
                  className="bg-stone-900 border border-stone-800 hover:border-amber-500/60 rounded-xl overflow-hidden flex flex-col group transition-all"
                >
                  <div className="relative aspect-[4/3] bg-stone-950 overflow-hidden">
                    <Image
                      src={r.heroImage}
                      alt={r.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3 space-y-1">
                    <span className="text-[10px] font-mono text-amber-400 uppercase">{r.niche}</span>
                    <h3 className="text-xs font-bold text-white leading-snug group-hover:text-amber-400 transition-colors line-clamp-2">
                      {r.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

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
            <Link href="/blog/" className="hover:text-amber-400 transition-colors">
              Blog
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
