import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { connectMongoose } from '@/lib/mongoose';
import { User } from '@/models/User';
import { profileUpdateSchema, zodErrorMessage } from '@/lib/validators';

export async function PUT(req: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ ok: false, reason: 'unauthorized' }, { status: 401 });
  let body: unknown;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 }); }
  const parsed = profileUpdateSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: false, reason: zodErrorMessage(parsed.error) }, { status: 400 });
  await connectMongoose();
  await User.findByIdAndUpdate(session.user.id, { 
    name: parsed.data.name, 
    phone: parsed.data.phone || '',
    country: parsed.data.country,
  });
  return NextResponse.json({ ok: true });
}
