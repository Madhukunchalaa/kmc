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

const STATUS_LABEL: Record<SP['status'], { text: string; color: string }> = {
  'not-required': { text: 'Not required', color: '#888' },
  pending: { text: 'Awaiting link', color: '#D98C25' },
  'link-sent': { text: 'Link sent', color: '#2B6CB0' },
  paid: { text: 'Paid', color: '#2B7A5C' },
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
  const [busy, setBusy] = useState<string | null>(null);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const status = initial.status;
  const badge = STATUS_LABEL[status] || STATUS_LABEL.pending;

  const call = async (action: 'send-link' | 'mark-paid' | 'mark-unpaid') => {
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
        setMsg({ ok: true, text: action === 'send-link' ? 'Link sent to customer' : action === 'mark-paid' ? 'Marked as paid' : 'Reverted' });
        router.refresh();
      }
    } catch {
      setMsg({ ok: false, text: 'Network error' });
    }
    setBusy(null);
  };

  return (
    <div style={{ display: 'grid', gap: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: '0.85rem', color: '#666' }}>Status:</span>
        <span style={{ fontWeight: 700, color: badge.color, fontSize: '0.9rem' }}>{badge.text}</span>
        {initial.sentAt && status !== 'paid' && (
          <span style={{ fontSize: '0.75rem', color: '#aaa' }}>· sent {new Date(initial.sentAt).toLocaleDateString('en-IN')}</span>
        )}
        {initial.paidAt && status === 'paid' && (
          <span style={{ fontSize: '0.75rem', color: '#aaa' }}>· paid {new Date(initial.paidAt).toLocaleDateString('en-IN')}</span>
        )}
      </div>

      <label style={{ fontSize: '0.8rem', fontWeight: 600 }}>Payment link</label>
      <input
        type="url"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="https://… (Cashfree / Razorpay / PayPal link)"
        className="newsletter-input"
        style={{ width: '100%' }}
      />

      <div style={{ display: 'flex', gap: 10 }}>
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: '0.8rem', fontWeight: 600 }}>Amount ({currencySymbol})</label>
          <input
            type="number"
            min={0}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="optional"
            className="newsletter-input"
            style={{ width: '100%' }}
          />
        </div>
      </div>

      <label style={{ fontSize: '0.8rem', fontWeight: 600 }}>Note to customer (optional)</label>
      <input
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="e.g. courier + insurance to USA"
        className="newsletter-input"
        style={{ width: '100%' }}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 }}>
        <button
          type="button"
          onClick={() => call('send-link')}
          disabled={!!busy || !link.trim()}
          className="btn-primary-custom"
          style={{ justifyContent: 'center', flex: 1, opacity: !link.trim() ? 0.6 : 1 }}
        >
          <i className="fa-solid fa-paper-plane"></i>
          <span>{busy === 'send-link' ? 'Sending…' : status === 'link-sent' || status === 'paid' ? 'Resend link' : 'Send link'}</span>
        </button>

        {status !== 'paid' ? (
          <button
            type="button"
            onClick={() => call('mark-paid')}
            disabled={!!busy}
            className="btn-primary-custom"
            style={{ justifyContent: 'center', flex: 1, background: '#2B7A5C', borderColor: '#2B7A5C' }}
          >
            <i className="fa-solid fa-circle-check"></i>
            <span>{busy === 'mark-paid' ? 'Saving…' : 'Mark paid'}</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => call('mark-unpaid')}
            disabled={!!busy}
            className="btn-primary-custom"
            style={{ justifyContent: 'center', flex: 1, background: 'transparent', borderColor: '#ccc', color: '#888' }}
          >
            <i className="fa-solid fa-rotate-left"></i>
            <span style={{ color: '#888' }}>{busy === 'mark-unpaid' ? 'Saving…' : 'Undo paid'}</span>
          </button>
        )}
      </div>

      {msg && <p style={{ fontSize: '0.82rem', color: msg.ok ? '#2B7A5C' : '#D95F5F', margin: 0 }}>{msg.text}</p>}
    </div>
  );
}
