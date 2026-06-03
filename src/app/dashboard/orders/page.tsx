import Link from 'next/link';
import { auth } from '@/auth';
import { connectMongoose } from '@/lib/mongoose';
import { Order } from '@/models/Order';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'My Orders' };

export default async function MyOrders() {
  const session = (await auth())!;
  await connectMongoose();
  const orders = await Order.find({ user: session.user.id }).sort({ createdAt: -1 }).lean();

  return (
    <div>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginTop: 0 }}>My Orders</h1>

      {orders.length === 0 ? (
        <p style={{ color: '#888' }}>You haven&apos;t placed any orders yet. <Link href="/shop">Start shopping</Link>.</p>
      ) : (
        <div style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead><tr style={{ background: '#FAF6F1' }}>
              <th style={{ padding: 12, textAlign: 'left' }}>Order #</th>
              <th style={{ padding: 12, textAlign: 'left' }}>Items</th>
              <th style={{ padding: 12, textAlign: 'right' }}>Total</th>
              <th style={{ padding: 12, textAlign: 'center' }}>Status</th>
              <th style={{ padding: 12, textAlign: 'right' }}>Date</th>
              <th style={{ padding: 12 }}></th>
            </tr></thead>
            <tbody>
              {orders.map((o) => (
                <tr key={String(o._id)} style={{ borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: 12, fontWeight: 600 }}>{o.orderNumber}</td>
                  <td style={{ padding: 12 }}>{o.items.length}</td>
                  <td style={{ padding: 12, textAlign: 'right', fontWeight: 600 }}>₹{o.subtotal.toLocaleString('en-IN')}</td>
                  <td style={{ padding: 12, textAlign: 'center' }}><span className="crystal-tag status-tag" style={{ fontSize: '0.72rem' }}>{o.status}</span></td>
                  <td style={{ padding: 12, textAlign: 'right', color: '#888', fontSize: '0.82rem' }}>{new Date(o.createdAt).toLocaleDateString('en-IN')}</td>
                  <td style={{ padding: 12, textAlign: 'right' }}>
                    <Link href={`/dashboard/orders/${o._id}`} style={{ color: 'var(--primary,#C8956C)', fontSize: '0.85rem' }}>View →</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
