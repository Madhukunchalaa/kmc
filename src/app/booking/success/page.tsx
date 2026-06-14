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

    async function verifyBooking() {
      try {
        const res = await fetch('/api/payments/cashfree/booking/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ merchantOrderId: orderId })
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

        {/* Beautiful Simulated Test Booking Notice */}
        <div className="test-success-card">
          <h4 className="test-success-card-title">
            🔮 Healing Portal & Sandbox Phase 🔮
          </h4>
          <p className="test-success-card-text">
            KrissMaagiic is undergoing its final spiritual digital alignment. This session booking was completed in <strong>Testing Mode</strong> (no real money was charged).
            <br /><br />
            To coordinate, schedule, and finalize your actual healing session, please connect with Kriss directly on WhatsApp:
          </p>
          <a 
            href="https://wa.me/918096223929?text=Hi%20Kriss,%20I%20just%20placed%20a%20test%20booking%20and%20would%20like%20to%20confirm%20my%20slot."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-cta-button"
          >
            <i className="fa-brands fa-whatsapp"></i>
            <span>Confirm Healing Slot via WhatsApp (+91 80962 23929)</span>
          </a>
        </div>

        <p style={{ color: 'var(--text-light,#666)' }}>
          We&apos;ve logged your test session booking. You&apos;ll receive confirmation details and session updates by email.
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
