import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminGuard';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const MAX_BYTES = 10 * 1024 * 1024; // 10 MB
const ALLOWED_MIME = ['video/mp4', 'video/webm', 'video/quicktime', 'video/x-msvideo'];
const ALLOWED_EXT  = ['mp4', 'webm', 'mov', 'avi'];

export async function POST(req: Request) {
  const g = await requireAdmin();
  if (!g.ok) return g.res;

  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ ok: false, reason: 'No file provided' }, { status: 400 });
    }

    if (file.size > MAX_BYTES) {
      return NextResponse.json({ ok: false, reason: 'Video must be under 10 MB' }, { status: 413 });
    }

    const fileExt = (file.name.split('.').pop() || '').toLowerCase();
    if (!ALLOWED_MIME.includes(file.type) || !ALLOWED_EXT.includes(fileExt)) {
      return NextResponse.json({ ok: false, reason: 'Only MP4, WebM, MOV, or AVI files are allowed' }, { status: 415 });
    }

    if (!process.env.R2_ENDPOINT || !process.env.R2_ACCESS_KEY_ID || !process.env.R2_SECRET_ACCESS_KEY || !process.env.R2_BUCKET_NAME) {
      throw new Error('Cloudflare R2 credentials are not configured');
    }

    const s3 = new S3Client({
      region: 'auto',
      endpoint: process.env.R2_ENDPOINT,
      credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
      },
    });

    const buffer = Buffer.from(await file.arrayBuffer());
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
    const key = `videos/${Date.now()}-${safeName}`;

    await s3.send(new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: key,
      Body: buffer,
      ContentType: file.type || 'video/mp4',
    }));

    const url = `${process.env.NEXT_PUBLIC_R2_URL}/${key}`;
    return NextResponse.json({ ok: true, url });
  } catch (err) {
    console.error('Video upload error:', err);
    const msg = err instanceof Error ? err.message : 'server-error';
    return NextResponse.json({ ok: false, reason: msg }, { status: 500 });
  }
}
