import Link from 'next/link';
import { auth } from '@/auth';
import { connectMongoose } from '@/lib/mongoose';
import { Notification } from '@/models/Notification';
import MarkAllRead from './MarkAllRead';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Notifications' };

export default async function NotificationsPage() {
  const session = (await auth())!;
  await connectMongoose();
  const items = await Notification.find({ user: session.user.id }).sort({ createdAt: -1 }).limit(100).lean();

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', margin: 0 }}>Notifications</h1>
        <MarkAllRead />
      </div>

      {items.length === 0 ? (
        <p style={{ color: '#888' }}>No notifications yet.</p>
      ) : (
        <div style={{ display: 'grid', gap: 10 }}>
          {items.map((n) => {
            const Inner = (
              <div style={{
                background: '#fff', padding: 16, borderRadius: 12, boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
                borderLeft: '3px solid', borderLeftColor: n.read ? 'rgba(0,0,0,0.05)' : 'var(--primary,#C8956C)',
              }}>
                <div className="d-flex justify-content-between align-items-center" style={{ gap: 12 }}>
                  <strong style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem' }}>{n.title}</strong>
                  <span style={{ fontSize: '0.75rem', color: '#999' }}>{new Date(n.createdAt).toLocaleString('en-IN')}</span>
                </div>
                <p style={{ margin: '6px 0 0', color: '#666', fontSize: '0.9rem' }}>{n.message}</p>
              </div>
            );
            return n.link ? (
              <Link key={String(n._id)} href={n.link} style={{ textDecoration: 'none', color: 'inherit' }}>{Inner}</Link>
            ) : (
              <div key={String(n._id)}>{Inner}</div>
            );
          })}
        </div>
      )}
    </div>
  );
}
