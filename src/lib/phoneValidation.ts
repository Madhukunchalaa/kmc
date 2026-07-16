export interface CountryPhoneConfig {
  dialCode: string;
  expectedLength: number | number[]; // digit count excluding dial code
  placeholder: string;
  name: string;
}

export const PHONE_CONFIGS: Record<string, CountryPhoneConfig> = {
  IN: { name: 'India', dialCode: '+91', expectedLength: 10, placeholder: '+91 XXXXX XXXXX' },
  US: { name: 'United States', dialCode: '+1', expectedLength: 10, placeholder: '+1 XXXXXXXXXX' },
  CA: { name: 'Canada', dialCode: '+1', expectedLength: 10, placeholder: '+1 XXXXXXXXXX' },
  GB: { name: 'United Kingdom', dialCode: '+44', expectedLength: 10, placeholder: '+44 XXXXXXXXXX' },
  UK: { name: 'United Kingdom', dialCode: '+44', expectedLength: 10, placeholder: '+44 XXXXXXXXXX' },
  AU: { name: 'Australia', dialCode: '+61', expectedLength: 9, placeholder: '+61 XXXXXXXXX' },
  AE: { name: 'United Arab Emirates', dialCode: '+971', expectedLength: 9, placeholder: '+971 XXXXXXXXX' },
  SG: { name: 'Singapore', dialCode: '+65', expectedLength: 8, placeholder: '+65 XXXXXXXX' },
  MY: { name: 'Malaysia', dialCode: '+60', expectedLength: [9, 10], placeholder: '+60 XXXXXXXXX' },
  NP: { name: 'Nepal', dialCode: '+977', expectedLength: 10, placeholder: '+977 XXXXXXXXXX' },
  LK: { name: 'Sri Lanka', dialCode: '+94', expectedLength: 9, placeholder: '+94 XXXXXXXXX' },
  PK: { name: 'Pakistan', dialCode: '+92', expectedLength: 10, placeholder: '+92 XXXXXXXXXX' },
  BD: { name: 'Bangladesh', dialCode: '+880', expectedLength: 10, placeholder: '+880 XXXXXXXXXX' },
  BT: { name: 'Bhutan', dialCode: '+975', expectedLength: 8, placeholder: '+975 XXXXXXXX' },
  Other: { name: 'International', dialCode: '+', expectedLength: [7, 8, 9, 10, 11, 12, 13, 14, 15], placeholder: '+XXXXXXXXXXX' }
};

export function getPhoneConfig(country: string): CountryPhoneConfig {
  const code = (country || 'IN').toUpperCase();
  return PHONE_CONFIGS[code] || PHONE_CONFIGS['Other'];
}

// Extract digits only
export function getDigits(val: string): string {
  return val.replace(/\D/g, '');
}

// Cleans phone: allows leading +, removes non-digits
export function cleanPhone(val: string): string {
  const trimmed = (val || '').trim();
  const hasPlus = trimmed.startsWith('+');
  const digits = getDigits(trimmed);
  return (hasPlus ? '+' : '') + digits;
}

// Formats phone number and automatically prepends dial code if missing
export function formatPhone(val: string, country: string): string {
  const config = getPhoneConfig(country);
  const cleanVal = cleanPhone(val);
  if (!cleanVal) return '';

  const dialCodeDigits = config.dialCode.replace('+', ''); // e.g. '91'
  const allDigits = getDigits(cleanVal);

  let nationalNumber = '';

  if (dialCodeDigits && allDigits.startsWith(dialCodeDigits)) {
    // Starts with dial code (e.g. 91...)
    let remainder = allDigits.substring(dialCodeDigits.length);
    // Strip leading 0 from national number if present
    if (remainder.startsWith('0')) {
      remainder = remainder.substring(1);
    }
    nationalNumber = remainder;
  } else {
    // Does not start with dial code (e.g. 9876...)
    let remainder = allDigits;
    if (remainder.startsWith('0')) {
      remainder = remainder.substring(1);
    }
    nationalNumber = remainder;
  }

  // Prepend dial code to national number
  if (config.dialCode === '+') {
    return '+' + nationalNumber;
  }

  // Format specifically for India: +91 XXXXX XXXXX
  if (config.dialCode === '+91') {
    if (nationalNumber.length > 5) {
      return `${config.dialCode} ${nationalNumber.substring(0, 5)} ${nationalNumber.substring(5, 10)}`;
    }
    return `${config.dialCode} ${nationalNumber}`;
  }

  return `${config.dialCode} ${nationalNumber}`;
}

// Validates whether the phone number is valid for the specified country
export function validatePhone(val: string, country: string): { isValid: boolean; error?: string } {
  const config = getPhoneConfig(country);
  const cleanVal = cleanPhone(val);
  if (!cleanVal) {
    return { isValid: false, error: 'Phone number is required.' };
  }

  // Must start with + (which our formatPhone guarantees)
  if (!cleanVal.startsWith('+')) {
    return { isValid: false, error: `Phone number must include the country code prefix (e.g. ${config.dialCode}).` };
  }

  const dialCodeDigits = config.dialCode.replace('+', ''); // e.g. '91'
  const allDigits = getDigits(cleanVal);

  if (dialCodeDigits && !allDigits.startsWith(dialCodeDigits)) {
    return { isValid: false, error: `Phone number must start with ${config.dialCode} for ${config.name}.` };
  }

  const nationalNumber = allDigits.substring(dialCodeDigits.length);
  const lengths = Array.isArray(config.expectedLength) ? config.expectedLength : [config.expectedLength];

  if (!lengths.includes(nationalNumber.length)) {
    const lenStr = Array.isArray(config.expectedLength)
      ? config.expectedLength.join(' or ')
      : config.expectedLength;
    return {
      isValid: false,
      error: `${config.name} phone number must be exactly ${lenStr} digits (excluding country code).`,
    };
  }

  return { isValid: true };
}
