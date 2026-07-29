import { NextResponse } from 'next/server';
import { connectMongoose } from '@/lib/mongoose';
import { User } from '@/models/User';
import bcrypt from 'bcryptjs';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await connectMongoose();
    
    const email = 'krishnaveni0097@gmail.com';
    const passwordHash = await bcrypt.hash('Welcome@321', 12);
    
    let user = await User.findOne({ email: email.toLowerCase().trim() });
    let created = false;
    
    if (user) {
      user.passwordHash = passwordHash;
      user.country = 'US';
      await user.save();
    } else {
      user = await User.create({
        name: 'krishnaveni0097',
        email: email.toLowerCase().trim(),
        country: 'US',
        passwordHash,
        role: 'user',
        active: true
      });
      created = true;
    }
    
    return NextResponse.json({
      ok: true,
      message: created ? 'User created successfully.' : 'User password and country updated successfully.',
      user: {
        email: user.email,
        name: user.name,
        country: user.country,
        role: user.role,
        active: user.active
      }
    });
  } catch (err: any) {
    return NextResponse.json({
      ok: false,
      error: err.message
    });
  }
}
