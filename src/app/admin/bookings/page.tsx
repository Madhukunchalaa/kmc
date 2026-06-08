import Link from 'next/link';
import { connectMongoose } from '@/lib/mongoose';
import { Booking } from '@/models/Booking';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Bookings · Admin' };

interface SP {
  status?: string;
  q?: string;
}

export default async function AdminBookings(props: PageProps<'/admin/bookings'>) {
  const sp = (await props.searchParams) as SP;
  const status = sp.status;
  const q = sp.q || '';

  await connectMongoose();

  // 1. Build Filter
  const filter: Record<string, unknown> = {};
  if (status) filter.status = status;
  if (q) {
    filter.$or = [
      { bookingNumber: { $regex: q, $options: 'i' } },
      { serviceTitle: { $regex: q, $options: 'i' } },
      { 'customer.name': { $regex: q, $options: 'i' } },
      { 'customer.email': { $regex: q, $options: 'i' } },
      { 'customer.phone': { $regex: q, $options: 'i' } },
    ];
  }

  // 2. Fetch data & compile status counts
  const [bookings, countAgg] = await Promise.all([
    Booking.find(filter).sort({ date: -1, timeSlot: -1 }).lean(),
    Booking.aggregate([
      { $group: { _id: '$status', count: { $sum: 1 } } }
    ])
  ]);

  const counts = countAgg.reduce((acc, curr) => {
    acc[curr._id] = curr.count;
    return acc;
  }, {} as Record<string, number>);

  const totalCount = countAgg.reduce((sum, curr) => sum + curr.count, 0);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', margin: 0 }}>
          Bookings <span style={{ fontSize: '1.1rem', color: '#888', fontWeight: 400 }}>({bookings.length} shown)</span>
        </h1>

        {/* Quick Tabs */}
        <div className="d-flex gap-2 flex-wrap">
          {['all', 'pending', 'approved', 'rejected', 'completed', 'cancelled'].map((s) => {
            const active = (s === 'all' && !status) || s === status;
            const count = s === 'all' ? totalCount : (counts[s] ?? 0);
            const href = s === 'all'
              ? (q ? `/admin/bookings?q=${encodeURIComponent(q)}` : '/admin/bookings')
              : `/admin/bookings?status=${s}${q ? `&q=${encodeURIComponent(q)}` : ''}`;
            return (
              <Link key={s} href={href} className="crystal-tag" style={{
                background: active ? 'var(--primary,#C8956C)' : 'transparent',
                color: active ? '#fff' : 'inherit',
                border: '1px solid', borderColor: active ? 'var(--primary,#C8956C)' : 'rgba(0,0,0,0.1)',
                textDecoration: 'none', fontWeight: 600,
                fontSize: '0.8rem',
              }}>{s} ({count})</Link>
            );
          })}
        </div>
      </div>

      {/* Search Bar */}
      <div style={{ background: '#fff', padding: '1rem', borderRadius: 14, marginBottom: '1rem', boxShadow: '0 4px 14px rgba(0,0,0,0.02)' }}>
        <form method="GET" action="/admin/bookings" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
          {status && <input type="hidden" name="status" value={status} />}
          <div style={{ flex: '1 1 300px', position: 'relative' }}>
            <i className="fa-solid fa-magnifying-glass" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#aaa', fontSize: '0.9rem' }}></i>
            <input
              type="text"
              name="q"
              defaultValue={q}
              placeholder="Search by customer name, email, phone, service, or booking #..."
              className="newsletter-input"
              style={{ width: '100%', paddingLeft: '34px' }}
            />
          </div>

          <button type="submit" className="btn-primary-custom" style={{ padding: '0 18px', height: '42px' }}>
            Search
          </button>

          {(q || status) && (
            <Link href="/admin/bookings" className="btn-outline-custom" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '42px', padding: '0 16px', textDecoration: 'none' }}>
              Reset
            </Link>
          )}
        </form>
      </div>

      <div style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', minWidth: '750px' }}>
            <thead>
              <tr style={{ background: '#FAF6F1' }}>
                <th style={{ padding: 12, textAlign: 'left' }}>Booking #</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Service</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Customer</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Date / Time</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Status</th>
                <th style={{ padding: 12, width: 80 }}></th>
              </tr>
            </thead>
            <tbody>
              {bookings.length === 0 && (
                <tr>
                  <td colSpan={6} style={{ padding: 32, textAlign: 'center', color: '#999' }}>
                    <i className="fa-solid fa-calendar-xmark" style={{ fontSize: '2rem', marginBottom: '8px', display: 'block', color: '#ccc' }}></i>
                    No bookings found matching these criteria.
                  </td>
                </tr>
              )}
              {bookings.map((b) => (
                <tr key={String(b._id)} style={{ borderTop: '1px solid rgba(0,0,0,0.05)', transition: 'background 0.15s' }}>
                  <td style={{ padding: 12, fontWeight: 600 }}>{b.bookingNumber}</td>
                  <td style={{ padding: 12 }}>
                    <div style={{ fontWeight: 600 }}>{b.serviceTitle}</div>
                    <div style={{ fontSize: '0.78rem', color: '#888' }}>₹{b.servicePrice.toLocaleString('en-IN')}</div>
                  </td>
                  <td style={{ padding: 12 }}>
                    <div style={{ fontWeight: 600 }}>{b.customer.name}</div>
                    <div style={{ color: '#888', fontSize: '0.78rem' }}>{b.customer.email} · {b.customer.phone}</div>
                  </td>
                  <td style={{ padding: 12 }}>
                    <div>{new Date(b.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
                    <strong style={{ fontSize: '0.8rem', color: 'var(--primary,#C8956C)' }}>{b.timeSlot}</strong>
                  </td>
                  <td style={{ padding: 12, textAlign: 'center' }}>
                    <span className="crystal-tag status-tag" style={{ fontSize: '0.72rem' }}>{b.status}</span>
                  </td>
                  <td style={{ padding: 12, textAlign: 'right' }}>
                    <Link href={`/admin/bookings/${b._id}`} style={{ color: 'var(--primary,#C8956C)', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600 }}>Review →</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
