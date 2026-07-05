'use client';

import { useMemo, useState } from 'react';

export interface GiftingRecipientRow {
  _id: string;
  key: string;
  label: string;
  subtitle: string;
  icon: string;
  tagline: string;
  keywords: string[];
  productSlugs: string[];
  fallback: string;
  color: string;
  bg: string;
  order: number;
}

export interface ProductOption {
  slug: string;
  name: string;
  image: string;
  price: number;
  category: string;
}

const EMPTY: Omit<GiftingRecipientRow, '_id'> = {
  key: '', label: '', subtitle: '', icon: 'fa-solid fa-gift',
  tagline: '', keywords: [], productSlugs: [], fallback: 'bracelets',
  color: '#C8956C', bg: 'rgba(200,149,108,0.12)', order: 0,
};

function Modal({
  item,
  products,
  onClose,
  onSave,
  saving,
}: {
  item: Omit<GiftingRecipientRow, '_id'> & { _id?: string };
  products: ProductOption[];
  onClose: () => void;
  onSave: (data: Omit<GiftingRecipientRow, '_id'> & { _id?: string }) => void;
  saving: boolean;
}) {
  const [form, setForm] = useState({ ...item });
  const [kwStr, setKwStr] = useState(item.keywords.join(', '));
  const [selected, setSelected] = useState<string[]>(item.productSlugs ?? []);
  const [prodSearch, setProdSearch] = useState('');

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const toggleProduct = (slug: string) =>
    setSelected((s) => (s.includes(slug) ? s.filter((x) => x !== slug) : [...s, slug]));

  const filteredProducts = useMemo(() => {
    const q = prodSearch.trim().toLowerCase();
    if (!q) return products;
    return products.filter(
      (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    );
  }, [products, prodSearch]);

  const productMap = useMemo(() => new Map(products.map((p) => [p.slug, p])), [products]);

  const handleSave = () => {
    const keywords = kwStr.split(',').map((s) => s.trim()).filter(Boolean);
    onSave({ ...form, keywords, productSlugs: selected });
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} onClick={onClose} />
      <div style={{ position: 'relative', background: '#fff', borderRadius: 18, padding: '28px 32px', width: '100%', maxWidth: 540, maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 24px 60px rgba(0,0,0,0.25)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', margin: 0 }}>
            {form._id ? 'Edit Recipient' : 'Add Recipient'}
          </h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '1.3rem', cursor: 'pointer', color: '#888', padding: 4 }}>
            <i className="fa-solid fa-xmark" />
          </button>
        </div>

        <div style={{ display: 'grid', gap: 16 }}>
          <Row label="Key (URL-safe slug)">
            <input className="newsletter-input" value={form.key} onChange={(e) => set('key', e.target.value.toLowerCase().replace(/\s+/g, '-'))} placeholder="e.g. partner" style={{ width: '100%' }} />
          </Row>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <Row label="Label">
              <input className="newsletter-input" value={form.label} onChange={(e) => set('label', e.target.value)} placeholder="Partner" style={{ width: '100%' }} />
            </Row>
            <Row label="Subtitle">
              <input className="newsletter-input" value={form.subtitle} onChange={(e) => set('subtitle', e.target.value)} placeholder="Soulmate or lover" style={{ width: '100%' }} />
            </Row>
          </div>

          <Row label="FontAwesome Icon class">
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <input className="newsletter-input" value={form.icon} onChange={(e) => set('icon', e.target.value)} placeholder="fa-solid fa-heart" style={{ flex: 1 }} />
              <div style={{ width: 40, height: 40, borderRadius: 10, background: form.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className={form.icon} style={{ color: '#fff', fontSize: '1.1rem' }} />
              </div>
            </div>
          </Row>

          <Row label="Tagline (shown on gift drawer)">
            <input className="newsletter-input" value={form.tagline} onChange={(e) => set('tagline', e.target.value)} placeholder="Crystals of love..." style={{ width: '100%' }} />
          </Row>

          <Row label="Keywords (comma-separated — used to match products)">
            <textarea
              className="newsletter-input"
              value={kwStr}
              onChange={(e) => setKwStr(e.target.value)}
              placeholder="rose, love, heart, moonstone"
              rows={2}
              style={{ width: '100%', resize: 'vertical' }}
            />
          </Row>

          <Row label={`Hand-picked products (${selected.length} selected — overrides keywords when set)`}>
            <div style={{ border: '1px solid rgba(0,0,0,0.12)', borderRadius: 12, overflow: 'hidden' }}>
              {/* selected chips */}
              {selected.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, padding: '10px 12px', background: 'rgba(200,149,108,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                  {selected.map((slug) => {
                    const p = productMap.get(slug);
                    return (
                      <span key={slug} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fff', border: '1px solid rgba(200,149,108,0.4)', borderRadius: 20, padding: '3px 6px 3px 4px', fontSize: '0.74rem' }}>
                        {p?.image && <img src={p.image} alt="" style={{ width: 20, height: 20, borderRadius: '50%', objectFit: 'cover' }} />}
                        {p?.name ?? slug}
                        <button onClick={() => toggleProduct(slug)} style={{ background: 'none', border: 'none', color: '#c66', cursor: 'pointer', padding: '0 3px', fontSize: '0.8rem', lineHeight: 1 }} title="Remove">
                          <i className="fa-solid fa-xmark" />
                        </button>
                      </span>
                    );
                  })}
                </div>
              )}
              {/* search */}
              <input
                className="newsletter-input"
                value={prodSearch}
                onChange={(e) => setProdSearch(e.target.value)}
                placeholder="🔍 Search products by name or category…"
                style={{ width: '100%', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.08)', borderRadius: 0 }}
              />
              {/* product list */}
              <div style={{ maxHeight: 220, overflowY: 'auto' }}>
                {filteredProducts.length === 0 && (
                  <p style={{ padding: 14, margin: 0, color: '#aaa', fontSize: '0.82rem', textAlign: 'center' }}>No products match</p>
                )}
                {filteredProducts.map((p) => {
                  const isSel = selected.includes(p.slug);
                  return (
                    <button
                      key={p.slug}
                      onClick={() => toggleProduct(p.slug)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 10, width: '100%',
                        padding: '8px 12px', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.04)',
                        background: isSel ? 'rgba(200,149,108,0.12)' : '#fff',
                        cursor: 'pointer', textAlign: 'left',
                      }}
                    >
                      <i
                        className={isSel ? 'fa-solid fa-square-check' : 'fa-regular fa-square'}
                        style={{ color: isSel ? 'var(--primary,#C8956C)' : '#ccc', fontSize: '1rem', flexShrink: 0 }}
                      />
                      {p.image && <img src={p.image} alt="" style={{ width: 34, height: 34, borderRadius: 8, objectFit: 'cover', flexShrink: 0 }} />}
                      <span style={{ flex: 1, fontSize: '0.84rem', fontWeight: isSel ? 600 : 400 }}>
                        {p.name}
                        <span style={{ display: 'block', fontSize: '0.7rem', color: '#999' }}>{p.category}</span>
                      </span>
                      <span style={{ fontSize: '0.8rem', color: '#888', fontWeight: 600 }}>₹{p.price.toLocaleString('en-IN')}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <p style={{ fontSize: '0.72rem', color: '#aaa', margin: '6px 2px 0' }}>
              Leave empty to auto-match products using the keywords above.
            </p>
          </Row>

          <Row label="Fallback category (if no keyword matches)">
            <select className="newsletter-input" value={form.fallback} onChange={(e) => set('fallback', e.target.value)} style={{ width: '100%' }}>
              {['bracelets','malas','pendants','anklets','home-decor','spell-jars','silver-jewelry','crystal-towers','raw-crystal'].map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </Row>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <Row label="Accent colour">
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <input type="color" value={form.color} onChange={(e) => set('color', e.target.value)} style={{ width: 40, height: 36, borderRadius: 8, border: '1px solid #ddd', cursor: 'pointer', padding: 2 }} />
                <input className="newsletter-input" value={form.color} onChange={(e) => set('color', e.target.value)} placeholder="#C8956C" style={{ flex: 1 }} />
              </div>
            </Row>
            <Row label="Display order">
              <input type="number" className="newsletter-input" value={form.order} onChange={(e) => set('order', e.target.value)} style={{ width: '100%' }} />
            </Row>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 24, paddingTop: 16, borderTop: '1px solid rgba(0,0,0,0.07)' }}>
          <button onClick={onClose} className="btn-outline-custom" style={{ padding: '0 20px', height: 40 }}>Cancel</button>
          <button onClick={handleSave} disabled={saving || !form.key || !form.label} className="btn-primary-custom" style={{ padding: '0 24px', height: 40 }}>
            {saving ? <><i className="fa-solid fa-spinner fa-spin me-2" />Saving…</> : <><i className="fa-solid fa-check me-2" />Save</>}
          </button>
        </div>
      </div>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#888', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{label}</label>
      {children}
    </div>
  );
}

