'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

const FALLBACK_RECIPIENTS = [
  { key: 'partner',   label: 'Partner',         subtitle: 'Soulmate or lover',       icon: 'fa-solid fa-heart',              tagline: 'Crystals of love, deep connection & romance',              keywords: ['rose','love','heart','rhodonite','garnet','ruby','moonstone'],               fallback: 'bracelets', color: '#D95F7A', bg: 'rgba(217,95,122,0.12)' },
  { key: 'friend',    label: 'Best Friend',      subtitle: 'Your ride-or-die',        icon: 'fa-solid fa-user-group',         tagline: 'Joyful, vibrant crystals for a sparkling bond',            keywords: ['citrine','amethyst','seven chakra','happiness','joy','clear quartz'],        fallback: 'bracelets', color: '#C8956C', bg: 'rgba(200,149,108,0.12)' },
  { key: 'family',    label: 'Family',           subtitle: 'Parents & loved ones',    icon: 'fa-solid fa-people-roof',        tagline: 'Protective, healing stones for the home',                  keywords: ['protection','black','obsidian','tourmaline','family','healing'],             fallback: 'bracelets', color: '#9B8940', bg: 'rgba(155,137,64,0.12)' },
  { key: 'brother',   label: 'Brother',          subtitle: 'Strong & grounded',       icon: 'fa-solid fa-shield-halved',      tagline: 'Grounding crystals for strength & confidence',              keywords: ['tiger','pyrite','onyx','hematite','triple protection','obsidian'],          fallback: 'bracelets', color: '#2E86AB', bg: 'rgba(46,134,171,0.12)' },
  { key: 'sister',    label: 'Sister',           subtitle: 'Radiant & free',          icon: 'fa-solid fa-star',               tagline: 'Feminine crystals for grace & intuition',                  keywords: ['moonstone','rose quartz','pink','amethyst','labradorite','angel'],          fallback: 'bracelets', color: '#C45FA0', bg: 'rgba(196,95,160,0.12)' },
  { key: 'mother',    label: 'Mother',           subtitle: 'Nurturing & divine',      icon: 'fa-solid fa-hand-holding-heart', tagline: 'Loving crystals to honour the goddess in her',             keywords: ['rose quartz','moonstone','pink','nurturing','pearl','love','rose'],         fallback: 'bracelets', color: '#E8647A', bg: 'rgba(232,100,122,0.12)' },
  { key: 'father',    label: 'Father',           subtitle: 'Strong & wise',           icon: 'fa-solid fa-mountain-sun',       tagline: 'Grounding stones for the pillar of the family',            keywords: ['tiger','pyrite','obsidian','hematite','strength','protection','black'],     fallback: 'bracelets', color: '#5D6D7E', bg: 'rgba(93,109,126,0.12)' },
  { key: 'colleague', label: 'Colleague',        subtitle: 'Success & clarity',       icon: 'fa-solid fa-briefcase',          tagline: 'Crystals for focus, abundance & career wins',              keywords: ['citrine','pyrite','green aventurine','success','abundance','clear quartz'], fallback: 'bracelets', color: '#1A8C6E', bg: 'rgba(26,140,110,0.12)' },
  { key: 'bride',     label: 'Bride / Wedding',  subtitle: 'New beginnings',          icon: 'fa-solid fa-ring',               tagline: 'Blessings for love, harmony & a beautiful union',          keywords: ['rose quartz','moonstone','pink','love','harmony','pearl','angel'],          fallback: 'bracelets', color: '#C45FA0', bg: 'rgba(196,95,160,0.12)' },
  { key: 'teacher',   label: 'Teacher / Mentor', subtitle: 'Wisdom & guidance',       icon: 'fa-solid fa-graduation-cap',     tagline: 'Crystals of wisdom, clarity and calm energy',              keywords: ['amethyst','lapis','sodalite','clear quartz','wisdom','blue','labradorite'], fallback: 'bracelets', color: '#5B4FCF', bg: 'rgba(91,79,207,0.12)' },
  { key: 'self',      label: 'Yourself',         subtitle: 'You deserve it',          icon: 'fa-solid fa-spa',                tagline: "Your soul picked this — trust the pull",                   keywords: [],                                                                          fallback: 'bracelets', color: '#27AE60', bg: 'rgba(39,174,96,0.12)' },
];

