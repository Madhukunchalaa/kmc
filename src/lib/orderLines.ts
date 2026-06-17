import { Product } from '@/models/Product';
import { products as seedProducts } from '@/data/products';

export interface CartLineInput {
  productId: string;
  qty: number;
}

export interface ResolvedOrderLine {
  productId: string;
  productSlug: string;
  name: string;
  price: number;
  qty: number;
  lineTotal: number;
  stock: number | null;
  category: string;
  subcategory: string;
  shippingCharge: number | null;
}

export async function resolveOrderLines(items: CartLineInput[], currency: string = 'INR'): Promise<{
  lines: ResolvedOrderLine[];
  subtotal: number;
  stockError: string | null;
}> {
  // Any currency other than INR uses the usdPrice value (same number, different symbol)
  const useIntlPrice = currency !== 'INR';
  const dbProducts = await Product.find({ slug: { $in: items.map((i) => i.productId) }, active: true, isDeleted: { $ne: true } }).lean();
  type MapVal = { _id: string; slug: string; name: string; price: number; stock: number | null; category: string; subcategory: string; shippingCharge: number | null };
  const productMap = new Map<string, MapVal>();
  for (const p of dbProducts) {
    const pPrice = useIntlPrice ? (p.usdPrice && p.usdPrice > 0 ? p.usdPrice : Math.round(p.price / 50)) : p.price;
    productMap.set(p.slug, { _id: String(p._id), slug: p.slug, name: p.name, price: pPrice, stock: p.stock ?? null, category: p.category || '', subcategory: p.subcategory || '', shippingCharge: (p as { shippingCharge?: number | null }).shippingCharge ?? null });
  }
  for (const sp of seedProducts) {
    if (!productMap.has(sp.id)) {
      const spPrice = useIntlPrice ? (sp.usdPrice && sp.usdPrice > 0 ? sp.usdPrice : Math.round(sp.price / 50)) : sp.price;
      productMap.set(sp.id, { _id: sp.id, slug: sp.id, name: sp.name, price: spPrice, stock: null, category: sp.category || '', subcategory: sp.subcategory || '', shippingCharge: null });
    }
  }

  for (const it of items) {
    const p = productMap.get(it.productId);
    if (p && p.stock !== null && p.stock < it.qty) {
      const label = p.stock === 0 ? 'out of stock' : `only ${p.stock} left`;
      return { lines: [], subtotal: 0, stockError: `"${p.name}" is ${label}` };
    }
  }

  const lines = items
    .map((it) => {
      const p = productMap.get(it.productId);
      if (!p) return null;
      return {
        productId: p._id,
        productSlug: p.slug,
        name: p.name,
        price: p.price,
        qty: it.qty,
        lineTotal: p.price * it.qty,
        stock: p.stock,
        category: p.category,
        subcategory: p.subcategory,
        shippingCharge: p.shippingCharge,
      };
    })
    .filter((x): x is ResolvedOrderLine => x !== null);

  const subtotal = lines.reduce((s, l) => s + l.lineTotal, 0);
  return { lines, subtotal, stockError: lines.length === 0 ? 'no-valid-items' : null };
}
