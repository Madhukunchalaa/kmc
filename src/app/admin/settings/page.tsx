'use client';

import { useState, useEffect, useRef } from 'react';
import { DEFAULT_FEATURED_SLUGS } from '@/lib/featuredDefaults';

const CATEGORY_DEFS: { key: string; label: string }[] = [
  { key: 'view-all',              label: 'All Products' },
  { key: 'designer-bracelets',   label: 'Designer Bracelets' },
  { key: 'signature',            label: 'Signature Crystals' },
  { key: 'spell-jars',           label: 'Spell Jars' },
  { key: 'bracelets-by-crystals',label: 'Bracelets by Crystals' },
  { key: 'malas',                label: 'Malas' },
  { key: 'pendants',             label: 'Pendants' },
  { key: 'designer-pendants',    label: 'Designer Pendants' },
  { key: 'silver-jewelry',       label: 'Silver Jewelry' },
  { key: 'anklets',              label: 'Anklets' },
  { key: 'glow-essentials',      label: 'Glow Essentials' },
  { key: 'crystal-towers',       label: 'Crystal Towers' },
  { key: 'pyramids',             label: 'Pyramids' },
  { key: 'raw-crystal',          label: 'Raw Crystal' },
  { key: 'crystal-rings',        label: 'Crystal Rings' },
  { key: 'home-decor',           label: 'Home Decor' },
];

