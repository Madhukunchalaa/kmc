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
