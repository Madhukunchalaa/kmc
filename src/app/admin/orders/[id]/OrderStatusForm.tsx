'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const STATUSES = ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'] as const;

export default function OrderStatusForm({ orderId, current, note }: { orderId: string; current: string; note: string }) {
  const router = useRouter();
  const [status, setStatus] = useState(current);
  const [adminNote, setNote] = useState(note);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMsg(null);
    try {
      const res = await fetch(`/api/admin/orders/${orderId}`, {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ status, adminNote }),
      });
      const data = await res.json();
      if (!data.ok) setMsg(data.reason || 'Failed');
      else { setMsg('Saved'); router.refresh(); }
    } catch { setMsg('Network error'); }
    setSaving(false);
  };

  return (
    <form onSubmit={save} style={{ display: 'grid', gap: 10 }}>
      <select value={status} onChange={(e) => setStatus(e.target.value)} className="newsletter-input" style={{ width: '100%' }}>
        {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
      </select>
      <textarea value={adminNote} onChange={(e) => setNote(e.target.value)} rows={3} placeholder="Internal note (optional)" className="newsletter-input" style={{ width: '100%' }} />
      <button type="submit" className="btn-primary-custom" disabled={saving} style={{ justifyContent: 'center' }}>
        <i className="fa-solid fa-save"></i>
        <span>{saving ? 'Saving…' : 'Save'}</span>
      </button>
      {msg && <p style={{ fontSize: '0.85rem', color: msg === 'Saved' ? '#4CAF50' : '#D95F5F' }}>{msg}</p>}
    </form>
  );
}
