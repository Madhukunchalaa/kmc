/**
 * cleanup-designer-bracelets.ts
 * Cleans up incorrectly created designer bracelet entries and fixes names.
 */
import 'dotenv/config';
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

const ProductSchema = new mongoose.Schema({
  slug: String, name: String, category: String, subcategory: String,
  price: Number, originalPrice: Number, image: String, images: [String],
  usdPrice: Number, badge: String, desc: String, longDesc: String,
  chakras: [String], active: Boolean,
}, { timestamps: true });

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

async function main() {
  await mongoose.connect(MONGODB_URI);
  console.log('✅ Connected\n');

  // 1. Delete the incorrectly split Om Mani entries (these came from sub-images parsed as separate products)
  const badSlugs = [
    'designer-om-mani-padme-hum-black-obsidian-pixiu5za01704jpg',
    'designer-om-mani-padme-hum-black-obsidian-pixiu5za01706jpg',
    'designer-om-mani-padme-hum-black-obsidian-pixiu5za01768jpg',
    'designer-om-mani-padme-hum-black-obsidian-pixiu5za01775jpg',
    'designer-om-mani-padme-hum-black-obsidian-pixiupic-1',
    'designer-om-mani-padme-hum-black-obsidian-pixiupic-2',
    'designer-om-mani-padme-hum-black-obsidian-pixiupic-3',
    'designer-om-mani-padme-hum-black-obsidian-pixiupic-4',
    // Also fix Rose Quartz that split incorrectly
    'designer-rose-quartz-pic-1-design-2',
  ];

  for (const slug of badSlugs) {
    const del = await Product.deleteOne({ slug });
    if (del.deletedCount > 0) console.log(`🗑️  Deleted: ${slug}`);
  }

  // 2. Fix product names that parsed oddly
  const fixes: Record<string, Partial<{ name: string; slug: string }>> = {
    'designer-earth-tone-mother-of-pearl-shell': { name: 'Earth-Tone Mother of Pearl Bracelet' },
    'designer-green-mother-of-pearl-shell':      { name: 'Green Mother of Pearl Shell Bracelet' },
    'designer-natural-mother-of-pearl-shell':    { name: 'Natural Mother of Pearl Shell Bracelet' },
    'designer-amethyst-design-2':                { name: 'Amethyst Bracelet – Design 2' },
    'designer-amethyst':                         { name: 'Amethyst Bracelet – Design 1' },
    'designer-black-tourmaline':                 { name: 'Black Tourmaline Bracelet' },
    'designer-clear-quartz':                     { name: 'Clear Quartz Bracelet' },
    'designer-green-eventurine':                 { name: 'Green Aventurine Bracelet' },
    'designer-jade':                             { name: 'Jade Bracelet' },
    'designer-lapis-lazuli':                     { name: 'Lapis Lazuli Bracelet' },
    'designer-multiflourite':                    { name: 'Multi-Fluorite Bracelet' },
    'designer-pyrite':                           { name: 'Pyrite Bracelet' },
    'designer-red-jasper':                       { name: 'Red Jasper Bracelet' },
    'designer-rose-quartz':                      { name: 'Rose Quartz Bracelet – Design 1' },
    'designer-selenite':                         { name: 'Selenite Bracelet' },
    'designer-seven-chakra-design-2':            { name: 'Seven Chakra Bracelet – Design 2' },
    'designer-seven-chakra':                     { name: 'Seven Chakra Bracelet – Design 1' },
    'designer-tiger-eye-design-2':               { name: 'Tiger Eye Bracelet – Design 2' },
    'designer-tiger-eye':                        { name: 'Tiger Eye Bracelet – Design 1' },
  };

  for (const [slug, data] of Object.entries(fixes)) {
    const res = await Product.updateOne({ slug }, { $set: data });
    if (res.matchedCount > 0) console.log(`✏️  Fixed name: ${slug} → "${data.name}"`);
  }

  // 3. Create the merged Om Mani + Pixiu product with all its images collected from R2
  const R2_PUBLIC = process.env.NEXT_PUBLIC_R2_URL!;
  const omManiImages = [
    `${R2_PUBLIC}/designer%20bracelates/Om%20Mani%20Padme%20Hum%20%2B%20Pixiu%20Black%20Obsidian%2FPic%201`,
    `${R2_PUBLIC}/designer%20bracelates/Om%20Mani%20Padme%20Hum%20%2B%20Pixiu%20Black%20Obsidian%2FPic%202`,
    `${R2_PUBLIC}/designer%20bracelates/Om%20Mani%20Padme%20Hum%20%2B%20Pixiu%20Black%20Obsidian%2FPic%203`,
    `${R2_PUBLIC}/designer%20bracelates/Om%20Mani%20Padme%20Hum%20%2B%20Pixiu%20Black%20Obsidian%2FPic%204`,
  ];

  // Check if any Om Mani designer product exists from the live listing
  const existingOm = await Product.findOne({ slug: 'designer-om-mani-padme-hum-pixiu-black-obsidian' });
  if (!existingOm) {
    await Product.create({
      slug: 'designer-om-mani-padme-hum-pixiu-black-obsidian',
      name: 'Om Mani Padme Hum + Pixiu Black Obsidian Bracelet',
      category: 'bracelets',
      subcategory: 'Designer Bracelets',
      price: 1750,
      usdPrice: 35,
      originalPrice: null,
      image: omManiImages[0],
      images: omManiImages,
      badge: null,
      desc: 'Grounding, mindfulness, prosperity symbolism — Black Obsidian with Pixiu charm and Om Mani Padme Hum engraved beads.',
      longDesc: JSON.stringify({
        description: 'The Om Mani Padme Hum + Pixiu Black Obsidian Bracelet combines the grounding qualities of Black Obsidian, the sacred symbolism of the Om Mani Padme Hum mantra, and the revered Pixiu symbol for prosperity.',
        whoShouldWear: ['Those seeking spiritual grounding','Entrepreneurs','Meditation practitioners'],
        benefits: ['Encourages grounding and stability','Supports mindfulness','Symbolizes prosperity','Promotes focus'],
        howToWear: ['Wear on left hand','Use during meditation, prayer, and business activities'],
        careInstructions: ['Moonlight charging, selenite charging, or chanting "Om Mani Padme Hum" 21 times'],
        disclaimer: 'Crystal bracelets are spiritual tools and not a substitute for medical treatment.',
      }),
      chakras: ['Root'],
      active: true,
    });
    console.log('✅ Created: Om Mani Padme Hum + Pixiu Black Obsidian Bracelet');
  }

  console.log('\n🎉 Cleanup done!');
  await mongoose.disconnect();
}

main().catch(err => { console.error('❌', err); process.exit(1); });
