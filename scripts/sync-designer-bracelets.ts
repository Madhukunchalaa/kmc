/**
 * sync-designer-bracelets.ts
 * Syncs Designer Bracelet products from Cloudflare R2 + PDF catalog into MongoDB.
 * Run: npx tsx scripts/sync-designer-bracelets.ts
 */

import 'dotenv/config';
import mongoose from 'mongoose';
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';

const MONGODB_URI = process.env.MONGODB_URI!;
const R2_ENDPOINT  = process.env.R2_ENDPOINT!;
const R2_ACCESS    = process.env.R2_ACCESS_KEY_ID!;
const R2_SECRET    = process.env.R2_SECRET_ACCESS_KEY!;
const R2_BUCKET    = process.env.R2_BUCKET_NAME!;
const R2_PUBLIC    = process.env.NEXT_PUBLIC_R2_URL!;

// ─── Product Schema ────────────────────────────────────────────────────────────
const ProductSchema = new mongoose.Schema({
  slug:          { type: String, required: true, unique: true },
  name:          { type: String, required: true },
  category:      { type: String, required: true },
  subcategory:   { type: String, required: true },
  price:         { type: Number, required: true },
  originalPrice: { type: Number, default: null },
  image:         { type: String, required: true },
  images:        { type: [String], default: [] },
  usdPrice:      { type: Number, default: 0 },
  originalUsdPrice: { type: Number, default: null },
  badge:         { type: String, default: null },
  desc:          { type: String, required: true },
  longDesc:      { type: String, default: '' },
  chakras:       { type: [String], default: [] },
  whoShouldWear: { type: [String], default: [] },
  benefits:      { type: [String], default: [] },
  howToWear:     { type: [String], default: [] },
  careInstructions: { type: [String], default: [] },
  stock:         { type: Number, default: null },
  active:        { type: Boolean, default: true },
}, { timestamps: true });

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

// ─── R2 Client ────────────────────────────────────────────────────────────────
const s3 = new S3Client({
  region: 'auto',
  endpoint: R2_ENDPOINT,
  credentials: { accessKeyId: R2_ACCESS, secretAccessKey: R2_SECRET },
});

async function listR2Files(prefix: string): Promise<string[]> {
  const keys: string[] = [];
  let token: string | undefined;
  do {
    const res = await s3.send(new ListObjectsV2Command({
      Bucket: R2_BUCKET,
      Prefix: prefix,
      ContinuationToken: token,
    }));
    for (const obj of res.Contents ?? []) {
      if (obj.Key) keys.push(obj.Key);
    }
    token = res.IsTruncated ? res.NextContinuationToken : undefined;
  } while (token);
  return keys;
}

