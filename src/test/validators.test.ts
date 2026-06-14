import { describe, it, expect } from 'vitest';
import {
  registerSchema,
  loginSchema,
  contactSchema,
  productInputSchema,
  createBookingSchema,
} from '../lib/validators';

describe('Validators Unit Tests', () => {
  describe('registerSchema', () => {
    it('should validate correct user registration payload', () => {
      const payload = {
        name: 'Vijay Varma',
        email: 'vijay@example.com',
        phone: '9876543210',
        password: 'securePassword123',
        country: 'IN',
      };
      const result = registerSchema.safeParse(payload);
      expect(result.success).toBe(true);
    });

    it('should reject email without domain', () => {
      const payload = {
        name: 'Vijay',
        email: 'invalid-email',
        phone: '',
        password: 'securePassword123',
        country: 'IN',
      };
      const result = registerSchema.safeParse(payload);
      expect(result.success).toBe(false);
    });

    it('should reject password shorter than 8 characters', () => {
      const payload = {
        name: 'Vijay Varma',
        email: 'vijay@example.com',
        phone: '1234567',
        password: 'short',
        country: 'IN',
      };
      const result = registerSchema.safeParse(payload);
      expect(result.success).toBe(false);
    });
  });

  describe('loginSchema', () => {
    it('should validate correct login payload', () => {
      const payload = {
        email: 'admin@krissmaagiic.com',
        password: 'ChangeMe@2026',
      };
      const result = loginSchema.safeParse(payload);
      expect(result.success).toBe(true);
    });

    it('should reject empty password', () => {
      const payload = {
        email: 'admin@krissmaagiic.com',
        password: '',
      };
      const result = loginSchema.safeParse(payload);
      expect(result.success).toBe(false);
    });
  });

  describe('contactSchema', () => {
    it('should validate correct contact payload', () => {
      const payload = {
        name: 'Jane Doe',
        email: 'jane@example.com',
        phone: '+918096223929',
        subject: 'Crystal consultation',
        message: 'Hello, I would like to book a crystals consultation.',
      };
      const result = contactSchema.safeParse(payload);
      expect(result.success).toBe(true);
    });

    it('should reject message shorter than 5 characters', () => {
      const payload = {
        name: 'Jane Doe',
        email: 'jane@example.com',
        message: 'Hi',
      };
      const result = contactSchema.safeParse(payload);
      expect(result.success).toBe(false);
    });
  });

  describe('productInputSchema', () => {
    it('should validate correct product details', () => {
      const payload = {
        slug: 'amethyst-healing-towers',
        name: 'Amethyst Healing Tower',
        category: 'towers',
        subcategory: 'Healing Towers',
        price: 1200,
        originalPrice: 1500,
        image: '/images/products/tower.png',
        badge: 'Popular',
        desc: 'Beautiful amethyst tower for positive energy.',
        longDesc: 'Detailed description here.',
        chakras: ['Crown', 'Third Eye'],
        stock: 10,
        active: true,
      };
      const result = productInputSchema.safeParse(payload);
      expect(result.success).toBe(true);
    });

    it('should reject uppercase slug or invalid characters', () => {
      const payload = {
        slug: 'Amethyst-Healing-Tower!',
        name: 'Amethyst Healing Tower',
        category: 'towers',
        subcategory: 'Healing Towers',
        price: 1200,
        image: '/images/products/tower.png',
        desc: 'Beautiful amethyst tower.',
      };
      const result = productInputSchema.safeParse(payload);
      expect(result.success).toBe(false);
    });
  });

  describe('createBookingSchema', () => {
    it('should validate correct booking details', () => {
      const payload = {
        serviceId: 'tarot-reading',
        date: '2026-06-12',
        timeSlot: '14:30',
        notes: 'Intention is finding professional clarity.',
        customer: {
          name: 'Vijay',
          email: 'vijay@example.com',
          phone: '9876543210',
        },
      };
      const result = createBookingSchema.safeParse(payload);
      expect(result.success).toBe(true);
    });

    it('should reject invalid date format', () => {
      const payload = {
        serviceId: 'tarot-reading',
        date: '12-06-2026', // DD-MM-YYYY is invalid under the regex
        timeSlot: '14:30',
        customer: {
          name: 'Vijay',
          email: 'vijay@example.com',
          phone: '9876543210',
        },
      };
      const result = createBookingSchema.safeParse(payload);
      expect(result.success).toBe(false);
    });
  });
});
