import { NextResponse } from 'next/server';
import { connectMongoose } from '@/lib/mongoose';
import Review from '@/models/Review';
import { z } from 'zod';
import { zodErrorMessage } from '@/lib/validators';

export const dynamic = 'force-dynamic';

const reviewInputSchema = z.object({
  productSlug: z.string().min(1, 'Product identifier is required'),
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().email('Please enter a valid email address'),
  rating: z.number().int().min(1, 'Rating must be at least 1 star').max(5, 'Rating cannot exceed 5 stars'),
  comment: z.string().min(5, 'Review must be at least 5 characters').max(1000, 'Review is too long'),
});

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get('slug');

    if (!slug) {
      return NextResponse.json({ ok: false, reason: 'missing-slug' }, { status: 400 });
    }

    await connectMongoose();
    const reviews = await Review.find({ productSlug: slug, approved: true })
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({ ok: true, reviews });
  } catch (err) {
    console.error('Failed to get reviews', err);
    return NextResponse.json({ ok: false, reviews: [], reason: 'server-error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 });
    }

    const parsed = reviewInputSchema.safeParse(body);
    if (!parsed.success) {
      const errorMsg = zodErrorMessage(parsed.error);
      return NextResponse.json({ ok: false, reason: errorMsg }, { status: 400 });
    }

    await connectMongoose();
    const { productSlug, name, email, rating, comment } = parsed.data;

    const review = await Review.create({
      productSlug: productSlug.trim().toLowerCase(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      rating,
      comment: comment.trim(),
      approved: true, // auto-approve reviews
    });

    return NextResponse.json({ ok: true, review });
  } catch (err) {
    console.error('Failed to create review', err);
    return NextResponse.json({ ok: false, reason: 'server-error' }, { status: 500 });
  }
}
