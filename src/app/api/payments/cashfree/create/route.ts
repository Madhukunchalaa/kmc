import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { connectMongoose } from '@/lib/mongoose';
import { Order } from '@/models/Order';
import { isCashfreeConfigured, createCashfreeOrder } from '@/lib/cashfree';
import { z } from 'zod';
import { zodErrorMessage } from '@/lib/validators';

const schema = z.object({ orderId: z.string().min(1, 'Order ID is required') });

export async function POST(req: Request) {
  if (!isCashfreeConfigured()) {
    return NextResponse.json({ ok: false, reason: 'cashfree-not-configured' }, { status: 503 });
  }

  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ ok: false, reason: 'unauthorized' }, { status: 401 });
  }

  let body: unknown;
  try { body = await req.json(); }
  catch { return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 }); }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, reason: zodErrorMessage(parsed.error) }, { status: 400 });
  }

  await connectMongoose();
  const order = await Order.findOne({
    _id: parsed.data.orderId,
    user: session.user.id,
    paymentStatus: 'unpaid',
    status: { $ne: 'cancelled' },
  });

  if (!order) {
    return NextResponse.json({ ok: false, reason: 'order-not-found' }, { status: 404 });
  }

  try {
    // Cashfree India only accepts INR — international orders are temporarily
    // blocked at checkout, so this path only runs for INR orders.
    const inrAmount = order.total && order.total > 0 ? order.total : order.subtotal;

    // Reuse existing Cashfree order if already created
    let cfOrderId = order.cfOrderId;
    let paymentSessionId: string | undefined;

    if (!cfOrderId) {
      let baseUrl = process.env.NEXTAUTH_URL ?? 'https://krissmaagiic.com';
      try {
        const requestUrl = new URL(req.url);
        const host = req.headers.get('x-forwarded-host') || req.headers.get('host') || requestUrl.host;
        if (host && !host.includes('localhost') && !host.includes('127.0.0.1')) {
          baseUrl = `https://${host}`;
        }
      } catch (e) {
        // fallback to NEXTAUTH_URL
      }

      const result = await createCashfreeOrder({
        orderId: `KMC-${order.orderNumber}`,
        amount: inrAmount,
        currency: 'INR',
        customerId: session.user.id,
        customerName: order.customer.name,
        customerEmail: order.customer.email,
        customerPhone: order.customer.phone,
        returnUrl: `${baseUrl}/checkout/success?order_id=KMC-${order.orderNumber}`,
        meta: {
          kmcOrderId: String(order._id),
          orderNumber: order.orderNumber,
        },
      });
      cfOrderId = result.cfOrderId;
      paymentSessionId = result.paymentSessionId;
      order.cfOrderId = cfOrderId;
      await order.save();
    }

    return NextResponse.json({
      ok: true,
      cfOrderId,
      paymentSessionId,
      amount: inrAmount,
      currency: 'INR',
      orderNumber: order.orderNumber,
      orderId: String(order._id),
      mode: (process.env.CASHFREE_ENV || 'test').toLowerCase() === 'production' ? 'production' : 'sandbox',
      customer: {
        name: order.customer.name,
        email: order.customer.email,
        phone: order.customer.phone,
      },
    });
  } catch (err) {
    console.error('[cashfree] order create failed', err);
    return NextResponse.json({ ok: false, reason: 'cashfree-error' }, { status: 502 });
  }
}
