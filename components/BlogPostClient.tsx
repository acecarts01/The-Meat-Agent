'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChevronRight, Clock, BookOpen, ArrowRight, MessageCircle } from 'lucide-react';
import { BlogPost, sectionAnchorId, BlogTable } from '@/lib/blog-data';
import { generate160Catalog } from '@/lib/products-160-data';
import { TOTAL_CATALOG_COUNT } from '@/lib/products-160-data';
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

const INLINE_LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/** Renders [text](url) as links: site-relative -> next/link, https -> external noopener. */
function renderInline(text: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  INLINE_LINK.lastIndex = 0;
  while ((m = INLINE_LINK.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const [, label, url] = m;
    const cls = 'text-amber-400 hover:text-amber-300 underline underline-offset-2';
    out.push(
      url.startsWith('/') ? (
        <Link key={m.index} href={url} className={cls}>{label}</Link>
      ) : (
        <a key={m.index} href={url} target="_blank" rel="noopener" className={cls}>{label}</a>
      )
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function BlogTableView({ table }: { table: BlogTable }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-stone-800">
      <table className="w-full text-xs sm:text-sm text-left">
        {table.caption && (
          <caption className="text-left text-xs text-stone-400 px-3 py-2 font-mono">{table.caption}</caption>
        )}
        <thead className="bg-stone-900 text-amber-400">
          <tr>
            {table.headers.map((h) => (
              <th key={h} scope="col" className="px-3 py-2 font-semibold whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-stone-800 text-stone-300">
          {table.rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-2 align-top">{renderInline(cell)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function BlogPostClient({ post, related }: BlogPostClientProps) {
  const router = useRouter();
  const { cart, cartCount, cartTotal, updateQuantity, removeItem, clearCart } = useCart();

  // Resolve the post's declared SKUs to real catalog products for the money links.
  const relatedProducts = React.useMemo(() => {
    if (!post.relatedSkus?.length) return [];
    const catalog = generate160Catalog();
    return post.relatedSkus
      .map((sku) => catalog.find((p) => p.sku === sku))
      .filter((p): p is NonNullable<typeof p> => Boolean(p));
  }, [post.relatedSkus]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isWholesaleOpen, setIsWholesaleOpen] = useState(false);
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);

  const handleNavbarNavigate = (pageKey: ActivePage, categorySlug?: string) => {
    if (pageKey === 'home') {
      router.push('/');
    } else if (pageKey === 'shop') {
      router.push(categorySlug ? `/shop/${categorySlug}` : '/shop');
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
          <Link href="/blog" className="hover:text-amber-400 transition-colors">
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
            alt={post.heroImageAlt || post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        {post.sections.length > 1 && (
          <nav
            aria-label="Table of contents"
            className="bg-stone-900 border border-stone-800 rounded-2xl p-5 space-y-2"
          >
            <div className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
              Contents
            </div>
            <ol className="space-y-1.5 text-sm">
              {post.sections.map((section) => (
                <li key={section.heading}>
                  <a
                    href={`#${sectionAnchorId(section.heading)}`}
                    className="text-stone-300 hover:text-amber-400 transition-colors"
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
              {post.faqs.length > 0 && (
                <li>
                  <a href="#faq" className="text-stone-300 hover:text-amber-400 transition-colors">
                    Frequently Asked Questions
                  </a>
                </li>
              )}
            </ol>
          </nav>
        )}

        <article className="prose prose-invert prose-sm sm:prose-base max-w-none space-y-6">
          {post.sections.map((section, idx) => (
            <section key={idx} className="space-y-3 scroll-mt-24">
              <h2
                id={sectionAnchorId(section.heading)}
                className="text-lg sm:text-xl font-bold text-white scroll-mt-24"
              >
                {section.heading}
              </h2>
              {section.body.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-stone-300 leading-relaxed">
                  {renderInline(paragraph)}
                </p>
              ))}
              {section.table && <BlogTableView table={section.table} />}
              {section.image && (
                <figure className="space-y-2">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-900 border border-stone-800">
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 768px"
                      className="object-cover"
                    />
                  </div>
                  {section.image.caption && (
                    <figcaption className="text-xs text-stone-500">{section.image.caption}</figcaption>
                  )}
                </figure>
              )}
            </section>
          ))}
        </article>

        {post.outboundLinks && post.outboundLinks.length > 0 && (
          <div className="border-t border-stone-800 pt-6 space-y-3">
            <h2 className="text-lg font-bold text-white">Sources &amp; Further Viewing</h2>
            <ul className="space-y-2 text-sm">
              {post.outboundLinks.map((link) => (
                <li key={link.url} className="text-stone-300">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener"
                    className="text-amber-400 hover:text-amber-300 underline"
                  >
                    {link.label}
                  </a>
                  <span className="text-stone-500"> — {link.source}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {post.faqs.length > 0 && (
          <div id="faq" className="border-t border-stone-800 pt-6 space-y-3 scroll-mt-24">
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
              Browse the full {TOTAL_CATALOG_COUNT}-cut wholesale catalog or ask our butchery concierge a question.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href={`/shop/${post.categorySlug}`}
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

        <section
          aria-labelledby="trade-supply-heading"
          className="border border-amber-500/30 bg-stone-900 rounded-2xl p-5 sm:p-6 space-y-3"
        >
          <h2 id="trade-supply-heading" className="text-lg font-bold text-white">
            We supply hotels, restaurants, cafés and caterers
          </h2>
          <p className="text-sm text-stone-300 leading-relaxed">
            Meat Direct (The Meat Agent) supplies hotels and resorts, restaurants and steakhouses, cafés, catering
            companies, butchers and resellers, and gyms and meal-prep kitchens. Every product except pork and pork sausages is halal certified (AFIC,
            with IFANCA and HCA also held), and you choose the cut state: whole primal, portioned, diced to spec,
            vacuum-sealed, fresh chilled or snap-frozen. Daily or weekly cold-chain delivery runs in the Ipswich and
            Brisbane metro area, weekly delivery runs statewide and interstate by tracked courier, and monthly bulk
            orders go anywhere in Australia. Trade accounts pay on order by PayID, bank transfer or crypto.
          </p>
          <Link
            href="/wholesale"
            className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors"
          >
            <span>Open a trade account</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </section>

        {relatedProducts.length > 0 && (
          <div className="border-t border-stone-800 pt-6 space-y-4">
            <h2 className="text-lg font-bold text-white">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedProducts.map((p) => (
                <Link
                  key={p.sku}
                  href={`/shop/${p.categorySlug}/${p.slug}`}
                  className="bg-stone-900 border border-stone-800 hover:border-amber-500/60 rounded-xl overflow-hidden flex flex-col group transition-all"
                >
                  <div className="relative aspect-[4/3] bg-stone-950 overflow-hidden">
                    <Image
                      src={p.images.rawFallback}
                      alt={`${p.name} — ${p.weight} from The Meat Agent`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3 space-y-1">
                    <span className="text-[10px] font-mono text-amber-400 uppercase">{p.subcategory}</span>
                    <h3 className="text-xs font-bold text-white leading-snug group-hover:text-amber-400 transition-colors line-clamp-2">
                      {p.name}
                    </h3>
                    <div className="text-sm font-bold text-amber-400">${p.price.toFixed(2)} AUD</div>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              href={`/shop/${post.categorySlug}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 hover:text-amber-300"
            >
              Browse the full range
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {related.length > 0 && (
          <div className="border-t border-stone-800 pt-6 space-y-4">
            <h2 className="text-lg font-bold text-white">Related Reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
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
            <Link href="/blog" className="hover:text-amber-400 transition-colors">
              Blog
            </Link>
            <span>•</span>
            <Link href="/shop" className="hover:text-amber-400 transition-colors">
              Full {TOTAL_CATALOG_COUNT} Cuts Catalog
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
