import { Notification } from '@/models/Notification';
import type { BookingDoc } from '@/models/Booking';
import { sendEmail, bookingReceivedEmail, adminBookingReceivedEmail } from '@/lib/email';
import { Service } from '@/models/Service';

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

  // Fetch service image URL
  let serviceImageUrl = '';
  try {
    const service = await Service.findById(booking.service).lean();
    if (service?.image) {
      if (service.image.startsWith('http')) {
        serviceImageUrl = service.image;
      } else {
        serviceImageUrl = `${process.env.NEXTAUTH_URL || ''}${service.image}`;
      }
    }
  } catch (err) {
    console.error('[email:booking-fulfillment:prepare-service-error]', err);
  }

  // 2. Send emails to customer and admin, awaiting both
  const adminEmail = process.env.SEED_ADMIN_EMAIL || 'krissmaagiicrystals@gmail.com';
  await Promise.allSettled([
    sendEmail({
      ...bookingReceivedEmail(booking.customer.name, booking.serviceTitle, booking.date, booking.timeSlot, serviceImageUrl),
      to: booking.customer.email,
    }),
    sendEmail({
      ...adminBookingReceivedEmail(
        booking.bookingNumber,
        booking.customer.name,
        booking.customer.email,
        booking.customer.phone,
        booking.serviceTitle,
        booking.date,
        booking.timeSlot,
        serviceImageUrl
      ),
      to: adminEmail,
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
