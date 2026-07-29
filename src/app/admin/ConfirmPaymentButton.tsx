'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Outcome {
  ok: boolean;
  status: 'confirmed' | 'already-paid' | 'not-paid' | 'no-cf-order' | 'not-found' | 'error';
  message: string;
}

export default function ConfirmPaymentButton({
  kind,
  id,
}: {
  kind: 'order' | 'booking';
  id: string;
}) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<Outcome | null>(null);

  const endpoint = `/api/admin/${kind === 'order' ? 'orders' : 'bookings'}/${id}/confirm-payment`;

  const confirm = async () => {
    setBusy(true);
    setResult(null);
    try {
      const res = await fetch(endpoint, { method: 'POST' });
      const data: Outcome = await res.json();
      setResult(data);
      if (data.ok && data.status === 'confirmed') router.refresh();
    } catch {
      setResult({ ok: false, status: 'error', message: 'Network error. Please try again.' });
    }
    setBusy(false);
  };

  // Green for a real success, amber for "not paid yet", red for errors.
  const tone = !result
    ? null
    : result.ok
      ? { fg: '#2B7A5C', bg: 'rgba(43,122,92,0.06)', bd: 'rgba(43,122,92,0.2)', icon: 'fa-circle-check' }
      : result.status === 'not-paid' || result.status === 'no-cf-order'
        ? { fg: '#B8702A', bg: 'rgba(184,112,42,0.06)', bd: 'rgba(184,112,42,0.25)', icon: 'fa-circle-info' }
        : { fg: '#D95F5F', bg: 'rgba(217,95,95,0.06)', bd: 'rgba(217,95,95,0.2)', icon: 'fa-circle-exclamation' };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <button
        type="button"
        onClick={confirm}
        disabled={busy}
        className="btn-primary-custom"
        style={{ justifyContent: 'center', width: '100%', background: '#2B7A5C', borderColor: '#2B7A5C', padding: '12px 20px', borderRadius: '30px' }}
      >
        <i className={`fa-solid ${busy ? 'fa-spinner fa-spin' : 'fa-circle-check'}`}></i>
        <span style={{ marginLeft: 8 }}>{busy ? 'Checking status…' : 'Confirm payment'}</span>
      </button>
      {result && tone && (
        <div style={{
          padding: '10px 14px',
          borderRadius: 8,
          fontSize: '0.85rem',
          fontWeight: 500,
          background: tone.bg,
          border: `1px solid ${tone.bd}`,
          color: tone.fg,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}>
          <i className={`fa-solid ${tone.icon}`}></i>
          {result.message}
        </div>
      )}
    </div>
  );
}
