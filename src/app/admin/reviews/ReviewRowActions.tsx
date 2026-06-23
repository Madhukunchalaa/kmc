'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ReviewRowActions({ id }: { id: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  const del = async () => {
    if (!confirm('Are you sure you want to delete this review? This action cannot be undone.')) return;
    setBusy(true);
    try {
      const res = await fetch(`/api/admin/reviews/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (!data.ok) {
        alert('Failed to delete review: ' + (data.reason || 'unknown reason'));
      } else {
        router.refresh();
      }
    } catch (err) {
      console.error(err);
      alert('Network or server error while deleting review.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <button
      type="button"
      onClick={del}
      disabled={busy}
      style={{
        background: 'transparent',
        border: 0,
        color: '#D95F5F',
        cursor: 'pointer',
        fontSize: '0.85rem',
        fontWeight: 600,
        padding: '4px 8px',
        transition: 'color 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = '#b03b3b';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = '#D95F5F';
      }}
    >
      {busy ? 'Deleting…' : 'Delete'}
    </button>
  );
}
