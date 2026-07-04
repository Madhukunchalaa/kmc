'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ReviewRowActions({ id, approved }: { id: string; approved: boolean }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  const toggle = async () => {
    setBusy(true);
    try {
      const res = await fetch(`/api/admin/reviews/${id}`, {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ approved: !approved }),
      });
      const data = await res.json();
      if (!data.ok) alert('Failed: ' + (data.reason || 'unknown'));
      else router.refresh();
    } finally { setBusy(false); }
  };

  const del = async () => {
    if (!confirm('Permanently delete this review? This cannot be undone.')) return;
    setBusy(true);
    try {
      const res = await fetch(`/api/admin/reviews/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (!data.ok) alert('Failed to delete: ' + (data.reason || 'unknown'));
      else router.refresh();
    } catch { alert('Network error.'); }
    finally { setBusy(false); }
  };

  return (
    <div style={{ display: 'inline-flex', gap: 8, alignItems: 'center' }}>
      <button
        type="button"
        onClick={toggle}
        disabled={busy}
        title={approved ? 'Hide this review from the product page' : 'Show this review on the product page'}
        style={{
          padding: '4px 10px', borderRadius: 20, border: 'none', fontSize: '0.78rem',
          fontWeight: 600, cursor: 'pointer',
          background: approved ? 'rgba(72,199,116,0.12)' : 'rgba(0,0,0,0.06)',
          color: approved ? '#27ae60' : '#aaa',
        }}>
        {busy ? '…' : approved ? '● Visible' : '○ Hidden'}
      </button>
      <button type="button" onClick={del} disabled={busy}
        style={{ background: 'transparent', border: 0, color: '#D95F5F', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600 }}>
        Delete
      </button>
    </div>
  );
}
