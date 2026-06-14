import { NextResponse } from 'next/server';
import { getAllProducts } from '@/lib/catalog';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const products = await getAllProducts();
    return NextResponse.json({ products });
  } catch (err) {
    console.error('Failed to get products', err);
    return NextResponse.json({ products: [] }, { status: 500 });
  }
}
