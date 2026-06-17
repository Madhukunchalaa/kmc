import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminGuard';
import { connectMongoose } from '@/lib/mongoose';
import { Order } from '@/models/Order';
import { Notification } from '@/models/Notification';
import { sendEmail, shippingPaymentLinkEmail, shippingPaymentConfirmedEmail } from '@/lib/email';
import { z } from 'zod';
import { zodErrorMessage } from '@/lib/validators';

const schema = z.object({
  action: z.enum(['send-link', 'save-link', 'mark-paid', 'mark-unpaid', 'mark-international', 'mark-domestic']),
  link: z.string().url('Enter a valid payment link URL').optional().or(z.literal('')),
  amount: z.number().min(0).nullable().optional(),
  note: z.string().max(500).optional(),
});

export async function POST(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const g = await requireAdmin();
  if (!g.ok) return g.res;
  const { id } = await ctx.params;

  let body: unknown;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 }); }
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: false, reason: zodErrorMessage(parsed.error) }, { status: 400 });

  const { action, link, amount, note } = parsed.data;

  try {
    await connectMongoose();
    const order = await Order.findById(id);
    if (!order) return NextResponse.json({ ok: false, reason: 'not-found' }, { status: 404 });

    const sp = order.shippingPayment || ({} as NonNullable<typeof order.shippingPayment>);
    const update: Record<string, unknown> = {};
    let emailIt = false;
    let sendPaidEmail = false;

    if (action === 'send-link') {
      if (!link) return NextResponse.json({ ok: false, reason: 'link-required' }, { status: 400 });
      update['shippingPayment.status'] = 'link-sent';
      update['shippingPayment.link'] = link;
      update['shippingPayment.amount'] = amount ?? sp.amount ?? null;
      update['shippingPayment.note'] = note ?? sp.note ?? '';
      update['shippingPayment.sentAt'] = new Date();
      update['international'] = true;
      emailIt = true;
    } else if (action === 'save-link') {
      if (!link) return NextResponse.json({ ok: false, reason: 'link-required' }, { status: 400 });
      update['shippingPayment.link'] = link;
      update['shippingPayment.amount'] = amount ?? sp.amount ?? null;
      update['shippingPayment.note'] = note ?? sp.note ?? '';
      update['international'] = true;
      // Keep status as-is (pending stays pending; link-sent stays link-sent)
    } else if (action === 'mark-paid') {
      update['shippingPayment.status'] = 'paid';
      update['shippingPayment.paidAt'] = new Date();
      sendPaidEmail = true;
    } else if (action === 'mark-international') {
      // Flag an order as abroad delivery so the shipping-payment workflow applies.
      update['international'] = true;
      if (sp.status === 'not-required' || !sp.status) update['shippingPayment.status'] = 'pending';
    } else if (action === 'mark-domestic') {
      update['international'] = false;
      update['shippingPayment.status'] = 'not-required';
    } else {
      // mark-unpaid — revert to whatever stage makes sense
      update['shippingPayment.status'] = sp.link ? 'link-sent' : 'pending';
      update['shippingPayment.paidAt'] = null;
    }

    await Order.updateOne({ _id: id }, { $set: update });

    // Email the customer the payment link
    if (emailIt && link && order.customer?.email) {
      await sendEmail({
        ...shippingPaymentLinkEmail(order.customer.name, order.orderNumber, link, amount ?? sp.amount ?? null, order.currency || 'INR', note),
        to: order.customer.email,
      }).catch((err) => console.error('[shipping-payment-email-error]', err));
    }

    // Email the customer when shipping payment is confirmed
    if (sendPaidEmail && order.customer?.email) {
      await sendEmail({
        ...shippingPaymentConfirmedEmail(order.customer.name, order.orderNumber, sp.amount ?? null, order.currency || 'INR'),
        to: order.customer.email,
      }).catch((err) => console.error('[shipping-paid-email-error]', err));
    }

    // Notify the customer in their dashboard (skip save-link — no customer-facing change)
    if (order.user && action !== 'save-link') {
      const title = action === 'mark-paid'
        ? `Shipping payment received · ${order.orderNumber}`
        : action === 'send-link'
          ? `Shipping payment link · ${order.orderNumber}`
          : `Shipping payment updated · ${order.orderNumber}`;
      const message = action === 'mark-paid'
        ? 'We received your shipping payment — your order will be dispatched shortly.'
        : action === 'send-link'
          ? 'A shipping payment link has been sent to your email. Please complete it to dispatch your order.'
          : 'Your shipping payment status was updated.';
      Notification.create({
        user: order.user,
        type: 'order',
        title,
        message,
        link: `/dashboard/orders/${order._id}`,
      }).catch(() => {});
    }

    return NextResponse.json({ ok: true, status: update['shippingPayment.status'] ?? sp.status ?? 'pending' });
  } catch (err) {
    console.error('[shipping-payment]', err);
    return NextResponse.json({ ok: false, reason: 'server-error' }, { status: 500 });
  }
}
