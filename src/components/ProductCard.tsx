'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useCurrency } from '@/context/CurrencyContext';
import { resolveProductImage } from '@/lib/resolveProductImage';

interface ProductCardProps {
  product: Product;
}


export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const { formatPrice } = useCurrency();
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const button = e.currentTarget;
    const cardEl = button.closest('.product-card');
    const imgEl = cardEl?.querySelector('.pc-image') as HTMLImageElement;
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
      document.body.appendChild(clone);

      requestAnimationFrame(() => {
        clone.style.top = `${cartRect.top + cartRect.height / 2 - 20}px`;
        clone.style.left = `${cartRect.left + cartRect.width / 2 - 20}px`;
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
      {/* Badge */}
      {product.badge && (
        <span className={`pc-badge pc-badge--${product.badge.toLowerCase()}`}>
          {product.badge}
        </span>
      )}

      {/* Wishlist */}
      <button
        className={`pc-wish ${isInWishlist ? 'pc-wish--active' : ''}`}
        onClick={handleWishlist}
        aria-label="Wishlist"
      >
        <i className={`${isInWishlist ? 'fas' : 'far'} fa-heart`} />
      </button>

      {/* Full-bleed image */}
      <Link href={`/shop/${product.id}`} className="pc-img-link" aria-label={product.name}>
        <Image 
          className="pc-image" 
          src={resolveProductImage(product.image, product.category, product.name)} 
          alt={product.name} 
          fill 
          sizes="(max-width: 768px) 50vw, 33vw" 
        />
      </Link>

      {/* Product Name & Mobile Price (Always visible until hover, price shows on mobile) */}
      <div className="pc-visible-title">
        <h3 className="pc-visible-name">{product.name}</h3>
        <div className="pc-visible-price">
          {product.originalPrice && (
            <s className="pc-overlay-orig" style={{ marginRight: '6px' }}>
              {formatPrice(product.originalPrice, product.originalUsdPrice)}
            </s>
          )}
          <span className="pc-overlay-sale">
            {formatPrice(product.price, product.usdPrice)}
          </span>
        </div>
      </div>

      {/* Cinematic hover overlay */}
      <div className="pc-overlay">
        <div className="pc-overlay-inner">
          <span className="pc-overlay-cat">{product.subcategory}</span>
          <h3 className="pc-overlay-name">
            <Link href={`/shop/${product.id}`}>{product.name}</Link>
          </h3>
          <div className="pc-overlay-price">
            {product.originalPrice && (
              <s className="pc-overlay-orig">
                {formatPrice(product.originalPrice, product.originalUsdPrice)}
              </s>
            )}
            <span className="pc-overlay-sale">{formatPrice(product.price, product.usdPrice)}</span>
          </div>
          <div className="pc-overlay-actions">
            <button className="pc-btn-cart" onClick={handleAddToCart}>
              {addedToCart ? 'Added ✓' : 'Add to Cart'}
            </button>
            <Link href={`/shop/${product.id}`} className="pc-btn-view" aria-label="View product">
              <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