type Recipient = typeof FALLBACK_RECIPIENTS[0] & { productSlugs?: string[] };
type AnyProduct = { name: string; desc?: string; category?: string; slug?: string; [key: string]: any };

function getGiftProducts(recipient: Recipient, liveProducts: AnyProduct[]): AnyProduct[] {
  // Admin hand-picked products take priority (kept in the admin's chosen order)
  if (recipient.productSlugs && recipient.productSlugs.length > 0) {
    const bySlug = new Map(liveProducts.map((p) => [p.slug ?? p.id, p]));
    const picked = recipient.productSlugs
      .map((slug) => bySlug.get(slug))
      .filter((p): p is AnyProduct => Boolean(p));
    if (picked.length > 0) return picked;
  }
  if (recipient.keywords.length === 0) return liveProducts.slice(0, 8);
  const matched = liveProducts.filter((p) =>
    recipient.keywords.some(
      (kw) => p.name.toLowerCase().includes(kw) || (p.desc || '').toLowerCase().includes(kw),
    ),
  );
  if (matched.length >= 4) return matched.slice(0, 8);
  return liveProducts.filter((p) => p.category === recipient.fallback).slice(0, 8);
}

const CONFETTI_COLORS = ['#F7C948','#E8647A','#C8956C','#9B59B6','#27AE60','#2E86AB','#F0D080'];

