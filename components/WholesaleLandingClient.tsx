'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Building2,
  ChevronRight,
  Check,
  Send,
  MessageCircle,
  Truck,
  CalendarClock,
  Package,
  ShieldCheck,
  CreditCard,
  ChefHat,
  Hotel,
  Coffee,
  UtensilsCrossed,
  Store,
  Dumbbell,
} from 'lucide-react';
import { useCart } from '@/lib/cart-store';
import { TOTAL_CATALOG_COUNT } from '@/lib/products-160-data';
import { Navbar, ActivePage } from '@/components/Navbar';
import { CartAndCheckoutModal } from '@/components/CartAndCheckoutModal';
import { ContactModal } from '@/components/ContactModal';
import { WholesaleModal } from '@/components/WholesaleModal';
import { OrderTrackingModal } from '@/components/OrderTrackingModal';

const SEGMENTS = [
  { icon: ChefHat, label: 'Restaurants & Steakhouses', desc: 'Portioned primals, consistent spec, cold-chain delivery timed to your prep schedule.' },
  { icon: Hotel, label: 'Hotels & Resorts', desc: 'Multi-outlet F&B programs — one account, one invoice, every kitchen supplied.' },
  { icon: Coffee, label: 'Cafés & Eateries', desc: 'Smaller, frequent drops sized to a café kitchen — no pallet minimums.' },
  { icon: UtensilsCrossed, label: 'Catering Companies', desc: 'Event-driven volume with short-notice top-ups when a booking changes.' },
  { icon: Store, label: 'Butchers & Resellers', desc: 'Primal and sub-primal case lots at trade rates for your own retail counter.' },
  { icon: Dumbbell, label: 'Gyms & Meal-Prep Kitchens', desc: 'Lean cuts and bulk mince in the volumes a meal-prep kitchen actually runs through.' },
];

const CADENCE = [
  { title: 'Daily', detail: 'Ipswich & Brisbane metro — next-day cold-chain drops for kitchens that can\'t hold deep stock.' },
  { title: 'Weekly', detail: 'Statewide and interstate via tracked courier — the standard cadence for most trade accounts.' },
  { title: 'Monthly', detail: 'Bulk, freezer-stable orders for sites with cold storage, anywhere in Australia.' },
];

const CUT_STATES = ['Whole primal', 'Sub-primal / portioned', 'Diced / sliced to spec', 'Vacuum-sealed', 'Fresh (chilled)', 'Snap-frozen'];

