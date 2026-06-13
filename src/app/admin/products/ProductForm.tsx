'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Initial {
  slug: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice: number | null;
  usdPrice?: number;
  originalUsdPrice?: number | null;
  image: string;
  badge: 'Popular' | 'New' | 'Sale' | 'Bestseller' | null;
  desc: string;
  longDesc: string;
  chakras: string[];
  stock: number;
  active: boolean;
}

const EMPTY: Initial = {
  slug: '', name: '', category: 'bracelets', subcategory: 'Bracelets', price: 0, originalPrice: null, usdPrice: 0, originalUsdPrice: null,
  image: '', badge: null, desc: '', longDesc: '', chakras: [], stock: 99, active: true,
};

const STANDARD_CATEGORIES = [
  { value: 'bracelets', label: 'Bracelets' },
  { value: 'wands', label: 'Wands' },
  { value: 'raw-stones', label: 'Raw Stones' },
  { value: 'candles', label: 'Candles' },
  { value: 'keychains', label: 'Keychains' },
  { value: 'malas', label: 'Malas' },
  { value: 'pendants', label: 'Pendants' },
  { value: 'rings', label: 'Rings' },
];

const STANDARD_SUBCATEGORIES = [
  'Bracelets',
  'Designer Bracelets',
  'Healing Wands',
  'Raw Stones',
  'Ritual Candles',
  'Crystal Keychains',
  'Crystal Malas',
  'Crystal Pendants',
  'Crystal Rings',
];

const STANDARD_CHAKRAS = [
  'Root',
  'Sacral',
  'Solar Plexus',
  'Heart',
  'Throat',
  'Third Eye',
  'Crown'
];

interface StructuredLongDesc {
  description: string;
  whoShouldWear: string[];
  benefits: string[];
  howToWearHand: string; // "Left Hand", "Right Hand", "Either Hand", etc.
  howToWearWhen: string;
  careInstructions: string[];
  disclaimer: string;
}

