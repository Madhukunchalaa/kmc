import { NextResponse } from 'next/server';
import { connectMongoose } from '@/lib/mongoose';
import { Service } from '@/models/Service';
import { Product } from '@/models/Product';
import { products as productSeed } from '@/data/products';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get('q') || '').trim();

  if (!q || q.length < 2) {
    return NextResponse.json({ ok: true, products: [], services: [] });
  }

  // Escape special regex characters to prevent ReDoS attacks
  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(escaped, 'i');

  try {
    await connectMongoose();

    const [services, dbProducts] = await Promise.all([
      Service.find({
        active: true,
        isDeleted: { $ne: true },
        $or: [{ title: regex }, { tagline: regex }, { desc: regex }],
      })
        .select('slug title tagline icon image price')
        .limit(5)
        .lean(),
      Product.find({
        active: true,
        isDeleted: { $ne: true },
        $or: [
          { name: regex },
          { category: regex },
          { subcategory: regex },
          { desc: regex },
        ],
      })
        .select('_id name category subcategory image price slug')
        .limit(8)
        .lean(),
    ]);

    let products = dbProducts.map((p) => ({
      id: p.slug || String(p._id),
      name: p.name,
      category: p.category,
      subcategory: p.subcategory || '',
      image: p.image,
      price: p.price,
    }));

    // Fallback to static product seed if no products in DB
    if (products.length === 0) {
      products = productSeed
        .filter((p) => regex.test(p.name) || regex.test(p.category) || regex.test(p.subcategory) || regex.test(p.desc || ''))
        .slice(0, 8)
        .map((p) => ({
          id: p.id,
          name: p.name,
          category: p.category,
          subcategory: p.subcategory || '',
          image: p.image,
          price: p.price,
        }));
    }

    return NextResponse.json({ ok: true, products, services });
  } catch (err) {
    console.error('search error', err);
    return NextResponse.json({ ok: false, products: [], services: [] });
  }
}

