'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function BookingSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('order_id'); // e.g. KMCB-bookingNumber
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [bookingNumber, setBookingNumber] = useState<string | null>(null);

  useEffect(() => {
    if (!orderId) {
      setError('Missing booking identifier in URL.');
      setLoading(false);
      return;
    }

    const gateway = searchParams.get('gateway') || 'cashfree';

    async function verifyBooking() {
      try {
        const endpoint = gateway === 'razorpay' ? '/api/payments/razorpay/booking/verify' : '/api/payments/cashfree/booking/verify';
        const bodyObj = gateway === 'razorpay' ? { bookingId: orderId } : { merchantOrderId: orderId };

        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(bodyObj)
        });
        const data = await res.json();
        if (res.ok && data.ok) {
          setBookingNumber(data.bookingNumber);
        } else {
          setError(data.reason ?? 'Verification failed.');
        }
      } catch (err) {
        setError('A network error occurred. Please refresh the page to try verifying again.');
      } finally {
        setLoading(false);
      }
    }

    verifyBooking();
  }, [orderId]);

  if (loading) {
    return (
      <section className="section-pad text-center" style={{ paddingTop: '160px' }}>
        <div className="container">
          <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem', color: 'var(--primary,#C8956C)' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <h2 className="mt-3">Verifying your booking payment...</h2>
          <p className="text-muted">Please do not close this window or press back.</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section-pad text-center" style={{ paddingTop: '160px' }}>
        <div className="container" style={{ maxWidth: 640 }}>
          <div style={{ fontSize: '4rem' }}>⚠️</div>
          <h2 className="section-title">Booking <span>Verification Issue</span></h2>
          <p className="section-subtitle mt-2">{error}</p>
          <p style={{ color: 'var(--text-light,#666)' }}>
            If you completed the payment but see this error, please contact us with your booking reference so we can manually confirm your session.
          </p>
          <div className="mt-4">
            <Link href="/dashboard/orders" className="btn-primary-custom">
              View My Bookings
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-pad" style={{ paddingTop: '160px' }}>
      <div className="container text-center" style={{ maxWidth: 640 }}>
        <div style={{ fontSize: '4rem' }}>✨</div>
        <h1 className="section-title">Session <span>Booked!</span></h1>
        <p className="section-subtitle">
          Thank you! Your booking <strong>{bookingNumber}</strong> is confirmed.
        </p>

        <p style={{ color: 'var(--text-light,#666)', marginBottom: '2rem' }}>
          We&apos;ve registered your session booking. You&apos;ll receive confirmation details and session updates by email.
        </p>
        <div className="d-flex flex-wrap gap-2 justify-content-center mt-4">
          <Link href="/dashboard/orders" className="btn-primary-custom">
            <i className="fa-solid fa-calendar-check me-2"></i>
            <span>View My Bookings</span>
          </Link>
          <Link href="/" className="btn-primary-custom" style={{ background: 'transparent', color: 'var(--primary,#C8956C)', border: '2px solid var(--primary,#C8956C)' }}>
            <i className="fa-solid fa-house me-2"></i>
            <span>Go to Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function BookingSuccessPage() {
  return (
    <Suspense fallback={
      <section className="section-pad text-center" style={{ paddingTop: '160px' }}>
        <div className="container">
          <h2>Loading...</h2>
        </div>
      </section>
    }>
      <BookingSuccessContent />
    </Suspense>
  );
}
