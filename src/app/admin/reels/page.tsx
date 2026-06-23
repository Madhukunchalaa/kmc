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

  // Upload states
  const [videoUploading, setVideoUploading] = useState(false);
  const [thumbUploading, setThumbUploading] = useState(false);
  const [uploadErr, setUploadErr] = useState('');

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
  const set = (k: keyof typeof EMPTY, v: string | number | boolean) =>
    setForm((f) => ({ ...f, [k]: v }));

  const openAdd = () => {
    setForm({ ...EMPTY, order: reels.length });
    setErr('');
    setUploadErr('');
    setModal({ mode: 'add', reel: null });
  };

  const openEdit = (reel: Reel) => {
    setForm({ title: reel.title, caption: reel.caption, src: reel.src, image: reel.image, order: reel.order, active: reel.active });
    setErr('');
    setUploadErr('');
    setModal({ mode: 'edit', reel });
  };

  const closeModal = () => setModal(null);

  // ── Video upload ───────────────────────────────────────────────────────────
  const handleVideoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadErr('');

    if (file.size > MAX_VIDEO_BYTES) {
      setUploadErr(`Video is too large (${(file.size / 1024 / 1024).toFixed(1)} MB). Maximum allowed size is ${MAX_VIDEO_MB} MB.`);
      if (videoInputRef.current) videoInputRef.current.value = '';
      return;
    }

    setVideoUploading(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch('/api/admin/upload-video', { method: 'POST', body: fd });
      const data = await res.json();
      if (!data.ok) {
        setUploadErr(data.reason || 'Video upload failed');
      } else {
        set('src', data.url);
      }
    } catch {
      setUploadErr('Video upload failed. Please try again.');
    } finally {
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
      if (!data.ok) {
        setUploadErr(data.reason || 'Thumbnail upload failed');
      } else {
        set('image', data.url);
      }
    } catch {
      setUploadErr('Thumbnail upload failed. Please try again.');
    } finally {
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
        res = await fetch('/api/admin/reels', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
      } else {
        res = await fetch(`/api/admin/reels/${modal!.reel!._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
      }
      const d = await res.json();
      if (!d.ok) { setErr(d.reason || 'Save failed'); return; }
      await load();
      closeModal();
    } catch {
      setErr('Save failed. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  // ── Delete ─────────────────────────────────────────────────────────────────
  const handleDelete = async (id: string) => {
    if (!confirm('Delete this reel? This cannot be undone.')) return;
    setDeleting(id);
    try {
      await fetch(`/api/admin/reels/${id}`, { method: 'DELETE' });
      await load();
    } finally {
      setDeleting(null);
    }
  };

  // ── Toggle active ──────────────────────────────────────────────────────────
  const toggleActive = async (reel: Reel) => {
    await fetch(`/api/admin/reels/${reel._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ active: !reel.active }),
    });
    await load();
  };

  // ── Styles ─────────────────────────────────────────────────────────────────
  const card: React.CSSProperties = {
    background: '#fff',
    borderRadius: 16,
    padding: '1.5rem',
    boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
    border: '1px solid rgba(0,0,0,0.06)',
  };
  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px 14px',
    borderRadius: 10,
    border: '1px solid rgba(0,0,0,0.12)',
    fontSize: '0.9rem',
    outline: 'none',
    boxSizing: 'border-box',
    background: '#fafafa',
  };
  const labelStyle: React.CSSProperties = { fontSize: '0.82rem', fontWeight: 600, color: '#666', marginBottom: 4, display: 'block' };
  const btnPrimary: React.CSSProperties = {
    background: '#C8956C',
    color: '#fff',
    border: 'none',
    borderRadius: 10,
    padding: '10px 22px',
    fontWeight: 600,
    cursor: 'pointer',
    fontSize: '0.9rem',
  };
  const btnOutline: React.CSSProperties = {
    background: 'transparent',
    color: '#C8956C',
    border: '1.5px solid #C8956C',
    borderRadius: 10,
    padding: '8px 18px',
    fontWeight: 600,
    cursor: 'pointer',
    fontSize: '0.85rem',
  };

  return (
    <div style={{ padding: '2rem', maxWidth: 1100, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700, color: '#2D1B0E' }}>
            <i className="fa-solid fa-film me-2" style={{ color: '#C8956C' }} />
            Homepage Reels
          </h1>
          <p style={{ margin: '4px 0 0', color: '#888', fontSize: '0.85rem' }}>
            Manage the spiritual reels carousel shown on the homepage. Videos upload to Cloudflare R2 (max {MAX_VIDEO_MB} MB).
          </p>
        </div>
        <button style={btnPrimary} onClick={openAdd}>
          <i className="fa-solid fa-plus me-2" />
          Add Reel
        </button>
      </div>

      {/* Reels table */}
      <div style={card}>
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
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(0,0,0,0.07)' }}>
                  {['#', 'Thumbnail', 'Title & Caption', 'Video', 'Status', 'Actions'].map((h) => (
                    <th key={h} style={{ textAlign: 'left', padding: '10px 14px', fontWeight: 600, color: '#888', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {reels.map((reel, idx) => (
                  <tr key={reel._id} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', transition: 'background 0.15s' }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#faf7f4')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                    <td style={{ padding: '12px 14px', color: '#aaa', fontWeight: 600 }}>{idx + 1}</td>
                    <td style={{ padding: '12px 14px' }}>
                      {reel.image ? (
                        <img src={reel.image} alt={reel.title}
                          style={{ width: 48, height: 72, objectFit: 'cover', borderRadius: 8, border: '1px solid rgba(0,0,0,0.1)' }} />
                      ) : (
                        <div style={{ width: 48, height: 72, borderRadius: 8, background: '#f0e8e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className="fa-regular fa-image" style={{ color: '#ccc' }} />
                        </div>
                      )}
                    </td>
                    <td style={{ padding: '12px 14px', maxWidth: 260 }}>
                      <div style={{ fontWeight: 600, color: '#2D1B0E' }}>{reel.title}</div>
                      <div style={{ color: '#888', fontSize: '0.82rem', marginTop: 2 }}>{reel.caption || <em>No caption</em>}</div>
                    </td>
                    <td style={{ padding: '12px 14px' }}>
                      {reel.src ? (
                        <a href={reel.src} target="_blank" rel="noopener noreferrer"
                          style={{ color: '#C8956C', fontSize: '0.82rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5 }}>
                          <i className="fa-solid fa-play-circle" />
                          View video
                        </a>
                      ) : (
                        <span style={{ color: '#ccc', fontSize: '0.82rem' }}>No video</span>
                      )}
                    </td>
                    <td style={{ padding: '12px 14px' }}>
                      <button
                        onClick={() => toggleActive(reel)}
                        style={{
                          padding: '4px 12px',
                          borderRadius: 20,
                          border: 'none',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          background: reel.active ? 'rgba(72,199,116,0.12)' : 'rgba(0,0,0,0.06)',
                          color: reel.active ? '#27ae60' : '#aaa',
                        }}>
                        {reel.active ? '● Active' : '○ Hidden'}
                      </button>
                    </td>
                    <td style={{ padding: '12px 14px' }}>
                      <div style={{ display: 'flex', gap: 8 }}>
                        <button onClick={() => openEdit(reel)} style={{ ...btnOutline, padding: '6px 14px', fontSize: '0.8rem' }}>
                          <i className="fa-solid fa-pen me-1" />Edit
                        </button>
                        <button
                          onClick={() => handleDelete(reel._id)}
                          disabled={deleting === reel._id}
                          style={{ ...btnOutline, borderColor: '#e55', color: '#e55', padding: '6px 14px', fontSize: '0.8rem' }}>
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
              {/* Title */}
              <div>
                <label style={labelStyle}>Title *</label>
                <input value={form.title} onChange={e => set('title', e.target.value)}
                  placeholder="e.g. Crystal Cleansing Ritual" style={inputStyle} />
              </div>

              {/* Caption */}
              <div>
                <label style={labelStyle}>Caption</label>
                <textarea value={form.caption} onChange={e => set('caption', e.target.value)}
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

                <input
                  type="file"
                  ref={videoInputRef}
                  accept="video/mp4,video/webm,video/quicktime"
                  style={{ display: 'none' }}
                  onChange={handleVideoUpload}
                />

                <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={() => videoInputRef.current?.click()}
                    disabled={videoUploading}
                    style={{ ...btnPrimary, display: 'flex', alignItems: 'center', gap: 8, opacity: videoUploading ? 0.7 : 1 }}>
                    <i className={`fa-solid ${videoUploading ? 'fa-spinner fa-spin' : 'fa-cloud-arrow-up'}`} />
                    {videoUploading ? 'Uploading…' : form.src ? 'Replace Video' : 'Upload Video'}
                  </button>

                  {form.src && (
                    <a href={form.src} target="_blank" rel="noopener noreferrer"
                      style={{ color: '#C8956C', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 5 }}>
                      <i className="fa-solid fa-play-circle" />
                      Preview
                    </a>
                  )}
                </div>

                {form.src && (
                  <div style={{ marginTop: 8, fontSize: '0.78rem', color: '#27ae60' }}>
                    <i className="fa-solid fa-check-circle me-1" />
                    Video uploaded successfully
                  </div>
                )}
              </div>

              {/* Thumbnail Upload */}
              <div>
                <label style={labelStyle}>Thumbnail / Fallback Image</label>

                <input
                  type="file"
                  ref={thumbInputRef}
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleThumbUpload}
                />

                <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={() => thumbInputRef.current?.click()}
                    disabled={thumbUploading}
                    style={{ ...btnOutline, display: 'flex', alignItems: 'center', gap: 8, opacity: thumbUploading ? 0.7 : 1 }}>
                    <i className={`fa-solid ${thumbUploading ? 'fa-spinner fa-spin' : 'fa-image'}`} />
                    {thumbUploading ? 'Uploading…' : form.image ? 'Replace Thumbnail' : 'Upload Thumbnail'}
                  </button>

                  {form.image && (
                    <img src={form.image} alt="thumb"
                      style={{ width: 44, height: 64, objectFit: 'cover', borderRadius: 8, border: '1px solid rgba(0,0,0,0.12)' }} />
                  )}
                </div>
              </div>

              {/* Order */}
              <div>
                <label style={labelStyle}>Display Order</label>
                <input type="number" min={0} value={form.order}
                  onChange={e => set('order', parseInt(e.target.value, 10) || 0)}
                  style={{ ...inputStyle, width: 100 }} />
                <p style={{ margin: '4px 0 0', fontSize: '0.75rem', color: '#aaa' }}>Lower number = shown first</p>
              </div>

              {/* Active */}
              <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', userSelect: 'none' }}>
                <input type="checkbox" checked={form.active} onChange={e => set('active', e.target.checked)}
                  style={{ width: 18, height: 18, accentColor: '#C8956C' }} />
                <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#2D1B0E' }}>Active (visible on homepage)</span>
              </label>

              {/* Errors */}
              {(err || uploadErr) && (
                <div style={{ background: '#fff5f5', border: '1px solid #fca5a5', borderRadius: 10, padding: '10px 14px', fontSize: '0.85rem', color: '#dc2626' }}>
                  <i className="fa-solid fa-circle-exclamation me-2" />
                  {uploadErr || err}
                </div>
              )}

              {/* Actions */}
              <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 8 }}>
                <button onClick={closeModal} style={{ ...btnOutline, borderColor: '#ccc', color: '#666' }}>
                  Cancel
                </button>
                <button onClick={handleSave} disabled={saving || videoUploading || thumbUploading} style={{ ...btnPrimary, opacity: (saving || videoUploading) ? 0.7 : 1 }}>
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
