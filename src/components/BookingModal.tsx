'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Spinner from './Spinner';
import { openRazorpayCheckout } from '@/lib/razorpayCheckout';
import { useCurrency } from '@/context/CurrencyContext';
import { formatPhone, validatePhone, getPhoneConfig } from '@/lib/phoneValidation';

export interface BookingTier {
  label: string;
  price: number;
}

export interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  serviceSlug: string;
  title: string;
  tiers: BookingTier[];
}

interface Slot { time: string; available: boolean }

function ymd(d: Date) {
  return d.toISOString().slice(0, 10);
}

function addDays(d: Date, n: number) {
  const c = new Date(d); c.setDate(c.getDate() + n); return c;
}

export default function BookingModal({ open, onClose, serviceSlug, title, tiers }: BookingModalProps) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { formatPrice, countryCode } = useCurrency();

  const today = useMemo(() => new Date(), []);
  const dateOptions = useMemo(
    () => Array.from({ length: 14 }, (_, i) => addDays(today, i)),
    [today],
  );

  const [tierIdx, setTierIdx] = useState(0);
  const [selectedDate, setSelectedDate] = useState<string>(ymd(today));
  const [slots, setSlots] = useState<Slot[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [notes, setNotes] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handlePhoneBlur = () => {
    if (phone.trim()) {
      const activeCountry = countryCode || 'IN';
      setPhone(formatPhone(phone, activeCountry));
    }
  };

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState<{ bookingNumber: string; bookingId: string } | null>(null);

  // Reset when reopened or service changes
  useEffect(() => {
    if (open) {
      Promise.resolve().then(() => {
        setTierIdx(0);
        setSelectedDate(ymd(today));
        setSelectedTime(null);
        setNotes('');
        setError(null);
        setDone(null);
      });
    }
  }, [open, serviceSlug, today]);

  // Pre-fill from session
  useEffect(() => {
    if (session?.user) {
      Promise.resolve().then(() => {
        setName((n) => n || session.user.name || '');
        setEmail((e) => e || session.user.email || '');
      });
    }
  }, [session]);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = original; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  // Load slots when date changes
  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    Promise.resolve().then(() => {
      if (!cancelled) {
        setLoadingSlots(true);
        setSelectedTime(null);
      }
    });
    (async () => {
      try {
        const res = await fetch(`/api/slots?serviceId=${serviceSlug}&date=${selectedDate}`);
        const data = await res.json();
        if (!cancelled && data.ok) setSlots(data.slots);
      } finally {
        if (!cancelled) setLoadingSlots(false);
      }
    })();
    return () => { cancelled = true; };
  }, [open, serviceSlug, selectedDate]);

  if (!open) return null;

  const selectedTier = tiers[tierIdx];

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTime) { setError('Please pick a time slot.'); return; }
    if (status !== 'authenticated') {
      router.push(`/login?callbackUrl=${encodeURIComponent(window.location.pathname)}`);
      return;
    }
    setError(null);

    const activeCountry = countryCode || 'IN';
    const formattedPhone = formatPhone(phone, activeCountry);
    const validation = validatePhone(formattedPhone, activeCountry);
    if (!validation.isValid) {
      setError(validation.error || 'Invalid phone number');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          serviceId: serviceSlug,
          date: selectedDate,
          timeSlot: selectedTime,
          notes,
          tierLabel: selectedTier.label,
          tierPrice: selectedTier.price,
          customer: { name, email, phone: formattedPhone },
        }),
      });
      const data = await res.json();
      if (!data.ok) {
        if (data.reason === 'slot-already-taken') {
          setError('That slot was just taken. Please pick another.');
          // refresh slots
          const r = await fetch(`/api/slots?serviceId=${serviceSlug}&date=${selectedDate}`);
          const d = await r.json();
          if (d.ok) setSlots(d.slots);
          setSelectedTime(null);
        } else {
          setError(data.reason || 'Failed to place booking.');
        }
        setSubmitting(false);
        return;
      }

      // Hit the Razorpay create endpoint
      const payRes = await fetch('/api/payments/razorpay/booking/create', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ bookingId: data.bookingId }),
      });
      const payData = await payRes.json();
      if (!payRes.ok || !payData.ok) {
        setError(payData.reason ?? 'Could not start payment. Please try again.');
        setSubmitting(false);
        return;
      }

      // Open Razorpay Modal
      const payment = await openRazorpayCheckout({
        keyId: payData.keyId,
        amount: payData.amount,
        currency: payData.currency,
        razorpayOrderId: payData.razorpayOrderId,
        orderNumber: payData.bookingNumber,
        name: payData.customer.name,
        email: payData.customer.email,
        phone: payData.customer.phone,
      });

      // Verify the payment
      const verifyRes = await fetch('/api/payments/razorpay/booking/verify', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          bookingId: data.bookingId,
          razorpay_order_id: payment.razorpay_order_id,
          razorpay_payment_id: payment.razorpay_payment_id,
          razorpay_signature: payment.razorpay_signature,
        }),
      });
      const verifyData = await verifyRes.json();
      if (!verifyRes.ok || !verifyData.ok) {
        setError(verifyData.reason ?? 'Payment verification failed. Please contact us.');
        setSubmitting(false);
        return;
      }

      setDone({ bookingNumber: data.bookingNumber, bookingId: data.bookingId });
    } catch (err) { 
      if (err instanceof Error && err.message === 'payment-cancelled') {
        setError('Payment was cancelled. Your slot is held temporarily, you can complete payment from your dashboard.');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Booking portal"
      className="kmc-modal-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="kmc-modal-panel">
        <button type="button" aria-label="Close" className="kmc-modal-close" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="kmc-modal-content">
          <span className="kmc-modal-eyebrow">
            <i className="fa-solid fa-calendar-check"></i> Booking Portal
          </span>

          <h2 className="kmc-modal-title">{title}</h2>

          {done ? (
            <div className="text-center" style={{ padding: '1rem 0' }}>
              <div style={{ fontSize: '3rem', marginTop: 10 }}>📅</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', margin: '0.5rem 0' }}>Booking Confirmed!</h3>
              <p style={{ color: 'var(--text-light,#666)', marginBottom: 8 }}>
                {title} ({selectedTier.label}) on <strong>{selectedDate} at {selectedTime}</strong>
              </p>
              <p style={{ color: 'var(--text-light,#666)' }}>
                Booking ID: <strong>{done.bookingNumber}</strong><br />
                Status: <strong style={{ color: '#2b8a3e' }}>Booked & Paid</strong>
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap mt-3">
                <Link href={`/dashboard/bookings/${done.bookingId}`} className="btn-primary-custom">
                  <i className="fa-solid fa-calendar-check"></i><span>View booking</span>
                </Link>
                <button type="button" className="btn-outline-custom" onClick={onClose}>
                  <i className="fa-solid fa-xmark"></i><span>Close</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <p className="kmc-modal-intro">
                Please select your session duration, date, and preferred hour. Secure your slot by completing the payment below.
              </p>

              {/* SESSION DURATION */}
              <div className="kmc-modal-section">
                <div className="kmc-modal-section-label">Session Duration</div>
                <div className="kmc-tier-grid">
                  {tiers.map((t, i) => (
                    <button
                      key={t.label}
                      type="button"
                      onClick={() => setTierIdx(i)}
                      className={`kmc-tier-btn${i === tierIdx ? ' active' : ''}`}
                    >
                      {t.label.toUpperCase()} ({formatPrice(t.price)})
                    </button>
                  ))}
                </div>
              </div>

              {/* DATE PICKER */}
              <div className="kmc-modal-section">
                <div className="kmc-modal-section-label">Select Date</div>
                <div className="kmc-date-grid">
                  {dateOptions.map((d) => {
                    const v = ymd(d);
                    const active = v === selectedDate;
                    return (
                      <button
                        key={v}
                        type="button"
                        onClick={() => setSelectedDate(v)}
                        className={`kmc-date-card${active ? ' active' : ''}`}
                      >
                        <span className="kmc-date-dow">{d.toLocaleDateString('en-IN', { weekday: 'short' })}</span>
                        <span className="kmc-date-num">{d.getDate()}</span>
                        <span className="kmc-date-mon">{d.toLocaleDateString('en-IN', { month: 'short' })}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* TIME SLOTS */}
              <div className="kmc-modal-section">
                <div className="kmc-modal-section-label">Select Time</div>
                {loadingSlots ? (
                  <p style={{ color: '#888' }}>Loading available slots…</p>
                ) : (
                  <div className="kmc-slot-grid">
                    {slots.map((s) => {
                      const active = selectedTime === s.time;
                      return (
                        <button
                          key={s.time}
                          type="button"
                          disabled={!s.available}
                          onClick={() => setSelectedTime(s.time)}
                          className={`kmc-slot-btn${active ? ' active' : ''}${!s.available ? ' unavailable' : ''}`}
                        >
                          {s.time}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* CUSTOMER */}
              <div className="kmc-modal-section">
                <div className="kmc-modal-section-label">Your Details</div>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="kmc-modal-field-label">Name *</label>
                    <input required value={name} onChange={(e) => setName(e.target.value)} className="kmc-modal-input" />
                  </div>
                  <div className="col-md-6">
                    <label className="kmc-modal-field-label">Email *</label>
                    <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="kmc-modal-input" />
                  </div>
                  <div className="col-md-6">
                    <label className="kmc-modal-field-label">Phone *</label>
                    <input 
                      required 
                      type="tel" 
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value)} 
                      onBlur={handlePhoneBlur}
                      placeholder={getPhoneConfig(countryCode || 'IN').placeholder}
                      className="kmc-modal-input" 
                    />
                  </div>
                  <div className="col-12">
                    <label className="kmc-modal-field-label">Notes (optional)</label>
                    <textarea rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} className="kmc-modal-input" placeholder="Share the focus of your session, questions, or intentions…" />
                  </div>
                </div>
              </div>

              {status === 'unauthenticated' && (
                <p style={{ background: '#FAF6F1', padding: '0.75rem 1rem', borderRadius: 10, fontSize: '0.85rem', color: 'var(--text-light,#666)', margin: '0 0 1rem' }}>
                  <i className="fa-solid fa-circle-info me-2" style={{ color: 'var(--primary,#C8956C)' }}></i>
                  You&apos;ll be asked to sign in before the booking is confirmed.
                </p>
              )}

              {error && (
                <p style={{ color: '#D95F5F', fontSize: '0.9rem', marginBottom: '1rem' }}>
                  <i className="fa-solid fa-circle-exclamation me-2"></i>{error}
                </p>
              )}

              <div className="kmc-modal-actions">
                <button type="button" onClick={onClose} className="btn-outline-custom">
                  <i className="fa-solid fa-xmark"></i><span>Cancel</span>
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary-custom"
                  style={{ opacity: submitting ? 0.85 : 1, cursor: submitting ? 'wait' : 'pointer', minWidth: 240, justifyContent: 'center' }}
                >
                  {submitting ? <Spinner /> : <i className="fa-solid fa-lock"></i>}
                  <span>
                    {submitting
                      ? 'Submitting…'
                      : `Confirm · ${formatPrice(selectedTier.price)}`}
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
