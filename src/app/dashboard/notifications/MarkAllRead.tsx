'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function MarkAllRead() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  const mark = async () => {
    setBusy(true);
    try {
      await fetch('/api/notifications/read-all', { method: 'POST' });
      router.refresh();
    } finally { setBusy(false); }
  };
  return (
    <button type="button" onClick={mark} disabled={busy} className="btn-outline-custom" style={{ fontSize: '0.85rem' }}>
      <i className="fa-solid fa-check-double"></i><span>{busy ? '…' : 'Mark all read'}</span>
    </button>
  );
}
