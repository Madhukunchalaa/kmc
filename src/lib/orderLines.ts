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
  size?: string | null;
}

export async function resolveOrderLines(items: CartLineInput[], currency: string = 'INR'): Promise<{
  lines: ResolvedOrderLine[];
  subtotal: number;
  stockError: string | null;
}> {
  // Any currency other than INR uses the usdPrice value
  const useIntlPrice = currency !== 'INR';
  
  // Extract base slugs by splitting the double colons (e.g. "triple-protection-bracelet::10mm" -> "triple-protection-bracelet")
  const baseIds = items.map((i) => i.productId.split('::')[0]);
  const dbProducts = await Product.find({ slug: { $in: baseIds }, active: true, isDeleted: { $ne: true } }).lean();
  
  type MapVal = {
    _id: string;
    slug: string;
    name: string;
    price: number;
    stock: number | null;
    category: string;
    subcategory: string;
    shippingCharge: number | null;
    variants?: any[];
  };
  
  const productMap = new Map<string, MapVal>();
  for (const p of dbProducts) {
    const pPrice = useIntlPrice ? (p.usdPrice && p.usdPrice > 0 ? p.usdPrice : Math.round(p.price / 50)) : p.price;
    productMap.set(p.slug, {
      _id: String(p._id),
      slug: p.slug,
      name: p.name,
      price: pPrice,
      stock: p.stock ?? null,
      category: p.category || '',
      subcategory: p.subcategory || '',
      shippingCharge: (p as any).shippingCharge ?? null,
      variants: p.variants,
    });
  }
  
  for (const sp of seedProducts) {
    if (!productMap.has(sp.id)) {
      const spPrice = useIntlPrice ? (sp.usdPrice && sp.usdPrice > 0 ? sp.usdPrice : Math.round(sp.price / 50)) : sp.price;
      productMap.set(sp.id, {
        _id: sp.id,
        slug: sp.id,
        name: sp.name,
        price: spPrice,
        stock: null,
        category: sp.category || '',
        subcategory: sp.subcategory || '',
        shippingCharge: null,
        variants: sp.variants,
      });
    }
  }

  // Add virtual custom-bracelet product mapping
  productMap.set('custom-bracelet', {
    _id: 'custom-bracelet',
    slug: 'custom-bracelet',
    name: 'Custom Crystal Bracelet',
    price: useIntlPrice ? 64 : 3200,
    stock: null,
    category: 'bracelets',
    subcategory: '',
    shippingCharge: null,
  });

  // Stock check
  for (const it of items) {
    const [baseId] = it.productId.split('::');
    const p = productMap.get(baseId);
    if (p && p.stock !== null && p.stock < it.qty) {
      const label = p.stock === 0 ? 'out of stock' : `only ${p.stock} left`;
      return { lines: [], subtotal: 0, stockError: `"${p.name}" is ${label}` };
    }
  }

  const lines = items
    .map((it): ResolvedOrderLine | null => {
      const [baseId, variantName] = it.productId.split('::');
      const p = productMap.get(baseId);
      if (!p) return null;
      
      // Resolve price: check if there's a matching variant option defined on the product
      let price = p.price;
      if (variantName && p.variants && p.variants.length > 0) {
        const v = p.variants.find((vr: any) => vr.name === variantName);
        if (v) {
          price = useIntlPrice ? (v.usdPrice && v.usdPrice > 0 ? v.usdPrice : Math.round(v.price / 50)) : v.price;
        }
      }

      // Format name to display size details clearly in emails and orders
      const displayName = variantName ? `${p.name} – ${variantName}` : p.name;

      return {
        productId: p._id,
        productSlug: p.slug,
        name: displayName,
        price: price,
        qty: it.qty,
        lineTotal: price * it.qty,
        stock: p.stock,
        category: p.category,
        subcategory: p.subcategory,
        shippingCharge: p.shippingCharge,
        size: variantName || null,
      };
    })
    .filter((x): x is ResolvedOrderLine => x !== null);

  const subtotal = lines.reduce((s, l) => s + l.lineTotal, 0);
  return { lines, subtotal, stockError: lines.length === 0 ? 'no-valid-items' : null };
}
