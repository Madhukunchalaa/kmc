/**
 * fix-r2-content-type.ts
 * Copies extensionless files in R2 back to themselves with ContentType: image/jpeg
 * so browsers can render them. Run: npx tsx --env-file=.env.local scripts/fix-r2-content-type.ts
 */
import 'dotenv/config';
import {
  S3Client,
  ListObjectsV2Command,
  CopyObjectCommand,
  HeadObjectCommand,
} from '@aws-sdk/client-s3';

const R2_ENDPOINT  = process.env.R2_ENDPOINT!;
const R2_ACCESS    = process.env.R2_ACCESS_KEY_ID!;
const R2_SECRET    = process.env.R2_SECRET_ACCESS_KEY!;
const R2_BUCKET    = process.env.R2_BUCKET_NAME!;

const s3 = new S3Client({
  region: 'auto',
  endpoint: R2_ENDPOINT,
  credentials: { accessKeyId: R2_ACCESS, secretAccessKey: R2_SECRET },
});

function hasImageExtension(key: string): boolean {
  return /\.(jpg|jpeg|png|webp|gif|avif|bmp|tiff)$/i.test(key.split('?')[0]);
}

async function getContentType(key: string): Promise<string | undefined> {
  try {
    const res = await s3.send(new HeadObjectCommand({ Bucket: R2_BUCKET, Key: key }));
    return res.ContentType;
  } catch {
    return undefined;
  }
}

async function fixContentType(key: string): Promise<boolean> {
  const encodedKey = key.split('/').map(part => encodeURIComponent(part)).join('/');
  const copySource = `${R2_BUCKET}/${encodedKey}`;

  try {
    await s3.send(new CopyObjectCommand({
      Bucket: R2_BUCKET,
      Key: key,
      CopySource: copySource,
      ContentType: 'image/jpeg',
      MetadataDirective: 'REPLACE',
      // Preserve public-read ACL if any
    }));
    return true;
  } catch (err: any) {
    console.error(`  ❌ Failed to copy ${key}: ${err.message}`);
    return false;
  }
}

async function main() {
  console.log('🔍 Scanning all R2 folders for extensionless image files...\n');

  const folders = [
    'designer bracelates/',
    'Signature crystal collection /',
    'Spell jar /',
    'bracelates by crystals/',
  ];

  let totalFixed = 0;
  let totalSkipped = 0;
  let totalFailed = 0;

  for (const prefix of folders) {
    console.log(`📂 Scanning: ${prefix}`);
    let token: string | undefined;

    do {
      const res = await s3.send(new ListObjectsV2Command({
        Bucket: R2_BUCKET,
        Prefix: prefix,
        ContinuationToken: token,
      }));

      for (const obj of res.Contents ?? []) {
        const key = obj.Key!;
        if (!key || key.endsWith('/')) continue;

        if (hasImageExtension(key)) {
          // Already has extension — check if ContentType is set correctly
          const ct = await getContentType(key);
          if (ct && ct.startsWith('image/')) {
            totalSkipped++;
            continue;
          }
          // Has extension but wrong/missing content-type — fix it
        }

        // Extensionless or wrong content-type — fix by self-copying with ContentType
        process.stdout.write(`  📸 Fixing: ${key.replace(prefix, '')} ... `);
        const ok = await fixContentType(key);
        if (ok) {
          console.log('✅');
          totalFixed++;
        } else {
          totalFailed++;
        }
      }

      token = res.IsTruncated ? res.NextContinuationToken : undefined;
    } while (token);

    console.log('');
  }

  console.log(`\n🎉 Done!`);
  console.log(`   ✅ Fixed:   ${totalFixed}`);
  console.log(`   ⏭️  Skipped: ${totalSkipped} (already correct)`);
  console.log(`   ❌ Failed:  ${totalFailed}`);
}

main().catch(err => {
  console.error('❌ Fatal:', err);
  process.exit(1);
});