export default function ProductForm({ id, initial }: { id?: string; initial?: Initial }) {
  const router = useRouter();
  const [f, setF] = useState<Initial>(initial ?? EMPTY);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  // Category and Subcategory custom state
  const [isCustomCategory, setIsCustomCategory] = useState(false);
  const [customCategory, setCustomCategory] = useState('');
  const [isCustomSubcategory, setIsCustomSubcategory] = useState(false);
  const [customSubcategory, setCustomSubcategory] = useState('');

  // Structured longDesc state
  const [structuredDesc, setStructuredDesc] = useState<StructuredLongDesc>({
    description: '',
    whoShouldWear: [''],
    benefits: [''],
    howToWearHand: 'Left Hand',
    howToWearWhen: '',
    careInstructions: [''],
    disclaimer: 'Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.',
  });

  // Parse initial longDesc
  useEffect(() => {
    if (!initial) return;
    Promise.resolve().then(() => {
      if (initial.longDesc) {
        try {
          const parsed = JSON.parse(initial.longDesc);
          
          // Extract hand and when from howToWear array
          let hand = 'Left Hand';
          let when = '';
          if (Array.isArray(parsed.howToWear)) {
            const handMatch = parsed.howToWear[0]?.match(/Wear on the (Left Hand|Right Hand|Either Hand) as recommended/i);
            if (handMatch) {
              hand = handMatch[1];
            } else if (parsed.howToWear[0]?.includes('Either')) {
              hand = 'Either Hand';
            }
            
            const whenMatch = parsed.howToWear[1]?.replace('Best worn during:', '').trim().replace(/\.$/, '');
            if (whenMatch) {
              when = whenMatch;
            }
          }

          setStructuredDesc({
            description: parsed.description || initial.desc || '',
            whoShouldWear: Array.isArray(parsed.whoShouldWear) ? parsed.whoShouldWear : [''],
            benefits: Array.isArray(parsed.benefits) ? parsed.benefits : [''],
            howToWearHand: hand,
            howToWearWhen: when || '',
            careInstructions: Array.isArray(parsed.careInstructions) ? parsed.careInstructions : [''],
            disclaimer: parsed.disclaimer || 'Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.',
          });
        } catch (e) {
          // Not valid JSON, set raw longDesc as description
          setStructuredDesc((prev) => ({
            ...prev,
            description: initial.longDesc || initial.desc || '',
          }));
        }
      } else {
        setStructuredDesc((prev) => ({
          ...prev,
          description: initial.desc || '',
        }));
      }

      // Set custom category/subcategory check
      const catExists = STANDARD_CATEGORIES.some((c) => c.value === initial.category);
      if (!catExists && initial.category) {
        setIsCustomCategory(true);
        setCustomCategory(initial.category);
      }
      const subcatExists = STANDARD_SUBCATEGORIES.includes(initial.subcategory);
      if (!subcatExists && initial.subcategory) {
        setIsCustomSubcategory(true);
        setCustomSubcategory(initial.subcategory);
      }
    });
  }, [initial]);

  const set = <K extends keyof Initial>(k: K, v: Initial[K]) => setF((s) => ({ ...s, [k]: v }));

  // File upload handler
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setErr(null);

    try {
      // 1. Get presigned URL
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: file.name, contentType: file.type || 'image/png' }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.reason || 'Upload failed to initialize');
      }

      // 2. Upload directly to R2
      const uploadRes = await fetch(data.uploadUrl, {
        method: 'PUT',
        headers: { 'Content-Type': file.type || 'image/png' },
        body: file,
      });

      if (!uploadRes.ok) {
        throw new Error('Direct upload to R2 failed');
      }

      // 3. Set the final public URL
      set('image', data.url);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'File upload error';
      setErr(msg);
    } finally {
      setUploading(false);
    }
  };

  // Structured field helpers
  const handleArrayChange = (field: 'whoShouldWear' | 'benefits' | 'careInstructions', index: number, value: string) => {
    setStructuredDesc((prev) => {
      const arr = [...prev[field]];
      arr[index] = value;
      return { ...prev, [field]: arr };
    });
  };

  const addArrayItem = (field: 'whoShouldWear' | 'benefits' | 'careInstructions') => {
    setStructuredDesc((prev) => ({
      ...prev,
      [field]: [...prev[field], ''],
    }));
  };

  const removeArrayItem = (field: 'whoShouldWear' | 'benefits' | 'careInstructions', index: number) => {
    setStructuredDesc((prev) => {
      const arr = [...prev[field]];
      arr.splice(index, 1);
      return { ...prev, [field]: arr.length ? arr : [''] };
    });
  };

  // Chakra toggle helper
  const toggleChakra = (chakra: string) => {
    const current = [...f.chakras];
    const index = current.indexOf(chakra);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(chakra);
    }
    set('chakras', current);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    setSaving(true);

    // Finalize category and subcategory values
    const finalCategory = isCustomCategory ? customCategory : f.category;
    const finalSubcategory = isCustomSubcategory ? customSubcategory : f.subcategory;

    if (!finalCategory) {
      setErr('Category is required');
      setSaving(false);
      return;
    }
    if (!finalSubcategory) {
      setErr('Subcategory is required');
      setSaving(false);
      return;
    }

    // Construct serialized longDesc JSON
    const longDescJson = JSON.stringify({
      description: structuredDesc.description,
      whoShouldWear: structuredDesc.whoShouldWear.filter(Boolean),
      benefits: structuredDesc.benefits.filter(Boolean),
      howToWear: [
        structuredDesc.howToWearHand ? `Wear on the ${structuredDesc.howToWearHand} as recommended.` : 'Keep close to your body or wear daily.',
        structuredDesc.howToWearWhen ? `Best worn during: ${structuredDesc.howToWearWhen}.` : 'Best worn during meditation, yoga, or professional work.'
      ],
      careInstructions: structuredDesc.careInstructions.filter(Boolean),
      disclaimer: structuredDesc.disclaimer || 'Crystals and spiritual tools are supporting instruments for emotional and energetic well-being, and should not be used as a substitute for professional medical or mental health treatments.',
    });

    const payload = {
      ...f,
      category: finalCategory,
      subcategory: finalSubcategory,
      longDesc: longDescJson,
    };

    try {
      const url = id ? `/api/admin/products/${id}` : '/api/admin/products';
      const method = id ? 'PUT' : 'POST';
      const res = await fetch(url, {
        method,
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!data.ok) {
        setErr(data.reason || 'Failed');
        setSaving(false);
        return;
      }
      router.push('/admin/products');
      router.refresh();
    } catch {
      setErr('Network error');
      setSaving(false);
    }
  };

  return (
    <form onSubmit={submit} style={{ background: '#fff', padding: 24, borderRadius: 14, boxShadow: '0 4px 14px rgba(0,0,0,0.04)', maxWidth: 880, marginTop: 16 }}>
      <h3 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-heading)', borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '0.5rem', marginBottom: '1.25rem', color: 'var(--primary,#C8956C)' }}>
        Basic Details
      </h3>
      
      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Name *</label>
          <input required value={f.name} onChange={(e) => set('name', e.target.value)} className="newsletter-input" style={{ width: '100%' }} placeholder="e.g. Amethyst Crystal Bracelet" />
        </div>
        <div className="col-md-6">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Slug (URL slug) *</label>
          <input required value={f.slug} onChange={(e) => set('slug', e.target.value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''))} className="newsletter-input" style={{ width: '100%' }} placeholder="e.g. amethyst-bracelet" />
        </div>
        
        <div className="col-md-6">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Category *</label>
          {!isCustomCategory ? (
            <div className="d-flex gap-2">
              <select value={f.category} onChange={(e) => {
                if (e.target.value === 'custom') {
                  setIsCustomCategory(true);
                } else {
                  set('category', e.target.value);
                }
              }} className="newsletter-input" style={{ width: '100%' }}>
                {STANDARD_CATEGORIES.map((c) => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
                <option value="custom">+ Add Custom Category...</option>
              </select>
            </div>
          ) : (
            <div className="d-flex gap-2">
              <input required value={customCategory} onChange={(e) => setCustomCategory(e.target.value.toLowerCase())} className="newsletter-input" style={{ width: '100%' }} placeholder="e.g. pyramids" />
              <button type="button" className="btn-outline-custom" style={{ padding: '0 12px' }} onClick={() => setIsCustomCategory(false)}>Select standard</button>
            </div>
          )}
        </div>

        <div className="col-md-6">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Subcategory *</label>
          {!isCustomSubcategory ? (
            <div className="d-flex gap-2">
              <select value={f.subcategory} onChange={(e) => {
                if (e.target.value === 'custom') {
                  setIsCustomSubcategory(true);
                } else {
                  set('subcategory', e.target.value);
                }
              }} className="newsletter-input" style={{ width: '100%' }}>
                {STANDARD_SUBCATEGORIES.map((sc) => (
                  <option key={sc} value={sc}>{sc}</option>
                ))}
                <option value="custom">+ Add Custom Subcategory...</option>
              </select>
            </div>
          ) : (
            <div className="d-flex gap-2">
              <input required value={customSubcategory} onChange={(e) => setCustomSubcategory(e.target.value)} className="newsletter-input" style={{ width: '100%' }} placeholder="e.g. Crystal Trees" />
              <button type="button" className="btn-outline-custom" style={{ padding: '0 12px' }} onClick={() => setIsCustomSubcategory(false)}>Select standard</button>
            </div>
          )}
        </div>

        <div className="col-md-3">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Price (₹) *</label>
          <input required type="number" min={0} value={f.price} onChange={(e) => set('price', Number(e.target.value))} className="newsletter-input" style={{ width: '100%' }} />
        </div>
        <div className="col-md-3">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Price (USD) *</label>
          <input required type="number" min={0} value={f.usdPrice ?? ''} onChange={(e) => set('usdPrice', Number(e.target.value))} className="newsletter-input" style={{ width: '100%' }} />
        </div>
        <div className="col-md-3">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Original (₹)</label>
          <input type="number" min={0} value={f.originalPrice ?? ''} onChange={(e) => set('originalPrice', e.target.value ? Number(e.target.value) : null)} className="newsletter-input" style={{ width: '100%' }} placeholder="e.g. 1080" />
        </div>
        <div className="col-md-3">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Original (USD)</label>
          <input type="number" min={0} value={f.originalUsdPrice ?? ''} onChange={(e) => set('originalUsdPrice', e.target.value ? Number(e.target.value) : null)} className="newsletter-input" style={{ width: '100%' }} placeholder="e.g. 25" />
        </div>
        <div className="col-md-4">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Stock (Inventory)</label>
          <input type="number" min={0} value={f.stock} onChange={(e) => set('stock', Number(e.target.value))} className="newsletter-input" style={{ width: '100%' }} />
        </div>
      </div>

      <h3 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-heading)', borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '0.5rem', marginBottom: '1.25rem', color: 'var(--primary,#C8956C)' }}>
        Media & Display Settings
      </h3>

      <div className="row g-3 mb-4">
        <div className="col-md-8">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Image URL / Local File *</label>
          <div className="d-flex gap-2 mb-2">
            <input required type="text" value={f.image} onChange={(e) => set('image', e.target.value)} className="newsletter-input" style={{ width: '100%' }} placeholder="/images/products/..." />
            <div style={{ position: 'relative' }}>
              <input type="file" id="image-upload" style={{ display: 'none' }} accept="image/*" onChange={handleFileUpload} disabled={uploading} />
              <label htmlFor="image-upload" className="btn-outline-custom" style={{ cursor: 'pointer', margin: 0, whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', height: '100%', padding: '0 16px' }}>
                <i className={`fa-solid ${uploading ? 'fa-spinner fa-spin' : 'fa-upload'} me-2`}></i>
                {uploading ? 'Uploading...' : 'Upload Image'}
              </label>
            </div>
          </div>
          <p style={{ margin: 0, fontSize: '0.78rem', color: '#888' }}>Upload a local image file directly or paste an absolute image link.</p>
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          {f.image ? (
            <div style={{ position: 'relative', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12, padding: 4, background: '#FAF6F1' }}>
              <img src={f.image} alt="Preview" style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'contain', borderRadius: 8 }} />
              <button type="button" onClick={() => set('image', '')} style={{ position: 'absolute', top: -8, right: -8, width: 22, height: 22, borderRadius: '50%', background: '#D95F5F', color: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', cursor: 'pointer' }}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          ) : (
            <div style={{ width: 100, height: 100, borderRadius: 12, border: '2px dashed rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#999', fontSize: '0.75rem' }}>
              <i className="fa-regular fa-image" style={{ fontSize: '1.5rem', marginBottom: 6 }}></i>
              No image
            </div>
          )}
        </div>

        <div className="col-md-6">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Badge Overlay</label>
          <select value={f.badge ?? ''} onChange={(e) => set('badge', (e.target.value || null) as Initial['badge'])} className="newsletter-input" style={{ width: '100%' }}>
            <option value="">— None —</option>
            <option value="Popular">Popular</option>
            <option value="New">New</option>
            <option value="Sale">Sale</option>
            <option value="Bestseller">Bestseller</option>
          </select>
        </div>

        <div className="col-md-6">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Short Description * (Catalog Summary)</label>
          <input required value={f.desc} onChange={(e) => set('desc', e.target.value)} className="newsletter-input" style={{ width: '100%' }} placeholder="e.g. Grounding volcanic rock combined with 7 chakra balancing crystals." />
        </div>

        <div className="col-12">
          <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: 8 }}>Chakras Associated</label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {STANDARD_CHAKRAS.map((ch) => {
              const active = f.chakras.includes(ch);
              return (
                <button
                  key={ch}
                  type="button"
                  onClick={() => toggleChakra(ch)}
                  className="crystal-tag"
                  style={{
                    background: active ? 'var(--primary,#C8956C)' : 'rgba(0,0,0,0.03)',
                    color: active ? '#fff' : 'inherit',
                    border: '1px solid',
                    borderColor: active ? 'var(--primary,#C8956C)' : 'rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '0.82rem',
                    padding: '6px 12px',
                    borderRadius: 999,
                    transition: 'all 0.2s',
                  }}
                >
                  {ch}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <h3 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-heading)', borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '0.5rem', marginBottom: '1.25rem', color: 'var(--primary,#C8956C)' }}>
        Redirection Details & Descriptions (Tabs view)
      </h3>

      <div className="row g-3 mb-4">
        <div className="col-12">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Long Description (Main Tab) *</label>
          <textarea required rows={4} value={structuredDesc.description} onChange={(e) => setStructuredDesc(prev => ({ ...prev, description: e.target.value }))} className="newsletter-input" style={{ width: '100%' }} placeholder="Full descriptive text of the item..." />
        </div>

        <div className="col-md-6">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Who Should Wear (One entry per line)</label>
          <div style={{ display: 'grid', gap: 6 }}>
            {structuredDesc.whoShouldWear.map((item, idx) => (
              <div key={idx} className="d-flex gap-2">
                <input value={item} onChange={(e) => handleArrayChange('whoShouldWear', idx, e.target.value)} className="newsletter-input" style={{ width: '100%' }} placeholder="e.g. People seeking emotional balance." />
                <button type="button" className="btn-outline-custom" style={{ padding: '0 10px', color: '#D95F5F', borderColor: 'rgba(217,95,95,0.2)' }} onClick={() => removeArrayItem('whoShouldWear', idx)}>
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            ))}
            <button type="button" className="btn-outline-custom" style={{ width: 'fit-content', fontSize: '0.8rem', padding: '4px 10px' }} onClick={() => addArrayItem('whoShouldWear')}>
              <i className="fa-solid fa-plus me-1"></i> Add Bullet
            </button>
          </div>
        </div>

        <div className="col-md-6">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Benefits (One entry per line)</label>
          <div style={{ display: 'grid', gap: 6 }}>
            {structuredDesc.benefits.map((item, idx) => (
              <div key={idx} className="d-flex gap-2">
                <input value={item} onChange={(e) => handleArrayChange('benefits', idx, e.target.value)} className="newsletter-input" style={{ width: '100%' }} placeholder="e.g. Aligns and balances the heart chakra." />
                <button type="button" className="btn-outline-custom" style={{ padding: '0 10px', color: '#D95F5F', borderColor: 'rgba(217,95,95,0.2)' }} onClick={() => removeArrayItem('benefits', idx)}>
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            ))}
            <button type="button" className="btn-outline-custom" style={{ width: 'fit-content', fontSize: '0.8rem', padding: '4px 10px' }} onClick={() => addArrayItem('benefits')}>
              <i className="fa-solid fa-plus me-1"></i> Add Bullet
            </button>
          </div>
        </div>

        <div className="col-md-6">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Wear Rules - Hand Select</label>
          <select value={structuredDesc.howToWearHand} onChange={(e) => setStructuredDesc(prev => ({ ...prev, howToWearHand: e.target.value }))} className="newsletter-input" style={{ width: '100%' }}>
            <option value="Left Hand">Left Hand (Receiving energy)</option>
            <option value="Right Hand">Right Hand (Giving/Projecting energy)</option>
            <option value="Either Hand">Either Hand</option>
            <option value="">None / Not Applicable</option>
          </select>
        </div>

        <div className="col-md-6">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Wear Rules - Best Worn During</label>
          <input value={structuredDesc.howToWearWhen} onChange={(e) => setStructuredDesc(prev => ({ ...prev, howToWearWhen: e.target.value }))} className="newsletter-input" style={{ width: '100%' }} placeholder="e.g. Meditation, daily routines, travel" />
        </div>

        <div className="col-12">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Care Instructions (One entry per line)</label>
          <div style={{ display: 'grid', gap: 6 }}>
            {structuredDesc.careInstructions.map((item, idx) => (
              <div key={idx} className="d-flex gap-2">
                <input value={item} onChange={(e) => handleArrayChange('careInstructions', idx, e.target.value)} className="newsletter-input" style={{ width: '100%' }} placeholder="e.g. Moonlight charging or placing on a selenite plate." />
                <button type="button" className="btn-outline-custom" style={{ padding: '0 10px', color: '#D95F5F', borderColor: 'rgba(217,95,95,0.2)' }} onClick={() => removeArrayItem('careInstructions', idx)}>
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            ))}
            <button type="button" className="btn-outline-custom" style={{ width: 'fit-content', fontSize: '0.8rem', padding: '4px 10px' }} onClick={() => addArrayItem('careInstructions')}>
              <i className="fa-solid fa-plus me-1"></i> Add Bullet
            </button>
          </div>
        </div>

        <div className="col-12">
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Disclaimer Text</label>
          <textarea rows={2} value={structuredDesc.disclaimer} onChange={(e) => setStructuredDesc(prev => ({ ...prev, disclaimer: e.target.value }))} className="newsletter-input" style={{ width: '100%' }} />
        </div>

        <div className="col-12">
          <label style={{ fontSize: '0.9rem', display: 'inline-flex', gap: 8, alignItems: 'center', cursor: 'pointer', userSelect: 'none' }}>
            <input type="checkbox" checked={f.active} onChange={(e) => set('active', e.target.checked)} style={{ width: 16, height: 16 }} />
            <span>Visible on the storefront (active status)</span>
          </label>
        </div>
      </div>

      {err && <p style={{ color: '#D95F5F', marginTop: 12 }}><i className="fa-solid fa-circle-exclamation me-2"></i>{err}</p>}

      <div className="d-flex gap-3 mt-4" style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '1.25rem' }}>
        <button type="submit" disabled={saving || uploading} className="btn-primary-custom" style={{ justifyContent: 'center', minWidth: 150 }}>
          <i className="fa-solid fa-save me-2"></i>
          <span>{saving ? 'Saving…' : (id ? 'Save changes' : 'Create product')}</span>
        </button>
        <button type="button" onClick={() => router.back()} className="btn-outline-custom" style={{ minWidth: 120 }}>
          <i className="fa-solid fa-arrow-left me-2"></i>
          <span>Cancel</span>
        </button>
      </div>
    </form>
  );
}
