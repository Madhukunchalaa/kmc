'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Spinner from '@/components/Spinner';
import { openRazorpayCheckout } from '@/lib/razorpayCheckout';
import { useCurrency } from '@/context/CurrencyContext';

interface Slot { time: string; available: boolean }

function ymd(d: Date) {
  return d.toISOString().slice(0, 10);
}

function addDays(d: Date, n: number) {
  const c = new Date(d); c.setDate(c.getDate() + n); return c;
}

/* ── Spiritual helpers ─────────────────────────── */

const PLANETS = [
  { name: 'Sun',     emoji: '☀️', color: '#F7C948', energy: 'Vitality & Success',     tip: 'Solar energy amplifies confidence and leadership today.' },
  { name: 'Moon',    emoji: '🌙', color: '#C4D4F5', energy: 'Intuition & Dreams',     tip: 'Lunar energy sharpens psychic sensitivity and emotional insight.' },
  { name: 'Mars',    emoji: '🔴', color: '#F87171', energy: 'Courage & Action',       tip: 'Mars fuels willpower and decisive spiritual breakthroughs.' },
  { name: 'Mercury', emoji: '☿️', color: '#86EFAC', energy: 'Clarity & Flow',         tip: 'Mercury aligns thought with spirit for crystal-clear guidance.' },
  { name: 'Jupiter', emoji: '🟠', color: '#FCA5A5', energy: 'Abundance & Growth',     tip: 'Jupiter expands blessings and magnifies manifestation power.' },
  { name: 'Venus',   emoji: '💜', color: '#C084FC', energy: 'Love & Harmony',         tip: 'Venus opens the heart chakra for deep healing and connection.' },
  { name: 'Saturn',  emoji: '🪐', color: '#94A3B8', energy: 'Karma & Wisdom',         tip: 'Saturn grounds spiritual lessons into lasting transformation.' },
];

// Day 0=Sunday→Sun, 1=Monday→Moon, 2=Tuesday→Mars, 3=Wed→Mercury, 4=Thu→Jupiter, 5=Fri→Venus, 6=Sat→Saturn
const DAY_PLANET = [0, 1, 2, 3, 4, 5, 6];

function getMoonPhase(date: Date) {
  // Reference: Jan 6 2000 was a New Moon
  const ref = new Date('2000-01-06T00:00:00Z');
  const diffDays = (date.getTime() - ref.getTime()) / 86400000;
  const cycle = 29.53059;
  const phase = ((diffDays % cycle) + cycle) % cycle;

  if (phase < 1.5)  return { emoji: '🌑', name: 'New Moon',         energy: 'New Beginnings', power: 'Highest manifestation window — plant your intentions.' };
  if (phase < 7.4)  return { emoji: '🌒', name: 'Waxing Crescent',  energy: 'Intention Setting', power: 'Growing lunar energy supports healing and new practices.' };
  if (phase < 9.0)  return { emoji: '🌓', name: 'First Quarter',    energy: 'Take Action',    power: 'Push through blocks — momentum is on your side.' };
  if (phase < 14.0) return { emoji: '🌔', name: 'Waxing Gibbous',   energy: 'Refine & Grow',  power: 'Fine-tune your intentions; the full moon amplifies all.' };
  if (phase < 16.5) return { emoji: '🌕', name: 'Full Moon',        energy: 'Peak Power',     power: '🔥 Maximum cosmic energy — strongest session of the cycle.' };
  if (phase < 21.5) return { emoji: '🌖', name: 'Waning Gibbous',   energy: 'Gratitude',      power: 'Release what no longer serves and honour your growth.' };
  if (phase < 23.5) return { emoji: '🌗', name: 'Last Quarter',     energy: 'Let Go',         power: 'Powerful for cord-cutting, shadow work, and karmic release.' };
  return             { emoji: '🌘', name: 'Waning Crescent',  energy: 'Rest & Reflect',  power: 'Ideal for deep introspection and purification rituals.' };
}