export function WholesaleLandingClient() {
  const router = useRouter();
  const { cart, cartCount, cartTotal, updateQuantity, removeItem, clearCart } = useCart();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isWholesaleOpen, setIsWholesaleOpen] = useState(false);
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [leadRef, setLeadRef] = useState('');
  const [formData, setFormData] = useState({
    businessName: '',
    abn: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: 'Restaurant / Steakhouse',
    deliveryCadence: 'Weekly',
    estimatedWeeklyVolume: '100kg - 300kg',
    state: 'QLD',
    notes: '',
  });

  const handleNavbarNavigate = (pageKey: ActivePage, categorySlug?: string) => {
    if (pageKey === 'home') router.push('/');
    else if (pageKey === 'shop') router.push(categorySlug ? `/shop/${categorySlug}` : '/shop');
    else if (pageKey === 'contact') setIsContactOpen(true);
    else if (pageKey === 'wholesale') router.push('/wholesale');
    else if (pageKey === 'merchant-portal') router.push('/merchant-portal');
  };

  const handleWhatsApp = () => {
    const msg =
      `*COMMERCIAL WHOLESALE INQUIRY — THE MEAT AGENT*%0A%0A` +
      `*Business:* ${formData.businessName || 'Commercial Venue'}%0A` +
      `*ABN:* ${formData.abn || 'Registered'}%0A` +
      `*Contact:* ${formData.contactName}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Type:* ${formData.businessType}%0A` +
      `*Delivery Cadence:* ${formData.deliveryCadence}%0A` +
      `*Weekly Volume:* ${formData.estimatedWeeklyVolume}%0A` +
      `*State:* ${formData.state}%0A` +
      `*Notes:* ${formData.notes || 'Requesting commercial price list for primal cuts'}`;
    window.open(`https://wa.me/61480804189?text=${msg}`, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    setSubmitting(true);
    try {
      const res = await fetch('/api/wholesale', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Failed to submit your application.');
      setLeadRef(data.leadRef || '');
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong — please try WhatsApp instead.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0a09] text-stone-100 flex flex-col font-sans antialiased">
      <Navbar
        currentPage="wholesale"
        onNavigate={handleNavbarNavigate}
        cartCount={cartCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenWholesale={() => setIsWholesaleOpen(true)}
        onOpenTracking={() => setIsTrackingOpen(true)}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-14">
        <nav aria-label="Breadcrumb" className="text-xs text-stone-400 flex flex-wrap items-center gap-1.5 font-mono">
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
          <span className="text-cyan-400 font-semibold" aria-current="page">Wholesale</span>
        </nav>

        {/* Hero */}
        <section className="space-y-5 border-b border-stone-800 pb-10">
          <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5" />
            Commercial Wholesale &amp; Food-Service Supply
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight max-w-3xl">
            Wholesale Meat Suppliers for Restaurants, Hotels &amp; Eateries — Delivered Your Way
          </h1>
          <p className="text-sm sm:text-base text-stone-300 max-w-2xl leading-relaxed">
            The Meat Agent supplies Australian wholesale meat direct to commercial kitchens — restaurants, hotels, cafés,
            caterers and resellers. Set your own delivery cadence (daily, weekly or monthly) and order any cut in the
            state your kitchen actually needs: whole primal, portioned to spec, diced, vacuum-sealed, fresh or frozen.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#apply"
              className="bg-cyan-600 hover:bg-cyan-500 text-stone-950 font-bold px-5 py-3 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Send className="w-4 h-4" />
              Apply for a Trade Account
            </a>
            <button
              onClick={handleWhatsApp}
              className="bg-[#25D366] hover:bg-[#20ba59] text-stone-950 font-bold px-5 py-3 rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              Talk to the Trade Desk on WhatsApp
            </button>
          </div>
        </section>

        {/* Trust bar */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div className="bg-stone-900 border border-stone-800 rounded-xl p-4 space-y-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <div className="font-bold text-white">ABN Verified</div>
            <div className="text-stone-400">55 657 961 058</div>
          </div>
          <div className="bg-stone-900 border border-stone-800 rounded-xl p-4 space-y-1.5">
            <Truck className="w-4 h-4 text-amber-400" />
            <div className="font-bold text-white">Direct From Supplier</div>
            <div className="text-stone-400">No middle-man markup</div>
          </div>
          <div className="bg-stone-900 border border-stone-800 rounded-xl p-4 space-y-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <div className="font-bold text-white">Halal Certified</div>
            <div className="text-stone-400">AFIC (primary), IFANCA &amp; HCA</div>
          </div>
          <div className="bg-stone-900 border border-stone-800 rounded-xl p-4 space-y-1.5">
            <Package className="w-4 h-4 text-cyan-400" />
            <div className="font-bold text-white">Cold-Chain Tracked</div>
            <div className="text-stone-400">Live temperature logs</div>
          </div>
        </section>

        {/* Who we supply */}
        <section className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-black text-white">Who We Supply</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SEGMENTS.map((s) => (
              <div key={s.label} className="bg-stone-900 border border-stone-800 rounded-xl p-5 space-y-2">
                <s.icon className="w-5 h-5 text-cyan-400" />
                <div className="font-bold text-white text-sm">{s.label}</div>
                <p className="text-xs text-stone-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Delivery cadence + cut state */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
              <CalendarClock className="w-5 h-5 text-amber-400" />
              Order On Your Schedule
            </h2>
            <div className="space-y-3">
              {CADENCE.map((c) => (
                <div key={c.title} className="bg-stone-900 border border-stone-800 rounded-xl p-4">
                  <div className="font-bold text-amber-400 text-sm">{c.title}</div>
                  <p className="text-xs text-stone-400 mt-1">{c.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
              <Package className="w-5 h-5 text-cyan-400" />
              Any State of Meat Your Kitchen Needs
            </h2>
            <div className="bg-stone-900 border border-stone-800 rounded-xl p-5">
              <div className="grid grid-cols-2 gap-2.5">
                {CUT_STATES.map((c) => (
                  <div key={c} className="flex items-center gap-2 text-xs text-stone-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    {c}
                  </div>
                ))}
              </div>
              <p className="text-xs text-stone-500 mt-4">
                Tell us the cut, the spec, and the state you need it in — our boning room at 164 Brisbane St, Ipswich
                works to your kitchen&apos;s exact requirement, not a fixed retail pack.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-black text-white">How a Trade Account Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {[
              { n: '1', t: 'Apply with your ABN', d: 'A 2-minute form — business details and what you typically order.' },
              { n: '2', t: 'Get your price list', d: 'Our commercial desk responds within 2 business hours with trade rates.' },
              { n: '3', t: 'Set your cadence', d: 'Daily, weekly or monthly — whatever matches your kitchen\'s storage.' },
              { n: '4', t: 'Pay on order', d: 'PayID, EFT or Crypto (10% off) at time of order — no setup fees.' },
            ].map((s) => (
              <div key={s.n} className="bg-stone-900 border border-stone-800 rounded-xl p-4 space-y-2">
                <div className="w-7 h-7 rounded-full bg-cyan-950 border border-cyan-600/50 text-cyan-400 font-bold text-xs flex items-center justify-center">
                  {s.n}
                </div>
                <div className="font-bold text-white text-sm">{s.t}</div>
                <p className="text-xs text-stone-400">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="bg-stone-900/60 border border-stone-800 rounded-xl p-4 text-xs text-stone-400 flex items-start gap-2">
            <CreditCard className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">Trade accounts currently run pay-on-order</strong> (PayID, EFT or crypto) —
              the same $423 AUD minimum as our general catalog applies, with case-rate pricing once your account is set
              up. We don&apos;t yet offer net-term credit accounts, but every order is dispatched the same day it clears.
            </span>
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-black text-white">Wholesale FAQ</h2>
          <div className="space-y-3">
            {[
              { q: 'Is there a minimum order for wholesale accounts?', a: 'No separate wholesale minimum — the standard $423 AUD cart minimum applies, but at trade/case rates rather than single-pack retail pricing.' },
              { q: 'What payment terms do you offer?', a: 'Pay-on-order via PayID (instant), direct EFT, or crypto (10% discount applied automatically). We don\'t currently offer net-7/30 credit accounts — every order is confirmed and dispatched once payment clears.' },
              { q: 'How often can you deliver?', a: 'Daily or weekly cold-chain delivery is available in the Ipswich/Brisbane metro area. Elsewhere in Queensland and interstate, weekly or monthly dispatch runs via tracked courier.' },
              { q: 'Is The Meat Agent Halal certified?', a: 'Yes — we hold Halal certification from AFIC (our primary certifying body), with additional certification from IFANCA and HCA. Pork and pork sausages are the only products that are not halal certified.' },
              { q: 'Can you supply goat, mutton, turkey or offal for a halal menu?', a: 'We\'re actively expanding our halal goat, mutton, turkey and offal range based on direct demand from trade customers. Ask your trade desk contact for current availability and lead times on these lines.' },
              { q: 'How do I get a commercial price list?', a: 'Submit the trade application below or message our WhatsApp trade desk directly — our commercial manager responds within 2 business hours with pricing for your venue type and volume.' },
            ].map((f) => (
              <details key={f.q} className="bg-stone-900 border border-stone-800 rounded-xl p-4 group">
                <summary className="font-semibold text-sm text-white cursor-pointer list-none flex items-center justify-between">
                  {f.q}
                  <ChevronRight className="w-4 h-4 text-stone-500 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-xs text-stone-400 mt-2 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Application form */}
        <section id="apply" className="scroll-mt-20 space-y-5">
          <h2 className="text-xl sm:text-2xl font-black text-white">Apply for a Trade Account</h2>
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 max-w-2xl">
            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-white">Application Received</h3>
                <p className="text-xs text-stone-300 max-w-sm mx-auto">
                  Our trade desk at 164 Brisbane St, Ipswich QLD will review your details and send your commercial
                  price list within 2 business hours.
                  {leadRef && <> Reference: <strong className="text-amber-400 font-mono">{leadRef}</strong></>}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-stone-300 mb-1">Company / Trading Name *</label>
                    <input
                      type="text" required value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Brisbane Smokehouse Pty Ltd"
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-stone-300 mb-1">ABN</label>
                    <input
                      type="text" value={formData.abn}
                      onChange={(e) => setFormData({ ...formData, abn: e.target.value })}
                      placeholder="11-digit ABN"
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-stone-300 mb-1">Contact Name *</label>
                    <input
                      type="text" required value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      placeholder="Head Chef / Purchasing Officer"
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-stone-300 mb-1">Phone *</label>
                    <input
                      type="tel" required value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Mobile / Direct Line"
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-stone-300 mb-1">Email *</label>
                  <input
                    type="email" required value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="orders@yourvenue.com.au"
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-stone-300 mb-1">Venue Type</label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                    >
                      <option>Restaurant / Steakhouse</option>
                      <option>Hotel / Resort</option>
                      <option>Café / Eatery</option>
                      <option>Catering Company</option>
                      <option>Local Butcher Shop</option>
                      <option>Gym / Meal Prep Company</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold text-stone-300 mb-1">Preferred Delivery Cadence</label>
                    <select
                      value={formData.deliveryCadence}
                      onChange={(e) => setFormData({ ...formData, deliveryCadence: e.target.value })}
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                    >
                      <option>Daily (QLD metro only)</option>
                      <option>Weekly</option>
                      <option>Monthly</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-stone-300 mb-1">Est. Weekly Volume</label>
                    <select
                      value={formData.estimatedWeeklyVolume}
                      onChange={(e) => setFormData({ ...formData, estimatedWeeklyVolume: e.target.value })}
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                    >
                      <option>50kg - 100kg / week</option>
                      <option>100kg - 300kg / week</option>
                      <option>300kg - 1,000kg (Pallet)</option>
                      <option>1,000kg+ (Multi-venue)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold text-stone-300 mb-1">State</label>
                    <select
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                    >
                      <option>QLD</option><option>NSW</option><option>VIC</option><option>SA</option>
                      <option>WA</option><option>TAS</option><option>NT</option><option>ACT</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-stone-300 mb-1">Target Cuts &amp; Notes</label>
                  <textarea
                    rows={3} value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Halal goat leg and mutton mince for our menu, packer briskets, pork bellies..."
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                {submitError && (
                  <div className="bg-red-950/50 border border-red-500/50 text-red-300 text-xs px-3 py-2 rounded-lg">
                    {submitError}
                  </div>
                )}

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button" onClick={handleWhatsApp}
                    className="bg-[#25D366] hover:bg-[#20ba59] text-stone-950 font-bold px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant WhatsApp Trade</span>
                  </button>
                  <button
                    type="submit" disabled={submitting}
                    className="bg-cyan-600 hover:bg-cyan-500 disabled:opacity-60 disabled:cursor-not-allowed text-stone-950 font-bold px-5 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? 'Sending…' : 'Submit Trade Application'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="mt-4 bg-stone-950 border-t border-stone-900 py-8 px-4 sm:px-6 lg:px-8 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© 2023–2026 The Meat Agent (LPJH HOLDINGS PTY LTD). ABN 55 657 961 058.</div>
          <div className="flex items-center gap-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <span>•</span>
            <Link href="/shop" className="hover:text-cyan-400 transition-colors">Full {TOTAL_CATALOG_COUNT} Cuts Catalog</Link>
          </div>
        </div>
      </footer>

      <CartAndCheckoutModal
        isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cart={cart}
        onUpdateQuantity={updateQuantity} onRemoveItem={removeItem} onClearCart={clearCart}
      />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <WholesaleModal isOpen={isWholesaleOpen} onClose={() => setIsWholesaleOpen(false)} />
      <OrderTrackingModal isOpen={isTrackingOpen} onClose={() => setIsTrackingOpen(false)} />
    </div>
  );
}
