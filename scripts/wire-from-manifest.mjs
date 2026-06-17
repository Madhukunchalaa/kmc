/**
 * Match uploaded R2 images (scripts/image-manifest.json) to catalog products
 * and propose / apply image wiring.
 *   node scripts/wire-from-manifest.mjs        # preview (writes wire-map.json)
 *   node scripts/wire-from-manifest.mjs --commit  # also writes wire-map.json (apply step is separate)
 */
import { config as loadEnv } from 'dotenv';
loadEnv({ path: '.env.local' });
loadEnv();
import fs from 'node:fs';
import path from 'node:path';
import mongoose from 'mongoose';

const FOLDER_CAT = {
  'anklets': 'anklets',
  'malas': 'malas',
  'pendants': 'pendants',
  'glow-essential-crystals': 'glow-essentials',
  'designer-crystal-rings': 'silver-jewelry',
  'silver-jewlery': 'silver-jewelry',
  'home-decor': 'home-decor',
  'designer-pendents': 'designer-pendants',
};
const STRIP = {
  malas: ['mala', 'malas'], pendants: ['pendant', 'pendants'], anklets: ['anklet', 'anklets'],
};
const STOP = new Set(['crystal','crystals','design','designs','ring','rings','mala','malas','pendant','pendants','anklet','anklets','stone','bracelet','the','and','set','small','big','classic','protective','healing','natural']);

const manifest = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'scripts', 'image-manifest.json'), 'utf8'));

function coreOf(src, folderSlug) {
  let s = src.toLowerCase();
  s = s.replace(/\(\d+\)/g, ' ').replace(/pic\s*\d+/gi, ' ').replace(/design\s*\d+/gi, ' ')
       .replace(/\bpic\b/gi, ' ').replace(/_/g, ' ').replace(/\b\d+\b/g, ' ');
  for (const w of (STRIP[folderSlug] || [])) s = s.replace(new RegExp('\\b' + w + '\\b', 'g'), ' ');
  return s.replace(/[^a-z0-9]+/g, ' ').trim().replace(/\s+/g, ' ');
}
function picNum(src) {
  const m = src.toLowerCase().match(/pic\s*(\d+)/);
  if (m) return parseInt(m[1], 10);
  if (/_\s*$/.test(src) || !/\d/.test(src)) return 0; // single / unnumbered = main
  const d = src.match(/(\d+)/); return d ? parseInt(d[1], 10) : 1;
}
const tokens = (s) => s.split(/\s+/).filter((t) => t && !STOP.has(t));

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  const products = await mongoose.connection.db.collection('products')
    .find({ active: true, isDeleted: { $ne: true } }).project({ slug: 1, name: 1, category: 1 }).toArray();
  await mongoose.disconnect();

  const byCat = {};
  for (const p of products) (byCat[(p.category || '').toLowerCase()] ||= []).push({ ...p, toks: tokens(p.name.toLowerCase()) });

  const wireMap = {}; const report = [];

  for (const [folderSlug, entries] of Object.entries(manifest)) {
    const cat = FOLDER_CAT[folderSlug];
    if (!cat || !entries.length) continue;
    // group by core
    const groups = {};
    for (const e of entries) {
      const core = coreOf(e.source, folderSlug);
      (groups[core] ||= []).push({ ...e, pic: picNum(e.source) });
    }
    const avail = [...(byCat[cat] || [])];
    const wired = [], unmatched = [];
    // longest core first
    for (const core of Object.keys(groups).sort((a, b) => b.split(' ').length - a.split(' ').length)) {
      const ctoks = tokens(core);
      let best = null, bestScore = 0, bestExtra = 99;
      for (const p of avail) {
        const inter = ctoks.filter((t) => p.toks.includes(t)).length;
        const extra = p.toks.filter((t) => !ctoks.includes(t)).length;
        if (inter > bestScore || (inter === bestScore && inter > 0 && extra < bestExtra)) {
          best = p; bestScore = inter; bestExtra = extra;
        }
      }
      const imgs = groups[core].sort((a, b) => a.pic - b.pic);
      if (best && bestScore > 0) {
        wireMap[best.slug] = imgs.map((i) => i.url);
        wired.push(`${core}  ->  ${best.name}  (${imgs.length} img)`);
        avail.splice(avail.indexOf(best), 1);
      } else {
        unmatched.push(`${core}  (${imgs.length} img)`);
      }
    }
    report.push({ folder: folderSlug, cat, wired, unmatched, leftoverProducts: avail.map((p) => p.name) });
  }

  fs.writeFileSync(path.join(process.cwd(), 'scripts', 'wire-map.json'), JSON.stringify(wireMap, null, 2));
  for (const r of report) {
    console.log(`\n=== ${r.folder} -> ${r.cat} ===`);
    console.log(`  WIRED (${r.wired.length}):`); r.wired.forEach((w) => console.log('     ' + w));
    if (r.unmatched.length) { console.log(`  IMAGES WITH NO PRODUCT (${r.unmatched.length}):`); r.unmatched.forEach((u) => console.log('     ' + u)); }
    if (r.leftoverProducts.length) { console.log(`  PRODUCTS WITH NO IMAGE (${r.leftoverProducts.length}): ` + r.leftoverProducts.join(', ')); }
  }
  console.log(`\nwire-map.json written with ${Object.keys(wireMap).length} product mappings.`);
}
main().catch((e) => { console.error(e); process.exit(1); });
