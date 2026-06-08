import { beforeEach, describe, expect, it } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { CurrencyProvider, useCurrency } from '../context/CurrencyContext';

// Mock localStorage for node environment
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
  };
})();

global.localStorage = localStorageMock as unknown as Storage;

// Helper components for testing hook values using React.createElement (no JSX)
function PriceText({ inr, usd }: { inr: number; usd?: number | null }) {
  const { formatPrice } = useCurrency();
  return React.createElement('span', null, formatPrice(inr, usd));
}

function RawPriceText({ inr, usd }: { inr: number; usd?: number | null }) {
  const { getRawPrice } = useCurrency();
  return React.createElement('span', null, getRawPrice(inr, usd));
}

describe('CurrencyContext & Formatting logic', () => {
  beforeEach(() => {
    localStorageMock.clear();
  });

  it('renders default INR prices correctly', () => {
    const html = renderToString(
      React.createElement(CurrencyProvider, null,
        React.createElement(PriceText, { inr: 1450, usd: 28 })
      )
    );
    expect(html).toContain('₹1,450');
  });

  it('renders default INR prices even when no USD price is provided', () => {
    const html = renderToString(
      React.createElement(CurrencyProvider, null,
        React.createElement(PriceText, { inr: 1100 })
      )
    );
    expect(html).toContain('₹1,100');
  });

  it('resolves raw INR price correctly', () => {
    const html = renderToString(
      React.createElement(CurrencyProvider, null,
        React.createElement(RawPriceText, { inr: 1200, usd: 24 })
      )
    );
    expect(html).toContain('<span>1200</span>');
  });

  it('resolves raw USD price using explicit usdPrice', () => {
    localStorageMock.setItem('kmc_currency', 'USD');

    const html = renderToString(
      React.createElement(CurrencyProvider, { defaultCurrency: 'USD' },
        React.createElement(RawPriceText, { inr: 1450, usd: 28 })
      )
    );
    expect(html).toContain('<span>28</span>');
  });

  it('resolves raw USD price using direct conversion fallback (INR / 50)', () => {
    localStorageMock.setItem('kmc_currency', 'USD');

    // ₹1100 / 50 = $22
    const html1 = renderToString(
      React.createElement(CurrencyProvider, { defaultCurrency: 'USD' },
        React.createElement(RawPriceText, { inr: 1100 })
      )
    );
    expect(html1).toContain('<span>22</span>');

    // ₹1450 / 50 = $29
    const html2 = renderToString(
      React.createElement(CurrencyProvider, { defaultCurrency: 'USD' },
        React.createElement(RawPriceText, { inr: 1450, usd: null })
      )
    );
    expect(html2).toContain('<span>29</span>');
  });

  it('formats USD prices correctly', () => {
    localStorageMock.setItem('kmc_currency', 'USD');

    const html = renderToString(
      React.createElement(CurrencyProvider, { defaultCurrency: 'USD' },
        React.createElement(PriceText, { inr: 1450, usd: 28 })
      )
    );
    expect(html).toContain('$28');
  });

  it('formats USD prices using fallback ratio', () => {
    localStorageMock.setItem('kmc_currency', 'USD');

    const html = renderToString(
      React.createElement(CurrencyProvider, { defaultCurrency: 'USD' },
        React.createElement(PriceText, { inr: 900 })
      )
    );
    expect(html).toContain('$18');
  });
});
