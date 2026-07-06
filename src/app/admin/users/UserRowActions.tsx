'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function UserRowActions({ id, active }: { id: string; active: boolean }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  const update = async (body: Record<string, unknown>) => {
    setBusy(true);
    try {
      const res = await fetch(`/api/admin/users/${id}`, { method: 'PATCH', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
      const data = await res.json();
      if (!data.ok) alert('Failed: ' + (data.reason || 'unknown'));
      else router.refresh();
    } finally { setBusy(false); }
  };

  return (
    <div className="d-flex gap-2 justify-content-end">
      <button type="button" onClick={() => update({ active: !active })} disabled={busy} style={{ background: 'transparent', border: 0, color: active ? '#D95F5F' : '#4CAF50', cursor: 'pointer', fontSize: '0.85rem' }}>
        {active ? 'Disable' : 'Enable'}
      </button>
    </div>
  );
}
