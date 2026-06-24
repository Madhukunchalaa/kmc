import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminGuard';
import { connectMongoose } from '@/lib/mongoose';
import { Order } from '@/models/Order';
import { fulfillPaidOrder } from '@/lib/orderFulfillment';

export async function POST(req: Request, ctx: RouteContext<'/api/admin/orders/[id]/mark-paid'>) {
  const g = await requireAdmin();
  if (!g.ok) return g.res;
  const { id } = await ctx.params;

  try {
    await connectMongoose();
    const order = await Order.findById(id);
    if (!order) return NextResponse.json({ ok: false, reason: 'not-found' }, { status: 404 });
    if (order.paymentStatus === 'paid') {
      return NextResponse.json({ ok: false, reason: 'already-paid' }, { status: 400 });
    }

    order.paymentStatus = 'paid';
    if (order.status === 'pending') order.status = 'confirmed';
    await order.save();

    await fulfillPaidOrder(order).catch((err) => {
      console.error('[mark-paid] fulfillPaidOrder error', err);
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[mark-paid]', err);
    return NextResponse.json({ ok: false, reason: 'server-error' }, { status: 500 });
  }
}
