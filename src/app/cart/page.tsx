'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useCart } from '@/context/CartContext';
import { useCurrency } from '@/context/CurrencyContext';

export default function CartPage() {
  const { hydrated, updateQty, removeItem, clear, loading } = useCart();
  const { status } = useSession();
  const { formatPrice } = useCurrency();

  const inrSubtotal = hydrated.reduce((sum, it) => sum + it.product.price * it.qty, 0);
  const usdSubtotal = hydrated.reduce((sum, it) => sum + (it.product.usdPrice || 0) * it.qty, 0);

  return (
    <>
      <section style={{ paddingTop: '140px', paddingBottom: '40px', background: 'linear-gradient(135deg,#1C0A02,#2D1B0E)', color: '#fff' }}>
        <div className="container text-center">
          <p className="hero-eyebrow" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <span className="hero-eyebrow-line"></span>
            Your Selection
          </p>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            Your <span className="highlight">Crystal Cart</span>
          </h1>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          {loading ? (
            <p className="text-center section-subtitle">Loading your cart…</p>
          ) : hydrated.length === 0 ? (
            <div className="text-center py-5">
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🛍️</div>
              <h2 className="section-title">Your cart is <span>empty</span></h2>
              <p className="section-subtitle">Discover crystals that speak to your soul.</p>
              <Link href="/shop" className="btn-primary-custom mt-3">
                <i className="fa-solid fa-gem"></i>
                <span>Browse Crystals</span>
              </Link>
            </div>
          ) : (
            <div className="row g-5">
              <div className="col-lg-8">
                <div style={{ display: 'grid', gap: '1.25rem' }}>
                  {hydrated.map((it) => (
                    <div
                      key={it.productId}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '110px 1fr auto',
                        gap: '1.25rem',
                        alignItems: 'center',
                        padding: '1rem',
                        background: '#fff',
                        borderRadius: '16px',
                        boxShadow: '0 6px 20px rgba(0,0,0,0.05)',
                      }}
                    >
                      <Link href={`/shop/${it.product.slug || it.product.id}`}>
                        <img
                          src={it.product.image}
                          alt={it.product.name}
                          style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '12px' }}
                        />
                      </Link>
                      <div>
                        <span className="product-category" style={{ fontSize: '0.75rem' }}>{it.product.subcategory}</span>
                        <h4 style={{ fontFamily: 'var(--font-heading)', margin: '0.25rem 0 0.5rem' }}>
                          <Link href={`/shop/${it.product.slug || it.product.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                            {it.product.name}
                          </Link>
                        </h4>
                        <div className="d-flex align-items-center gap-3 flex-wrap">
                          <div className="d-inline-flex align-items-center" style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: '999px' }}>
                            <button
                              aria-label="Decrease"
                              onClick={() => updateQty(it.productId, it.qty - 1)}
                              style={{ background: 'transparent', border: 0, padding: '0.4rem 0.8rem', cursor: 'pointer' }}
                            >
                              <i className="fa-solid fa-minus"></i>
                            </button>
                            <span style={{ minWidth: 28, textAlign: 'center', fontWeight: 700 }}>{it.qty}</span>
                            <button
                              aria-label="Increase"
                              onClick={() => updateQty(it.productId, it.qty + 1)}
                              style={{ background: 'transparent', border: 0, padding: '0.4rem 0.8rem', cursor: 'pointer' }}
                            >
                              <i className="fa-solid fa-plus"></i>
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(it.productId)}
                            style={{ background: 'transparent', border: 0, color: '#D95F5F', cursor: 'pointer', fontSize: '0.85rem' }}
                          >
                            <i className="fa-regular fa-trash-can me-1"></i> Remove
                          </button>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right', fontWeight: 700, fontFamily: 'var(--font-heading)', fontSize: '1.1rem' }}>
                        {formatPrice(it.product.price * it.qty, (it.product.usdPrice || 0) * it.qty)}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 d-flex justify-content-between">
                  <Link href="/shop" className="btn-outline-custom">
                    <i className="fa-solid fa-arrow-left"></i>
                    <span>Continue Shopping</span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => clear()}
                    style={{ background: 'transparent', border: 0, color: '#999', cursor: 'pointer' }}
                  >
                    <i className="fa-regular fa-trash-can me-1"></i> Clear Cart
                  </button>
                </div>
              </div>

              <div className="col-lg-4">
                <div
                  style={{
                    position: 'sticky',
                    top: '120px',
                    padding: '1.75rem',
                    background: '#fff',
                    borderRadius: '20px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                  }}
                >
                  <h3 className="footer-heading" style={{ color: 'var(--text,#2D1B0E)', fontSize: '1.1rem' }}>Order Summary</h3>
                  <div className="d-flex justify-content-between mt-3">
                    <span>Subtotal</span>
                    <strong>{formatPrice(inrSubtotal, usdSubtotal)}</strong>
                  </div>
                  <div className="d-flex justify-content-between mt-2" style={{ color: 'var(--text-light,#777)', fontSize: '0.9rem' }}>
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <hr style={{ margin: '1rem 0' }} />
                  <div className="d-flex justify-content-between" style={{ fontSize: '1.1rem' }}>
                    <strong>Total</strong>
                    <strong>{formatPrice(inrSubtotal, usdSubtotal)}</strong>
                  </div>

                  <Link href={status === 'authenticated' ? '/checkout' : '/login?callbackUrl=/checkout'} className="btn-primary-custom mt-4" style={{ width: '100%', justifyContent: 'center' }}>
                    <i className="fa-solid fa-lock"></i>
                    <span>Proceed to Checkout</span>
                  </Link>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-light,#999)', marginTop: '0.75rem', textAlign: 'center' }}>
                    Secure Razorpay checkout · 100% authentic crystals
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
