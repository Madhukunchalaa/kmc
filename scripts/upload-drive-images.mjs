/**
 * Convert named product images from the local Drive "others" export to WebP
 * and upload them to Cloudflare R2 under others/<folder>/<name>.webp.
 *
 * Usage:
 *   node scripts/upload-drive-images.mjs --only=anklets        # one folder
 *   node scripts/upload-drive-images.mjs                       # all folders
 *   add --dry to skip the actual upload (convert + report only)
 */
import { config as loadEnv } from 'dotenv';
loadEnv({ path: '.env.local' });
loadEnv();

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const BASE = (() => {
  const dl = path.join(process.env.USERPROFILE || 'C:/Users/kunch', 'Downloads');
  const direct = path.join(dl, 'others');
  if (fs.existsSync(path.join(direct, 'malas'))) return direct;
  for (const d of fs.readdirSync(dl)) {
    const cand = path.join(dl, d, 'others');
    if (fs.existsSync(cand) && fs.existsSync(path.join(cand, 'malas'))) return cand;
  }
  throw new Error('Could not locate the others/ folder in Downloads');
})();

const args = process.argv.slice(2);
const only = (args.find((a) => a.startsWith('--only=')) || '').split('=')[1] || null;
const DRY = args.includes('--dry');

const JUNK = [
  /^5ZA\d+$/i,
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
  /^IMG[-_ ]?\d+/i,
  /^DSC/i,
  /^\d+$/,
  /^WhatsApp/i,
  /^Screenshot/i,
  /^[0-9A-F]{6,}$/,
];
const isJunk = (stem) => JUNK.some((re) => re.test(stem));
const IMG_EXT = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];

const slug = (s) =>
  s.toLowerCase().trim()
    .replace(/[()]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const s3 = new S3Client({
  region: 'auto',
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});
const BUCKET = process.env.R2_BUCKET_NAME;
const PUBLIC = process.env.NEXT_PUBLIC_R2_URL;

async function run() {
  const folders = fs.readdirSync(BASE).filter((d) => {
    if (!fs.statSync(path.join(BASE, d)).isDirectory()) return false;
    return only ? d === only : true;
  });

  const manifest = {};
  let totalIn = 0, totalOut = 0, count = 0;

  for (const folder of folders) {
    const fpath = path.join(BASE, folder);
    const files = fs.readdirSync(fpath).filter((f) => IMG_EXT.includes(path.extname(f).toLowerCase()));
    const folderSlug = slug(folder);
    manifest[folderSlug] = [];

    for (const file of files) {
      const stem = path.basename(file, path.extname(file));
      if (isJunk(stem)) continue;

      const inBuf = fs.readFileSync(path.join(fpath, file));
      const outBuf = await sharp(inBuf)
        .rotate()
        .resize({ width: 1400, height: 1400, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 82 })
        .toBuffer();

      const key = `others/${folderSlug}/${slug(stem)}.webp`;
      const url = `${PUBLIC}/${key}`;

      if (!DRY) {
        await s3.send(new PutObjectCommand({
          Bucket: BUCKET, Key: key, Body: outBuf, ContentType: 'image/webp',
        }));
      }

      totalIn += inBuf.length; totalOut += outBuf.length; count++;
      manifest[folderSlug].push({ source: stem, key, url, kb: Math.round(outBuf.length / 1024) });
      process.stdout.write(`  ${DRY ? 'would upload' : 'uploaded'}: ${key}  (${Math.round(outBuf.length / 1024)} KB)\n`);
    }
  }

  const outFile = path.join(process.cwd(), 'scripts', 'image-manifest.json');
  fs.writeFileSync(outFile, JSON.stringify(manifest, null, 2));
  console.log(`\n${DRY ? 'DRY RUN ' : ''}done: ${count} images, ${(totalIn/1048576).toFixed(1)} MB -> ${(totalOut/1048576).toFixed(1)} MB WebP`);
  console.log(`manifest written: ${outFile}`);
}

run().catch((e) => { console.error(e); process.exit(1); });
