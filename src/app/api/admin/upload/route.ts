import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminGuard';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export async function POST(req: Request) {
  // 1. Guard check
  const g = await requireAdmin();
  if (!g.ok) return g.res;

  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    if (!file) {
      return NextResponse.json({ ok: false, reason: 'No file uploaded' }, { status: 400 });
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save path: public/images/uploads
    const uploadDir = join(process.cwd(), 'public', 'images', 'uploads');
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    // Standardize filename
    const ext = file.name.split('.').pop() || 'png';
    // Remove non-alphanumeric chars from original filename (except extension)
    const originalBase = file.name.substring(0, file.name.lastIndexOf('.')).replace(/[^a-zA-Z0-9_-]/g, '_');
    const filename = `${Date.now()}-${originalBase}.${ext}`;
    const filePath = join(uploadDir, filename);

    await writeFile(filePath, buffer);

    const fileUrl = `/images/uploads/${filename}`;
    return NextResponse.json({ ok: true, url: fileUrl });
  } catch (err) {
    console.error('Upload error:', err);
    const msg = err instanceof Error ? err.message : 'server-error';
    return NextResponse.json({ ok: false, reason: msg }, { status: 500 });
  }
}