function getNumerology(date: Date) {
  // Sum all digits of YYYYMMDD until single digit
  const digits = ymd(date).replace(/-/g, '').split('').map(Number);
  let sum = digits.reduce((a, b) => a + b, 0);
  while (sum > 9 && sum !== 11 && sum !== 22) {
    sum = String(sum).split('').map(Number).reduce((a, b) => a + b, 0);
  }
  const meanings: Record<number, { label: string; tip: string }> = {
    1:  { label: 'Leadership',    tip: 'A day to initiate, lead and step into your power.' },
    2:  { label: 'Partnership',   tip: 'Heightened sensitivity — ideal for relationship healing.' },
    3:  { label: 'Expression',    tip: 'Creative and joyful energy flows freely today.' },
    4:  { label: 'Foundation',    tip: 'Ground your spiritual practice in lasting structure.' },
    5:  { label: 'Liberation',    tip: 'Break free from limiting patterns and embrace change.' },
    6:  { label: 'Nurturing',     tip: 'Heart chakra is wide open — deep compassion available.' },
    7:  { label: 'Mysticism',     tip: 'Strongest day for psychic work and spiritual insight.' },
    8:  { label: 'Manifestation', tip: 'Channel cosmic abundance and material alchemy.' },
    9:  { label: 'Completion',    tip: 'A day of release, wisdom and compassionate endings.' },
    11: { label: 'Illumination',  tip: 'Master number — rare gateway for divine downloads.' },
    22: { label: 'Master Builder',tip: 'Master number — anchor your highest vision today.' },
  };
  return { number: sum, ...(meanings[sum] ?? { label: 'Sacred', tip: 'A uniquely charged spiritual day.' }) };
}

function getSpiritualInfo(date: Date) {
  const planet = PLANETS[DAY_PLANET[date.getDay()]];
  const moon   = getMoonPhase(date);
  const num    = getNumerology(date);
  return { planet, moon, num };
}

/* ── Card style shared ─────────────────────────── */
const cardStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.04)',
  padding: '28px 24px',
  borderRadius: 24,
  border: '1px solid rgba(200, 149, 108, 0.22)',
  boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
  backdropFilter: 'blur(14px)',
  width: '100%',
  maxWidth: '100%',
  boxSizing: 'border-box' as const,
  overflow: 'hidden',
};

const headingStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.2rem',
  fontWeight: 700,
  color: '#fff',
  marginTop: 0,
  marginBottom: '1.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
};

/* ─────────────────────────────────────────────── */

