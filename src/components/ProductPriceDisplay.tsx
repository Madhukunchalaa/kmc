'use client';

import { useCurrency } from '@/context/CurrencyContext';

interface ProductPriceDisplayProps {
  price: number;
  originalPrice: number | null;
  usdPrice?: number;
  originalUsdPrice?: number | null;
  style?: React.CSSProperties;
}

export default function ProductPriceDisplay({
  price,
  originalPrice,
  usdPrice,
  originalUsdPrice,
  style,
}: ProductPriceDisplayProps) {
  const { formatPrice } = useCurrency();

  return (
    <span className="product-price" style={{ fontSize: '1.6rem', ...style }}>
      {originalPrice && (
        <span className="original" style={{ textDecoration: 'line-through', opacity: 0.6, marginRight: 10, fontSize: '1.2rem', color: '#999' }}>
          {formatPrice(originalPrice, originalUsdPrice)}
        </span>
      )}
      <span style={{ fontWeight: 700, color: 'var(--primary, #C8956C)' }}>
        {formatPrice(price, usdPrice)}
      </span>
    </span>
  );
}