export default function GiftingAdmin({ initialItems, products }: { initialItems: GiftingRecipientRow[]; products: ProductOption[] }) {
  const [items, setItems] = useState<GiftingRecipientRow[]>(initialItems);
  const [modalItem, setModalItem] = useState<(Omit<GiftingRecipientRow, '_id'> & { _id?: string }) | null>(null);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState('');

  const openAdd = () => setModalItem({ ...EMPTY, order: items.length });
  const openEdit = (r: GiftingRecipientRow) => setModalItem({ ...r });
  const closeModal = () => { setModalItem(null); setError(''); };

  const handleSave = async (data: Omit<GiftingRecipientRow, '_id'> & { _id?: string }) => {
    setSaving(true);
    setError('');
    try {
      const isEdit = !!data._id;
      const url = isEdit ? `/api/admin/gifting/${data._id}` : '/api/admin/gifting';
      const method = isEdit ? 'PUT' : 'POST';
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      const json = await res.json();
      if (!json.ok) throw new Error(json.reason || 'Failed to save');
      const saved: GiftingRecipientRow = json.item;
      setItems((prev) =>
        isEdit
          ? prev.map((i) => (i._id === saved._id ? saved : i))
          : [...prev, saved].sort((a, b) => a.order - b.order),
      );
      closeModal();
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Error saving');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string, label: string) => {
    if (!confirm(`Delete "${label}"? This cannot be undone.`)) return;
    setDeletingId(id);
    try {
      await fetch(`/api/admin/gifting/${id}`, { method: 'DELETE' });
      setItems((prev) => prev.filter((i) => i._id !== id));
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', margin: 0 }}>
            Gifting Recipients
            <span style={{ fontSize: '1rem', color: '#888', fontWeight: 400, marginLeft: 10 }}>({items.length})</span>
          </h1>
          <p style={{ color: '#888', fontSize: '0.85rem', marginTop: 4, marginBottom: 0 }}>
            Manage the recipient categories shown in the "Gift Something Sacred" experience on the Shop page.
          </p>
        </div>
        <button onClick={openAdd} className="btn-primary-custom">
          <i className="fa-solid fa-plus" /><span>Add Recipient</span>
        </button>
      </div>

      {error && (
        <div style={{ background: '#fee2e2', border: '1px solid #fca5a5', borderRadius: 10, padding: '10px 16px', marginBottom: 16, color: '#dc2626', fontSize: '0.9rem' }}>
          <i className="fa-solid fa-circle-exclamation me-2" />{error}
        </div>
      )}

      <div style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', minWidth: 640 }}>
            <thead>
              <tr style={{ background: '#FAF6F1', borderBottom: '2px solid rgba(0,0,0,0.06)' }}>
                <th style={{ padding: '12px 16px', textAlign: 'left', width: 56 }}>Icon</th>
                <th style={{ padding: '12px 16px', textAlign: 'left' }}>Label / Subtitle</th>
                <th style={{ padding: '12px 16px', textAlign: 'left' }}>Tagline</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', width: 220 }}>Keywords</th>
                <th style={{ padding: '12px 16px', textAlign: 'center', width: 60 }}>Order</th>
                <th style={{ padding: '12px 16px', textAlign: 'right', width: 120 }}></th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 && (
                <tr>
                  <td colSpan={6} style={{ padding: 40, textAlign: 'center', color: '#aaa' }}>
                    <i className="fa-solid fa-gift" style={{ fontSize: '2rem', display: 'block', marginBottom: 8, color: '#ddd' }} />
                    No recipients yet. Add your first one.
                  </td>
                </tr>
              )}
              {items.map((r) => (
                <tr key={r._id} style={{ borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '12px 16px' }}>
                    <div style={{ width: 40, height: 40, borderRadius: 12, background: r.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className={r.icon} style={{ color: '#fff', fontSize: '1rem' }} />
                    </div>
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <div style={{ fontWeight: 600 }}>{r.label}</div>
                    <div style={{ color: '#999', fontSize: '0.78rem' }}>{r.subtitle}</div>
                    <code style={{ fontSize: '0.7rem', color: '#bbb' }}>{r.key}</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#666', maxWidth: 240, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: '0.83rem' }}>
                    {r.tagline || <span style={{ color: '#ccc', fontStyle: 'italic' }}>—</span>}
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    {(r.productSlugs?.length ?? 0) > 0 ? (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(30,132,73,0.1)', color: '#1E8449', borderRadius: 8, padding: '3px 10px', fontSize: '0.75rem', fontWeight: 700 }}>
                        <i className="fa-solid fa-hand-pointer" />
                        {r.productSlugs.length} hand-picked
                      </span>
                    ) : (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                        {r.keywords.slice(0, 4).map((kw) => (
                          <span key={kw} style={{ background: 'rgba(200,149,108,0.1)', color: 'var(--primary,#C8956C)', borderRadius: 6, padding: '1px 7px', fontSize: '0.72rem', fontWeight: 600 }}>{kw}</span>
                        ))}
                        {r.keywords.length > 4 && (
                          <span style={{ color: '#aaa', fontSize: '0.72rem' }}>+{r.keywords.length - 4} more</span>
                        )}
                        {r.keywords.length === 0 && <span style={{ color: '#ccc', fontSize: '0.78rem', fontStyle: 'italic' }}>all products</span>}
                      </div>
                    )}
                  </td>
                  <td style={{ padding: '12px 16px', textAlign: 'center', color: '#888', fontWeight: 600 }}>{r.order}</td>
                  <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                    <button
                      onClick={() => openEdit(r)}
                      style={{ background: 'none', border: '1px solid rgba(200,149,108,0.3)', color: 'var(--primary,#C8956C)', borderRadius: 8, padding: '5px 12px', fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer', marginRight: 6 }}
                    >
                      <i className="fa-solid fa-pen me-1" />Edit
                    </button>
                    <button
                      onClick={() => handleDelete(r._id, r.label)}
                      disabled={deletingId === r._id}
                      style={{ background: 'none', border: '1px solid rgba(220,38,38,0.25)', color: '#dc2626', borderRadius: 8, padding: '5px 10px', fontSize: '0.82rem', cursor: 'pointer' }}
                    >
                      {deletingId === r._id
                        ? <i className="fa-solid fa-spinner fa-spin" />
                        : <i className="fa-solid fa-trash" />}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p style={{ marginTop: 16, fontSize: '0.8rem', color: '#aaa' }}>
        <i className="fa-solid fa-info-circle me-1" />
        Changes are live immediately — the Shop page gifting drawer loads recipients from the database.
      </p>

      {modalItem && (
        <Modal
          item={modalItem}
          products={products}
          onClose={closeModal}
          onSave={handleSave}
          saving={saving}
        />
      )}
    </div>
  );
}
