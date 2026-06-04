import Link from 'next/link';
import { connectMongoose } from '@/lib/mongoose';
import { Booking } from '@/models/Booking';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Bookings · Admin' };

interface SP { status?: string }

export default async function AdminBookings(props: PageProps<'/admin/bookings'>) {
  const sp = (await props.searchParams) as SP;
  const status = sp.status;
  await connectMongoose();
  const filter: Record<string, unknown> = status ? { status } : {};
  const bookings = await Booking.find(filter).sort({ createdAt: -1 }).lean();

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', margin: 0 }}>Bookings</h1>
        <div className="d-flex gap-2 flex-wrap">
          {['all', 'pending', 'approved', 'rejected', 'completed', 'cancelled'].map((s) => {
            const active = (s === 'all' && !status) || s === status;
            const href = s === 'all' ? '/admin/bookings' : `/admin/bookings?status=${s}`;
            return (
              <Link key={s} href={href} className="crystal-tag" style={{
                background: active ? 'var(--primary,#C8956C)' : 'transparent',
                color: active ? '#fff' : 'inherit',
                border: '1px solid', borderColor: active ? 'var(--primary,#C8956C)' : 'rgba(0,0,0,0.1)',
                textDecoration: 'none', fontWeight: 600,
              }}>{s}</Link>
            );
          })}
        </div>
      </div>

      <div style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ background: '#FAF6F1' }}>
              <th style={{ padding: 12, textAlign: 'left' }}>Booking #</th>
              <th style={{ padding: 12, textAlign: 'left' }}>Service</th>
              <th style={{ padding: 12, textAlign: 'left' }}>Customer</th>
              <th style={{ padding: 12, textAlign: 'left' }}>Date / Time</th>
              <th style={{ padding: 12, textAlign: 'center' }}>Status</th>
              <th style={{ padding: 12 }}></th>
            </tr>
          </thead>
          <tbody>
            {bookings.length === 0 && (
              <tr><td colSpan={6} style={{ padding: 24, textAlign: 'center', color: '#999' }}>No bookings found.</td></tr>
            )}
            {bookings.map((b) => (
              <tr key={String(b._id)} style={{ borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                <td style={{ padding: 12, fontWeight: 600 }}>{b.bookingNumber}</td>
                <td style={{ padding: 12 }}>{b.serviceTitle}</td>
                <td style={{ padding: 12 }}>
                  {b.customer.name}<div style={{ color: '#888', fontSize: '0.78rem' }}>{b.customer.email}</div>
                </td>
                <td style={{ padding: 12 }}>{b.date} <strong>{b.timeSlot}</strong></td>
                <td style={{ padding: 12, textAlign: 'center' }}><span className="crystal-tag status-tag" style={{ fontSize: '0.72rem' }}>{b.status}</span></td>
                <td style={{ padding: 12, textAlign: 'right' }}>
                  <Link href={`/admin/bookings/${b._id}`} style={{ color: 'var(--primary,#C8956C)', fontSize: '0.85rem' }}>Review →</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
