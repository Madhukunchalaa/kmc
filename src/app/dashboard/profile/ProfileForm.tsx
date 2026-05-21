'use client';

import { useState } from 'react';

export default function ProfileForm({ initial }: { initial: { name: string; phone: string; email: string } }) {
  const [f, setF] = useState({ name: initial.name, phone: initial.phone });
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMsg(null);
    try {
      const res = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(f),
      });
      const data = await res.json();
      setMsg(data.ok ? 'Saved' : (data.reason || 'Failed'));
    } catch { setMsg('Network error'); }
    setSaving(false);
  };

  return (
    <form onSubmit={save} style={{ display: 'grid', gap: 12, marginTop: 12 }}>
      <div>
        <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Name</label>
        <input value={f.name} onChange={(e) => setF((s) => ({ ...s, name: e.target.value }))} className="newsletter-input" style={{ width: '100%' }} />
      </div>
      <div>
        <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Phone</label>
        <input value={f.phone} onChange={(e) => setF((s) => ({ ...s, phone: e.target.value }))} className="newsletter-input" style={{ width: '100%' }} />
      </div>
      <div>
        <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Email (read-only)</label>
        <input value={initial.email} readOnly className="newsletter-input" style={{ width: '100%', opacity: 0.6 }} />
      </div>
      <button type="submit" disabled={saving} className="btn-primary-custom" style={{ justifyContent: 'center' }}>
        <i className="fa-solid fa-save"></i><span>{saving ? 'Saving…' : 'Save'}</span>
      </button>
      {msg && <p style={{ fontSize: '0.85rem', color: msg === 'Saved' ? '#4CAF50' : '#D95F5F' }}>{msg}</p>}
    </form>
  );
}
