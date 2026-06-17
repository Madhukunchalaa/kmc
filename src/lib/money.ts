/**
 * Currency-aware money formatting for orders (admin + customer views).
 * Orders store their own `currency` ('INR' | 'USD' | …) and amounts already in that
 * currency — so we must format with the matching symbol, never a hardcoded ₹.
 */

export function currencySymbol(currency?: string | null): string {
  const c = (currency || 'INR').toUpperCase();
  if (c === 'INR') return '₹';
  if (c === 'USD') return '$';
  if (c === 'EUR') return '€';
  if (c === 'GBP') return '£';
  return c + ' ';
}

/** "₹1,499" / "$30" — symbol + locale-grouped amount in the order's own currency. */
export function formatMoney(amount: number | null | undefined, currency?: string | null): string {
  const c = (currency || 'INR').toUpperCase();
  const n = Number(amount) || 0;
  const locale = c === 'INR' ? 'en-IN' : 'en-US';
  return currencySymbol(c) + n.toLocaleString(locale, { maximumFractionDigits: 2 });
}
