'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type SP = {
  status: 'not-required' | 'pending' | 'link-sent' | 'paid';
  link?: string | null;
  amount?: number | null;
  note?: string | null;
  sentAt?: string | null;
  paidAt?: string | null;
};

type Action = 'send-link' | 'save-link' | 'mark-paid' | 'mark-unpaid';

const STATUS_LABEL: Record<SP['status'], { text: string; color: string }> = {
  'not-required': { text: 'Not required', color: '#888' },
  pending: { text: 'Awaiting link', color: '#D98C25' },
  'link-sent': { text: 'Link sent to customer', color: '#2B6CB0' },
  paid: { text: 'Shipping paid ✓', color: '#2B7A5C' },
};

export default function ShippingPaymentForm({
  orderId,
  currencySymbol,
  initial,
}: {
  orderId: string;
  currencySymbol: string;
  initial: SP;
}) {
  const router = useRouter();
  const [link, setLink] = useState(initial.link || '');
  const [amount, setAmount] = useState<string>(initial.amount != null ? String(initial.amount) : '');
  const [note, setNote] = useState(initial.note || '');
  const [busy, setBusy] = useState<Action | null>(null);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [copied, setCopied] = useState(false);

  const status = initial.status;
  // For 'pending' with a saved link, show a different label
  const badgeText = status === 'pending' && initial.link
    ? { text: 'Link saved (not sent)', color: '#D98C25' }
    : STATUS_LABEL[status] || STATUS_LABEL.pending;

  const copyLink = async () => {
    if (!link.trim()) return;
    try {
      await navigator.clipboard.writeText(link.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setMsg({ ok: false, text: 'Could not copy — select and copy manually' });
    }
  };

  const call = async (action: Action) => {
    setBusy(action);
    setMsg(null);
    try {
      const res = await fetch(`/api/admin/orders/${orderId}/shipping-payment`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          action,
          link: link.trim(),
          amount: amount.trim() === '' ? null : Number(amount),
          note: note.trim(),
        }),
      });
      const data = await res.json();
      if (!data.ok) {
        setMsg({ ok: false, text: data.reason || 'Failed' });
      } else {
        const successMsg =
          action === 'send-link' ? 'Link sent to customer email ✓' :
          action === 'save-link' ? 'Link saved — send to customer when ready' :
          action === 'mark-paid' ? 'Shipping payment marked as received ✓' :
          'Reverted to unpaid';
        setMsg({ ok: true, text: successMsg });
        router.refresh();
      }
    } catch {
      setMsg({ ok: false, text: 'Network error' });
    }
    setBusy(null);
  };

  return (
    <div className="d-flex flex-column gap-4">
      {/* Premium Status Banner */}
      <div style={{
        background: 'rgba(200, 149, 108, 0.06)',
        border: '1px solid rgba(200, 149, 108, 0.18)',
        borderRadius: '12px',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div>
          <span style={{ fontSize: '0.8rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' }}>Shipping Payment Status</span>
          <span style={{ fontWeight: 700, color: badgeText.color, fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: badgeText.color, display: 'inline-block' }}></span>
            {badgeText.text}
          </span>
        </div>
        <div style={{ textAlign: 'right', fontSize: '0.8rem', color: '#777' }}>
          {initial.sentAt && status !== 'paid' && (
            <div>Link sent: <strong>{new Date(initial.sentAt).toLocaleString('en-IN', { dateStyle: 'short', timeStyle: 'short' })}</strong></div>
          )}
          {initial.paidAt && status === 'paid' && (
            <div>Paid on: <strong>{new Date(initial.paidAt).toLocaleString('en-IN', { dateStyle: 'short', timeStyle: 'short' })}</strong></div>
          )}
        </div>
      </div>

      {/* Payment Link Input Group */}
      <div>
        <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#333', marginBottom: '6px', display: 'block' }}>Payment link</label>
        <div style={{ display: 'flex', gap: 8 }}>
          <input
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="https://… (Cashfree / Razorpay / PayPal link)"
            className="newsletter-input"
            style={{ flex: 1 }}
          />
          <button
            type="button"
            onClick={copyLink}
            disabled={!link.trim()}
            title="Copy link to clipboard"
            className="btn-outline-custom"
            style={{ whiteSpace: 'nowrap', padding: '0 18px', opacity: link.trim() ? 1 : 0.5, borderRadius: '30px' }}
          >
            <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`}></i>
            <span style={{ marginLeft: 6 }}>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
        {link.trim() && (
          <a href={link.trim()} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem', color: 'var(--primary,#C8956C)', marginTop: '8px', fontWeight: 600 }}>
            Open Payment Link <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '0.7rem' }}></i>
          </a>
        )}
      </div>

      {/* Two Column details row */}
      <div className="row g-3">
        <div className="col-md-6">
          <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#333', marginBottom: '6px', display: 'block' }}>Shipping amount ({currencySymbol})</label>
          <input
            type="number"
            min={0}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter shipping charge"
            className="newsletter-input"
            style={{ width: '100%' }}
          />
        </div>
        <div className="col-md-6">
          <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#333', marginBottom: '6px', display: 'block' }}>Note to customer (optional)</label>
          <input
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="e.g. courier + insurance to USA"
            className="newsletter-input"
            style={{ width: '100%' }}
          />
        </div>
      </div>

      {/* Action buttons section */}
      <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
        {/* Row 1: Save + Send buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <button
            type="button"
            onClick={() => call('save-link')}
            disabled={!!busy || !link.trim()}
            className="btn-outline-custom"
            style={{ justifyContent: 'center', flex: 1, opacity: !link.trim() ? 0.5 : 1, padding: '12px 20px', borderRadius: '30px' }}
          >
            <i className="fa-solid fa-floppy-disk"></i>
            <span style={{ marginLeft: 8 }}>{busy === 'save-link' ? 'Saving…' : 'Save link'}</span>
          </button>

          <button
            type="button"
            onClick={() => call('send-link')}
            disabled={!!busy || !link.trim()}
            className="btn-primary-custom"
            style={{ justifyContent: 'center', flex: 1, opacity: !link.trim() ? 0.6 : 1, padding: '12px 20px', borderRadius: '30px' }}
          >
            <i className="fa-solid fa-paper-plane"></i>
            <span style={{ marginLeft: 8 }}>{busy === 'send-link' ? 'Sending…' : status === 'link-sent' || status === 'paid' ? 'Resend to customer' : 'Send to customer email'}</span>
          </button>
        </div>

        {/* Row 2: Mark paid / Undo */}
        <div>
          {status !== 'paid' ? (
            <button
              type="button"
              onClick={() => call('mark-paid')}
              disabled={!!busy}
              className="btn-primary-custom"
              style={{ justifyContent: 'center', width: '100%', background: '#2B7A5C', borderColor: '#2B7A5C', padding: '12px 20px', borderRadius: '30px' }}
            >
              <i className="fa-solid fa-circle-check"></i>
              <span style={{ marginLeft: 8 }}>{busy === 'mark-paid' ? 'Saving…' : 'Mark shipping received'}</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => call('mark-unpaid')}
              disabled={!!busy}
              className="btn-outline-custom"
              style={{ justifyContent: 'center', width: '100%', borderColor: '#ccc', color: '#666', padding: '12px 20px', borderRadius: '30px' }}
            >
              <i className="fa-solid fa-rotate-left"></i>
              <span style={{ marginLeft: 8 }}>{busy === 'mark-unpaid' ? 'Saving…' : 'Undo received status'}</span>
            </button>
          )}
        </div>
      </div>

      {msg && (
        <div style={{
          background: msg.ok ? 'rgba(43, 122, 92, 0.06)' : 'rgba(217, 95, 95, 0.06)',
          border: `1px solid ${msg.ok ? 'rgba(43, 122, 92, 0.2)' : 'rgba(217, 95, 95, 0.2)'}`,
          borderRadius: '8px',
          padding: '12px 16px',
          fontSize: '0.85rem',
          color: msg.ok ? '#2B7A5C' : '#D95F5F',
          fontWeight: 500,
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <i className={`fa-solid ${msg.ok ? 'fa-circle-check' : 'fa-circle-exclamation'}`}></i>
          <span>{msg.text}</span>
        </div>
      )}
    </div>
  );
}
