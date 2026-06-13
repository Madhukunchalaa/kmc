'use client';

import { useCurrency } from '@/context/CurrencyContext';

interface SimplePriceProps {
  price: number;
  usdPrice?: number | null;
}

export default function SimplePrice({ price, usdPrice }: SimplePriceProps) {
  const { formatPrice } = useCurrency();
  return <span>{formatPrice(price, usdPrice)}</span>;
}
