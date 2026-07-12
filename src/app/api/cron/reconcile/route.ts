import { NextResponse } from 'next/server';
import { reconcilePendingPayments } from '@/lib/reconcilePayments';

// Always run fresh; never cache. Allow up to 60s for the Cashfree round-trips.
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

/**
 * Scheduled reconciliation endpoint. Protect it with a shared secret so only the
 * scheduler (Railway cron / external pinger) can trigger it.
 *
 * Call with:  Authorization: Bearer <CRON_SECRET>
 */
function isAuthorized(req: Request): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false; // fail closed if the secret isn't configured
  return req.headers.get('authorization') === `Bearer ${secret}`;
}

export async function GET(req: Request) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ ok: false, reason: 'unauthorized' }, { status: 401 });
  }

  try {
    const summary = await reconcilePendingPayments();
    console.log('[reconcile] summary', JSON.stringify(summary));
    return NextResponse.json({ ok: true, ...summary });
  } catch (err) {
    console.error('[reconcile] failed', err);
    return NextResponse.json({ ok: false, reason: 'error' }, { status: 500 });
  }
}
