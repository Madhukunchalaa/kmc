import Link from 'next/link';
import { auth } from '@/auth';
import { connectMongoose } from '@/lib/mongoose';
import { Order } from '@/models/Order';
import { Booking } from '@/models/Booking';
import { Notification } from '@/models/Notification';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'My Dashboard' };

export default async function DashboardHome() {
  const session = (await auth())!;
  await connectMongoose();
  const [orders, bookings, unread, recentOrders, recentBookings] = await Promise.all([
    Order.countDocuments({ user: session.user.id }),
    Booking.countDocuments({ user: session.user.id }),
    Notification.countDocuments({ user: session.user.id, read: false }),
    Order.find({ user: session.user.id }).sort({ createdAt: -1 }).limit(3).lean(),
    Booking.find({ user: session.user.id }).sort({ createdAt: -1 }).limit(3).lean(),
  ]);

  return (
    <div>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginTop: 0 }}>
        Welcome back, {session.user.name?.split(' ')[0] || 'friend'} ✨
      </h1>
      <p style={{ color: 'var(--text-light,#666)' }}>Here&apos;s a quick snapshot of your activity.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
        {[
          { label: 'Orders', value: orders, icon: 'fa-solid fa-bag-shopping', color: '#7B5EA7', href: '/dashboard/orders' },
          { label: 'Bookings', value: bookings, icon: 'fa-solid fa-calendar-check', color: '#4CAF50', href: '/dashboard/bookings' },
          { label: 'Unread Notifications', value: unread, icon: 'fa-solid fa-bell', color: '#C8956C', href: '/dashboard/notifications' },
        ].map((c) => (
          <Link key={c.label} href={c.href} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ background: '#fff', padding: '1.25rem', borderRadius: 14, boxShadow: '0 4px 14px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: c.color + '22', color: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className={c.icon}></i>
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-light,#999)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{c.label}</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700 }}>{c.value}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="row g-4 mt-4">
        <div className="col-lg-6">
          <div style={{ background: '#fff', padding: 20, borderRadius: 14, boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', margin: 0 }}>Recent Orders</h4>
              <Link href="/dashboard/orders" style={{ fontSize: '0.85rem', color: 'var(--primary,#C8956C)' }}>View all →</Link>
            </div>
            {recentOrders.length === 0 ? (
              <p style={{ color: 'var(--text-light,#999)' }}>
                No orders yet. <Link href="/shop">Browse crystals</Link>.
              </p>
            ) : recentOrders.map((o) => (
              <div key={String(o._id)} className="d-flex justify-content-between" style={{ padding: '8px 0', borderBottom: '1px solid rgba(0,0,0,0.05)', fontSize: '0.9rem' }}>
                <div>
                  <Link href={`/dashboard/orders/${o._id}`} style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}>{o.orderNumber}</Link>
                  <div style={{ color: '#888', fontSize: '0.78rem' }}>{new Date(o.createdAt).toLocaleDateString('en-IN')}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <strong>₹{o.subtotal.toLocaleString('en-IN')}</strong>
                  <div style={{ fontSize: '0.78rem', color: '#888' }}>{o.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-6">
          <div style={{ background: '#fff', padding: 20, borderRadius: 14, boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', margin: 0 }}>Recent Bookings</h4>
              <Link href="/dashboard/bookings" style={{ fontSize: '0.85rem', color: 'var(--primary,#C8956C)' }}>View all →</Link>
            </div>
            {recentBookings.length === 0 ? (
              <p style={{ color: 'var(--text-light,#999)' }}>
                No bookings yet. <Link href="/services">Book a session</Link>.
              </p>
            ) : recentBookings.map((b) => (
              <div key={String(b._id)} className="d-flex justify-content-between" style={{ padding: '8px 0', borderBottom: '1px solid rgba(0,0,0,0.05)', fontSize: '0.9rem' }}>
                <div>
                  <Link href={`/dashboard/bookings/${b._id}`} style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}>{b.serviceTitle}</Link>
                  <div style={{ color: '#888', fontSize: '0.78rem' }}>{b.date} {b.timeSlot}</div>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#888' }}>{b.status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
