'use client';

import { useState, useEffect, useRef } from 'react';

interface Reel {
  _id: string;
  title: string;
  caption: string;
  src: string;
  image: string;
  order: number;
  active: boolean;
}

const EMPTY: Omit<Reel, '_id'> = { title: '', caption: '', src: '', image: '', order: 0, active: true };
const MAX_VIDEO_MB = 10;
const MAX_VIDEO_BYTES = MAX_VIDEO_MB * 1024 * 1024;

export default function AdminReelsPage() {
  const [reels, setReels] = useState<Reel[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [modal, setModal] = useState<{ mode: 'add' | 'edit'; reel: Reel | null } | null>(null);
  const [form, setForm] = useState<Omit<Reel, '_id'>>(EMPTY);
  const [err, setErr] = useState('');
  const [reordering, setReordering] = useState(false);

  // Upload states
  const [videoUploading, setVideoUploading] = useState(false);
  const [thumbUploading, setThumbUploading] = useState(false);
  const [uploadErr, setUploadErr] = useState('');

  // Drag state
  const dragIdx = useRef<number | null>(null);
  const [dragOver, setDragOver] = useState<number | null>(null);

  const videoInputRef = useRef<HTMLInputElement>(null);
  const thumbInputRef = useRef<HTMLInputElement>(null);

  // ── Fetch ──────────────────────────────────────────────────────────────────
  const load = async () => {
    setLoading(true);
    try {
      const r = await fetch('/api/admin/reels');
      const d = await r.json();
      if (d.ok) setReels(d.reels);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  // ── Helpers ────────────────────────────────────────────────────────────────
  const setField = (k: keyof typeof EMPTY, v: string | number | boolean) =>
    setForm((f) => ({ ...f, [k]: v }));

  const openAdd = () => {
    setForm({ ...EMPTY, order: reels.length });
    setErr(''); setUploadErr('');
    setModal({ mode: 'add', reel: null });
  };

  const openEdit = (reel: Reel) => {
    setForm({ title: reel.title, caption: reel.caption, src: reel.src, image: reel.image, order: reel.order, active: reel.active });
    setErr(''); setUploadErr('');
    setModal({ mode: 'edit', reel });
  };

  const closeModal = () => setModal(null);

  // ── Drag-to-reorder ────────────────────────────────────────────────────────
  const onDragStart = (idx: number) => { dragIdx.current = idx; };

  const onDragOver = (e: React.DragEvent, idx: number) => {
    e.preventDefault();
    setDragOver(idx);
  };

  const onDrop = async (dropIdx: number) => {
    const fromIdx = dragIdx.current;
    if (fromIdx === null || fromIdx === dropIdx) {
      setDragOver(null);
      dragIdx.current = null;
      return;
    }
    const next = [...reels];
    const [moved] = next.splice(fromIdx, 1);
    next.splice(dropIdx, 0, moved);
    setReels(next);
    setDragOver(null);
    dragIdx.current = null;

    // Persist new order
    setReordering(true);
    try {
      await fetch('/api/admin/reels', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: next.map(r => r._id) }),
      });
    } finally {
      setReordering(false);
    }
  };

  const onDragEnd = () => { setDragOver(null); dragIdx.current = null; };

  // ── Video upload ───────────────────────────────────────────────────────────
  const handleVideoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadErr('');
    if (file.size > MAX_VIDEO_BYTES) {
      setUploadErr(`Video is too large (${(file.size / 1024 / 1024).toFixed(1)} MB). Max is ${MAX_VIDEO_MB} MB.`);
      if (videoInputRef.current) videoInputRef.current.value = '';
      return;
    }
    setVideoUploading(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch('/api/admin/upload-video', { method: 'POST', body: fd });
      const data = await res.json();
      if (!data.ok) setUploadErr(data.reason || 'Video upload failed');
      else setField('src', data.url);
    } catch { setUploadErr('Video upload failed. Please try again.'); }
    finally {
      setVideoUploading(false);
      if (videoInputRef.current) videoInputRef.current.value = '';
    }
  };

  // ── Thumbnail upload ───────────────────────────────────────────────────────
  const handleThumbUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadErr('');
    setThumbUploading(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
      const data = await res.json();
      if (!data.ok) setUploadErr(data.reason || 'Thumbnail upload failed');
      else setField('image', data.url);
    } catch { setUploadErr('Thumbnail upload failed. Please try again.'); }
    finally {
      setThumbUploading(false);
      if (thumbInputRef.current) thumbInputRef.current.value = '';
    }
  };

  // ── Save ───────────────────────────────────────────────────────────────────
  const handleSave = async () => {
    setErr('');
    if (!form.title.trim()) { setErr('Title is required.'); return; }
    if (!form.src.trim()) { setErr('Please upload a video first.'); return; }
    setSaving(true);
    try {
      let res: Response;
      if (modal?.mode === 'add') {
        res = await fetch('/api/admin/reels', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      } else {
        res = await fetch(`/api/admin/reels/${modal!.reel!._id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      }
      const d = await res.json();
      if (!d.ok) { setErr(d.reason || 'Save failed'); return; }
      await load();
      closeModal();
    } catch { setErr('Save failed. Please try again.'); }
    finally { setSaving(false); }
  };

  // ── Delete ─────────────────────────────────────────────────────────────────
  const handleDelete = async (id: string) => {
    if (!confirm('Delete this reel? This cannot be undone.')) return;
    setDeleting(id);
    try {
      await fetch(`/api/admin/reels/${id}`, { method: 'DELETE' });
      await load();
    } finally { setDeleting(null); }
  };

  // ── Toggle active ──────────────────────────────────────────────────────────
  const toggleActive = async (reel: Reel) => {
    await fetch(`/api/admin/reels/${reel._id}`, {
      method: 'PUT', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ active: !reel.active }),
    });
    await load();
  };

  // ── Styles ─────────────────────────────────────────────────────────────────
  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '10px 14px', borderRadius: 10,
    border: '1px solid rgba(0,0,0,0.12)', fontSize: '0.9rem',
    outline: 'none', boxSizing: 'border-box', background: '#fafafa',
  };
  const labelStyle: React.CSSProperties = { fontSize: '0.82rem', fontWeight: 600, color: '#666', marginBottom: 4, display: 'block' };
  const btnPrimary: React.CSSProperties = {
    background: '#C8956C', color: '#fff', border: 'none', borderRadius: 10,
    padding: '10px 22px', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem',
  };
  const btnOutline: React.CSSProperties = {
    background: 'transparent', color: '#C8956C', border: '1.5px solid #C8956C',
    borderRadius: 10, padding: '8px 18px', fontWeight: 600, cursor: 'pointer', fontSize: '0.85rem',
  };

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700, color: '#2D1B0E' }}>
            <i className="fa-solid fa-film me-2" style={{ color: '#C8956C' }} />
            Homepage Reels
          </h1>
          <p style={{ margin: '4px 0 0', color: '#888', fontSize: '0.85rem' }}>
            Drag rows to reorder • Changes reflect on the website instantly
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {reordering && (
            <span style={{ fontSize: '0.82rem', color: '#C8956C', display: 'flex', alignItems: 'center', gap: 6 }}>
              <i className="fa-solid fa-spinner fa-spin" /> Saving order…
            </span>
          )}
          <button style={btnPrimary} onClick={openAdd}>
            <i className="fa-solid fa-plus me-2" />Add Reel
          </button>
        </div>
      </div>

      {/* Reels table */}
      <div style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.06)' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#888' }}>
            <i className="fa-solid fa-spinner fa-spin" style={{ fontSize: '2rem' }} />
            <p style={{ marginTop: 12 }}>Loading reels…</p>
          </div>
        ) : reels.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#888' }}>
            <i className="fa-solid fa-film" style={{ fontSize: '2.5rem', opacity: 0.3 }} />
            <p style={{ marginTop: 12 }}>No reels yet. Click "Add Reel" to get started.</p>
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', minWidth: 680 }}>
              <thead>
                <tr style={{ background: '#FAF6F1', borderBottom: '2px solid rgba(0,0,0,0.07)' }}>
                  <th style={{ padding: '10px 12px', width: 36 }}></th>
                  <th style={{ padding: '10px 14px', width: 40, textAlign: 'left', color: '#888', fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>#</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#888', fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Thumbnail</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#888', fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Title & Caption</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#888', fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Video</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#888', fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Status</th>
                  <th style={{ padding: '10px 14px', textAlign: 'right', color: '#888', fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reels.map((reel, idx) => (
                  <tr
                    key={reel._id}
                    draggable
                    onDragStart={() => onDragStart(idx)}
                    onDragOver={(e) => onDragOver(e, idx)}
                    onDrop={() => onDrop(idx)}
                    onDragEnd={onDragEnd}
                    style={{
                      borderBottom: '1px solid rgba(0,0,0,0.05)',
                      background: dragOver === idx ? 'rgba(200,149,108,0.08)' : dragIdx.current === idx ? 'rgba(200,149,108,0.04)' : '#fff',
                      transition: 'background 0.15s',
                      opacity: dragIdx.current === idx ? 0.5 : 1,
                      outline: dragOver === idx ? '2px dashed #C8956C' : 'none',
                    }}
                  >
                    {/* Drag handle */}
                    <td style={{ padding: '12px 8px 12px 14px', color: '#ccc', cursor: 'grab', fontSize: '1rem', userSelect: 'none' }}>
                      <i className="fa-solid fa-grip-vertical" />
                    </td>
                    <td style={{ padding: '12px 14px', color: '#aaa', fontWeight: 700, fontSize: '0.85rem' }}>{idx + 1}</td>
                    <td style={{ padding: '12px 14px' }}>
                      {reel.image ? (
                        <img src={reel.image} alt={reel.title}
                          style={{ width: 44, height: 66, objectFit: 'cover', borderRadius: 8, border: '1px solid rgba(0,0,0,0.1)', display: 'block' }} />
                      ) : (
                        <div style={{ width: 44, height: 66, borderRadius: 8, background: '#f0e8e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className="fa-regular fa-image" style={{ color: '#ccc' }} />
                        </div>
                      )}
                    </td>
                    <td style={{ padding: '12px 14px', maxWidth: 240 }}>
                      <div style={{ fontWeight: 600, color: '#2D1B0E', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{reel.title}</div>
                      <div style={{ color: '#999', fontSize: '0.8rem', marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {reel.caption || <em>No caption</em>}
                      </div>
                    </td>
                    <td style={{ padding: '12px 14px' }}>
                      {reel.src ? (
                        <a href={reel.src} target="_blank" rel="noopener noreferrer"
                          style={{ color: '#C8956C', fontSize: '0.82rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 5, whiteSpace: 'nowrap' }}>
                          <i className="fa-solid fa-circle-play" /> Preview
                        </a>
                      ) : (
                        <span style={{ color: '#ccc', fontSize: '0.82rem' }}>No video</span>
                      )}
                    </td>
                    <td style={{ padding: '12px 14px' }}>
                      <button
                        onClick={() => toggleActive(reel)}
                        style={{
                          padding: '4px 12px', borderRadius: 20, border: 'none',
                          fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap',
                          background: reel.active ? 'rgba(72,199,116,0.12)' : 'rgba(0,0,0,0.06)',
                          color: reel.active ? '#27ae60' : '#aaa',
                        }}>
                        {reel.active ? '● Active' : '○ Hidden'}
                      </button>
                    </td>
                    <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                      <div style={{ display: 'inline-flex', gap: 8 }}>
                        <button onClick={() => openEdit(reel)}
                          style={{ ...btnOutline, padding: '5px 12px', fontSize: '0.8rem' }}>
                          <i className="fa-solid fa-pen me-1" />Edit
                        </button>
                        <button
                          onClick={() => handleDelete(reel._id)}
                          disabled={deleting === reel._id}
                          style={{ ...btnOutline, borderColor: '#e55', color: '#e55', padding: '5px 12px', fontSize: '0.8rem' }}>
                          {deleting === reel._id
                            ? <i className="fa-solid fa-spinner fa-spin" />
                            : <><i className="fa-solid fa-trash me-1" />Delete</>}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ padding: '10px 16px', borderTop: '1px solid rgba(0,0,0,0.05)', background: '#FCFBF9', fontSize: '0.78rem', color: '#bbb', display: 'flex', alignItems: 'center', gap: 6 }}>
              <i className="fa-solid fa-grip-vertical" /> Drag rows to reorder — order saves automatically
            </div>
          </div>
        )}
      </div>

      {/* ── Modal ── */}
      {modal && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 1000,
          background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem',
        }}>
          <div style={{
            background: '#fff', borderRadius: 20, padding: '2rem',
            width: '100%', maxWidth: 560, maxHeight: '90vh', overflowY: 'auto',
            boxShadow: '0 24px 80px rgba(0,0,0,0.3)',
          }}>
            <h2 style={{ margin: '0 0 1.5rem', fontSize: '1.2rem', fontWeight: 700, color: '#2D1B0E' }}>
              {modal.mode === 'add' ? '➕ Add New Reel' : '✏️ Edit Reel'}
            </h2>

            <div style={{ display: 'grid', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Title *</label>
                <input value={form.title} onChange={e => setField('title', e.target.value)}
                  placeholder="e.g. Crystal Cleansing Ritual" style={inputStyle} />
              </div>

              <div>
                <label style={labelStyle}>Caption</label>
                <textarea value={form.caption} onChange={e => setField('caption', e.target.value)}
                  rows={2} placeholder="Short description shown under the reel title…"
                  style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }} />
              </div>

              {/* Video Upload */}
              <div>
                <label style={labelStyle}>
                  Video File * &nbsp;
                  <span style={{ fontWeight: 400, color: '#C8956C', fontSize: '0.78rem' }}>
                    MP4 / WebM / MOV — max {MAX_VIDEO_MB} MB
                  </span>
                </label>
                <input type="file" ref={videoInputRef} accept="video/mp4,video/webm,video/quicktime"
                  style={{ display: 'none' }} onChange={handleVideoUpload} />
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
                  <button type="button" onClick={() => videoInputRef.current?.click()} disabled={videoUploading}
                    style={{ ...btnPrimary, display: 'flex', alignItems: 'center', gap: 8, opacity: videoUploading ? 0.7 : 1 }}>
                    <i className={`fa-solid ${videoUploading ? 'fa-spinner fa-spin' : 'fa-cloud-arrow-up'}`} />
                    {videoUploading ? 'Uploading…' : form.src ? 'Replace Video' : 'Upload Video'}
                  </button>
                  {form.src && (
                    <a href={form.src} target="_blank" rel="noopener noreferrer"
                      style={{ color: '#C8956C', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 5 }}>
                      <i className="fa-solid fa-play-circle" /> Preview
                    </a>
                  )}
                </div>
                {form.src && (
                  <div style={{ marginTop: 8, fontSize: '0.78rem', color: '#27ae60' }}>
                    <i className="fa-solid fa-check-circle me-1" />Video uploaded successfully
                  </div>
                )}
              </div>

              {/* Thumbnail Upload */}
              <div>
                <label style={labelStyle}>Thumbnail / Fallback Image</label>
                <input type="file" ref={thumbInputRef} accept="image/*"
                  style={{ display: 'none' }} onChange={handleThumbUpload} />
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
                  <button type="button" onClick={() => thumbInputRef.current?.click()} disabled={thumbUploading}
                    style={{ ...btnOutline, display: 'flex', alignItems: 'center', gap: 8, opacity: thumbUploading ? 0.7 : 1 }}>
                    <i className={`fa-solid ${thumbUploading ? 'fa-spinner fa-spin' : 'fa-image'}`} />
                    {thumbUploading ? 'Uploading…' : form.image ? 'Replace Thumbnail' : 'Upload Thumbnail'}
                  </button>
                  {form.image && (
                    <img src={form.image} alt="thumb"
                      style={{ width: 40, height: 60, objectFit: 'cover', borderRadius: 8, border: '1px solid rgba(0,0,0,0.12)' }} />
                  )}
                </div>
              </div>

              {/* Active */}
              <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', userSelect: 'none' }}>
                <input type="checkbox" checked={form.active} onChange={e => setField('active', e.target.checked)}
                  style={{ width: 18, height: 18, accentColor: '#C8956C' }} />
                <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#2D1B0E' }}>Active (visible on homepage)</span>
              </label>

              {(err || uploadErr) && (
                <div style={{ background: '#fff5f5', border: '1px solid #fca5a5', borderRadius: 10, padding: '10px 14px', fontSize: '0.85rem', color: '#dc2626' }}>
                  <i className="fa-solid fa-circle-exclamation me-2" />{uploadErr || err}
                </div>
              )}

              <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 8 }}>
                <button onClick={closeModal} style={{ ...btnOutline, borderColor: '#ccc', color: '#666' }}>Cancel</button>
                <button onClick={handleSave} disabled={saving || videoUploading || thumbUploading}
                  style={{ ...btnPrimary, opacity: (saving || videoUploading) ? 0.7 : 1 }}>
                  {saving ? <><i className="fa-solid fa-spinner fa-spin me-2" />Saving…</> : <><i className="fa-solid fa-check me-2" />Save Reel</>}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
