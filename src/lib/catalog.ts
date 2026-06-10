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
  images?: string[];
  usdPrice?: number;
  originalUsdPrice?: number | null;
  badge: 'Popular' | 'New' | 'Sale' | 'Bestseller' | null;
  desc: string;
  longDesc?: string;
  chakras: string[];
  stock: number;
}

export interface ServiceTier {
  label: string;
  price: number;
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
  tiers?: ServiceTier[];
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
    images: p.images ?? [],
    usdPrice: p.usdPrice ?? 0,
    originalUsdPrice: p.originalUsdPrice ?? null,
    badge: p.badge,
    desc: p.desc,
    longDesc: p.longDesc ?? '',
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
      images: d.images ?? [],
      usdPrice: d.usdPrice ?? 0,
      originalUsdPrice: d.originalUsdPrice ?? null,
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
        images: d.images ?? [],
        usdPrice: d.usdPrice ?? 0,
        originalUsdPrice: d.originalUsdPrice ?? null,
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

export const SERVICE_TIERS: Record<string, ServiceTier[]> = {
  tarot: [
    { label: 'Voice Chat (30 min)', price: 1200 },
    { label: 'Voice Chat (1 hour)', price: 2000 },
    { label: 'Video Call (30 min)', price: 2500 },
    { label: 'Video Call (1 hour)', price: 4500 },
  ],
  candle: [
    { label: 'Travel Safety / Safe Journeys', price: 1800 },
    { label: 'Psychic / Intuition / Spiritual', price: 2200 },
    { label: 'Luck / Job / Career / Promotion', price: 2900 },
    { label: 'Reconciliation / "Bring Back"', price: 3200 },
    { label: 'Abundance / Wealth / Money / Prosperity', price: 3600 },
    { label: 'Remove Obstacles (Financial/Relationship)', price: 3800 },
    { label: 'Bindings (Fidelity / Loyalty)', price: 4200 },
    { label: 'Fertility & Family Spells', price: 4200 },
    { label: 'Success / Grand Success', price: 4500 },
    { label: 'Love / Attraction / Soulmate', price: 4800 },
    { label: 'Protection (Personal/Home/Business)', price: 5200 },
    { label: 'Cleansing / Purification / House Blessing', price: 6300 },
  ],
  spelljar: [
    { label: 'Mini Spell Jar', price: 2200 },
    { label: 'Medium Spell Jar (100ml)', price: 4800 },
    { label: 'Large Spell Jar (500ml)', price: 7300 },
  ],
  numerology: [
    { label: 'Vehicle Number Numerology', price: 1999 },
    { label: 'Date of Birth Numerology', price: 2499 },
    { label: 'Mobile Number Numerology', price: 3999 },
    { label: 'Name Numerology', price: 4999 },
    { label: 'Business / Brand Numerology', price: 9999 },
  ],
};

const SERVICE_FALLBACK: CatalogService[] = [
  {
    id: 'tarot',
    slug: 'tarot',
    title: 'Tarot Reading',
    tagline: "Clarity for the questions you can't answer alone",
    desc: 'A personalised tarot session with Kriss for guidance on love, career and life path.',
    image: '/about-hero.png',
    icon: 'fa-solid fa-star-and-crescent',
    price: 1200,
    durationMins: 30,
    bullets: ['One major life-area focus', 'Live audio/video session', 'Written summary shared after'],
    tiers: SERVICE_TIERS.tarot,
  },
  {
    id: 'candle',
    slug: 'candle',
    title: 'Candle Spell Session',
    tagline: 'Fire magic, lit with intention',
    desc: 'Harness the power of fire magic with ritually crafted candle spells tailored to your intention.',
    image: '/services-hero.png',
    icon: 'fa-solid fa-fire-flame-curved',
    price: 1800,
    durationMins: 45,
    bullets: ['Custom-dressed candle', 'Spell performed on your behalf', 'Burn photo + ritual notes sent'],
    tiers: SERVICE_TIERS.candle,
  },
  {
    id: 'spelljar',
    slug: 'spelljar',
    title: 'Spell Jars',
    tagline: 'A sealed wish, alive in your home',
    desc: 'Custom spell jars created with herbs, crystals, oils and your written intention.',
    image: '/strength-hero.png',
    icon: 'fa-solid fa-jar',
    price: 2200,
    durationMins: 60,
    bullets: ['Tailored to your intention', 'Includes care + activation guide', 'Mini, Medium, and Large sizes'],
    tiers: SERVICE_TIERS.spelljar,
  },
  {
    id: 'numerology',
    slug: 'numerology',
    title: 'Numerology Services',
    tagline: 'Every session sent as PDF + WhatsApp explanation',
    desc: 'Every numerology session will be sent in a pdf format and 5-10 minutes of explanation in whatsapp voice message',
    image: '/contact-hero.png',
    icon: 'fa-solid fa-infinity',
    price: 1999,
    durationMins: 40,
    bullets: ['Detailed PDF chart report', '5-10 mins WhatsApp explanation', 'Tailored crystal recommendations'],
    tiers: SERVICE_TIERS.numerology,
  },
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
      tiers: SERVICE_TIERS[d.slug] || [],
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
        tiers: SERVICE_TIERS[doc.slug] || [],
      };
    }
  } catch (err) {
    console.error('getServiceById fallback', err);
  }
  return SERVICE_FALLBACK.find((s) => s.slug === id) ?? null;
}
