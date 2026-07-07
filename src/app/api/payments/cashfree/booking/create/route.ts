import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { connectMongoose } from '@/lib/mongoose';
import { Booking } from '@/models/Booking';
import { isCashfreeConfigured, createCashfreeOrder } from '@/lib/cashfree';
import { z } from 'zod';
import { zodErrorMessage } from '@/lib/validators';

const schema = z.object({ bookingId: z.string().min(1, 'Booking ID required') });

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
  const booking = await Booking.findOne({
    _id: parsed.data.bookingId,
    user: session.user.id,
    paymentStatus: 'unpaid',
    status: { $ne: 'cancelled' },
  });

  if (!booking) {
    return NextResponse.json({ ok: false, reason: 'booking-not-found' }, { status: 404 });
  }

  try {
    let cfOrderId = booking.cfOrderId;
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
        orderId: `KMCB-${booking.bookingNumber}`,
        amount: booking.servicePrice,
        currency: booking.currency || 'INR',
        customerId: session.user.id,
        customerName: booking.customer.name,
        customerEmail: booking.customer.email,
        customerPhone: booking.customer.phone,
        returnUrl: `${baseUrl}/booking/success?order_id={order_id}`,
        notifyUrl: `${baseUrl}/api/payments/cashfree/webhook`,
        meta: {
          kmcBookingId: String(booking._id),
          bookingNumber: booking.bookingNumber,
        },
      });
      cfOrderId = result.cfOrderId;
      paymentSessionId = result.paymentSessionId;
      booking.cfOrderId = cfOrderId;
      await booking.save();
    }

    return NextResponse.json({
      ok: true,
      cfOrderId,
      paymentSessionId,
      amount: booking.servicePrice,
      currency: booking.currency || 'INR',
      bookingNumber: booking.bookingNumber,
      mode: (process.env.CASHFREE_ENV || 'test').toLowerCase() === 'production' ? 'production' : 'sandbox',
      customer: {
        name: booking.customer.name,
        email: booking.customer.email,
        phone: booking.customer.phone,
      },
    });
  } catch (err) {
    console.error('[cashfree] booking create failed', err);
    return NextResponse.json({ ok: false, reason: 'cashfree-error' }, { status: 502 });
  }
}
