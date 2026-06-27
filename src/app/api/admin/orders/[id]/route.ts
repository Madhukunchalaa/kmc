import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminGuard';
import { connectMongoose } from '@/lib/mongoose';
import { Order } from '@/models/Order';
import { Notification } from '@/models/Notification';
import { orderStatusUpdateSchema, zodErrorMessage } from '@/lib/validators';
import { sendEmail, orderStatusEmail } from '@/lib/email';

export async function PATCH(req: Request, ctx: RouteContext<'/api/admin/orders/[id]'>) {
  const g = await requireAdmin();
  if (!g.ok) return g.res;
  const { id } = await ctx.params;
  let body: unknown;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 }); }
  const parsed = orderStatusUpdateSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: false, reason: zodErrorMessage(parsed.error) }, { status: 400 });

  try {
    await connectMongoose();
    const doc = await Order.findByIdAndUpdate(
      id,
      { status: parsed.data.status, adminNote: parsed.data.adminNote || '' },
      { new: true },
    );
    if (!doc) return NextResponse.json({ ok: false, reason: 'not-found' }, { status: 404 });

    if (doc.user) {
      Notification.create({
        user: doc.user,
        type: 'order',
        title: `Order ${doc.orderNumber} ${parsed.data.status}`,
        message: `Your order status was updated to ${parsed.data.status}.`,
        link: `/dashboard/orders/${doc._id}`,
      }).catch(() => {});
    }

    const emailStatuses = ['confirmed', 'shipped', 'delivered', 'cancelled'];
    if (emailStatuses.includes(parsed.data.status) && doc.customer?.email) {
      await sendEmail({
        ...orderStatusEmail(doc.customer.name, doc.orderNumber, parsed.data.status, parsed.data.adminNote),
        to: doc.customer.email,
      }).catch((err) => {
        console.error('[admin-order-status-email-error]', err);
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, reason: 'server-error' }, { status: 500 });
  }
}
