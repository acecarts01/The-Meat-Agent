'use client';

import React, { useState } from 'react';
import {
  Truck,
  X,
  Search,
  CheckCircle2,
  Clock,
  Thermometer,
  ShieldCheck,
  Package,
  MapPin
} from 'lucide-react';

interface OrderTrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OrderTrackingModal({ isOpen, onClose }: OrderTrackingModalProps) {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [searched, setSearched] = useState(false);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;
    setSearched(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-stone-900 border border-stone-800 rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-2xl relative text-stone-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-white p-1 rounded-full hover:bg-stone-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-600/50 flex items-center justify-center text-amber-400">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Live Cold-Chain Tracking</h3>
            <p className="text-xs text-stone-400">Refrigerated Express Dispatch across Australia</p>
          </div>
        </div>

        {/* Input */}
        <form onSubmit={handleSearch} className="space-y-3">
          <div>
            <label className="block text-xs font-semibold text-stone-300 mb-1">
              Enter Order Number or Cold-Chain Consignment:
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="e.g. TMA-2024-8942 or phone number"
                className="flex-1 bg-stone-950 border border-stone-800 rounded-lg px-3 py-2.5 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-amber-500"
              />
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold px-4 py-2.5 rounded-lg text-xs transition-colors cursor-pointer"
              >
                Track
              </button>
            </div>
          </div>
        </form>

        {/* Mock Live Dispatch Progress */}
        {searched && (
          <div className="bg-stone-950 border border-stone-800 rounded-xl p-4 space-y-4 text-xs animate-fadeIn">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div>
                <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-mono">Consignment</span>
                <span className="font-mono font-bold text-white">{trackingNumber.toUpperCase()}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-mono">Thermal Temp</span>
                <span className="font-mono font-bold text-emerald-400 flex items-center gap-1">
                  <Thermometer className="w-3.5 h-3.5" /> 1.8°C (Optimal &lt;2.5°C)
                </span>
              </div>
            </div>

            {/* Steps Timeline */}
            <div className="space-y-3 font-mono text-[11px]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Boning Room Allocation & Vacuum Pack</div>
                  <div className="text-stone-500 text-[10px]">164 Brisbane St Ipswich QLD • Completed</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Refrigerated Trunk Line Dispatch</div>
                  <div className="text-stone-500 text-[10px]">Sub-zero active courier vehicle • In Transit</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-400 mt-0.5" />
                <div>
                  <div className="font-bold text-amber-400">Out for Cold-Chain Delivery</div>
                  <div className="text-stone-400 text-[10px]">Estimated delivery: Today before 4:30 PM</div>
                </div>
              </div>
            </div>

            <div className="p-2.5 bg-stone-900 rounded-lg text-[11px] text-stone-300 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#00B67A]" />
              <span>48-hour thermal ice gel blocks guarantee sub-zero core temperatures even in 38°C ambient heat.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
