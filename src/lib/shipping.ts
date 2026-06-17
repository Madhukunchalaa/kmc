/**
 * India shipping rules (in ₹). Shared by checkout (display) and the orders API (authoritative).
 *
 * Tiers:
 *   ₹120 — rings, bracelets, pendants, keychains, malas, yantra (light wearables)
 *   ₹180 — heavier décor: trees, frames, Laxmi pyramid, bowls
 *   ₹150 — everything else (towers, merkabas, spheres, pyramids, selenite, raw, etc.)
 * Free shipping when the order subtotal is ≥ ₹4,500.
 * International orders (country ≠ India) ship free at checkout — charged separately by admin.
 */

export const FREE_SHIPPING_THRESHOLD = 4500;

export interface ShippableProduct {
  category?: string | null;
  subcategory?: string | null;
  name?: string | null;
  /** Optional per-product override set by admin; takes precedence over the computed rate. */
  shippingCharge?: number | null;
}

/** Per-product India shipping charge (₹). Admin override wins, else computed by category/type. */
export function getShippingCharge(p: ShippableProduct): number {
  if (typeof p.shippingCharge === 'number' && p.shippingCharge >= 0) return p.shippingCharge;

  const c = (p.category || '').toLowerCase();
  const s = (p.subcategory || '').toLowerCase();
  const n = (p.name || '').toLowerCase();

  // ₹120 — jewellery & light wearables, keychains, yantra
  if (['bracelets', 'malas', 'pendants', 'designer-pendants', 'silver-jewelry', 'anklets'].includes(c)) return 120;
  if (s === 'keychains' || s === 'yantras' || n.includes('keychain') || n.includes('yantra')) return 120;

  // ₹180 — heavier décor: trees, frames, Laxmi pyramid, bowls
  if (['crystal trees', 'shell trees', 'frames'].includes(s)) return 180;
  if (n.includes('tree') || n.includes('frame') || n.includes('bowl')) return 180;
  if (n.includes('laxmi') && n.includes('pyramid')) return 180;

  // ₹150 — everything else (towers, merkabas, spheres, pyramids, selenite, raw, glow, etc.)
  return 150;
}

/** True when the shipping destination is India (by country; falls back to INR currency). */
export function isIndiaDestination(country?: string | null, currency?: string | null): boolean {
  const c = (country || '').trim().toLowerCase();
  if (c) return c === 'in' || c === 'india';
  return (currency || 'INR').toUpperCase() === 'INR';
}

export interface OrderShippingResult {
  shipping: number;
  international: boolean;
  freeShipping: boolean;
}

/**
 * Order-level shipping. For India: the highest single-item rate (one combined package),
 * or free above the threshold. International orders are charged separately later.
 */
export function computeOrderShipping(
  lines: ShippableProduct[],
  opts: { country?: string | null; currency?: string | null; subtotal: number },
): OrderShippingResult {
  if (!isIndiaDestination(opts.country, opts.currency)) {
    return { shipping: 0, international: true, freeShipping: false };
  }
  if (opts.subtotal >= FREE_SHIPPING_THRESHOLD) {
    return { shipping: 0, international: false, freeShipping: true };
  }
  const shipping = lines.length ? Math.max(...lines.map((l) => getShippingCharge(l))) : 0;
  return { shipping, international: false, freeShipping: false };
}
