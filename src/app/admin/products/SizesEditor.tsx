'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';

const STANDARD_SIZES = ['6mm', '8mm', '10mm', '12mm'];
const PANEL_WIDTH = 210;

export default function SizesEditor({ id, sizes }: { id: string; sizes: string[] }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>(sizes);
  const [extra, setExtra] = useState<string[]>(sizes.filter((s) => !STANDARD_SIZES.includes(s)));
  const [custom, setCustom] = useState('');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const options = [...STANDARD_SIZES, ...extra];
  const dirty = selected.length !== sizes.length || selected.some((s) => !sizes.includes(s));

  const openPanel = () => {
    setSelected(sizes);
    setExtra(sizes.filter((s) => !STANDARD_SIZES.includes(s)));
    setCustom('');
    const r = triggerRef.current?.getBoundingClientRect();
    if (r) {
      const left = Math.max(8, Math.min(r.right - PANEL_WIDTH, window.innerWidth - PANEL_WIDTH - 8));
      setPos({ top: r.bottom + 4, left });
    }
    setOpen(true);
  };

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (panelRef.current?.contains(t) || triggerRef.current?.contains(t)) return;
      close();
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    window.addEventListener('scroll', close, true);
    window.addEventListener('resize', close);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('scroll', close, true);
      window.removeEventListener('resize', close);
    };
  }, [open, close]);

  const toggle = (sz: string) =>
    setSelected((cur) => (cur.includes(sz) ? cur.filter((x) => x !== sz) : [...cur, sz]));

  const addCustom = () => {
    const val = custom.trim();
    if (!val) return;
    if (!options.includes(val)) setExtra((cur) => [...cur, val]);
    setSelected((cur) => (cur.includes(val) ? cur : [...cur, val]));
    setCustom('');
  };

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
        setOpen(false);
        router.refresh();
      }
    } finally {
      setSaving(false);
    }
  };

  const hasSizes = sizes.length > 0;

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, justifyContent: 'flex-start' }}>
      <button
        ref={triggerRef}
        type="button"
        onClick={(e) => { e.stopPropagation(); open ? close() : openPanel(); }}
        title="Edit bracelet sizes"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '5px 10px', borderRadius: 8,
          border: `1px solid ${hasSizes ? '#C8956C' : 'rgba(0,0,0,0.15)'}`,
          background: hasSizes ? 'rgba(200,149,108,0.10)' : '#fff',
          color: hasSizes ? '#8A5A2B' : '#999',
          fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap',
        }}
      >
        {hasSizes ? sizes.join(', ') : 'Set sizes'}
        <i className="fa-solid fa-chevron-down" style={{ fontSize: '0.6rem', opacity: 0.7 }}></i>
      </button>
      {saved && !open && (
        <span style={{ color: '#1E8449', fontSize: '0.75rem', fontWeight: 700 }}>✓</span>
      )}

      {open && pos && typeof document !== 'undefined' && createPortal(
        <div
          ref={panelRef}
          style={{
            position: 'fixed', top: pos.top, left: pos.left, width: PANEL_WIDTH, zIndex: 3000,
            background: '#fff', border: '1px solid rgba(0,0,0,0.12)', borderRadius: 10,
            boxShadow: '0 8px 28px rgba(0,0,0,0.14)', padding: 12, textAlign: 'left',
          }}
        >
          <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#B0A38F', marginBottom: 8 }}>
            Bracelet sizes
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 10 }}>
            {options.map((sz) => {
              const on = selected.includes(sz);
              return (
                <label key={sz} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 6px', borderRadius: 6, cursor: 'pointer', background: on ? 'rgba(200,149,108,0.10)' : 'transparent' }}>
                  <input type="checkbox" checked={on} onChange={() => toggle(sz)} style={{ accentColor: '#C8956C', width: 15, height: 15, cursor: 'pointer' }} />
                  <span style={{ fontSize: '0.82rem', fontWeight: on ? 700 : 500, color: on ? '#8A5A2B' : '#2D1B0E' }}>{sz}</span>
                </label>
              );
            })}
          </div>

          <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
            <input
              type="text"
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addCustom(); } }}
              placeholder="e.g. 14mm"
              style={{ flex: 1, minWidth: 0, padding: '5px 8px', borderRadius: 6, border: '1px solid rgba(0,0,0,0.15)', fontSize: '0.78rem' }}
            />
            <button
              type="button"
              onClick={addCustom}
              style={{ padding: '5px 10px', borderRadius: 6, border: '1px solid rgba(0,0,0,0.15)', background: '#FAF6F1', color: '#8A5A2B', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
            >
              Add
            </button>
          </div>

          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <button
              type="button"
              onClick={save}
              disabled={saving || !dirty}
              style={{
                flex: 1, padding: '7px 12px', borderRadius: 8, border: 'none',
                background: dirty ? '#C8956C' : 'rgba(0,0,0,0.12)',
                color: dirty ? '#fff' : '#999',
                fontSize: '0.8rem', fontWeight: 700, cursor: saving ? 'wait' : dirty ? 'pointer' : 'default',
              }}
            >
              {saving ? 'Saving…' : 'Save'}
            </button>
            <button
              type="button"
              onClick={close}
              style={{ padding: '7px 12px', borderRadius: 8, border: '1px solid rgba(0,0,0,0.12)', background: '#fff', color: '#777', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }}
            >
              Cancel
            </button>
          </div>
        </div>,
        document.body,
      )}
    </div>
  );
}
