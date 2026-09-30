'use client';

import React, { useState } from 'react';
import {
  X,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Check,
  Building2,
  ShieldCheck
} from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Order & Cut Availability Inquiry');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSendError('');
    setIsSending(true);
    try {
      const res = await fetch('/api/zoho', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, subject, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }
      setIsSubmitted(true);
    } catch (err) {
      setSendError(
        err instanceof Error ? err.message : 'We could not send your message right now. Please try WhatsApp instead.'
      );
    } finally {
      setIsSending(false);
    }
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello The Meat Agent! My name is ${name || 'Customer'}. Inquiry: ${message || 'I would like to inquire about wholesale cuts.'}`;
    window.open(`https://wa.me/61480804189?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-stone-900 border border-stone-800 max-w-xl w-full rounded-2xl overflow-hidden shadow-2xl space-y-4 p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="border-b border-stone-800 pb-3">
          <span className="text-[11px] font-mono text-red-500 font-bold uppercase tracking-wider">
            Direct Concierge Desk
          </span>
          <h2 className="text-xl font-black text-white mt-0.5">
            Contact The Meat Agent
          </h2>
          <p className="text-xs text-stone-400 mt-1">
            Questions on MSA Wagyu marbling, full packer briskets, or wholesale logistics? Speak directly with our butchery team.
          </p>
        </div>

        {/* Quick Contact Rails */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href="https://wa.me/61480804189"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366]/10 border border-[#25D366]/40 hover:bg-[#25D366]/20 p-3.5 rounded-xl transition-all flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-lg bg-[#25D366] text-stone-950 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-stone-400">Instant WhatsApp</div>
              <div className="text-xs font-bold text-white group-hover:text-[#25D366] transition-colors">
                +61 480 804 189
              </div>
            </div>
          </a>

          <div className="bg-stone-950 border border-stone-800 p-3.5 rounded-xl flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-700 text-amber-400 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] text-stone-400">Operating Hours</div>
              <div className="text-xs font-semibold text-stone-200">
                Mon–Sat 6:00 AM – 7:00 PM AEST
              </div>
            </div>
          </div>
        </div>

        {/* Locations summary */}
        <div className="bg-stone-950 border border-stone-800 p-3.5 rounded-xl text-xs space-y-1.5 text-stone-300">
          <div className="flex items-start gap-2">
            <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
            <div>
              <strong>Principal Place of Business:</strong> 22 Wilson Pl, Harrisville QLD 4307
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Building2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <strong>Registered Corporate Office:</strong> 164 Brisbane St, Ipswich QLD 4305
            </div>
          </div>
        </div>

        {/* Form or Success State */}
        {isSubmitted ? (
          <div className="bg-stone-950 border border-emerald-500/50 p-6 rounded-xl text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-950 border border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-400">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">Message Dispatched!</h3>
            <p className="text-xs text-stone-400 max-w-sm mx-auto">
              Thank you {name}. Our dispatch butchery concierge will review your message and reply promptly.
            </p>
            <button
              onClick={handleWhatsAppDirect}
              className="bg-[#25D366] hover:bg-[#20ba59] text-stone-950 font-bold px-4 py-2 rounded-lg text-xs flex items-center gap-1.5 mx-auto transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Continue on WhatsApp (+61 480 804 189)</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-stone-400 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Andrew Mitchell"
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="block text-stone-400 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0480 804 189"
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-stone-400 mb-1">Email Address *</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="andrew@example.com.au"
                className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500"
              />
            </div>

            <div>
              <label className="block text-stone-400 mb-1">Inquiry Subject</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500"
              >
                <option value="Order & Cut Availability Inquiry">Order & Cut Availability Inquiry</option>
                <option value="Wagyu MB9+ Allocation">Wagyu MB9+ Allocation</option>
                <option value="Full Packer Smoker Briskets">Full Packer Smoker Briskets</option>
                <option value="Wholesale Commercial Pricing">Wholesale Commercial Pricing</option>
                <option value="Cold-Chain Courier Freight Questions">Cold-Chain Courier Freight Questions</option>
              </select>
            </div>

            <div>
              <label className="block text-stone-400 mb-1">Message / Specific Cuts Needed *</label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Please let us know which cuts, portion sizes, or delivery timeline you require..."
                className="w-full bg-stone-950 border border-stone-800 rounded-lg p-3 text-white focus:outline-none focus:border-red-500 resize-none"
              />
            </div>

            {sendError && (
              <div className="bg-red-950/50 border border-red-500/50 text-red-300 text-xs px-3 py-2 rounded-lg">
                {sendError}
              </div>
            )}

            <div className="pt-2 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="bg-[#25D366] hover:bg-[#20ba59] text-stone-950 font-bold py-2.5 px-4 rounded-lg text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Quick WhatsApp</span>
              </button>

              <button
                type="submit"
                disabled={isSending}
                className="bg-red-600 hover:bg-red-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-2.5 px-5 rounded-lg text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSending ? 'Sending…' : 'Send Inquiry'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
