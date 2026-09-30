'use client';

import React, { useState, useMemo } from 'react';
import {
  ChevronDown,
  Search,
  HelpCircle,
  MessageCircle,
  Building2,
  ShieldCheck,
  Truck,
  Flame,
  Scale,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export interface FaqItem {
  id: string;
  category: 'orders' | 'cold-chain' | 'provenance' | 'payment';
  categoryLabel: string;
  question: string;
  answer: string;
  tags: string[];
}

export const HOMEPAGE_FAQS: FaqItem[] = [
  {
    id: 'faq-01',
    category: 'orders',
    categoryLabel: 'Wholesale & Orders',
    question: 'What is the minimum order threshold, and how do I qualify for free cold-chain delivery?',
    answer: 'Our minimum wholesale order threshold is $423.00 AUD. This direct commercial threshold bypasses supermarket middleman markups, enabling farm-gate pricing on MSA-graded beef, Wagyu, and smoker primals. Orders exceeding $2,000.00 AUD qualify for complimentary refrigerated freight across our metropolitan delivery zones in Queensland, New South Wales, and Victoria.',
    tags: ['minimum order', 'threshold', 'free shipping', '$423', '$2000']
  },
  {
    id: 'faq-02',
    category: 'cold-chain',
    categoryLabel: 'Cold-Chain Freight',
    question: 'How does your sub-zero 48-hour cold-chain courier delivery work across Australia?',
    answer: 'Every allocation is cryovac-sealed in heavy-gauge barrier film, cushioned within high-density thermal wool insulation, and packed with sub-zero gel ice blocks. Our validated packaging maintains internal core meat temperatures below 2.5°C for 48 consecutive hours across regional and metropolitan routes. Real-time temperature logs accompany every refrigerated courier dispatch.',
    tags: ['cold-chain', 'thermal wool', 'temperature', 'refrigerated courier', 'sub-zero']
  },
  {
    id: 'faq-03',
    category: 'payment',
    categoryLabel: 'Payment & Crypto',
    question: 'How does the 10% Crypto Discount work during checkout?',
    answer: 'Customers settling allocations via Bitcoin (BTC) or Tether (USDT) automatically receive a 10% discount deducted from their product subtotal at checkout. Because blockchain settlement eliminates traditional merchant processing fees and card chargeback overhead, we pass those exact financial savings directly back to Australian families and hospitality operators.',
    tags: ['crypto', 'bitcoin', 'usdt', 'discount', '10%', 'payment']
  },
  {
    id: 'faq-04',
    category: 'provenance',
    categoryLabel: 'Grading & Provenance',
    question: 'What cattle breeds and marbling grades do you allocate from Australian stations?',
    answer: 'We supply 100% Australian MSA-graded pasture-fed Black Angus and Fullblood Wagyu sourced from certified Victorian and Queensland stations, including O\'Connor, Westholme, and Stone Axe. Marbling scores range from everyday table grade (MB3–MB5) up to competition-reserve Wagyu (MB8–MB9+) with full provenance traceability from paddock to plate.',
    tags: ['wagyu', 'angus', 'marbling', 'msa', 'stone axe', 'westholme', 'mb9+']
  },
  {
    id: 'faq-05',
    category: 'orders',
    categoryLabel: 'Wholesale & Orders',
    question: 'Can I split large primal cuts or customize my portion sizes for competition or home use?',
    answer: 'Whole competition briskets, short rib plates, and dry-aged ribeye loins are supplied vacuum-sealed in whole primal format to preserve moisture and shelf life. For custom hospitality portioning, French-trimmed lamb cutlets, or steak slicing, our direct butchery concierge desk is available via WhatsApp (+61 480 804 189).',
    tags: ['primal', 'portioning', 'brisket', 'butchery concierge', 'custom']
  },
  {
    id: 'faq-06',
    category: 'payment',
    categoryLabel: 'Payment & Crypto',
    question: 'What payment methods are supported for wholesale and consumer orders?',
    answer: 'We accept instantaneous Australian PayID (Osko) transfers, direct corporate bank BSB/account transfers, and cryptocurrency settlement (BTC and USDT on TRC20/ERC20). Every order generates an immediate tax invoice bearing our registered business details (ABN: 55 657 961 058, LPJH HOLDINGS PTY LTD) for tax accounting and commercial compliance.',
    tags: ['payid', 'osko', 'bank transfer', 'invoice', 'abn', 'settlement']
  },
  {
    id: 'faq-07',
    category: 'cold-chain',
    categoryLabel: 'Cold-Chain Freight',
    question: 'How do I store and handle dry-aged and cryovac-sealed meat upon arrival?',
    answer: 'Inspect the packaging vacuum seal immediately upon arrival and store in your refrigerator below 3.0°C. Unopened cryovac packs remain fresh for up to 21 days refrigerated. Prior to cooking dry-aged cuts or smoker briskets, rest the meat on a wire rack to allow intramuscular juices to stabilize.',
    tags: ['storage', 'cryovac', 'dry-aged', 'resting', 'fridge temperature']
  },
  {
    id: 'faq-08',
    category: 'provenance',
    categoryLabel: 'Grading & Provenance',
    question: 'Where is your facility located, and do you offer local collection in Queensland?',
    answer: 'Our primary processing and logistics facility operates from Ipswich and the Scenic Rim region in Queensland. While our primary distribution model is specialized cold-chain freight direct to your door across QLD, NSW, and VIC, local commercial collection can be scheduled directly with our wholesale trade desk.',
    tags: ['ipswich', 'queensland', 'scenic rim', 'collection', 'facility']
  }
];

interface HomepageFaqSectionProps {
  onOpenContact?: () => void;
  onOpenWholesale?: () => void;
}

export function HomepageFaqSection({
  onOpenContact,
  onOpenWholesale
}: HomepageFaqSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaqIds, setOpenFaqIds] = useState<Set<string>>(new Set(['faq-01', 'faq-02']));

  // Filter FAQs
  const filteredFaqs = useMemo(() => {
    return HOMEPAGE_FAQS.filter((faq) => {
      const matchCategory = activeCategory === 'all' || faq.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q) ||
        faq.tags.some((t) => t.toLowerCase().includes(q));
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setOpenFaqIds(new Set(HOMEPAGE_FAQS.map((f) => f.id)));
  };

  const collapseAll = () => {
    setOpenFaqIds(new Set());
  };

  // Structured FAQPage Schema for WebForge AI Visibility & SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: HOMEPAGE_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="homepage-faq-section">
      {/* Inject Structured FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header Section (Zero-Pill Typography & Single-Elevation Depth) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-800 pb-6">
        <div>
          {/* Unboxed Metadata Line with Typographic Dots */}
          <div className="text-xs text-stone-400 font-mono flex items-center gap-2 mb-2">
            <span className="text-amber-400 font-bold">Frequently Asked Questions</span>
            <span>·</span>
            <span>Direct Commercial Allocation</span>
            <span>·</span>
            <span className="text-emerald-400 font-semibold">ABN: 55 657 961 058</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Clear Answers for Serious Meat Buyers
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-1.5 max-w-2xl leading-relaxed">
            Everything you need to know about our $423 minimum order threshold, sub-zero 48-hour cold-chain freight, MSA marbling standards, and 10% crypto settlement.
          </p>
        </div>

        {/* Global Controls: Expand / Collapse */}
        <div className="flex items-center gap-2 text-xs">
          <button
            type="button"
            onClick={expandAll}
            className="py-2 px-3.5 rounded-lg border border-stone-800 bg-stone-900/60 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer"
          >
            Expand All
          </button>
          <button
            type="button"
            onClick={collapseAll}
            className="py-2 px-3.5 rounded-lg border border-stone-800 bg-stone-900/60 hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Filter Tabs & Keyword Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Segmented Category Buttons (Ergonomic 2x padding, unboxed) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 [scrollbar-width:none]">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`py-2 px-3.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-amber-950/70 border border-amber-500/60 text-amber-300'
                : 'bg-stone-900/60 border border-stone-800 text-stone-400 hover:text-white'
            }`}
          >
            All Questions ({HOMEPAGE_FAQS.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory('orders')}
            className={`py-2 px-3.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              activeCategory === 'orders'
                ? 'bg-stone-800 border border-stone-700 text-white font-bold'
                : 'bg-stone-900/60 border border-stone-800 text-stone-400 hover:text-white'
            }`}
          >
            Wholesale &amp; Orders
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory('cold-chain')}
            className={`py-2 px-3.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              activeCategory === 'cold-chain'
                ? 'bg-blue-950/70 border border-blue-500/60 text-blue-300 font-bold'
                : 'bg-stone-900/60 border border-stone-800 text-stone-400 hover:text-white'
            }`}
          >
            Cold-Chain Freight
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory('provenance')}
            className={`py-2 px-3.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              activeCategory === 'provenance'
                ? 'bg-emerald-950/70 border border-emerald-500/60 text-emerald-300 font-bold'
                : 'bg-stone-900/60 border border-stone-800 text-stone-400 hover:text-white'
            }`}
          >
            Grading &amp; Provenance
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory('payment')}
            className={`py-2 px-3.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              activeCategory === 'payment'
                ? 'bg-purple-950/70 border border-purple-500/60 text-purple-300 font-bold'
                : 'bg-stone-900/60 border border-stone-800 text-stone-400 hover:text-white'
            }`}
          >
            Payment &amp; Crypto
          </button>
        </div>

        {/* Fast Keyword Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-500" />
          <input
            type="text"
            placeholder="Search questions or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-stone-900 border border-stone-800 rounded-lg pl-10 pr-4 py-2 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>
      </div>

      {/* Accordion List (Single Elevation Depth with Hairline Dividers) */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="bg-stone-950 border border-stone-800/80 rounded-2xl py-12 text-center text-xs text-stone-500 space-y-1">
            <div>No matching questions found for &ldquo;{searchQuery}&rdquo;.</div>
            <div className="text-[11px] text-stone-600">Try adjusting your search terms or selecting &lsquo;All Questions&rsquo;.</div>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openFaqIds.has(faq.id);

            return (
              <div
                key={faq.id}
                className="bg-stone-950 border border-stone-800/80 hover:border-stone-750 rounded-xl overflow-hidden transition-all"
              >
                {/* Question Trigger Button */}
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-500"
                >
                  <div className="space-y-1.5">
                    {/* Unboxed Category Line */}
                    <div className="text-[11px] font-mono text-stone-500 uppercase tracking-wider">
                      {faq.categoryLabel}
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`p-1.5 rounded-lg border border-stone-800 bg-stone-900/60 text-stone-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-amber-400 border-amber-600/40' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Direct-Answer Content Panel (40–60 words direct answer) */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 border-t border-stone-900/80 animate-fadeIn">
                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-4 font-sans">
                      {faq.answer}
                    </p>

                    {/* Unboxed Metadata & Direct Help Line */}
                    <div className="pt-4 mt-4 border-t border-stone-900 flex flex-wrap items-center justify-between gap-3 text-[11px] text-stone-500">
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Verified Commercial Operating Policy</span>
                        <span>·</span>
                        <span>Direct Farm-Gate Model</span>
                      </div>

                      <div className="flex items-center gap-2 font-mono text-stone-400">
                        {faq.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-stone-500">
                            #{tag.replace(/\s+/g, '')}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Trust & Direct Concierge Quick Action Bar */}
      <div className="bg-stone-900/50 border border-stone-800 rounded-2xl p-6 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <h4 className="text-sm font-bold text-white tracking-tight">
              Have a specific butchery or hospitality inquiry?
            </h4>
          </div>
          <p className="text-xs text-stone-400 leading-relaxed max-w-xl">
            Our master butchers and cold-chain dispatch coordinators are on standby 6 days a week to review custom specs, restaurant allocations, or delivery logistics.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          {onOpenContact && (
            <button
              type="button"
              onClick={onOpenContact}
              className="py-2.5 px-5 rounded-lg border border-stone-800 bg-stone-900 hover:bg-stone-800 text-stone-200 hover:text-white text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-stone-400" />
              <span>Contact Concierge Desk</span>
            </button>
          )}

          {onOpenWholesale && (
            <button
              type="button"
              onClick={onOpenWholesale}
              className="py-2.5 px-5 rounded-lg bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md shadow-red-950/40 cursor-pointer"
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Wholesale Trade Application</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
