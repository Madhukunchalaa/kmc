import Link from 'next/link';
import { connectMongoose } from '@/lib/mongoose';
import { Product } from '@/models/Product';
import ProductRowActions from './ProductRowActions';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Products · Admin' };

export default async function AdminProducts() {
  await connectMongoose();
  const items = await Product.find().sort({ createdAt: -1 }).lean();

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', margin: 0 }}>Products</h1>
        <Link href="/admin/products/new" className="btn-primary-custom">
          <i className="fa-solid fa-plus"></i><span>New Product</span>
        </Link>
      </div>

      <div style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ background: '#FAF6F1' }}>
              <th style={{ padding: 12, textAlign: 'left' }}></th>
              <th style={{ padding: 12, textAlign: 'left' }}>Name</th>
              <th style={{ padding: 12, textAlign: 'left' }}>Category</th>
              <th style={{ padding: 12, textAlign: 'right' }}>Price</th>
              <th style={{ padding: 12, textAlign: 'right' }}>Stock</th>
              <th style={{ padding: 12, textAlign: 'center' }}>Status</th>
              <th style={{ padding: 12 }}></th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 && (
              <tr><td colSpan={7} style={{ padding: 24, textAlign: 'center', color: '#999' }}>
                No products yet. <Link href="/admin/products/new">Create the first one</Link> or run <code>npm run seed</code>.
              </td></tr>
            )}
            {items.map((p) => (
              <tr key={String(p._id)} style={{ borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                <td style={{ padding: 8 }}>
                  <img src={p.image} alt="" style={{ width: 44, height: 44, borderRadius: 8, objectFit: 'cover' }} />
                </td>
                <td style={{ padding: 12 }}>
                  <div style={{ fontWeight: 600 }}>{p.name}</div>
                  <div style={{ color: '#999', fontSize: '0.78rem' }}>/{p.slug}</div>
                </td>
                <td style={{ padding: 12 }}>{p.subcategory}</td>
                <td style={{ padding: 12, textAlign: 'right', fontWeight: 600 }}>₹{p.price.toLocaleString('en-IN')}</td>
                <td style={{ padding: 12, textAlign: 'right' }}>{p.stock}</td>
                <td style={{ padding: 12, textAlign: 'center' }}>
                  <span className="crystal-tag" style={{ fontSize: '0.72rem', background: p.active ? '#4CAF5022' : '#D95F5F22', color: p.active ? '#1E8449' : '#A94442' }}>
                    {p.active ? 'live' : 'hidden'}
                  </span>
                </td>
                <td style={{ padding: 12, textAlign: 'right' }}>
                  <Link href={`/admin/products/${p._id}`} style={{ color: 'var(--primary,#C8956C)', fontSize: '0.85rem', marginRight: 8 }}>Edit</Link>
                  <ProductRowActions id={String(p._id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
