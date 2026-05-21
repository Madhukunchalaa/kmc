import Link from 'next/link';
import { notFound } from 'next/navigation';
import { auth } from '@/auth';
import { connectMongoose } from '@/lib/mongoose';
import { Order } from '@/models/Order';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Order Detail' };

export default async function OrderDetail(props: PageProps<'/dashboard/orders/[id]'>) {
  const session = (await auth())!;
  const { id } = await props.params;
  await connectMongoose();
  const o = await Order.findOne({ _id: id, user: session.user.id }).lean();
  if (!o) notFound();
  return (
    <div>
      <Link href="/dashboard/orders" style={{ color: 'var(--primary,#C8956C)', fontSize: '0.85rem' }}>← My orders</Link>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginTop: 12 }}>{o.orderNumber}</h1>
      <p style={{ color: '#888' }}>Placed {new Date(o.createdAt).toLocaleString('en-IN')} · Status: <strong>{o.status}</strong></p>

      <div className="row g-4 mt-2">
        <div className="col-lg-8">
          <div style={{ background: '#fff', borderRadius: 14, padding: 20, boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem' }}>Items</h4>
            <table style={{ width: '100%', fontSize: '0.9rem' }}>
              <tbody>
                {o.items.map((i, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <td style={{ padding: 8 }}>{i.name}</td>
                    <td style={{ padding: 8, textAlign: 'right', color: '#888' }}>x{i.qty}</td>
                    <td style={{ padding: 8, textAlign: 'right', fontWeight: 600 }}>₹{i.lineTotal.toLocaleString('en-IN')}</td>
                  </tr>
                ))}
                <tr><td colSpan={2} style={{ padding: 8, textAlign: 'right' }}>Total</td>
                  <td style={{ padding: 8, textAlign: 'right', fontWeight: 700, fontSize: '1.05rem' }}>₹{o.subtotal.toLocaleString('en-IN')}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-lg-4">
          <div style={{ background: '#fff', borderRadius: 14, padding: 20, boxShadow: '0 4px 14px rgba(0,0,0,0.04)', fontSize: '0.9rem' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem' }}>Shipping</h4>
            <p>{o.customer.name}<br />{o.customer.address}<br />{o.customer.city}, {o.customer.state} {o.customer.pincode}<br />{o.customer.phone}</p>
            {o.adminNote && (
              <>
                <h5 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', marginTop: 16 }}>Note from Kriss</h5>
                <p style={{ background: '#FAF6F1', padding: 10, borderRadius: 8 }}>{o.adminNote}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
