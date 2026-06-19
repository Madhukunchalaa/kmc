'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function ProductBuyPanel({ productId, stock, variant }: { productId: string; stock: number; variant?: string }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const outOfStock = stock === 0;
  const maxQty = Math.max(1, stock);

  // If a variant is selected, encode it into the cart key so different sizes are tracked separately
  const cartKey = variant ? `${productId}::${variant}` : productId;

  const handleAdd = async () => {
    if (outOfStock) return;
    await addItem(cartKey, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);

    // Fly to cart animation
    const imgEl = document.querySelector('.product-image-gallery img') as HTMLImageElement;
    const cartEl = document.querySelector('.navbar-cart');

    if (imgEl && cartEl) {
      const imgRect = imgEl.getBoundingClientRect();
      const cartRect = cartEl.getBoundingClientRect();

      const clone = document.createElement('img');
      clone.src = imgEl.src;
      clone.style.position = 'fixed';
      clone.style.top = `${imgRect.top}px`;
      clone.style.left = `${imgRect.left}px`;
      clone.style.width = `${imgRect.width}px`;
      clone.style.height = `${imgRect.height}px`;
      clone.style.zIndex = '9999';
      clone.style.transition = 'all 1.4s cubic-bezier(0.25, 1, 0.35, 1)';
      clone.style.pointerEvents = 'none';
      clone.style.boxShadow = '0 10px 30px rgba(200, 149, 108, 0.6)';
      clone.style.borderRadius = '20px';
      document.body.appendChild(clone);

      requestAnimationFrame(() => {
        clone.style.top = `${cartRect.top + cartRect.height / 2 - 15}px`;
        clone.style.left = `${cartRect.left + cartRect.width / 2 - 15}px`;
        clone.style.width = '30px';
        clone.style.height = '30px';
        clone.style.opacity = '0.1';
        clone.style.transform = 'rotate(720deg) scale(0.1)';
      });

      setTimeout(() => {
        clone.remove();
        cartEl.classList.add('cart-pulse');
        setTimeout(() => cartEl.classList.remove('cart-pulse'), 500);
      }, 1400);
    }
  };

  return (
    <div className="mt-4 d-flex flex-wrap align-items-center gap-3">
      {outOfStock ? (
        <span
          style={{
            display: 'inline-block',
            padding: '0.55rem 1.4rem',
            borderRadius: 999,
            background: 'rgba(0,0,0,0.07)',
            color: '#888',
            fontWeight: 700,
            fontSize: '0.95rem',
          }}
        >
          <i className="fa-solid fa-ban me-2"></i>Out of Stock
        </span>
      ) : (
        <>
          <div className="d-inline-flex align-items-center" style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: '999px', overflow: 'hidden' }}>
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              style={{ background: 'transparent', border: 0, padding: '0.6rem 1rem', cursor: 'pointer' }}
            >
              <i className="fa-solid fa-minus"></i>
            </button>
            <span style={{ minWidth: 36, textAlign: 'center', fontWeight: 700 }}>{qty}</span>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => setQty((q) => Math.min(maxQty, q + 1))}
              style={{ background: 'transparent', border: 0, padding: '0.6rem 1rem', cursor: 'pointer' }}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          <button
            type="button"
            className="btn-primary-custom"
            onClick={handleAdd}
            style={{ background: added ? '#4CAF50' : undefined }}
          >
            <span>{added ? 'Added to Cart ✓' : 'Add to Cart'}</span>
          </button>
        </>
      )}
      <Link href="/cart" className="btn-outline-custom">
        <span>Go to Cart</span>
      </Link>
    </div>
  );
}
