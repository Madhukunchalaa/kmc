'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function BlogRowActions({ id, isDeleted }: { id: string; isDeleted?: boolean }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const del = async () => {
    setBusy(true);
    setConfirm(false);
    try {
      const res = await fetch(`/api/admin/blogs/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (!data.ok) alert('Failed: ' + (data.reason || 'unknown'));
      else router.refresh();
    } finally {
      setBusy(false);
    }
  };

  const restore = async () => {
    setBusy(true);
    try {
      const res = await fetch(`/api/admin/blogs/${id}/restore`, { method: 'POST' });
      const data = await res.json();
      if (!data.ok) alert('Failed: ' + (data.reason || 'unknown'));
      else router.refresh();
    } finally {
      setBusy(false);
    }
  };

  /* ── Trash view: show Restore ── */
  if (isDeleted) {
    return (
      <button
        type="button"
        onClick={restore}
        disabled={busy}
        title="Restore this blog"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 5,
          background: '#E8F5E9', border: '1px solid #A5D6A7',
          color: '#1B5E20', borderRadius: 8,
          padding: '5px 12px', fontSize: '0.8rem', fontWeight: 600,
          cursor: busy ? 'not-allowed' : 'pointer', opacity: busy ? 0.6 : 1,
        }}
      >
        <i className="fa-solid fa-rotate-left" style={{ fontSize: '0.75rem' }}></i>
        {busy ? 'Restoring…' : 'Restore'}
      </button>
    );
  }

  /* ── Active blog: Edit + two-step Delete ── */
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      {/* Edit — gold pill */}
      <Link
        href={`/admin/blogs/${id}`}
        title="Edit blog"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 5,
          background: 'rgba(200,149,108,0.12)', border: '1px solid rgba(200,149,108,0.4)',
          color: '#A0622A', borderRadius: 8,
          padding: '5px 12px', fontSize: '0.8rem', fontWeight: 600,
          textDecoration: 'none', whiteSpace: 'nowrap',
        }}
      >
        <i className="fa-solid fa-pen-to-square" style={{ fontSize: '0.75rem' }}></i>
        Edit
      </Link>

      <span style={{ width: 1, height: 20, background: 'rgba(0,0,0,0.1)', display: 'inline-block' }} />

      {/* Delete — two-step confirm */}
      {!confirm ? (
        <button
          type="button"
          onClick={() => setConfirm(true)}
          title="Move to trash"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            background: 'transparent', border: '1px solid transparent',
            color: '#B0B0B0', borderRadius: 8,
            padding: '5px 10px', fontSize: '0.8rem', fontWeight: 500,
            cursor: 'pointer', transition: 'all 0.15s',
          }}
          onMouseEnter={e => {
            const t = e.currentTarget;
            t.style.background = '#FFF0F0';
            t.style.borderColor = '#FFBABA';
            t.style.color = '#C62828';
          }}
          onMouseLeave={e => {
            const t = e.currentTarget;
            t.style.background = 'transparent';
            t.style.borderColor = 'transparent';
            t.style.color = '#B0B0B0';
          }}
        >
          <i className="fa-solid fa-trash" style={{ fontSize: '0.72rem' }}></i>
          Delete
        </button>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <span style={{ fontSize: '0.75rem', color: '#C62828', fontWeight: 600, whiteSpace: 'nowrap' }}>
            Move to trash?
          </span>
          <button
            type="button"
            onClick={del}
            disabled={busy}
            style={{
              background: '#C62828', border: 'none',
              color: '#fff', borderRadius: 6,
              padding: '4px 10px', fontSize: '0.75rem', fontWeight: 700,
              cursor: busy ? 'not-allowed' : 'pointer',
            }}
          >
            {busy ? '…' : 'Yes'}
          </button>
          <button
            type="button"
            onClick={() => setConfirm(false)}
            disabled={busy}
            style={{
              background: '#eee', border: 'none',
              color: '#555', borderRadius: 6,
              padding: '4px 8px', fontSize: '0.75rem', fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            No
          </button>
        </div>
      )}
    </div>
  );
}
