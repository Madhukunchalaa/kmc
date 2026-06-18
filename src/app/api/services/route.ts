import { NextResponse } from 'next/server';
import { getAllServices } from '@/lib/catalog';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const services = await getAllServices();
    return NextResponse.json({ ok: true, services });
  } catch (err) {
    console.error('Failed to get services', err);
    return NextResponse.json({ ok: false, services: [], reason: 'server-error' }, { status: 500 });
  }
}
