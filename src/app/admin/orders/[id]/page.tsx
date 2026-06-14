import Link from 'next/link';
import { notFound } from 'next/navigation';
import { connectMongoose } from '@/lib/mongoose';
import { Order } from '@/models/Order';
import { Product } from '@/models/Product';
import { resolveProductImage } from '@/lib/resolveProductImage';
import OrderStatusForm from './OrderStatusForm';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Order Detail · Admin' };

export default async function AdminOrderDetail(props: PageProps<'/admin/orders/[id]'>) {
  const { id } = await props.params;
  await connectMongoose();
  const order = await Order.findById(id).lean();
  if (!order) notFound();

  // Query products to get images and details
  const slugs = order.items.map(i => i.productSlug);
  const products = await Product.find({ slug: { $in: slugs } }).select('slug category image name').lean();
  const productMap = new Map(products.map(p => [p.slug, p]));

  return (
    <div>
      <Link href="/admin/orders" style={{ color: 'var(--primary,#C8956C)', fontSize: '0.85rem' }}>← All orders</Link>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginTop: 12 }}>
        {order.orderNumber}
      </h1>
      <p style={{ color: '#888' }}>
        Placed {new Date(order.createdAt).toLocaleString('en-IN')} · Status: <strong>{order.status}</strong>
        {order.paymentStatus && (
          <> · Payment: <strong>{order.paymentStatus}</strong></>
        )}
        {order.cfPaymentId && (
          <> · Cashfree: <code style={{ fontSize: '0.8rem' }}>{order.cfPaymentId}</code></>
        )}
        {!order.cfPaymentId && order.razorpayPaymentId && (
          <> · Razorpay (legacy): <code style={{ fontSize: '0.8rem' }}>{order.razorpayPaymentId}</code></>
        )}
      </p>

      <div className="row g-4 mt-2">
        <div className="col-lg-8">
          <div style={{ background: '#fff', borderRadius: 14, padding: 20, boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem' }}>Items</h4>
            <table style={{ width: '100%', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                  <th style={{ padding: 8, textAlign: 'left' }}>Product</th>
                  <th style={{ padding: 8, textAlign: 'right' }}>Price</th>
                  <th style={{ padding: 8, textAlign: 'right' }}>Qty</th>
                  <th style={{ padding: 8, textAlign: 'right' }}>Total</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((i, idx) => {
                  const p = productMap.get(i.productSlug);
                  const imageSrc = p ? resolveProductImage(p.image, p.category, p.name) : '/images/products/bracelet.png';
                  return (
                    <tr key={idx} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                      <td style={{ padding: '8px 4px', display: 'flex', alignItems: 'center', gap: 12 }}>
                        <img
                          src={imageSrc}
                          alt={i.name}
                          width="44"
                          height="44"
                          style={{ borderRadius: 8, objectFit: 'cover', border: '1px solid rgba(0,0,0,0.05)', background: '#FAF6F1' }}
                        />
                        <div>
                          <div style={{ fontWeight: 600 }}>{i.name}</div>
                          <div style={{ fontSize: '0.75rem', color: '#888' }}>{i.productSlug}</div>
                        </div>
                      </td>
                      <td style={{ padding: 8, textAlign: 'right', verticalAlign: 'middle' }}>₹{i.price.toLocaleString('en-IN')}</td>
                      <td style={{ padding: 8, textAlign: 'right', verticalAlign: 'middle' }}>{i.qty}</td>
                      <td style={{ padding: 8, textAlign: 'right', fontWeight: 600, verticalAlign: 'middle' }}>₹{i.lineTotal.toLocaleString('en-IN')}</td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr><td colSpan={3} style={{ padding: 8, textAlign: 'right' }}>Subtotal</td>
                  <td style={{ padding: 8, textAlign: 'right', fontWeight: 700, fontSize: '1.05rem' }}>₹{order.subtotal.toLocaleString('en-IN')}</td></tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div className="col-lg-4">
          <div style={{ background: '#fff', borderRadius: 14, padding: 20, boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem' }}>Customer</h4>
            <p style={{ fontSize: '0.9rem' }}>
              <strong>{order.customer.name}</strong><br />
              {order.customer.email}<br />
              {order.customer.phone}<br />
              <br />
              {order.customer.address}<br />
              {order.customer.city}, {order.customer.state} {order.customer.pincode}
              {order.customer.dob && (<><br /><br /><em>Date of Birth:</em> {order.customer.dob}</>)}
              {order.customer.notes && (<><br /><br /><em>Notes:</em> {order.customer.notes}</>)}
            </p>
          </div>

          <div className="mt-3" style={{ background: '#fff', borderRadius: 14, padding: 20, boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem' }}>Update status</h4>
            <OrderStatusForm orderId={String(order._id)} current={order.status} note={order.adminNote || ''} />
          </div>
        </div>
      </div>
    </div>
  );
}