export default function BookingFlow({
  serviceId, serviceSlug, servicePrice, serviceTitle, tiers, defaultName, defaultEmail,
}: {
  serviceId: string;
  serviceSlug: string;
  servicePrice: number;
  serviceTitle: string;
  tiers?: { label: string; price: number }[];
  defaultName: string;
  defaultEmail: string;
}) {
  const today = useMemo(() => new Date(), []);
  const { formatPrice } = useCurrency();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const dateOptions = useMemo(
    () => Array.from({ length: 14 }, (_, i) => addDays(today, i)),
    [today],
  );

  const [tierIdx,      setTierIdx]      = useState(0);
  const [selectedDate, setSelectedDate] = useState<string>(ymd(today));
  const [slots,        setSlots]        = useState<Slot[]>([]);
  const [loading,      setLoading]      = useState(false);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [notes,        setNotes]        = useState('');
  const [question,     setQuestion]     = useState('');
  const [intention,    setIntention]    = useState('');
  const [dob,          setDob]          = useState('');
  const [name,         setName]         = useState(defaultName);
  const [email,        setEmail]        = useState(defaultEmail);
  const [phone,        setPhone]        = useState('');
  const [submitting,   setSubmitting]   = useState(false);
  const [error,        setError]        = useState<string | null>(null);
  const [done,         setDone]         = useState<{ bookingNumber: string; bookingId: string } | null>(null);

  const selectedTier = tiers && tiers[tierIdx];
  const activePrice = selectedTier ? selectedTier.price : servicePrice;

  // Determine rules based on service
  const isTarot = serviceSlug === 'tarot';
  const isTarotVideo = isTarot && selectedTier?.label.includes('Video Call');
  const isTarotVoice = isTarot && selectedTier?.label.includes('Voice Chat');
  const isCandle = serviceSlug === 'candle';
  const isSpellJar = serviceSlug === 'spelljar';
  const isNumerology = serviceSlug === 'numerology';

  const requiresDateAndTime = isTarotVideo; // Only Tarot Video calls need date/time


  useEffect(() => {
    let cancelled = false;
    Promise.resolve().then(() => {
      if (!cancelled) {
        setLoading(true);
        setSelectedTime(null);
      }
    });
    (async () => {
      try {
        const res  = await fetch(`/api/slots?serviceId=${serviceId}&date=${selectedDate}`);
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
    if (requiresDateAndTime && !selectedTime) { setError('Please pick a time slot.'); return; }
    if (isTarotVoice && !question.trim()) { setError('Please enter your specific question or focus.'); return; }
    setError(null);
    setSubmitting(true);
    try {
      const res  = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          serviceId,
          date: requiresDateAndTime ? selectedDate : 'N/A',
          timeSlot: requiresDateAndTime ? selectedTime : 'N/A',
          question,
          intention,
          dob,
          notes,
          tierLabel: selectedTier?.label,
          tierPrice: selectedTier?.price,
          customer: { name, email, phone }
        }),
      });
      const data = await res.json();
      if (!data.ok) {
        setError(data.reason === 'slot-already-taken' ? 'That slot was just taken. Please pick another.' : (data.reason || 'Failed'));
        if (data.reason === 'slot-already-taken') {
          const r = await fetch(`/api/slots?serviceId=${serviceId}&date=${selectedDate}`);
          const d = await r.json();
          if (d.ok) setSlots(d.slots);
          setSelectedTime(null);
        }
        setSubmitting(false);
        return;
      }

      // If data.ok is true, we proceed to payment
      const payRes = await fetch('/api/bookings/razorpay/create', {
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

      const verifyRes = await fetch('/api/bookings/razorpay/verify', {
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
        setError(verifyData.reason ?? 'Payment verification failed. Contact us with your booking ID.');
        setSubmitting(false);
        return;
      }

      setDone({ bookingNumber: data.bookingNumber, bookingId: data.bookingId });
    } catch (err) { 
      if (err instanceof Error && err.message === 'payment-cancelled') {
        setError('Payment was cancelled. You can try booking again.');
      } else {
        setError('Network error or payment failed.');
      }
    }
    setSubmitting(false);
  };

  if (done) {
    return (
      <div className="text-center" style={{ ...cardStyle, padding: 40 }}>
        <div style={{ fontSize: '3.5rem', marginBottom: 12 }}>🌌</div>
        <h2 className="section-title" style={{ color: '#fff' }}>Booking <span style={{ color: 'var(--primary)' }}>received!</span></h2>
        <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>
          {serviceTitle} {selectedTier ? `(${selectedTier.label})` : ''} on <strong style={{ color: '#fff' }}>{selectedDate} at {selectedTime}</strong><br />
          Booking ID: <strong style={{ color: 'var(--gold-light,#FFEFA6)' }}>{done.bookingNumber}</strong>
        </p>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem' }}>
          Status: <strong style={{ color: '#fff' }}>Paid & Confirmed</strong>. Kriss will contact you via WhatsApp to coordinate.
        </p>
        <div className="d-flex gap-3 justify-content-center flex-wrap mt-3">
          <Link href={`/dashboard/bookings/${done.bookingId}`} className="btn-primary-custom">
            <i className="fa-solid fa-calendar-check"></i><span>View booking</span>
          </Link>
          <Link href="/services" className="btn-outline-custom" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
            <i className="fa-solid fa-arrow-left"></i><span>All services</span>
          </Link>
        </div>
      </div>
    );
  }

  /* ── Selected date spiritual info ── */
  const selDateObj  = dateOptions.find(d => ymd(d) === selectedDate) ?? today;
  const { planet, moon, num } = getSpiritualInfo(selDateObj);

  return (
    <form onSubmit={onSubmit} style={{ display: 'grid', gap: 24, width: '100%', boxSizing: 'border-box' }}>

      {/* ── 0. Select Option (Tiers) ── */}
      {tiers && tiers.length > 0 && (
        <div style={cardStyle}>
          <h3 style={headingStyle}>
            <i className="fa-solid fa-wand-magic-sparkles" style={{ color: 'var(--primary,#C8956C)' }}></i>
            1. Select Option
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: 12,
            width: '100%',
            boxSizing: 'border-box',
          }}>
            {tiers.map((t, idx) => {
              const active = idx === tierIdx;
              return (
                <button
                  key={t.label}
                  type="button"
                  onClick={() => setTierIdx(idx)}
                  style={{
                    padding: '12px 14px',
                    borderRadius: 14,
                    border: active ? '1.5px solid rgba(200,149,108,0.7)' : '1px solid rgba(255,255,255,0.1)',
                    background: active
                      ? 'linear-gradient(135deg, var(--primary,#C8956C) 0%, var(--primary-dark,#A7744D) 100%)'
                      : 'rgba(255,255,255,0.05)',
                    color: '#fff',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    boxShadow: active ? '0 8px 18px rgba(200,149,108,0.3)' : 'none',
                    transition: 'all 0.25s ease',
                    backdropFilter: 'blur(8px)',
                    textAlign: 'center',
                  }}
                >
                  {t.label} ({formatPrice(t.price)})
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ── 1. Pick a Date (Only if required) ── */}
      {requiresDateAndTime && (
        <div style={cardStyle}>
          <h3 style={headingStyle}>
            <i className="fa-regular fa-calendar-days" style={{ color: 'var(--primary,#C8956C)' }}></i>
            {tiers && tiers.length > 0 ? '2. Pick a Date' : '1. Pick a Date'}
          </h3>

        <div className="custom-scrollbar" style={{
          display: 'flex', gap: 10, overflowX: 'auto',
          paddingBottom: 8, scrollBehavior: 'smooth',
          width: '100%', maxWidth: '100%', boxSizing: 'border-box',
        }}>
          {dateOptions.map((d) => {
            const v      = ymd(d);
            const active = v === selectedDate;
            const isToday = v === ymd(today);
            const { planet: dp, moon: dm } = getSpiritualInfo(d);
            return (
              <button
                key={v}
                type="button"
                onClick={() => setSelectedDate(v)}
                style={{
                  flex: '0 0 auto',
                  minWidth: 76,
                  padding: '10px 8px 8px',
                  borderRadius: 16,
                  border: active
                    ? '1.5px solid rgba(200,149,108,0.7)'
                    : '1px solid rgba(255,255,255,0.1)',
                  background: active
                    ? 'linear-gradient(135deg, rgba(200,149,108,0.35) 0%, rgba(162,59,236,0.18) 100%)'
                    : 'rgba(255,255,255,0.04)',
                  color: active ? '#fff' : 'rgba(255,255,255,0.75)',
                  cursor: 'pointer',
                  textAlign: 'center',
                  fontWeight: 600,
                  boxShadow: active ? '0 8px 24px rgba(200,149,108,0.25), 0 0 12px rgba(162,59,236,0.15)' : 'none',
                  transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                  transform: active ? 'scale(1.04)' : 'none',
                  backdropFilter: 'blur(10px)',
                }}
                className="date-picker-btn"
              >
                <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', opacity: 0.65, letterSpacing: '0.05em', marginBottom: 2 }}>
                  {d.toLocaleDateString('en-IN', { weekday: 'short' })}
                </div>
                <div style={{ fontSize: '1.3rem', fontFamily: 'var(--font-heading)', fontWeight: 700, lineHeight: 1 }}>
                  {d.getDate()}
                </div>
                <div style={{ fontSize: '0.58rem', opacity: 0.6, margin: '2px 0 4px' }}>
                  {isToday ? 'Today' : d.toLocaleDateString('en-IN', { month: 'short' })}
                </div>
                {/* Spiritual micro-badges */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
                  <span style={{ fontSize: '0.7rem' }} title={`${dp.name} day`}>{dp.emoji}</span>
                  <span style={{ fontSize: '0.7rem' }} title={dm.name}>{dm.emoji}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* ── Spiritual insight banner for selected date ── */}
        <div className="booking-spiritual-insight">
          {/* Moon phase */}
          <div className="booking-spiritual-col">
            <div style={{ fontSize: '1.6rem', lineHeight: 1, marginBottom: 4 }}>{moon.emoji}</div>
            <div style={{ fontSize: '0.62rem', color: '#C4D4F5', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{moon.name}</div>
            <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{moon.energy}</div>
          </div>
          {/* Planetary ruler */}
          <div className="booking-spiritual-col-center">
            <div style={{ fontSize: '1.6rem', lineHeight: 1, marginBottom: 4 }}>{planet.emoji}</div>
            <div style={{ fontSize: '0.62rem', color: planet.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{planet.name} Day</div>
            <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{planet.energy}</div>
          </div>
          {/* Numerology */}
          <div className="booking-spiritual-col">
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--gold-light,#FFEFA6)', lineHeight: 1, marginBottom: 4 }}>{num.number}</div>
            <div style={{ fontSize: '0.62rem', color: 'var(--gold-light,#FFEFA6)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Life Path {num.number}</div>
            <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{num.label}</div>
          </div>
        </div>

        {/* Deeper tip */}
        <div style={{
          marginTop: 10, padding: '10px 14px',
          borderRadius: 12,
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.07)',
          fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.55)',
          lineHeight: 1.6,
          textAlign: 'center',
        }}>
          <i className="fa-solid fa-star-and-crescent me-1" style={{ color: 'var(--primary,#C8956C)', fontSize: '0.65rem' }}></i>
          {moon.power} {planet.tip}
        </div>
        </div>
      )}

      {/* ── 2. Pick a Time (Only if required) ── */}
      {requiresDateAndTime && (
        <div style={cardStyle}>
          <h3 style={headingStyle}>
            <i className="fa-regular fa-clock" style={{ color: 'var(--primary,#C8956C)' }}></i>
            {tiers && tiers.length > 0 ? '3. Pick a Time' : '2. Pick a Time'}
          </h3>
        {loading ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.5)', padding: '10px 0', justifyContent: 'center' }}>
            <Spinner /> <span>Loading available slots…</span>
          </div>
        ) : (
          <div className="booking-time-picker-grid">
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
                    border: active ? '1.5px solid rgba(200,149,108,0.7)' : '1px solid rgba(255,255,255,0.1)',
                    background: active
                      ? 'linear-gradient(135deg, var(--primary,#C8956C) 0%, var(--primary-dark,#A7744D) 100%)'
                      : (s.available ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)'),
                    color: active ? '#fff' : (s.available ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.2)'),
                    cursor: s.available ? 'pointer' : 'not-allowed',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    textDecoration: s.available ? 'none' : 'line-through',
                    boxShadow: active ? '0 8px 18px rgba(200,149,108,0.3)' : 'none',
                    transition: 'all 0.25s ease',
                    backdropFilter: 'blur(8px)',
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
      )}

      {/* ── 3. Your Details ── */}
      <div style={cardStyle}>
        <h3 style={{ ...headingStyle, justifyContent: 'flex-start' }}>
          <i className="fa-regular fa-user" style={{ color: 'var(--primary,#C8956C)' }}></i>
          {tiers && tiers.length > 0 ? (requiresDateAndTime ? '4. Your Details' : '2. Your Details') : '1. Your Details'}
        </h3>
        <div className="row g-3 mx-0" style={{ width: '100%', boxSizing: 'border-box' }}>
          {[
            { label: 'Name *',  value: name,  setter: setName,  type: 'text',  ph: 'Your name',          required: true },
            { label: 'Email *', value: email, setter: setEmail, type: 'email', ph: 'email@example.com',   required: true },
            { label: 'Phone *', value: phone, setter: setPhone, type: 'tel',   ph: '+91 XXXXX XXXXX',     required: true },
          ].map(f => (
            <div key={f.label} className="col-12 col-md-4 px-2" style={{ boxSizing: 'border-box' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary,#C8956C)', marginBottom: 6, display: 'block' }}>{f.label}</label>
              <input
                required={f.required}
                type={f.type}
                value={f.value}
                onChange={(e) => f.setter(e.target.value)}
                placeholder={f.ph}
                style={{
                  width: '100%', boxSizing: 'border-box',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(200,149,108,0.3)',
                  borderRadius: 12, padding: '10px 14px',
                  color: '#fff', fontSize: '0.9rem',
                  outline: 'none', fontFamily: 'inherit',
                }}
              />
            </div>
          ))}

          {/* Conditional Custom Fields Based on Service */}
          {isTarotVoice && (
            <div className="col-12 px-2" style={{ boxSizing: 'border-box' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary,#C8956C)', marginBottom: 6, display: 'block' }}>What is your specific question or focus? *</label>
              <textarea
                required
                rows={3}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Share the question you want answered..."
                style={{
                  width: '100%', boxSizing: 'border-box', resize: 'none',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(200,149,108,0.3)',
                  borderRadius: 12, padding: '10px 14px',
                  color: '#fff', fontSize: '0.9rem',
                  outline: 'none', fontFamily: 'inherit',
                }}
              />
            </div>
          )}

          {isSpellJar && (
            <>
              <div className="col-12 col-md-6 px-2" style={{ boxSizing: 'border-box' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary,#C8956C)', marginBottom: 6, display: 'block' }}>Date of Birth (Optional)</label>
                <input
                  type="text"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  placeholder="DD/MM/YYYY"
                  style={{
                    width: '100%', boxSizing: 'border-box',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(200,149,108,0.3)',
                    borderRadius: 12, padding: '10px 14px',
                    color: '#fff', fontSize: '0.9rem',
                    outline: 'none', fontFamily: 'inherit',
                  }}
                />
              </div>
              <div className="col-12 px-2" style={{ boxSizing: 'border-box' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary,#C8956C)', marginBottom: 6, display: 'block' }}>Intention (Optional)</label>
                <textarea
                  rows={2}
                  value={intention}
                  onChange={(e) => setIntention(e.target.value)}
                  placeholder="What is your intention for this spell jar?"
                  style={{
                    width: '100%', boxSizing: 'border-box', resize: 'none',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(200,149,108,0.3)',
                    borderRadius: 12, padding: '10px 14px',
                    color: '#fff', fontSize: '0.9rem',
                    outline: 'none', fontFamily: 'inherit',
                  }}
                />
              </div>
            </>
          )}

          {isCandle && (
            <div className="col-12 px-2" style={{ boxSizing: 'border-box' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary,#C8956C)', marginBottom: 6, display: 'block' }}>Intention / Notes (Optional)</label>
              <textarea
                rows={2}
                value={intention}
                onChange={(e) => setIntention(e.target.value)}
                placeholder="Share your specific intention or any notes for the ritual..."
                style={{
                  width: '100%', boxSizing: 'border-box', resize: 'none',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(200,149,108,0.3)',
                  borderRadius: 12, padding: '10px 14px',
                  color: '#fff', fontSize: '0.9rem',
                  outline: 'none', fontFamily: 'inherit',
                }}
              />
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: 6, marginBottom: 0 }}>
                <i className="fa-brands fa-whatsapp" style={{ color: '#25D366' }}></i> Date will be shared via WhatsApp once your booking is received.
              </p>
            </div>
          )}

          {(isNumerology || (!isTarotVoice && !isSpellJar && !isCandle)) && (
            <div className="col-12 px-2" style={{ boxSizing: 'border-box' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary,#C8956C)', marginBottom: 6, display: 'block' }}>Notes (Optional)</label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any additional details..."
                style={{
                  width: '100%', boxSizing: 'border-box', resize: 'none',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(200,149,108,0.3)',
                  borderRadius: 12, padding: '10px 14px',
                  color: '#fff', fontSize: '0.9rem',
                  outline: 'none', fontFamily: 'inherit',
                }}
              />
              {isNumerology && (
                <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: 6, marginBottom: 0 }}>
                  <i className="fa-brands fa-whatsapp" style={{ color: '#25D366' }}></i> Your personalized PDF report will be delivered directly via WhatsApp.
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {error && (
        <div style={{
          color: '#FCA5A5',
          background: 'rgba(239,68,68,0.12)',
          padding: '12px 18px', borderRadius: 12,
          fontWeight: 600, fontSize: '0.9rem',
          display: 'inline-flex', alignItems: 'center', gap: 8,
          border: '1px solid rgba(239,68,68,0.3)',
        }}>
          <i className="fa-solid fa-circle-exclamation"></i>
          {error}
        </div>
      )}

      {/* ── Disclaimer ── */}
      <div style={{ padding: '0 10px', marginBottom: '1.5rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', textAlign: 'center' }}>
        <strong style={{ color: '#FCA5A5' }}>Disclaimer:</strong> All services are strictly non-refundable. By proceeding with this payment, you agree to our Return Policy.
      </div>

      {/* ── Booking Summary Strip ── */}
      <div className="booking-summary-strip">
        <div>
          <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: 700, marginBottom: 2 }}>Session fee</div>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.9rem', fontWeight: 700, color: 'var(--gold-light,#FFEFA6)' }}>{formatPrice(activePrice)}</div>
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="btn-primary-custom"
          style={{
            minWidth: 220, justifyContent: 'center',
            opacity: submitting ? 0.85 : 1,
            cursor: submitting ? 'wait' : 'pointer',
            padding: '14px 28px', borderRadius: 50,
            fontSize: '0.9rem',
            boxShadow: '0 8px 24px rgba(200,149,108,0.35)',
          }}
        >
          {submitting ? <Spinner /> : <i className="fa-solid fa-lock me-1"></i>}
          <span>{submitting ? 'Processing…' : 'Pay & Book'}</span>
        </button>
      </div>
    </form>
  );
}
