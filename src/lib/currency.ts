// Map of common country codes to their currency codes and symbols
const COUNTRY_CURRENCY_MAP: Record<string, { code: string; symbol: string; useInrValue?: boolean }> = {
  IN: { code: 'INR', symbol: '₹', useInrValue: true },
  NP: { code: 'NPR', symbol: 'Rs.', useInrValue: true },
  LK: { code: 'LKR', symbol: 'Rs.', useInrValue: true },
  PK: { code: 'PKR', symbol: 'Rs.', useInrValue: true },
  BD: { code: 'BDT', symbol: 'Rs.', useInrValue: true },
  BT: { code: 'BTN', symbol: 'Rs.', useInrValue: true },
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
 * - If India or other Rupee countries, uses base INR price.
 * - If other, uses usdPrice but with the country's localized currency symbol (1:1 value matching).
 */
export function formatLocalizedPrice(countryCode: string | null | undefined, inrPrice: number, usdPrice: number = 0): string {
  const code = (countryCode || 'IN').toUpperCase();
  const currencyInfo = COUNTRY_CURRENCY_MAP[code] || COUNTRY_CURRENCY_MAP['Other'];
  
  const price = currencyInfo.useInrValue ? inrPrice : usdPrice;
  return `${currencyInfo.symbol}${price.toLocaleString(currencyInfo.useInrValue ? 'en-IN' : 'en-US')}`;
}

