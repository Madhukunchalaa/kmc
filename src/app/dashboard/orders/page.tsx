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
        <div className="dash-table-scroll" style={{ background: '#fff', borderRadius: 14 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', minWidth: 540 }}>
            <thead><tr style={{ background: '#FAF6F1' }}>
              <th style={{ padding: 12, textAlign: 'left', whiteSpace: 'nowrap' }}>Order #</th>
              <th style={{ padding: 12, textAlign: 'left' }}>Items</th>
              <th style={{ padding: 12, textAlign: 'right', whiteSpace: 'nowrap' }}>Total</th>
              <th style={{ padding: 12, textAlign: 'center' }}>Status</th>
              <th style={{ padding: 12, textAlign: 'right', whiteSpace: 'nowrap' }}>Date</th>
              <th style={{ padding: 12 }}></th>
            </tr></thead>
            <tbody>
              {orders.map((o) => (
                <tr key={String(o._id)} style={{ borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: 12, fontWeight: 600, whiteSpace: 'nowrap' }}>{o.orderNumber}</td>
                  <td style={{ padding: 12 }}>
                    <div style={{ fontWeight: 500 }}>{o.items.length} item{o.items.length === 1 ? '' : 's'}</div>
                    <div style={{ fontSize: '0.78rem', color: '#999', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', maxWidth: '200px' }}>
                      {o.items.map(i => `${i.name} (${i.qty})`).join(', ')}
                    </div>
                  </td>
                  <td style={{ padding: 12, textAlign: 'right', fontWeight: 600, whiteSpace: 'nowrap' }}>₹{o.subtotal.toLocaleString('en-IN')}</td>
                  <td style={{ padding: 12, textAlign: 'center' }}><span className="crystal-tag status-tag" style={{ fontSize: '0.72rem' }}>{o.status}</span></td>
                  <td style={{ padding: 12, textAlign: 'right', color: '#888', fontSize: '0.82rem', whiteSpace: 'nowrap' }}>{new Date(o.createdAt).toLocaleDateString('en-IN')}</td>
                  <td style={{ padding: 12, textAlign: 'right' }}>
                    <Link href={`/dashboard/orders/${o._id}`} style={{ color: 'var(--primary,#C8956C)', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>View →</Link>
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
