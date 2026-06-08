/**
 * fix-designer-bracelets.ts
 * Removes old duplicate designer bracelet entries and updates prices from PDF.
 */
import 'dotenv/config';
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;
const ProductSchema = new mongoose.Schema({
  slug: String, name: String, category: String, subcategory: String,
  price: Number, originalPrice: Number, image: String, images: [String],
  usdPrice: Number, badge: String, desc: String, longDesc: String,
  chakras: [String], active: Boolean,
}, { timestamps: true, strict: false });
const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

// Correct prices from PDF — keyed by slug (the NEW designer-* ones)
const CORRECT_PRICES: Record<string, { price: number; usdPrice: number; name?: string }> = {
  'designer-earth-tone-mother-of-pearl-shell': { price: 2200, usdPrice: 44, name: 'Earth-Tone Mother of Pearl Bracelet' },
  'designer-green-mother-of-pearl-shell':      { price: 2200, usdPrice: 44, name: 'Green Mother of Pearl Shell Bracelet' },
  'designer-natural-mother-of-pearl-shell':    { price: 2200, usdPrice: 44, name: 'Natural Mother of Pearl Shell Bracelet' },
  'designer-amethyst-design-2':                { price: 1750, usdPrice: 35, name: 'Amethyst Bracelet – Design 2' },
  'designer-amethyst':                         { price: 1450, usdPrice: 28, name: 'Amethyst Bracelet – Design 1' },
  'designer-black-tourmaline':                 { price: 1450, usdPrice: 28, name: 'Black Tourmaline Bracelet' },
  'designer-clear-quartz':                     { price: 1750, usdPrice: 35, name: 'Clear Quartz Bracelet' },
  'designer-green-eventurine':                 { price: 1450, usdPrice: 28, name: 'Green Aventurine Bracelet' },
  'designer-jade':                             { price: 1750, usdPrice: 35, name: 'Jade Bracelet' },
  'designer-lapis-lazuli':                     { price: 1750, usdPrice: 35, name: 'Lapis Lazuli Bracelet' },
  'designer-multiflourite':                    { price: 1450, usdPrice: 28, name: 'Multi-Fluorite Bracelet' },
  'designer-pyrite':                           { price: 1750, usdPrice: 42, name: 'Pyrite Bracelet' },
  'designer-red-jasper':                       { price: 1750, usdPrice: 35, name: 'Red Jasper Bracelet' },
  'designer-rose-quartz':                      { price: 1750, usdPrice: 44, name: 'Rose Quartz Bracelet – Design 1' },
  'designer-selenite':                         { price: 1750, usdPrice: 44, name: 'Selenite Bracelet' },
  'designer-seven-chakra-design-2':            { price: 1450, usdPrice: 28, name: 'Seven Chakra Bracelet – Design 2' },
  'designer-seven-chakra':                     { price: 1450, usdPrice: 28, name: 'Seven Chakra Bracelet – Design 1' },
  'designer-tiger-eye-design-2':               { price: 1750, usdPrice: 35, name: 'Tiger Eye Bracelet – Design 2' },
  'designer-tiger-eye':                        { price: 1750, usdPrice: 35, name: 'Tiger Eye Bracelet – Design 1' },
  'designer-om-mani-padme-hum-pixiu-black-obsidian': { price: 1750, usdPrice: 35, name: 'Om Mani Padme Hum + Pixiu Black Obsidian Bracelet' },
};

// Old duplicate slugs from the first sync that we need to remove
// (they have subcategory 'Designer Bracelets' but slug doesn't start with 'designer-')
const OLD_DUPLICATE_SLUGS = [
  'earth-tone-mother-of-pearl-bracelet',
  'green-mother-of-pearl-shell-bracelet',
  'natural-mother-of-pearl-shell-bracelet',
  'jade-bracelet-designer',
  'selenite-bracelet-designer',
  'om-mani-padme-hum-pixiu-black-obsidian-bracelet',
  'amethyst-bracelet-design-1',
  'amethyst-bracelet-design-2',
  'black-tourmaline-bracelet-designer',
  'clear-quartz-bracelet-designer',
  'green-aventurine-bracelet-designer',
  'lapis-lazuli-bracelet-designer',
  'multi-fluorite-bracelet-designer',
  'pyrite-bracelet-designer',
  'red-jasper-bracelet-designer',
  'rose-quartz-bracelet-design-1',
  'rose-quartz-bracelet-design-2',
  'selenite-bracelet',
  'seven-chakra-bracelet-design-1',
  'seven-chakra-bracelet-design-2',
  'tiger-eye-bracelet-design-1',
  'tiger-eye-bracelet-design-2',
];

async function main() {
  await mongoose.connect(MONGODB_URI);
  console.log('✅ Connected\n');

  // 1. Delete old duplicate entries
  console.log('🗑️  Removing old duplicate entries...');
  for (const slug of OLD_DUPLICATE_SLUGS) {
    const res = await Product.deleteOne({ slug, subcategory: 'Designer Bracelets' });
    if (res.deletedCount) console.log(`  Deleted: ${slug}`);
  }

  // 2. Fix prices and names on new designer-* products
  console.log('\n✏️  Fixing prices from PDF...');
  for (const [slug, fix] of Object.entries(CORRECT_PRICES)) {
    const res = await Product.updateOne(
      { slug },
      { $set: { price: fix.price, usdPrice: fix.usdPrice, ...(fix.name ? { name: fix.name } : {}) } }
    );
    if (res.matchedCount) {
      console.log(`  ✅ ${fix.name}: ₹${fix.price} | $${fix.usdPrice}`);
    } else {
      console.log(`  ⚠️  Not found: ${slug}`);
    }
  }

  // 3. Final count
  const total = await Product.countDocuments({ subcategory: 'Designer Bracelets' });
  console.log(`\n🎉 Done! Total Designer Bracelets in DB: ${total}`);
  await mongoose.disconnect();
}

main().catch(err => { console.error('❌', err); process.exit(1); });