export default function AdminSettingsPage() {
  const [founderImageUrl, setFounderImageUrl] = useState('');
  const [signatureCarouselImages, setSignatureCarouselImages] = useState<string[]>([]);
  const [categoryImages, setCategoryImages] = useState<Record<string, string>>({});
  const [uploadingCategory, setUploadingCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadingCarousel, setUploadingCarousel] = useState(false);
  const [success, setSuccess] = useState('');
  const [err, setErr] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const carouselFileInputRef = useRef<HTMLInputElement>(null);
  const categoryFileInputRef = useRef<HTMLInputElement>(null);
  const pendingCategoryKey = useRef<string | null>(null);

  // Drag-to-reorder state for carousel images
  const dragIdx = useRef<number | null>(null);
  const [dragOver, setDragOver] = useState<number | null>(null);

  // Fallback Signature Bracelets products (shown when no custom images uploaded)
  const [sigProducts, setSigProducts] = useState<{ name: string; image: string }[]>([]);

  // Homepage Featured Products management
  const [allProducts, setAllProducts] = useState<{ slug: string; name: string; image: string; price: number }[]>([]);
  const [featuredSlugs, setFeaturedSlugs] = useState<string[]>([]);
  const [featSearch, setFeatSearch] = useState('');
  const featDragIdx = useRef<number | null>(null);
  const [featDragOver, setFeatDragOver] = useState<number | null>(null);

  const moveFeatured = (from: number, to: number) => {
    setFeaturedSlugs((s) => {
      const next = [...s];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return next;
    });
  };

  // Per-category shop rows management (Shop landing "5 products per category")
  const [featuredByCategory, setFeaturedByCategory] = useState<Record<string, string[]>>({});
  const [activeRowCat, setActiveRowCat] = useState('designer-bracelets');
  const [rowSearch, setRowSearch] = useState('');
  const rowDragIdx = useRef<number | null>(null);
  const [rowDragOver, setRowDragOver] = useState<number | null>(null);

  const currentRowSlugs = featuredByCategory[activeRowCat] || [];
  const setCurrentRowSlugs = (updater: (s: string[]) => string[]) =>
    setFeaturedByCategory((all) => ({ ...all, [activeRowCat]: updater(all[activeRowCat] || []) }));
  const moveRowSlug = (from: number, to: number) =>
    setCurrentRowSlugs((s) => {
      const next = [...s];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return next;
    });

  const moveCarouselImage = (from: number, to: number) => {
    setSignatureCarouselImages((imgs) => {
      const next = [...imgs];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return next;
    });
  };

  // Load current settings
  const loadSettings = async () => {
    setLoading(true);
    setErr('');
    try {
      const res = await fetch('/api/settings');
      const data = await res.json();
      if (data.ok && data.settings) {
        setFounderImageUrl(data.settings.founderImageUrl || '');
        if (data.settings.signatureCarouselImages) {
          if (Array.isArray(data.settings.signatureCarouselImages)) {
            setSignatureCarouselImages(data.settings.signatureCarouselImages);
          } else if (typeof data.settings.signatureCarouselImages === 'string') {
            try {
              const parsed = JSON.parse(data.settings.signatureCarouselImages);
              setSignatureCarouselImages(Array.isArray(parsed) ? parsed : []);
            } catch {
              setSignatureCarouselImages([]);
            }
          }
        } else {
          setSignatureCarouselImages([]);
        }
        // Homepage featured products (ordered slugs)
        if (data.settings.featuredProductSlugs) {
          try {
            const parsed = typeof data.settings.featuredProductSlugs === 'string'
              ? JSON.parse(data.settings.featuredProductSlugs)
              : data.settings.featuredProductSlugs;
            setFeaturedSlugs(Array.isArray(parsed) ? parsed : []);
          } catch {
            setFeaturedSlugs([]);
          }
        }
        // Per-category shop rows
        if (data.settings.categoryFeaturedProducts) {
          try {
            const parsed = typeof data.settings.categoryFeaturedProducts === 'string'
              ? JSON.parse(data.settings.categoryFeaturedProducts)
              : data.settings.categoryFeaturedProducts;
            setFeaturedByCategory(parsed && typeof parsed === 'object' ? parsed : {});
          } catch {
            setFeaturedByCategory({});
          }
        }
        // Load category cover images
        const catImgs: Record<string, string> = {};
        for (const cat of CATEGORY_DEFS) {
          const val = data.settings[`categoryImage_${cat.key}`];
          if (val) catImgs[cat.key] = val;
        }
        setCategoryImages(catImgs);
      } else {
        setErr('Failed to load settings.');
      }
    } catch {
      setErr('Failed to load settings. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Load Signature Bracelets products so the admin can see what the carousel
  // falls back to (and promote any of them into the custom list).
  const loadSigProducts = async () => {
    try {
      const res = await fetch('/api/products');
      const data = await res.json();
      if (Array.isArray(data.products)) {
        setSigProducts(
          data.products
            .filter((p: { subcategory?: string }) => p.subcategory?.toLowerCase() === 'signature bracelets')
            .map((p: { name: string; image: string }) => ({ name: p.name, image: p.image })),
        );
        setAllProducts(
          data.products.map((p: { slug?: string; id?: string; name: string; image: string; price?: number }) => ({
            slug: p.slug ?? p.id ?? '',
            name: p.name,
            image: p.image,
            price: p.price ?? 0,
          })),
        );
      }
    } catch {
      // non-critical — fallback preview just won't show
    }
  };

  useEffect(() => {
    loadSettings();
    loadSigProducts();
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

  // Handle Carousel Image Upload to Cloudflare R2
  const handleCarouselImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setErr('');
    setSuccess('');
    setUploadingCarousel(true);

    try {
      const fd = new FormData();
      fd.append('file', file);

      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: fd,
      });

      const data = await res.json();
      if (!data.ok) {
        setErr(data.reason || 'Carousel image upload failed.');
      } else {
        setSignatureCarouselImages(prev => [...prev, data.url]);
        setSuccess('Carousel image uploaded successfully. Don\'t forget to click Save Settings.');
      }
    } catch {
      setErr('Carousel image upload failed. Please try again.');
    } finally {
      setUploadingCarousel(false);
      if (carouselFileInputRef.current) carouselFileInputRef.current.value = '';
    }
  };

  const removeCarouselImage = (index: number) => {
    setSignatureCarouselImages(prev => prev.filter((_, i) => i !== index));
    setSuccess('Image removed from list. Remember to save changes.');
  };

  // Handle category cover image upload
  const handleCategoryImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const catKey = pendingCategoryKey.current;
    if (!file || !catKey) return;

    setErr('');
    setSuccess('');
    setUploadingCategory(catKey);

    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
      const data = await res.json();
      if (!data.ok) {
        setErr(data.reason || 'Upload failed.');
      } else {
        // Save immediately to DB
        await fetch('/api/admin/settings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ key: `categoryImage_${catKey}`, value: data.url }),
        });
        setCategoryImages(prev => ({ ...prev, [catKey]: data.url }));
        setSuccess(`Cover image for "${CATEGORY_DEFS.find(c => c.key === catKey)?.label}" updated!`);
      }
    } catch {
      setErr('Upload failed. Please try again.');
    } finally {
      setUploadingCategory(null);
      pendingCategoryKey.current = null;
      if (categoryFileInputRef.current) categoryFileInputRef.current.value = '';
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
          settings: {
            founderImageUrl: founderImageUrl,
            signatureCarouselImages: JSON.stringify(signatureCarouselImages),
            featuredProductSlugs: JSON.stringify(featuredSlugs),
            categoryFeaturedProducts: JSON.stringify(featuredByCategory)
          }
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

          {/* Autoplay Carousel Section */}
          <div style={{ borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '2rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.15rem', color: '#2D1B0E', fontWeight: 600, margin: '0 0 1rem' }}>
              <i className="fa-solid fa-images me-2" style={{ color: '#C8956C', fontSize: '1rem' }} />
              Homepage Signature Carousel Images
            </h3>
            <p style={{ margin: '0 0 1.5rem', fontSize: '0.8rem', color: '#666', lineHeight: 1.4 }}>
              Upload and manage custom images displayed in the Signature Crystals autoplay carousel on the homepage. If no custom images are uploaded here, the carousel will automatically fall back to displaying the products from the <strong>Signature Bracelets</strong> subcategory.
            </p>

            {signatureCarouselImages.length > 1 && (
              <p style={{ margin: '0 0 10px', fontSize: '0.75rem', color: 'var(--primary,#C8956C)', fontWeight: 600 }}>
                <i className="fa-solid fa-up-down-left-right me-1"></i>
                Drag images to change their order in the carousel — then click Save Settings below.
              </p>
            )}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '16px', marginBottom: '1.5rem' }}>
              {signatureCarouselImages.map((url, index) => (
                <div
                  key={`${url}-${index}`}
                  draggable
                  onDragStart={() => { dragIdx.current = index; }}
                  onDragOver={(e) => { e.preventDefault(); setDragOver(index); }}
                  onDragLeave={() => setDragOver(null)}
                  onDrop={(e) => {
                    e.preventDefault();
                    if (dragIdx.current !== null && dragIdx.current !== index) {
                      moveCarouselImage(dragIdx.current, index);
                    }
                    dragIdx.current = null;
                    setDragOver(null);
                  }}
                  onDragEnd={() => { dragIdx.current = null; setDragOver(null); }}
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '1 / 1',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: dragOver === index ? '2px dashed var(--primary,#C8956C)' : '1.5px solid rgba(200, 149, 108, 0.2)',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                    background: '#fafafa',
                    cursor: 'grab',
                  }}
                >
                  <img src={url} alt={`Carousel ${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }} />
                  {/* position badge */}
                  <span style={{
                    position: 'absolute', top: 6, left: 6,
                    background: 'rgba(45,27,14,0.85)', color: '#fff',
                    borderRadius: 8, fontSize: '0.68rem', fontWeight: 700,
                    padding: '2px 8px',
                  }}>
                    #{index + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeCarouselImage(index)}
                    title="Remove image"
                    style={{
                      position: 'absolute',
                      top: '6px',
                      right: '6px',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'rgba(231, 76, 60, 0.9)',
                      border: 'none',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                      transition: 'background 0.2s'
                    }}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              ))}

              {/* Upload Button Box */}
              <div
                onClick={() => !uploadingCarousel && carouselFileInputRef.current?.click()}
                style={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  borderRadius: '12px',
                  border: '2px dashed rgba(200, 149, 108, 0.35)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: uploadingCarousel ? 'not-allowed' : 'pointer',
                  color: 'var(--primary,#C8956C)',
                  background: 'rgba(200, 149, 108, 0.02)',
                  transition: 'all 0.2s',
                  textAlign: 'center',
                  padding: '10px'
                }}
              >
                <i className={`fa-solid ${uploadingCarousel ? 'fa-spinner fa-spin' : 'fa-plus'}`} style={{ fontSize: '1.5rem', marginBottom: '8px' }}></i>
                <span style={{ fontSize: '0.78rem', fontWeight: 600 }}>
                  {uploadingCarousel ? 'Uploading…' : 'Add Image'}
                </span>
              </div>
              <input
                type="file"
                ref={carouselFileInputRef}
                accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
                style={{ display: 'none' }}
                onChange={handleCarouselImageUpload}
                onClick={(e) => e.stopPropagation()}
              />

            </div>

            {/* Fallback preview: what the carousel currently shows when no custom images exist */}
            {signatureCarouselImages.length === 0 && sigProducts.length > 0 && (
              <div style={{
                background: '#FFF9F2',
                border: '1px dashed rgba(200,149,108,0.4)',
                borderRadius: 14,
                padding: '16px 18px',
              }}>
                <p style={{ margin: '0 0 4px', fontSize: '0.85rem', fontWeight: 700, color: '#8a6a3f' }}>
                  <i className="fa-solid fa-eye me-2"></i>
                  Currently live on the homepage (automatic)
                </p>
                <p style={{ margin: '0 0 14px', fontSize: '0.76rem', color: '#997' }}>
                  No custom images uploaded, so the carousel is auto-showing these {sigProducts.length} Signature Bracelets products.
                  Click <strong>+ Use in carousel</strong> on any of them to take manual control — then you can delete and reorder freely.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: 12 }}>
                  {sigProducts.map((p, i) => (
                    <div key={i} style={{ textAlign: 'center' }}>
                      <div style={{ position: 'relative', aspectRatio: '1 / 1', borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)' }}>
                        <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div style={{ fontSize: '0.68rem', color: '#776', margin: '6px 0 4px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</div>
                      <button
                        type="button"
                        onClick={() => setSignatureCarouselImages((imgs) => [...imgs, p.image])}
                        style={{
                          fontSize: '0.68rem', fontWeight: 700,
                          background: 'none', border: '1px solid rgba(200,149,108,0.5)',
                          color: 'var(--primary,#C8956C)', borderRadius: 14, padding: '3px 10px', cursor: 'pointer',
                        }}
                      >
                        + Use in carousel
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Homepage Featured Products */}
          <div style={{ borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '2rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.15rem', color: '#2D1B0E', fontWeight: 600, margin: '0 0 1rem' }}>
              <i className="fa-solid fa-star me-2" style={{ color: '#C8956C', fontSize: '1rem' }} />
              Homepage Featured Products
            </h3>
            <p style={{ margin: '0 0 1.25rem', fontSize: '0.8rem', color: '#666', lineHeight: 1.4 }}>
              Choose which products appear in the <strong>"Featured Crystal Collections"</strong> section on the homepage,
              and drag them into the order you want. Leave the list empty to use the default bestseller products.
              Click <strong>Save Settings</strong> below to apply.
            </p>

            {/* Selected featured products — draggable */}
            {featuredSlugs.length > 0 && (
              <>
                <p style={{ margin: '0 0 10px', fontSize: '0.75rem', color: 'var(--primary,#C8956C)', fontWeight: 600 }}>
                  <i className="fa-solid fa-up-down-left-right me-1"></i>
                  Drag cards to change their position on the homepage.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: 14, marginBottom: '1.25rem' }}>
                  {featuredSlugs.map((slug, index) => {
                    const p = allProducts.find((x) => x.slug === slug);
                    return (
                      <div
                        key={`${slug}-${index}`}
                        draggable
                        onDragStart={() => { featDragIdx.current = index; }}
                        onDragOver={(e) => { e.preventDefault(); setFeatDragOver(index); }}
                        onDragLeave={() => setFeatDragOver(null)}
                        onDrop={(e) => {
                          e.preventDefault();
                          if (featDragIdx.current !== null && featDragIdx.current !== index) {
                            moveFeatured(featDragIdx.current, index);
                          }
                          featDragIdx.current = null;
                          setFeatDragOver(null);
                        }}
                        onDragEnd={() => { featDragIdx.current = null; setFeatDragOver(null); }}
                        style={{
                          position: 'relative',
                          borderRadius: 12,
                          overflow: 'hidden',
                          border: featDragOver === index ? '2px dashed var(--primary,#C8956C)' : '1.5px solid rgba(200,149,108,0.25)',
                          background: '#fff',
                          cursor: 'grab',
                          boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                        }}
                      >
                        <div style={{ aspectRatio: '1 / 1', background: '#faf6f1' }}>
                          {p?.image
                            ? <img src={p.image} alt={p?.name ?? slug} style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }} />
                            : <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#c66', fontSize: '0.7rem', padding: 8, textAlign: 'center' }}>Product not found:<br/>{slug}</div>}
                        </div>
                        <span style={{
                          position: 'absolute', top: 6, left: 6,
                          background: 'rgba(45,27,14,0.85)', color: '#fff',
                          borderRadius: 8, fontSize: '0.68rem', fontWeight: 700, padding: '2px 8px',
                        }}>
                          #{index + 1}
                        </span>
                        <button
                          type="button"
                          onClick={() => setFeaturedSlugs((s) => s.filter((_, i) => i !== index))}
                          title="Remove from featured"
                          style={{
                            position: 'absolute', top: 6, right: 6,
                            width: 24, height: 24, borderRadius: '50%',
                            background: 'rgba(231,76,60,0.9)', border: 'none', color: '#fff',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', fontSize: '0.7rem',
                          }}
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                        <div style={{ padding: '7px 9px', fontSize: '0.72rem', fontWeight: 600, color: '#554', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {p?.name ?? slug}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
            {featuredSlugs.length === 0 && (
              <>
                <p style={{ fontSize: '0.8rem', color: '#997', background: '#FFF9F2', border: '1px dashed rgba(200,149,108,0.4)', borderRadius: 10, padding: '10px 14px', marginBottom: '1rem' }}>
                  <i className="fa-solid fa-circle-info me-2"></i>
                  No custom selection yet — the homepage is currently showing these default bestseller products. Click <strong>Customize these</strong> to edit the line-up, or add products below.
                </p>
                {/* Live preview of what the homepage is showing right now */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: 14, marginBottom: '1rem' }}>
                  {DEFAULT_FEATURED_SLUGS.map((slug) => {
                    const p = allProducts.find((x) => x.slug === slug);
                    return (
                      <div key={slug} style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', border: '1.5px solid rgba(200,149,108,0.25)', background: '#fff', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                        <div style={{ aspectRatio: '1 / 1', background: '#faf6f1' }}>
                          {p?.image
                            ? <img src={p.image} alt={p?.name ?? slug} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            : <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#c66', fontSize: '0.7rem', padding: 8, textAlign: 'center' }}>Product not found:<br/>{slug}</div>}
                        </div>
                        <span style={{ position: 'absolute', top: 6, left: 6, background: 'rgba(45,27,14,0.7)', color: '#fff', borderRadius: 8, fontSize: '0.62rem', fontWeight: 700, padding: '2px 7px' }}>
                          Default
                        </span>
                        <div style={{ padding: '7px 9px', fontSize: '0.72rem', fontWeight: 600, color: '#554', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {p?.name ?? slug}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <button
                  type="button"
                  onClick={() => setFeaturedSlugs(DEFAULT_FEATURED_SLUGS)}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '9px 18px', borderRadius: 30, border: '1.5px solid var(--primary,#C8956C)', background: '#fff', color: 'var(--primary,#C8956C)', fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer', marginBottom: '1.25rem' }}
                >
                  <i className="fa-solid fa-pen"></i>
                  Customize these
                </button>
              </>
            )}

            {/* Product picker */}
            <div style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12, overflow: 'hidden' }}>
              <input
                value={featSearch}
                onChange={(e) => setFeatSearch(e.target.value)}
                placeholder="🔍 Search products to feature…"
                style={{ width: '100%', padding: '11px 14px', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.07)', outline: 'none', fontSize: '0.88rem' }}
              />
              <div style={{ maxHeight: 230, overflowY: 'auto' }}>
                {allProducts
                  .filter((p) => !featuredSlugs.includes(p.slug))
                  .filter((p) => !featSearch.trim() || p.name.toLowerCase().includes(featSearch.trim().toLowerCase()))
                  .slice(0, 40)
                  .map((p) => (
                    <button
                      key={p.slug}
                      type="button"
                      onClick={() => setFeaturedSlugs((s) => [...s, p.slug])}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 10, width: '100%',
                        padding: '8px 12px', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.04)',
                        background: '#fff', cursor: 'pointer', textAlign: 'left',
                      }}
                    >
                      <i className="fa-solid fa-circle-plus" style={{ color: 'var(--primary,#C8956C)', fontSize: '0.95rem', flexShrink: 0 }} />
                      <img src={p.image} alt="" style={{ width: 32, height: 32, borderRadius: 8, objectFit: 'cover', flexShrink: 0 }} />
                      <span style={{ flex: 1, fontSize: '0.84rem' }}>{p.name}</span>
                      <span style={{ fontSize: '0.78rem', color: '#888', fontWeight: 600 }}>₹{p.price.toLocaleString('en-IN')}</span>
                    </button>
                  ))}
                {allProducts.length === 0 && (
                  <p style={{ padding: 14, margin: 0, color: '#aaa', fontSize: '0.82rem', textAlign: 'center' }}>Loading products…</p>
                )}
              </div>
            </div>
          </div>

          {/* Shop Category Rows — 5 products per category */}
          <div style={{ borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '2rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.15rem', color: '#2D1B0E', fontWeight: 600, margin: '0 0 1rem' }}>
              <i className="fa-solid fa-table-cells-large me-2" style={{ color: '#C8956C', fontSize: '1rem' }} />
              Shop Category Rows
            </h3>
            <p style={{ margin: '0 0 1.25rem', fontSize: '0.8rem', color: '#666', lineHeight: 1.4 }}>
              On the Shop landing page, each category shows a row of up to <strong>5 products</strong>.
              Pick a category below, choose which products appear and drag them into order.
              Leave a category empty to auto-show its first 5 products. Click <strong>Save Settings</strong> to apply.
            </p>

            {/* Category selector */}
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>Editing category</label>
              <select
                value={activeRowCat}
                onChange={(e) => { setActiveRowCat(e.target.value); setRowSearch(''); }}
                style={{ padding: '10px 14px', borderRadius: 10, border: '1px solid rgba(0,0,0,0.15)', fontSize: '0.9rem', minWidth: 240, background: '#fff' }}
              >
                {CATEGORY_DEFS.filter((c) => c.key !== 'view-all').map((c) => (
                  <option key={c.key} value={c.key}>
                    {c.label}{(featuredByCategory[c.key]?.length ?? 0) > 0 ? ` (${featuredByCategory[c.key].length})` : ''}
                  </option>
                ))}
              </select>
            </div>

            {/* Selected products for this category — draggable */}
            {currentRowSlugs.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: 14, marginBottom: '1.25rem' }}>
                {currentRowSlugs.map((slug, index) => {
                  const p = allProducts.find((x) => x.slug === slug);
                  return (
                    <div
                      key={`${slug}-${index}`}
                      draggable
                      onDragStart={() => { rowDragIdx.current = index; }}
                      onDragOver={(e) => { e.preventDefault(); setRowDragOver(index); }}
                      onDragLeave={() => setRowDragOver(null)}
                      onDrop={(e) => {
                        e.preventDefault();
                        if (rowDragIdx.current !== null && rowDragIdx.current !== index) moveRowSlug(rowDragIdx.current, index);
                        rowDragIdx.current = null;
                        setRowDragOver(null);
                      }}
                      onDragEnd={() => { rowDragIdx.current = null; setRowDragOver(null); }}
                      style={{
                        position: 'relative', borderRadius: 12, overflow: 'hidden',
                        border: rowDragOver === index ? '2px dashed var(--primary,#C8956C)' : '1.5px solid rgba(200,149,108,0.25)',
                        background: '#fff', cursor: 'grab', boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                      }}
                    >
                      <div style={{ aspectRatio: '1 / 1', background: '#faf6f1' }}>
                        {p?.image
                          ? <img src={p.image} alt={p?.name ?? slug} style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }} />
                          : <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#c66', fontSize: '0.68rem', padding: 8, textAlign: 'center' }}>Not found:<br/>{slug}</div>}
                      </div>
                      <span style={{ position: 'absolute', top: 6, left: 6, background: 'rgba(45,27,14,0.85)', color: '#fff', borderRadius: 8, fontSize: '0.68rem', fontWeight: 700, padding: '2px 8px' }}>#{index + 1}</span>
                      <button
                        type="button"
                        onClick={() => setCurrentRowSlugs((s) => s.filter((_, i) => i !== index))}
                        title="Remove"
                        style={{ position: 'absolute', top: 6, right: 6, width: 24, height: 24, borderRadius: '50%', background: 'rgba(231,76,60,0.9)', border: 'none', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '0.7rem' }}
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                      <div style={{ padding: '7px 9px', fontSize: '0.72rem', fontWeight: 600, color: '#554', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p?.name ?? slug}</div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p style={{ fontSize: '0.8rem', color: '#997', background: '#FFF9F2', border: '1px dashed rgba(200,149,108,0.4)', borderRadius: 10, padding: '10px 14px', marginBottom: '1.25rem' }}>
                <i className="fa-solid fa-circle-info me-2"></i>
                No products chosen for this category yet — it will auto-show its first 5 products. Add products below to take control.
              </p>
            )}

            {/* Product picker */}
            <div style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12, overflow: 'hidden' }}>
              <input
                value={rowSearch}
                onChange={(e) => setRowSearch(e.target.value)}
                placeholder="🔍 Search products to add to this category…"
                style={{ width: '100%', padding: '11px 14px', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.07)', outline: 'none', fontSize: '0.88rem' }}
              />
              <div style={{ maxHeight: 230, overflowY: 'auto' }}>
                {allProducts
                  .filter((p) => !currentRowSlugs.includes(p.slug))
                  .filter((p) => !rowSearch.trim() || p.name.toLowerCase().includes(rowSearch.trim().toLowerCase()))
                  .slice(0, 40)
                  .map((p) => (
                    <button
                      key={p.slug}
                      type="button"
                      onClick={() => setCurrentRowSlugs((s) => (s.length >= 5 ? s : [...s, p.slug]))}
                      disabled={currentRowSlugs.length >= 5}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 10, width: '100%',
                        padding: '8px 12px', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.04)',
                        background: '#fff', cursor: currentRowSlugs.length >= 5 ? 'not-allowed' : 'pointer',
                        opacity: currentRowSlugs.length >= 5 ? 0.5 : 1, textAlign: 'left',
                      }}
                    >
                      <i className="fa-solid fa-circle-plus" style={{ color: 'var(--primary,#C8956C)', fontSize: '0.95rem', flexShrink: 0 }} />
                      <img src={p.image} alt="" style={{ width: 32, height: 32, borderRadius: 8, objectFit: 'cover', flexShrink: 0 }} />
                      <span style={{ flex: 1, fontSize: '0.84rem' }}>{p.name}</span>
                      <span style={{ fontSize: '0.78rem', color: '#888', fontWeight: 600 }}>₹{p.price.toLocaleString('en-IN')}</span>
                    </button>
                  ))}
                {allProducts.length === 0 && (
                  <p style={{ padding: 14, margin: 0, color: '#aaa', fontSize: '0.82rem', textAlign: 'center' }}>Loading products…</p>
                )}
              </div>
            </div>
            {currentRowSlugs.length >= 5 && (
              <p style={{ fontSize: '0.72rem', color: '#997', margin: '8px 2px 0' }}>Maximum 5 products per category row reached — remove one to add another.</p>
            )}
          </div>

          {/* Category Cover Images */}
          <div style={{ borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '2rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.15rem', color: '#2D1B0E', fontWeight: 600, margin: '0 0 0.5rem' }}>
              <i className="fa-solid fa-layer-group me-2" style={{ color: '#C8956C', fontSize: '1rem' }} />
              Shop Category Cover Images
            </h3>
            <p style={{ margin: '0 0 1.5rem', fontSize: '0.8rem', color: '#666', lineHeight: 1.4 }}>
              Click the camera icon on any category to upload a new cover image. Changes are saved immediately — no need to click Save below.
            </p>

            <input
              type="file"
              ref={categoryFileInputRef}
              accept="image/jpeg,image/png,image/webp,image/avif"
              style={{ display: 'none' }}
              onChange={handleCategoryImageUpload}
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '16px' }}>
              {CATEGORY_DEFS.map((cat) => {
                const img = categoryImages[cat.key];
                const isUploading = uploadingCategory === cat.key;
                return (
                  <div key={cat.key} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <div style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '3 / 4',
                      borderRadius: 12,
                      overflow: 'hidden',
                      background: '#1A0D05',
                      border: '1.5px solid rgba(200,149,108,0.2)',
                      cursor: 'pointer',
                    }}
                      onClick={() => {
                        if (isUploading || uploadingCategory) return;
                        pendingCategoryKey.current = cat.key;
                        categoryFileInputRef.current?.click();
                      }}
                    >
                      {img ? (
                        <img src={img} alt={cat.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#555', flexDirection: 'column', gap: 4, padding: 8, textAlign: 'center' }}>
                          <i className="fa-regular fa-image" style={{ fontSize: '1.5rem', color: '#C8956C' }} />
                          <span style={{ fontSize: '0.68rem', color: '#888' }}>Using default</span>
                        </div>
                      )}

                      {/* Overlay on hover / uploading */}
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: isUploading ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'background 0.2s',
                        zIndex: 2,
                      }}
                        className="cat-img-overlay"
                      >
                        {isUploading ? (
                          <i className="fa-solid fa-spinner fa-spin" style={{ color: '#fff', fontSize: '1.5rem' }} />
                        ) : (
                          <div style={{
                            background: 'rgba(200,149,108,0.9)',
                            borderRadius: '50%',
                            width: 36, height: 36,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: '#fff', fontSize: '1rem',
                            opacity: 0, transition: 'opacity 0.2s',
                          }}
                            className="cat-img-btn"
                          >
                            <i className="fa-solid fa-camera" />
                          </div>
                        )}
                      </div>
                    </div>
                    <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#555', textAlign: 'center', lineHeight: 1.3 }}>{cat.label}</span>
                  </div>
                );
              })}
            </div>

            <style>{`
              div:hover > .cat-img-overlay { background: rgba(0,0,0,0.45) !important; }
              div:hover .cat-img-btn { opacity: 1 !important; }
            `}</style>
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
