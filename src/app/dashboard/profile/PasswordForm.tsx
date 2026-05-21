'use client';

import { useState } from 'react';

export default function PasswordForm() {
  const [currentPassword, setCurrent] = useState('');
  const [newPassword, setNew] = useState('');
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMsg(null);
    try {
      const res = await fetch('/api/profile/password', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      const data = await res.json();
      if (data.ok) { setMsg({ ok: true, text: 'Password updated' }); setCurrent(''); setNew(''); }
      else setMsg({ ok: false, text: data.reason || 'Failed' });
    } catch { setMsg({ ok: false, text: 'Network error' }); }
    setSaving(false);
  };

  return (
    <form onSubmit={save} style={{ display: 'grid', gap: 12, marginTop: 12 }}>
      <div>
        <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Current password</label>
        <input required type="password" value={currentPassword} onChange={(e) => setCurrent(e.target.value)} className="newsletter-input" style={{ width: '100%' }} autoComplete="current-password" />
      </div>
      <div>
        <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>New password (min 8 chars)</label>
        <input required minLength={8} type="password" value={newPassword} onChange={(e) => setNew(e.target.value)} className="newsletter-input" style={{ width: '100%' }} autoComplete="new-password" />
      </div>
      <button type="submit" disabled={saving} className="btn-primary-custom" style={{ justifyContent: 'center' }}>
        <i className="fa-solid fa-key"></i><span>{saving ? 'Saving…' : 'Change password'}</span>
      </button>
      {msg && <p style={{ fontSize: '0.85rem', color: msg.ok ? '#4CAF50' : '#D95F5F' }}>{msg.text}</p>}
    </form>
  );
}
