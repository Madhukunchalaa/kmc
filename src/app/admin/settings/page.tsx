'use client';

import { useState, useEffect, useRef } from 'react';

export default function AdminSettingsPage() {
  const [founderImageUrl, setFounderImageUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState('');
  const [err, setErr] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load current settings
  const loadSettings = async () => {
    setLoading(true);
    setErr('');
    try {
      const res = await fetch('/api/settings');
      const data = await res.json();
      if (data.ok && data.settings) {
        setFounderImageUrl(data.settings.founderImageUrl || '');
      } else {
        setErr('Failed to load settings.');
      }
    } catch {
      setErr('Failed to load settings. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSettings();
  }, []);

  // Handle Image Upload to Cloudflare R2
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setErr('');
    setSuccess('');
    setUploading(true);

    try {
      const fd = new FormData();
      fd.append('file', file);

      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: fd,
      });

      const data = await res.json();
      if (!data.ok) {
        setErr(data.reason || 'Image upload failed.');
      } else {
        setFounderImageUrl(data.url);
        setSuccess('Image uploaded successfully. Don\'t forget to click Save Changes below.');
      }
    } catch {
      setErr('Image upload failed. Please try again.');
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  // Handle Save
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr('');
    setSuccess('');
    setSaving(true);

    try {
      const res = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          key: 'founderImageUrl',
          value: founderImageUrl,
        }),
      });

      const data = await res.json();
      if (!data.ok) {
        setErr(data.reason || 'Failed to save settings.');
      } else {
        setSuccess('Settings saved successfully!');
      }
    } catch {
      setErr('Failed to save settings. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  // ── Styles ─────────────────────────────────────────────────────────────────
  const card: React.CSSProperties = {
    background: '#fff',
    borderRadius: 16,
    padding: '2rem',
    boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
    border: '1px solid rgba(0,0,0,0.06)',
    marginTop: '1.5rem',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '0.88rem',
    fontWeight: 600,
    color: '#666',
    marginBottom: 8,
    display: 'block',
  };

  const btnPrimary: React.CSSProperties = {
    background: '#C8956C',
    color: '#fff',
    border: 'none',
    borderRadius: 10,
    padding: '12px 28px',
    fontWeight: 600,
    cursor: 'pointer',
    fontSize: '0.92rem',
    transition: 'background 0.2s',
  };

  const btnOutline: React.CSSProperties = {
    background: 'transparent',
    color: '#C8956C',
    border: '1.5px solid #C8956C',
    borderRadius: 10,
    padding: '10px 22px',
    fontWeight: 600,
    cursor: 'pointer',
    fontSize: '0.88rem',
    transition: 'all 0.2s',
  };

  const alertSuccess: React.CSSProperties = {
    background: '#e8f5e9',
    color: '#2e7d32',
    padding: '12px 16px',
    borderRadius: 10,
    fontSize: '0.88rem',
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  };

  const alertError: React.CSSProperties = {
    background: '#ffebee',
    color: '#c62828',
    padding: '12px 16px',
    borderRadius: 10,
    fontSize: '0.88rem',
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  };

  return (
    <div style={{ padding: '2rem', maxWidth: 800, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700, color: '#2D1B0E' }}>
          <i className="fa-solid fa-sliders me-2" style={{ color: '#C8956C' }} />
          Website Settings
        </h1>
        <p style={{ margin: '4px 0 0', color: '#888', fontSize: '0.85rem' }}>
          Manage global configurations and content for KrissMaagiic.
        </p>
      </div>

      {loading ? (
        <div style={card}>
          <div style={{ textAlign: 'center', padding: '3rem', color: '#888' }}>
            <i className="fa-solid fa-spinner fa-spin" style={{ fontSize: '2rem', color: '#C8956C' }} />
            <p style={{ marginTop: 12 }}>Loading website settings…</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSave} style={card}>
          {success && (
            <div style={alertSuccess}>
              <i className="fa-solid fa-circle-check" />
              <span>{success}</span>
            </div>
          )}

          {err && (
            <div style={alertError}>
              <i className="fa-solid fa-circle-exclamation" />
              <span>{err}</span>
            </div>
          )}

          {/* Founder Section */}
          <div style={{ borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '2rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.15rem', color: '#2D1B0E', fontWeight: 600, margin: '0 0 1rem' }}>
              <i className="fa-solid fa-circle-user me-2" style={{ color: '#C8956C', fontSize: '1rem' }} />
              Founder Profile Configuration
            </h3>
            
            <div className="row g-4 align-items-start">
              {/* Image Preview */}
              <div className="col-md-4">
                <label style={labelStyle}>Current Founder Image</label>
                <div style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '3 / 4.2',
                  borderRadius: 16,
                  overflow: 'hidden',
                  background: '#1A0D05',
                  border: '1.5px solid rgba(200, 149, 108, 0.25)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                }}>
                  {founderImageUrl ? (
                    <img
                      src={founderImageUrl}
                      alt="Founder preview"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#888', padding: 20, textAlign: 'center' }}>
                      <i className="fa-regular fa-image" style={{ fontSize: '2rem', marginBottom: 8, color: '#C8956C' }} />
                      <span style={{ fontSize: '0.78rem' }}>No image uploaded</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Upload Controls */}
              <div className="col-md-8">
                <label style={labelStyle}>Upload New Portrait Image</label>
                <p style={{ margin: '0 0 1rem', fontSize: '0.8rem', color: '#666', lineHeight: 1.4 }}>
                  Upload a portrait photo of the founder (recommended ratio is 3:4 or 3:4.2). The image will be safely uploaded to Cloudflare R2 and served globally.
                </p>

                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
                  style={{ display: 'none' }}
                  onChange={handleImageUpload}
                />

                <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                    style={{ ...btnOutline, display: 'flex', alignItems: 'center', gap: 8, opacity: uploading ? 0.7 : 1 }}
                  >
                    <i className={`fa-solid ${uploading ? 'fa-spinner fa-spin' : 'fa-cloud-arrow-up'}`} />
                    {uploading ? 'Uploading to R2…' : 'Choose New Photo'}
                  </button>
                </div>

                <div style={{ marginTop: '1.5rem' }}>
                  <label style={labelStyle}>Image URL</label>
                  <input
                    type="text"
                    value={founderImageUrl}
                    onChange={(e) => setFounderImageUrl(e.target.value)}
                    placeholder="Or enter image URL directly..."
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: 10,
                      border: '1px solid rgba(0,0,0,0.12)',
                      fontSize: '0.88rem',
                      background: '#fafafa',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              type="submit"
              disabled={saving}
              style={{ ...btnPrimary, display: 'flex', alignItems: 'center', gap: 8, opacity: saving ? 0.75 : 1 }}
            >
              <i className={`fa-solid ${saving ? 'fa-spinner fa-spin' : 'fa-floppy-disk'}`} />
              {saving ? 'Saving changes…' : 'Save Settings'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
