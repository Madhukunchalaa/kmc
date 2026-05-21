import { connectMongoose } from '@/lib/mongoose';
import { User } from '@/models/User';
import UserRowActions from './UserRowActions';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Users · Admin' };

export default async function AdminUsers() {
  await connectMongoose();
  const users = await User.find().sort({ createdAt: -1 }).lean();

  return (
    <div>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem' }}>Users</h1>
      <p style={{ color: 'var(--text-light,#666)' }}>Registered accounts.</p>

      <div style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
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
              <tr><td colSpan={7} style={{ padding: 24, textAlign: 'center', color: '#999' }}>No users.</td></tr>
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
  );
}