export default function GiftingExperience() {
  const [open, setOpen] = useState(false);
  const [recipients, setRecipients] = useState<Recipient[]>(FALLBACK_RECIPIENTS);
  const [loaded, setLoaded] = useState(false);
  const [liveProducts, setLiveProducts] = useState<AnyProduct[]>([]);
  const [recipient, setRecipient] = useState<Recipient | null>(null);
  const [giftMsg, setGiftMsg] = useState('');

  // Load from localStorage on mount (since localStorage is client-only)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedMsg = localStorage.getItem('kmc_gift_message') || '';
      setGiftMsg(savedMsg);

      const savedRec = localStorage.getItem('kmc_gift_recipient');
      if (savedRec) {
        try {
          const parsed = JSON.parse(savedRec);
          setRecipient(parsed);
        } catch {
          // ignore
        }
      }
    }
  }, []);

  // Save to localStorage when changed
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (recipient) {
        localStorage.setItem('kmc_gift_recipient', JSON.stringify(recipient));
      } else {
        localStorage.removeItem('kmc_gift_recipient');
      }
    }
  }, [recipient]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (giftMsg) {
        localStorage.setItem('kmc_gift_message', giftMsg);
      } else {
        localStorage.removeItem('kmc_gift_message');
      }
    }
  }, [giftMsg]);

  // Load recipients + live products from DB when drawer first opens
  useEffect(() => {
    if (!open || loaded) return;
    Promise.all([
      fetch('/api/gifting').then((r) => r.json()).catch(() => []),
      fetch('/api/products').then((r) => r.json()).catch(() => ({ products: [] })),
    ]).then(([giftingData, productsData]) => {
      if (Array.isArray(giftingData) && giftingData.length > 0) setRecipients(giftingData);
      if (Array.isArray(productsData.products)) setLiveProducts(productsData.products);
    }).finally(() => setLoaded(true));
  }, [open, loaded]);

  const giftProducts = recipient ? getGiftProducts(recipient, liveProducts) : [];

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* ── Gift Banner ── */}
      <button className="gift-banner" onClick={() => setOpen(true)}>
        <div className="gift-banner-sparkles" aria-hidden="true">
          {['✦','✧','✦','✧','✦'].map((s, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.4}s` }}>{s}</span>
          ))}
        </div>
        <div className="gift-banner-left">
          <div className="gift-banner-icon-wrap">
            <i className="fa-solid fa-gift" />
          </div>
          <div>
            <span className="gift-banner-eyebrow">Looking for a gift?</span>
            <h4 className="gift-banner-title">Gift Something Sacred &amp; Meaningful</h4>
            <p className="gift-banner-sub">Crystals chosen with love, ritually cleansed for them</p>
          </div>
        </div>
        <span className="gift-banner-cta">
          Find Their Crystal <i className="fa-solid fa-arrow-right ms-2" />
        </span>
      </button>

      {/* ── Overlay ── */}
      <div className={`gift-overlay${open ? ' gift-overlay--open' : ''}`} role="dialog" aria-modal="true">

        {/* Confetti */}
        <div className="gift-confetti-layer" aria-hidden="true">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className="gift-confetti-dot"
              style={{
                '--left': `${(i * 13 + 3) % 100}%`,
                '--delay': `${(i * 0.18) % 2.5}s`,
                '--dur': `${2 + (i % 3) * 0.6}s`,
                '--color': CONFETTI_COLORS[i % CONFETTI_COLORS.length],
                '--size': `${6 + (i % 4) * 3}px`,
              } as React.CSSProperties}
            />
          ))}
        </div>

        <button className="gift-close-btn" onClick={handleClose} aria-label="Close gifting">
          <i className="fa-solid fa-xmark" />
        </button>

        <div className="gift-scroll-area">
          {!recipient ? (
            /* ── Step 1: Choose recipient ── */
            <div className="gift-step">
              <div className="gift-step-header">
                <div className="gift-step-gem">
                  <i className="fa-solid fa-gift" />
                </div>
                <p className="gift-step-eyebrow">✦ Sacred Gifting Guide ✦</p>
                <h2 className="gift-step-title">Who are you gifting?</h2>
                <p className="gift-step-subtitle">We&apos;ll hand-pick the perfect crystal energy for them</p>
              </div>

              <div className="gift-recipients-grid">
                {recipients.map((r) => (
                  <button
                    key={r.key}
                    className="gift-recipient-card"
                    onClick={() => setRecipient(r)}
                    style={{ '--gc': r.color, '--gb': r.bg } as React.CSSProperties}
                  >
                    <div className="gift-recipient-icon">
                      <i className={r.icon} />
                    </div>
                    <span className="gift-recipient-name">{r.label}</span>
                    <span className="gift-recipient-sub">{r.subtitle}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* ── Step 2: Show products ── */
            <div className="gift-step gift-step--products">
              <button className="gift-back-btn" onClick={() => setRecipient(null)}>
                <i className="fa-solid fa-arrow-left" /> Back
              </button>

              <div className="gift-step-header">
                <div className="gift-recipient-pill" style={{ '--gc': recipient.color } as React.CSSProperties}>
                  <i className={recipient.icon} /> {recipient.label}
                </div>
                <h2 className="gift-step-title">{recipient.tagline}</h2>
                <p className="gift-step-subtitle">
                  Personally curated crystals — ritually cleansed &amp; ready to gift
                </p>
              </div>

              {/* Gift message box — always visible; the message travels with the order to checkout */}
              <div className="gift-msg-wrap">
                <div className="gift-msg-box" style={{ display: 'block' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: '0.9rem', marginBottom: 8 }}>
                    <i className="fa-solid fa-envelope-open-text" />
                    Your gift message for {recipient.label}
                    <span style={{ fontWeight: 400, fontSize: '0.75rem', opacity: 0.7 }}>
                      — handwritten on a gift card inside the package
                    </span>
                  </label>
                  <textarea
                    className="gift-msg-input"
                    rows={3}
                    maxLength={160}
                    value={giftMsg}
                    onChange={(e) => setGiftMsg(e.target.value)}
                    placeholder={`Write something beautiful for your ${recipient.label}... e.g. "Happy Birthday! Wishing you love & light always"`}
                  />
                  <span className="gift-msg-count">{giftMsg.length}/160</span>
                  {giftMsg.trim() && (
                    <p style={{ fontSize: '0.72rem', margin: '6px 0 0', opacity: 0.75 }}>
                      <i className="fa-solid fa-circle-check me-1" style={{ color: '#7ec98f' }} />
                      Saved — your message will appear at checkout automatically
                    </p>
                  )}
                </div>
              </div>

              {/* Products */}
              <div className="row g-3" style={{ maxWidth: 1000, margin: '0 auto', width: '100%' }}>
                {giftProducts.map((p) => (
                  <div className="col-6 col-md-3" key={p.id}>
                    <div className="gift-product-wrap">
                      <span className="gift-product-label">
                        <i className="fa-solid fa-gift me-1" /> Perfect Gift
                      </span>
                      <ProductCard product={{ ...p, id: (p as any).slug || p.id } as any} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="gift-step-footer">
                <Link href="/shop" className="gift-shop-all" onClick={handleClose}>
                  <i className="fa-solid fa-gem me-2" /> Explore All Crystals
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {open && <div className="gift-backdrop" onClick={handleClose} />}
    </>
  );
}
