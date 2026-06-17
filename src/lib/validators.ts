import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  phone: z.string().min(7).max(30).optional().or(z.literal('')),
  password: z.string().min(8).max(128),
  country: z.string().length(2, 'Please select your country'),
  otp: z.string().length(6, 'OTP must be 6 digits').optional(),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email(),
});

export const resetPasswordSchema = z.object({
  token: z.string().min(10),
  password: z.string().min(8).max(128),
});

export const contactSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().max(30).optional().or(z.literal('')),
  subject: z.string().max(200).optional().or(z.literal('')),
  message: z.string().min(5).max(2000),
});

export const cartItemSchema = z.object({
  productId: z.string().min(1),
  qty: z.number().int().min(1).max(99),
});

export const updateCartSchema = z.object({
  items: z.array(cartItemSchema),
});

export const orderCustomerSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().min(7).max(30),
  address: z.string().min(5).max(400),
  city: z.string().min(2).max(80),
  state: z.string().min(2).max(80),
  pincode: z.string().min(4).max(12),
  country: z.string().min(2).max(80),
  dob: z.string().max(100).optional().or(z.literal('')),
  notes: z.string().max(600).optional().or(z.literal('')),
});

export const createOrderSchema = z.object({
  items: z.array(cartItemSchema).min(1),
  customer: orderCustomerSchema,
  currency: z.string().min(2).max(5).optional().default('INR'),
});

export const razorpayCreateSchema = z.object({
  orderId: z.string().min(1),
});

export const razorpayVerifySchema = z.object({
  orderId: z.string().min(1),
  razorpay_order_id: z.string().min(1),
  razorpay_payment_id: z.string().min(1),
  razorpay_signature: z.string().min(1),
});

export const productInputSchema = z.object({
  slug: z.string().min(2).max(120).regex(/^[a-z0-9-]+$/, 'lowercase letters, numbers and dashes only'),
  name: z.string().min(2).max(200),
  category: z.string().min(2).max(80),
  subcategory: z.string().min(2).max(120),
  price: z.number().min(0),
  originalPrice: z.number().min(0).nullable().optional(),
  usdPrice: z.number().min(0).optional(),
  originalUsdPrice: z.number().min(0).nullable().optional(),
  image: z.string().min(1),
  images: z.array(z.string()).default([]),
  badge: z.enum(['Popular', 'New', 'Sale', 'Bestseller']).nullable().optional(),
  desc: z.string().min(5).max(600),
  longDesc: z.string().max(4000).optional().or(z.literal('')),
  chakras: z.array(z.string()).default([]),
  shippingCharge: z.number().min(0).max(100000).nullable().optional(),
  stock: z.number().int().min(0).default(99),
  active: z.boolean().default(true),
});

export const serviceInputSchema = z.object({
  slug: z.string().min(2).max(80).regex(/^[a-z0-9-]+$/),
  title: z.string().min(2).max(120),
  tagline: z.string().max(200).optional().or(z.literal('')),
  desc: z.string().min(5).max(2000),
  image: z.string().min(1),
  icon: z.string().max(120).default('fa-solid fa-sparkles'),
  price: z.number().min(0),
  usdPrice: z.number().min(0).default(0),
  durationMins: z.number().int().min(5).max(600),
  bullets: z.array(z.string()).default([]),
  tiers: z.array(z.object({
    label: z.string().min(1).max(200),
    price: z.number().min(0),
    usdPrice: z.number().min(0).default(0),
  })).default([]),
  active: z.boolean().default(true),
});

export const createBookingSchema = z.object({
  // Accepts a Mongo ObjectId OR a service slug (e.g. "tarot")
  serviceId: z.string().min(1),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'invalid date').optional().or(z.literal('N/A')),
  timeSlot: z
    .string()
    .regex(/^\d{1,2}:\d{2}(\s*(AM|PM))?$/i, 'Please select a valid time slot (e.g. 10:30 AM)')
    .optional()
    .or(z.literal('N/A')),
  question: z.string().max(1000).optional().or(z.literal('')),
  intention: z.string().max(1000).optional().or(z.literal('')),
  dob: z.string().max(100).optional().or(z.literal('')),
  notes: z.string().max(600).optional().or(z.literal('')),
  // Optional tier — overrides title + price when present (for tier-based session cards)
  tierLabel: z.string().max(40).optional(),
  tierPrice: z.number().min(0).optional(),
  tierUsdPrice: z.number().min(0).optional(),
  currency: z.string().length(3).optional().default('INR'),
  customer: z.object({
    name: z.string().min(2).max(120),
    email: z.string().email(),
    phone: z.string().min(7).max(30),
  }),
});

export const bookingStatusUpdateSchema = z.object({
  status: z.enum(['pending', 'approved', 'rejected', 'completed', 'cancelled']),
  adminNote: z.string().max(600).optional().or(z.literal('')),
});

export const orderStatusUpdateSchema = z.object({
  status: z.enum(['pending', 'confirmed', 'shipped', 'delivered', 'cancelled']),
  adminNote: z.string().max(600).optional().or(z.literal('')),
});

export const profileUpdateSchema = z.object({
  name: z.string().min(2).max(120),
  phone: z.string().max(30).optional().or(z.literal('')),
  country: z.string().min(2).max(120),
});

export const passwordChangeSchema = z.object({
  currentPassword: z.string().min(1),
  newPassword: z.string().min(8).max(128),
});

const FRIENDLY_FIELD: Record<string, string> = {
  timeSlot:        'Please select a valid time slot before booking.',
  date:            'Please select a valid booking date.',
  'customer.name':  'Please enter your full name.',
  'customer.email': 'Please enter a valid email address.',
  'customer.phone': 'Please enter a valid phone number.',
  serviceId:       'Something went wrong — please refresh and try again.',
  question:        'Your question is too long (max 1000 characters).',
  notes:           'Notes are too long (max 600 characters).',
};

export function zodErrorMessage(err: z.ZodError): string {
  return err.issues
    .map((i) => {
      const path = i.path.join('.');
      return FRIENDLY_FIELD[path] ?? i.message;
    })
    .join(' ');
}

export const blogInputSchema = z.object({
  title: z.string().min(2).max(200),
  slug: z.string().min(2).max(150).regex(/^[a-z0-9-]+$/),
  content: z.string().min(10),
  excerpt: z.string().min(10).max(400),
  image: z.string().min(1),
  author: z.string().min(2).max(100),
  published: z.boolean().default(false),
});

export const testimonialInputSchema = z.object({
  name: z.string().min(2).max(100),
  role: z.string().min(2).max(150),
  rating: z.number().int().min(1).max(5),
  text: z.string().min(5).max(1000),
  avatar: z.string().min(1).max(10),
});
