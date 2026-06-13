import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import { connectMongoose } from '@/lib/mongoose';
import { User } from '@/models/User';
import { createAdminToken, ADMIN_COOKIE } from '@/lib/adminSession';

export async function POST(req: Request) {
  let body: { email?: string; password?: string };
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 }); }

  const email = body.email?.trim().toLowerCase();
  const password = body.password;
  if (!email || !password) return NextResponse.json({ ok: false, reason: 'missing-fields' }, { status: 400 });

  await connectMongoose();
  const user = await User.findOne({ email, active: true, role: 'admin' }).lean();
  if (!user || !user.passwordHash) return NextResponse.json({ ok: false, reason: 'invalid' }, { status: 401 });

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return NextResponse.json({ ok: false, reason: 'invalid' }, { status: 401 });

  const token = await createAdminToken(String(user._id), user.email);
  const jar = await cookies();
  jar.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24,
  });

  return NextResponse.json({ ok: true });
}
