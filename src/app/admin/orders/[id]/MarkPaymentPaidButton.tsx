'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MarkPaymentPaidButton({ orderId }: { orderId: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const markPaid = async () => {
    setBusy(true);
    setMsg(null);
    try {
      const res = await fetch(`/api/admin/orders/${orderId}/mark-paid`, { method: 'POST' });
      const data = await res.json();
      if (!data.ok) {
        setMsg({ ok: false, text: data.reason || 'Failed' });
      } else {
        setMsg({ ok: true, text: 'Marked as paid ✓ — confirmation email sent' });
        router.refresh();
      }
    } catch {
      setMsg({ ok: false, text: 'Network error' });
    }
    setBusy(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <button
        type="button"
        onClick={markPaid}
        disabled={busy}
        className="btn-primary-custom"
        style={{ justifyContent: 'center', width: '100%', background: '#2B7A5C', borderColor: '#2B7A5C', padding: '12px 20px', borderRadius: '30px' }}
      >
        <i className="fa-solid fa-circle-check"></i>
        <span style={{ marginLeft: 8 }}>{busy ? 'Saving…' : 'Mark payment as paid'}</span>
      </button>
      {msg && (
        <div style={{
          padding: '10px 14px',
          borderRadius: 8,
          fontSize: '0.85rem',
          fontWeight: 500,
          background: msg.ok ? 'rgba(43,122,92,0.06)' : 'rgba(217,95,95,0.06)',
          border: `1px solid ${msg.ok ? 'rgba(43,122,92,0.2)' : 'rgba(217,95,95,0.2)'}`,
          color: msg.ok ? '#2B7A5C' : '#D95F5F',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}>
          <i className={`fa-solid ${msg.ok ? 'fa-circle-check' : 'fa-circle-exclamation'}`}></i>
          {msg.text}
        </div>
      )}
    </div>
  );
}
