'use client';

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';
import { useSession } from 'next-auth/react';
import { products, Product } from '@/data/products';
import { getOrCreateClientSessionId, CART_COOKIE } from '@/lib/cartSession';

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
const OWNER_KEY = 'kmc_cart_owner';

function readLocal(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(LOCAL_KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch { return []; }
}

function writeLocal(items: CartItem[]) {
  if (typeof window === 'undefined') return;
  try { window.localStorage.setItem(LOCAL_KEY, JSON.stringify(items)); } catch { /* ignore */ }
}

function readOwner(): string {
  if (typeof window === 'undefined') return '';
  return window.localStorage.getItem(OWNER_KEY) ?? '';
}

function writeOwner(uid: string) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(OWNER_KEY, uid);
}

function rotateSid() {
  document.cookie = `${CART_COOKIE}=; path=/; max-age=0; SameSite=Lax`;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [catalog, setCatalog] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        if (data.products) {
          setCatalog(data.products);
        }
      })
      .catch((err) => console.error('Failed to load products for cart hydration', err));
  }, []);

  const userId = session?.user?.id ?? '';

  useEffect(() => {
    if (status === 'loading') return;

    let cancelled = false;
    Promise.resolve().then(() => {
      if (!cancelled) setLoading(true);
    });

    const storedOwner = readOwner();
    const userChanged = storedOwner !== userId;

    if (userChanged) {
      // A different account (or guest↔user transition) — discard stale local cart.
      // The server now stores the cart per userId for authenticated users, so
      // the correct cart will come back from the GET below.
      writeLocal([]);
      writeOwner(userId);
      // Rotate the anonymous session cookie so the old guest cart isn't leaked.
      if (storedOwner !== '') rotateSid();
      Promise.resolve().then(() => {
        if (!cancelled) setItems([]);
      });
    }

    const local = readLocal(); // empty when just cleared, existing items when same user
    Promise.resolve().then(() => {
      if (!cancelled) {
        setItems(local);
        setLoading(false); // Render local cart instantly
      }
    });
    getOrCreateClientSessionId();

    (async () => {
      try {
        const res = await fetch('/api/cart', { cache: 'no-store' });
        if (!res.ok) throw new Error('fetch cart');
        const data = (await res.json()) as { items: CartItem[] };
        if (cancelled) return;

        // Merge local + server (prefer max qty). For a user change local is empty,
        // so the merged result is purely the server's authoritative cart.
        const map = new Map<string, number>();
        for (const it of local) map.set(it.productId, it.qty);
        for (const it of data.items) {
          map.set(it.productId, Math.max(map.get(it.productId) ?? 0, it.qty));
        }
        const merged: CartItem[] = Array.from(map.entries()).map(([productId, qty]) => ({ productId, qty }));

        if (!cancelled) {
          setItems(merged);
          writeLocal(merged);
        }

        // Push merged state back if it differs from what the server had.
        const differs = merged.length !== data.items.length ||
          merged.some((m) => {
            const r = data.items.find((d) => d.productId === m.productId);
            return !r || r.qty !== m.qty;
          });
        if (differs) {
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

    return () => { cancelled = true; };
  }, [status, userId]);

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

  const clear = useCallback(async () => { persist([]); }, [persist]);

  const hydrated: CartItemHydrated[] = items
    .map((it) => {
      const activeProducts = catalog.length > 0 ? catalog : products;

      // Support variant-encoded keys like "custom-spell-jar::Mini"
      const [baseId, variantName] = it.productId.includes('::')
        ? it.productId.split('::')
        : [it.productId, undefined];

      const product = activeProducts.find((p) => {
        const pId = String(p.id || '').toLowerCase();
        const pSlug = String(p.slug || '').toLowerCase();
        const p_id = String((p as any)._id || '').toLowerCase();
        const targetId = baseId.toLowerCase();
        return pId === targetId || pSlug === targetId || p_id === targetId;
      });
      if (!product) return null;

      // If a variant is selected, use the variant's price
      let unitPrice = product.price;
      if (variantName && product.variants) {
        const v = product.variants.find((vr: any) => vr.name === variantName);
        if (v) unitPrice = v.price;
      }

      const displayName = variantName ? `${product.name} – ${variantName}` : product.name;
      const displayProduct = { ...product, price: unitPrice, name: displayName };

      return { ...it, product: displayProduct, lineTotal: unitPrice * it.qty };
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
