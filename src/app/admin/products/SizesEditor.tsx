'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const STANDARD_SIZES = ['6mm', '8mm', '10mm', '12mm'];

export default function SizesEditor({ id, sizes }: { id: string; sizes: string[] }) {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>(sizes);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const dirty =
    selected.length !== sizes.length || selected.some((s) => !sizes.includes(s));

  const toggle = (sz: string) =>
    setSelected((cur) => (cur.includes(sz) ? cur.filter((x) => x !== sz) : [...cur, sz]));

  const save = async () => {
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/products/${id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ sizes: selected }),
      });
      const data = await res.json();
      if (data.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 1800);
        router.refresh();
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', gap: 4 }}>
        {STANDARD_SIZES.map((sz) => {
          const on = selected.includes(sz);
          return (
            <button
              key={sz}
              type="button"
              onClick={() => toggle(sz)}
              title={on ? `Remove ${sz}` : `Add ${sz}`}
              style={{
                padding: '3px 8px',
                borderRadius: 14,
                border: `1.5px solid ${on ? '#8E44AD' : 'rgba(0,0,0,0.15)'}`,
                background: on ? '#8E44AD' : 'transparent',
                color: on ? '#fff' : '#999',
                fontSize: '0.68rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {sz}
            </button>
          );
        })}
      </div>
      {dirty && (
        <button
          type="button"
          onClick={save}
          disabled={saving}
          style={{
            padding: '3px 10px',
            borderRadius: 14,
            border: 'none',
            background: '#8E44AD',
            color: '#fff',
            fontSize: '0.7rem',
            fontWeight: 700,
            cursor: saving ? 'wait' : 'pointer',
          }}
        >
          {saving ? '…' : 'Save'}
        </button>
      )}
      {saved && !dirty && (
        <span style={{ color: '#1E8449', fontSize: '0.75rem', fontWeight: 700 }}>✓</span>
      )}
    </div>
  );
}
