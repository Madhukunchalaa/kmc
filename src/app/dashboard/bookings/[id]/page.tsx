import Link from 'next/link';
import { notFound } from 'next/navigation';
import { auth } from '@/auth';
import { connectMongoose } from '@/lib/mongoose';
import { Booking } from '@/models/Booking';
import { Service } from '@/models/Service';
import { formatMoney } from '@/lib/money';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Booking Detail' };

export default async function BookingDetail(props: PageProps<'/dashboard/bookings/[id]'>) {
  const session = (await auth())!;
  const { id } = await props.params;
  await connectMongoose();
  const b = await Booking.findOne({ _id: id, user: session.user.id }).lean();
  if (!b) notFound();

  // Query service details to get the image
  const s = await Service.findById(b.service).select('image tagline').lean();
  const serviceImage = s?.image || '/images/products/bracelet.png';
  const tagline = s?.tagline || '';

  return (
    <div>
      <Link href="/dashboard/bookings" style={{ color: 'var(--primary,#C8956C)', fontSize: '0.85rem' }}>← My bookings</Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 16, flexWrap: 'wrap' }}>
        <img
          src={serviceImage}
          alt={b.serviceTitle}
          width="80"
          height="80"
          style={{ borderRadius: 12, objectFit: 'cover', border: '1px solid rgba(0,0,0,0.05)', background: '#FAF6F1' }}
        />
        <div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', margin: 0 }}>{b.serviceTitle}</h1>
          {tagline && <p style={{ color: '#888', margin: '4px 0 0 0', fontStyle: 'italic', fontSize: '0.9rem' }}>{tagline}</p>}
        </div>
      </div>
      <p style={{ color: '#888', marginTop: 12 }}>{b.bookingNumber} · Booked {new Date(b.createdAt).toLocaleString('en-IN')}</p>

      <div style={{ background: '#fff', padding: 20, borderRadius: 14, boxShadow: '0 4px 14px rgba(0,0,0,0.04)', maxWidth: 640, marginTop: 16 }}>
        <p style={{ fontSize: '0.95rem' }}>
          <strong>Date:</strong> {b.date}<br />
          <strong>Time:</strong> {b.timeSlot}<br />
          <strong>Price:</strong> {formatMoney(b.servicePrice, b.currency)}<br />
          <strong>Status:</strong> {b.status}
        </p>
        {b.notes && (
          <>
            <h5 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', marginTop: 12 }}>Your notes</h5>
            <p style={{ color: '#666' }}>{b.notes}</p>
          </>
        )}
        {b.adminNote && (
          <>
            <h5 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', marginTop: 12 }}>Note from Kriss</h5>
            <p style={{ background: '#FAF6F1', padding: 12, borderRadius: 8 }}>{b.adminNote}</p>
          </>
        )}
      </div>
    </div>
  );
}
