import { NextResponse } from 'next/server';
import { connectMongoose } from '@/lib/mongoose';
import { User } from '@/models/User';
import { sendEmail, otpEmail } from '@/lib/email';

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString(); // 6 digit OTP
}

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ ok: false, reason: 'Invalid email' }, { status: 400 });
    }

    await connectMongoose();

    const normalizedEmail = email.trim().toLowerCase();
    
    // Find or create user
    let user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      // Create a skeleton user
      user = await User.create({
        name: normalizedEmail.split('@')[0],
        email: normalizedEmail,
        active: true,
      });
    } else if (!user.active) {
      return NextResponse.json({ ok: false, reason: 'Account suspended' }, { status: 403 });
    }

    const otp = generateOTP();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 mins

    user.otp = otp;
    user.otpExpires = otpExpires;
    await user.save();

    // Send email
    const msg = otpEmail(user.name, otp);
    msg.to = user.email;
    const sentRes = await sendEmail(msg);

    if (!sentRes.sent) {
      return NextResponse.json({ ok: false, reason: 'Failed to send OTP email' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Send OTP error:', err);
    return NextResponse.json({ ok: false, reason: 'Internal Server Error' }, { status: 500 });
  }
}
