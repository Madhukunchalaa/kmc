import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminGuard';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export async function POST(req: Request) {
  // 1. Guard check
  const g = await requireAdmin();
  if (!g.ok) return g.res;

  try {
    const { filename, contentType } = await req.json();

    if (!filename || !contentType) {
      return NextResponse.json({ ok: false, reason: 'Filename and contentType are required' }, { status: 400 });
    }

    // Ensure R2 credentials are set
    if (!process.env.R2_ENDPOINT || !process.env.R2_ACCESS_KEY_ID || !process.env.R2_SECRET_ACCESS_KEY || !process.env.R2_BUCKET_NAME) {
      throw new Error('Cloudflare R2 credentials are not configured in environment variables');
    }

    // Initialize S3 Client for Cloudflare R2
    const s3Client = new S3Client({
      region: 'auto',
      endpoint: process.env.R2_ENDPOINT,
      credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
      },
    });

    // Standardize filename
    const ext = filename.split('.').pop() || 'png';
    const originalBase = filename.substring(0, filename.lastIndexOf('.')).replace(/[^a-zA-Z0-9_-]/g, '_');
    const safeFilename = `uploads/${Date.now()}-${originalBase}.${ext}`;

    // Create command
    const command = new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: safeFilename,
      ContentType: contentType,
    });

    // Generate presigned URL (valid for 5 minutes)
    const uploadUrl = await getSignedUrl(s3Client, command, { expiresIn: 300 });

    // Return the presigned URL and the final public URL
    const fileUrl = `${process.env.NEXT_PUBLIC_R2_URL}/${safeFilename}`;
    return NextResponse.json({ ok: true, uploadUrl, url: fileUrl });
  } catch (err) {
    console.error('Presigned URL generation error:', err);
    const msg = err instanceof Error ? err.message : 'server-error';
    return NextResponse.json({ ok: false, reason: msg }, { status: 500 });
  }
}
