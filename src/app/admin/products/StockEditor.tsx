'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function StockEditor({ id, stock }: { id: string; stock: number }) {
  const router = useRouter();
  const [val, setVal] = useState<number>(stock);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const changed = val !== stock;

  const save = async () => {
    if (!changed || saving) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/products/${id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ stock: val }),
      });
      const data = await res.json();
      if (!data.ok) {
        alert('Failed to update stock: ' + (data.reason || 'unknown'));
      } else {
        setSaved(true);
        setTimeout(() => setSaved(false), 1500);
        router.refresh();
      }
    } catch {
      alert('Network error updating stock');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, justifyContent: 'flex-end' }}>
      <input
        type="number"
        min={0}
        value={val}
        onChange={(e) => setVal(Number(e.target.value))}
        onKeyDown={(e) => { if (e.key === 'Enter') save(); }}
        style={{
          width: 60, padding: '4px 6px', borderRadius: 6,
          border: `1px solid ${changed ? 'var(--primary,#C8956C)' : 'rgba(0,0,0,0.15)'}`,
          textAlign: 'right', fontSize: '0.85rem',
        }}
      />
      <button
        type="button"
        onClick={save}
        disabled={!changed || saving}
        title={changed ? 'Update stock' : 'No change'}
        style={{
          border: 'none', borderRadius: 6, padding: '5px 9px',
          fontSize: '0.72rem', fontWeight: 700,
          cursor: changed && !saving ? 'pointer' : 'default',
          background: saved ? '#4CAF50' : changed ? 'var(--primary,#C8956C)' : '#eee',
          color: saved || changed ? '#fff' : '#aaa',
          whiteSpace: 'nowrap',
        }}
      >
        {saving ? '…' : saved ? '✓' : 'Save'}
      </button>
    </div>
  );
}
