'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function ProductBuyPanel({ productId, stock }: { productId: string; stock: number }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const outOfStock = stock === 0;
  const maxQty = Math.max(1, stock);

  const handleAdd = async () => {
    if (outOfStock) return;
    await addItem(productId, qty);
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
            <i className="fa-solid fa-bag-shopping"></i>
            <span>{added ? 'Added to Cart ✓' : 'Add to Cart'}</span>
          </button>
        </>
      )}
      <Link href="/cart" className="btn-ghost-white" style={{ color: 'var(--primary,#C8956C)', borderColor: 'var(--primary,#C8956C)' }}>
        <i className="fa-solid fa-arrow-right"></i>
        <span>Go to Cart</span>
      </Link>
    </div>
  );
}
