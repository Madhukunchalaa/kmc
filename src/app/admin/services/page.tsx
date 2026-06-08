import Link from 'next/link';
import { connectMongoose } from '@/lib/mongoose';
import { Service } from '@/models/Service';
import ServiceRowActions from './ServiceRowActions';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Services · Admin' };

interface SP {
  q?: string;
  status?: string;
}

export default async function AdminServices(props: PageProps<'/admin/services'>) {
  const sp = (await props.searchParams) as SP;
  const q = sp.q || '';
  const status = sp.status || '';

  await connectMongoose();

  // 1. Build Filter Query
  const filter: Record<string, unknown> = {};
  if (status === 'live') filter.active = true;
  if (status === 'hidden') filter.active = false;
  if (q) {
    filter.$or = [
      { title: { $regex: q, $options: 'i' } },
      { slug: { $regex: q, $options: 'i' } },
      { tagline: { $regex: q, $options: 'i' } },
    ];
  }

  const items = await Service.find(filter).sort({ createdAt: 1 }).lean();

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', margin: 0 }}>
          Services <span style={{ fontSize: '1.1rem', color: '#888', fontWeight: 400 }}>({items.length} total)</span>
        </h1>
        <Link href="/admin/services/new" className="btn-primary-custom">
          <i className="fa-solid fa-plus"></i><span>New Service</span>
        </Link>
      </div>

      {/* Search & Filter Form */}
      <div style={{ background: '#fff', padding: '1rem', borderRadius: 14, marginBottom: '1rem', boxShadow: '0 4px 14px rgba(0,0,0,0.02)' }}>
        <form method="GET" action="/admin/services" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ flex: '1 1 300px', position: 'relative' }}>
            <i className="fa-solid fa-magnifying-glass" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#aaa', fontSize: '0.9rem' }}></i>
            <input
              type="text"
              name="q"
              defaultValue={q}
              placeholder="Search by title, slug, tagline..."
              className="newsletter-input"
              style={{ width: '100%', paddingLeft: '34px' }}
            />
          </div>

          <div style={{ flex: '1 1 150px' }}>
            <select name="status" defaultValue={status} className="newsletter-input" style={{ width: '100%' }}>
              <option value="">— All Status —</option>
              <option value="live">Live</option>
              <option value="hidden">Hidden</option>
            </select>
          </div>

          <button type="submit" className="btn-primary-custom" style={{ padding: '0 18px', height: '42px' }}>
            Filter
          </button>

          {(q || status) && (
            <Link href="/admin/services" className="btn-outline-custom" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '42px', padding: '0 16px', textDecoration: 'none' }}>
              Clear
            </Link>
          )}
        </form>
      </div>

      <div style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', minWidth: '600px' }}>
            <thead>
              <tr style={{ background: '#FAF6F1' }}>
                <th style={{ padding: 12, textAlign: 'left' }}>Service</th>
                <th style={{ padding: 12, textAlign: 'right' }}>Price</th>
                <th style={{ padding: 12, textAlign: 'right' }}>Duration</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Status</th>
                <th style={{ padding: 12, textAlign: 'right', width: 120 }}></th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ padding: 32, textAlign: 'center', color: '#999' }}>
                    <i className="fa-solid fa-inbox" style={{ fontSize: '2rem', marginBottom: '8px', display: 'block', color: '#ccc' }}></i>
                    No services found matching these criteria.
                  </td>
                </tr>
              )}
              {items.map((s) => (
                <tr key={String(s._id)} style={{ borderTop: '1px solid rgba(0,0,0,0.05)', transition: 'background 0.2s' }}>
                  <td style={{ padding: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: 32, height: 32, borderRadius: 8, background: '#FAF6F1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary,#C8956C)' }}>
                        <i className={s.icon || 'fa-solid fa-sparkles'}></i>
                      </div>
                      <div>
                        <div style={{ fontWeight: 600 }}>{s.title}</div>
                        <div style={{ color: '#999', fontSize: '0.78rem' }}>/{s.slug}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: 12, textAlign: 'right', fontWeight: 600 }}>₹{s.price.toLocaleString('en-IN')}</td>
                  <td style={{ padding: 12, textAlign: 'right' }}>{s.durationMins} min</td>
                  <td style={{ padding: 12, textAlign: 'center' }}>
                    <span className="crystal-tag" style={{ fontSize: '0.72rem', background: s.active ? '#4CAF5022' : '#D95F5F22', color: s.active ? '#1E8449' : '#A94442' }}>
                      {s.active ? 'live' : 'hidden'}
                    </span>
                  </td>
                  <td style={{ padding: 12, textAlign: 'right' }}>
                    <Link href={`/admin/services/${s._id}`} style={{ color: 'var(--primary,#C8956C)', fontSize: '0.85rem', marginRight: 12, textDecoration: 'none', fontWeight: 600 }}>Edit</Link>
                    <ServiceRowActions id={String(s._id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
