import { describe, it, expect } from 'vitest';
import { formatPhone, validatePhone, getPhoneConfig } from '../lib/phoneValidation';

describe('Phone Validation & Formatting Utility', () => {
  describe('formatPhone', () => {
    it('should format Indian phone numbers', () => {
      // 10 digits, prepends +91 and formats
      expect(formatPhone('9876543210', 'IN')).toBe('+91 98765 43210');
      // Starts with +91 already
      expect(formatPhone('+919876543210', 'IN')).toBe('+91 98765 43210');
      // Starts with 91 already
      expect(formatPhone('919876543210', 'IN')).toBe('+91 98765 43210');
      // Strips leading 0 and formats
      expect(formatPhone('09876543210', 'IN')).toBe('+91 98765 43210');
      // Handles spaces and formatting in input
      expect(formatPhone('98765 43210', 'IN')).toBe('+91 98765 43210');
      expect(formatPhone('+91 98765 43210', 'IN')).toBe('+91 98765 43210');
      // Short inputs
      expect(formatPhone('987', 'IN')).toBe('+91 987');
    });

    it('should format US phone numbers', () => {
      expect(formatPhone('2025550143', 'US')).toBe('+1 2025550143');
      expect(formatPhone('+12025550143', 'US')).toBe('+1 2025550143');
    });

    it('should format UK phone numbers', () => {
      expect(formatPhone('7700900077', 'GB')).toBe('+44 7700900077');
      expect(formatPhone('07700900077', 'GB')).toBe('+44 7700900077');
    });
  });

  describe('validatePhone', () => {
    it('should validate Indian phone numbers', () => {
      // Valid cases
      expect(validatePhone('+919876543210', 'IN').isValid).toBe(true);
      expect(validatePhone('+91 98765 43210', 'IN').isValid).toBe(true);

      // Invalid cases
      expect(validatePhone('9876543210', 'IN').isValid).toBe(false); // missing +
      expect(validatePhone('+19876543210', 'IN').isValid).toBe(false); // wrong country code
      expect(validatePhone('+91987654321', 'IN').isValid).toBe(false); // too short (9 digits)
      expect(validatePhone('+9198765432100', 'IN').isValid).toBe(false); // too long (11 digits)
    });

    it('should validate US phone numbers', () => {
      expect(validatePhone('+12025550143', 'US').isValid).toBe(true);
      expect(validatePhone('+1202555014', 'US').isValid).toBe(false); // too short
    });

    it('should validate UK phone numbers', () => {
      expect(validatePhone('+447700900077', 'GB').isValid).toBe(true);
      expect(validatePhone('+44770090007', 'GB').isValid).toBe(false); // too short
    });
  });
});
