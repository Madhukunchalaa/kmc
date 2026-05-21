'use client';

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';
import { products, Product } from '@/data/products';
import { getOrCreateClientSessionId } from '@/lib/cartSession';

export interface CartItem {
  productId: string;
  qty: number;
}

export interface CartItemHydrated extends CartItem {
  product: Product;
  lineTotal: number;
}

interface CartContextValue {
  items: CartItem[];
  hydrated: CartItemHydrated[];
  count: number;
  subtotal: number;
  loading: boolean;
  addItem: (productId: string, qty?: number) => Promise<void>;
  updateQty: (productId: string, qty: number) => Promise<void>;
  removeItem: (productId: string) => Promise<void>;
  clear: () => Promise<void>;
}

const CartContext = createContext<CartContextValue | null>(null);

const LOCAL_KEY = 'kmc_cart_v1';

function readLocal(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(LOCAL_KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

function writeLocal(items: CartItem[]) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(LOCAL_KEY, JSON.stringify(items));
  } catch {
    /* ignore */
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Initial sync: load local + fetch remote, merge.
  useEffect(() => {
    let cancelled = false;
    const local = readLocal();
    setItems(local);
    getOrCreateClientSessionId();
    (async () => {
      try {
        const res = await fetch('/api/cart', { cache: 'no-store' });
        if (!res.ok) throw new Error('fetch cart');
        const data = (await res.json()) as { items: CartItem[] };
        if (cancelled) return;
        // Merge: prefer max qty per product across local + remote.
        const map = new Map<string, number>();
        for (const it of local) map.set(it.productId, it.qty);
        for (const it of data.items) {
          map.set(it.productId, Math.max(map.get(it.productId) ?? 0, it.qty));
        }
        const merged: CartItem[] = Array.from(map.entries()).map(([productId, qty]) => ({ productId, qty }));
        setItems(merged);
        writeLocal(merged);
        // Push merged state back to server if it differs.
        if (merged.length !== data.items.length || merged.some((m) => {
          const r = data.items.find((d) => d.productId === m.productId);
          return !r || r.qty !== m.qty;
        })) {
          fetch('/api/cart', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ items: merged }),
          }).catch(() => {});
        }
      } catch {
        /* offline / no remote — local only */
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const persist = useCallback((next: CartItem[]) => {
    setItems(next);
    writeLocal(next);
    fetch('/api/cart', {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ items: next }),
    }).catch(() => {});
  }, []);

  const addItem = useCallback(
    async (productId: string, qty: number = 1) => {
      const next = [...items];
      const idx = next.findIndex((i) => i.productId === productId);
      if (idx >= 0) next[idx] = { ...next[idx], qty: next[idx].qty + qty };
      else next.push({ productId, qty });
      persist(next);
    },
    [items, persist],
  );

  const updateQty = useCallback(
    async (productId: string, qty: number) => {
      if (qty <= 0) {
        persist(items.filter((i) => i.productId !== productId));
        return;
      }
      persist(items.map((i) => (i.productId === productId ? { ...i, qty } : i)));
    },
    [items, persist],
  );

  const removeItem = useCallback(
    async (productId: string) => {
      persist(items.filter((i) => i.productId !== productId));
    },
    [items, persist],
  );

  const clear = useCallback(async () => {
    persist([]);
  }, [persist]);

  const hydrated: CartItemHydrated[] = items
    .map((it) => {
      const product = products.find((p) => p.id === it.productId);
      if (!product) return null;
      return { ...it, product, lineTotal: product.price * it.qty };
    })
    .filter((x): x is CartItemHydrated => x !== null);

  const count = items.reduce((s, i) => s + i.qty, 0);
  const subtotal = hydrated.reduce((s, i) => s + i.lineTotal, 0);

  return (
    <CartContext.Provider
      value={{ items, hydrated, count, subtotal, loading, addItem, updateQty, removeItem, clear }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
}
