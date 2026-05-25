'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
  stock?: number;
}

export default function ProductCard({ product, stock }: ProductCardProps) {
  const { addItem } = useCart();
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const outOfStock = typeof stock === 'number' && stock === 0;

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (outOfStock) return;
    await addItem(product.id, 1);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1800);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsInWishlist(!isInWishlist);
  };

  return (
    <div className="product-card">
      <div className="product-img-wrapper">
        {outOfStock ? (
          <span className="product-badge" style={{ background: '#888' }}>Out of Stock</span>
        ) : product.badge ? (
          <span className={`product-badge ${product.badge.toLowerCase()}`}>
            {product.badge}
          </span>
        ) : null}
        <Link href={`/shop/${product.id}`} aria-label={product.name}>
          <img src={product.image} alt={product.name} />
        </Link>
        <div className="product-actions">
          <button
            className="product-action-btn"
            onClick={handleWishlist}
            aria-label="Add to Wishlist"
            style={{ color: isInWishlist ? '#D95F5F' : undefined }}
          >
            <i className={`${isInWishlist ? 'fas' : 'far'} fa-heart`}></i>
          </button>
          <Link
            href={`/shop/${product.id}`}
            className="product-action-btn"
            aria-label="Quick View"
          >
            <i className="far fa-eye"></i>
          </Link>
        </div>
      </div>
      <div className="product-body">
        <span className="product-category">{product.subcategory}</span>
        <h3 className="product-name">
          <Link href={`/shop/${product.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
            {product.name}
          </Link>
        </h3>
        <p className="product-desc">{product.desc}</p>
        <div className="product-footer">
          <span className="product-price">
            {product.originalPrice && (
              <span className="original">
                <span className="currency">₹</span>
                {product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
            <span className="currency">₹</span>
            {product.price.toLocaleString('en-IN')}
          </span>
          <button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            disabled={outOfStock}
            style={{
              backgroundColor: outOfStock ? '#ccc' : addedToCart ? '#4CAF50' : undefined,
              color: outOfStock ? '#888' : addedToCart ? '#fff' : undefined,
              cursor: outOfStock ? 'not-allowed' : undefined,
            }}
          >
            {outOfStock ? 'Out of Stock' : addedToCart ? 'Added! ✓' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}
