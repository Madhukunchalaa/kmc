import { NextResponse } from 'next/server';
import { connectMongoose } from '@/lib/mongoose';
import { User } from '@/models/User';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await connectMongoose();
    
    // Search for any email containing 'kri', 'veni', or '0097'
    const query = {
      $or: [
        { email: { $regex: /kri/i } },
        { email: { $regex: /veni/i } },
        { email: { $regex: /0097/i } }
      ]
    };
    
    const users = await User.find(query);
    const results = [];
    
    for (const u of users) {
      const oldCountry = u.country;
      u.country = 'US';
      await u.save();
      results.push({
        email: u.email,
        oldCountry,
        newCountry: u.country
      });
    }
    
    return NextResponse.json({
      ok: true,
      message: `Found and updated ${users.length} user(s).`,
      results,
      dbPrefix: process.env.MONGODB_URI ? process.env.MONGODB_URI.split('@')[0] : 'not-found'
    });
  } catch (err: any) {
    return NextResponse.json({
      ok: false,
      error: err.message
    });
  }
}
