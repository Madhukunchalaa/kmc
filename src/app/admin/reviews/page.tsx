import Link from 'next/link';
import { connectMongoose } from '@/lib/mongoose';
import Review from '@/models/Review';
import ReviewRowActions from './ReviewRowActions';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Product Reviews · Admin' };

interface SP {
  q?: string;
}

export default async function AdminReviews(props: { searchParams: Promise<SP> }) {
  const sp = await props.searchParams;
  const q = sp.q || '';

  await connectMongoose();

  const filter: Record<string, any> = {};
  if (q) {
    filter.$or = [
      { productSlug: { $regex: q, $options: 'i' } },
      { name: { $regex: q, $options: 'i' } },
      { email: { $regex: q, $options: 'i' } },
      { comment: { $regex: q, $options: 'i' } },
    ];
  }

  const items = await Review.find(filter).sort({ createdAt: -1 }).lean();

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', margin: 0 }}>
          Product Reviews <span style={{ fontSize: '1.1rem', color: '#888', fontWeight: 400 }}>({items.length} total)</span>
        </h1>
      </div>

      <div style={{ background: '#fff', padding: '1rem', borderRadius: 14, marginBottom: '1rem', boxShadow: '0 4px 14px rgba(0,0,0,0.02)' }}>
        <form method="GET" action="/admin/reviews" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ flex: '1 1 240px', position: 'relative' }}>
            <i className="fa-solid fa-magnifying-glass" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#aaa', fontSize: '0.9rem' }}></i>
            <input
              type="text"
              name="q"
              defaultValue={q}
              placeholder="Search by product slug, client name, email, or review text..."
              className="newsletter-input"
              style={{ width: '100%', paddingLeft: '34px' }}
            />
          </div>
          <button type="submit" className="btn-primary-custom" style={{ padding: '0 18px', height: '42px' }}>Search</button>
          {q && <Link href="/admin/reviews" className="btn-outline-custom" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '42px', padding: '0 16px', textDecoration: 'none' }}>Clear</Link>}
        </form>
      </div>

      <div style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', minWidth: '800px' }}>
            <thead>
              <tr style={{ background: '#FAF6F1' }}>
                <th style={{ padding: 12, textAlign: 'left', width: 220 }}>Product Slug</th>
                <th style={{ padding: 12, textAlign: 'left', width: 200 }}>Client Details</th>
                <th style={{ padding: 12, textAlign: 'center', width: 110 }}>Rating</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Comment</th>
                <th style={{ padding: 12, textAlign: 'center', width: 140 }}>Date</th>
                <th style={{ padding: 12, textAlign: 'right', width: 180 }}></th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 && (
                <tr>
                  <td colSpan={6} style={{ padding: 32, textAlign: 'center', color: '#999' }}>
                    <i className="fa-regular fa-star" style={{ fontSize: '2rem', marginBottom: '8px', display: 'block', color: '#ccc' }}></i>
                    No product reviews found.
                  </td>
                </tr>
              )}
              {items.map((t: any) => (
                <tr key={String(t._id)} style={{ borderTop: '1px solid rgba(0,0,0,0.05)', transition: 'background 0.2s' }}>
                  <td style={{ padding: 12 }}>
                    <Link
                      href={`/shop/${t.productSlug}`}
                      target="_blank"
                      style={{
                        color: 'var(--primary,#C8956C)',
                        textDecoration: 'none',
                        fontWeight: 600,
                        wordBreak: 'break-all',
                      }}
                    >
                      {t.productSlug}
                      <i className="fa-solid fa-arrow-up-right-from-square ms-1" style={{ fontSize: '0.75rem' }}></i>
                    </Link>
                  </td>
                  <td style={{ padding: 12 }}>
                    <div style={{ fontWeight: 600 }}>{t.name}</div>
                    <div style={{ color: '#999', fontSize: '0.78rem', wordBreak: 'break-all' }}>{t.email}</div>
                  </td>
                  <td style={{ padding: 12, textAlign: 'center' }}>
                    <span style={{ color: 'var(--gold,#D4AF37)', fontWeight: 'bold', letterSpacing: '1px' }}>
                      {'★'.repeat(t.rating)}
                    </span>
                  </td>
                  <td style={{ padding: 12, color: '#555', maxWidth: '300px', wordBreak: 'break-word', whiteSpace: 'pre-line' }}>
                    {t.comment}
                  </td>
                  <td style={{ padding: 12, textAlign: 'center', color: '#666', fontSize: '0.8rem' }}>
                    {new Date(t.createdAt).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </td>
                  <td style={{ padding: 12, textAlign: 'right' }}>
                    <ReviewRowActions id={String(t._id)} approved={t.approved !== false} />
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
