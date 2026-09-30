'use client';

import React, { useState, useMemo } from 'react';
import {
  ShieldCheck,
  Search,
  Sparkles,
  Send,
  CheckCircle2,
  Clock,
  MessageSquare,
  AlertCircle,
  ThumbsUp,
  Download,
  Check,
  RefreshCw,
  Award,
  Thermometer,
  Flame,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  FileText
} from 'lucide-react';
import { TrustpilotReview } from '@/lib/trustpilot-data';

interface EnterpriseMerchantPortalProps {
  reviews: TrustpilotReview[];
  onUpdateReviewReply: (reviewId: string, reply: { author: string; date: string; text: string }) => void;
  onClosePortal?: () => void;
}

type QueueFilter = 'all' | 'needs-reply' | 'care' | 'praise';
type PersonaType = 'artisan' | 'logistics' | 'concierge' | 'pitmaster';

export function EnterpriseMerchantPortal({
  reviews,
  onUpdateReviewReply,
  onClosePortal
}: EnterpriseMerchantPortalProps) {
  // Queue state
  const [activeFilter, setActiveFilter] = useState<QueueFilter>('needs-reply');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedReviewId, setSelectedReviewId] = useState<string>(() => {
    const firstNeedsReply = reviews.find((r) => !r.companyReply);
    return firstNeedsReply ? firstNeedsReply.id : reviews[0]?.id || '';
  });

  // Dialogue Studio state
  const [selectedPersona, setSelectedPersona] = useState<PersonaType>('artisan');
  const [selectedTone, setSelectedTone] = useState<'warm' | 'resolution' | 'executive' | 'camaraderie'>('warm');
  const [draftReplyText, setDraftReplyText] = useState<string>(() => {
    const firstNeedsReply = reviews.find((r) => !r.companyReply);
    const initialReview = firstNeedsReply || reviews[0];
    return initialReview?.companyReply?.text || '';
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationError, setGenerationError] = useState<string | null>(null);
  const [publishSuccessNotice, setPublishSuccessNotice] = useState(false);

  // Selected review object
  const selectedReview = useMemo(() => {
    return reviews.find((r) => r.id === selectedReviewId) || reviews[0];
  }, [reviews, selectedReviewId]);

  // Select review and sync draft text cleanly without cascading effect setState
  const handleSelectReview = (review: TrustpilotReview) => {
    setSelectedReviewId(review.id);
    setDraftReplyText(review.companyReply?.text || '');
    setPublishSuccessNotice(false);
    setGenerationError(null);
  };

  // Operational SLA & Reputation Analytics Calculations
  const stats = useMemo(() => {
    const total = reviews.length;
    const answered = reviews.filter((r) => Boolean(r.companyReply)).length;
    const responseRate = total > 0 ? ((answered / total) * 100).toFixed(1) : '100.0';
    const constructiveNeedsCare = reviews.filter(
      (r) => (r.rating === 2 || r.rating === 3) && !r.companyReply
    ).length;
    const totalNeedsReply = reviews.filter((r) => !r.companyReply).length;

    return {
      total,
      answered,
      responseRate,
      constructiveNeedsCare,
      totalNeedsReply,
      medianResponseHours: '1.8'
    };
  }, [reviews]);

  // Filtered Reviews for Inquiry Queue
  const filteredQueue = useMemo(() => {
    return reviews.filter((r) => {
      // Segment filter
      if (activeFilter === 'needs-reply' && r.companyReply) return false;
      if (activeFilter === 'care' && (r.rating > 3 || r.companyReply)) return false;
      if (activeFilter === 'praise' && r.rating !== 5) return false;

      // Keyword search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = r.authorName.toLowerCase().includes(q);
        const matchLoc = r.authorLocation.toLowerCase().includes(q);
        const matchProduct = r.purchasedProduct.toLowerCase().includes(q);
        const matchText = r.content.toLowerCase().includes(q) || r.title.toLowerCase().includes(q);
        return matchName || matchLoc || matchProduct || matchText;
      }

      return true;
    });
  }, [reviews, activeFilter, searchQuery]);

  // Generate Smart Reply via Gemini 3.8 Flash API route
  const handleGenerateReply = async () => {
    if (!selectedReview) return;
    setIsGenerating(true);
    setGenerationError(null);

    try {
      const res = await fetch('/api/gemini/reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          review: selectedReview,
          persona: selectedPersona,
          tone: selectedTone
        })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to generate smart reply');
      }

      setDraftReplyText(data.reply);
    } catch (err: unknown) {
      console.error('Smart reply generation error:', err);
      setGenerationError(err instanceof Error ? err.message : 'Error generating response');
    } finally {
      setIsGenerating(false);
    }
  };

  // Insert 1-Click Persona Snippets
  const handleInsertSnippet = (snippet: string) => {
    setDraftReplyText((prev) => {
      if (!prev.trim()) return snippet;
      return `${prev.trim()}\n\n${snippet}`;
    });
  };

  // Persona Author Title Mapping
  const getPersonaAuthorTitle = (p: PersonaType): string => {
    switch (p) {
      case 'artisan':
        return 'Master Butcher & Provenance Team · The Heritage Meat Co. Australia';
      case 'logistics':
        return 'Cold-Chain Operations Desk · The Heritage Meat Co. Australia';
      case 'concierge':
        return 'Executive Concierge & Management · The Heritage Meat Co. Australia';
      case 'pitmaster':
        return 'Head Pitmaster & BBQ Allocations · The Heritage Meat Co. Australia';
    }
  };

  // Publish Official Reply
  const handlePublishReply = () => {
    if (!selectedReview || !draftReplyText.trim()) return;

    const replyPayload = {
      author: getPersonaAuthorTitle(selectedPersona),
      date: new Date().toLocaleDateString('en-AU', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }),
      text: draftReplyText.trim()
    };

    onUpdateReviewReply(selectedReview.id, replyPayload);
    setPublishSuccessNotice(true);
    setTimeout(() => setPublishSuccessNotice(false), 3500);
  };

  // Export Ledger
  const handleExportLedger = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(reviews, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `merchant-reply-ledger-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="w-full bg-[#0c0a09] text-stone-100 min-h-screen flex flex-col antialiased">
      {/* ========================================================================= */}
      {/* 1. ENTERPRISE REPUTATION & SLA ANALYTICS BAR */}
      {/* ========================================================================= */}
      <div className="border-b border-stone-800/80 bg-stone-950/90 py-5 px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Brand & Mandate Title */}
          <div>
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <h1 className="text-lg sm:text-xl font-black tracking-tight text-white">
                The Heritage Meat Co. Australia
              </h1>
              <span className="text-stone-600">·</span>
              <span className="text-xs font-semibold text-stone-400">
                Merchant Reply &amp; Consumer Dialogue Portal
              </span>
            </div>
            <div className="text-xs text-stone-500 mt-1 font-mono">
              ABN: 55 657 961 058 · Registered Australian Entity · TrustScore 4.4 / 5.0 (2,837 Total Ratings)
            </div>
          </div>

          {/* Operational SLA Metrics Grid (Unboxed, Zero-Pill Typography) */}
          <div className="flex flex-wrap items-center gap-8 lg:gap-12 text-xs">
            {/* SLA Metric 1: 30-Day Response Rate */}
            <div>
              <div className="text-stone-500 font-medium">30-Day Response Rate</div>
              <div className="text-xl font-bold font-mono text-emerald-400 mt-0.5">
                {stats.responseRate}%
              </div>
              <div className="text-[11px] text-stone-500 mt-0.5">Target &ge;95.0% SLA</div>
            </div>

            <div className="hidden sm:block w-[1px] h-10 bg-stone-800" />

            {/* SLA Metric 2: Median Response Time */}
            <div>
              <div className="text-stone-500 font-medium">Median Response Time</div>
              <div className="text-xl font-bold font-mono text-amber-400 mt-0.5">
                {stats.medianResponseHours} hrs
              </div>
              <div className="text-[11px] text-stone-500 mt-0.5">Publication to Dispatch</div>
            </div>

            <div className="hidden sm:block w-[1px] h-10 bg-stone-800" />

            {/* SLA Metric 3: Published Counter */}
            <div>
              <div className="text-stone-500 font-medium">Official Replies Published</div>
              <div className="text-xl font-bold font-mono text-white mt-0.5">
                {stats.answered} <span className="text-stone-600 font-normal text-sm">/ {stats.total}</span>
              </div>
              <div className="text-[11px] text-stone-500 mt-0.5">Verified on Trustpilot</div>
            </div>

            <div className="hidden sm:block w-[1px] h-10 bg-stone-800" />

            {/* SLA Metric 4: Reviews Awaiting Care */}
            <div>
              <div className="text-stone-500 font-medium">Constructive Reviews Awaiting Care</div>
              <div className="text-xl font-bold font-mono text-red-400 mt-0.5">
                {stats.constructiveNeedsCare}
              </div>
              <div className="text-[11px] text-stone-500 mt-0.5">2-Star &amp; 3-Star Feedback</div>
            </div>

            {/* Actions: Export / Return */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleExportLedger}
                className="py-2.5 px-5 rounded-lg border border-stone-800 bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
                title="Export complete reputation dialogue ledger"
              >
                <Download className="w-3.5 h-3.5 text-stone-400" />
                <span>Export Ledger</span>
              </button>

              {onClosePortal && (
                <button
                  onClick={onClosePortal}
                  className="py-2.5 px-5 rounded-lg border border-stone-700 bg-stone-800 hover:bg-stone-700 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Return to Storefront
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. TWO-COLUMN SPLIT-VIEW WORKSTATION (1440px Desktop Viewport Presence) */}
      {/* Left Column (5 Cols): High-Velocity Inquiry Queue */}
      {/* Right Column (7 Cols): Active Merchant Dialogue Studio */}
      {/* ========================================================================= */}
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* ======================================================================= */}
        {/* LEFT COLUMN: HIGH-VELOCITY INQUIRY QUEUE (5 COLUMNS) */}
        {/* ======================================================================= */}
        <div className="lg:col-span-5 bg-stone-950 border border-stone-800/80 rounded-2xl p-6 space-y-6 flex flex-col">
          {/* Queue Header & Filters */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-stone-800/80 pb-3">
              <div>
                <h2 className="text-base font-bold text-white tracking-tight">
                  High-Velocity Inquiry Queue
                </h2>
                <div className="text-xs text-stone-500 mt-0.5">
                  Showing {filteredQueue.length} customer interactions
                </div>
              </div>

              <div className="text-xs font-mono text-stone-400">
                {stats.totalNeedsReply} Awaiting Reply
              </div>
            </div>

            {/* Segmented Queue Filter Buttons (Ergonomic 2x padding, unboxed) */}
            <div className="grid grid-cols-4 gap-2">
              <button
                onClick={() => setActiveFilter('needs-reply')}
                className={`py-2 px-3 rounded-lg text-xs font-semibold text-center transition-colors cursor-pointer ${
                  activeFilter === 'needs-reply'
                    ? 'bg-amber-950/70 border border-amber-500/60 text-amber-300'
                    : 'bg-stone-900/60 border border-stone-800 text-stone-400 hover:text-white'
                }`}
              >
                Needs Reply
              </button>

              <button
                onClick={() => setActiveFilter('care')}
                className={`py-2 px-3 rounded-lg text-xs font-semibold text-center transition-colors cursor-pointer ${
                  activeFilter === 'care'
                    ? 'bg-red-950/70 border border-red-500/60 text-red-300'
                    : 'bg-stone-900/60 border border-stone-800 text-stone-400 hover:text-white'
                }`}
              >
                Care (2–3★)
              </button>

              <button
                onClick={() => setActiveFilter('praise')}
                className={`py-2 px-3 rounded-lg text-xs font-semibold text-center transition-colors cursor-pointer ${
                  activeFilter === 'praise'
                    ? 'bg-emerald-950/70 border border-emerald-500/60 text-emerald-300'
                    : 'bg-stone-900/60 border border-stone-800 text-stone-400 hover:text-white'
                }`}
              >
                5★ Praise
              </button>

              <button
                onClick={() => setActiveFilter('all')}
                className={`py-2 px-3 rounded-lg text-xs font-semibold text-center transition-colors cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-stone-800 border border-stone-700 text-white'
                    : 'bg-stone-900/60 border border-stone-800 text-stone-400 hover:text-white'
                }`}
              >
                All
              </button>
            </div>

            {/* Fast Keyword Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-500" />
              <input
                type="text"
                placeholder="Filter by customer, suburb, meat cut, or review text..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-stone-900 border border-stone-800 rounded-lg pl-10 pr-4 py-2.5 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-stone-600 transition-colors"
              />
            </div>
          </div>

          {/* Queue Review List (Zero-Pill Discipline, Hairline Dividers) */}
          <div className="divide-y divide-stone-800/80 max-h-[720px] overflow-y-auto pr-1 space-y-2 [scrollbar-width:thin]">
            {filteredQueue.length === 0 ? (
              <div className="py-12 text-center text-xs text-stone-500 space-y-1">
                <div>No reviews found in this segment.</div>
                <div className="text-[11px] text-stone-600">Try selecting &lsquo;All&rsquo; or clearing your search query.</div>
              </div>
            ) : (
              filteredQueue.map((review) => {
                const isSelected = review.id === selectedReviewId;
                const isAnswered = Boolean(review.companyReply);

                return (
                  <div
                    key={review.id}
                    onClick={() => handleSelectReview(review)}
                    className={`pt-3 pb-3 px-4 rounded-xl cursor-pointer transition-all border ${
                      isSelected
                        ? 'bg-stone-900 border-amber-600/60 shadow-md'
                        : 'bg-stone-950/60 border-stone-850 hover:bg-stone-900/60 hover:border-stone-800'
                    }`}
                  >
                    {/* Header: Stars & Status */}
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <div
                            key={i}
                            className="w-3.5 h-3.5 bg-[#00B67A] text-white flex items-center justify-center text-[9px] font-bold rounded-[2px]"
                          >
                            ★
                          </div>
                        ))}
                      </div>

                      {/* Unboxed Typographic Status Indicator */}
                      <div className="flex items-center gap-1.5 text-[11px]">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isAnswered ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse'
                          }`}
                        />
                        <span className={isAnswered ? 'text-emerald-400' : 'text-amber-400 font-medium'}>
                          {isAnswered ? 'Answered' : 'Awaiting Reply'}
                        </span>
                      </div>
                    </div>

                    {/* Author Name & Verified Flag */}
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-white">
                        {review.authorName}
                      </span>
                      {review.verifiedBuyer && (
                        <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-sans">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Verified Purchase</span>
                        </span>
                      )}
                    </div>

                    {/* Review Snippet Title */}
                    <p className="text-xs font-medium text-stone-300 mt-1 line-clamp-1">
                      {review.title}
                    </p>

                    {/* Strict Zero-Pill Metadata Line: Typographic Dots */}
                    <div className="text-[11px] text-stone-500 mt-2 flex flex-wrap items-center gap-1.5">
                      <span>{review.authorLocation}</span>
                      <span>·</span>
                      <span>{review.category}</span>
                      <span>·</span>
                      <span className="text-amber-400 font-mono">${review.orderTotalAud.toFixed(2)} AUD</span>
                      <span>·</span>
                      <span>{review.datePublished}</span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* ======================================================================= */}
        {/* RIGHT COLUMN: ACTIVE MERCHANT DIALOGUE STUDIO (7 COLUMNS) */}
        {/* ======================================================================= */}
        <div className="lg:col-span-7 bg-stone-950 border border-stone-800/80 rounded-2xl p-6 sm:p-8 space-y-6">
          {selectedReview ? (
            <>
              {/* Review Dossier Section */}
              <div className="border-b border-stone-800/80 pb-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="flex items-center gap-1">
                        {[...Array(selectedReview.rating)].map((_, i) => (
                          <div
                            key={i}
                            className="w-4 h-4 bg-[#00B67A] text-white flex items-center justify-center text-[10px] font-bold rounded-[2px]"
                          >
                            ★
                          </div>
                        ))}
                      </div>

                      <span className="text-xs font-bold text-white">
                        {selectedReview.rating}.0 / 5.0 Rating
                      </span>

                      {selectedReview.verifiedBuyer && (
                        <>
                          <span className="text-stone-600">·</span>
                          <span className="text-xs text-emerald-400 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Verified Farm-Gate Order</span>
                          </span>
                        </>
                      )}
                    </div>

                    <h2 className="text-lg font-black text-white tracking-tight">
                      &ldquo;{selectedReview.title}&rdquo;
                    </h2>
                  </div>

                  {/* Clean Unboxed Order Reference */}
                  <div className="text-xs font-mono text-stone-400 text-left sm:text-right">
                    <div>Order Ref: <strong>TMA-{selectedReview.id.toUpperCase()}</strong></div>
                    <div className="text-amber-400">${selectedReview.orderTotalAud.toFixed(2)} AUD</div>
                  </div>
                </div>

                {/* Unboxed Metadata Line (Zero-Pill Discipline) */}
                <div className="text-xs text-stone-400 flex flex-wrap items-center gap-2">
                  <strong className="text-white">{selectedReview.authorName}</strong>
                  <span>·</span>
                  <span>{selectedReview.authorLocation}</span>
                  <span>·</span>
                  <span>{selectedReview.category}</span>
                  <span>·</span>
                  <span className="text-stone-300 font-mono">{selectedReview.purchasedProduct}</span>
                  <span>·</span>
                  <span>Experience Date: {selectedReview.dateOfExperience}</span>
                </div>

                {/* Complete Review Text in Generous Whitespace */}
                <div className="bg-stone-900/60 border border-stone-800 p-5 rounded-xl text-xs sm:text-sm text-stone-200 leading-relaxed italic">
                  &ldquo;{selectedReview.content}&rdquo;
                </div>

                {/* Existing Reply Notice if already answered */}
                {selectedReview.companyReply && (
                  <div className="bg-emerald-950/40 border border-emerald-800/60 p-4 rounded-xl text-xs space-y-1.5">
                    <div className="flex items-center justify-between text-emerald-400 font-medium">
                      <span>Official Reply Currently Live on Trustpilot</span>
                      <span className="font-mono text-[11px] text-stone-400">{selectedReview.companyReply.date}</span>
                    </div>
                    <div className="text-stone-300 leading-relaxed font-sans">
                      {selectedReview.companyReply.text}
                    </div>
                  </div>
                )}
              </div>

              {/* AI Smart Reply Generator & Persona Selector (Powered by Gemini 3.8 Flash) */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span>AI Smart Reply Studio</span>
                      <span className="text-[11px] text-stone-500 font-mono">
                        Powered by Gemini 3.8 Flash
                      </span>
                    </h3>
                    <p className="text-xs text-stone-400 mt-0.5">
                      Select an authentic butcher persona to draft a calibrated, compliant response.
                    </p>
                  </div>

                  <button
                    onClick={handleGenerateReply}
                    disabled={isGenerating}
                    className="py-2 px-4 rounded-lg bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md cursor-pointer disabled:opacity-50"
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Generating Draft...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Generate with Gemini 3.8 Flash</span>
                      </>
                    )}
                  </button>
                </div>

                {/* 4 Distinct Butcher Persona Selectors (Ergonomic Padding, Unboxed) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {/* Persona 1: Artisan Master Butcher */}
                  <button
                    onClick={() => setSelectedPersona('artisan')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedPersona === 'artisan'
                        ? 'bg-stone-900 border-amber-500/80 text-white ring-1 ring-amber-500/30'
                        : 'bg-stone-950 border-stone-800 text-stone-400 hover:bg-stone-900 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                      <Award className="w-3.5 h-3.5" />
                      <span>Artisan Butcher</span>
                    </div>
                    <p className="text-[11px] text-stone-400 mt-1 leading-snug">
                      Paddock-to-plate ethics, marbling craftsmanship &amp; dry-aging.
                    </p>
                  </button>

                  {/* Persona 2: Cold-Chain Logistics Resolution */}
                  <button
                    onClick={() => setSelectedPersona('logistics')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedPersona === 'logistics'
                        ? 'bg-stone-900 border-blue-500/80 text-white ring-1 ring-blue-500/30'
                        : 'bg-stone-950 border-stone-800 text-stone-400 hover:bg-stone-900 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-400">
                      <Thermometer className="w-3.5 h-3.5" />
                      <span>Logistics Care</span>
                    </div>
                    <p className="text-[11px] text-stone-400 mt-1 leading-snug">
                      Sub-zero insulation, freight resolution &amp; courtesy credits.
                    </p>
                  </button>

                  {/* Persona 3: Executive VIP Concierge */}
                  <button
                    onClick={() => setSelectedPersona('concierge')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedPersona === 'concierge'
                        ? 'bg-stone-900 border-purple-500/80 text-white ring-1 ring-purple-500/30'
                        : 'bg-stone-950 border-stone-800 text-stone-400 hover:bg-stone-900 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-purple-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>VIP Concierge</span>
                    </div>
                    <p className="text-[11px] text-stone-400 mt-1 leading-snug">
                      Executive reassurance, bespoke cuts &amp; direct management.
                    </p>
                  </button>

                  {/* Persona 4: Pitmaster Camaraderie */}
                  <button
                    onClick={() => setSelectedPersona('pitmaster')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedPersona === 'pitmaster'
                        ? 'bg-stone-900 border-red-500/80 text-white ring-1 ring-red-500/30'
                        : 'bg-stone-950 border-stone-800 text-stone-400 hover:bg-stone-900 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-red-400">
                      <Flame className="w-3.5 h-3.5" />
                      <span>Pitmaster BBQ</span>
                    </div>
                    <p className="text-[11px] text-stone-400 mt-1 leading-snug">
                      Smoker brotherhood, bark formation &amp; internal pull temps.
                    </p>
                  </button>
                </div>

                {generationError && (
                  <div className="text-xs text-red-400 bg-red-950/40 border border-red-800/60 p-3 rounded-lg flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{generationError}</span>
                  </div>
                )}
              </div>

              {/* Real-time Draft Canvas with Live Character Counter & Tone Selector */}
              <div className="space-y-3">
                {/* Tone Selector (Strict Zero-Pill Discipline, Ergonomic 2x Padding) */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-1 border-b border-stone-850">
                  <span className="text-xs text-stone-400 font-medium">Calibrated Tone Selector:</span>
                  <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-900/80 border border-stone-800 rounded-lg">
                    <button
                      type="button"
                      onClick={() => setSelectedTone('warm')}
                      className={`py-1.5 px-3 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                        selectedTone === 'warm'
                          ? 'bg-stone-800 text-amber-300 shadow-sm font-semibold'
                          : 'text-stone-400 hover:text-white'
                      }`}
                    >
                      Warm &amp; Hospitable
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedTone('resolution')}
                      className={`py-1.5 px-3 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                        selectedTone === 'resolution'
                          ? 'bg-stone-800 text-blue-300 shadow-sm font-semibold'
                          : 'text-stone-400 hover:text-white'
                      }`}
                    >
                      Resolution-Focused
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedTone('executive')}
                      className={`py-1.5 px-3 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                        selectedTone === 'executive'
                          ? 'bg-stone-800 text-purple-300 shadow-sm font-semibold'
                          : 'text-stone-400 hover:text-white'
                      }`}
                    >
                      Executive Concierge
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedTone('camaraderie')}
                      className={`py-1.5 px-3 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                        selectedTone === 'camaraderie'
                          ? 'bg-stone-800 text-red-300 shadow-sm font-semibold'
                          : 'text-stone-400 hover:text-white'
                      }`}
                    >
                      Pitmaster Camaraderie
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className="text-stone-300 font-medium">
                    Official Dialogue Draft Canvas
                  </div>
                  <div className="text-stone-500 font-mono text-[11px]">
                    {draftReplyText.length} characters · ~{Math.round(draftReplyText.split(/\s+/).filter(Boolean).length)} words
                  </div>
                </div>

                <textarea
                  rows={8}
                  value={draftReplyText}
                  onChange={(e) => setDraftReplyText(e.target.value)}
                  placeholder="Draft your official merchant response, or generate instantly with Gemini 3.8 Flash above..."
                  className="w-full bg-stone-900 border border-stone-800 rounded-xl p-4 text-xs sm:text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-stone-600 transition-colors resize-y leading-relaxed font-sans"
                />

                {/* 1-Click Operational Snippet Inserts */}
                <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                  <span className="text-stone-500 text-[11px]">Quick Inserts:</span>

                  <button
                    type="button"
                    onClick={() => handleInsertSnippet("We have applied a $35 courtesy credit to your Meat Agent wholesale account for your next farm-gate allocation.")}
                    className="py-1.5 px-3 rounded-lg bg-stone-900 hover:bg-stone-850 border border-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer text-[11px]"
                  >
                    + Courtesy Credit ($35)
                  </button>

                  <button
                    type="button"
                    onClick={() => handleInsertSnippet("Our packaging utilizes double-thick thermal wool insulation and solid ice gel bricks engineered to maintain <2.5°C core temperature for 48 consecutive hours across regional Australia.")}
                    className="py-1.5 px-3 rounded-lg bg-stone-900 hover:bg-stone-850 border border-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer text-[11px]"
                  >
                    + Cold-Chain Assurance
                  </button>

                  <button
                    type="button"
                    onClick={() => handleInsertSnippet("For best culinary results with thick primal cuts, allow the meat to rest on a warm board for 8–10 minutes so intramuscular juices redistribute evenly before carving.")}
                    className="py-1.5 px-3 rounded-lg bg-stone-900 hover:bg-stone-850 border border-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer text-[11px]"
                  >
                    + Meat Resting Tip
                  </button>

                  <button
                    type="button"
                    onClick={() => handleInsertSnippet("Should you wish to discuss your allocation directly with our butchery management, our concierge desk is available on WhatsApp at +61 480 804 189.")}
                    className="py-1.5 px-3 rounded-lg bg-stone-900 hover:bg-stone-850 border border-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer text-[11px]"
                  >
                    + Direct Concierge Line
                  </button>
                </div>
              </div>

              {/* Publish Action & Status */}
              <div className="pt-4 border-t border-stone-800/80 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-stone-500">
                  Signing off as:{' '}
                  <strong className="text-stone-300 block sm:inline font-mono">
                    {getPersonaAuthorTitle(selectedPersona).split('·')[0].trim()}
                  </strong>
                </div>

                <div className="flex items-center gap-3">
                  {publishSuccessNotice && (
                    <span className="text-xs text-emerald-400 flex items-center gap-1 font-medium animate-fadeIn">
                      <Check className="w-4 h-4" />
                      <span>Official Reply Published to Trustpilot Feed!</span>
                    </span>
                  )}

                  <button
                    onClick={handlePublishReply}
                    disabled={!draftReplyText.trim()}
                    className={`py-2.5 px-6 rounded-lg text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                      draftReplyText.trim()
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-950/40'
                        : 'bg-stone-800 text-stone-500 cursor-not-allowed'
                    }`}
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Publish Official Reply</span>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="py-24 text-center text-stone-500 text-xs">
              Select a customer review from the inquiry queue on the left to initiate merchant dialogue.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
