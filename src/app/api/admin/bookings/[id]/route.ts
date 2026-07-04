import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminGuard';
import { connectMongoose } from '@/lib/mongoose';
import { Booking } from '@/models/Booking';
import { Notification } from '@/models/Notification';
import { bookingStatusUpdateSchema, zodErrorMessage } from '@/lib/validators';
import { sendEmail, bookingStatusEmail } from '@/lib/email';

export async function PATCH(req: Request, ctx: RouteContext<'/api/admin/bookings/[id]'>) {
  const g = await requireAdmin();
  if (!g.ok) return g.res;
  const { id } = await ctx.params;
  let body: unknown;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 }); }
  const parsed = bookingStatusUpdateSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: false, reason: zodErrorMessage(parsed.error) }, { status: 400 });
  try {
    await connectMongoose();
    const doc = await Booking.findByIdAndUpdate(
      id,
      { status: parsed.data.status, adminNote: parsed.data.adminNote || '' },
      { new: true },
    );
    if (!doc) return NextResponse.json({ ok: false, reason: 'not-found' }, { status: 404 });

    const notifyStatuses = ['approved', 'rejected', 'booked', 'in_progress', 'completed', 'cancelled'];
    if (notifyStatuses.includes(parsed.data.status)) {
      Notification.create({
        user: doc.user,
        type: 'booking',
        title: `Booking ${parsed.data.status}`,
        message: `Your booking for ${doc.serviceTitle} on ${doc.date} at ${doc.timeSlot} was updated to ${parsed.data.status}.`,
        link: `/dashboard/bookings/${doc._id}`,
      }).catch(() => {});

      let serviceImageUrl = '';
      try {
        const { Service } = await import('@/models/Service');
        const service = await Service.findById(doc.service).lean();
        if (service?.image) {
          serviceImageUrl = service.image.startsWith('http') ? service.image : `${process.env.NEXTAUTH_URL || ''}${service.image}`;
        }
      } catch (err) {
        console.error('[admin-booking-status-email:prepare-service-error]', err);
      }

      await sendEmail({
        ...bookingStatusEmail(doc.customer.name, doc.serviceTitle, parsed.data.status, parsed.data.adminNote, serviceImageUrl),
        to: doc.customer.email,
      }).catch((err) => {
        console.error('[admin-booking-status-email-error]', err);
      });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, reason: 'server-error' }, { status: 500 });
  }
}
