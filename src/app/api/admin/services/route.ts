import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminGuard';
import { connectMongoose } from '@/lib/mongoose';
import { Service } from '@/models/Service';
import { serviceInputSchema, zodErrorMessage } from '@/lib/validators';

export async function GET() {
  const g = await requireAdmin();
  if (!g.ok) return g.res;
  await connectMongoose();
  const items = await Service.find().sort({ createdAt: 1 }).lean();
  return NextResponse.json({ ok: true, items });
}

export async function POST(req: Request) {
  const g = await requireAdmin();
  if (!g.ok) return g.res;
  let body: unknown;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 }); }
  const parsed = serviceInputSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: false, reason: zodErrorMessage(parsed.error) }, { status: 400 });
  try {
    await connectMongoose();
    const exists = await Service.findOne({ slug: parsed.data.slug });
    if (exists) return NextResponse.json({ ok: false, reason: 'slug-exists' }, { status: 409 });
    const doc = await Service.create(parsed.data);
    return NextResponse.json({ ok: true, id: String(doc._id) });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, reason: 'server-error' }, { status: 500 });
  }
}