// ─── PDF Catalog Data ─────────────────────────────────────────────────────────
// Compiled from Designer bracelets.pdf
const PDF_CATALOG: Record<string, {
  price: number; usdPrice: number;
  desc: string; chakras: string[];
  benefits: string[]; howToWear: string[];
  longDesc?: string;
}> = {
  'earth-tone-mother-of-pearl-bracelet': {
    price: 2200, usdPrice: 44,
    desc: 'Elegant earth-tone Mother of Pearl shell bracelet designed for emotional balance, inner harmony, and timeless beauty.',
    chakras: ['Heart'],
    benefits: ['Encourages emotional balance','Promotes calmness and harmony','Complements a wide range of outfits','Adds a touch of natural elegance'],
    howToWear: ['Either hand','Daily wear and special occasions'],
    longDesc: JSON.stringify({
      description: 'The Earth-Tone Mother of Pearl Bracelet showcases the natural beauty of ocean-inspired shell beads in warm earthy shades. Known for its elegant appearance and calming energy, this bracelet is designed for individuals who appreciate simplicity, sophistication, and natural charm.',
      whoShouldWear: ['Those seeking emotional balance','People who appreciate natural elegance'],
      benefits: ['Encourages emotional balance','Promotes calmness and harmony','Complements a wide range of outfits','Adds a touch of natural elegance'],
      howToWear: ['Wear on either hand','Suitable for daily wear and special occasions'],
      careInstructions: ['Moonlight charging or intention setting','Avoid harsh chemicals'],
      disclaimer: 'Crystal bracelets are spiritual tools and not a substitute for medical treatment.',
    }),
  },
  'green-mother-of-pearl-shell-bracelet': {
    price: 2200, usdPrice: 44,
    desc: 'Harmony, growth, and positivity in a timeless green Mother of Pearl shell bracelet.',
    chakras: ['Heart'],
    benefits: ['Encourages balance and positivity','Represents growth and renewal','Complements casual and formal outfits','Provides a sophisticated natural look'],
    howToWear: ['Either hand'],
    longDesc: JSON.stringify({
      description: 'The Green Mother of Pearl Shell Bracelet combines timeless elegance with nature-inspired beauty. Its soothing green tones symbolize growth, renewal, and balance, making it a stylish accessory for daily wear.',
      whoShouldWear: ['Those seeking growth and positivity','People who love natural aesthetics'],
      benefits: ['Encourages balance and positivity','Represents growth and renewal','Complements casual and formal outfits','Provides a sophisticated natural look'],
      howToWear: ['Wear on either hand'],
      careInstructions: ['Moonlight charging or intention setting','Avoid direct sunlight for long periods'],
      disclaimer: 'Crystal bracelets are spiritual tools and not a substitute for medical treatment.',
    }),
  },
  'natural-mother-of-pearl-shell-bracelet': {
    price: 2200, usdPrice: 44,
    desc: 'Grace, calmness, and elegance in a luminous natural Mother of Pearl shell bracelet.',
    chakras: ['Crown'],
    benefits: ['Encourages emotional calmness','Promotes inner balance','Enhances everyday style','Offers a timeless and elegant appearance'],
    howToWear: ['Either hand'],
    longDesc: JSON.stringify({
      description: 'Crafted from natural shell material, the Natural Mother of Pearl Bracelet is admired for its luminous appearance and timeless appeal. It is designed for those who appreciate understated elegance and natural beauty.',
      whoShouldWear: ['Those seeking inner calm and balance','People who love understated elegance'],
      benefits: ['Encourages emotional calmness','Promotes inner balance','Enhances everyday style','Offers timeless elegance'],
      howToWear: ['Wear on either hand'],
      careInstructions: ['Moonlight charging or intention setting','Handle with care'],
      disclaimer: 'Crystal bracelets are spiritual tools and not a substitute for medical treatment.',
    }),
  },
  'jade-bracelet-designer': {
    price: 1750, usdPrice: 35,
    desc: 'Balance, wisdom, harmony, and prosperity with natural Jade — associated with the Heart Chakra.',
    chakras: ['Heart'],
    benefits: ['Encourages emotional balance','Supports wisdom and clarity','Promotes harmony and stability','Inspires positive growth'],
    howToWear: ['Left hand','Daily wear, meditation, work, and personal growth practices'],
    longDesc: JSON.stringify({
      description: 'Jade has been cherished for centuries as a symbol of harmony, wisdom, and abundance. It is traditionally associated with balance, positive decision-making, and emotional well-being.',
      whoShouldWear: ['Those seeking emotional balance and wisdom','People working on personal growth'],
      benefits: ['Encourages emotional balance','Supports wisdom and clarity','Promotes harmony and stability','Inspires positive growth'],
      howToWear: ['Wear on left hand','Suitable for daily wear, meditation, and work'],
      careInstructions: ['Moonlight or selenite charging','Avoid harsh chemicals'],
      disclaimer: 'Crystal bracelets are spiritual tools and not a substitute for medical treatment.',
    }),
  },
  'selenite-bracelet-designer': {
    price: 1750, usdPrice: 44,
    desc: 'Clarity, peace, and spiritual awareness with Selenite — associated with the Crown Chakra.',
    chakras: ['Crown'],
    benefits: ['Encourages mental clarity','Supports peaceful energy','Promotes spiritual awareness','Suitable for meditation and daily wear'],
    howToWear: ['Left hand','Meditation, prayer, spiritual practices, and daily wear'],
    longDesc: JSON.stringify({
      description: 'Selenite is widely appreciated for its luminous appearance and is traditionally associated with clarity, peace, and spiritual awareness. Many crystal enthusiasts use Selenite during meditation and mindfulness practices.',
      whoShouldWear: ['Those seeking mental clarity and peace','Meditation and spiritual practitioners'],
      benefits: ['Encourages mental clarity','Supports peaceful energy','Promotes spiritual awareness','Suitable for meditation'],
      howToWear: ['Wear on left hand','Use during meditation and spiritual practices'],
      careInstructions: ['Selenite is traditionally believed to be self-cleansing','Moonlight charging if desired'],
      disclaimer: 'Crystal bracelets are spiritual tools and not a substitute for medical treatment.',
    }),
  },
  'om-mani-padme-hum-pixiu-black-obsidian-bracelet': {
    price: 1750, usdPrice: 35,
    desc: 'Grounding, mindfulness, and prosperity symbolism in a Black Obsidian bracelet with Pixiu charm and Om Mani Padme Hum engravings.',
    chakras: ['Root'],
    benefits: ['Encourages grounding and stability','Supports mindfulness and spiritual practices','Symbolizes prosperity and abundance','Promotes focus and positive intentions'],
    howToWear: ['Left hand','Daily wear, meditation, prayer, business activities'],
    longDesc: JSON.stringify({
      description: 'The Om Mani Padme Hum + Pixiu Black Obsidian Bracelet combines the grounding qualities of Black Obsidian, the sacred symbolism of the Om Mani Padme Hum mantra, and the revered Pixiu symbol for prosperity.',
      whoShouldWear: ['Those seeking spiritual grounding','Entrepreneurs and business professionals','Meditation practitioners'],
      benefits: ['Encourages grounding and stability','Supports mindfulness','Symbolizes prosperity','Promotes focus and positive intentions'],
      howToWear: ['Wear on left hand','Use during meditation, prayer, and business activities'],
      careInstructions: ['Moonlight charging, selenite charging, or chanting "Om Mani Padme Hum" 21 times'],
      disclaimer: 'Crystal bracelets are spiritual tools and not a substitute for medical treatment.',
    }),
  },
  // Multi-design bracelets from first catalog (referenced in PDF)
  'amethyst-bracelet-design-1': {
    price: 1450, usdPrice: 28,
    desc: 'Calming Amethyst bracelet (Design 1) for spiritual awareness, intuition, and emotional balance.',
    chakras: ['Crown','Third Eye'],
    benefits: ['Calms the mind','Enhances intuition','Supports emotional balance','Promotes restful sleep'],
    howToWear: ['Left hand'],
  },
  'amethyst-bracelet-design-2': {
    price: 1750, usdPrice: 35,
    desc: 'Premium Amethyst bracelet (Design 2) for spiritual protection, clarity, and inner peace.',
    chakras: ['Crown','Third Eye'],
    benefits: ['Enhances spiritual awareness','Promotes clarity of thought','Supports meditation','Provides calming energy'],
    howToWear: ['Left hand'],
  },
  'black-tourmaline-bracelet-designer': {
    price: 1450, usdPrice: 28,
    desc: 'Powerful Black Tourmaline bracelet for protection, grounding, and shielding from negative energy.',
    chakras: ['Root'],
    benefits: ['Strong protective energy','Grounds and stabilizes','Shields from negativity','Promotes emotional security'],
    howToWear: ['Left hand'],
  },
  'clear-quartz-bracelet-designer': {
    price: 1750, usdPrice: 35,
    desc: 'Master healer Clear Quartz bracelet for amplifying energy, clarity, and focus.',
    chakras: ['Crown','All Chakras'],
    benefits: ['Amplifies energy and intention','Enhances mental clarity','Supports all chakras','Promotes focus'],
    howToWear: ['Either hand'],
  },
  'green-aventurine-bracelet-designer': {
    price: 1450, usdPrice: 28,
    desc: 'Lucky Green Aventurine bracelet for abundance, opportunity, and heart-centered growth.',
    chakras: ['Heart'],
    benefits: ['Attracts luck and abundance','Supports heart healing','Promotes optimism','Encourages new opportunities'],
    howToWear: ['Left hand'],
  },
  'lapis-lazuli-bracelet-designer': {
    price: 1750, usdPrice: 35,
    desc: 'Royal Lapis Lazuli bracelet for truth, wisdom, inner power, and self-expression.',
    chakras: ['Third Eye','Throat'],
    benefits: ['Enhances wisdom and truth','Stimulates self-expression','Supports inner power','Promotes clarity of thought'],
    howToWear: ['Left hand'],
  },
  'multi-fluorite-bracelet-designer': {
    price: 1450, usdPrice: 28,
    desc: 'Vibrant Multi-Fluorite bracelet for mental clarity, focus, and balancing multiple energies.',
    chakras: ['Heart','Third Eye','Crown'],
    benefits: ['Enhances mental clarity','Promotes focus and concentration','Balances energies','Reduces mental fog'],
    howToWear: ['Either hand'],
  },
  'pyrite-bracelet-designer': {
    price: 1750, usdPrice: 42,
    desc: 'Gold-flecked Pyrite bracelet for abundance, confidence, and manifesting success.',
    chakras: ['Solar Plexus'],
    benefits: ['Attracts wealth and abundance','Boosts confidence','Stimulates willpower','Shields from negative energy'],
    howToWear: ['Left hand'],
  },
  'red-jasper-bracelet-designer': {
    price: 1750, usdPrice: 35,
    desc: 'Grounding Red Jasper bracelet for stamina, courage, and physical vitality.',
    chakras: ['Root','Sacral'],
    benefits: ['Boosts physical energy','Promotes courage','Grounds and stabilizes','Supports endurance'],
    howToWear: ['Left hand'],
  },
  'rose-quartz-bracelet-design-1': {
    price: 1750, usdPrice: 44,
    desc: 'Gentle Rose Quartz bracelet (Design 1) — the stone of unconditional love and emotional healing.',
    chakras: ['Heart'],
    benefits: ['Promotes self-love','Heals emotional wounds','Attracts love and compassion','Soothes the heart'],
    howToWear: ['Left hand'],
  },
  'rose-quartz-bracelet-design-2': {
    price: 1450, usdPrice: 28,
    desc: 'Delicate Rose Quartz bracelet (Design 2) for love, compassion, and inner peace.',
    chakras: ['Heart'],
    benefits: ['Encourages self-love','Promotes peace and calm','Attracts loving relationships','Heals emotional trauma'],
    howToWear: ['Left hand'],
  },
  'seven-chakra-bracelet-design-1': {
    price: 1450, usdPrice: 28,
    desc: 'Balanced Seven Chakra bracelet (Design 1) with seven crystals to align all energy centres.',
    chakras: ['Root','Sacral','Solar Plexus','Heart','Throat','Third Eye','Crown'],
    benefits: ['Balances all seven chakras','Promotes overall harmony','Boosts energy flow','Supports holistic well-being'],
    howToWear: ['Either hand'],
  },
  'seven-chakra-bracelet-design-2': {
    price: 1450, usdPrice: 28,
    desc: 'Vibrant Seven Chakra bracelet (Design 2) with layered crystal energy for full-body balance.',
    chakras: ['Root','Sacral','Solar Plexus','Heart','Throat','Third Eye','Crown'],
    benefits: ['Harmonises all chakras','Promotes spiritual alignment','Enhances energy flow','Supports daily balance'],
    howToWear: ['Either hand'],
  },
  'tiger-eye-bracelet-design-1': {
    price: 1750, usdPrice: 35,
    desc: 'Powerful Tiger Eye bracelet (Design 1) for courage, clarity, and protection during challenges.',
    chakras: ['Solar Plexus','Sacral'],
    benefits: ['Boosts courage and confidence','Enhances mental clarity','Provides protection','Promotes willpower'],
    howToWear: ['Left hand'],
  },
  'tiger-eye-bracelet-design-2': {
    price: 1750, usdPrice: 35,
    desc: 'Bold Tiger Eye bracelet (Design 2) for grounded strength, focus, and decisive action.',
    chakras: ['Solar Plexus','Root'],
    benefits: ['Strengthens willpower','Promotes grounded focus','Enhances decision-making','Shields against negativity'],
    howToWear: ['Left hand'],
  },
};

