import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

async function run() {
  try {
    const inputPath = path.resolve('public', 'images', 'founder-new.jpeg');
    console.log(`Processing: ${inputPath}`);

    // Compress & convert to WebP
    const webpBuffer = await sharp(inputPath)
      .resize({ width: 800, withoutEnlargement: true }) // reasonable size for a founder portrait
      .webp({ quality: 80 })
      .toBuffer();

    console.log('Converted to WebP successfully.');

    // Upload to Cloudflare R2
    const s3Client = new S3Client({
      region: 'auto',
      endpoint: process.env.R2_ENDPOINT!,
      credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID!,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
      },
    });

    const safeFilename = `uploads/founder-${Date.now()}.webp`;

    const command = new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME!,
      Key: safeFilename,
      ContentType: 'image/webp',
      Body: webpBuffer,
    });

    await s3Client.send(command);

    const fileUrl = `${process.env.NEXT_PUBLIC_R2_URL}/${safeFilename}`;
    console.log('\n--- UPLOAD SUCCESS ---');
    console.log(`URL: ${fileUrl}\n`);
    
  } catch (err) {
    console.error('Error:', err);
  }
}

run();
