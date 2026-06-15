import Link from 'next/link';
import { auth } from '@/auth';
import { connectMongoose } from '@/lib/mongoose';
import { Booking } from '@/models/Booking';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'My Bookings' };

const STATUS_COLOR: Record<string, string> = {
  pending: '#C8956C',
  approved: '#4CAF50',
  rejected: '#D95F5F',
  completed: '#C9A84C',
  cancelled: '#999',
};

export default async function MyBookings() {
  const session = (await auth())!;
  await connectMongoose();
  const bookings = await Booking.find({ user: session.user.id }).sort({ createdAt: -1 }).lean();

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '10px', marginBottom: '1rem' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', margin: 0 }}>My Bookings</h1>
        <Link href="/services" className="btn-primary-custom" style={{ flexShrink: 0 }}>
          <i className="fa-solid fa-wand-magic-sparkles"></i><span>Book a session</span>
        </Link>
      </div>

      {bookings.length === 0 ? (
        <p style={{ color: '#888' }}>No bookings yet. <Link href="/services">Browse services</Link>.</p>
      ) : (
        <div style={{ display: 'grid', gap: 12 }}>
          {bookings.map((b) => (
            <Link key={String(b._id)} href={`/dashboard/bookings/${b._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ background: '#fff', padding: 16, borderRadius: 14, boxShadow: '0 4px 14px rgba(0,0,0,0.04)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 600 }}>{b.serviceTitle}</div>
                  <div style={{ color: '#888', fontSize: '0.85rem', marginTop: 2 }}>
                    {b.bookingNumber} · {b.date} at <strong>{b.timeSlot}</strong>
                  </div>
                </div>
                <span style={{ background: STATUS_COLOR[b.status] + '22', color: STATUS_COLOR[b.status], padding: '4px 12px', borderRadius: 999, fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{b.status}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
