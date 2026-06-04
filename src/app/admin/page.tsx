import Link from 'next/link';
import { connectMongoose } from '@/lib/mongoose';
import { Order } from '@/models/Order';
import { Booking } from '@/models/Booking';
import { Product } from '@/models/Product';
import { User } from '@/models/User';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Dashboard · Admin' };

interface StatCard {
  label: string;
  value: number | string;
  icon: string;
  color: string;
  href?: string;
}

async function loadStats() {
  try {
    await connectMongoose();
    const [totalOrders, pendingOrders, totalBookings, pendingBookings, products, users, recentOrders, recentBookings] = await Promise.all([
      Order.countDocuments(),
      Order.countDocuments({ status: 'pending' }),
      Booking.countDocuments(),
      Booking.countDocuments({ status: 'pending' }),
      Product.countDocuments({ active: true }),
      User.countDocuments(),
      Order.find().sort({ createdAt: -1 }).limit(5).lean(),
      Booking.find().sort({ createdAt: -1 }).limit(5).lean(),
    ]);
    const revenueAgg = await Order.aggregate([
      { $match: { status: { $in: ['confirmed', 'shipped', 'delivered'] } } },
      { $group: { _id: null, total: { $sum: '$subtotal' } } },
    ]);
    const revenue = revenueAgg[0]?.total ?? 0;
    return { totalOrders, pendingOrders, totalBookings, pendingBookings, products, users, revenue, recentOrders, recentBookings };
  } catch (err) {
    console.error('admin stats failed', err);
    return null;
  }
}

export default async function AdminHome() {
  const stats = await loadStats();

  if (!stats) {
    return <p>Could not load dashboard stats. Check DB connection.</p>;
  }

  const cards: StatCard[] = [
    { label: 'Pending Bookings', value: stats.pendingBookings, icon: 'fa-solid fa-hourglass-half', color: '#C8956C', href: '/admin/bookings?status=pending' },
    { label: 'Pending Orders', value: stats.pendingOrders, icon: 'fa-solid fa-bag-shopping', color: '#C9A84C', href: '/admin/orders?status=pending' },
    { label: 'Total Bookings', value: stats.totalBookings, icon: 'fa-solid fa-calendar-check', color: '#4CAF50', href: '/admin/bookings' },
    { label: 'Total Orders', value: stats.totalOrders, icon: 'fa-solid fa-receipt', color: '#3F8EFC', href: '/admin/orders' },
    { label: 'Products Live', value: stats.products, icon: 'fa-solid fa-gem', color: '#E59500', href: '/admin/products' },
    { label: 'Customers', value: stats.users, icon: 'fa-solid fa-users', color: '#D95F5F', href: '/admin/users' },
    { label: 'Confirmed Revenue', value: '₹' + stats.revenue.toLocaleString('en-IN'), icon: 'fa-solid fa-indian-rupee-sign', color: '#1E8449' },
  ];

  return (
    <div>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginTop: 0 }}>Dashboard</h1>
      <p style={{ color: 'var(--text-light,#666)', marginBottom: '1.5rem' }}>Quick view of the latest activity.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
        {cards.map((c) => {
          const inner = (
            <div
              style={{
                background: '#fff',
                padding: '1.25rem',
                borderRadius: 14,
                boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                cursor: c.href ? 'pointer' : 'default',
              }}
            >
              <div
                style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: c.color + '22', color: c.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem',
                }}
              >
                <i className={c.icon}></i>
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-light,#999)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{c.label}</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700 }}>{c.value}</div>
              </div>
            </div>
          );
          return c.href ? (
            <Link key={c.label} href={c.href} style={{ textDecoration: 'none', color: 'inherit' }}>
              {inner}
            </Link>
          ) : (
            <div key={c.label}>{inner}</div>
          );
        })}
      </div>

      <div className="row g-4 mt-4">
        <div className="col-lg-6">
          <div style={{ background: '#fff', padding: '1.25rem', borderRadius: 14, boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 style={{ fontFamily: 'var(--font-heading)', margin: 0, fontSize: '1.1rem' }}>Recent Orders</h4>
              <Link href="/admin/orders" style={{ fontSize: '0.85rem', color: 'var(--primary,#C8956C)' }}>View all →</Link>
            </div>
            {stats.recentOrders.length === 0 ? (
              <p style={{ color: 'var(--text-light,#999)' }}>No orders yet.</p>
            ) : (
              <table style={{ width: '100%', fontSize: '0.88rem' }}>
                <tbody>
                  {stats.recentOrders.map((o) => (
                    <tr key={String(o._id)} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                      <td style={{ padding: '8px 0' }}>
                        <Link href={`/admin/orders/${o._id}`} style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}>
                          {o.orderNumber}
                        </Link>
                        <div style={{ color: 'var(--text-light,#888)', fontSize: '0.78rem' }}>{o.customer.name}</div>
                      </td>
                      <td style={{ padding: '8px 0', textAlign: 'right', fontWeight: 600 }}>
                        ₹{o.subtotal.toLocaleString('en-IN')}
                      </td>
                      <td style={{ padding: '8px 0 8px 12px', textAlign: 'right' }}>
                        <span className="crystal-tag status-tag" style={{ fontSize: '0.72rem' }}>{o.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
        <div className="col-lg-6">
          <div style={{ background: '#fff', padding: '1.25rem', borderRadius: 14, boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 style={{ fontFamily: 'var(--font-heading)', margin: 0, fontSize: '1.1rem' }}>Recent Bookings</h4>
              <Link href="/admin/bookings" style={{ fontSize: '0.85rem', color: 'var(--primary,#C8956C)' }}>View all →</Link>
            </div>
            {stats.recentBookings.length === 0 ? (
              <p style={{ color: 'var(--text-light,#999)' }}>No bookings yet.</p>
            ) : (
              <table style={{ width: '100%', fontSize: '0.88rem' }}>
                <tbody>
                  {stats.recentBookings.map((b) => (
                    <tr key={String(b._id)} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                      <td style={{ padding: '8px 0' }}>
                        <Link href={`/admin/bookings/${b._id}`} style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}>
                          {b.serviceTitle}
                        </Link>
                        <div style={{ color: 'var(--text-light,#888)', fontSize: '0.78rem' }}>
                          {b.customer.name} · {b.date} {b.timeSlot}
                        </div>
                      </td>
                      <td style={{ padding: '8px 0 8px 12px', textAlign: 'right' }}>
                        <span className="crystal-tag status-tag" style={{ fontSize: '0.72rem' }}>{b.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
