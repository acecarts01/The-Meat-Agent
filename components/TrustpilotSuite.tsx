'use client';

import React, { useState, useMemo } from 'react';
import {
  TRUSTPILOT_STATS,
  VERIFIED_TRUSTPILOT_REVIEWS,
  TrustpilotReview,
  exportReviewsJson,
  exportReviewsCsv,
  exportReviewsSql
} from '@/lib/trustpilot-data';
import {
  Star,
  ShieldCheck,
  Download,
  Filter,
  Search,
  MessageSquare,
  ThumbsUp,
  Calendar,
  MapPin,
  Check,
  Copy,
  FileCode,
  FileSpreadsheet,
  Database,
  Building2,
  ExternalLink
} from 'lucide-react';

interface TrustpilotSuiteProps {
  reviews?: TrustpilotReview[];
  selectedReviewHighlight?: TrustpilotReview | null;
  onOpenMerchantPortal?: () => void;
}

export function TrustpilotSuite({
  reviews = VERIFIED_TRUSTPILOT_REVIEWS,
  selectedReviewHighlight,
  onOpenMerchantPortal
}: TrustpilotSuiteProps) {
  const [filterRating, setFilterRating] = useState<number | 'all'>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  // Filter reviews
  const filteredReviews = useMemo(() => {
    return reviews.filter((r) => {
      const matchRating = filterRating === 'all' || r.rating === filterRating;
      const matchCategory = filterCategory === 'all' || r.category === filterCategory;
      const matchSearch =
        r.authorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.authorLocation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.purchasedProduct.toLowerCase().includes(searchQuery.toLowerCase());
      return matchRating && matchCategory && matchSearch;
    });
  }, [reviews, filterRating, filterCategory, searchQuery]);

  const handleDownload = (format: 'json' | 'csv' | 'sql') => {
    let content = '';
    let mimeType = 'text/plain';
    let filename = `the-heritage-meat-co-trustpilot-reviews.${format}`;

    if (format === 'json') {
      content = exportReviewsJson(reviews);
      mimeType = 'application/json';
    } else if (format === 'csv') {
      content = exportReviewsCsv(reviews);
      mimeType = 'text/csv';
    } else if (format === 'sql') {
      content = exportReviewsSql(reviews);
      mimeType = 'application/sql';
    }

    const blob = new Blob([content], { type: `${mimeType};charset=utf-8;` });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyClipboard = (format: 'json' | 'csv' | 'sql') => {
    let text = '';
    if (format === 'json') text = exportReviewsJson(reviews);
    else if (format === 'csv') text = exportReviewsCsv(reviews);
    else if (format === 'sql') text = exportReviewsSql(reviews);

    navigator.clipboard.writeText(text);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 1800);
  };

  return (
    <div className="space-y-8">
      {/* Authentic Trustpilot Business Hub Replica Header */}
      <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00B67A]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          {/* Business Info & Stars */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs text-stone-400 font-mono">
              <span className="bg-stone-800 text-stone-300 px-2 py-0.5 rounded">
                ABN: {TRUSTPILOT_STATS.abn}
              </span>
              <span>•</span>
              <span className="text-emerald-400">Verified Business Entity • Trading Since 2023</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex flex-wrap items-center gap-3">
              <span>{TRUSTPILOT_STATS.businessName}</span>
              <span className="text-xs bg-[#00B67A]/20 text-[#00B67A] border border-[#00B67A]/40 px-2.5 py-0.5 rounded font-mono font-medium">
                Verified Trustpilot Profile
              </span>
            </h2>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              {/* Trustpilot 5 Stars */}
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div
                    key={star}
                    className="w-7 h-7 bg-[#00B67A] text-white flex items-center justify-center font-bold text-base rounded-[3px] shadow-md shadow-[#00B67A]/20"
                  >
                    ★
                  </div>
                ))}
              </div>

              <div>
                <span className="text-xl font-black text-white font-mono mr-2">
                  TrustScore {TRUSTPILOT_STATS.trustScore}
                </span>
                <span className="text-stone-400 text-sm">
                  | <strong className="text-white font-mono">{TRUSTPILOT_STATS.totalReviews.toLocaleString()}</strong> reviews
                </span>
              </div>

              <span className="bg-emerald-950/80 text-emerald-400 border border-emerald-700/50 text-xs px-2.5 py-1 rounded font-semibold">
                {TRUSTPILOT_STATS.ratingCategory} Rating
              </span>
            </div>
          </div>

          {/* 1-Click Forensic Migration Exporter */}
          <div className="bg-stone-950/90 border border-stone-800 p-4 rounded-xl space-y-2.5 w-full lg:w-auto">
            <div className="text-xs font-bold text-stone-300 flex items-center justify-between gap-3">
              <span className="flex items-center gap-1.5 text-[#00B67A]">
                <Database className="w-4 h-4" />
                1-Click Migration Exporter
              </span>
              <span className="text-[10px] text-stone-500 font-mono">25 Verified Batch #1</span>
            </div>
            <p className="text-[11px] text-stone-400 max-w-xs">
              Instant export of the full Australian Trustpilot review database for migrations, Shopify, or SQL backends:
            </p>

            <div className="grid grid-cols-3 gap-2 pt-1">
              <button
                onClick={() => handleDownload('json')}
                className="bg-stone-900 hover:bg-stone-800 border border-stone-700 text-white text-xs font-semibold py-2 px-3 rounded flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                title="Download JSON format"
              >
                <FileCode className="w-3.5 h-3.5 text-amber-400" />
                JSON
              </button>

              <button
                onClick={() => handleDownload('csv')}
                className="bg-stone-900 hover:bg-stone-800 border border-stone-700 text-white text-xs font-semibold py-2 px-3 rounded flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                title="Download CSV spreadsheet"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
                CSV
              </button>

              <button
                onClick={() => handleDownload('sql')}
                className="bg-stone-900 hover:bg-stone-800 border border-stone-700 text-white text-xs font-semibold py-2 px-3 rounded flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                title="Download SQL INSERT dump"
              >
                <Database className="w-3.5 h-3.5 text-cyan-400" />
                SQL
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Star Distribution Bars */}
        <div className="mt-6 pt-6 border-t border-stone-800/80 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((stars) => {
              const data = TRUSTPILOT_STATS.starDistribution[stars as keyof typeof TRUSTPILOT_STATS.starDistribution];
              return (
                <div key={stars} className="flex items-center gap-3 text-xs">
                  <button
                    onClick={() => setFilterRating(filterRating === stars ? 'all' : stars)}
                    className="flex items-center gap-1 w-16 text-stone-300 hover:text-white font-mono text-[11px]"
                  >
                    <span>{stars}-star</span>
                    <span className="text-[#00B67A]">★</span>
                  </button>
                  <div className="flex-1 bg-stone-950 h-2.5 rounded-full overflow-hidden border border-stone-800/80">
                    <div
                      className="bg-[#00B67A] h-full rounded-full transition-all duration-700"
                      style={{ width: `${data.percentage}%` }}
                    />
                  </div>
                  <span className="w-10 text-right font-mono text-stone-400 text-[11px]">
                    {data.percentage}%
                  </span>
                </div>
              );
            })}
          </div>

          <div className="bg-stone-950/60 border border-stone-800/80 rounded-xl p-4 text-xs text-stone-400 space-y-2">
            <h4 className="font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#00B67A]" />
              Trustpilot Forensic Integrity Standard
            </h4>
            <p className="leading-relaxed">
              Every review corresponds to an authentic cold-chain order processed through The Meat Agent direct allocation system.
              Includes official company replies from <strong>The Master Butcher & Management</strong> resolving courier inquiries and packaging feedback.
            </p>
          </div>
        </div>
      </div>

      {/* Reviews Filter & Search Bar */}
      <div className="bg-stone-900 border border-stone-800 p-4 rounded-xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder="Search reviews by customer name, suburb, steak cut, brisket, or snags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-stone-950 border border-stone-800 rounded-lg pl-10 pr-4 py-2 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-[#00B67A]"
          />
        </div>

        {/* Star Rating Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          <button
            onClick={() => setFilterRating('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              filterRating === 'all'
                ? 'bg-[#00B67A] text-stone-950 font-bold'
                : 'bg-stone-950 text-stone-400 border border-stone-800 hover:text-white'
            }`}
          >
            All Ratings ({VERIFIED_TRUSTPILOT_REVIEWS.length})
          </button>
          {[5, 4, 3].map((star) => (
            <button
              key={star}
              onClick={() => setFilterRating(star)}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1 ${
                filterRating === star
                  ? 'bg-[#00B67A] text-stone-950 font-bold'
                  : 'bg-stone-950 text-stone-400 border border-stone-800 hover:text-white'
              }`}
            >
              <span>{star}</span>
              <span className="text-xs">★</span>
            </button>
          ))}
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {filteredReviews.map((r) => {
          const isHighlighted = selectedReviewHighlight && selectedReviewHighlight.id === r.id;

          return (
            <div
              key={r.id}
              className={`bg-stone-900 border rounded-2xl p-5 sm:p-6 transition-all duration-300 space-y-4 shadow-lg ${
                isHighlighted
                  ? 'border-[#00B67A] bg-stone-900/95 ring-2 ring-[#00B67A]/30'
                  : 'border-stone-800 hover:border-stone-700'
              }`}
            >
              {/* Header Line: Stars, Author, Location, Date */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-800/80 pb-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    {/* Stars */}
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: r.rating }).map((_, i) => (
                        <div
                          key={i}
                          className="w-5 h-5 bg-[#00B67A] text-white flex items-center justify-center font-bold text-xs rounded-[2px]"
                        >
                          ★
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                      <ShieldCheck className="w-4 h-4 text-[#00B67A]" />
                      <span>Verified Buyer</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-stone-300 pt-0.5">
                    <strong className="text-white font-bold">{r.authorName}</strong>
                    <span className="text-stone-500">•</span>
                    <span className="flex items-center gap-1 text-stone-400">
                      <MapPin className="w-3 h-3 text-stone-500" />
                      {r.authorLocation}
                    </span>
                  </div>
                </div>

                <div className="text-right text-xs text-stone-400 font-mono space-y-0.5">
                  <div>Experience: <span className="text-stone-300">{r.dateOfExperience}</span></div>
                  <div className="text-[11px] text-stone-500">Published: {r.datePublished}</div>
                </div>
              </div>

              {/* Review Content */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white tracking-tight">
                  {r.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-normal">
                  {r.content}
                </p>
              </div>

              {/* Product Badge & Order Total */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-stone-400">
                <div className="flex items-center gap-2">
                  <span className="text-stone-500">Purchased Cut:</span>
                  <span className="bg-stone-950 border border-stone-800 text-amber-400 px-2 py-0.5 rounded font-mono font-medium">
                    {r.purchasedProduct}
                  </span>
                  <span className="bg-stone-800 text-stone-300 px-2 py-0.5 rounded text-[11px]">
                    {r.category}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-stone-300 font-semibold">
                    Order Total: ${r.orderTotalAud.toFixed(2)} AUD
                  </span>
                  <span className="flex items-center gap-1 text-stone-500">
                    <ThumbsUp className="w-3 h-3" /> {r.helpfulCount}
                  </span>
                </div>
              </div>

              {/* Official Company Reply (on 3-star or 4-star constructive reviews) */}
              {r.companyReply && (
                <div className="mt-4 p-4 rounded-xl bg-stone-950/90 border border-stone-800/90 space-y-2">
                  <div className="flex items-center justify-between text-xs text-amber-400 font-semibold">
                    <div className="flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-amber-500" />
                      <span>Reply from {r.companyReply.author}</span>
                    </div>
                    <span className="text-stone-500 font-mono text-[11px]">{r.companyReply.date}</span>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed italic">
                    &ldquo;{r.companyReply.text}&rdquo;
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
