import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  phone: z.string().min(7).max(30).optional().or(z.literal('')),
  password: z.string().min(8).max(128),
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
  notes: z.string().max(600).optional().or(z.literal('')),
});

export const createOrderSchema = z.object({
  items: z.array(cartItemSchema).min(1),
  customer: orderCustomerSchema,
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
  image: z.string().url(),
  badge: z.enum(['Popular', 'New', 'Sale', 'Bestseller']).nullable().optional(),
  desc: z.string().min(5).max(600),
  longDesc: z.string().max(4000).optional().or(z.literal('')),
  chakras: z.array(z.string()).default([]),
  stock: z.number().int().min(0).default(99),
  active: z.boolean().default(true),
});

export const serviceInputSchema = z.object({
  slug: z.string().min(2).max(80).regex(/^[a-z0-9-]+$/),
  title: z.string().min(2).max(120),
  tagline: z.string().max(200).optional().or(z.literal('')),
  desc: z.string().min(5).max(2000),
  image: z.string().url(),
  icon: z.string().max(120).default('fa-solid fa-sparkles'),
  price: z.number().min(0),
  durationMins: z.number().int().min(5).max(600),
  bullets: z.array(z.string()).default([]),
  active: z.boolean().default(true),
});

export const createBookingSchema = z.object({
  // Accepts a Mongo ObjectId OR a service slug (e.g. "tarot")
  serviceId: z.string().min(1),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'invalid date'),
  timeSlot: z.string().regex(/^\d{2}:\d{2}$/),
  notes: z.string().max(600).optional().or(z.literal('')),
  // Optional tier — overrides title + price when present (for tier-based session cards)
  tierLabel: z.string().max(40).optional(),
  tierPrice: z.number().min(0).optional(),
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
});

export const passwordChangeSchema = z.object({
  currentPassword: z.string().min(1),
  newPassword: z.string().min(8).max(128),
});

export function zodErrorMessage(err: z.ZodError): string {
  return err.issues.map((i) => `${i.path.join('.') || 'field'}: ${i.message}`).join('; ');
}
