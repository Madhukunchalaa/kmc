import Link from 'next/link';
import { notFound } from 'next/navigation';
import { auth } from '@/auth';
import { connectMongoose } from '@/lib/mongoose';
import { Order } from '@/models/Order';
import { Product } from '@/models/Product';
import { resolveProductImage } from '@/lib/resolveProductImage';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Order Detail' };

export default async function OrderDetail(props: PageProps<'/dashboard/orders/[id]'>) {
  const session = (await auth())!;
  const { id } = await props.params;
  await connectMongoose();
  const o = await Order.findOne({ _id: id, user: session.user.id }).lean();
  if (!o) notFound();

  // Query products to get images and details
  const slugs = o.items.map(i => i.productSlug);
  const products = await Product.find({ slug: { $in: slugs } }).select('slug category image name').lean();
  const productMap = new Map(products.map(p => [p.slug, p]));
  return (
    <div>
      <Link href="/dashboard/orders" style={{ color: 'var(--primary,#C8956C)', fontSize: '0.85rem' }}>← My orders</Link>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginTop: 12 }}>{o.orderNumber}</h1>
      <p style={{ color: '#888' }}>
        Placed {new Date(o.createdAt).toLocaleString('en-IN')} · Status: <strong>{o.status}</strong>
        {o.paymentStatus && (
          <> · Payment: <strong>{o.paymentStatus === 'paid' ? 'Paid' : o.paymentStatus}</strong></>
        )}
      </p>

      {/* Order Status Tracker */}
      {o.status === 'cancelled' ? (
        <div className="order-tracker-card cancelled">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#D95F5F' }}>
            <i className="fa-solid fa-circle-xmark" style={{ fontSize: '1.5rem' }} />
            <div>
              <h4 style={{ margin: 0, fontWeight: 700, fontSize: '1rem' }}>This order has been cancelled</h4>
              <p style={{ margin: '2px 0 0 0', fontSize: '0.8rem', color: '#888' }}>
                If you have any questions, please contact support.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="order-tracker-card">
          <h3 className="tracker-title">Order Journey</h3>
          
          <div className="tracker-timeline-container">
            <div className="tracker-line-bg" />
            <div className={`tracker-line-fill fill-${o.status}`} />
            
            <div className={`mini-truck drive-${o.status}`}>
              <div className="mini-truck-bed">
                <div className="mini-logo">KMC</div>
              </div>
              <div className="mini-truck-cabin" />
              <div className="mini-truck-wheel wheel-front spinning" />
              <div className="mini-truck-wheel wheel-back spinning" />
            </div>
            
            <div className={`tracker-step step-1 ${['confirmed', 'shipped', 'delivered'].includes(o.status) ? 'active' : ''} ${o.status === 'confirmed' ? 'current' : ''}`}>
              <div className="step-circle">
                <i className="fa-solid fa-circle-check" />
              </div>
              <div className="step-label">Confirmed</div>
              <div className="step-date">
                {['confirmed', 'shipped', 'delivered'].includes(o.status) ? 'Order Verified' : 'Awaiting confirmation'}
              </div>
            </div>
            
            <div className={`tracker-step step-2 ${['shipped', 'delivered'].includes(o.status) ? 'active' : ''} ${o.status === 'shipped' ? 'current' : ''}`}>
              <div className="step-circle">
                <i className="fa-solid fa-truck-fast" />
              </div>
              <div className="step-label">Shipped</div>
              <div className="step-date">
                {['shipped', 'delivered'].includes(o.status) ? 'In Transit' : 'Preparing dispatch'}
              </div>
            </div>
            
            <div className={`tracker-step step-3 ${o.status === 'delivered' ? 'active' : ''} ${o.status === 'delivered' ? 'current' : ''}`}>
              <div className="step-circle">
                <i className="fa-solid fa-house-chimney" />
              </div>
              <div className="step-label">Delivered</div>
              <div className="step-date">
                {o.status === 'delivered' ? 'Completed' : 'Awaiting delivery'}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .order-tracker-card {
          background: #fff;
          border-radius: 14px;
          padding: 24px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.04);
          margin-top: 20px;
          margin-bottom: 24px;
          position: relative;
          overflow: hidden;
          border: 1px solid #FAF6F1;
        }
        .order-tracker-card.cancelled {
          background: #FFF5F5;
          border: 1px solid #FAD2D2;
        }
        .tracker-title {
          font-family: var(--font-heading, serif);
          font-size: 1.1rem;
          color: #2D1B0E;
          margin-top: 0;
          margin-bottom: 30px;
          font-weight: 700;
        }
        .tracker-timeline-container {
          position: relative;
          height: 100px;
          margin: 0 20px;
        }
        .tracker-line-bg {
          position: absolute;
          top: 20px;
          left: 15%;
          width: 70%;
          height: 4px;
          background: #EBE4DB;
          border-radius: 2px;
          z-index: 1;
        }
        .tracker-line-fill {
          position: absolute;
          top: 20px;
          left: 15%;
          width: 70%;
          transform-origin: left;
          transform: scaleX(0);
          height: 4px;
          background: #C8956C;
          border-radius: 2px;
          z-index: 2;
        }
        .tracker-line-fill.fill-confirmed {
          animation: fillToConfirmed 1s ease-out forwards;
        }
        .tracker-line-fill.fill-shipped {
          animation: fillToShipped 1.5s ease-out forwards;
        }
        .tracker-line-fill.fill-delivered {
          animation: fillToDelivered 2s ease-out forwards;
        }
        @keyframes fillToConfirmed {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(0); }
        }
        @keyframes fillToShipped {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(0.5); }
        }
        @keyframes fillToDelivered {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        
        .mini-truck {
          position: absolute;
          top: 0px;
          height: 24px;
          width: 48px;
          display: flex;
          align-items: flex-end;
          z-index: 10;
          left: 0%;
        }
        .mini-truck.drive-pending {
          left: 0%;
        }
        .mini-truck.drive-confirmed {
          animation: driveToConfirmed 1s ease-out forwards;
        }
        .mini-truck.drive-shipped {
          animation: driveToShipped 1.5s ease-out forwards;
        }
        .mini-truck.drive-delivered {
          animation: driveToDelivered 2s ease-out forwards;
        }
        @keyframes driveToConfirmed {
          0% { left: 0%; }
          100% { left: calc(15% - 24px); }
        }
        @keyframes driveToShipped {
          0% { left: calc(15% - 24px); }
          100% { left: calc(50% - 24px); }
        }
        @keyframes driveToDelivered {
          0% { left: calc(50% - 24px); }
          100% { left: calc(85% - 24px); }
        }
        
        .mini-truck-bed {
          width: 32px;
          height: 18px;
          background: #C8956C;
          border-radius: 2px 0 0 0;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          border: 1px solid #B8855C;
        }
        .mini-logo {
          font-family: var(--font-heading, serif);
          font-size: 0.5rem;
          font-weight: 800;
          color: #fff;
          border: 1px solid #fff;
          padding: 0px 2px;
          border-radius: 1px;
          letter-spacing: 0.5px;
          line-height: 1;
        }
        .mini-truck-cabin {
          width: 14px;
          height: 14px;
          background: #FAF6F1;
          border-radius: 2px 5px 0 0;
          position: relative;
          border: 1px solid #EBE4DB;
          border-left: none;
        }
        .mini-truck-cabin::after {
          content: '';
          position: absolute;
          top: 2px;
          right: 2px;
          width: 6px;
          height: 5px;
          background: #2D1B0E;
          border-radius: 1px;
        }
        .mini-truck-wheel {
          position: absolute;
          width: 10px;
          height: 10px;
          background: #2D1B0E;
          border: 1.5px solid #EBE4DB;
          border-radius: 50%;
          bottom: -5px;
        }
        .mini-truck-wheel.wheel-front {
          right: 3px;
        }
        .mini-truck-wheel.wheel-back {
          left: 8px;
        }
        .mini-truck-wheel.spinning {
          animation: spin 0.25s linear infinite;
        }
        .mini-truck.drive-confirmed .mini-truck-wheel.spinning {
          animation: spin 0.25s linear infinite, stopSpinning 0s linear 1s forwards;
        }
        .mini-truck.drive-shipped .mini-truck-wheel.spinning {
          animation: spin 0.25s linear infinite, stopSpinning 0s linear 1.5s forwards;
        }
        .mini-truck.drive-delivered .mini-truck-wheel.spinning {
          animation: spin 0.25s linear infinite, stopSpinning 0s linear 2s forwards;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes stopSpinning {
          100% { animation-play-state: paused; }
        }
        
        .tracker-step {
          position: absolute;
          top: -2px;
          width: 50px;
          text-align: center;
          z-index: 3;
        }
        .tracker-step.step-1 { left: calc(15% - 25px); }
        .tracker-step.step-2 { left: calc(50% - 25px); }
        .tracker-step.step-3 { left: calc(85% - 25px); }
        
        .step-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #EBE4DB;
          color: #a89f95;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          font-size: 1.15rem;
          border: 3px solid #fff;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
          transition: all 0.4s ease;
        }
        .tracker-step.active .step-circle {
          background: #C8956C;
          color: #fff;
          box-shadow: 0 0 0 3px rgba(200, 149, 108, 0.15), 0 4px 10px rgba(200, 149, 108, 0.3);
        }
        .tracker-step.current .step-circle {
          animation: pulseGlow 2s infinite alternate;
        }
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 0 0px rgba(200, 149, 108, 0.4), 0 4px 10px rgba(200, 149, 108, 0.3); }
          100% { box-shadow: 0 0 0 8px rgba(200, 149, 108, 0), 0 4px 10px rgba(200, 149, 108, 0.3); }
        }
        
        .step-label {
          font-size: 0.78rem;
          font-weight: 700;
          color: #888;
          margin-top: 10px;
          white-space: nowrap;
        }
        .tracker-step.active .step-label {
          color: #2D1B0E;
        }
        .step-date {
          font-size: 0.65rem;
          color: #bbb;
          margin-top: 2px;
          white-space: nowrap;
        }
        .tracker-step.active .step-date {
          color: #C8956C;
          font-weight: 500;
        }
        
        @media (max-width: 576px) {
          .tracker-timeline-container {
            margin: 0;
          }
          .tracker-line-bg, .tracker-line-fill {
            left: 10%;
            width: 80%;
          }
          .tracker-step.step-1 { left: calc(10% - 25px); }
          .tracker-step.step-2 { left: calc(50% - 25px); }
          .tracker-step.step-3 { left: calc(90% - 25px); }
          @keyframes driveToConfirmed {
            0% { left: 0%; }
            100% { left: calc(10% - 24px); }
          }
          @keyframes driveToShipped {
            0% { left: calc(10% - 24px); }
            100% { left: calc(50% - 24px); }
          }
          @keyframes driveToDelivered {
            0% { left: calc(50% - 24px); }
            100% { left: calc(90% - 24px); }
          }
        }
      `}</style>

      <div className="row g-4 mt-2">
        <div className="col-lg-8">
          <div style={{ background: '#fff', borderRadius: 14, padding: 20, boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem' }}>Items</h4>
            <table style={{ width: '100%', fontSize: '0.9rem' }}>
              <tbody>
                {o.items.map((i, idx) => {
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
                      <td style={{ padding: 8, textAlign: 'right', color: '#888', verticalAlign: 'middle' }}>x{i.qty}</td>
                      <td style={{ padding: 8, textAlign: 'right', fontWeight: 600, verticalAlign: 'middle' }}>₹{i.lineTotal.toLocaleString('en-IN')}</td>
                    </tr>
                  );
                })}
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
