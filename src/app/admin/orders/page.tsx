import Link from 'next/link';
import { connectMongoose } from '@/lib/mongoose';
import { Order } from '@/models/Order';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Orders · Admin' };

interface SP { status?: string }

export default async function AdminOrders(props: PageProps<'/admin/orders'>) {
  const sp = (await props.searchParams) as SP;
  const status = sp.status;
  await connectMongoose();
  const filter: Record<string, unknown> = status ? { status } : {};
  const orders = await Order.find(filter).sort({ createdAt: -1 }).lean();

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', margin: 0 }}>Orders</h1>
        <div className="d-flex gap-2 flex-wrap">
          {['all', 'pending', 'confirmed', 'shipped', 'delivered', 'cancelled'].map((s) => {
            const active = (s === 'all' && !status) || s === status;
            const href = s === 'all' ? '/admin/orders' : `/admin/orders?status=${s}`;
            return (
              <Link key={s} href={href} className="crystal-tag" style={{
                background: active ? 'var(--primary,#C8956C)' : 'transparent',
                color: active ? '#fff' : 'inherit',
                border: '1px solid', borderColor: active ? 'var(--primary,#C8956C)' : 'rgba(0,0,0,0.1)',
                textDecoration: 'none', fontWeight: 600,
              }}>
                {s}
              </Link>
            );
          })}
        </div>
      </div>

      <div style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ background: '#FAF6F1' }}>
              <th style={{ padding: 12, textAlign: 'left' }}>Order #</th>
              <th style={{ padding: 12, textAlign: 'left' }}>Customer</th>
              <th style={{ padding: 12, textAlign: 'left' }}>Items</th>
              <th style={{ padding: 12, textAlign: 'right' }}>Total</th>
              <th style={{ padding: 12, textAlign: 'center' }}>Status</th>
              <th style={{ padding: 12, textAlign: 'right' }}>Date</th>
              <th style={{ padding: 12 }}></th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 && (
              <tr><td colSpan={7} style={{ padding: 24, textAlign: 'center', color: '#999' }}>No orders found.</td></tr>
            )}
            {orders.map((o) => (
              <tr key={String(o._id)} style={{ borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                <td style={{ padding: 12, fontWeight: 600 }}>{o.orderNumber}</td>
                <td style={{ padding: 12 }}>
                  {o.customer.name}
                  <div style={{ color: '#888', fontSize: '0.78rem' }}>{o.customer.email}</div>
                </td>
                <td style={{ padding: 12 }}>{o.items.length} item{o.items.length === 1 ? '' : 's'}</td>
                <td style={{ padding: 12, textAlign: 'right', fontWeight: 600 }}>₹{o.subtotal.toLocaleString('en-IN')}</td>
                <td style={{ padding: 12, textAlign: 'center' }}><span className="crystal-tag status-tag" style={{ fontSize: '0.72rem' }}>{o.status}</span></td>
                <td style={{ padding: 12, textAlign: 'right', fontSize: '0.82rem', color: '#888' }}>{new Date(o.createdAt).toLocaleDateString('en-IN')}</td>
                <td style={{ padding: 12, textAlign: 'right' }}>
                  <Link href={`/admin/orders/${o._id}`} style={{ color: 'var(--primary,#C8956C)', fontSize: '0.85rem' }}>View →</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