// ─── Map R2 image keys to product slugs ───────────────────────────────────────
function keyToSlug(key: string): string {
  return key
    .replace(/^designer bracelates\//i, '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function keyToName(key: string): string {
  return key
    .replace(/^designer bracelates\//i, '')
    .trim()
    .replace(/\b\w/g, c => c.toUpperCase());
}

function isUUIDOrCode(filename: string): boolean {
  // UUIDs like 154849EB-6E0A-4E41-... or raw camera codes like 5ZA01720
  return /^[0-9A-F]{8}-[0-9A-F]{4}-/i.test(filename) ||
         /^5ZA\d+/i.test(filename) ||
         /^[A-F0-9]{8}-/i.test(filename);
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log('🔗 Connecting to MongoDB...');
  await mongoose.connect(MONGODB_URI);
  console.log('✅ Connected');

  console.log('\n📂 Listing R2 designer bracelets folder...');
  const allKeys = await listR2Files('designer bracelates/');
  console.log(`  Found ${allKeys.length} files total`);

  // Group images by product name (handle pic 1, pic 2 etc.)
  const productImages: Record<string, string[]> = {};

  for (const key of allKeys) {
    const filename = key.replace(/^designer bracelates\//i, '').trim();
    if (!filename) continue;

    // Skip UUID-named files and raw camera codes — no meaningful name
    if (isUUIDOrCode(filename)) {
      console.log(`  ⏭️  Skipping (no name): ${filename}`);
      continue;
    }

    // Normalise: strip trailing "pic 1", "pic 2" etc. to find base product
    const baseName = filename
      .replace(/\s+pic\s+\d+$/i, '')       // "Selenite pic 1" → "Selenite"
      .replace(/\s+design\s+\d+\s+pic\s+\d+$/i, match => {  // keep "design X"
        return match.replace(/\s+pic\s+\d+$/i, '');
      })
      .trim();

    const baseSlug = keyToSlug('designer bracelates/' + baseName);
    const imageUrl = `${R2_PUBLIC}/${encodeURIComponent(key)}`;

    if (!productImages[baseSlug]) productImages[baseSlug] = [];

    // Sort: "pic 1" or no suffix first
    if (/pic\s*1$/i.test(filename) || filename === baseName || !/ pic\s*\d+/i.test(filename)) {
      productImages[baseSlug].unshift(imageUrl); // primary image first
    } else {
      productImages[baseSlug].push(imageUrl);
    }
  }

  console.log(`\n🧩 Resolved ${Object.keys(productImages).length} distinct products from R2`);

  let created = 0, updated = 0, skipped = 0;

  for (const [baseSlug, images] of Object.entries(productImages)) {
    const primaryImage = images[0];
    const name = keyToName('designer bracelates/' + baseSlug.replace(/-/g, ' '));

    // Try to find exact match in PDF catalog, or closest match
    let catalogSlug = baseSlug;
    let catalogData = PDF_CATALOG[baseSlug];

    // Fuzzy match — try with "-designer" suffix or without
    if (!catalogData) {
      const withDesigner = baseSlug + '-designer';
      const withDesign1  = baseSlug + '-design-1';
      catalogData = PDF_CATALOG[withDesigner] || PDF_CATALOG[withDesign1] || PDF_CATALOG[baseSlug.replace(/-designer$/, '')];
      if (catalogData) catalogSlug = withDesigner;
    }

    // Final fallback defaults
    const price     = catalogData?.price     ?? 1450;
    const usdPrice  = catalogData?.usdPrice  ?? 28;
    const desc      = catalogData?.desc      ?? `Premium designer bracelet — ${name}.`;
    const chakras   = catalogData?.chakras   ?? [];
    const benefits  = catalogData?.benefits  ?? [];
    const howToWear = catalogData?.howToWear ?? ['Left hand'];
    const longDesc  = catalogData?.longDesc  ?? JSON.stringify({
      description: desc,
      whoShouldWear: ['Those seeking crystal healing benefits'],
      benefits,
      howToWear,
      careInstructions: ['Moonlight charging','Cleanse regularly'],
      disclaimer: 'Crystal bracelets are spiritual tools and not a substitute for medical treatment.',
    });

    const slugToUse = `designer-${baseSlug}`;

    const update = {
      name,
      category: 'bracelets',
      subcategory: 'Designer Bracelets',
      price,
      originalPrice: null,
      image: primaryImage,
      images,
      usdPrice,
      originalUsdPrice: null,
      badge: null,
      desc,
      longDesc,
      chakras,
      whoShouldWear: catalogData?.benefits ? ['Crystal healing enthusiasts'] : [],
      benefits,
      howToWear,
      careInstructions: ['Moonlight charging','Avoid harsh chemicals'],
      active: true,
    };

    const existing = await Product.findOne({ slug: slugToUse });
    if (existing) {
      await Product.updateOne({ slug: slugToUse }, { $set: update });
      console.log(`  ✏️  Updated: ${name} (${images.length} images)`);
      updated++;
    } else {
      await Product.create({ slug: slugToUse, ...update });
      console.log(`  ✅ Created: ${name} (${images.length} images)`);
      created++;
    }
  }

  console.log(`\n🎉 Done! Created: ${created}, Updated: ${updated}, Skipped: ${skipped}`);
  await mongoose.disconnect();
}

main().catch(err => {
  console.error('❌ Error:', err);
  process.exit(1);
});
