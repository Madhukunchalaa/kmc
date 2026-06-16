import Link from 'next/link';
import { connectMongoose } from '@/lib/mongoose';
import Blog from '@/models/Blog';
import BlogRowActions from './BlogRowActions';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Blogs · Admin' };

interface SP {
  q?: string;
  status?: string;
}

export default async function AdminBlogs(props: { searchParams: Promise<SP> }) {
  const sp = await props.searchParams;
  const q = sp.q || '';
  const status = sp.status || '';

  await connectMongoose();

  const trashedCount = await Blog.countDocuments({ isDeleted: true });
  const isTrashView = status === 'deleted';

  const filter: Record<string, unknown> = {};
  if (isTrashView) {
    filter.isDeleted = true;
  } else {
    filter.isDeleted = { $ne: true };
  }
  if (q) {
    filter.$or = [
      { title: { $regex: q, $options: 'i' } },
      { slug: { $regex: q, $options: 'i' } },
    ];
  }

  const items = await Blog.find(filter).sort({ createdAt: -1 }).lean();

  return (
    <div>
      {/* ── Header ── */}
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', margin: 0 }}>
            {isTrashView ? (
              <>🗑️ Blog Trash <span style={{ fontSize: '1.1rem', color: '#888', fontWeight: 400 }}>({items.length} deleted)</span></>
            ) : (
              <>Blogs <span style={{ fontSize: '1.1rem', color: '#888', fontWeight: 400 }}>({items.length} total)</span></>
            )}
          </h1>
          {isTrashView && (
            <p style={{ margin: '4px 0 0', fontSize: '0.83rem', color: '#B0B0B0' }}>
              Deleted blogs are hidden from the site. Restore any to bring it back.
            </p>
          )}
        </div>

        <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
          {isTrashView ? (
            <Link
              href="/admin/blogs"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: '#fff', border: '1.5px solid rgba(0,0,0,0.12)',
                color: '#555', borderRadius: 30,
                padding: '8px 18px', fontSize: '0.85rem', fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              <i className="fa-solid fa-arrow-left" style={{ fontSize: '0.75rem' }}></i>
              Back to Blogs
            </Link>
          ) : (
            <Link
              href="/admin/blogs?status=deleted"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                background: trashedCount > 0 ? '#FFF3E0' : '#FAF6F1',
                border: `1.5px solid ${trashedCount > 0 ? '#FFCC80' : 'rgba(0,0,0,0.1)'}`,
                color: trashedCount > 0 ? '#E65100' : '#999',
                borderRadius: 30, padding: '8px 18px', fontSize: '0.85rem', fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              <i className="fa-solid fa-trash-can" style={{ fontSize: '0.8rem' }}></i>
              Trash
              {trashedCount > 0 && (
                <span style={{
                  background: '#E65100', color: '#fff',
                  borderRadius: 30, fontSize: '0.7rem', fontWeight: 700,
                  padding: '1px 7px', lineHeight: '1.6',
                }}>
                  {trashedCount}
                </span>
              )}
            </Link>
          )}

          {!isTrashView && (
            <Link href="/admin/blogs/new" className="btn-primary-custom">
              <i className="fa-solid fa-plus"></i><span>Write Blog</span>
            </Link>
          )}
        </div>
      </div>

      {/* ── Trash banner ── */}
      {isTrashView && (
        <div style={{
          background: '#FFF3E0', border: '1px solid #FFCC80',
          borderRadius: 12, padding: '12px 18px', marginBottom: '1rem',
          display: 'flex', alignItems: 'center', gap: 10,
          fontSize: '0.88rem', color: '#E65100',
        }}>
          <i className="fa-solid fa-triangle-exclamation"></i>
          <span><strong>Trash view</strong> — These blogs are hidden from the site. Click <strong>Restore</strong> to bring one back.</span>
          <Link href="/admin/blogs" style={{ marginLeft: 'auto', color: '#E65100', fontWeight: 700, fontSize: '0.82rem', textDecoration: 'underline', whiteSpace: 'nowrap' }}>
            Exit Trash
          </Link>
        </div>
      )}

      {/* ── Search bar (hidden in trash view) ── */}
      {!isTrashView && (
        <div style={{ background: '#fff', padding: '1rem', borderRadius: 14, marginBottom: '1rem', boxShadow: '0 4px 14px rgba(0,0,0,0.02)' }}>
          <form method="GET" action="/admin/blogs" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ flex: '1 1 240px', position: 'relative' }}>
              <i className="fa-solid fa-magnifying-glass" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#aaa', fontSize: '0.9rem' }}></i>
              <input
                type="text"
                name="q"
                defaultValue={q}
                placeholder="Search by title or slug..."
                className="newsletter-input"
                style={{ width: '100%', paddingLeft: '34px' }}
              />
            </div>
            <button type="submit" className="btn-primary-custom" style={{ padding: '0 18px', height: '42px' }}>Search</button>
            {q && <Link href="/admin/blogs" className="btn-outline-custom" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '42px', padding: '0 16px', textDecoration: 'none' }}>Clear</Link>}
          </form>
        </div>
      )}

      {/* ── Table ── */}
      <div style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', minWidth: '700px' }}>
            <thead>
              <tr style={{ background: isTrashView ? '#FFF8F0' : '#FAF6F1' }}>
                <th style={{ padding: 12, width: 60 }}></th>
                <th style={{ padding: 12, textAlign: 'left' }}>Title</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Author</th>
                {!isTrashView && <th style={{ padding: 12, textAlign: 'center' }}>Status</th>}
                <th style={{ padding: 12, textAlign: 'right', width: isTrashView ? 110 : 200 }}>
                  {isTrashView ? 'Action' : ''}
                </th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 && (
                <tr>
                  <td colSpan={isTrashView ? 4 : 5} style={{ padding: 32, textAlign: 'center', color: '#999' }}>
                    <i className="fa-solid fa-pen-nib" style={{ fontSize: '2rem', marginBottom: '8px', display: 'block', color: '#ccc' }}></i>
                    {isTrashView ? 'No deleted blogs — trash is empty.' : 'No blogs found.'}
                  </td>
                </tr>
              )}
              {items.map((b: any) => (
                <tr
                  key={String(b._id)}
                  style={{
                    borderTop: '1px solid rgba(0,0,0,0.05)',
                    background: isTrashView ? 'rgba(255,240,230,0.25)' : undefined,
                    opacity: isTrashView ? 0.85 : 1,
                  }}
                >
                  <td style={{ padding: 8 }}>
                    <img src={b.image} alt="" style={{ width: 44, height: 44, borderRadius: 8, objectFit: 'cover', opacity: isTrashView ? 0.5 : 1 }} />
                  </td>
                  <td style={{ padding: 12 }}>
                    <div style={{ fontWeight: 600, textDecoration: isTrashView ? 'line-through' : 'none', color: isTrashView ? '#AAA' : undefined }}>
                      {b.title}
                    </div>
                    <div style={{ color: '#999', fontSize: '0.78rem' }}>/{b.slug}</div>
                  </td>
                  <td style={{ padding: 12 }}>{b.author}</td>
                  {!isTrashView && (
                    <td style={{ padding: 12, textAlign: 'center' }}>
                      <span className="crystal-tag" style={{ fontSize: '0.72rem', background: b.published ? '#4CAF5022' : '#D95F5F22', color: b.published ? '#1E8449' : '#A94442' }}>
                        {b.published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                  )}
                  <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                    <BlogRowActions id={String(b._id)} isDeleted={!!b.isDeleted} />
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
