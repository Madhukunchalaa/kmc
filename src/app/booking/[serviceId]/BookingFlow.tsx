'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Spinner from '@/components/Spinner';

interface Slot { time: string; available: boolean }

function ymd(d: Date) {
  return d.toISOString().slice(0, 10);
}

function addDays(d: Date, n: number) {
  const c = new Date(d); c.setDate(c.getDate() + n); return c;
}

export default function BookingFlow({
  serviceId,
  servicePrice,
  serviceTitle,
  defaultName,
  defaultEmail,
}: {
  serviceId: string;
  servicePrice: number;
  serviceTitle: string;
  defaultName: string;
  defaultEmail: string;
}) {
  const today = useMemo(() => new Date(), []);
  const dateOptions = useMemo(
    () => Array.from({ length: 14 }, (_, i) => addDays(today, i)),
    [today],
  );

  const [selectedDate, setSelectedDate] = useState<string>(ymd(today));
  const [slots, setSlots] = useState<Slot[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [notes, setNotes] = useState('');
  const [name, setName] = useState(defaultName);
  const [email, setEmail] = useState(defaultEmail);
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState<{ bookingNumber: string; bookingId: string } | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setSelectedTime(null);
    (async () => {
      try {
        const res = await fetch(`/api/slots?serviceId=${serviceId}&date=${selectedDate}`);
        const data = await res.json();
        if (!cancelled && data.ok) setSlots(data.slots);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [serviceId, selectedDate]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTime) { setError('Please pick a time slot.'); return; }
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          serviceId,
          date: selectedDate,
          timeSlot: selectedTime,
          notes,
          customer: { name, email, phone },
        }),
      });
      const data = await res.json();
      if (!data.ok) {
        setError(data.reason === 'slot-already-taken' ? 'That slot was just taken. Please pick another.' : (data.reason || 'Failed'));
        if (data.reason === 'slot-already-taken') {
          // Refresh slots.
          const r = await fetch(`/api/slots?serviceId=${serviceId}&date=${selectedDate}`);
          const d = await r.json();
          if (d.ok) setSlots(d.slots);
          setSelectedTime(null);
        }
      } else {
        setDone({ bookingNumber: data.bookingNumber, bookingId: data.bookingId });
      }
    } catch { setError('Network error.'); }
    setSubmitting(false);
  };

  if (done) {
    return (
      <div className="text-center" style={{ background: '#fff', padding: 32, borderRadius: 20, boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
        <div style={{ fontSize: '3.5rem' }}>📅</div>
        <h2 className="section-title">Booking <span>received!</span></h2>
        <p className="section-subtitle">
          {serviceTitle} on <strong>{selectedDate} at {selectedTime}</strong><br />
          Booking ID: <strong>{done.bookingNumber}</strong>
        </p>
        <p style={{ color: 'var(--text-light,#666)' }}>
          Status: <strong>Awaiting confirmation</strong>. You&apos;ll receive an email once Kriss reviews it.
        </p>
        <div className="d-flex gap-3 justify-content-center flex-wrap mt-3">
          <Link href={`/dashboard/bookings/${done.bookingId}`} className="btn-primary-custom">
            <i className="fa-solid fa-calendar-check"></i><span>View booking</span>
          </Link>
          <Link href="/services" className="btn-outline-custom">
            <i className="fa-solid fa-arrow-left"></i><span>All services</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} style={{ display: 'grid', gap: 24 }}>
      <div style={{ background: '#fff', padding: 24, borderRadius: 20, boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginTop: 0 }}>1. Pick a date</h3>
        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
          {dateOptions.map((d) => {
            const v = ymd(d);
            const active = v === selectedDate;
            const isToday = v === ymd(today);
            return (
              <button
                key={v}
                type="button"
                onClick={() => setSelectedDate(v)}
                style={{
                  flex: '0 0 auto', minWidth: 76,
                  padding: '10px 8px', borderRadius: 10,
                  border: '1px solid', borderColor: active ? 'var(--primary,#C8956C)' : 'rgba(0,0,0,0.1)',
                  background: active ? 'var(--primary,#C8956C)' : '#fff',
                  color: active ? '#fff' : 'inherit',
                  cursor: 'pointer', textAlign: 'center', fontWeight: 600,
                }}
              >
                <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', opacity: 0.7 }}>
                  {d.toLocaleDateString('en-IN', { weekday: 'short' })}
                </div>
                <div style={{ fontSize: '1.1rem', fontFamily: 'var(--font-heading)' }}>
                  {d.getDate()}
                </div>
                <div style={{ fontSize: '0.7rem', opacity: 0.7 }}>
                  {isToday ? 'Today' : d.toLocaleDateString('en-IN', { month: 'short' })}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ background: '#fff', padding: 24, borderRadius: 20, boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginTop: 0 }}>2. Pick a time</h3>
        {loading ? (
          <p style={{ color: '#888' }}>Loading available slots…</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: 8 }}>
            {slots.map((s) => {
              const active = selectedTime === s.time;
              return (
                <button
                  key={s.time}
                  type="button"
                  disabled={!s.available}
                  onClick={() => setSelectedTime(s.time)}
                  style={{
                    padding: '10px 12px',
                    borderRadius: 10,
                    border: '1px solid', borderColor: active ? 'var(--primary,#C8956C)' : 'rgba(0,0,0,0.1)',
                    background: active ? 'var(--primary,#C8956C)' : (s.available ? '#fff' : '#F4F4F4'),
                    color: active ? '#fff' : (s.available ? 'inherit' : '#bbb'),
                    cursor: s.available ? 'pointer' : 'not-allowed',
                    fontWeight: 600,
                    textDecoration: s.available ? 'none' : 'line-through',
                  }}
                >
                  {s.time}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div style={{ background: '#fff', padding: 24, borderRadius: 20, boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginTop: 0 }}>3. Your details</h3>
        <div className="row g-3">
          <div className="col-md-6">
            <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Name *</label>
            <input required value={name} onChange={(e) => setName(e.target.value)} className="newsletter-input" style={{ width: '100%' }} />
          </div>
          <div className="col-md-6">
            <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Email *</label>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="newsletter-input" style={{ width: '100%' }} />
          </div>
          <div className="col-md-6">
            <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Phone *</label>
            <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="newsletter-input" style={{ width: '100%' }} />
          </div>
          <div className="col-12">
            <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Notes (optional)</label>
            <textarea rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} className="newsletter-input" style={{ width: '100%' }} placeholder="Share the focus of your session, questions, or intentions…" />
          </div>
        </div>
      </div>

      {error && (
        <p style={{ color: '#D95F5F' }}><i className="fa-solid fa-circle-exclamation me-2"></i>{error}</p>
      )}

      <div className="d-flex justify-content-between align-items-center gap-3 flex-wrap" style={{ background: 'var(--bg-soft,#FAF6F1)', padding: 20, borderRadius: 16 }}>
        <div>
          <div style={{ color: '#888', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Session fee</div>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700 }}>₹{servicePrice.toLocaleString('en-IN')}</div>
        </div>
        <button type="submit" disabled={submitting} className="btn-primary-custom" style={{ minWidth: 220, justifyContent: 'center', opacity: submitting ? 0.85 : 1, cursor: submitting ? 'wait' : 'pointer' }}>
          {submitting ? <Spinner /> : <i className="fa-solid fa-calendar-plus"></i>}
          <span>{submitting ? 'Submitting…' : 'Request booking'}</span>
        </button>
      </div>
    </form>
  );
}
