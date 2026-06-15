import Link from 'next/link';
import { connectMongoose } from '@/lib/mongoose';
import Testimonial from '@/models/Testimonial';
import TestimonialRowActions from './TestimonialRowActions';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Testimonials · Admin' };

interface SP {
  q?: string;
}

export default async function AdminTestimonials(props: { searchParams: Promise<SP> }) {
  const sp = await props.searchParams;
  const q = sp.q || '';

  await connectMongoose();

  const filter: Record<string, unknown> = {};
  if (q) {
    filter.$or = [
      { name: { $regex: q, $options: 'i' } },
      { role: { $regex: q, $options: 'i' } },
      { text: { $regex: q, $options: 'i' } },
    ];
  }

  const items = await Testimonial.find(filter).sort({ createdAt: -1 }).lean();

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', margin: 0 }}>
          Testimonials <span style={{ fontSize: '1.1rem', color: '#888', fontWeight: 400 }}>({items.length} total)</span>
        </h1>
        <Link href="/admin/testimonials/new" className="btn-primary-custom">
          <i className="fa-solid fa-plus"></i><span>Add Testimonial</span>
        </Link>
      </div>

      <div style={{ background: '#fff', padding: '1rem', borderRadius: 14, marginBottom: '1rem', boxShadow: '0 4px 14px rgba(0,0,0,0.02)' }}>
        <form method="GET" action="/admin/testimonials" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ flex: '1 1 240px', position: 'relative' }}>
            <i className="fa-solid fa-magnifying-glass" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#aaa', fontSize: '0.9rem' }}></i>
            <input
              type="text"
              name="q"
              defaultValue={q}
              placeholder="Search by name, role, or text..."
              className="newsletter-input"
              style={{ width: '100%', paddingLeft: '34px' }}
            />
          </div>
          <button type="submit" className="btn-primary-custom" style={{ padding: '0 18px', height: '42px' }}>Search</button>
          {q && <Link href="/admin/testimonials" className="btn-outline-custom" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '42px', padding: '0 16px', textDecoration: 'none' }}>Clear</Link>}
        </form>
      </div>

      <div style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', minWidth: '700px' }}>
            <thead>
              <tr style={{ background: '#FAF6F1' }}>
                <th style={{ padding: 12, width: 80, textAlign: 'center' }}>Avatar</th>
                <th style={{ padding: 12, textAlign: 'left', width: 200 }}>Client Details</th>
                <th style={{ padding: 12, textAlign: 'center', width: 100 }}>Rating</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Review Text</th>
                <th style={{ padding: 12, textAlign: 'right', width: 120 }}></th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ padding: 32, textAlign: 'center', color: '#999' }}>
                    <i className="fa-solid fa-comment-dots" style={{ fontSize: '2rem', marginBottom: '8px', display: 'block', color: '#ccc' }}></i>
                    No testimonials found.
                  </td>
                </tr>
              )}
              {items.map((t: any) => (
                <tr key={String(t._id)} style={{ borderTop: '1px solid rgba(0,0,0,0.05)', transition: 'background 0.2s' }}>
                  <td style={{ padding: 8, textAlign: 'center' }}>
                    <div style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: 'var(--primary,#C8956C)',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      margin: '0 auto'
                    }}>
                      {t.avatar}
                    </div>
                  </td>
                  <td style={{ padding: 12 }}>
                    <div style={{ fontWeight: 600 }}>{t.name}</div>
                    <div style={{ color: '#999', fontSize: '0.78rem' }}>{t.role}</div>
                  </td>
                  <td style={{ padding: 12, textAlign: 'center' }}>
                    <span style={{ color: 'var(--gold,#D4AF37)', fontWeight: 'bold' }}>
                      {'★'.repeat(t.rating)}
                    </span>
                  </td>
                  <td style={{ padding: 12, color: '#555', maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {t.text}
                  </td>
                  <td style={{ padding: 12, textAlign: 'right' }}>
                    <Link href={`/admin/testimonials/${t._id}`} style={{ color: 'var(--primary,#C8956C)', fontSize: '0.85rem', marginRight: 12, textDecoration: 'none', fontWeight: 600 }}>Edit</Link>
                    <TestimonialRowActions id={String(t._id)} />
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
