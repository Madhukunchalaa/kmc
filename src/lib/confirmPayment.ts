import { connectMongoose } from '@/lib/mongoose';
import { Order } from '@/models/Order';
import { Booking } from '@/models/Booking';
import { getCashfreeOrderStatus, getCashfreePaymentId } from '@/lib/cashfree';
import { fulfillPaidOrder } from '@/lib/orderFulfillment';
import { fulfillPaidBooking } from '@/lib/bookingFulfillment';

/**
 * Result of a single-record "Confirm payment" action. Every outcome carries a
 * plain-language `message` suitable for showing directly to an admin.
 */
export interface ConfirmOutcome {
  ok: boolean;
  status: 'confirmed' | 'already-paid' | 'not-paid' | 'no-cf-order' | 'not-found' | 'error';
  message: string;
}

/**
 * Asks Cashfree whether a single order was actually paid and, only if Cashfree
 * confirms PAID, marks it paid and runs full fulfillment (confirmation email,
 * notification, stock decrement). Never flips a record without Cashfree confirming,
 * so it can't create phantom revenue.
 */
export async function confirmOrderPayment(id: string): Promise<ConfirmOutcome> {
  await connectMongoose();
  const order = await Order.findById(id);
  if (!order) return { ok: false, status: 'not-found', message: 'Order not found.' };
  if (order.paymentStatus === 'paid') {
    return { ok: true, status: 'already-paid', message: 'This order is already marked as paid.' };
  }
  if (!order.cfOrderId && !order.razorpayOrderId) {
    return {
      ok: false,
      status: 'no-cf-order',
      message: 'No online payment was ever started for this order, so there is nothing to confirm.',
    };
  }

  if (order.razorpayOrderId) {
    const { getRazorpayOrderStatus } = await import('./razorpay');
    let orderStatus: string;
    let razorpayPaymentId: string | undefined;
    try {
      const r = await getRazorpayOrderStatus(order.razorpayOrderId);
      orderStatus = r.orderStatus;
      razorpayPaymentId = r.razorpayPaymentId;
    } catch (err) {
      return {
        ok: false,
        status: 'error',
        message: `Could not reach Razorpay to check this payment: ${err instanceof Error ? err.message : String(err)}`,
      };
    }

    if (orderStatus !== 'paid') {
      return {
        ok: false,
        status: 'not-paid',
        message: `Razorpay shows this payment as "${orderStatus}", not paid. Nothing was changed.`,
      };
    }

    order.paymentStatus = 'paid';
    if (order.status === 'pending') order.status = 'confirmed';
    order.razorpayPaymentId = razorpayPaymentId ?? null;
    await order.save();
    await fulfillPaidOrder(order);

    return {
      ok: true,
      status: 'confirmed',
      message: 'Payment confirmed with Razorpay and marked as paid. Confirmation email sent.',
    };
  }

  const merchantRef = `KMC-${order.orderNumber}`;
  let orderStatus: string;
  let cfPaymentId: string | undefined;
  try {
    const r = await getCashfreeOrderStatus(merchantRef);
    orderStatus = r.orderStatus;
    cfPaymentId = r.cfPaymentId ?? (await getCashfreePaymentId(merchantRef));
  } catch (err) {
    return {
      ok: false,
      status: 'error',
      message: `Could not reach Cashfree to check this payment: ${err instanceof Error ? err.message : String(err)}`,
    };
  }

  if (orderStatus !== 'PAID') {
    return {
      ok: false,
      status: 'not-paid',
      message: `Cashfree shows this payment as "${orderStatus}", not paid. Nothing was changed.`,
    };
  }

  order.paymentStatus = 'paid';
  if (order.status === 'pending') order.status = 'confirmed';
  order.cfPaymentId = cfPaymentId ?? null;
  await order.save();
  await fulfillPaidOrder(order);

  return {
    ok: true,
    status: 'confirmed',
    message: 'Payment confirmed with Cashfree and marked as paid. Confirmation email sent.',
  };
}

/** Same as {@link confirmOrderPayment} but for a service booking. */
export async function confirmBookingPayment(id: string): Promise<ConfirmOutcome> {
  await connectMongoose();
  const booking = await Booking.findById(id);
  if (!booking) return { ok: false, status: 'not-found', message: 'Booking not found.' };
  if (booking.paymentStatus === 'paid') {
    return { ok: true, status: 'already-paid', message: 'This booking is already marked as paid.' };
  }
  if (!booking.cfOrderId && !booking.razorpayOrderId) {
    return {
      ok: false,
      status: 'no-cf-order',
      message: 'No online payment was ever started for this booking, so there is nothing to confirm.',
    };
  }

  if (booking.razorpayOrderId) {
    const { getRazorpayOrderStatus } = await import('./razorpay');
    let orderStatus: string;
    let razorpayPaymentId: string | undefined;
    try {
      const r = await getRazorpayOrderStatus(booking.razorpayOrderId);
      orderStatus = r.orderStatus;
      razorpayPaymentId = r.razorpayPaymentId;
    } catch (err) {
      return {
        ok: false,
        status: 'error',
        message: `Could not reach Razorpay to check this payment: ${err instanceof Error ? err.message : String(err)}`,
      };
    }

    if (orderStatus !== 'paid') {
      return {
        ok: false,
        status: 'not-paid',
        message: `Razorpay shows this payment as "${orderStatus}", not paid. Nothing was changed.`,
      };
    }

    booking.paymentStatus = 'paid';
    if (booking.status === 'pending' || booking.status === 'approved') booking.status = 'booked';
    booking.razorpayPaymentId = razorpayPaymentId;
    await booking.save();
    await fulfillPaidBooking(booking);

    return {
      ok: true,
      status: 'confirmed',
      message: 'Payment confirmed with Razorpay and marked as paid. Confirmation email sent.',
    };
  }

  const merchantRef = `KMCB-${booking.bookingNumber}`;
  let orderStatus: string;
  let cfPaymentId: string | undefined;
  try {
    const r = await getCashfreeOrderStatus(merchantRef);
    orderStatus = r.orderStatus;
    cfPaymentId = r.cfPaymentId ?? (await getCashfreePaymentId(merchantRef));
  } catch (err) {
    return {
      ok: false,
      status: 'error',
      message: `Could not reach Cashfree to check this payment: ${err instanceof Error ? err.message : String(err)}`,
    };
  }

  if (orderStatus !== 'PAID') {
    return {
      ok: false,
      status: 'not-paid',
      message: `Cashfree shows this payment as "${orderStatus}", not paid. Nothing was changed.`,
    };
  }

  booking.paymentStatus = 'paid';
  if (booking.status === 'pending' || booking.status === 'approved') booking.status = 'booked';
  booking.cfPaymentId = cfPaymentId;
  await booking.save();
  await fulfillPaidBooking(booking);

  return {
    ok: true,
    status: 'confirmed',
    message: 'Payment confirmed with Cashfree and marked as paid. Confirmation email sent.',
  };
}
