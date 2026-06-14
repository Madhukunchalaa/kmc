import { Notification } from '@/models/Notification';
import type { BookingDoc } from '@/models/Booking';
import { sendEmail, bookingReceivedEmail } from '@/lib/email';

export async function fulfillPaidBooking(booking: BookingDoc): Promise<void> {
  // 1. Create user notification
  if (booking.user) {
    Notification.create({
      user: booking.user,
      type: 'booking',
      title: `Booking ${booking.bookingNumber} confirmed`,
      message: `Your payment was successful. Your ${booking.serviceTitle} session on ${booking.date} at ${booking.timeSlot} is booked. Kriss will reach out to you via WhatsApp.`,
      link: `/dashboard/bookings/${booking._id}`,
    }).catch(() => {});
  }

  // 2. Send emails to customer and admin, awaiting both
  const adminEmail = process.env.SEED_ADMIN_EMAIL || 'admin@krissmaagiic.com';
  await Promise.allSettled([
    sendEmail({
      ...bookingReceivedEmail(booking.customer.name, booking.serviceTitle, booking.date, booking.timeSlot),
      to: booking.customer.email,
    }),
    sendEmail({
      to: adminEmail,
      subject: `New Paid Booking: ${booking.bookingNumber}`,
      html: `
        <h2>New Booking Received!</h2>
        <p>A customer has successfully booked and paid for a service.</p>
        <ul>
          <li><strong>Service:</strong> ${booking.serviceTitle}</li>
          <li><strong>Date:</strong> ${booking.date}</li>
          <li><strong>Time:</strong> ${booking.timeSlot}</li>
          <li><strong>Customer Name:</strong> ${booking.customer.name}</li>
          <li><strong>Customer Phone:</strong> ${booking.customer.phone}</li>
          <li><strong>Customer Email:</strong> ${booking.customer.email}</li>
        </ul>
        <p>Please reach out to the customer via WhatsApp to coordinate.</p>
      `
    }),
  ]).then((results) => {
    results.forEach((r, idx) => {
      const type = idx === 0 ? 'customer' : 'admin';
      if (r.status === 'rejected') {
        console.error(`[email:booking-fulfillment:${type}:error]`, r.reason);
      } else if (r.value && !r.value.sent) {
        console.warn(`[email:booking-fulfillment:${type}:warn]`, r.value.reason);
      }
    });
  });
}
