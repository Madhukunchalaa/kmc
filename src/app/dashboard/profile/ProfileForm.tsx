'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { formatPhone, validatePhone, getPhoneConfig } from '@/lib/phoneValidation';

export default function ProfileForm({ initial }: { initial: { name: string; phone: string; email: string; country: string } }) {
  const { update } = useSession();
  const [f, setF] = useState({ name: initial.name, phone: initial.phone, country: initial.country || 'IN' });
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const handlePhoneBlur = () => {
    if (f.phone.trim()) {
      const activeCountry = f.country || 'IN';
      setF(s => ({ ...s, phone: formatPhone(s.phone, activeCountry) }));
    }
  };

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMsg(null);

    let formattedPhone = f.phone;
    const activeCountry = f.country || 'IN';
    if (f.phone.trim()) {
      formattedPhone = formatPhone(f.phone, activeCountry);
      const validation = validatePhone(formattedPhone, activeCountry);
      if (!validation.isValid) {
        setMsg(validation.error || 'Invalid phone number');
        setSaving(false);
        return;
      }
    }

    try {
      const res = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...f, phone: formattedPhone }),
      });
      const data = await res.json();
      if (data.ok) {
        setMsg('Saved');
        setF(s => ({ ...s, phone: formattedPhone }));
        await update({ country: f.country });
      } else {
        setMsg(data.reason || 'Failed');
      }
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
        <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Country (auto-detected)</label>
        <input 
          value={
            f.country === 'IN' ? 'India' :
            f.country === 'US' ? 'United States' :
            f.country === 'UK' || f.country === 'GB' ? 'United Kingdom' :
            f.country === 'AU' ? 'Australia' :
            f.country === 'CA' ? 'Canada' :
            f.country === 'AE' ? 'United Arab Emirates' :
            f.country === 'SG' ? 'Singapore' :
            f.country === 'MY' ? 'Malaysia' :
            f.country || 'Other'
          } 
          readOnly 
          className="newsletter-input" 
          style={{ width: '100%', opacity: 0.6 }} 
        />
      </div>
      <div>
        <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Phone</label>
        <input 
          type="tel"
          value={f.phone} 
          onChange={(e) => setF((s) => ({ ...s, phone: e.target.value }))} 
          onBlur={handlePhoneBlur}
          placeholder={getPhoneConfig(f.country || 'IN').placeholder}
          className="newsletter-input" 
          style={{ width: '100%' }} 
        />
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
