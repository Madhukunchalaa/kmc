import { config as loadEnv } from 'dotenv';
loadEnv({ path: '.env.local' });
loadEnv();

import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';
import fs from 'fs';

async function main() {
  const accountId = '66bd396c834c4c474fbeb425c063cf0d';
  const accessKeyId = process.env.R2_ACCESS_KEY_ID;
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
  const bucketName = process.env.R2_BUCKET_NAME || 'website-images';

  if (!accessKeyId || !secretAccessKey) {
    console.error('Error: R2 credentials missing in .env.local');
    process.exit(1);
  }

  const s3 = new S3Client({
    region: 'auto',
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });

  console.log(`Connecting to R2 endpoint and listing bucket: "${bucketName}"...`);

  try {
    const command = new ListObjectsV2Command({
      Bucket: bucketName,
    });

    const response = await s3.send(command);
    if (!response.Contents || response.Contents.length === 0) {
      console.log('No objects found in the bucket.');
      return;
    }

    console.log(`Found ${response.Contents.length} objects:`);
    const files = response.Contents.map((item) => ({
      key: item.Key,
      size: item.Size,
      lastModified: item.LastModified,
    }));

    fs.writeFileSync('scripts/r2-files.json', JSON.stringify(files, null, 2), 'utf-8');
    console.log('Saved R2 file listing to scripts/r2-files.json');
  } catch (err) {
    console.error('Failed to list R2 objects:', err);
  }
}

main();
