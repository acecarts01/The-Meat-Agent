'use client';

import { useState, useEffect, useCallback } from 'react';
import { Product160Item, generate160Catalog } from './products-160-data';

export interface CartItem {
  product: Product160Item;
  quantity: number;
}

const CART_STORAGE_KEY = 'tma-cart-v1';
const CART_EVENT_NAME = 'tma-cart-sync';

// Default initial cart items if none in localStorage
function getDefaultCart(): CartItem[] {
  const catalog = generate160Catalog();
  return [
    { product: catalog[0], quantity: 2 }, // O'Connor Ribeye
    { product: catalog[4], quantity: 1 }, // Competition Brisket
    { product: catalog[8], quantity: 2 }, // Mega Bulk Beef Mince
  ];
}

export function loadCartFromStorage(): CartItem[] {
  if (typeof window === 'undefined') {
    return getDefaultCart();
  }
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) {
      const initial = getDefaultCart();
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(initial));
      return initial;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    return [];
  } catch (err) {
    console.error('Failed to load cart from localStorage:', err);
    return getDefaultCart();
  }
}

export function saveCartToStorage(cart: CartItem[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent(CART_EVENT_NAME, { detail: cart }));
  } catch (err) {
    console.error('Failed to save cart to localStorage:', err);
  }
}

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window === 'undefined') return getDefaultCart();
    return loadCartFromStorage();
  });

  useEffect(() => {
    // Initial sync
    setCart(loadCartFromStorage());

    const handleSync = (e: Event) => {
      const custom = e as CustomEvent<CartItem[]>;
      if (custom.detail) {
        setCart(custom.detail);
      } else {
        setCart(loadCartFromStorage());
      }
    };

    window.addEventListener(CART_EVENT_NAME, handleSync);
    window.addEventListener('storage', handleSync);
    return () => {
      window.removeEventListener(CART_EVENT_NAME, handleSync);
      window.removeEventListener('storage', handleSync);
    };
  }, []);

  const addToCart = useCallback((product: Product160Item, quantity: number = 1) => {
    setCart((prev) => {
      const existingIdx = prev.findIndex((item) => item.product.sku === product.sku);
      let updated: CartItem[];
      if (existingIdx >= 0) {
        updated = [...prev];
        updated[existingIdx] = {
          ...updated[existingIdx],
          quantity: updated[existingIdx].quantity + quantity,
        };
      } else {
        updated = [...prev, { product, quantity }];
      }
      saveCartToStorage(updated);
      return updated;
    });
  }, []);

  const updateQuantity = useCallback((sku: string, delta: number) => {
    setCart((prev) => {
      const updated = prev
        .map((item) => {
          if (item.product.sku === sku) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null);
      saveCartToStorage(updated);
      return updated;
    });
  }, []);

  const removeItem = useCallback((sku: string) => {
    setCart((prev) => {
      const updated = prev.filter((item) => item.product.sku !== sku);
      saveCartToStorage(updated);
      return updated;
    });
  }, []);

  const clearCart = useCallback(() => {
    saveCartToStorage([]);
    setCart([]);
  }, []);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return {
    cart,
    cartCount,
    cartTotal,
    addToCart,
    updateQuantity,
    removeItem,
    clearCart,
  };
}
