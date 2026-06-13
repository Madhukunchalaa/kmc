// Map of common country codes to their currency codes and symbols
const COUNTRY_CURRENCY_MAP: Record<string, { code: string; symbol: string }> = {
  IN: { code: 'INR', symbol: '₹' },
  US: { code: 'USD', symbol: '$' },
  UK: { code: 'GBP', symbol: '£' },
  GB: { code: 'GBP', symbol: '£' },
  AU: { code: 'AUD', symbol: 'A$' },
  CA: { code: 'CAD', symbol: 'C$' },
  AE: { code: 'AED', symbol: 'د.إ' },
  SG: { code: 'SGD', symbol: 'S$' },
  MY: { code: 'MYR', symbol: 'RM' },
  // Default fallback for other countries
  Other: { code: 'USD', symbol: '$' },
};

/**
 * Returns formatted price string based on user's country.
 * - If India (IN), uses base INR price.
 * - If other, uses usdPrice but with the country's localized currency symbol (1:1 value matching).
 */
export function formatLocalizedPrice(countryCode: string | null | undefined, inrPrice: number, usdPrice: number = 0): string {
  const code = (countryCode || 'IN').toUpperCase();
  
  if (code === 'IN') {
    return `₹${inrPrice.toLocaleString('en-IN')}`;
  }

  const currencyInfo = COUNTRY_CURRENCY_MAP[code] || COUNTRY_CURRENCY_MAP['US']; // Default to USD symbol if unknown
  
  // The client requested 1:1 mapping of the USD numerical value but with the local symbol
  // e.g. 25 USD in US -> $25
  // e.g. 25 USD in UK -> £25
  
  // To avoid standard Intl.NumberFormat replacing the symbol forcefully based on locale, we'll manually prepend it
  return `${currencyInfo.symbol}${usdPrice.toLocaleString('en-US')}`;
}
