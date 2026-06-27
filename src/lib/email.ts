import nodemailer from 'nodemailer';
import { formatMoney } from './money';

const HOST = process.env.SMTP_HOST;
const PORT = Number(process.env.SMTP_PORT ?? 587);
const USER = process.env.SMTP_USER;
const PASS = process.env.SMTP_PASS;
const FROM = process.env.SMTP_FROM || 'KrissMaagiic Crystals <noreply@krissmaagiic.com>';

let transporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter | null {
  if (!HOST || !USER || !PASS) return null;
  if (transporter) return transporter;
  transporter = nodemailer.createTransport({
    host: HOST,
    port: PORT,
    secure: PORT === 465,
    auth: { user: USER, pass: PASS },
  });
  return transporter;
}

export interface EmailMessage {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export async function sendEmail(msg: EmailMessage): Promise<{ sent: boolean; reason?: string }> {
  const t = getTransporter();
  if (!t) {
    console.log('[email:skipped]', msg.subject, '→', msg.to, '(SMTP not configured)');
    return { sent: false, reason: 'smtp-not-configured' };
  }
  try {
    await t.sendMail({ from: FROM, ...msg });
    return { sent: true };
  } catch (err) {
    console.error('[email:error]', err);
    return { sent: false, reason: 'send-failed' };
  }
}

function shell(title: string, body: string): string {
  return `<!doctype html><html><body style="margin:0;background:#FAF6F1;font-family:Arial,sans-serif;color:#2D1B0E">
    <div style="max-width:560px;margin:24px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,0.06)">
      <div style="background:linear-gradient(135deg,#1C0A02,#2D1B0E);padding:24px;text-align:center;color:#fff">
        <div style="font-family:'Playfair Display',Georgia,serif;font-size:22px;letter-spacing:1px">KrissMaagiic Crystals</div>
        <div style="opacity:.7;font-size:12px;margin-top:4px">Energised · Authentic · Selected</div>
      </div>
      <div style="padding:28px 28px 8px"><h2 style="margin:0 0 16px;font-size:20px">${title}</h2>${body}</div>
      <div style="padding:16px 28px 28px;color:#888;font-size:12px;text-align:center">
        Hyderabad, Telangana · <a href="mailto:info@krissmaagiiccrystals.com" style="color:#C8956C">info@krissmaagiiccrystals.com</a>
      </div>
    </div></body></html>`;
}

export function welcomeEmail(name: string): EmailMessage {
  return {
    to: '',
    subject: 'Welcome to KrissMaagiic Crystals ✨',
    html: shell(
      `Welcome, ${name}!`,
      `<p>Your account is ready. You can now shop our crystal collections and book healing sessions with Kriss.</p>
       <p><a href="${process.env.NEXTAUTH_URL || ''}/shop" style="display:inline-block;background:#C8956C;color:#fff;padding:10px 18px;border-radius:999px;text-decoration:none">Explore the shop</a></p>`,
    ),
  };
}

export function orderPaidEmail(name: string, orderNumber: string, subtotal: number, items: any[] = [], currency: string = 'INR', international = false): EmailMessage {
  const itemsHtml = items.map(i => `
    <tr style="border-bottom:1px solid rgba(0,0,0,0.05)">
      <td style="padding:10px 0;display:flex;align-items:center;gap:12px">
        ${i.image ? `<img src="${i.image}" width="40" height="40" style="border-radius:6px;object-fit:cover" />` : ''}
        <div>
          <div style="font-weight:bold;color:#2D1B0E">${i.name}</div>
          <div style="font-size:11px;color:#666">Qty: ${i.qty}</div>
        </div>
      </td>
      <td style="padding:10px 0;text-align:right;font-weight:bold;color:#2D1B0E">${formatMoney(i.lineTotal, currency)}</td>
    </tr>
  `).join('');

  return {
    to: '',
    subject: `Payment confirmed · ${orderNumber}`,
    html: shell(
      `Thank you, ${name}!`,
      `<p>Your payment for order <strong>${orderNumber}</strong> was successful.</p>
       <p>We're preparing your crystals and will update you when your order ships.</p>
       ${international ? `<p style="background:#FFF8EF;border:1px solid rgba(200,149,108,0.3);border-radius:8px;padding:10px 14px;font-size:13px;color:#8A4F27">🌍 <strong>International order:</strong> Shipping charges for your location will be calculated and sent separately via a secure payment link.</p>` : ''}
       <h4 style="margin:20px 0 10px;border-bottom:1px solid rgba(0,0,0,0.1);padding-bottom:6px;color:#2D1B0E">Order Summary</h4>
       <table style="width:100%;border-collapse:collapse;font-size:14px">
         <tbody>
           ${itemsHtml}
           <tr>
             <td style="padding:12px 0 0;font-weight:bold;color:#2D1B0E">Total${international ? ' (excl. shipping)' : ''}</td>
             <td style="padding:12px 0 0;text-align:right;font-weight:bold;font-size:16px;color:#C8956C">${formatMoney(subtotal, currency)}</td>
           </tr>
         </tbody>
       </table>`,
    ),
  };
}

export function bookingReceivedEmail(name: string, serviceTitle: string, date: string, timeSlot: string, serviceImage?: string): EmailMessage {
  return {
    to: '',
    subject: `Booking received · ${serviceTitle}`,
    html: shell(
      `Booking received, ${name}!`,
      `<div style="display:flex;align-items:center;gap:16px;margin:20px 0;background:#FAF6F1;padding:16px;border-radius:12px;border:1px solid rgba(200,149,108,0.15)">
         ${serviceImage ? `<img src="${serviceImage}" width="70" height="70" style="border-radius:8px;object-fit:cover" />` : ''}
         <div>
           <div style="font-family:'Playfair Display',Georgia,serif;font-size:16px;font-weight:bold;color:#2D1B0E">${serviceTitle}</div>
           <div style="font-size:13px;color:#666;margin-top:4px">
             Date: <strong>${date}</strong><br/>
             Time: <strong>${timeSlot}</strong>
           </div>
         </div>
       </div>
       <p>Status: <strong>Awaiting confirmation</strong></p>
       <p>We'll email you again once Kriss confirms the session.</p>`,
    ),
  };
}

export function bookingStatusEmail(name: string, serviceTitle: string, status: 'approved' | 'rejected', adminNote?: string, serviceImage?: string): EmailMessage {
  const isApproved = status === 'approved';
  return {
    to: '',
    subject: `Booking ${isApproved ? 'confirmed' : 'declined'} · ${serviceTitle}`,
    html: shell(
      isApproved ? `Your booking is confirmed, ${name}!` : `Your booking was declined`,
      `<div style="display:flex;align-items:center;gap:16px;margin:20px 0;background:#FAF6F1;padding:16px;border-radius:12px;border:1px solid rgba(200,149,108,0.15)">
         ${serviceImage ? `<img src="${serviceImage}" width="70" height="70" style="border-radius:8px;object-fit:cover" />` : ''}
         <div>
           <div style="font-family:'Playfair Display',Georgia,serif;font-size:16px;font-weight:bold;color:#2D1B0E">${serviceTitle}</div>
           <div style="font-size:13px;color:#666;margin-top:4px">
             Status: <strong style="color:${isApproved ? '#4CAF50' : '#D95F5F'}">${status.toUpperCase()}</strong>
           </div>
         </div>
       </div>
       ${adminNote ? `<p>Note from Kriss: <em>${adminNote}</em></p>` : ''}`,
    ),
  };
}

export function orderStatusEmail(name: string, orderNumber: string, status: string): EmailMessage {
  const statusLabels: Record<string, string> = {
    confirmed: 'confirmed',
    shipped: 'shipped',
    delivered: 'delivered',
    cancelled: 'cancelled',
  };
  const label = statusLabels[status] ?? status;
  const isDelivered = status === 'delivered';
  const isCancelled = status === 'cancelled';
  return {
    to: '',
    subject: `Order ${label} · ${orderNumber}`,
    html: shell(
      isDelivered ? `Your order has arrived, ${name}!` : isCancelled ? `Order cancelled · ${orderNumber}` : `Order update · ${orderNumber}`,
      `<p>Your order <strong>${orderNumber}</strong> has been updated to <strong>${label.toUpperCase()}</strong>.</p>
       ${isDelivered ? '<p>Thank you for your purchase! We hope you enjoy your crystals.</p>' : ''}
       ${isCancelled ? '<p>If you have any questions, please reach out to us.</p>' : ''}`,
    ),
  };
}

export function shippingPaymentConfirmedEmail(
  name: string,
  orderNumber: string,
  amount: number | null | undefined,
  currency: string = 'INR',
): EmailMessage {
  const amt = amount && amount > 0 ? formatMoney(amount, currency) : '';
  return {
    to: '',
    subject: `Shipping payment received · ${orderNumber}`,
    html: shell(
      `Shipping payment confirmed, ${name}!`,
      `<p>We have received your shipping payment${amt ? ` of <strong style="color:#C8956C">${amt}</strong>` : ''} for order <strong>${orderNumber}</strong>.</p>
       <p>Your crystals will be dispatched shortly. We'll notify you once shipped. 💫</p>
       <p><a href="${process.env.NEXTAUTH_URL || ''}/dashboard/orders" style="display:inline-block;background:#C8956C;color:#fff;padding:10px 18px;border-radius:999px;text-decoration:none">View my orders</a></p>`,
    ),
  };
}

export function shippingPaymentLinkEmail(
  name: string,
  orderNumber: string,
  link: string,
  amount: number | null | undefined,
  currency: string,
  note?: string,
): EmailMessage {
  const amt = amount && amount > 0 ? formatMoney(amount, currency) : '';
  return {
    to: '',
    subject: `Shipping payment for your order ${orderNumber}`,
    html: shell(
      `Complete your shipping payment, ${name}`,
      `<p>Thank you for your order <strong>${orderNumber}</strong>. As this is an international order, shipping is calculated separately based on your delivery location.</p>
       ${amt ? `<p style="font-size:16px">Shipping charge: <strong style="color:#C8956C">${amt}</strong></p>` : ''}
       <p>Please complete your shipping payment using the secure link below:</p>
       <p><a href="${link}" style="display:inline-block;background:#C8956C;color:#fff;padding:12px 22px;border-radius:999px;text-decoration:none">Pay shipping charges</a></p>
       <p style="color:#888;font-size:12px">If the button doesn't work, copy and paste this link:<br/>${link}</p>
       ${note ? `<p>Note from Kriss: <em>${note}</em></p>` : ''}
       <p>Once your payment is received, we'll dispatch your crystals right away. 💫</p>`,
    ),
  };
}

export function passwordResetEmail(name: string, resetUrl: string): EmailMessage {
  return {
    to: '',
    subject: 'Reset your password',
    html: shell(
      `Hi ${name},`,
      `<p>We received a request to reset your KrissMaagiic Crystals password.</p>
       <p><a href="${resetUrl}" style="display:inline-block;background:#C8956C;color:#fff;padding:10px 18px;border-radius:999px;text-decoration:none">Reset password</a></p>
       <p style="color:#888;font-size:12px">This link expires in 1 hour. If you didn't request this, you can safely ignore the email.</p>`,
    ),
  };
}

export function passwordResetOtpEmail(name: string, otp: string): EmailMessage {
  return {
    to: '',
    subject: `Your password reset OTP is ${otp}`,
    html: shell(
      `Hi ${name},`,
      `<p>We received a request to reset your KrissMaagiic Crystals password.</p>
       <p>Your OTP to reset your password is:</p>
       <div style="margin:24px 0;font-size:36px;font-weight:bold;letter-spacing:6px;color:#2D1B0E;text-align:center;padding:20px;background:#FAF6F1;border-radius:12px;border:1px solid rgba(200,149,108,0.2)">
         ${otp}
       </div>
       <p style="color:#888;font-size:12px">This OTP is valid for 15 minutes. If you didn't request this, you can safely ignore the email.</p>`,
    ),
  };
}

export function otpEmail(name: string, otp: string): EmailMessage {
  return {
    to: '',
    subject: `Your Login OTP is ${otp}`,
    html: shell(
      `Login to KrissMaagiic`,
      `<p>Hi ${name || 'there'},</p>
       <p>Your one-time password (OTP) for login is:</p>
       <div style="margin: 24px 0; font-size: 32px; font-weight: bold; letter-spacing: 4px; color: #2D1B0E; text-align: center; padding: 16px; background: #FAF6F1; border-radius: 8px;">
         ${otp}
       </div>
       <p style="color:#888;font-size:12px">This OTP is valid for 10 minutes. Do not share this code with anyone.</p>`,
    ),
  };
}

export function adminOrderReceivedEmail(
  orderNumber: string,
  customerName: string,
  customerEmail: string,
  customerPhone: string,
  subtotal: number,
  items: any[] = [],
  currency: string = 'INR',
  international = false,
): EmailMessage {
  const itemsHtml = items.map(i => `
    <tr style="border-bottom:1px solid rgba(0,0,0,0.05)">
      <td style="padding:10px 0;display:flex;align-items:center;gap:12px">
        ${i.image ? `<img src="${i.image}" width="40" height="40" style="border-radius:6px;object-fit:cover" />` : ''}
        <div>
          <div style="font-weight:bold;color:#2D1B0E">${i.name}</div>
          <div style="font-size:11px;color:#666">Qty: ${i.qty}</div>
        </div>
      </td>
      <td style="padding:10px 0;text-align:right;font-weight:bold;color:#2D1B0E">${formatMoney(i.lineTotal, currency)}</td>
    </tr>
  `).join('');

  return {
    to: '',
    subject: `🚨 New ${international ? '🌍 International ' : ''}Order · ${orderNumber}`,
    html: shell(
      `New Order Placed!`,
      `<p>A new order <strong>${orderNumber}</strong> has been successfully paid and placed.</p>
       ${international ? `<p style="background:#FFF8EF;border:1px solid rgba(200,149,108,0.3);border-radius:8px;padding:10px 14px;font-size:13px;color:#8A4F27">🌍 <strong>International order</strong> — shipping charges need to be collected separately via a payment link.</p>` : ''}
       <p><strong>Customer Details:</strong></p>
       <ul style="padding-left:20px;margin-bottom:20px">
         <li>Name: <strong>${customerName}</strong></li>
         <li>Email: <strong>${customerEmail}</strong></li>
         <li>Phone: <strong>${customerPhone}</strong></li>
       </ul>
       <h4 style="margin:20px 0 10px;border-bottom:1px solid rgba(0,0,0,0.1);padding-bottom:6px;color:#2D1B0E">Order Summary</h4>
       <table style="width:100%;border-collapse:collapse;font-size:14px">
         <tbody>
           ${itemsHtml}
           <tr>
             <td style="padding:12px 0 0;font-weight:bold;color:#2D1B0E">Total Paid${international ? ' (excl. shipping)' : ''}</td>
             <td style="padding:12px 0 0;text-align:right;font-weight:bold;font-size:16px;color:#C8956C">${formatMoney(subtotal, currency)}</td>
           </tr>
         </tbody>
       </table>
       <p style="margin-top:20px"><a href="${process.env.NEXTAUTH_URL || ''}/admin/orders" style="display:inline-block;background:#C8956C;color:#fff;padding:10px 18px;border-radius:999px;text-decoration:none">Go to Admin Panel</a></p>`,
    ),
  };
}

export function adminBookingReceivedEmail(
  bookingNumber: string,
  customerName: string,
  customerEmail: string,
  customerPhone: string,
  serviceTitle: string,
  date: string,
  timeSlot: string,
  serviceImage?: string
): EmailMessage {
  return {
    to: '',
    subject: `🚨 New Booking Received · ${bookingNumber}`,
    html: shell(
      `New Booking Placed!`,
      `<p>A new booking <strong>${bookingNumber}</strong> has been successfully booked and paid.</p>
       <div style="display:flex;align-items:center;gap:16px;margin:20px 0;background:#FAF6F1;padding:16px;border-radius:12px;border:1px solid rgba(200,149,108,0.15)">
         ${serviceImage ? `<img src="${serviceImage}" width="70" height="70" style="border-radius:8px;object-fit:cover" />` : ''}
         <div>
           <div style="font-family:'Playfair Display',Georgia,serif;font-size:16px;font-weight:bold;color:#2D1B0E">${serviceTitle}</div>
           <div style="font-size:13px;color:#666;margin-top:4px">
             Date: <strong>${date}</strong><br/>
             Time: <strong>${timeSlot}</strong>
           </div>
         </div>
       </div>
       <p><strong>Customer Details:</strong></p>
       <ul style="padding-left:20px;margin-bottom:20px">
         <li>Name: <strong>${customerName}</strong></li>
         <li>Email: <strong>${customerEmail}</strong></li>
         <li>Phone: <strong>${customerPhone}</strong></li>
       </ul>
       <p style="margin-top:20px"><a href="${process.env.NEXTAUTH_URL || ''}/admin/bookings" style="display:inline-block;background:#C8956C;color:#fff;padding:10px 18px;border-radius:999px;text-decoration:none">Go to Admin Panel</a></p>`,
    ),
  };
}

export function contactFormSubmissionEmail(
  name: string,
  email: string,
  phone: string,
  message: string
): EmailMessage {
  return {
    to: 'info@krissmaagiiccrystals.com',
    subject: `✉️ New Contact Message from ${name}`,
    html: shell(
      `New Message Received`,
      `<p>You have received a new contact message from the website contact form.</p>
       <p><strong>Contact Details:</strong></p>
       <ul style="padding-left:20px;margin-bottom:20px">
         <li>Name: <strong>${name}</strong></li>
         <li>Email: <strong>${email}</strong></li>
         <li>Phone: <strong>${phone || 'N/A'}</strong></li>
       </ul>
       <p><strong>Message:</strong></p>
       <div style="background:#FAF6F1;padding:16px;border-radius:12px;border:1px solid rgba(200,149,108,0.15);font-style:italic;white-space:pre-wrap;color:#2D1B0E">
         ${message}
       </div>`
    )
  };
}
