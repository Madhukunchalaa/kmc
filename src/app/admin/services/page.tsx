import Link from 'next/link';
import { connectMongoose } from '@/lib/mongoose';
import { Service } from '@/models/Service';
import ServiceRowActions from './ServiceRowActions';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Services · Admin' };

export default async function AdminServices() {
  await connectMongoose();
  const items = await Service.find().sort({ createdAt: 1 }).lean();

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', margin: 0 }}>Services</h1>
        <Link href="/admin/services/new" className="btn-primary-custom">
          <i className="fa-solid fa-plus"></i><span>New Service</span>
        </Link>
      </div>

      <div style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ background: '#FAF6F1' }}>
              <th style={{ padding: 12, textAlign: 'left' }}>Title</th>
              <th style={{ padding: 12, textAlign: 'right' }}>Price</th>
              <th style={{ padding: 12, textAlign: 'right' }}>Duration</th>
              <th style={{ padding: 12, textAlign: 'center' }}>Status</th>
              <th style={{ padding: 12 }}></th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 && (
              <tr><td colSpan={5} style={{ padding: 24, textAlign: 'center', color: '#999' }}>No services yet.</td></tr>
            )}
            {items.map((s) => (
              <tr key={String(s._id)} style={{ borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                <td style={{ padding: 12 }}>
                  <div style={{ fontWeight: 600 }}>{s.title}</div>
                  <div style={{ color: '#999', fontSize: '0.78rem' }}>/{s.slug}</div>
                </td>
                <td style={{ padding: 12, textAlign: 'right', fontWeight: 600 }}>₹{s.price.toLocaleString('en-IN')}</td>
                <td style={{ padding: 12, textAlign: 'right' }}>{s.durationMins} min</td>
                <td style={{ padding: 12, textAlign: 'center' }}>
                  <span className="crystal-tag" style={{ fontSize: '0.72rem', background: s.active ? '#4CAF5022' : '#D95F5F22', color: s.active ? '#1E8449' : '#A94442' }}>{s.active ? 'live' : 'hidden'}</span>
                </td>
                <td style={{ padding: 12, textAlign: 'right' }}>
                  <Link href={`/admin/services/${s._id}`} style={{ color: 'var(--primary,#C8956C)', fontSize: '0.85rem', marginRight: 8 }}>Edit</Link>
                  <ServiceRowActions id={String(s._id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
