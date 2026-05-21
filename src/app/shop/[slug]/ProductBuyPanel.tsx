'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function ProductBuyPanel({ productId }: { productId: string }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = async () => {
    await addItem(productId, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="mt-4 d-flex flex-wrap align-items-center gap-3">
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
          onClick={() => setQty((q) => Math.min(99, q + 1))}
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
      <Link href="/cart" className="btn-ghost-white" style={{ color: 'var(--primary,#C8956C)', borderColor: 'var(--primary,#C8956C)' }}>
        <i className="fa-solid fa-arrow-right"></i>
        <span>Go to Cart</span>
      </Link>
    </div>
  );
}
