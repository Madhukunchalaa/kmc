'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const STATUSES = ['pending', 'approved', 'rejected', 'completed', 'cancelled'] as const;

export default function BookingDecisionForm({ bookingId, current, note }: { bookingId: string; current: string; note: string }) {
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
      const res = await fetch(`/api/admin/bookings/${bookingId}`, {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ status, adminNote }),
      });
      const data = await res.json();
      if (!data.ok) setMsg(data.reason || 'Failed');
      else { setMsg('Saved · customer notified'); router.refresh(); }
    } catch { setMsg('Network error'); }
    setSaving(false);
  };

  const quickAction = async (next: 'approved' | 'rejected') => {
    setStatus(next);
    setSaving(true);
    setMsg(null);
    try {
      const res = await fetch(`/api/admin/bookings/${bookingId}`, {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ status: next, adminNote }),
      });
      const data = await res.json();
      if (!data.ok) setMsg(data.reason || 'Failed');
      else { setMsg(`Booking ${next} · customer notified`); router.refresh(); }
    } catch { setMsg('Network error'); }
    setSaving(false);
  };

  return (
    <form onSubmit={save} style={{ display: 'grid', gap: 10 }}>
      <div className="d-flex gap-2">
        <button type="button" onClick={() => quickAction('approved')} disabled={saving} className="btn-primary-custom" style={{ flex: 1, justifyContent: 'center', background: '#4CAF50' }}>
          <i className="fa-solid fa-check"></i><span>Approve</span>
        </button>
        <button type="button" onClick={() => quickAction('rejected')} disabled={saving} className="btn-primary-custom" style={{ flex: 1, justifyContent: 'center', background: '#D95F5F' }}>
          <i className="fa-solid fa-xmark"></i><span>Reject</span>
        </button>
      </div>
      <hr />
      <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Set status manually</label>
      <select value={status} onChange={(e) => setStatus(e.target.value)} className="newsletter-input" style={{ width: '100%' }}>
        {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
      </select>
      <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Note for customer (optional)</label>
      <textarea value={adminNote} onChange={(e) => setNote(e.target.value)} rows={3} className="newsletter-input" style={{ width: '100%' }} placeholder="e.g. Confirmed — see you at 4 PM!" />
      <button type="submit" className="btn-outline-custom" disabled={saving} style={{ justifyContent: 'center' }}>
        <i className="fa-solid fa-save"></i><span>{saving ? 'Saving…' : 'Save manual status'}</span>
      </button>
      {msg && <p style={{ fontSize: '0.85rem', color: msg.startsWith('Network') || msg.match(/fail/i) ? '#D95F5F' : '#4CAF50' }}>{msg}</p>}
    </form>
  );
}
