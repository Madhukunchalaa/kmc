'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useSession } from 'next-auth/react';

export const COUNTRY_CURRENCY_MAP: Record<string, { code: string; symbol: string }> = {
  IN: { code: 'INR', symbol: '₹' },
  US: { code: 'USD', symbol: '$' },
  UK: { code: 'GBP', symbol: '£' },
  GB: { code: 'GBP', symbol: '£' },
  AU: { code: 'AUD', symbol: 'A$' },
  CA: { code: 'CAD', symbol: 'C$' },
  AE: { code: 'AED', symbol: 'د.إ' },
  SG: { code: 'SGD', symbol: 'S$' },
  MY: { code: 'MYR', symbol: 'RM' },
  Other: { code: 'USD', symbol: '$' },
};

interface CurrencyContextValue {
  countryCode: string;
  setCountryCode: (c: string) => void;
  formatPrice: (inrVal: number, usdVal?: number | null) => string;
  getRawPrice: (inrVal: number, usdVal?: number | null) => number;
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function CurrencyProvider({ children, defaultCountry = 'IN' }: { children: ReactNode; defaultCountry?: string }) {
  const [countryCode, setCountryState] = useState<string>(defaultCountry);
  const { data: session } = useSession();

  useEffect(() => {
    console.log('[CurrencyProvider useEffect] session country:', session?.user?.country);
    // If logged in, prioritize user's saved country
    if (session?.user?.country) {
      const country = session.user.country;
      console.log('[CurrencyProvider] Using logged-in user country:', country);
      setTimeout(() => setCountryState(country), 0);
      return;
    }
    // Otherwise fallback to local storage
    const stored = localStorage.getItem('kmc_country');
    console.log('[CurrencyProvider] localStorage kmc_country:', stored);
    if (stored) {
      console.log('[CurrencyProvider] Using cached country from localStorage:', stored);
      setTimeout(() => setCountryState(stored), 0);
      return;
    }

    // Auto-detect country via API if not logged in and no stored country
    if (typeof fetch !== 'undefined') {
      console.log('[CurrencyProvider] Auto-detecting country from API...');
      fetch('/api/detect-country')
        .then((res) => res.json())
        .then((data) => {
          console.log('[CurrencyProvider] API detect-country response:', data);
          if (data.ok && data.country) {
            const country = data.country;
            console.log('[CurrencyProvider] Successfully auto-detected country:', country);
            setTimeout(() => {
              setCountryState(country);
            }, 0);
          }
        })
        .catch((err) => console.error('[CurrencyProvider] Failed to auto-detect country:', err));
    }
  }, [session?.user?.country]);

  const setCountryCode = (c: string) => {
    setCountryState(c);
    if (!session?.user) {
      localStorage.setItem('kmc_country', c);
    }
  };

  const getRawPrice = (inrVal: number, usdVal?: number | null): number => {
    const code = countryCode.toUpperCase();
    if (code === 'IN') return inrVal;
    
    // For non-IN countries, use USD value
    if (usdVal !== undefined && usdVal !== null && usdVal > 0) return usdVal;
    return Math.round(inrVal / 50); // Fallback
  };

  const formatPrice = (inrVal: number, usdVal?: number | null): string => {
    const code = countryCode.toUpperCase();
    const price = getRawPrice(inrVal, usdVal);
    
    if (code === 'IN') {
      return `₹${price.toLocaleString('en-IN')}`;
    }

    const currencyInfo = COUNTRY_CURRENCY_MAP[code] || COUNTRY_CURRENCY_MAP['Other'];
    return `${currencyInfo.symbol}${price.toLocaleString('en-US')}`;
  };

  return (
    <CurrencyContext.Provider value={{ countryCode, setCountryCode, formatPrice, getRawPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency(): CurrencyContextValue {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error('useCurrency must be used inside <CurrencyProvider>');
  return ctx;
}
