'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useCurrency } from '@/context/CurrencyContext';

function CheckoutSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('order_id'); // e.g. KMC-KMC-MQDQG9GV
  const { formatPrice } = useCurrency();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [orderNumber, setOrderNumber] = useState<string | null>(null);
  const [confirmedOrder, setConfirmedOrder] = useState<any>(null);

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

  useEffect(() => {
    if (!orderId) {
      setError('Missing order identifier in URL.');
      setLoading(false);
      return;
    }

    async function verifyPayment() {
      // Start the delivery animation
      const animPromise = runDeliveryAnimation();

      try {
        const res = await fetch('/api/payments/cashfree/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ merchantOrderId: orderId })
        });
        const data = await res.json();
        if (res.ok && data.ok) {
          setConfirmedOrder(data);
          
          // Wait for the animation to complete
          await animPromise;

          setOrderNumber(data.orderNumber);
        } else {
          setShowAnimation(false);
          setError(data.reason ?? 'Verification failed.');
        }
      } catch (err) {
        setShowAnimation(false);
        setError('A network error occurred. Please refresh the page to try verifying again.');
      } finally {
        setLoading(false);
      }
    }

    verifyPayment();
  }, [orderId]);

  if (loading || showAnimation) {
    return (
      <div className={`delivery-overlay ${animationPhase === 'fadeout' ? 'fade-out' : ''}`}>
        <style>{`
          .delivery-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: radial-gradient(circle at center, #1C0A02 0%, #07030A 100%);
            z-index: 99999;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #fff;
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
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.06);
            box-shadow: inset 0 0 40px rgba(0,0,0,0.6);
            overflow: hidden;
            margin-bottom: 2rem;
          }
          .delivery-road {
            position: absolute;
            bottom: 40px;
            left: 0;
            width: 100%;
            height: 4px;
            background: #fff;
            opacity: 0.1;
          }
          .road-dashes {
            position: absolute;
            bottom: 20px;
            left: 0;
            width: 100%;
            height: 2px;
            background: repeating-linear-gradient(90deg, transparent, transparent 15px, #E8C99A 15px, #E8C99A 30px);
            opacity: 0.25;
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
            background: rgba(200, 149, 108, 0.08);
            border: 2px solid #C8956C;
            border-bottom: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            border-radius: 6px 6px 0 0;
          }
          .shop-roof {
            position: absolute;
            top: -15px;
            width: 110px;
            height: 15px;
            background: #C8956C;
            clip-path: polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%);
            border-radius: 3px;
          }
          .kc-sign {
            font-family: var(--nf-heading, serif);
            font-weight: 800;
            font-size: 1.1rem;
            color: #E8C99A;
            text-shadow: 0 0 8px rgba(232, 201, 154, 0.6);
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
            border: 1px solid rgba(0,0,0,0.15);
            border-left: none;
          }
          .truck-cabin::after {
            content: '';
            position: absolute;
            top: 6px;
            right: 6px;
            width: 14px;
            height: 12px;
            background: #07030A;
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
            border: 1px solid rgba(0,0,0,0.15);
          }
          .truck-logo {
            font-family: var(--nf-heading, serif);
            font-size: 1.1rem;
            font-weight: 800;
            color: #fff;
            border: 2px solid #fff;
            padding: 0px 4px;
            border-radius: 4px;
            letter-spacing: 1px;
            text-shadow: 0 0 4px rgba(0,0,0,0.2);
          }
          .truck-wheel {
            position: absolute;
            width: 22px;
            height: 22px;
            background: #07030A;
            border: 3px solid #E8C99A;
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
            <div className="kc-sign">KC</div>
          </div>
          
          <div className="floating-crystals">
            <span className={`crystal-item crystal-1 ${animationPhase !== 'arriving' ? 'collect' : ''}`}>💎</span>
            <span className={`crystal-item crystal-2 ${animationPhase !== 'arriving' ? 'collect' : ''}`}>✨</span>
            <span className={`crystal-item crystal-3 ${animationPhase !== 'arriving' ? 'collect' : ''}`}>🔮</span>
          </div>
          
          <div className={`delivery-truck ${animationPhase}`}>
            <div className="truck-bed">
              <div className="truck-logo">KC</div>
            </div>
            <div className="truck-cabin" />
            <div className={`truck-wheel wheel-front ${animationPhase === 'arriving' || animationPhase === 'driving' ? 'spinning' : ''}`} />
            <div className={`truck-wheel wheel-back ${animationPhase === 'arriving' || animationPhase === 'driving' ? 'spinning' : ''}`} />
          </div>
        </div>
        
        <h2 style={{ fontFamily: 'var(--nf-heading, serif)', color: '#E8C99A', marginBottom: '0.5rem', textShadow: '0 0 10px rgba(232, 201, 154, 0.2)' }}>
          {animationPhase === 'arriving' && 'Arriving at KrissMaagiic Crystals...'}
          {animationPhase === 'collecting' && 'Collecting & Energising Crystals...'}
          {animationPhase === 'driving' && 'Dispatching your Crystals...'}
          {animationPhase === 'fadeout' && 'Order Confirmed!'}
        </h2>
        <p style={{ color: '#888', fontSize: '0.9rem' }}>Please do not close this window or press back</p>
      </div>
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
      <div className="container text-center" style={{ maxWidth: 720 }}>
        <div style={{ fontSize: '4.5rem', marginBottom: '1rem' }}>✨</div>
        <h1 className="section-title">Payment <span>Confirmed!</span></h1>
        <p className="section-subtitle">
          Thank you! Your order <strong>{orderNumber}</strong> is confirmed.
        </p>
        <p style={{ color: 'var(--text-light,#666)', marginBottom: '2.5rem' }}>
          We&apos;ve received your payment and will prepare your crystals for shipping. You&apos;ll get updates by email.
        </p>

        {/* Confirmed Products Summary */}
        {confirmedOrder?.items && (
          <div style={{
            background: '#fff',
            border: '1px solid rgba(200, 149, 108, 0.15)',
            borderRadius: '24px',
            padding: '2.5rem',
            textAlign: 'left',
            marginBottom: '2.5rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.04)'
          }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '1.5rem', color: '#2D1B0E', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.75rem' }}>
              Order Summary
            </h3>
            <div style={{ display: 'grid', gap: '1.25rem' }}>
              {confirmedOrder.items.map((it: any, index: number) => (
                <div key={index} className="d-flex justify-content-between align-items-center" style={{ fontSize: '0.95rem' }}>
                  <div>
                    <strong style={{ color: '#2D1B0E' }}>{it.name}</strong>
                    <div style={{ color: '#666', fontSize: '0.85rem', marginTop: '2px' }}>Qty: {it.qty} × {formatPrice(it.price, 0)}</div>
                  </div>
                  <strong style={{ color: '#2D1B0E' }}>
                    {formatPrice(it.price * it.qty, 0)}
                  </strong>
                </div>
              ))}
              
              <hr style={{ margin: '1rem 0', borderColor: 'rgba(0,0,0,0.08)' }} />
              
              <div className="d-flex justify-content-between" style={{ fontSize: '0.9rem', color: '#666' }}>
                <span>Subtotal</span>
                <span>{formatPrice(confirmedOrder.subtotal, 0)}</span>
              </div>
              <div className="d-flex justify-content-between" style={{ fontSize: '0.9rem', color: '#666', marginTop: '-0.5rem' }}>
                <span>Shipping</span>
                <span style={{ color: 'var(--primary,#C8956C)', fontWeight: 600 }}>Free</span>
              </div>
              <div className="d-flex justify-content-between" style={{ fontSize: '1.15rem', fontWeight: 700, color: '#2D1B0E', marginTop: '0.5rem' }}>
                <span>Total Paid</span>
                <span>{formatPrice(confirmedOrder.subtotal, 0)}</span>
              </div>
            </div>
          </div>
        )}

        <div className="d-flex flex-wrap gap-2 justify-content-center mt-3">
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
