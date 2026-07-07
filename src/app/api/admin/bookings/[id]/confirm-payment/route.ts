import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminGuard';
import { isCashfreeConfigured } from '@/lib/cashfree';
import { confirmBookingPayment } from '@/lib/confirmPayment';

export async function POST(_req: Request, ctx: RouteContext<'/api/admin/bookings/[id]/confirm-payment'>) {
  const g = await requireAdmin();
  if (!g.ok) return g.res;

  if (!isCashfreeConfigured()) {
    return NextResponse.json({ ok: false, status: 'error', message: 'Cashfree is not configured.' }, { status: 503 });
  }

  const { id } = await ctx.params;
  try {
    const outcome = await confirmBookingPayment(id);
    return NextResponse.json(outcome);
  } catch (err) {
    console.error('[confirm-payment:booking]', err);
    return NextResponse.json({ ok: false, status: 'error', message: 'Server error.' }, { status: 500 });
  }
}
