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
}

export async function resolveOrderLines(items: CartLineInput[]): Promise<{
  lines: ResolvedOrderLine[];
  subtotal: number;
  stockError: string | null;
}> {
  const dbProducts = await Product.find({ slug: { $in: items.map((i) => i.productId) }, active: true }).lean();
  const productMap = new Map<string, { _id: string; slug: string; name: string; price: number; stock: number | null }>();
  for (const p of dbProducts) {
    productMap.set(p.slug, { _id: String(p._id), slug: p.slug, name: p.name, price: p.price, stock: p.stock ?? null });
  }
  for (const sp of seedProducts) {
    if (!productMap.has(sp.id)) {
      productMap.set(sp.id, { _id: sp.id, slug: sp.id, name: sp.name, price: sp.price, stock: null });
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
      };
    })
    .filter((x): x is ResolvedOrderLine => x !== null);

  const subtotal = lines.reduce((s, l) => s + l.lineTotal, 0);
  return { lines, subtotal, stockError: lines.length === 0 ? 'no-valid-items' : null };
}
