import { connectMongoose } from '@/lib/mongoose';
import { Product } from '@/models/Product';
import { Service } from '@/models/Service';
import { products as productSeed, Product as SeedProduct } from '@/data/products';

export interface CatalogProduct {
  id: string;
  slug: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice: number | null;
  image: string;
  badge: 'Popular' | 'New' | 'Sale' | 'Bestseller' | null;
  desc: string;
  longDesc?: string;
  chakras: string[];
  stock: number;
}

export interface CatalogService {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  desc: string;
  image: string;
  icon: string;
  price: number;
  durationMins: number;
  bullets: string[];
}

function fromSeed(p: SeedProduct): CatalogProduct {
  return {
    id: p.id,
    slug: p.id,
    name: p.name,
    category: p.category,
    subcategory: p.subcategory,
    price: p.price,
    originalPrice: p.originalPrice ?? null,
    image: p.image,
    badge: p.badge,
    desc: p.desc,
    longDesc: '',
    chakras: p.chakras,
    stock: 99,
  };
}

export async function getAllProducts(): Promise<CatalogProduct[]> {
  try {
    await connectMongoose();
    const docs = await Product.find({ active: true }).sort({ createdAt: -1 }).lean();
    if (docs.length === 0) return productSeed.map(fromSeed);
    return docs.map((d) => ({
      id: String(d._id),
      slug: d.slug,
      name: d.name,
      category: d.category,
      subcategory: d.subcategory,
      price: d.price,
      originalPrice: d.originalPrice ?? null,
      image: d.image,
      badge: d.badge ?? null,
      desc: d.desc,
      longDesc: d.longDesc ?? '',
      chakras: d.chakras,
      stock: d.stock,
    }));
  } catch (err) {
    console.error('getAllProducts: falling back to seed', err);
    return productSeed.map(fromSeed);
  }
}

export async function getProductBySlug(slug: string): Promise<CatalogProduct | null> {
  try {
    await connectMongoose();
    const d = await Product.findOne({ slug, active: true }).lean();
    if (d) {
      return {
        id: String(d._id),
        slug: d.slug,
        name: d.name,
        category: d.category,
        subcategory: d.subcategory,
        price: d.price,
        originalPrice: d.originalPrice ?? null,
        image: d.image,
        badge: d.badge ?? null,
        desc: d.desc,
        longDesc: d.longDesc ?? '',
        chakras: d.chakras,
        stock: d.stock,
      };
    }
  } catch (err) {
    console.error('getProductBySlug fallback', err);
  }
  const seed = productSeed.find((p) => p.id === slug);
  return seed ? fromSeed(seed) : null;
}

const SERVICE_FALLBACK: CatalogService[] = [
  { id: 'tarot', slug: 'tarot', title: 'Tarot Reading', tagline: "Clarity for the questions you can't answer alone",
    desc: 'A personalised tarot session with Kriss for guidance on love, career and life path.',
    image: 'https://krissmaagiiccrystals.com/wp-content/uploads/2026/02/Tarrot-Reading.webp',
    icon: 'fa-solid fa-star-and-crescent', price: 1100, durationMins: 30,
    bullets: ['One major life-area focus', 'Live audio/video session', 'Written summary shared after'] },
  { id: 'candle', slug: 'candle', title: 'Candle Spell Session', tagline: 'Fire magic, lit with intention',
    desc: 'Ritually crafted candle spells tailored to your intention.',
    image: 'https://krissmaagiiccrystals.com/wp-content/uploads/2026/02/Candle.webp',
    icon: 'fa-solid fa-fire-flame-curved', price: 1800, durationMins: 45,
    bullets: ['Custom-dressed candle', 'Spell performed on your behalf', 'Burn photo + ritual notes sent'] },
  { id: 'spelljar', slug: 'spelljar', title: 'Spell Jars', tagline: 'A sealed wish, alive in your home',
    desc: 'Custom spell jars created with herbs, crystals, oils and your written intention.',
    image: 'https://krissmaagiiccrystals.com/wp-content/uploads/2026/02/Spell-Jar.webp',
    icon: 'fa-solid fa-jar', price: 1400, durationMins: 60,
    bullets: ['Tailored to your intention', 'Includes care + activation guide', 'Shipped pan-India'] },
  { id: 'numerology', slug: 'numerology', title: 'Numerology Reading',
    tagline: 'The blueprint hidden in your name and birth date',
    desc: 'Unlock the patterns of your life-path number, destiny number and personal year.',
    image: 'https://krissmaagiiccrystals.com/wp-content/uploads/2026/02/Numerology.webp',
    icon: 'fa-solid fa-infinity', price: 1200, durationMins: 40,
    bullets: ['Detailed numerology chart', 'Personal year forecast', 'Recommended crystals for the year'] },
];

export async function getAllServices(): Promise<CatalogService[]> {
  try {
    await connectMongoose();
    const docs = await Service.find({ active: true }).sort({ createdAt: 1 }).lean();
    if (docs.length === 0) return SERVICE_FALLBACK;
    return docs.map((d) => ({
      id: String(d._id),
      slug: d.slug,
      title: d.title,
      tagline: d.tagline,
      desc: d.desc,
      image: d.image,
      icon: d.icon,
      price: d.price,
      durationMins: d.durationMins,
      bullets: d.bullets,
    }));
  } catch (err) {
    console.error('getAllServices fallback', err);
    return SERVICE_FALLBACK;
  }
}

export async function getServiceById(id: string): Promise<CatalogService | null> {
  try {
    await connectMongoose();
    // Try by ObjectId, then by slug.
    type ServiceLeanDoc = {
      _id: unknown;
      slug: string;
      title: string;
      tagline: string;
      desc: string;
      image: string;
      icon: string;
      price: number;
      durationMins: number;
      bullets: string[];
    };
    let doc: ServiceLeanDoc | null = null;
    if (/^[a-f0-9]{24}$/i.test(id)) {
      doc = (await Service.findById(id).lean()) as ServiceLeanDoc | null;
    }
    if (!doc) {
      doc = (await Service.findOne({ slug: id }).lean()) as ServiceLeanDoc | null;
    }
    if (doc) {
      return {
        id: String(doc._id),
        slug: doc.slug,
        title: doc.title,
        tagline: doc.tagline,
        desc: doc.desc,
        image: doc.image,
        icon: doc.icon,
        price: doc.price,
        durationMins: doc.durationMins,
        bullets: doc.bullets,
      };
    }
  } catch (err) {
    console.error('getServiceById fallback', err);
  }
  return SERVICE_FALLBACK.find((s) => s.slug === id) ?? null;
}
