/**
 * Convert every product's longDesc to the owner's new 9-field format:
 *   purpose, crystalsIncluded, associatedChakras, [zodiacSign, birthDates],
 *   description, benefits[], recommendedHand, whenToWear, howToEnergize,
 *   affirmation, careInstructions[], disclaimer
 *
 * - Bracelets/zodiac that match scripts/new-format-data.json → rich owner content.
 * - Everything else → reshaped from the product's existing longDesc (best effort).
 *
 * products.ts is JSON.stringify(,2) formatted, so we round-trip safely.
 */
import fs from 'node:fs';
import path from 'node:path';

const DATA = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'scripts', 'new-format-data.json'), 'utf8'));
const tsPath = path.join(process.cwd(), 'src', 'data', 'products.ts');
const src = fs.readFileSync(tsPath, 'utf8');
const assignIdx = src.indexOf('= [');
const header = src.slice(0, assignIdx) + '= ';
const products = JSON.parse(src.slice(assignIdx + 2, src.lastIndexOf(']') + 1));

// ---- name normalization + matching ------------------------------------------
const VARIANTS = [
  [/padmehum|padmeham/g, 'padme hum'],
  [/eventurine|a venturine|aventurine/g, 'aventurine'],
  [/multiflourite|multi flourite|multi fluorite/g, 'multi fluorite'],
  [/flourite/g, 'fluorite'],
  [/sulemani|suleimani/g, 'suleimani'],
  [/hakik|hakeek/g, 'hakeek'],
  [/cat’s|cat's|cats/g, 'cats'],
];
const STRIP = new Set(['crystal','bracelet','bangle','chips','round','beauty','white','rainbow','the','natural']);

function norm(name) {
  let s = ' ' + name.toLowerCase().replace(/[’']/g, "'") + ' ';
  for (const [re, to] of VARIANTS) s = s.replace(re, to);
  s = s.replace(/\(.*?\)/g, ' ').replace(/[^a-z ]+/g, ' ');
  const words = s.split(/\s+/).filter((w) => w && !STRIP.has(w));
  return words;
}
function contiguous(hay, needle) {
  if (needle.length > hay.length) return false;
  for (let i = 0; i + needle.length <= hay.length; i++) {
    let ok = true;
    for (let j = 0; j < needle.length; j++) if (hay[i + j] !== needle[j]) { ok = false; break; }
    if (ok) return true;
  }
  return false;
}
const crystalKeys = Object.keys(DATA.crystals).map((k) => ({ k, w: norm(k) })).sort((a, b) => b.w.length - a.w.length);
const zodiacKeys = Object.keys(DATA.zodiac);

function matchCrystal(words) {
  for (const { k, w } of crystalKeys) if (contiguous(words, w)) return k;
  return null;
}

// ---- reshape helpers (for unmatched products) -------------------------------
const TYPE_WORDS = new Set(['bracelet','bangle','crystal','crystals','chips','tower','sphere','pyramid','merkaba','mala','pendant','ring','anklet','keychain','yantra','frame','tree','angel','wand','plate','cluster','geode','raw','polished','natural','designer','design','set','combo','charm','bead','beads','round','large','small','mini','medium','shell','stone','stones','big','plain','of','life','the','a','in','one','all','roller','face','duster','devi','laxmi','ganesha','seven','generator','point','heart','star','moon','half','owl','dolphin','elephant','oval','beauty','protective','custom','number','box','gift']);
// Best-effort crystal name from the product name. Returns '' when it can't extract
// something crystal-like (combos / décor) — caller omits the field rather than guess.
function crystalsFromName(name) {
  const words = name.replace(/\(.*?\)/g, ' ').split(/\s+/).filter((w) => w && !TYPE_WORDS.has(w.toLowerCase()));
  const out = words.join(' ').trim();
  return out.length >= 3 ? out : '';
}
function parseOld(longDesc) {
  try { return JSON.parse(longDesc); } catch { return null; }
}
// "Recommended Hand to Wear" / "When to Wear" only make sense for items worn on the body.
const WEARABLE_CATS = new Set(['bracelets', 'silver-jewelry', 'anklets', 'malas', 'pendants', 'designer-pendants']);
function isWearable(p) {
  if (WEARABLE_CATS.has((p.category || '').toLowerCase())) return true;
  const s = (p.subcategory || '').toLowerCase();
  if (/bracelet|bangle|pendant|ring|mala|anklet|earring|chain|rudraksha|jewel/.test(s)) return true;
  return /\b(bracelet|mala|pendant|ring|anklet)\b/i.test(p.name || '');
}
function extractHand(howToWear) {
  for (const l of howToWear || []) {
    const m = l.match(/\b(left|right)\s+hand\b/i);
    if (m) return m[1][0].toUpperCase() + m[1].slice(1).toLowerCase() + ' Hand';
  }
  return null;
}
function extractWhen(howToWear) {
  for (const l of howToWear || []) {
    const m = l.match(/best worn during:\s*(.+)/i);
    if (m) return m[1].replace(/\.+$/, '').trim() + '.';
  }
  return null;
}
function extractEnergize(care) {
  for (const l of care || []) {
    const m = l.match(/cleanse and energize by:\s*(.+)/i);
    if (m) return m[1].replace(/\.+$/, '').trim() + '.';
  }
  return null;
}

// ---- build the new longDesc -------------------------------------------------
function ordered(obj) {
  // keep a stable, reader-friendly key order
  const KEYS = ['purpose','crystalsIncluded','associatedChakras','zodiacSign','birthDates','description','benefits','recommendedHand','whenToWear','howToEnergize','affirmation','careInstructions','disclaimer'];
  const out = {};
  for (const k of KEYS) if (obj[k] !== undefined && obj[k] !== null && obj[k] !== '') out[k] = obj[k];
  return out;
}

let matched = 0, zodiacMatched = 0, reshaped = 0;
const unmatchedSample = [];

for (const p of products) {
  const words = norm(p.name);
  const zKey = zodiacKeys.find((z) => words.includes(z));
  const cKey = zKey ? null : matchCrystal(words);

  let nd;
  if (zKey) {
    const d = DATA.zodiac[zKey];
    nd = ordered({
      purpose: d.purpose,
      zodiacSign: d.sign,
      birthDates: d.dates,
      associatedChakras: (p.chakras || []).join(', '),
      description: d.description,
      benefits: d.benefits,
      recommendedHand: d.recommendedHand,
      howToEnergize: d.howToEnergize,
      affirmation: d.affirmation,
      careInstructions: DATA.standardCare,
      disclaimer: DATA.standardDisclaimer,
    });
    zodiacMatched++;
  } else if (cKey) {
    const d = DATA.crystals[cKey];
    const wear = isWearable(p);
    nd = ordered({
      purpose: d.purpose,
      crystalsIncluded: d.crystalsIncluded,
      associatedChakras: d.associatedChakras,
      description: d.description,
      benefits: d.benefits,
      recommendedHand: wear ? d.recommendedHand : null,
      whenToWear: wear ? d.whenToWear : null,
      howToEnergize: d.howToEnergize,
      affirmation: d.affirmation,
      careInstructions: DATA.standardCare,
      disclaimer: DATA.standardDisclaimer,
    });
    matched++;
  } else {
    const old = parseOld(p.longDesc || '') || {};
    const purpose = (p.desc && !p.desc.trim().startsWith('{')) ? p.desc.trim() : '';
    nd = ordered({
      purpose,
      crystalsIncluded: crystalsFromName(p.name),
      associatedChakras: (p.chakras || []).filter((c) => c && c.trim()).join(', '),
      description: old.description || p.desc || '',
      benefits: Array.isArray(old.benefits) ? old.benefits : [],
      recommendedHand: extractHand(old.howToWear),
      whenToWear: extractWhen(old.howToWear),
      howToEnergize: extractEnergize(old.careInstructions) || 'Moonlight or selenite charging.',
      affirmation: old.affirmation || '',
      careInstructions: Array.isArray(old.careInstructions) && old.careInstructions.length ? old.careInstructions : DATA.standardCare,
      disclaimer: old.disclaimer || DATA.standardDisclaimer,
    });
    reshaped++;
    if (unmatchedSample.length < 25) unmatchedSample.push(p.id);
  }

  p.longDesc = JSON.stringify(nd);
}

const arrSerialized = JSON.stringify(products, null, 2);
JSON.parse(arrSerialized); // sanity
fs.writeFileSync(tsPath, header + arrSerialized + ';\n');

console.log(`✓ converted ${products.length} products`);
console.log(`  crystal-matched (rich): ${matched}`);
console.log(`  zodiac-matched (rich):  ${zodiacMatched}`);
console.log(`  reshaped (from existing): ${reshaped}`);
console.log(`\n  reshaped sample (first 25):`);
unmatchedSample.forEach((s) => console.log(`    - ${s}`));
