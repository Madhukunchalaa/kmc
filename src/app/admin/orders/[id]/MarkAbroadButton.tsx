'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MarkAbroadButton({ orderId }: { orderId: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const mark = async () => {
    setBusy(true);
    setErr(null);
    try {
      const res = await fetch(`/api/admin/orders/${orderId}/shipping-payment`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ action: 'mark-international' }),
      });
      const data = await res.json();
      if (!data.ok) { setErr(data.reason || 'Failed'); setBusy(false); return; }
      router.refresh();
    } catch {
      setErr('Network error');
      setBusy(false);
    }
  };

  return (
    <div>
      <p style={{ fontSize: '0.82rem', color: '#888', margin: '0 0 10px' }}>
        This is currently marked as an <strong>Indian delivery</strong>. If it ships abroad, switch it to collect shipping separately.
      </p>
      <button type="button" onClick={mark} disabled={busy} className="btn-outline-custom" style={{ width: '100%', justifyContent: 'center' }}>
        <i className="fa-solid fa-earth-asia me-2"></i>
        <span>{busy ? 'Switching…' : 'Mark as abroad delivery'}</span>
      </button>
      {err && <p style={{ fontSize: '0.8rem', color: '#D95F5F', marginTop: 8 }}>{err}</p>}
    </div>
  );
}
