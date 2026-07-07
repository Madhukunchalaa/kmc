import ShopPageClient from './ShopPageClient';
import { getAllProducts } from '@/lib/catalog';
import { connectMongoose } from '@/lib/mongoose';
import { Setting } from '@/models/Setting';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Shop · KrissMaagiic Crystals',
  description: 'Handpicked, energised crystals — bracelets, malas, pendants, towers and more.',
};

const CATEGORY_KEYS = [
  'view-all', 'designer-bracelets', 'signature', 'spell-jars',
  'bracelets-by-crystals', 'malas', 'pendants', 'designer-pendants',
  'silver-jewelry', 'anklets', 'glow-essentials', 'crystal-towers',
  'pyramids', 'raw-crystal', 'crystal-rings', 'home-decor',
  'jewellery', 'gemstones', 'zodiac-bracelets',
];

async function getCategoryImages(): Promise<Record<string, string>> {
  try {
    await connectMongoose();
    const keys = CATEGORY_KEYS.map((k) => `categoryImage_${k}`);
    const docs = await Setting.find({ key: { $in: keys } }).lean();
    const map: Record<string, string> = {};
    for (const doc of docs) {
      const catKey = doc.key.replace('categoryImage_', '');
      if (doc.value) map[catKey] = doc.value;
    }
    return map;
  } catch {
    return {};
  }
}

// Admin-curated products for each category row on the shop landing.
// Stored as one JSON setting: { "<categoryKey>": ["slug1", "slug2", ...] }
async function getCategoryRows(): Promise<Record<string, string[]>> {
  try {
    await connectMongoose();
    const doc = await Setting.findOne({ key: 'categoryFeaturedProducts' }).lean();
    if (!doc?.value) return {};
    const parsed = typeof doc.value === 'string' ? JSON.parse(doc.value) : doc.value;
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

export default async function ShopPage() {
  const [products, categoryImages, categoryRows] = await Promise.all([
    getAllProducts(),
    getCategoryImages(),
    getCategoryRows(),
  ]);
  return <ShopPageClient products={products} categoryImages={categoryImages} categoryRows={categoryRows} />;
}
