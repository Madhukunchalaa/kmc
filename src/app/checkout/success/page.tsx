'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function CheckoutSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('order_id'); // e.g. KMC-KMC-MQDQG9GV
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [orderNumber, setOrderNumber] = useState<string | null>(null);

  useEffect(() => {
    if (!orderId) {
      setError('Missing order identifier in URL.');
      setLoading(false);
      return;
    }

    async function verifyPayment() {
      try {
        const res = await fetch('/api/payments/cashfree/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ merchantOrderId: orderId })
        });
        const data = await res.json();
        if (res.ok && data.ok) {
          setOrderNumber(data.orderNumber);
        } else {
          setError(data.reason ?? 'Verification failed.');
        }
      } catch (err) {
        setError('A network error occurred. Please refresh the page to try verifying again.');
      } finally {
        setLoading(false);
      }
    }

    verifyPayment();
  }, [orderId]);

  if (loading) {
    return (
      <section className="section-pad text-center" style={{ paddingTop: '160px' }}>
        <div className="container">
          <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem', color: 'var(--primary,#C8956C)' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <h2 className="mt-3">Verifying your payment...</h2>
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
          <h2 className="section-title">Payment <span>Verification Issue</span></h2>
          <p className="section-subtitle mt-2">{error}</p>
          <p style={{ color: 'var(--text-light,#666)' }}>
            If you completed the payment but see this error, please contact us with your payment reference or order number so we can manually confirm your order.
          </p>
          <div className="mt-4">
            <Link href="/dashboard/orders" className="btn-primary-custom">
              View My Orders
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
        <h1 className="section-title">Payment <span>Confirmed!</span></h1>
        <p className="section-subtitle">
          Thank you! Your order <strong>{orderNumber}</strong> is confirmed.
        </p>
        <p style={{ color: 'var(--text-light,#666)' }}>
          We&apos;ve received your payment and will prepare your crystals for shipping. You&apos;ll get updates by email.
        </p>
        <div className="d-flex flex-wrap gap-2 justify-content-center mt-4">
          <Link href="/dashboard/orders" className="btn-primary-custom">
            <i className="fa-solid fa-box me-2"></i>
            <span>View My Orders</span>
          </Link>
          <Link href="/shop" className="btn-primary-custom" style={{ background: 'transparent', color: 'var(--primary,#C8956C)', border: '2px solid var(--primary,#C8956C)' }}>
            <i className="fa-solid fa-gem me-2"></i>
            <span>Keep Shopping</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={
      <section className="section-pad text-center" style={{ paddingTop: '160px' }}>
        <div className="container">
          <h2>Loading...</h2>
        </div>
      </section>
    }>
      <CheckoutSuccessContent />
    </Suspense>
  );
}
