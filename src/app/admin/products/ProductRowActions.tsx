'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ProductRowActions({ id, isDeleted }: { id: string; isDeleted?: boolean }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  const del = async () => {
    if (!confirm('Delete this product? It will be moved to the Trash.')) return;
    setBusy(true);
    try {
      const res = await fetch(`/api/admin/products/${id}`, { method: 'DELETE' });
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
      const res = await fetch(`/api/admin/products/${id}/restore`, { method: 'POST' });
      const data = await res.json();
      if (!data.ok) alert('Failed: ' + (data.reason || 'unknown'));
      else router.refresh();
    } finally {
      setBusy(false);
    }
  };

  if (isDeleted) {
    return (
      <button
        type="button"
        onClick={restore}
        disabled={busy}
        style={{ background: 'transparent', border: 0, color: '#2ecc71', cursor: 'pointer', fontSize: '0.85rem' }}
      >
        {busy ? '…' : 'Restore'}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={del}
      disabled={busy}
      style={{ background: 'transparent', border: 0, color: '#D95F5F', cursor: 'pointer', fontSize: '0.85rem' }}
    >
      {busy ? '…' : 'Delete'}
    </button>
  );
}
