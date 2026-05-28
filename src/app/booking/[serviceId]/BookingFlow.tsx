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
    <form onSubmit={onSubmit} style={{ display: 'grid', gap: 28, width: '100%', boxSizing: 'border-box' }}>
      {/* 1. Pick a Date */}
      <div style={{
        background: '#fff',
        padding: '28px 24px',
        borderRadius: 24,
        border: '1px solid rgba(200, 149, 108, 0.15)',
        boxShadow: '0 8px 30px rgba(45, 27, 14, 0.03)',
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.25rem',
          fontWeight: 600,
          color: 'var(--dark-2)',
          marginTop: 0,
          marginBottom: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <i className="fa-regular fa-calendar-days me-2" style={{ color: 'var(--primary,#C8956C)' }}></i>
          1. Pick a Date
        </h3>
        <div className="custom-scrollbar" style={{
          display: 'flex',
          gap: 12,
          overflowX: 'auto',
          paddingBottom: 8,
          scrollBehavior: 'smooth',
          justifyContent: 'flex-start',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box'
        }}>
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
                  flex: '0 0 auto',
                  minWidth: 80,
                  padding: '12px 10px',
                  borderRadius: 16,
                  border: active ? 'none' : '1px solid rgba(200, 149, 108, 0.18)',
                  background: active 
                    ? 'linear-gradient(135deg, var(--primary,#C8956C) 0%, var(--primary-dark,#A7744D) 100%)' 
                    : '#fff',
                  color: active ? '#fff' : 'var(--dark-2)',
                  cursor: 'pointer',
                  textAlign: 'center',
                  fontWeight: 600,
                  boxShadow: active ? '0 8px 20px rgba(200, 149, 108, 0.35)' : 'none',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: active ? 'scale(1.02)' : 'none',
                }}
                className="date-picker-btn"
              >
                <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', opacity: active ? 0.9 : 0.6, letterSpacing: '0.05em' }}>
                  {d.toLocaleDateString('en-IN', { weekday: 'short' })}
                </div>
                <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', margin: '4px 0', fontWeight: 700 }}>
                  {d.getDate()}
                </div>
                <div style={{ fontSize: '0.68rem', opacity: active ? 0.9 : 0.6 }}>
                  {isToday ? 'Today' : d.toLocaleDateString('en-IN', { month: 'short' })}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Pick a Time */}
      <div style={{
        background: '#fff',
        padding: '28px 24px',
        borderRadius: 24,
        border: '1px solid rgba(200, 149, 108, 0.15)',
        boxShadow: '0 8px 30px rgba(45, 27, 14, 0.03)',
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.25rem',
          fontWeight: 600,
          color: 'var(--dark-2)',
          marginTop: 0,
          marginBottom: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <i className="fa-regular fa-clock me-2" style={{ color: 'var(--primary,#C8956C)' }}></i>
          2. Pick a Time
        </h3>
        {loading ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-light,#999)', padding: '10px 0', justifyContent: 'center' }}>
            <Spinner /> <span>Loading available slots…</span>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 120px))', gap: 10, justifyContent: 'center', width: '100%' }}>
            {slots.map((s) => {
              const active = selectedTime === s.time;
              return (
                <button
                  key={s.time}
                  type="button"
                  disabled={!s.available}
                  onClick={() => setSelectedTime(s.time)}
                  style={{
                    padding: '12px 14px',
                    borderRadius: 14,
                    border: active ? 'none' : '1px solid rgba(200, 149, 108, 0.18)',
                    background: active 
                      ? 'linear-gradient(135deg, var(--primary,#C8956C) 0%, var(--primary-dark,#A7744D) 100%)' 
                      : (s.available ? '#fff' : '#f8f6f4'),
                    color: active ? '#fff' : (s.available ? 'var(--dark-2)' : '#c0b8b2'),
                    cursor: s.available ? 'pointer' : 'not-allowed',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    textDecoration: s.available ? 'none' : 'line-through',
                    boxShadow: active ? '0 8px 18px rgba(200, 149, 108, 0.3)' : 'none',
                    transition: 'all 0.25s ease',
                    transform: active ? 'scale(1.02)' : 'none',
                  }}
                  className="time-picker-btn"
                >
                  {s.time}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* 3. Your Details */}
      <div style={{
        background: '#fff',
        padding: '28px 24px',
        borderRadius: 24,
        border: '1px solid rgba(200, 149, 108, 0.15)',
        boxShadow: '0 8px 30px rgba(45, 27, 14, 0.03)',
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.25rem',
          fontWeight: 600,
          color: 'var(--dark-2)',
          marginTop: 0,
          marginBottom: '1.25rem',
          display: 'flex',
          alignItems: 'center'
        }}>
          <i className="fa-regular fa-user me-2" style={{ color: 'var(--primary,#C8956C)' }}></i>
          3. Your Details
        </h3>
        <div className="row g-3 mx-0" style={{ width: '100%', boxSizing: 'border-box' }}>
          <div className="col-12 col-md-4 px-2" style={{ boxSizing: 'border-box' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--primary,#C8956C)', marginBottom: 8, display: 'block' }}>Name *</label>
            <input required value={name} onChange={(e) => setName(e.target.value)} className="form-control-custom" placeholder="Your name" style={{ boxSizing: 'border-box' }} />
          </div>
          <div className="col-12 col-md-4 px-2" style={{ boxSizing: 'border-box' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--primary,#C8956C)', marginBottom: 8, display: 'block' }}>Email *</label>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control-custom" placeholder="email@example.com" style={{ boxSizing: 'border-box' }} />
          </div>
          <div className="col-12 col-md-4 px-2" style={{ boxSizing: 'border-box' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--primary,#C8956C)', marginBottom: 8, display: 'block' }}>Phone *</label>
            <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control-custom" placeholder="+91 XXXXX XXXXX" style={{ boxSizing: 'border-box' }} />
          </div>
          <div className="col-12 px-2" style={{ boxSizing: 'border-box' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--primary,#C8956C)', marginBottom: 8, display: 'block' }}>Notes (optional)</label>
            <textarea rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} className="form-control-custom" placeholder="Share the focus of your session, questions, or intentions…" style={{ resize: 'none', boxSizing: 'border-box' }} />
          </div>
        </div>
      </div>

      {error && (
        <div style={{
          color: '#D95F5F',
          background: 'rgba(217, 95, 95, 0.08)',
          padding: '12px 18px',
          borderRadius: 12,
          fontWeight: 600,
          fontSize: '0.9rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          boxSizing: 'border-box'
        }}>
          <i className="fa-solid fa-circle-exclamation"></i>
          {error}
        </div>
      )}

      {/* Booking Summary Strip */}
      <div className="d-flex justify-content-between align-items-center gap-3 flex-wrap" style={{
        background: 'linear-gradient(135deg, #FAF6F1 0%, #F5EDE4 100%)',
        padding: '24px 28px',
        borderRadius: 20,
        border: '1px solid rgba(200, 149, 108, 0.12)',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <div>
          <div style={{ color: '#8b8076', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, marginBottom: 2 }}>Session fee</div>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--dark-2)' }}>₹{servicePrice.toLocaleString('en-IN')}</div>
        </div>
        <button 
          type="submit" 
          disabled={submitting} 
          className="btn-primary-custom" 
          style={{ 
            minWidth: 220, 
            justifyContent: 'center', 
            opacity: submitting ? 0.85 : 1, 
            cursor: submitting ? 'wait' : 'pointer',
            padding: '14px 28px',
            borderRadius: 50,
            fontSize: '0.9rem',
            boxShadow: '0 8px 24px rgba(200, 149, 108, 0.35)'
          }}
        >
          {submitting ? <Spinner /> : <i className="fa-solid fa-calendar-check me-1"></i>}
          <span>{submitting ? 'Requesting…' : 'Request booking'}</span>
        </button>
      </div>
    </form>
  );
}
