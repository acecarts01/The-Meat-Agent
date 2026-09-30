'use client';

import React, { useState } from 'react';
import {
  Building2,
  X,
  Check,
  Send,
  MessageCircle,
  Truck,
  FileSpreadsheet
} from 'lucide-react';

interface WholesaleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WholesaleModal({ isOpen, onClose }: WholesaleModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    abn: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: 'Restaurant / Steakhouse',
    estimatedWeeklyVolume: '100kg - 300kg',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppWholesale = () => {
    const msg = `*COMMERCIAL WHOLESALE INQUIRY — THE MEAT AGENT*%0A%0A` +
      `*Business:* ${formData.businessName || 'Commercial Venue'}%0A` +
      `*ABN:* ${formData.abn || 'Registered'}%0A` +
      `*Contact:* ${formData.contactName}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Type:* ${formData.businessType}%0A` +
      `*Weekly Volume:* ${formData.estimatedWeeklyVolume}%0A` +
      `*Notes:* ${formData.notes || 'Requesting commercial price list for primal cuts'}`;

    window.open(`https://wa.me/61480804189?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-stone-900 border border-stone-800 rounded-2xl max-w-xl w-full p-6 space-y-5 shadow-2xl relative text-stone-100 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-white p-1 rounded-full hover:bg-stone-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-600/50 flex items-center justify-center text-cyan-400">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Commercial Wholesale & Primal Allocation</h3>
            <p className="text-xs text-stone-400">Direct-From-Supplier Pallet & Case Rates for Hospitality</p>
          </div>
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold text-white">Wholesale Application Received</h4>
            <p className="text-xs text-stone-300 max-w-sm mx-auto">
              Our trade desk at 164 Brisbane St Ipswich QLD will review your ABN and supply schedule.
              Our commercial manager will contact you within 2 business hours.
            </p>
            <button
              onClick={onClose}
              className="mt-3 bg-stone-800 hover:bg-stone-700 text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-stone-300 mb-1">Company / Trading Name *</label>
                <input
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="e.g. Brisbane Smokehouse Pty Ltd"
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-300 mb-1">Australian Business Number (ABN) *</label>
                <input
                  type="text"
                  required
                  value={formData.abn}
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
                  type="text"
                  required
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  placeholder="Head Chef / Purchasing Officer"
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-300 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Mobile / Direct Line"
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-stone-300 mb-1">Venue Type</label>
                <select
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="Restaurant / Steakhouse">Restaurant / Steakhouse</option>
                  <option value="BBQ Smokehouse">BBQ Smokehouse</option>
                  <option value="Pub / Hotel Group">Pub / Hotel Group</option>
                  <option value="Catering Company">Catering Company</option>
                  <option value="Local Butcher Shop">Local Butcher Shop</option>
                  <option value="Gym / Meal Prep Company">Gym / Meal Prep Company</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-stone-300 mb-1">Est. Weekly Volume</label>
                <select
                  value={formData.estimatedWeeklyVolume}
                  onChange={(e) => setFormData({ ...formData, estimatedWeeklyVolume: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="50kg - 100kg">50kg - 100kg / week</option>
                  <option value="100kg - 300kg">100kg - 300kg / week</option>
                  <option value="300kg - 1,000kg">300kg - 1,000kg (Pallet)</option>
                  <option value="1,000kg+">1,000kg+ (Multi-venue)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-stone-300 mb-1">Target Primal Cuts & Notes</label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="e.g. Wagyu cube rolls MB8+, packer briskets, pork bellies..."
                className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="pt-2 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleWhatsAppWholesale}
                className="bg-[#25D366] hover:bg-[#20ba59] text-stone-950 font-bold px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Trade</span>
              </button>

              <button
                type="submit"
                className="bg-cyan-600 hover:bg-cyan-500 text-stone-950 font-bold px-5 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Trade Form</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
