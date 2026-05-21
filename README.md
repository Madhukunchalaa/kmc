# KrissMaagiic Crystals

Premium spiritual e-commerce + booking platform for KrissMaagiic Crystals (Hyderabad). Built with **Next.js 16 (App Router)**, **MongoDB Atlas + Mongoose**, **NextAuth v5**, **Zod**, and **Nodemailer**.

## Features

- 🛍️ **Shop** — searchable, filterable crystal catalog with product detail pages
- 🛒 **Cart + Checkout** — guest cart persisted to localStorage + Mongo; checkout requires login
- 📅 **Service Booking** — calendar + time slots, conflict prevention, admin approval workflow
- 🔐 **Auth** — register / login / password reset (NextAuth v5 + bcrypt JWT sessions)
- 👤 **User Dashboard** — My Orders, My Bookings, Notifications, Profile + password change
- 🛡️ **Admin Panel** — Products / Services CRUD, Bookings approve/reject, Order status, User management
- 📧 **Email notifications** — welcome, order, booking received, booking status, password reset (Nodemailer)
- 🔔 **In-app notifications** with unread badge
- 📄 **About / Contact / Privacy / Shipping / Returns** pages
- ✅ Zod validation on every API route
- ✅ Mongoose models with proper indexes

## Tech Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript
- MongoDB Atlas + Mongoose 9
- NextAuth.js v5 (Credentials provider)
- Zod
- Nodemailer
- Bootstrap 5 + custom CSS
- bcryptjs

## Setup

```bash
# 1. Install deps
npm install

# 2. Create .env.local (see Environment Variables below)

# 3. Seed the database (creates admin + 12 products + 4 services)
npm run seed

# 4. Start dev server
npm run dev
```

Default admin: `admin@krissmaagiic.com` / `ChangeMe@2026` (change in `.env.local` before seeding).

## Environment Variables (`.env.local`)

```
MONGODB_URI=mongodb+srv://...
MONGODB_DB=krissmaagiic

AUTH_SECRET=<openssl rand -base64 32>
AUTH_TRUST_HOST=true
NEXTAUTH_URL=http://localhost:3000

SEED_ADMIN_EMAIL=admin@krissmaagiic.com
SEED_ADMIN_PASSWORD=ChangeMe@2026
SEED_ADMIN_NAME=Kriss Admin

# Optional — emails are skipped if SMTP_HOST is blank
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_FROM="KrissMaagiic Crystals <noreply@krissmaagiic.com>"

WHATSAPP_NUMBER=918096223929
```

## Routes

### Public
- `/` Home
- `/about` About
- `/shop` · `/shop/[slug]` Shop + product detail
- `/services` Services list
- `/booking/[serviceId]` Book a session (login required)
- `/cart` · `/checkout` Cart + checkout (checkout login required)
- `/crystal-strength` Crystal guide + match quiz
- `/contact` Contact form
- `/privacy-policy` · `/shipping-policy` · `/returns`

### Auth
- `/login` · `/register` · `/forgot-password` · `/reset-password`

### User dashboard (login required)
- `/dashboard` overview
- `/dashboard/orders` · `/dashboard/orders/[id]`
- `/dashboard/bookings` · `/dashboard/bookings/[id]`
- `/dashboard/notifications`
- `/dashboard/profile`

### Admin (admin role required)
- `/admin` dashboard
- `/admin/orders` · `/admin/orders/[id]`
- `/admin/bookings` · `/admin/bookings/[id]`
- `/admin/products` · `/admin/products/new` · `/admin/products/[id]`
- `/admin/services` · `/admin/services/new` · `/admin/services/[id]`
- `/admin/users`

## Scripts

```bash
npm run dev     # dev server
npm run build   # production build
npm run start   # production server
npm run seed    # seed admin + products + services
npm run lint
```

## Deployment

Designed for **Vercel** + **MongoDB Atlas**. Push to GitHub, import in Vercel, set the env vars from `.env.local`, deploy. Run `npm run seed` against the production DB once before first launch.

## Out of scope (deferred)

- Payment gateway (Razorpay / Stripe) — orders are saved as `pending`; collect payment off-platform for now
- WhatsApp via Twilio
- Cloudinary upload (image URLs are stored as strings)
- Geo-IP / dual-currency
