'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function TestimonialRowActions({ id, isDeleted }: { id: string; isDeleted: boolean }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  const action = async (type: 'soft-delete' | 'restore' | 'hard-delete') => {
    const msg = type === 'hard-delete'
      ? 'Permanently delete this testimonial? This cannot be undone.'
      : type === 'soft-delete'
      ? 'Move this testimonial to trash?'
      : null;
    if (msg && !confirm(msg)) return;

    setBusy(true);
    try {
      let res: Response;
      if (type === 'soft-delete') {
        res = await fetch(`/api/admin/testimonials/${id}`, { method: 'DELETE' });
      } else {
        res = await fetch(`/api/admin/testimonials/${id}`, {
          method: 'PATCH',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ action: type === 'restore' ? 'restore' : 'delete' }),
        });
      }
      const data = await res.json();
      if (!data.ok) alert('Failed: ' + (data.reason || 'unknown'));
      else router.refresh();
    } finally {
      setBusy(false);
    }
  };

  if (isDeleted) {
    return (
      <div style={{ display: 'inline-flex', gap: 8 }}>
        <button type="button" onClick={() => action('restore')} disabled={busy}
          style={{ background: 'transparent', border: 0, color: '#4CAF50', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600 }}>
          {busy ? '…' : 'Restore'}
        </button>
        <button type="button" onClick={() => action('hard-delete')} disabled={busy}
          style={{ background: 'transparent', border: 0, color: '#D95F5F', cursor: 'pointer', fontSize: '0.85rem' }}>
          Delete Forever
        </button>
      </div>
    );
  }

  return (
    <button type="button" onClick={() => action('soft-delete')} disabled={busy}
      style={{ background: 'transparent', border: 0, color: '#D95F5F', cursor: 'pointer', fontSize: '0.85rem' }}>
      {busy ? '…' : 'Delete'}
    </button>
  );
}
