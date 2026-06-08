'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Currency = 'INR' | 'USD';

interface CurrencyContextValue {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (inrVal: number, usdVal?: number | null) => string;
  getRawPrice: (inrVal: number, usdVal?: number | null) => number;
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function CurrencyProvider({ children, defaultCurrency }: { children: ReactNode; defaultCurrency?: Currency }) {
  const [currency, setCurrencyState] = useState<Currency>(defaultCurrency || 'INR');

  useEffect(() => {
    const stored = localStorage.getItem('kmc_currency') as Currency;
    if (stored === 'INR' || stored === 'USD') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrencyState(stored);
    }
  }, []);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    localStorage.setItem('kmc_currency', c);
  };

  const getRawPrice = (inrVal: number, usdVal?: number | null): number => {
    if (currency === 'USD') {
      if (usdVal !== undefined && usdVal !== null && usdVal > 0) return usdVal;
      // Fallback conversion rate: 1 USD = 50 INR (reflecting the catalog's standard pricing ratio)
      return Math.round(inrVal / 50);
    }
    return inrVal;
  };

  const formatPrice = (inrVal: number, usdVal?: number | null): string => {
    const price = getRawPrice(inrVal, usdVal);
    if (currency === 'USD') {
      return `$${price}`;
    }
    return `₹${price.toLocaleString('en-IN')}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, getRawPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency(): CurrencyContextValue {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error('useCurrency must be used inside <CurrencyProvider>');
  return ctx;
}
