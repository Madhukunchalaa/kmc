/**
 * compress-r2-images.ts
 * Downloads extremely large images from R2, compresses them down to web-friendly sizes (max 1080px width) using Sharp,
 * and overwrites them in the bucket. This permanently fixes slow loading times and Next.js memory crashes.
 */
import 'dotenv/config';
import {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand,
  PutObjectCommand,
} from '@aws-sdk/client-s3';
import sharp from 'sharp';

const R2_ENDPOINT = process.env.R2_ENDPOINT!;
const R2_ACCESS = process.env.R2_ACCESS_KEY_ID!;
const R2_SECRET = process.env.R2_SECRET_ACCESS_KEY!;
const R2_BUCKET = process.env.R2_BUCKET_NAME!;

const s3 = new S3Client({
  region: 'auto',
  endpoint: R2_ENDPOINT,
  credentials: { accessKeyId: R2_ACCESS, secretAccessKey: R2_SECRET },
});

// Any file larger than this will be compressed (e.g., 1.5 MB)
const SIZE_THRESHOLD = 1.5 * 1024 * 1024; 

async function streamToBuffer(stream: NodeJS.ReadableStream): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    stream.on('data', chunk => chunks.push(chunk));
    stream.on('end', () => resolve(Buffer.concat(chunks)));
    stream.on('error', reject);
  });
}

async function compressImage(buffer: Buffer): Promise<Buffer> {
  return await sharp(buffer)
    .resize({ width: 1080, withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toBuffer();
}

async function main() {
  console.log('🔍 Scanning R2 for massive image files...\n');

  const folders = [
    'designer bracelates/',
    'Signature crystal collection /',
    'Spell jar /',
    'bracelates by crystals/',
  ];

  let compressedCount = 0;
  let totalSavedBytes = 0;

  for (const prefix of folders) {
    console.log(`📂 Scanning folder: ${prefix}`);
    let token: string | undefined;

    do {
      const res = await s3.send(new ListObjectsV2Command({
        Bucket: R2_BUCKET,
        Prefix: prefix,
        ContinuationToken: token,
      }));

      for (const obj of res.Contents ?? []) {
        if (!obj.Key || obj.Key.endsWith('/')) continue;
        
        // Skip if not extremely large
        if (!obj.Size || obj.Size < SIZE_THRESHOLD) continue;

        console.log(`\n⏳ Downloading huge file: ${obj.Key} (${(obj.Size / 1024 / 1024).toFixed(2)} MB)...`);
        
        try {
          // 1. Download
          const getRes = await s3.send(new GetObjectCommand({ Bucket: R2_BUCKET, Key: obj.Key }));
          if (!getRes.Body) continue;
          
          const rawBuffer = await streamToBuffer(getRes.Body as NodeJS.ReadableStream);
          
          // 2. Compress
          console.log(`   ⚙️ Compressing with Sharp...`);
          const compressedBuffer = await compressImage(rawBuffer);
          
          // 3. Upload back to R2 (Overwrite)
          console.log(`   ⬆️ Uploading compressed version (${(compressedBuffer.length / 1024 / 1024).toFixed(2)} MB)...`);
          await s3.send(new PutObjectCommand({
            Bucket: R2_BUCKET,
            Key: obj.Key,
            Body: compressedBuffer,
            ContentType: 'image/jpeg',
            CacheControl: 'max-age=31536000'
          }));

          const savedBytes = obj.Size - compressedBuffer.length;
          totalSavedBytes += savedBytes;
          compressedCount++;
          console.log(`   ✅ Done! Saved ${(savedBytes / 1024 / 1024).toFixed(2)} MB`);
          
        } catch (err: any) {
          console.error(`   ❌ Failed to process ${obj.Key}: ${err.message}`);
        }
      }

      token = res.IsTruncated ? res.NextContinuationToken : undefined;
    } while (token);
  }

  console.log('\n🎉 Compression Complete!');
  console.log(`   Total files compressed: ${compressedCount}`);
  console.log(`   Total bandwidth/storage saved: ${(totalSavedBytes / 1024 / 1024).toFixed(2)} MB`);
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
