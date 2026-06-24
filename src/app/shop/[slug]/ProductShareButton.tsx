'use client';

import { useState } from 'react';

export default function ProductShareButton({ productName }: { productName: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const shareData = {
      title: productName,
      text: `Check out ${productName} on KrissMaagiic Crystals`,
      url,
    };

    // Native share sheet (mobile / supported browsers)
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // user cancelled or share failed — fall through to copy
      }
    }

    // Fallback: copy link to clipboard
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Last-resort fallback for older browsers
      const ta = document.createElement('textarea');
      ta.value = url;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { /* noop */ }
      ta.remove();
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      aria-label="Share this product"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        background: 'transparent',
        border: '1px solid rgba(200, 149, 108, 0.4)',
        color: 'var(--primary, #C8956C)',
        borderRadius: '999px',
        padding: '0.5rem 1.1rem',
        fontSize: '0.85rem',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(200, 149, 108, 0.1)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
    >
      <i className={`fa-solid ${copied ? 'fa-check' : 'fa-share-nodes'}`} />
      <span>{copied ? 'Link copied!' : 'Share'}</span>
    </button>
  );
}
