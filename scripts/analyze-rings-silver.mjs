/**
 * Analyze designer-ring + silver-jewelry products vs. the freshly uploaded R2 images.
 * Read-only: prints a report. No writes.
 */
import fs from 'node:fs';
import path from 'node:path';

const tsPath = path.join(process.cwd(), 'src', 'data', 'products.ts');
const src = fs.readFileSync(tsPath, 'utf8');

// Pull the array literal out of the TS file and eval it safely-ish.
const start = src.indexOf('= [') + 2;
const end = src.lastIndexOf(']');
const arrText = src.slice(start, end + 1);
let products;
try {
  products = JSON.parse(arrText);
} catch (e) {
  console.error('JSON.parse failed, trying loose eval:', e.message);
  // eslint-disable-next-line no-eval
  products = eval('(' + arrText + ')');
}

const manifest = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'scripts', 'image-manifest.json'), 'utf8'));

// All uploaded ring + silver image stems (folder slug -> [source stems])
const ringImgs = (manifest['designer-crystal-rings'] || []).map((m) => m.key);
const silverImgs = (manifest['silver-jewlery'] || []).map((m) => m.key);

console.log('\n=== UPLOADED RING IMAGES (' + ringImgs.length + ') ===');
ringImgs.forEach((k) => console.log('  ' + k.split('/').pop()));
console.log('\n=== UPLOADED SILVER IMAGES (' + silverImgs.length + ') ===');
silverImgs.forEach((k) => console.log('  ' + k.split('/').pop()));

const silver = products.filter((p) => p.category === 'silver-jewelry');
console.log('\n=== silver-jewelry PRODUCTS (' + silver.length + ') ===');
for (const p of silver) {
  const img = (p.image || '').split('/').pop() || '(none)';
  const nImg = (p.images || []).length;
  const isR2 = (p.image || '').includes('/others/');
  console.log(`  [${p.subcategory}] ${p.id}  | img=${img} (${nImg} imgs) ${isR2 ? '' : '  <-- NOT an others/ photo'}`);
}

// Which ring image stems are NOT referenced by any product?
const allImgUrls = new Set();
for (const p of products) {
  if (p.image) allImgUrls.add(p.image.split('/').pop());
  for (const u of (p.images || [])) allImgUrls.add(u.split('/').pop());
}
const orphanRings = ringImgs.map((k) => k.split('/').pop()).filter((f) => !allImgUrls.has(f));
const orphanSilver = silverImgs.map((k) => k.split('/').pop()).filter((f) => !allImgUrls.has(f));
console.log('\n=== RING IMAGES NOT WIRED TO ANY PRODUCT (' + orphanRings.length + ') ===');
orphanRings.forEach((f) => console.log('  ' + f));
console.log('\n=== SILVER IMAGES NOT WIRED TO ANY PRODUCT (' + orphanSilver.length + ') ===');
orphanSilver.forEach((f) => console.log('  ' + f));
