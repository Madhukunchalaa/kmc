'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useCart } from '@/context/CartContext';
import Spinner from '@/components/Spinner';

interface Form {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  notes: string;
}

const EMPTY: Form = { name: '', email: '', phone: '', address: '', city: '', state: '', pincode: '', notes: '' };

export default function CheckoutPage() {
  const router = useRouter();
  const { status, data: session } = useSession();
  const { hydrated, items, subtotal, clear, loading } = useCart();
  const [form, setForm] = useState<Form>(EMPTY);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/login?callbackUrl=/checkout');
    }
  }, [status, router]);

  useEffect(() => {
    if (session?.user) {
      setForm((f) => ({
        ...f,
        name: f.name || session.user.name || '',
        email: f.email || session.user.email || '',
      }));
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
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ items, customer: form }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.reason ?? 'Failed to place order. Please try again.');
        setSubmitting(false);
        return;
      }
      setOrderNumber(data.orderNumber);
      await clear();
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (orderNumber) {
    return (
      <section className="section-pad" style={{ paddingTop: '160px' }}>
        <div className="container text-center" style={{ maxWidth: 640 }}>
          <div style={{ fontSize: '4rem' }}>✨</div>
          <h1 className="section-title">Order <span>Placed!</span></h1>
          <p className="section-subtitle">
            Thank you, {form.name || 'friend'}. Your order <strong>{orderNumber}</strong> has been received.
          </p>
          <p style={{ color: 'var(--text-light,#666)' }}>
            We&apos;ll reach out on WhatsApp/email shortly to confirm and arrange payment & shipping.
          </p>
          <Link href="/shop" className="btn-primary-custom mt-3">
            <i className="fa-solid fa-gem"></i>
            <span>Keep Shopping</span>
          </Link>
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
                  <span>{submitting ? 'Placing order…' : `Place Order · ₹${subtotal.toLocaleString('en-IN')}`}</span>
                </button>

                <p style={{ fontSize: '0.8rem', color: 'var(--text-light,#777)' }}>
                  Payment instructions (UPI/bank transfer) will be shared on confirmation. No card payment is taken on this site.
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
                      <div style={{ fontWeight: 700 }}>₹{it.lineTotal.toLocaleString('en-IN')}</div>
                    </div>
                  ))}
                </div>
                <hr style={{ margin: '1rem 0' }} />
                <div className="d-flex justify-content-between"><span>Subtotal</span><strong>₹{subtotal.toLocaleString('en-IN')}</strong></div>
                <div className="d-flex justify-content-between mt-2" style={{ color: 'var(--text-light,#777)', fontSize: '0.9rem' }}>
                  <span>Shipping</span><span>Calculated after confirmation</span>
                </div>
                <hr style={{ margin: '1rem 0' }} />
                <div className="d-flex justify-content-between" style={{ fontSize: '1.1rem' }}>
                  <strong>Total</strong><strong>₹{subtotal.toLocaleString('en-IN')}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
