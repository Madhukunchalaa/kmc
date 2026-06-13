import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { connectMongoose } from '@/lib/mongoose';
import { User } from '@/models/User';
import { registerSchema, zodErrorMessage } from '@/lib/validators';
import { sendEmail, welcomeEmail } from '@/lib/email';

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 });
  }

  const parsed = registerSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, reason: zodErrorMessage(parsed.error) },
      { status: 400 },
    );
  }

  const { name, email, phone, password, country } = parsed.data;
  const normEmail = email.toLowerCase().trim();

  try {
    await connectMongoose();
    const existing = await User.findOne({ email: normEmail });
    if (existing) {
      return NextResponse.json(
        { ok: false, reason: 'email-already-registered' },
        { status: 409 },
      );
    }
    const passwordHash = await bcrypt.hash(password, 12);
    const user = await User.create({
      name,
      email: normEmail,
      phone: phone || '',
      passwordHash,
      role: 'user',
      country,
    });

    sendEmail({ ...welcomeEmail(user.name), to: user.email }).catch(() => {});

    return NextResponse.json({ ok: true, userId: String(user._id) });
  } catch (err) {
    console.error('register failed', err);
    return NextResponse.json({ ok: false, reason: 'server-error' }, { status: 500 });
  }
}
