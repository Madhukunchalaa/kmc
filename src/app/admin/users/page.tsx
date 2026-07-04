import Link from 'next/link';
import { connectMongoose } from '@/lib/mongoose';
import { User } from '@/models/User';
import UserRowActions from './UserRowActions';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Users · Admin' };

interface SP { q?: string; }

export default async function AdminUsers(props: { searchParams: Promise<SP> }) {
  const sp = await props.searchParams;
  const q = (sp.q || '').trim();

  await connectMongoose();

  const filter: Record<string, unknown> = {};
  if (q) {
    filter.$or = [
      { name: { $regex: q, $options: 'i' } },
      { email: { $regex: q, $options: 'i' } },
      { phone: { $regex: q, $options: 'i' } },
    ];
  }

  const users = await User.find(filter).sort({ createdAt: -1 }).lean();

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', margin: 0 }}>
            Users <span style={{ fontSize: '1.1rem', color: '#888', fontWeight: 400 }}>({users.length} found)</span>
          </h1>
          <p style={{ color: 'var(--text-light,#666)', margin: '4px 0 0', fontSize: '0.85rem' }}>Registered customer accounts</p>
        </div>
      </div>

      {/* Search */}
      <div style={{ background: '#fff', padding: '1rem', borderRadius: 14, marginBottom: '1rem', boxShadow: '0 4px 14px rgba(0,0,0,0.02)' }}>
        <form method="GET" action="/admin/users" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ flex: '1 1 260px', position: 'relative' }}>
            <i className="fa-solid fa-magnifying-glass" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#aaa', fontSize: '0.9rem' }} />
            <input
              type="text" name="q" defaultValue={q}
              placeholder="Search by name, email or phone…"
              className="newsletter-input"
              style={{ width: '100%', paddingLeft: '34px' }}
            />
          </div>
          <button type="submit" className="btn-primary-custom" style={{ padding: '0 18px', height: '42px' }}>Search</button>
          {q && (
            <Link href="/admin/users" className="btn-outline-custom" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '42px', padding: '0 16px', textDecoration: 'none' }}>Clear</Link>
          )}
        </form>
      </div>

      <div style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', minWidth: 700 }}>
            <thead>
              <tr style={{ background: '#FAF6F1' }}>
                <th style={{ padding: 12, textAlign: 'left' }}>Name</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Email</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Phone</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Role</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Status</th>
                <th style={{ padding: 12, textAlign: 'right' }}>Joined</th>
                <th style={{ padding: 12 }}></th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 && (
                <tr>
                  <td colSpan={7} style={{ padding: 32, textAlign: 'center', color: '#999' }}>
                    <i className="fa-solid fa-users" style={{ fontSize: '2rem', display: 'block', marginBottom: 8, color: '#ccc' }} />
                    {q ? `No users matching "${q}".` : 'No users yet.'}
                  </td>
                </tr>
              )}
              {users.map((u) => (
                <tr key={String(u._id)} style={{ borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: 12, fontWeight: 600 }}>{u.name}</td>
                  <td style={{ padding: 12 }}>{u.email}</td>
                  <td style={{ padding: 12 }}>{u.phone || '—'}</td>
                  <td style={{ padding: 12, textAlign: 'center' }}>
                    <span className="crystal-tag" style={{ fontSize: '0.72rem', background: u.role === 'admin' ? '#C8956C22' : 'transparent', color: u.role === 'admin' ? '#A0561A' : 'inherit' }}>{u.role}</span>
                  </td>
                  <td style={{ padding: 12, textAlign: 'center' }}>
                    <span className="crystal-tag" style={{ fontSize: '0.72rem', background: u.active ? '#4CAF5022' : '#D95F5F22', color: u.active ? '#1E8449' : '#A94442' }}>{u.active ? 'active' : 'disabled'}</span>
                  </td>
                  <td style={{ padding: 12, textAlign: 'right', color: '#888', fontSize: '0.82rem' }}>{new Date(u.createdAt).toLocaleDateString('en-IN')}</td>
                  <td style={{ padding: 12, textAlign: 'right' }}>
                    <UserRowActions id={String(u._id)} active={u.active} role={u.role} />
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
