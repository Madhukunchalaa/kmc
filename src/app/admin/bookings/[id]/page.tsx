import Link from 'next/link';
import { notFound } from 'next/navigation';
import { connectMongoose } from '@/lib/mongoose';
import { Booking } from '@/models/Booking';
import BookingDecisionForm from './BookingDecisionForm';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Booking Review · Admin' };

export default async function AdminBookingDetail(props: PageProps<'/admin/bookings/[id]'>) {
  const { id } = await props.params;
  await connectMongoose();
  const b = await Booking.findById(id).lean();
  if (!b) notFound();

  return (
    <div>
      <Link href="/admin/bookings" style={{ color: 'var(--primary,#C8956C)', fontSize: '0.85rem' }}>← All bookings</Link>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginTop: 12 }}>{b.bookingNumber}</h1>
      <p style={{ color: '#888' }}>Submitted {new Date(b.createdAt).toLocaleString('en-IN')} · Current status: <strong>{b.status}</strong></p>

      <div className="row g-4 mt-2">
        <div className="col-lg-7">
          <div style={{ background: '#fff', borderRadius: 14, padding: 20, boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem' }}>Service</h4>
            <p style={{ fontSize: '0.95rem' }}>
              <strong>{b.serviceTitle}</strong> — ₹{b.servicePrice.toLocaleString('en-IN')}<br />
              <strong>{b.date}</strong> at <strong>{b.timeSlot}</strong>
            </p>
            {b.notes && (
              <>
                <h5 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', marginTop: 16 }}>Customer notes</h5>
                <p style={{ background: '#FAF6F1', padding: 12, borderRadius: 8, fontSize: '0.9rem' }}>{b.notes}</p>
              </>
            )}
            <h5 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', marginTop: 16 }}>Customer</h5>
            <p style={{ fontSize: '0.9rem' }}>{b.customer.name}<br />{b.customer.email}<br />{b.customer.phone}</p>
          </div>
        </div>
        <div className="col-lg-5">
          <div style={{ background: '#fff', borderRadius: 14, padding: 20, boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem' }}>Decision</h4>
            <BookingDecisionForm bookingId={String(b._id)} current={b.status} note={b.adminNote || ''} />
          </div>
        </div>
      </div>
    </div>
  );
}
