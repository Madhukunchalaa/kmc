'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ServiceRowActions({ id }: { id: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  const del = async () => {
    if (!confirm('Delete this service?')) return;
    setBusy(true);
    try {
      const res = await fetch(`/api/admin/services/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (!data.ok) alert('Failed: ' + (data.reason || 'unknown'));
      else router.refresh();
    } finally { setBusy(false); }
  };

  return <button type="button" onClick={del} disabled={busy} style={{ background: 'transparent', border: 0, color: '#D95F5F', cursor: 'pointer', fontSize: '0.85rem' }}>{busy ? '…' : 'Delete'}</button>;
}
