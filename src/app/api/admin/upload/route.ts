import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminGuard';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

export async function POST(req: Request) {
  // 1. Guard check
  const g = await requireAdmin();
  if (!g.ok) return g.res;

  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ ok: false, reason: 'File is required' }, { status: 400 });
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

    const buffer = Buffer.from(await file.arrayBuffer());

    // Standardize filename
    const ext = file.name.split('.').pop() || 'png';
    const originalBase = file.name.substring(0, file.name.lastIndexOf('.')).replace(/[^a-zA-Z0-9_-]/g, '_');
    const safeFilename = `uploads/${Date.now()}-${originalBase}.${ext}`;

    // Create command
    const command = new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: safeFilename,
      Body: buffer,
      ContentType: file.type || 'application/octet-stream',
    });

    // Upload the file directly from server to bypass CORS issues on the client
    await s3Client.send(command);

    // Return the final public URL
    const fileUrl = `${process.env.NEXT_PUBLIC_R2_URL}/${safeFilename}`;
    return NextResponse.json({ ok: true, url: fileUrl });
  } catch (err) {
    console.error('File upload error:', err);
    const msg = err instanceof Error ? err.message : 'server-error';
    return NextResponse.json({ ok: false, reason: msg }, { status: 500 });
  }
}
