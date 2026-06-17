import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { connectMongoose } from '@/lib/mongoose';
import { Order } from '@/models/Order';
import { fulfillPaidOrder } from '@/lib/orderFulfillment';
import { isCashfreeConfigured, getCashfreeOrderStatus, getCashfreePaymentId } from '@/lib/cashfree';
import { z } from 'zod';
import { zodErrorMessage } from '@/lib/validators';

const schema = z.object({
  orderId: z.string().optional(),
  cfOrderId: z.string().optional(),
  merchantOrderId: z.string().optional(),
});

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

  const { orderId, cfOrderId, merchantOrderId } = parsed.data;

  await connectMongoose();
  let order = null;

  if (orderId) {
    order = await Order.findOne({
      _id: orderId,
      user: session.user.id,
    });
  }

  if (!order && merchantOrderId) {
    let orderNumber = merchantOrderId;
    if (orderNumber.startsWith('KMC-')) {
      orderNumber = orderNumber.substring(4);
    }
    if (orderNumber.startsWith('KMC-')) {
      orderNumber = orderNumber.substring(4);
    }
    order = await Order.findOne({
      orderNumber: `KMC-${orderNumber}`,
      user: session.user.id,
    });
  }

  if (!order && cfOrderId) {
    let orderNumber = cfOrderId;
    if (orderNumber.startsWith('KMC-')) {
      orderNumber = orderNumber.substring(4);
    }
    if (orderNumber.startsWith('KMC-')) {
      orderNumber = orderNumber.substring(4);
    }
    order = await Order.findOne({
      $or: [
        { cfOrderId: cfOrderId },
        { orderNumber: `KMC-${orderNumber}` },
      ],
      user: session.user.id,
    });
  }

  if (!order) {
    return NextResponse.json({ ok: false, reason: 'order-not-found' }, { status: 404 });
  }

  // Construct the correct merchant order ID reference sent to Cashfree
  const merchantOrderRef = `KMC-${order.orderNumber}`;

  // Verify payment status with Cashfree using correct reference
  let orderStatus: string;
  let cfPaymentId: string | undefined;
  try {
    const result = await getCashfreeOrderStatus(merchantOrderRef);
    orderStatus = result.orderStatus;
    cfPaymentId = result.cfPaymentId ?? await getCashfreePaymentId(merchantOrderRef);
  } catch (err) {
    console.error('[cashfree] status check failed', err);
    const errMsg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ ok: false, reason: `cashfree-status-error: ${errMsg}` }, { status: 502 });
  }

  if (orderStatus !== 'PAID') {
    return NextResponse.json(
      { ok: false, reason: `payment-not-confirmed (status: ${orderStatus})` },
      { status: 400 },
    );
  }

  if (order.paymentStatus === 'paid') {
    return NextResponse.json({
      ok: true,
      orderNumber: order.orderNumber,
      orderId: String(order._id),
      alreadyPaid: true,
      items: order.items,
      subtotal: order.subtotal,
      shipping: order.shipping ?? 0,
      total: order.total && order.total > 0 ? order.total : order.subtotal,
      international: order.international ?? false,
      currency: order.currency || 'INR',
    });
  }

  order.paymentStatus = 'paid';
  order.status = 'confirmed';
  order.cfPaymentId = cfPaymentId ?? null;
  // Make sure to preserve Cashfree numeric ID in order record if not set
  if (!order.cfOrderId && cfOrderId) {
    order.cfOrderId = cfOrderId;
  }
  await order.save();

  await fulfillPaidOrder(order);

  return NextResponse.json({
    ok: true,
    orderNumber: order.orderNumber,
    orderId: String(order._id),
    items: order.items,
    subtotal: order.subtotal,
    shipping: order.shipping ?? 0,
    total: order.total && order.total > 0 ? order.total : order.subtotal,
    international: order.international ?? false,
    currency: order.currency || 'INR',
  });
}
