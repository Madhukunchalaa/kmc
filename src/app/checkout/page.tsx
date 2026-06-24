'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useCart } from '@/context/CartContext';
import { useCurrency, COUNTRY_CURRENCY_MAP } from '@/context/CurrencyContext';
import Spinner from '@/components/Spinner';
import { openCashfreeCheckout } from '@/lib/cashfreeCheckout';
import { getShippingCharge, FREE_SHIPPING_THRESHOLD } from '@/lib/shipping';

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
  const currency = (COUNTRY_CURRENCY_MAP[countryCode.toUpperCase()] || COUNTRY_CURRENCY_MAP['Other']).code;

  const inrSubtotal = hydrated.reduce((sum, it) => sum + it.product.price * it.qty, 0);
  const usdSubtotal = hydrated.reduce((sum, it) => sum + (it.product.usdPrice || 0) * it.qty, 0);

  const [form, setForm] = useState<Form>(EMPTY);

  // Shipping (India only): highest single-item rate, free at/above the threshold.
  // International (country ≠ IN) is billed separately by admin after the order.
  const destinationIsIntl = form.country ? form.country !== 'IN' : currency !== 'INR';
  const shippingInr =
    destinationIsIntl || hydrated.length === 0 || inrSubtotal >= FREE_SHIPPING_THRESHOLD
      ? 0
      : Math.max(...hydrated.map((it) => getShippingCharge(it.product)));
  const payableInr = destinationIsIntl ? inrSubtotal : inrSubtotal + shippingInr;

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
  const [paymentMethod, setPaymentMethod] = useState<'online' | 'cod'>('online');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderNumber, setOrderNumber] = useState<string | null>(null);
  const [confirmedOrder, setConfirmedOrder] = useState<any>(null);
  const [isCod, setIsCod] = useState(false);
  const [showCustomSuccessModal, setShowCustomSuccessModal] = useState(false);

  const [giftMessageState, setGiftMessageState] = useState<string>('');
  const [giftRecipientState, setGiftRecipientState] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const msg = localStorage.getItem('kmc_gift_message') || '';
      setGiftMessageState(msg);
      
      const recStr = localStorage.getItem('kmc_gift_recipient');
      if (recStr) {
        try {
          const rec = JSON.parse(recStr);
          setGiftRecipientState(rec.label || '');
        } catch {
          // ignore
        }
      }
    }
  }, []);


  // Delivery Animation States
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<'arriving' | 'collecting' | 'driving' | 'fadeout'>('arriving');

  const runDeliveryAnimation = () => {
    return new Promise<void>((resolve) => {
      setShowAnimation(true);
      setAnimationPhase('arriving');
      
      // Step 2: collecting (crystals drop)
      setTimeout(() => {
        setAnimationPhase('collecting');
        
        // Step 3: driving (truck drives off)
        setTimeout(() => {
          setAnimationPhase('driving');
          
          // Step 4: fadeout
          setTimeout(() => {
            setAnimationPhase('fadeout');
            
            // Finish
            setTimeout(() => {
              setShowAnimation(false);
              resolve();
            }, 500);
          }, 2000);
        }, 1500);
      }, 1500);
    });
  };

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
      let giftMessage = '';
      let giftRecipient = '';
      if (typeof window !== 'undefined') {
        giftMessage = localStorage.getItem('kmc_gift_message') || '';
        const recStr = localStorage.getItem('kmc_gift_recipient');
        if (recStr) {
          try {
            const rec = JSON.parse(recStr);
            giftRecipient = rec.label || '';
          } catch {
            // ignore
          }
        }
      }

      let customizationDetails = null;
      if (typeof window !== 'undefined') {
        const custStr = localStorage.getItem('kmc_custom_bracelet');
        if (custStr) {
          try {
            customizationDetails = JSON.parse(custStr);
          } catch {
            // ignore
          }
        }
      }

      const orderRes = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          items,
          customer: {
            ...form,
            giftMessage: giftMessage || undefined,
            giftRecipient: giftRecipient || undefined,
          },
          currency,
          paymentMethod,
          customizationDetails: customizationDetails || undefined,
        }),
      });
      const orderData = await orderRes.json();
      if (!orderRes.ok || !orderData.ok) {
        const msg =
          orderData.reason === 'razorpay-not-configured' || orderData.reason === 'cashfree-not-configured'
            ? 'Online payments are not configured yet. Please contact us to complete your order.'
            : orderData.reason === 'login-required'
              ? 'Please sign in to checkout.'
              : (orderData.reason ?? 'Failed to place order. Please try again.');
        setError(msg);
        setSubmitting(false);
        return;
      }

      const clearGifting = () => {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('kmc_gift_message');
          localStorage.removeItem('kmc_gift_recipient');
          localStorage.removeItem('kmc_custom_bracelet');
        }
      };

      const isCustomOrder = !!customizationDetails;

      // COD flow — skip payment, confirm immediately
      if (paymentMethod === 'cod') {
        setIsCod(true);
        setConfirmedOrder({ ...orderData, items: hydrated.map(it => ({ name: it.product.name, qty: it.qty, price: it.product.price })), subtotal: inrSubtotal, shipping: shippingInr, total: payableInr, currency });
        setOrderNumber(orderData.orderNumber);
        if (isCustomOrder) {
          setShowCustomSuccessModal(true);
        }
        await clear();
        clearGifting();
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
        mode: payData.mode,
      });

      // Payment dialog closed — clear cart then redirect to /checkout/success for animation + confirmation
      await clear();
      clearGifting();

      // The success page will re-verify and show the full confirmation with animation
      const merchantOrderId = payData.cfOrderId || `KMC-${orderData.orderNumber}`;
      router.replace(`/checkout/success?order_id=${encodeURIComponent(merchantOrderId)}`);
    } catch (err) {
      setShowAnimation(false);
      if (err instanceof Error && err.message === 'payment-cancelled') {
        setError('Payment was cancelled. Your order is saved — you can try paying again from your dashboard or contact us.');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (orderNumber && isCod) {
    return (
      <section className="section-pad" style={{ paddingTop: '160px' }}>
        <div className="container text-center" style={{ maxWidth: 720 }}>
          <div style={{ fontSize: '4.5rem', marginBottom: '1rem' }}>🚚</div>
          <h1 className="section-title">Order <span style={{ color: '#2B7A5C' }}>Placed!</span></h1>
          <p className="section-subtitle">
            Thank you, {form.name || 'friend'}! Your order <strong>{orderNumber}</strong> has been placed successfully.
          </p>
          <div style={{ background: '#f0faf5', border: '1px solid #a8d5bc', borderRadius: 16, padding: '1.5rem 2rem', marginBottom: '2rem', textAlign: 'left' }}>
            <h4 style={{ color: '#2B7A5C', marginBottom: '0.5rem' }}><i className="fa-solid fa-money-bill-wave me-2"></i>Cash on Delivery</h4>
            <p style={{ margin: 0, color: '#444', lineHeight: 1.7, fontSize: '0.93rem' }}>
              Please keep <strong>₹{payableInr.toLocaleString('en-IN')}</strong> ready at the time of delivery.
              Our team will confirm your order shortly via WhatsApp or call.
            </p>
          </div>
          <div className="d-flex flex-wrap gap-2 justify-content-center mt-3">
            <Link href="/dashboard/orders" className="btn-primary-custom">
              <i className="fa-solid fa-box"></i>
              <span>View My Orders</span>
            </Link>
            <Link href="/shop" className="btn-primary-custom" style={{ background: 'transparent', border: '2px solid var(--primary,#C8956C)', color: 'var(--primary,#C8956C)' }}>
              <i className="fa-solid fa-gem" style={{ color: 'var(--primary,#C8956C)' }}></i>
              <span style={{ color: 'var(--primary,#C8956C)' }}>Keep Shopping</span>
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
      {showAnimation && (
        <div className={`delivery-overlay ${animationPhase === 'fadeout' ? 'fade-out' : ''}`}>
          <style>{`
            .delivery-overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              background: radial-gradient(circle at center, #FCFBF9 0%, #F5EFE6 100%);
              z-index: 99999;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              color: #2D1B0E;
              transition: opacity 0.5s ease;
            }
            .delivery-overlay.fade-out {
              opacity: 0;
              pointer-events: none;
            }
            .delivery-scene {
              position: relative;
              width: 500px;
              height: 300px;
              border-radius: 24px;
              background: #fff;
              border: 1px solid #EBE4DB;
              box-shadow: 0 15px 40px rgba(45, 27, 14, 0.06), inset 0 0 30px rgba(0, 0, 0, 0.01);
              overflow: hidden;
              margin-bottom: 2rem;
            }
            .delivery-road {
              position: absolute;
              bottom: 40px;
              left: 0;
              width: 100%;
              height: 4px;
              background: #EBE4DB;
            }
            .road-dashes {
              position: absolute;
              bottom: 20px;
              left: 0;
              width: 100%;
              height: 2px;
              background: repeating-linear-gradient(90deg, transparent, transparent 15px, #C8956C 15px, #C8956C 30px);
              opacity: 0.4;
            }
            .road-dashes.moving {
              animation: roadMoving 0.4s linear infinite;
            }
            .kc-shop {
              position: absolute;
              bottom: 40px;
              right: 60px;
              width: 90px;
              height: 75px;
              background: #FCFBF9;
              border: 2px solid #C8956C;
              border-bottom: none;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: flex-end;
              border-radius: 8px 8px 0 0;
              box-shadow: 0 4px 10px rgba(0,0,0,0.02);
            }
            .shop-roof {
              position: absolute;
              top: -15px;
              width: 110px;
              height: 15px;
              background: #C8956C;
              clip-path: polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%);
              border-radius: 4px;
            }
            .kc-sign {
              font-family: var(--nf-heading, serif);
              font-weight: 800;
              font-size: 1.1rem;
              color: #C8956C;
              text-shadow: 0 1px 2px rgba(0,0,0,0.05);
              margin-bottom: 12px;
            }
            .floating-crystals {
              position: absolute;
              bottom: 125px;
              right: 75px;
              display: flex;
              gap: 8px;
            }
            .crystal-item {
              font-size: 1.8rem;
              animation: floatUpDown 1.2s ease-in-out infinite alternate;
              display: inline-block;
            }
            .crystal-1 { animation-delay: 0s; }
            .crystal-2 { animation-delay: 0.2s; }
            .crystal-3 { animation-delay: 0.4s; }
            .crystal-item.collect {
              animation: crystalCollect 1.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
            }
            .delivery-truck {
              position: absolute;
              bottom: 40px;
              left: -120px;
              width: 110px;
              height: 55px;
              display: flex;
              align-items: flex-end;
              z-index: 10;
            }
            .delivery-truck.arriving {
              animation: truckArrive 1.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
            }
            .delivery-truck.collecting {
              left: 230px;
            }
            .delivery-truck.driving {
              animation: truckDriveAway 2s cubic-bezier(0.5, 0, 0.75, 0) forwards;
            }
            .truck-cabin {
              width: 32px;
              height: 36px;
              background: #FAF6F1;
              border-radius: 4px 12px 0 0;
              position: relative;
              border: 1px solid #EBE4DB;
              border-left: none;
            }
            .truck-cabin::after {
              content: '';
              position: absolute;
              top: 6px;
              right: 6px;
              width: 14px;
              height: 12px;
              background: #2D1B0E;
              border-radius: 2px 4px 0 0;
            }
            .truck-bed {
              width: 78px;
              height: 46px;
              background: #C8956C;
              border-radius: 4px 0 0 0;
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
              border: 1px solid #B8855C;
            }
            .truck-logo {
              font-family: var(--nf-heading, serif);
              font-size: 1.05rem;
              font-weight: 800;
              color: #fff;
              border: 2px solid #fff;
              padding: 0px 4px;
              border-radius: 4px;
              letter-spacing: 1px;
            }
            .truck-wheel {
              position: absolute;
              width: 22px;
              height: 22px;
              background: #2D1B0E;
              border: 3px solid #EBE4DB;
              border-radius: 50%;
              bottom: -11px;
            }
            .wheel-front { right: 8px; }
            .wheel-back { left: 16px; }
            .truck-wheel.spinning {
              animation: spin 0.25s linear infinite;
            }
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            @keyframes floatUpDown {
              0% { transform: translateY(0); }
              100% { transform: translateY(-10px); }
            }
            @keyframes roadMoving {
              0% { background-position: 0 0; }
              100% { background-position: -30px 0; }
            }
            @keyframes truckArrive {
              0% { left: -120px; }
              100% { left: 230px; }
            }
            @keyframes truckDriveAway {
              0% { left: 230px; }
              100% { left: 520px; }
            }
            @keyframes crystalCollect {
              0% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 1; }
              20% { transform: translate(-20px, -45px) scale(1.1) rotate(15deg); opacity: 1; }
              100% { transform: translate(-100px, 45px) scale(0.3) rotate(180deg); opacity: 0; }
            }
          `}</style>
          
          <div className="delivery-scene">
            <div className="delivery-road" />
            <div className={`road-dashes ${animationPhase === 'driving' ? 'moving' : ''}`} />
            
            <div className="kc-shop">
              <div className="shop-roof" />
              <div className="kc-sign">KMC</div>
            </div>
            
            <div className="floating-crystals">
              <span className={`crystal-item crystal-1 ${animationPhase !== 'arriving' ? 'collect' : ''}`}>💎</span>
              <span className={`crystal-item crystal-2 ${animationPhase !== 'arriving' ? 'collect' : ''}`}>✨</span>
              <span className={`crystal-item crystal-3 ${animationPhase !== 'arriving' ? 'collect' : ''}`}>🔮</span>
            </div>
            
            <div className={`delivery-truck ${animationPhase}`}>
              <div className="truck-bed">
                <div className="truck-logo">KMC</div>
              </div>
              <div className="truck-cabin" />
              <div className={`truck-wheel wheel-front ${animationPhase === 'arriving' || animationPhase === 'driving' ? 'spinning' : ''}`} />
              <div className={`truck-wheel wheel-back ${animationPhase === 'arriving' || animationPhase === 'driving' ? 'spinning' : ''}`} />
            </div>
          </div>
          
          <h2 style={{ fontFamily: 'var(--nf-heading, serif)', color: '#C8956C', marginBottom: '0.5rem', textShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
            {animationPhase === 'arriving' && 'Arriving at KrissMaagiic Crystals...'}
            {animationPhase === 'collecting' && 'Collecting & Energising Crystals...'}
            {animationPhase === 'driving' && 'Dispatching your Crystals...'}
            {animationPhase === 'fadeout' && 'Order Confirmed!'}
          </h2>
          <p style={{ color: '#888', fontSize: '0.9rem' }}>Please do not close this window or press back</p>
        </div>
      )}

      {/* Permanent custom style block for checkout form inputs */}
      <style>{`
        .checkout-form-input {
          width: 100%;
          padding: 13px 18px;
          background: #FCFBF9;
          border: 1px dashed #C8956C;
          border-radius: 12px;
          color: #2D1B0E;
          font-family: var(--nf-body, sans-serif);
          font-size: 0.95rem;
          transition: all 0.3s ease;
          box-shadow: inset 0 1px 2px rgba(0,0,0,0.02);
        }
        .checkout-form-input:focus {
          outline: none;
          border: 1.5px solid #C8956C;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(200, 149, 108, 0.15), 0 4px 12px rgba(45, 27, 14, 0.05);
        }
        .checkout-form-input::placeholder {
          color: #A09084;
          opacity: 0.6;
        }
        textarea.checkout-form-input {
          resize: vertical;
          min-height: 100px;
        }
        select.checkout-form-input {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23C8956C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          background-size: 16px;
          padding-right: 40px;
          cursor: pointer;
        }
      `}</style>

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
                    <input required value={form.name} onChange={update('name')} className="checkout-form-input" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" style={{ fontSize: '0.85rem', fontWeight: 600 }}>Email *</label>
                    <input required type="email" value={form.email} onChange={update('email')} className="checkout-form-input" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" style={{ fontSize: '0.85rem', fontWeight: 600 }}>Phone *</label>
                    <input required type="tel" value={form.phone} onChange={update('phone')} className="checkout-form-input" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" style={{ fontSize: '0.85rem', fontWeight: 600 }}>Pincode *</label>
                    <input required value={form.pincode} onChange={update('pincode')} className="checkout-form-input" />
                  </div>
                  <div className="col-12">
                    <label className="form-label" style={{ fontSize: '0.85rem', fontWeight: 600 }}>Address *</label>
                    <textarea required value={form.address} onChange={update('address')} rows={3} className="checkout-form-input" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" style={{ fontSize: '0.85rem', fontWeight: 600 }}>City *</label>
                    <input required value={form.city} onChange={update('city')} className="checkout-form-input" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" style={{ fontSize: '0.85rem', fontWeight: 600 }}>State *</label>
                    <input required value={form.state} onChange={update('state')} className="checkout-form-input" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" style={{ fontSize: '0.85rem', fontWeight: 600 }}>Country *</label>
                    <input 
                      readOnly 
                      required 
                      value={form.country} 
                      className="checkout-form-input" 
                      style={{ opacity: 0.7, cursor: 'not-allowed', background: '#e9ecef' }} 
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label" style={{ fontSize: '0.85rem', fontWeight: 600 }}>Date of Birth (Optional)</label>
                    <input value={form.dob} onChange={update('dob')} className="checkout-form-input" placeholder="DD/MM/YYYY" />
                  </div>
                  <div className="col-12">
                    <label className="form-label" style={{ fontSize: '0.85rem', fontWeight: 600 }}>Order Notes (optional)</label>
                    <textarea value={form.notes} onChange={update('notes')} rows={3} className="checkout-form-input" placeholder="Any special instructions or intentions for your order…" />
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <h3 className="footer-heading" style={{ color: 'var(--text,#2D1B0E)', marginBottom: '0.75rem' }}>Payment Method</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.9rem 1.1rem', border: `1.5px solid ${paymentMethod === 'online' ? 'var(--primary,#C8956C)' : 'rgba(200,149,108,0.3)'}`, borderRadius: 12, cursor: 'pointer', background: paymentMethod === 'online' ? 'rgba(200,149,108,0.06)' : 'transparent', transition: 'all 0.2s ease' }}>
                      <input type="radio" name="paymentMethod" value="online" checked={paymentMethod === 'online'} onChange={() => setPaymentMethod('online')} style={{ accentColor: 'var(--primary,#C8956C)', width: 18, height: 18 }} />
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--text,#2D1B0E)' }}><i className="fa-solid fa-credit-card me-2" style={{ color: 'var(--primary,#C8956C)' }}></i>Pay Online</div>
                        <div style={{ fontSize: '0.78rem', color: '#888', marginTop: 2 }}>UPI, Cards, Netbanking & Wallets via Cashfree</div>
                      </div>
                    </label>
                  </div>
                </div>

                {error && (
                  <p style={{ color: '#D95F5F', fontSize: '0.9rem' }}>
                    <i className="fa-solid fa-circle-exclamation me-2"></i>
                    {error}
                  </p>
                )}

                <button type="submit" className="btn-primary-custom" disabled={submitting} style={{ justifyContent: 'center', opacity: submitting ? 0.85 : 1, cursor: submitting ? 'wait' : 'pointer' }}>
                  {submitting ? <Spinner /> : <i className={paymentMethod === 'cod' ? 'fa-solid fa-truck' : 'fa-solid fa-lock'}></i>}
                  <span>{submitting ? 'Processing…' : paymentMethod === 'cod' ? `Place Order (COD) — ${formatPrice(payableInr, 0)}` : `Pay ${formatPrice(payableInr, usdSubtotal)}`}</span>
                </button>

                {destinationIsIntl && (
                  <p style={{ fontSize: '0.82rem', color: 'var(--primary,#C8956C)', background: 'rgba(200,149,108,0.08)', border: '1px dashed rgba(200,149,108,0.4)', borderRadius: 10, padding: '10px 14px', margin: 0 }}>
                    <i className="fa-solid fa-earth-asia me-2"></i>
                    <strong>International order:</strong> Shipping is not included above. Shipping charges for your location will be calculated and sent to you separately via a secure payment link.
                  </p>
                )}

                <p style={{ fontSize: '0.8rem', color: 'var(--text-light,#777)' }}>
                  {paymentMethod === 'online'
                    ? 'Secure payment via Cashfree — UPI, cards, netbanking & wallets accepted.'
                    : 'Cash on Delivery — pay when your order arrives at your doorstep.'}
                  <br /><br />
                  <strong style={{ color: '#D95F5F' }}>Disclaimer:</strong> All products are strictly non-refundable. By proceeding, you agree to our Return Policy.
                </p>
              </form>
            </div>

            <div className="col-lg-5">
              <div style={{ position: 'sticky', top: '120px', padding: '1.75rem', background: '#fff', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
                <h3 className="footer-heading" style={{ color: 'var(--text,#2D1B0E)', fontSize: '1.1rem' }}>Your Order</h3>
                <div style={{ display: 'grid', gap: '0.85rem', marginTop: '1rem' }}>
                  {hydrated.map((it) => (
                    <div key={it.productId} className="d-flex gap-3 align-items-center">
                      <div style={{ width: 56, height: 56, borderRadius: 10, overflow: 'hidden', flexShrink: 0 }}>
                        <img
                          src={it.product.image}
                          alt={it.product.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transform: (it.product.image.includes('Rose%20quartz') || it.product.image.includes('Rose quartz'))
                              ? 'rotate(-90deg)'
                              : undefined,
                          }}
                        />
                      </div>
                      <div style={{ flex: 1, fontSize: '0.85rem' }}>
                        <div style={{ fontWeight: 600 }}>{it.product.name}</div>
                        <div style={{ color: 'var(--text-light,#777)' }}>Qty {it.qty}</div>
                      </div>
                      <div style={{ fontWeight: 700 }}>{formatPrice(it.product.price * it.qty, (it.product.usdPrice || 0) * it.qty)}</div>
                    </div>
                  ))}
                </div>
                {giftMessageState && (
                  <div style={{
                    marginTop: '1.5rem',
                    padding: '12px 14px',
                    background: 'rgba(217, 95, 122, 0.05)',
                    border: '1.5px dashed rgba(217, 95, 122, 0.35)',
                    borderRadius: '12px'
                  }}>
                    <div style={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px', color: '#D95F7A', fontSize: '0.85rem' }}>
                      <i className="fa-solid fa-gift"></i>
                      <span>Sacred Gift Order Details</span>
                    </div>
                    {giftRecipientState && (
                      <div style={{ fontSize: '0.78rem', color: '#666', marginTop: '4px' }}>
                        Recipient: <strong>{giftRecipientState}</strong>
                      </div>
                    )}
                    <div style={{
                      fontStyle: 'italic',
                      fontSize: '0.82rem',
                      color: 'var(--text, #2D1B0E)',
                      marginTop: '8px',
                      whiteSpace: 'pre-wrap',
                      borderLeft: '2px solid rgba(217, 95, 122, 0.25)',
                      paddingLeft: '8px'
                    }}>
                      "{giftMessageState}"
                    </div>
                  </div>
                )}
                <hr style={{ margin: '1rem 0' }} />
                <div className="d-flex justify-content-between"><span>Subtotal</span><strong>{formatPrice(inrSubtotal, usdSubtotal)}</strong></div>
                <div className="d-flex justify-content-between" style={{ color: '#777', fontSize: '0.9rem' }}>
                  <span>Shipping</span>
                  <span>
                    {destinationIsIntl
                      ? <span style={{ color: 'var(--primary,#C8956C)', fontWeight: 600 }}>Billed separately</span>
                      : shippingInr === 0
                        ? <span style={{ color: '#2B7A5C', fontWeight: 600 }}>Free</span>
                        : <strong>{formatPrice(shippingInr, 0)}</strong>}
                  </span>
                </div>
                {!destinationIsIntl && shippingInr > 0 && inrSubtotal < FREE_SHIPPING_THRESHOLD && (
                  <div style={{ fontSize: '0.78rem', color: '#999', marginTop: 4 }}>
                    Add {formatPrice(FREE_SHIPPING_THRESHOLD - inrSubtotal, 0)} more for free shipping.
                  </div>
                )}
                <hr style={{ margin: '1rem 0' }} />
                <div className="d-flex justify-content-between" style={{ fontSize: '1.2rem' }}>
                  <strong>Total</strong><strong>{formatPrice(payableInr, usdSubtotal)}</strong>
                </div>
                {destinationIsIntl && (
                  <p style={{ fontSize: '0.78rem', color: '#999', marginTop: 8, marginBottom: 0 }}>
                    Shipping charges for international orders are calculated and sent separately.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {showCustomSuccessModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(10px)',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            background: 'radial-gradient(circle at 50% 50%, #2D1B0E 0%, #150600 100%)',
            border: '2px solid rgba(232, 201, 154, 0.45)',
            outline: '1px solid rgba(232, 201, 154, 0.15)',
            outlineOffset: '-8px',
            borderRadius: '24px',
            maxWidth: '580px',
            width: '100%',
            padding: '2.5rem 2rem',
            textAlign: 'center',
            boxShadow: '0 24px 50px rgba(0,0,0,0.8)',
            color: '#fff',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Cosmic background effects inside modal */}
            <div style={{
              position: 'absolute',
              top: '-50px',
              left: '-50px',
              width: '150px',
              height: '150px',
              background: 'radial-gradient(circle, rgba(200, 149, 108, 0.1) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-50px',
              right: '-50px',
              width: '150px',
              height: '150px',
              background: 'radial-gradient(circle, rgba(155, 89, 182, 0.1) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />

            <div style={{ fontSize: '3.5rem', marginBottom: '1.25rem' }}>✨🔮✨</div>
            
            <h2 style={{
              fontFamily: 'var(--font-heading, Cinzel)',
              fontSize: '1.8rem',
              color: 'var(--gold-light, #FFEFA6)',
              marginBottom: '1rem',
              letterSpacing: '0.05em'
            }}>
              Your Custom Energy Bracelet is Manifesting!
            </h2>
            
            <div className="divider-ornament" style={{ color: 'var(--gold-light, #FFEFA6)', margin: '0.75rem auto 1.5rem auto' }}>
              <i className="fa-solid fa-diamond-turn-right"></i>
            </div>
            
            <p style={{
              fontSize: '0.98rem',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.85)',
              marginBottom: '1.5rem'
            }}>
              Thank you for choosing KrissMaagiic for your energy journey!
              <br /><br />
              Our founder, <strong>Kriss</strong>, will intuitively hand-select and energise your chosen crystals under the moon's guidance to align perfectly with your intentions. Every custom bracelet is crafted with love and charged with sacred prayers just for you.
            </p>

            <div style={{
              background: 'rgba(200, 149, 108, 0.08)',
              border: '1px dashed rgba(200, 149, 108, 0.35)',
              borderRadius: '12px',
              padding: '12px 16px',
              fontSize: '0.88rem',
              color: 'var(--gold-light, #FFEFA6)',
              marginBottom: '2rem',
              lineHeight: 1.5
            }}>
              <i className="fa-brands fa-whatsapp me-2" style={{ fontSize: '1rem' }}></i>
              We will contact you shortly on <strong>WhatsApp</strong> to confirm and share details of your personalized design.
            </div>

            <div className="d-flex justify-content-center gap-3">
              <button
                type="button"
                onClick={() => setShowCustomSuccessModal(false)}
                className="btn-primary-custom"
                style={{
                  padding: '12px 30px',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  boxShadow: '0 6px 20px rgba(200, 149, 108, 0.35)',
                  cursor: 'pointer'
                }}
              >
                Blessed Be
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
