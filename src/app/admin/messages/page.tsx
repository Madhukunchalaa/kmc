import Link from 'next/link';
import { getDb } from '@/lib/mongodb';
import MessageRowActions from './MessageRowActions';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Messages · Admin' };

interface SP {
  q?: string;
}

export default async function AdminMessages(props: { searchParams: Promise<SP> }) {
  const sp = await props.searchParams;
  const q = sp.q || '';

  const db = await getDb();

  const filter: Record<string, any> = {};
  if (q) {
    filter.$or = [
      { name: { $regex: q, $options: 'i' } },
      { email: { $regex: q, $options: 'i' } },
      { phone: { $regex: q, $options: 'i' } },
      { subject: { $regex: q, $options: 'i' } },
      { message: { $regex: q, $options: 'i' } },
    ];
  }

  const rawItems = await db
    .collection('contact_messages')
    .find(filter)
    .sort({ createdAt: -1 })
    .toArray();

  // Map to serialize MongoDB ObjectIds and Dates for standard React rendering
  const items = rawItems.map((item) => ({
    id: String(item._id),
    name: item.name,
    email: item.email,
    phone: item.phone,
    subject: item.subject,
    message: item.message,
    createdAt: item.createdAt ? new Date(item.createdAt).toLocaleString('en-IN') : 'N/A',
  }));

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', margin: 0 }}>
          Contact Messages <span style={{ fontSize: '1.1rem', color: '#888', fontWeight: 400 }}>({items.length} total)</span>
        </h1>
      </div>

      {/* Search Bar */}
      <div style={{ background: '#fff', padding: '1rem', borderRadius: 14, marginBottom: '1rem', boxShadow: '0 4px 14px rgba(0,0,0,0.02)' }}>
        <form method="GET" action="/admin/messages" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ flex: '1 1 240px', position: 'relative' }}>
            <i className="fa-solid fa-magnifying-glass" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#aaa', fontSize: '0.9rem' }}></i>
            <input
              type="text"
              name="q"
              defaultValue={q}
              placeholder="Search by sender, email, subject, or message..."
              className="newsletter-input"
              style={{ width: '100%', paddingLeft: '34px' }}
            />
          </div>
          <button type="submit" className="btn-primary-custom" style={{ padding: '0 18px', height: '42px' }}>Search</button>
          {q && <Link href="/admin/messages" className="btn-outline-custom" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '42px', padding: '0 16px', textDecoration: 'none' }}>Clear</Link>}
        </form>
      </div>

      {/* Messages Table */}
      <div style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', minWidth: '800px' }}>
            <thead>
              <tr style={{ background: '#FAF6F1' }}>
                <th style={{ padding: 12, textAlign: 'left', width: 160 }}>Date</th>
                <th style={{ padding: 12, textAlign: 'left', width: 220 }}>Sender Details</th>
                <th style={{ padding: 12, textAlign: 'left', width: 200 }}>Subject</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Message</th>
                <th style={{ padding: 12, textAlign: 'right', width: 100 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ padding: 32, textAlign: 'center', color: '#999' }}>
                    <i className="fa-solid fa-envelope-open-text" style={{ fontSize: '2rem', marginBottom: '8px', display: 'block', color: '#ccc' }}></i>
                    No messages found.
                  </td>
                </tr>
              )}
              {items.map((item) => (
                <tr key={item.id} style={{ borderTop: '1px solid rgba(0,0,0,0.05)', transition: 'background 0.2s' }}>
                  <td style={{ padding: 12, color: '#555', fontSize: '0.85rem', verticalAlign: 'top' }}>
                    {item.createdAt}
                  </td>
                  <td style={{ padding: 12, verticalAlign: 'top' }}>
                    <div style={{ fontWeight: 600 }}>{item.name}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--primary,#C8956C)' }}>
                      <a href={`mailto:${item.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>{item.email}</a>
                    </div>
                    {item.phone && (
                      <div style={{ color: '#888', fontSize: '0.78rem', marginTop: 2 }}>
                        <i className="fa-solid fa-phone me-1" style={{ fontSize: '0.7rem' }}></i> {item.phone}
                      </div>
                    )}
                  </td>
                  <td style={{ padding: 12, fontWeight: 500, color: '#2D1B0E', verticalAlign: 'top' }}>
                    {item.subject || <span style={{ color: '#bbb', fontStyle: 'italic' }}>No Subject</span>}
                  </td>
                  <td style={{ padding: 12, color: '#444', whiteSpace: 'pre-wrap', verticalAlign: 'top' }}>
                    {item.message}
                  </td>
                  <td style={{ padding: 12, textAlign: 'right', verticalAlign: 'top' }}>
                    <MessageRowActions id={item.id} />
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
