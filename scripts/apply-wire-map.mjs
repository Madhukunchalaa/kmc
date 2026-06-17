/**
 * Apply an image wire-map to products.ts.
 *   node scripts/apply-wire-map.mjs scripts/wire-map-batch2.json
 * Map format: { "<product-slug>": ["others/<folder>/<file>.webp", ...] }  (R2 keys, host is prepended)
 * Sets product.image = first url (main) and product.images = all urls.
 */
import { config as loadEnv } from 'dotenv';
loadEnv({ path: '.env.local' });
loadEnv();
import fs from 'node:fs';
import path from 'node:path';

const PUB = process.env.NEXT_PUBLIC_R2_URL;
const mapFile = process.argv[2];
if (!mapFile) { console.error('usage: node scripts/apply-wire-map.mjs <map.json>'); process.exit(1); }

const wiremap = JSON.parse(fs.readFileSync(mapFile, 'utf8'));
const tsPath = path.join(process.cwd(), 'src', 'data', 'products.ts');
let content = fs.readFileSync(tsPath, 'utf8');

function bounds(slug) {
  const re = /"id":\s*"/g; const idx = []; let m;
  while ((m = re.exec(content))) idx.push(m.index);
  idx.push(content.length);
  for (let i = 0; i < idx.length - 1; i++) {
    const b = content.slice(idx[i], idx[i + 1]);
    const mm = b.match(/^\s*"id":\s*"([^"]+)"/);
    if (mm && mm[1] === slug) return [idx[i], idx[i + 1]];
  }
  return [null, null];
}

let updated = 0; const missing = [];
for (const [slug, keys] of Object.entries(wiremap)) {
  const [start, end] = bounds(slug);
  if (start === null) { missing.push(slug); continue; }
  let block = content.slice(start, end);
  const urls = keys.map((k) => `${PUB}/${k}`);
  const main = urls[0];
  const imagesJs = '[\n      ' + urls.map((u) => `"${u}"`).join(',\n      ') + '\n    ]';
  block = block.replace(/"image":\s*"[^"]*"/, `"image": "${main}"`);
  if (/"images":\s*\[/.test(block)) {
    block = block.replace(/"images":\s*\[[^\]]*\]/, `"images": ${imagesJs}`);
  } else {
    block = block.replace(/("image":\s*"[^"]*")/, `$1,\n    "images": ${imagesJs}`);
  }
  content = content.slice(0, start) + block + content.slice(end);
  updated++;
  console.log(`  wired ${slug}: ${urls.length} image(s)`);
}
fs.writeFileSync(tsPath, content);
console.log(`\nUpdated ${updated} products${missing.length ? ' | MISSING: ' + missing.join(', ') : ''}`);
