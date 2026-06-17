/**
 * Wire the newly-uploaded Designer Crystal Ring photos into products.ts:
 *  - complete the Pyrite + Tiger Eye galleries with their extra angles
 *  - create 3 brand-new listings for crystals that had photos but no product
 * products.ts is already in JSON.stringify(,2) format, so we round-trip safely.
 */
import { config as loadEnv } from 'dotenv';
loadEnv({ path: '.env.local' });
loadEnv();
import fs from 'node:fs';
import path from 'node:path';

const PUB = process.env.NEXT_PUBLIC_R2_URL;
if (!PUB) { console.error('NEXT_PUBLIC_R2_URL missing'); process.exit(1); }
const url = (stem) => `${PUB}/others/designer-crystal-rings/${stem}.webp`;

const tsPath = path.join(process.cwd(), 'src', 'data', 'products.ts');
const src = fs.readFileSync(tsPath, 'utf8');
const assignIdx = src.indexOf('= [');           // points at '='
const header = src.slice(0, assignIdx) + '= ';   // 'export const products: Product[] = '
const arrText = src.slice(assignIdx + 2, src.lastIndexOf(']') + 1);
const products = JSON.parse(arrText);
const before = products.length;

const byId = (id) => products.find((p) => p.id === id);

// 1) Complete existing galleries (same physical design, extra angles).
const pyrite = byId('pyrite-design-ring');
if (pyrite) {
  pyrite.images = ['pyrite-pic-1', 'pyrite-pic1', 'pyrite-pic11', 'pyrite-pic22'].map(url);
  pyrite.image = pyrite.images[0];
}
const tiger = byId('tiger-eye-design-ring');
if (tiger) {
  tiger.images = [
    'tiger-eye-owl-pic1', 'tiger-eye-owl-pic2', 'tiger-eye-owl-pic3',
    'tiger-eye-dolphin-pic1', 'tiger-eye-dolphin-pic2',
    'tiger-eye-halfmoon-pic1', 'tiger-eye-halfmoon-pic2', 'tiger-eye-halfmoon-pic3',
  ].map(url);
  tiger.image = tiger.images[0];
}

// 2) Three new design-ring listings (photos existed, product did not).
const longDesc = (name, desc, chakras) => JSON.stringify({
  description: `${name} is a premium quality, authentic spiritual item. ${desc} Sourced carefully and ritually cleansed.`,
  whoShouldWear: [
    `People seeking to balance their ${chakras.join(', ')} Chakra.`,
    'Individuals seeking spiritual growth, clarity, and protection in their daily life.',
    'Anyone experiencing low energy, stress, or blockages in personal development.',
  ],
  benefits: [
    desc,
    `Aligns and energises the ${chakras.join(', ')} Chakra.`,
    'Dissolves negative energies and builds a strong positive protective aura.',
    'Supports emotional healing, meditation, and mindfulness practices.',
  ],
  howToWear: [
    'Keep close to your body or wear daily.',
    'Can be placed in a clean pocket, purse, or worn on the body.',
    'Best worn during meditation, yoga, or professional work.',
  ],
  careInstructions: [
    'Avoid contact with water, soap, and cosmetic chemicals.',
    'Cleanse periodically by keeping it under overnight moonlight or smudge with incense smoke.',
    'Store in a dry, safe, clean velvet pouch or container when not in use.',
  ],
  disclaimer: 'Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.',
}, null, 2);

const mk = (id, name, desc, chakras, stems) => ({
  id, name,
  category: 'silver-jewelry',
  subcategory: 'Design Rings',
  price: 1050,
  originalPrice: 1260,
  image: url(stems[0]),
  badge: null,
  desc,
  longDesc: longDesc(name, desc, chakras),
  chakras,
  images: stems.map(url),
  usdPrice: 0,
  originalUsdPrice: null,
});

const newProducts = [
  mk('black-onyx-design-ring', 'Black Onyx Design Ring',
    'Powerful protective stone that absorbs negativity, grounds scattered energy, and builds inner strength and willpower.',
    ['Root'],
    ['black-onyx-pic3']),
  mk('snowflake-obsidian-design-ring', 'Snowflake Obsidian Design Ring',
    'Stone of purity and balance that calms the mind, releases ingrained stress patterns, and clears negative energy.',
    ['Root', 'Crown'],
    ['snowflake-obsidian-pic-1', 'snowflake-obsidian-owl-pic2', 'snowflake-black-obsidian-owl-pic3', 'snowflake-obsidian-halfmoon-pic-2', 'snowflake-obsidian-halfmoon-pic3']),
  mk('white-howlite-design-ring', 'White Howlite Design Ring',
    'Deeply calming stone that eases anxiety, quietens an overactive mind, and supports patience and restful sleep.',
    ['Crown'],
    ['white-howlite-pic1', 'white-howlite-pic2', 'white-howlite-pic3']),
];

// Insert the new rings right after white-agate-design-ring (end of the Design Rings block) if present.
const anchorIdx = products.findIndex((p) => p.id === 'white-agate-design-ring');
let added = 0;
for (const np of newProducts) {
  if (byId(np.id)) { console.log(`  skip (exists): ${np.id}`); continue; }
  if (anchorIdx >= 0) products.splice(anchorIdx + 1 + added, 0, np);
  else products.push(np);
  added++;
  console.log(`  added: ${np.id} (${np.images.length} img)`);
}

const arrSerialized = JSON.stringify(products, null, 2);
JSON.parse(arrSerialized); // sanity: array round-trips
const out = header + arrSerialized + ';\n';
fs.writeFileSync(tsPath, out);
console.log(`\nproducts: ${before} -> ${products.length} (added ${added}); pyrite=${pyrite?.images.length} imgs, tiger-eye=${tiger?.images.length} imgs`);
