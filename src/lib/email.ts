import nodemailer from 'nodemailer';

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
        Hyderabad, Telangana · <a href="mailto:krissmaagiicrystals@gmail.com" style="color:#C8956C">krissmaagiicrystals@gmail.com</a>
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

export function orderPaidEmail(name: string, orderNumber: string, subtotal: number): EmailMessage {
  return {
    to: '',
    subject: `Payment confirmed · ${orderNumber}`,
    html: shell(
      `Thank you, ${name}!`,
      `<p>Your payment for order <strong>${orderNumber}</strong> was successful.</p>
       <p>Amount paid: <strong>₹${subtotal.toLocaleString('en-IN')}</strong></p>
       <p>We're preparing your crystals and will update you when your order ships.</p>`,
    ),
  };
}

export function bookingReceivedEmail(name: string, serviceTitle: string, date: string, timeSlot: string): EmailMessage {
  return {
    to: '',
    subject: `Booking received · ${serviceTitle}`,
    html: shell(
      `Booking received, ${name}!`,
      `<p>Your booking for <strong>${serviceTitle}</strong> on <strong>${date} at ${timeSlot}</strong> is in.</p>
       <p>Status: <strong>Awaiting confirmation</strong></p>
       <p>We'll email you again once Kriss confirms the session.</p>`,
    ),
  };
}

export function bookingStatusEmail(name: string, serviceTitle: string, status: 'approved' | 'rejected', adminNote?: string): EmailMessage {
  const isApproved = status === 'approved';
  return {
    to: '',
    subject: `Booking ${isApproved ? 'confirmed' : 'declined'} · ${serviceTitle}`,
    html: shell(
      isApproved ? `Your booking is confirmed, ${name}!` : `Your booking was declined`,
      `<p>Your booking for <strong>${serviceTitle}</strong> has been <strong>${status.toUpperCase()}</strong>.</p>
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
  subtotal: number
): EmailMessage {
  return {
    to: '',
    subject: `🚨 New Order Received · ${orderNumber}`,
    html: shell(
      `New Order Placed!`,
      `<p>A new order <strong>${orderNumber}</strong> has been successfully paid and placed.</p>
       <p><strong>Order Details:</strong></p>
       <ul>
         <li>Customer Name: <strong>${customerName}</strong></li>
         <li>Customer Email: <strong>${customerEmail}</strong></li>
         <li>Customer Phone: <strong>${customerPhone}</strong></li>
         <li>Amount Paid: <strong>₹${subtotal.toLocaleString('en-IN')}</strong></li>
       </ul>
       <p><a href="${process.env.NEXTAUTH_URL || ''}/admin/orders" style="display:inline-block;background:#C8956C;color:#fff;padding:10px 18px;border-radius:999px;text-decoration:none">Go to Admin Panel</a></p>`,
    ),
  };
}
