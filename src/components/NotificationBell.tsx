'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

interface AppNotification {
  _id: string;
  type: 'order' | 'booking' | 'system';
  title: string;
  message: string;
  link?: string;
  read: boolean;
  createdAt: string;
}

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

const TYPE_ICON: Record<string, string> = {
  order: 'fa-solid fa-bag-shopping',
  booking: 'fa-solid fa-calendar-check',
  system: 'fa-solid fa-circle-info',
};

export default function NotificationBell() {
  const router = useRouter();
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  async function fetchNotifications() {
    try {
      const res = await fetch('/api/notifications');
      if (!res.ok) return;
      const data = await res.json();
      if (data.ok) {
        setNotifications(data.notifications);
        setUnreadCount(data.unreadCount);
      }
    } catch {/* ignore */}
  }

  useEffect(() => {
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  async function handleOpen() {
    setOpen((v) => !v);
    if (!open) fetchNotifications();
  }

  async function handleNotificationClick(n: AppNotification) {
    if (!n.read) {
      setNotifications((prev) => prev.map((x) => x._id === n._id ? { ...x, read: true } : x));
      setUnreadCount((c) => Math.max(0, c - 1));
      fetch(`/api/notifications/${n._id}/read`, { method: 'PATCH' }).catch(() => {});
    }
    setOpen(false);
    if (n.link) router.push(n.link);
  }

  async function markAllRead() {
    setLoading(true);
    try {
      await fetch('/api/notifications/read-all', { method: 'POST' });
      setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
      setUnreadCount(0);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div ref={dropdownRef} style={{ position: 'relative' }}>
      <button
        type="button"
        onClick={handleOpen}
        aria-label={`Notifications${unreadCount > 0 ? ` (${unreadCount} unread)` : ''}`}
        style={{
          background: 'transparent',
          border: 0,
          cursor: 'pointer',
          color: 'inherit',
          padding: '6px 8px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <i className="fa-solid fa-bell" style={{ fontSize: '1.1rem' }}></i>
        {unreadCount > 0 && (
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 2,
              right: 0,
              background: '#D95F5F',
              color: '#fff',
              borderRadius: 999,
              fontSize: '0.6rem',
              minWidth: 16,
              height: 16,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 4px',
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            {unreadCount > 99 ? '99+' : unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 10px)',
            right: 0,
            width: 320,
            background: '#fff',
            color: '#2D1B0E',
            borderRadius: 14,
            boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
            zIndex: 1100,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 16px',
              borderBottom: '1px solid rgba(0,0,0,0.07)',
            }}
          >
            <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>
              Notifications
              {unreadCount > 0 && (
                <span
                  style={{
                    marginLeft: 8,
                    background: '#C8956C22',
                    color: '#C8956C',
                    borderRadius: 999,
                    fontSize: '0.7rem',
                    padding: '2px 7px',
                    fontWeight: 700,
                  }}
                >
                  {unreadCount} new
                </span>
              )}
            </span>
            {unreadCount > 0 && (
              <button
                type="button"
                onClick={markAllRead}
                disabled={loading}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#C8956C',
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  padding: 0,
                  fontWeight: 600,
                }}
              >
                Mark all read
              </button>
            )}
          </div>

          <div style={{ maxHeight: 340, overflowY: 'auto' }}>
            {notifications.length === 0 ? (
              <div style={{ padding: '24px 16px', textAlign: 'center', color: '#999', fontSize: '0.88rem' }}>
                <i className="fa-solid fa-bell-slash" style={{ fontSize: '1.4rem', marginBottom: 8, display: 'block', opacity: 0.4 }}></i>
                No notifications yet
              </div>
            ) : (
              notifications.slice(0, 10).map((n) => (
                <button
                  key={n._id}
                  type="button"
                  onClick={() => handleNotificationClick(n)}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 10,
                    width: '100%',
                    padding: '11px 16px',
                    background: n.read ? 'transparent' : '#FDF8F4',
                    border: 'none',
                    borderBottom: '1px solid rgba(0,0,0,0.05)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'background 0.15s',
                  }}
                >
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 10,
                      background: n.type === 'booking' ? '#C8956C22' : n.type === 'order' ? '#3F8EFC22' : '#88888822',
                      color: n.type === 'booking' ? '#C8956C' : n.type === 'order' ? '#3F8EFC' : '#888',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontSize: '0.85rem',
                    }}
                  >
                    <i className={TYPE_ICON[n.type] ?? TYPE_ICON.system}></i>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontWeight: n.read ? 500 : 700,
                        fontSize: '0.85rem',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        color: '#2D1B0E',
                      }}
                    >
                      {n.title}
                    </div>
                    <div
                      style={{
                        fontSize: '0.78rem',
                        color: '#888',
                        marginTop: 2,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {n.message}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: '#bbb', marginTop: 3 }}>{timeAgo(n.createdAt)}</div>
                  </div>
                  {!n.read && (
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: '#C8956C',
                        flexShrink: 0,
                        marginTop: 5,
                      }}
                    />
                  )}
                </button>
              ))
            )}
          </div>

          <div style={{ padding: '10px 16px', borderTop: '1px solid rgba(0,0,0,0.07)', textAlign: 'center' }}>
            <a
              href="/dashboard/notifications"
              onClick={() => setOpen(false)}
              style={{ fontSize: '0.82rem', color: '#C8956C', fontWeight: 600, textDecoration: 'none' }}
            >
              View all notifications →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
