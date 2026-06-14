'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useCart } from '@/context/CartContext';
import { useCurrency, COUNTRY_CURRENCY_MAP } from '@/context/CurrencyContext';
import Spinner from '@/components/Spinner';
import { openCashfreeCheckout } from '@/lib/cashfreeCheckout';

interface Form {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  dob: string;
  notes: string;
}

const EMPTY: Form = { name: '', email: '', phone: '', address: '', city: '', state: '', pincode: '', country: '', dob: '', notes: '' };

export default function CheckoutPage() {
  const router = useRouter();
  const { status, data: session } = useSession();
  const { hydrated, items, clear, loading } = useCart();

  const { formatPrice, countryCode } = useCurrency();
  const currency = countryCode === 'IN' ? 'INR' : 'USD';

  const inrSubtotal = hydrated.reduce((sum, it) => sum + it.product.price * it.qty, 0);
  const usdSubtotal = hydrated.reduce((sum, it) => sum + (it.product.usdPrice || 0) * it.qty, 0);

  const [form, setForm] = useState<Form>(EMPTY);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/login?callbackUrl=/checkout');
    }
  }, [status, router]);

  useEffect(() => {
    if (session?.user) {
      Promise.resolve().then(() => {
        setForm((f) => ({
          ...f,
          name: f.name || session.user.name || '',
          email: f.email || session.user.email || '',
          country: f.country || session.user.country || countryCode || '',
        }));
      });
    }
  }, [session]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderNumber, setOrderNumber] = useState<string | null>(null);

  const update = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    setSubmitting(true);
    setError(null);

    // Enforce border validation for Indian pricing
    if (countryCode === 'IN' && form.country !== 'IN') {
      setError('Your profile is set to India (INR pricing), so your shipping address must be in India. To ship internationally, please update your country in your Profile first.');
      setSubmitting(false);
      return;
    }

    try {
      const orderRes = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ items, customer: form, currency }),
      });
      const orderData = await orderRes.json();
      if (!orderRes.ok || !orderData.ok) {
        const msg =
          orderData.reason === 'razorpay-not-configured'
            ? 'Online payments are not configured yet. Please contact us to complete your order.'
            : orderData.reason === 'login-required'
              ? 'Please sign in to checkout.'
              : (orderData.reason ?? 'Failed to place order. Please try again.');
        setError(msg);
        setSubmitting(false);
        return;
      }

      const payRes = await fetch('/api/payments/cashfree/create', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ orderId: orderData.orderId }),
      });
      const payData = await payRes.json();
      if (!payRes.ok || !payData.ok) {
        setError(payData.reason ?? 'Could not start payment. Please try again.');
        setSubmitting(false);
        return;
      }

      await openCashfreeCheckout({
        paymentSessionId: payData.paymentSessionId,
        orderId: payData.orderId,
      });

      const verifyRes = await fetch('/api/payments/cashfree/verify', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          orderId: orderData.orderId,
          cfOrderId: payData.cfOrderId,
        }),
      });
      const verifyData = await verifyRes.json();
      if (!verifyRes.ok || !verifyData.ok) {
        setError(verifyData.reason ?? 'Payment verification failed. Contact us with your order number.');
        setSubmitting(false);
        return;
      }

      setOrderNumber(verifyData.orderNumber);
      await clear();
    } catch (err) {
      if (err instanceof Error && err.message === 'payment-cancelled') {
        setError('Payment was cancelled. Your order is saved — you can try paying again from your dashboard or contact us.');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (orderNumber) {
    return (
      <section className="section-pad" style={{ paddingTop: '160px' }}>
        <div className="container text-center" style={{ maxWidth: 640 }}>
          <div style={{ fontSize: '4rem' }}>✨</div>
          <h1 className="section-title">Payment <span>Confirmed!</span></h1>
          <p className="section-subtitle">
            Thank you, {form.name || 'friend'}. Your order <strong>{orderNumber}</strong> is confirmed.
          </p>
          <p style={{ color: 'var(--text-light,#666)' }}>
            We&apos;ve received your payment and will prepare your crystals for shipping. You&apos;ll get updates by email.
          </p>
          <div className="d-flex flex-wrap gap-2 justify-content-center mt-3">
            <Link href="/dashboard/orders" className="btn-primary-custom">
              <i className="fa-solid fa-box"></i>
              <span>View My Orders</span>
            </Link>
            <Link href="/shop" className="btn-primary-custom" style={{ background: 'transparent', color: 'var(--primary,#C8956C)', border: '2px solid var(--primary,#C8956C)' }}>
              <i className="fa-solid fa-gem"></i>
              <span>Keep Shopping</span>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (!loading && hydrated.length === 0) {
    return (
      <section className="section-pad text-center" style={{ paddingTop: '160px' }}>
        <div className="container">
          <h2 className="section-title">Your cart is <span>empty</span></h2>
          <Link href="/shop" className="btn-primary-custom mt-3">
            <i className="fa-solid fa-gem"></i>
            <span>Browse Crystals</span>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section style={{ paddingTop: '140px', paddingBottom: '40px', background: 'linear-gradient(135deg,#1C0A02,#2D1B0E)', color: '#fff' }}>
        <div className="container text-center">
          <p className="hero-eyebrow" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <span className="hero-eyebrow-line"></span>
            Almost Yours
          </p>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            Secure <span className="highlight">Checkout</span>
          </h1>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <form onSubmit={onSubmit} style={{ display: 'grid', gap: '1rem' }}>
                <h3 className="footer-heading" style={{ color: 'var(--text,#2D1B0E)' }}>Shipping Details</h3>

                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label" style={{ fontSize: '0.85rem', fontWeight: 600 }}>Full Name *</label>
                    <input required value={form.name} onChange={update('name')} className="newsletter-input" style={{ width: '100%' }} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" style={{ fontSize: '0.85rem', fontWeight: 600 }}>Email *</label>
                    <input required type="email" value={form.email} onChange={update('email')} className="newsletter-input" style={{ width: '100%' }} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" style={{ fontSize: '0.85rem', fontWeight: 600 }}>Phone *</label>
                    <input required type="tel" value={form.phone} onChange={update('phone')} className="newsletter-input" style={{ width: '100%' }} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" style={{ fontSize: '0.85rem', fontWeight: 600 }}>Pincode *</label>
                    <input required value={form.pincode} onChange={update('pincode')} className="newsletter-input" style={{ width: '100%' }} />
                  </div>
                  <div className="col-12">
                    <label className="form-label" style={{ fontSize: '0.85rem', fontWeight: 600 }}>Address *</label>
                    <textarea required value={form.address} onChange={update('address')} rows={3} className="newsletter-input" style={{ width: '100%' }} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" style={{ fontSize: '0.85rem', fontWeight: 600 }}>City *</label>
                    <input required value={form.city} onChange={update('city')} className="newsletter-input" style={{ width: '100%' }} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" style={{ fontSize: '0.85rem', fontWeight: 600 }}>State *</label>
                    <input required value={form.state} onChange={update('state')} className="newsletter-input" style={{ width: '100%' }} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" style={{ fontSize: '0.85rem', fontWeight: 600 }}>Country *</label>
                    <select required value={form.country} onChange={(e) => setForm((f) => ({ ...f, country: e.target.value }))} className="newsletter-input" style={{ width: '100%' }}>
                      <option value="" disabled style={{ color: '#000' }}>Select country</option>
                      {Object.keys(COUNTRY_CURRENCY_MAP).filter(k => k !== 'Other').map(k => (
                        <option key={k} value={k} style={{ color: '#000' }}>{k === 'IN' ? 'India (IN)' : k === 'US' ? 'United States (US)' : k === 'UK' ? 'United Kingdom (UK)' : k === 'AU' ? 'Australia (AU)' : k === 'CA' ? 'Canada (CA)' : k === 'AE' ? 'UAE (AE)' : k === 'SG' ? 'Singapore (SG)' : k === 'MY' ? 'Malaysia (MY)' : k}</option>
                      ))}
                      <option value="OT" style={{ color: '#000' }}>Other Country</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label" style={{ fontSize: '0.85rem', fontWeight: 600 }}>Date of Birth (Optional)</label>
                    <input value={form.dob} onChange={update('dob')} className="newsletter-input" style={{ width: '100%' }} placeholder="DD/MM/YYYY" />
                  </div>
                  <div className="col-12">
                    <label className="form-label" style={{ fontSize: '0.85rem', fontWeight: 600 }}>Order Notes (optional)</label>
                    <textarea value={form.notes} onChange={update('notes')} rows={3} className="newsletter-input" style={{ width: '100%' }} placeholder="Any special instructions or intentions for your order…" />
                  </div>
                </div>

                {error && (
                  <p style={{ color: '#D95F5F', fontSize: '0.9rem' }}>
                    <i className="fa-solid fa-circle-exclamation me-2"></i>
                    {error}
                  </p>
                )}

                <button type="submit" className="btn-primary-custom" disabled={submitting} style={{ justifyContent: 'center', opacity: submitting ? 0.85 : 1, cursor: submitting ? 'wait' : 'pointer' }}>
                  {submitting ? <Spinner /> : <i className="fa-solid fa-lock"></i>}
                  <span>{submitting ? 'Processing…' : `Pay ${formatPrice(inrSubtotal, usdSubtotal)}`}</span>
                </button>

                <p style={{ fontSize: '0.8rem', color: 'var(--text-light,#777)' }}>
                  Secure payment via Cashfree — UPI, cards, netbanking &amp; wallets accepted.
                  <br /><br />
                  <strong style={{ color: '#D95F5F' }}>Disclaimer:</strong> All products are strictly non-refundable. By proceeding with this payment, you agree to our Return Policy.
                </p>
              </form>
            </div>

            <div className="col-lg-5">
              <div style={{ position: 'sticky', top: '120px', padding: '1.75rem', background: '#fff', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
                <h3 className="footer-heading" style={{ color: 'var(--text,#2D1B0E)', fontSize: '1.1rem' }}>Your Order</h3>
                <div style={{ display: 'grid', gap: '0.85rem', marginTop: '1rem' }}>
                  {hydrated.map((it) => (
                    <div key={it.productId} className="d-flex gap-3 align-items-center">
                      <img src={it.product.image} alt={it.product.name} style={{ width: 56, height: 56, borderRadius: 10, objectFit: 'cover' }} />
                      <div style={{ flex: 1, fontSize: '0.85rem' }}>
                        <div style={{ fontWeight: 600 }}>{it.product.name}</div>
                        <div style={{ color: 'var(--text-light,#777)' }}>Qty {it.qty}</div>
                      </div>
                      <div style={{ fontWeight: 700 }}>{formatPrice(it.product.price * it.qty, (it.product.usdPrice || 0) * it.qty)}</div>
                    </div>
                  ))}
                </div>
                <hr style={{ margin: '1rem 0' }} />
                <div className="d-flex justify-content-between"><span>Subtotal</span><strong>{formatPrice(inrSubtotal, usdSubtotal)}</strong></div>
                <div className="d-flex justify-content-between" style={{ color: '#777', fontSize: '0.9rem' }}>
                  <span>Shipping</span><span>Free</span>
                </div>
                <hr style={{ margin: '1rem 0' }} />
                <div className="d-flex justify-content-between" style={{ fontSize: '1.2rem' }}>
                  <strong>Total</strong><strong>{formatPrice(inrSubtotal, usdSubtotal)}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
