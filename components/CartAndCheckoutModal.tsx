'use client';

import React, { useState } from 'react';
import { Product160Item } from '@/lib/products-160-data';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  X,
  ShieldCheck,
  Truck,
  ArrowRight,
  MessageCircle,
  Copy,
  Check,
  Lock,
  Bitcoin,
  CreditCard,
  Building
} from 'lucide-react';

export interface CartItem {
  product: Product160Item;
  quantity: number;
}

interface CartAndCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (sku: string, delta: number) => void;
  onRemoveItem: (sku: string) => void;
  onClearCart: () => void;
}

export function CartAndCheckoutModal({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: CartAndCheckoutModalProps) {
  const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [paymentMethod, setPaymentMethod] = useState<'payid' | 'bank' | 'crypto'>('payid');
  const [copiedInfo, setCopiedInfo] = useState<string | null>(null);
  const [isSubmittingOrder, setIsSubmittingOrder] = useState(false);
  const [orderError, setOrderError] = useState('');
  const [orderRef, setOrderRef] = useState('');

  // Form Fields
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    suburb: '',
    state: 'QLD',
    postcode: '',
    deliveryNotes: ''
  });

  if (!isOpen) return null;

  // Pricing calculations
  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const minOrder = 423.00;
  const freeShippingThreshold = 2000.00;
  const isMinOrderMet = subtotal >= minOrder;
  const minOrderRemaining = Math.max(0, minOrder - subtotal);
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const shippingFee = isFreeShipping ? 0 : 25.00; // Flat courier fee if below threshold

  // 10% Crypto discount auto-applied if crypto is selected
  const cryptoDiscount = paymentMethod === 'crypto' ? subtotal * 0.10 : 0;
  const total = subtotal + shippingFee - cryptoDiscount;

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedInfo(label);
    setTimeout(() => setCopiedInfo(null), 1800);
  };

  // WhatsApp order dispatch generator
  const handleWhatsAppCheckout = () => {
    const itemsList = cart.map(i => `• ${i.quantity}x ${i.product.name} ($${(i.product.price * i.quantity).toFixed(2)})`).join('%0A');
    const msg = `*NEW ORDER ALLOCATION — THE MEAT AGENT*%0A%0A` +
      `*Customer:* ${formData.fullName || 'Direct Customer'}%0A` +
      `*Phone:* ${formData.phone || 'Provided via Chat'}%0A` +
      `*Delivery Suburb:* ${formData.suburb || ''} ${formData.state || ''} ${formData.postcode || ''}%0A%0A` +
      `*Items Ordered:*%0A${itemsList}%0A%0A` +
      `*Subtotal:* $${subtotal.toFixed(2)} AUD%0A` +
      `*Shipping:* ${isFreeShipping ? 'FREE (Over $2,000)' : '$' + shippingFee.toFixed(2) + ' AUD'}%0A` +
      (paymentMethod === 'crypto' ? `*Crypto Discount (10%):* -$${cryptoDiscount.toFixed(2)} AUD%0A` : '') +
      `*TOTAL:* $${total.toFixed(2)} AUD%0A%0A` +
      `*Payment Method:* ${paymentMethod.toUpperCase()}%0A` +
      `*Delivery Notes:* ${formData.deliveryNotes || 'Cold-Chain Express Delivery Requested'}`;

    window.open(`https://wa.me/61480804189?text=${msg}`, '_blank');
    setStep('success');
  };

  const handleDirectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isMinOrderMet) return;

    setOrderError('');
    setIsSubmittingOrder(true);
    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          paymentMethod,
          items: cart.map((item) => ({
            sku: item.product.sku,
            name: item.product.name,
            weight: item.product.weight,
            quantity: item.quantity,
            price: item.product.price,
          })),
          subtotal,
          shippingFee,
          cryptoDiscount,
          total,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || 'Failed to place order.');
      }
      setOrderRef(data.orderRef || '');
      setStep('success');
    } catch (err) {
      setOrderError(
        err instanceof Error ? err.message : 'We could not process your order right now. Please try WhatsApp Order instead.'
      );
    } finally {
      setIsSubmittingOrder(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="bg-stone-900 border border-stone-800 rounded-2xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-stone-100">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-800 flex items-center justify-between bg-stone-950/60">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-red-700/80 border border-red-500/50 flex items-center justify-center text-white">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-black text-base sm:text-lg text-white">
                {step === 'cart' ? 'Direct Meat Allocation Cart' : step === 'checkout' ? 'Cold-Chain Direct Checkout' : 'Order Dispatched Successfully'}
              </h3>
              <p className="text-[11px] text-stone-400">
                The Meat Agent | ABN: 55 657 961 058 • Direct From Supplier
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-1 rounded-full hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Minimum Order Enforcement Banner */}
        <div className="bg-stone-950 p-3 sm:px-6 border-b border-stone-800 text-xs">
          <div className="flex items-center justify-between gap-2 mb-1.5 font-mono">
            <span className="text-stone-400">
              Minimum Order: <strong>$423.00 AUD</strong>
            </span>
            <span className={isMinOrderMet ? "text-emerald-400 font-bold" : "text-amber-400 font-bold"}>
              {isMinOrderMet ? "✓ Minimum Threshold Reached" : `$${minOrderRemaining.toFixed(2)} AUD away`}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-stone-900 h-2 rounded-full overflow-hidden border border-stone-800">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                isMinOrderMet ? 'bg-emerald-500' : 'bg-gradient-to-r from-red-600 to-amber-500'
              }`}
              style={{ width: `${Math.min(100, (subtotal / minOrder) * 100)}%` }}
            />
          </div>

          <div className="text-[11px] text-stone-500 mt-1.5 flex items-center justify-between">
            <span>Free Shipping threshold: <strong className="text-stone-300">$2,000 AUD</strong></span>
            <span className="text-purple-400">Pay with Crypto for 10% Off</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {step === 'cart' && (
            <>
              {cart.length === 0 ? (
                <div className="text-center py-12 space-y-3">
                  <div className="w-16 h-16 rounded-full bg-stone-950 border border-stone-800 flex items-center justify-center mx-auto text-stone-600">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h4 className="text-base font-bold text-white">Your Meat Cart is Empty</h4>
                  <p className="text-xs text-stone-400 max-w-sm mx-auto">
                    Browse our 160-cut catalog of MSA Wagyu, Texas pitmaster briskets, and family bulk boxes.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-2 bg-red-700 hover:bg-red-600 text-white text-xs font-bold py-2.5 px-5 rounded-lg transition-colors cursor-pointer"
                  >
                    Start Browsing Catalog
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="divide-y divide-stone-800/80 font-sans">
                    {cart.map((item) => (
                      <div key={item.product.sku} className="py-3 flex items-center justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="text-[11px] text-amber-500 font-mono font-medium">
                            {item.product.subcategory} • {item.product.weight}
                          </div>
                          <h4 className="font-bold text-sm text-white truncate">
                            {item.product.name}
                          </h4>
                          <div className="text-xs text-stone-400 font-mono mt-0.5">
                            ${item.product.price.toFixed(2)} AUD each
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <div className="flex items-center bg-stone-950 border border-stone-800 rounded-lg p-0.5">
                            <button
                              onClick={() => onUpdateQuantity(item.product.sku, -1)}
                              className="p-1 hover:bg-stone-800 rounded text-stone-300 hover:text-white"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="w-8 text-center text-xs font-mono font-bold text-white">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.sku, 1)}
                              className="p-1 hover:bg-stone-800 rounded text-stone-300 hover:text-white"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <div className="w-20 text-right font-mono font-bold text-sm text-white">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </div>

                          <button
                            onClick={() => onRemoveItem(item.product.sku)}
                            className="text-stone-500 hover:text-rose-400 p-1 transition-colors"
                            title="Remove cut"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Cart Action Buttons */}
                  <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
                    <button
                      onClick={onClearCart}
                      className="text-xs text-stone-500 hover:text-stone-300 underline"
                    >
                      Clear All Cuts
                    </button>
                    <div className="text-right">
                      <span className="text-xs text-stone-400">Cart Total: </span>
                      <span className="text-xl font-black text-white font-mono">
                        ${subtotal.toFixed(2)} AUD
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {step === 'checkout' && (
            <form id="checkout-form" onSubmit={handleDirectSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">Full Legal / Business Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Lachlan Campbell"
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">Email Address (Order Confirmation) *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your-email&#64;domain.com"
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">Phone Number (SMS Cold-Chain Tracking) *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0480 804 189"
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">Delivery State (Australia) *</label>
                  <select
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-red-500"
                  >
                    <option value="QLD">Queensland (QLD)</option>
                    <option value="NSW">New South Wales (NSW)</option>
                    <option value="VIC">Victoria (VIC)</option>
                    <option value="WA">Western Australia (WA)</option>
                    <option value="SA">South Australia (SA)</option>
                    <option value="TAS">Tasmania (TAS)</option>
                    <option value="ACT">Australian Capital Territory (ACT)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">Street Address for Cold-Chain Courier *</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="e.g. 164 Brisbane St or 22 Wilson Pl"
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-red-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">Suburb *</label>
                  <input
                    type="text"
                    required
                    value={formData.suburb}
                    onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                    placeholder="e.g. Ipswich or Harrisville"
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">Postcode *</label>
                  <input
                    type="text"
                    required
                    value={formData.postcode}
                    onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                    placeholder="4305"
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              {/* Payment Methods Selection */}
              <div className="space-y-2 pt-2 border-t border-stone-800">
                <label className="block text-xs font-bold text-white uppercase tracking-wider">
                  Select Payment Method:
                </label>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('payid')}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      paymentMethod === 'payid'
                        ? 'bg-amber-950/80 border-amber-500 text-white'
                        : 'bg-stone-950 border-stone-800 text-stone-400'
                    }`}
                  >
                    <div className="font-bold flex items-center gap-1.5">
                      <CreditCard className="w-4 h-4 text-amber-400" />
                      PayID (Osko)
                    </div>
                    <div className="text-[10px] text-stone-400 mt-1">Instant AU Bank Transfer</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bank')}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      paymentMethod === 'bank'
                        ? 'bg-amber-950/80 border-amber-500 text-white'
                        : 'bg-stone-950 border-stone-800 text-stone-400'
                    }`}
                  >
                    <div className="font-bold flex items-center gap-1.5">
                      <Building className="w-4 h-4 text-amber-400" />
                      EFT Transfer
                    </div>
                    <div className="text-[10px] text-stone-400 mt-1">BSB & Account Invoice</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('crypto')}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      paymentMethod === 'crypto'
                        ? 'bg-purple-950/80 border-purple-500 text-white'
                        : 'bg-stone-950 border-stone-800 text-stone-400'
                    }`}
                  >
                    <div className="font-bold flex items-center gap-1.5 text-purple-300">
                      <Bitcoin className="w-4 h-4 text-purple-400" />
                      Crypto (10% Off)
                    </div>
                    <div className="text-[10px] text-purple-400 font-semibold mt-1">BTC & USDT Accepted</div>
                  </button>
                </div>

                {/* Payment Detail Display */}
                {paymentMethod === 'payid' && (
                  <div className="p-3 bg-stone-950 border border-stone-800 rounded-xl text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-stone-400">PayID Identifier:</span>
                      <button
                        type="button"
                        onClick={() => handleCopy("0480804189", "payid")}
                        className="font-mono font-bold text-amber-400 flex items-center gap-1"
                      >
                        {copiedInfo === 'payid' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        0480804189 (LPJH HOLDINGS PTY LTD)
                      </button>
                    </div>
                    <p className="text-[10px] text-stone-500">Transfers clear instantly 24/7 across all major Australian banks.</p>
                  </div>
                )}

                {paymentMethod === 'crypto' && (
                  <div className="p-3 bg-purple-950/40 border border-purple-800/40 rounded-xl text-xs space-y-1">
                    <div className="flex items-center justify-between text-purple-300 font-bold">
                      <span>10% Crypto Discount Applied:</span>
                      <span className="font-mono">-${cryptoDiscount.toFixed(2)} AUD</span>
                    </div>
                    <p className="text-[10px] text-purple-400">
                      Wallet address will be generated upon confirmation, or checkout instantly via WhatsApp concierge.
                    </p>
                  </div>
                )}
              </div>

              {orderError && (
                <div className="bg-red-950/50 border border-red-500/50 text-red-300 text-xs px-3 py-2 rounded-lg">
                  {orderError}
                </div>
              )}
            </form>
          )}

          {step === 'success' && (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Order Received & Dispatched to Boning Room</h4>
              <p className="text-xs text-stone-300 max-w-md mx-auto leading-relaxed">
                Thank you! Your cold-chain order allocation has been sent to our boning room coordinators at 164 Brisbane St, Ipswich QLD.
                A confirmation has been emailed to {formData.email}. Our logistics desk will contact you via WhatsApp / SMS with courier live temperature logs.
              </p>
              <div className="p-4 bg-stone-950 border border-stone-800 rounded-xl text-xs max-w-sm mx-auto space-y-1 text-left">
                {orderRef && (
                  <div>Order Reference: <strong className="text-amber-400 font-mono">{orderRef}</strong></div>
                )}
                <div>Order Status: <strong className="text-emerald-400 font-mono">Processing Cold-Chain Pack</strong></div>
                <div>Support Phone / WhatsApp: <strong className="text-white font-mono">+61 480 804 189</strong></div>
                <div>ABN: <strong className="text-stone-400 font-mono">55 657 961 058</strong></div>
              </div>
              <button
                onClick={() => {
                  onClearCart();
                  onClose();
                  setStep('cart');
                }}
                className="bg-stone-800 hover:bg-stone-700 text-white font-semibold text-xs py-2.5 px-6 rounded-lg transition-colors cursor-pointer"
              >
                Return to Storefront
              </button>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {step !== 'success' && cart.length > 0 && (
          <div className="p-4 border-t border-stone-800 bg-stone-950 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <div className="text-xs text-stone-400">Total Payable:</div>
              <div className="text-xl font-black text-white font-mono">
                ${total.toFixed(2)} AUD
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              {step === 'cart' ? (
                <>
                  <button
                    onClick={handleWhatsAppCheckout}
                    className="flex-1 sm:flex-initial bg-[#25D366] hover:bg-[#20ba59] text-stone-950 font-bold px-4 py-2.5 rounded-lg text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Order</span>
                  </button>

                  <button
                    disabled={!isMinOrderMet}
                    onClick={() => setStep('checkout')}
                    className={`flex-1 sm:flex-initial font-bold px-5 py-2.5 rounded-lg text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isMinOrderMet
                        ? 'bg-red-700 hover:bg-red-600 text-white shadow-lg shadow-red-950'
                        : 'bg-stone-800 text-stone-500 cursor-not-allowed'
                    }`}
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setStep('cart')}
                    disabled={isSubmittingOrder}
                    className="bg-stone-800 hover:bg-stone-700 text-stone-300 font-semibold px-4 py-2.5 rounded-lg text-xs disabled:opacity-50"
                  >
                    Back to Cart
                  </button>
                  <button
                    onClick={handleWhatsAppCheckout}
                    disabled={isSubmittingOrder}
                    className="bg-[#25D366] hover:bg-[#20ba59] text-stone-950 font-bold px-4 py-2.5 rounded-lg text-xs flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Instead</span>
                  </button>
                  <button
                    type="submit"
                    form="checkout-form"
                    disabled={isSubmittingOrder}
                    className="bg-red-700 hover:bg-red-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold px-5 py-2.5 rounded-lg text-xs flex items-center gap-2 cursor-pointer shadow-lg shadow-red-950"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>{isSubmittingOrder ? 'Placing Order…' : 'Place Order'}</span>
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
