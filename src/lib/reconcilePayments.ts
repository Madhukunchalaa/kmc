import { connectMongoose } from '@/lib/mongoose';
import { Order } from '@/models/Order';
import { Booking } from '@/models/Booking';
import { confirmOrderPayment, confirmBookingPayment } from '@/lib/confirmPayment';

/**
 * Sweeps recently-created orders/bookings that are still `unpaid` but have a
 * Cashfree order attached, asks Cashfree whether each was actually paid, and
 * marks the truly-paid ones as paid (with full fulfillment) via the same safe
 * `confirmOrderPayment`/`confirmBookingPayment` logic used by the admin button.
 *
 * This is the safety net for the case where BOTH the Cashfree webhook and the
 * customer's confirmation-page verify fail — e.g. the customer paid and closed
 * the tab before the animation finished. It never flips a record unless Cashfree
 * confirms PAID, so it cannot create phantom revenue, and it is idempotent
 * (already-paid records are skipped).
 */

export interface ReconcileBucket {
  checked: number;
  newlyPaid: number;
  stillPending: number;
}

export interface ReconcileSummary {
  orders: ReconcileBucket;
  bookings: ReconcileBucket;
  errors: string[];
}

// Only look at records created within this window. Older unpaid records are
// treated as genuinely abandoned carts and skipped, so we don't hammer Cashfree.
const DEFAULT_LOOKBACK_MS = 48 * 60 * 60 * 1000; // 48 hours

// Hard cap per run so a backlog can't cause one invocation to run for minutes
// or exhaust Cashfree rate limits. Remaining records get picked up next run.
const MAX_PER_RUN = 60;

export async function reconcilePendingPayments(
  lookbackMs: number = DEFAULT_LOOKBACK_MS,
): Promise<ReconcileSummary> {
  await connectMongoose();
  const since = new Date(Date.now() - lookbackMs);

  const summary: ReconcileSummary = {
    orders: { checked: 0, newlyPaid: 0, stillPending: 0 },
    bookings: { checked: 0, newlyPaid: 0, stillPending: 0 },
    errors: [],
  };

  // --- Orders ---
  const pendingOrders = await Order.find({
    paymentStatus: 'unpaid',
    cfOrderId: { $nin: [null, ''] },
    status: { $ne: 'cancelled' },
    createdAt: { $gte: since },
  })
    .sort({ createdAt: -1 })
    .limit(MAX_PER_RUN)
    .select('_id')
    .lean();

  for (const o of pendingOrders) {
    summary.orders.checked++;
    try {
      const outcome = await confirmOrderPayment(String(o._id));
      if (outcome.ok && outcome.status === 'confirmed') summary.orders.newlyPaid++;
      else summary.orders.stillPending++;
    } catch (err) {
      summary.orders.stillPending++;
      summary.errors.push(`order ${o._id}: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  // --- Bookings ---
  const pendingBookings = await Booking.find({
    paymentStatus: 'unpaid',
    cfOrderId: { $nin: [null, ''] },
    status: { $nin: ['cancelled', 'rejected'] },
    createdAt: { $gte: since },
  })
    .sort({ createdAt: -1 })
    .limit(MAX_PER_RUN)
    .select('_id')
    .lean();

  for (const b of pendingBookings) {
    summary.bookings.checked++;
    try {
      const outcome = await confirmBookingPayment(String(b._id));
      if (outcome.ok && outcome.status === 'confirmed') summary.bookings.newlyPaid++;
      else summary.bookings.stillPending++;
    } catch (err) {
      summary.bookings.stillPending++;
      summary.errors.push(`booking ${b._id}: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  return summary;
}
