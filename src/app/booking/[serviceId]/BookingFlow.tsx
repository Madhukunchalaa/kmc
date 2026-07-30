'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Spinner from '@/components/Spinner';
import AnimatedTimePicker from '@/components/AnimatedTimePicker';
import BookingSuccessAnimation from '@/components/BookingSuccessAnimation';
import { openCashfreeCheckout } from '@/lib/cashfreeCheckout';
import { useCurrency, COUNTRY_CURRENCY_MAP } from '@/context/CurrencyContext';
import { formatPhone, validatePhone, getPhoneConfig } from '@/lib/phoneValidation';

interface Slot { time: string; available: boolean }

function ymd(d: Date) {
  return d.toISOString().slice(0, 10);
}

/** Convert "10:30 AM" / "2:00 PM" → "10:30" / "14:00" so the validator accepts it */
function to24h(time: string): string {
  const m = time.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!m) return time; // already HH:MM or N/A
  let h = parseInt(m[1], 10);
  const min = m[2];
  const ampm = m[3].toUpperCase();
  if (ampm === 'PM' && h !== 12) h += 12;
  if (ampm === 'AM' && h === 12) h = 0;
  return `${String(h).padStart(2, '0')}:${min}`;
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

/* ── Reading Options and Tiers for Tarot ─────────────────── */
const VOICE_OPTIONS = [
  { id: 'yes_no', label: 'SINGLE READING (YES/NO)', price: 199, usdPrice: 8 },
  { id: 'detailed', label: 'SINGLE DETAILED READING', price: 299, usdPrice: 10 },
  { id: 'situational', label: 'SITUATIONAL READINGS', price: 399, usdPrice: 50 },
  { id: 'marriage', label: 'MARRIAGE ANALYSIS', price: 499, usdPrice: 60 },
  { id: 'relationship', label: 'RELATIONSHIP READINGS', price: 599, usdPrice: 60 },
  { id: '3_questions', label: 'SET OF 3 QUESTIONS', price: 666, usdPrice: 30 },
  { id: '5_questions', label: 'SET OF 5 QUESTIONS', price: 999, usdPrice: 40 },
  { id: 'spouse', label: 'FUTURE SPOUSE READING', price: 999, usdPrice: 40 },
  { id: 'annual', label: 'ANNUAL READING (WHOLE YEAR)', price: 1299, usdPrice: 100 },
];

const AUDIO_TIERS = [
  { label: '30 minutes (30min)', price: 1499, usdPrice: 30 },
  { label: '1 hour (1hr)', price: 2999, usdPrice: 60 },
  { label: '2 hours (2hr) — only one slot', price: 5999, usdPrice: 120 },
];

const VIDEO_TIERS = [
  { label: '30 minutes (30min)', price: 2499, usdPrice: 50 },
  { label: '1 hour (1hr)', price: 4999, usdPrice: 100 },
  { label: '2 hours (2hr) — only one slot', price: 6999, usdPrice: 140 },
];

/* ─────────────────────────────────────────────── */

export default function BookingFlow({
  serviceId, serviceSlug, servicePrice, serviceUsdPrice, serviceTitle, tiers, options, defaultName, defaultEmail, defaultPhone = '', initialType,
}: {
  serviceId: string;
  serviceSlug: string;
  servicePrice: number;
  serviceUsdPrice?: number;
  serviceTitle: string;
  tiers?: { label: string; price: number; usdPrice?: number }[];
  options?: { id: string; label: string; price: number; usdPrice?: number }[];
  defaultName: string;
  defaultEmail: string;
  defaultPhone?: string;
  initialType?: string;
}) {
  const today = useMemo(() => new Date(), []);
  const router = useRouter();
  const { formatPrice, countryCode } = useCurrency();
  const currency = (COUNTRY_CURRENCY_MAP[countryCode.toUpperCase()] || COUNTRY_CURRENCY_MAP['Other']).code;
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Calendar month state
  const [calYear,  setCalYear]  = useState(today.getFullYear());
  const [calMonth, setCalMonth] = useState(today.getMonth()); // 0-indexed

  const calDays = useMemo(() => {
    const firstDay = new Date(calYear, calMonth, 1).getDay(); // 0=Sun
    const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
    return { firstDay, daysInMonth };
  }, [calYear, calMonth]);

  const prevMonth = () => {
    if (calMonth === 0) { setCalYear(y => y - 1); setCalMonth(11); }
    else setCalMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (calMonth === 11) { setCalYear(y => y + 1); setCalMonth(0); }
    else setCalMonth(m => m + 1);
  };
  // Disable prev if already at current month
  const isPrevDisabled = calYear === today.getFullYear() && calMonth === today.getMonth();

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
  const [phone,        setPhone]        = useState(defaultPhone);
  const [submitting,   setSubmitting]   = useState(false);
  const [error,        setError]        = useState<string | null>(null);
  const [done,         setDone]         = useState<{ bookingNumber: string; bookingId: string } | null>(null);
  const [showAnim,     setShowAnim]     = useState(false);
  const confirmRef = useRef<HTMLDivElement>(null);
  const pendingDoneRef = useRef<{ bookingNumber: string; bookingId: string } | null>(null);

  // Tarot Specific States
  const [tarotType, setTarotType] = useState<'voice' | 'audio'>(() => {
    if (initialType === 'video' || initialType === 'audio' || initialType === 'call') {
      return 'audio';
    }
    return 'voice';
  });
  const [selectedVoiceOptions, setSelectedVoiceOptions] = useState<string[]>(['yes_no']);

  // Determine rules based on service
  const isTarot = serviceSlug === 'tarot';
  const isCandle = serviceSlug === 'candle';
  const isSpellJar = serviceSlug === 'spelljar';
  const isNumerology = serviceSlug === 'numerology';

  const requiresDateAndTime = isTarot ? (tarotType === 'audio') : false;
  const isTarotVoice = isTarot && tarotType === 'voice';
  // Live-call label depends on how the customer arrived: a video link shows "Video Call",
  // otherwise (audio/call/default) it shows "Audio Call".
  const isVideoType = initialType === 'video';
  const callLabel = isVideoType ? 'Video Call' : 'Audio Call';
  const callIcon = isVideoType ? '📹' : '📞';
  const callMedium = isVideoType ? 'WhatsApp Video Call' : 'WhatsApp Audio';
  const callTiers = useMemo(() => {
    const baseTiers = isVideoType ? VIDEO_TIERS : AUDIO_TIERS;
    if (serviceSlug !== 'tarot' || !tiers || tiers.length === 0) return baseTiers;

    if (isVideoType) {
      return baseTiers.map((opt, idx) => {
        if (idx < tiers.length) {
          const dbTier = tiers[idx];
          return {
            ...opt,
            label: dbTier.label,
            price: dbTier.price,
            usdPrice: dbTier.usdPrice ?? opt.usdPrice,
          };
        }
        return opt;
      });
    } else {
      return baseTiers.map((opt, idx) => {
        const dbIdx = 9 + idx;
        if (dbIdx < tiers.length) {
          const dbTier = tiers[dbIdx];
          return {
            ...opt,
            label: dbTier.label,
            price: dbTier.price,
            usdPrice: dbTier.usdPrice ?? opt.usdPrice,
          };
        }
        return opt;
      });
    }
  }, [serviceSlug, tiers, isVideoType]);

  const selectedTier = tiers && tiers[tierIdx];
  
  const voiceOptions = useMemo(() => {
    if (serviceSlug !== 'tarot') {
      return options && options.length > 0 ? options : VOICE_OPTIONS;
    }
    if (!tiers || tiers.length === 0) return VOICE_OPTIONS;

    return VOICE_OPTIONS.map((opt, idx) => {
      const matchByLabel = tiers.find(
        (t) => t.label.trim().toUpperCase() === opt.label.trim().toUpperCase()
      );
      if (matchByLabel) {
        return {
          ...opt,
          label: matchByLabel.label,
          price: matchByLabel.price,
          usdPrice: matchByLabel.usdPrice ?? opt.usdPrice,
        };
      }
      if (idx < tiers.length) {
        const dbTier = tiers[idx];
        return {
          ...opt,
          label: dbTier.label,
          price: dbTier.price,
          usdPrice: dbTier.usdPrice ?? opt.usdPrice,
        };
      }
      return opt;
    });
  }, [serviceSlug, tiers, options]);

  const activePrice = isTarot
    ? (tarotType === 'voice'
        ? voiceOptions.filter(o => selectedVoiceOptions.includes(o.id)).reduce((sum, o) => sum + o.price, 0)
        : (callTiers[tierIdx]?.price ?? callTiers[0].price))
    : (selectedTier ? selectedTier.price : servicePrice);

  const activeUsdPrice = isTarot
    ? (tarotType === 'voice'
        ? voiceOptions.filter(o => selectedVoiceOptions.includes(o.id)).reduce((sum, o) => sum + (o.usdPrice ?? 0), 0)
        : (callTiers[tierIdx]?.usdPrice ?? callTiers[0].usdPrice))
    : (selectedTier ? selectedTier.usdPrice : serviceUsdPrice);


  // Slot fetching removed, user manually picks time.

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isTarot && tarotType === 'voice' && selectedVoiceOptions.length === 0) { setError('Please select at least one reading option.'); return; }
    if (requiresDateAndTime && !selectedTime) { setError('Please scroll the time picker to select your preferred session time.'); return; }
    if (isTarotVoice && !question.trim()) { setError('Please enter your specific question or focus area before booking.'); return; }
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
      const timeSlotValue = requiresDateAndTime && selectedTime ? to24h(selectedTime) : 'N/A';
      const res  = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          serviceId,
          date: requiresDateAndTime ? selectedDate : 'N/A',
          timeSlot: timeSlotValue,
          question,
          intention,
          dob,
          notes,
          tierLabel: isTarot
            ? (tarotType === 'voice'
                ? `Voice Chat (${selectedVoiceOptions.map(id => voiceOptions.find(o => o.id === id)?.label).join(', ')})`
                : `${callLabel} (${callTiers[tierIdx]?.label})`)
            : selectedTier?.label,
          tierPrice: activePrice,
          tierUsdPrice: activeUsdPrice,
          currency,
          customer: { name, email, phone: formattedPhone }
        }),
      });
      const data = await res.json();
      if (!data.ok) {
        const reason = data.reason || '';
        let msg = 'Something went wrong. Please try again.';
        if (reason === 'slot-already-taken')  msg = 'That time slot was just taken — please choose another time.';
        else if (reason === 'unauthorized')   msg = 'Please log in to complete your booking.';
        else if (reason === 'service-not-found') msg = 'Service not found. Please go back and try again.';
        else if (reason.toLowerCase().includes('time')) msg = 'Please select a valid time slot and try again.';
        else if (reason.length > 0 && reason.length < 200) msg = reason;
        setError(msg);
        setSubmitting(false);
        return;
      }

      const gateway = data.gateway || 'cashfree';

      if (gateway === 'whatsapp') {
        const message = `Hello! I have placed booking #${data.bookingNumber} for ${serviceTitle}. Please help me complete the payment.`;
        const whatsappUrl = `https://wa.me/918096223929?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappUrl, '_blank');
        
        router.push(`/booking/success?booking_id=${data.bookingId}&booking_number=${data.bookingNumber}&gateway=whatsapp`);
        setSubmitting(false);
        return;
      }

      if (gateway === 'razorpay') {
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

        const { openRazorpayCheckout } = await import('@/lib/razorpayCheckout');
        const rzpRes = await openRazorpayCheckout({
          keyId: payData.keyId,
          amount: payData.amount,
          currency: payData.currency,
          razorpayOrderId: payData.razorpayOrderId,
          orderNumber: payData.bookingNumber,
          name: payData.customer.name,
          email: payData.customer.email,
          phone: payData.customer.phone,
        });

        const verifyRes = await fetch('/api/payments/razorpay/booking/verify', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            bookingId: data.bookingId,
            razorpay_order_id: rzpRes.razorpay_order_id,
            razorpay_payment_id: rzpRes.razorpay_payment_id,
            razorpay_signature: rzpRes.razorpay_signature,
          }),
        });
        const verifyData = await verifyRes.json();
        if (!verifyRes.ok || !verifyData.ok) {
          setError(verifyData.reason ?? 'Payment verification failed. Contact us with your booking ID.');
          setSubmitting(false);
          return;
        }
      } else {
        // Proceed to Cashfree payment
        const payRes = await fetch('/api/payments/cashfree/booking/create', {
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

        await openCashfreeCheckout({
          paymentSessionId: payData.paymentSessionId,
          orderId: payData.cfOrderId,
          mode: payData.mode,
        });

        const verifyRes = await fetch('/api/payments/cashfree/booking/verify', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            bookingId: data.bookingId,
            cfOrderId: payData.cfOrderId,
          }),
        });
        const verifyData = await verifyRes.json();
        if (!verifyRes.ok || !verifyData.ok) {
          setError(verifyData.reason ?? 'Payment verification failed. Contact us with your booking ID.');
          setSubmitting(false);
          return;
        }
      }

      // Show cosmic animation first, then reveal confirmation
      setShowAnim(true);
      // setDone is called by animation's onComplete callback (after ~3.8s)
      // Store payload so callback can use it
      pendingDoneRef.current = { bookingNumber: data.bookingNumber, bookingId: data.bookingId };
    } catch (err) { 
      if (err instanceof Error && err.message === 'payment-cancelled') {
        setError('Payment was cancelled. You can try booking again.');
      } else {
        setError('Network error or payment failed.');
      }
    }
    setSubmitting(false);
  };

  // Scroll confirmation into view when it appears
  useEffect(() => {
    if (done && confirmRef.current) {
      setTimeout(() => {
        confirmRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, [done]);

  if (showAnim && !done) {
    return (
      <BookingSuccessAnimation onComplete={() => {
        if (pendingDoneRef.current) {
          setDone(pendingDoneRef.current);
          pendingDoneRef.current = null;
        }
        setShowAnim(false);
      }} />
    );
  }

  if (done) {
    return (
      <div ref={confirmRef} className="text-center" style={{ ...cardStyle, padding: 40 }}>
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
  const selDateObj = (() => {
    if (!selectedDate) return today;
    const [y, m, d] = selectedDate.split('-').map(Number);
    return new Date(y, m - 1, d);
  })();
  const { planet, moon, num } = getSpiritualInfo(selDateObj);

  return (
    <form onSubmit={onSubmit} style={{ display: 'grid', gap: 24, width: '100%', boxSizing: 'border-box' }}>



      {/* ── 0. Select Option (Tiers for Non-Tarot Services) ── */}
      {!isTarot && tiers && tiers.length > 0 && (
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
                  {t.label} ({formatPrice(t.price, t.usdPrice)})
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ── 0. Select Option (Tiers for Tarot Service) ── */}
      {isTarot && (
        <div style={cardStyle}>
          <h3 style={headingStyle}>
            <i className="fa-solid fa-wand-magic-sparkles" style={{ color: 'var(--primary,#C8956C)' }}></i>
            {initialType
              ? (tarotType === 'voice' ? '1. Select Options' : '1. Select Option')
              : '1. Select Reading Type'}
          </h3>
          
          {/* Reading Type Selector Buttons */}
          {!initialType && (
            <div style={{
              display: 'flex',
              gap: 16,
              marginBottom: 24,
              width: '100%',
              boxSizing: 'border-box'
            }}>
              <button
                type="button"
                onClick={() => {
                  setTarotType('voice');
                  setTierIdx(0);
                }}
                style={{
                  flex: 1,
                  padding: '16px 20px',
                  borderRadius: 16,
                  border: tarotType === 'voice' ? '1.5px solid rgba(200,149,108,0.7)' : '1px solid rgba(255,255,255,0.1)',
                  background: tarotType === 'voice'
                    ? 'linear-gradient(135deg, var(--primary,#C8956C) 0%, var(--primary-dark,#A7744D) 100%)'
                    : 'rgba(255,255,255,0.05)',
                  color: '#fff',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: '1rem',
                  boxShadow: tarotType === 'voice' ? '0 8px 18px rgba(200,149,108,0.3)' : 'none',
                  transition: 'all 0.25s ease',
                  backdropFilter: 'blur(8px)',
                  textAlign: 'center',
                }}
              >
                💬 Voice Chat
              </button>
              <button
                type="button"
                onClick={() => {
                  setTarotType('audio');
                  setTierIdx(0);
                }}
                style={{
                  flex: 1,
                  padding: '16px 20px',
                  borderRadius: 16,
                  border: tarotType === 'audio' ? '1.5px solid rgba(200,149,108,0.7)' : '1px solid rgba(255,255,255,0.1)',
                  background: tarotType === 'audio'
                    ? 'linear-gradient(135deg, var(--primary,#C8956C) 0%, var(--primary-dark,#A7744D) 100%)'
                    : 'rgba(255,255,255,0.05)',
                  color: '#fff',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: '1rem',
                  boxShadow: tarotType === 'audio' ? '0 8px 18px rgba(200,149,108,0.3)' : 'none',
                  transition: 'all 0.25s ease',
                  backdropFilter: 'blur(8px)',
                  textAlign: 'center',
                }}
              >
                {callIcon} {callLabel}
              </button>
            </div>
          )}

          {/* Render Options based on active type */}
          {tarotType === 'voice' ? (
            <div>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginBottom: 16 }}>
                Select one or more reading options. The total price adjusts automatically based on your selections:
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: 12,
                width: '100%',
                boxSizing: 'border-box'
              }}>
                {voiceOptions.map((opt) => {
                  const selected = selectedVoiceOptions.includes(opt.id);
                  return (
                    <div
                      key={opt.id}
                      onClick={() => {
                        if (selected) {
                          setSelectedVoiceOptions(selectedVoiceOptions.filter(id => id !== opt.id));
                        } else {
                          setSelectedVoiceOptions([...selectedVoiceOptions, opt.id]);
                        }
                      }}
                      style={{
                        padding: '14px 18px',
                        borderRadius: 14,
                        border: selected ? '1.5px solid rgba(200,149,108,0.7)' : '1px solid rgba(255,255,255,0.08)',
                        background: selected ? 'rgba(200,149,108,0.15)' : 'rgba(255,255,255,0.02)',
                        color: '#fff',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 12,
                        transition: 'all 0.25s ease',
                        backdropFilter: 'blur(4px)',
                        userSelect: 'none'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <input
                          type="checkbox"
                          checked={selected}
                          onChange={() => {}} // handled by parent onClick
                          style={{
                            accentColor: 'var(--primary,#C8956C)',
                            cursor: 'pointer',
                            width: 16,
                            height: 16
                          }}
                        />
                        <span style={{ fontSize: '0.82rem', fontWeight: 600, color: selected ? '#fff' : 'rgba(255,255,255,0.85)' }}>
                          {opt.label}
                        </span>
                      </div>
                      <span style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        color: selected ? 'var(--gold-light,#FFEFA6)' : 'rgba(255,255,255,0.6)'
                      }}>
                        {formatPrice(opt.price, opt.usdPrice)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginBottom: 16 }}>
                Select the duration for your live {isVideoType ? 'video call' : 'audio session'} (conducted via {callMedium}):
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: 12,
                width: '100%',
                boxSizing: 'border-box'
              }}>
                {callTiers.map((t, idx) => {
                  const active = idx === tierIdx;
                  return (
                    <button
                      key={t.label}
                      type="button"
                      onClick={() => setTierIdx(idx)}
                      style={{
                        padding: '16px 14px',
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
                      {t.label} ({formatPrice(t.price, t.usdPrice)})
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── 1. Pick a Date (Only if required) ── */}
      {requiresDateAndTime && (
        <div style={cardStyle}>
          <h3 style={headingStyle}>
            <i className="fa-regular fa-calendar-days" style={{ color: 'var(--primary,#C8956C)' }}></i>
            {tiers && tiers.length > 0 ? '2. Pick a Date' : '1. Pick a Date'}
          </h3>

        {/* Month navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <button type="button" onClick={prevMonth} disabled={isPrevDisabled} style={{
            background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
            color: isPrevDisabled ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.8)',
            borderRadius: 8, padding: '6px 14px', cursor: isPrevDisabled ? 'not-allowed' : 'pointer',
            fontSize: '0.85rem', fontWeight: 600,
          }}>‹ Prev</button>
          <span style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700 }}>
            {new Date(calYear, calMonth).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
          </span>
          <button type="button" onClick={nextMonth} style={{
            background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
            color: 'rgba(255,255,255,0.8)', borderRadius: 8, padding: '6px 14px', cursor: 'pointer',
            fontSize: '0.85rem', fontWeight: 600,
          }}>Next ›</button>
        </div>

        {/* Day-of-week headers */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 4, marginBottom: 4 }}>
          {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => (
            <div key={d} style={{ textAlign: 'center', fontSize: '0.62rem', color: 'rgba(255,255,255,0.35)', fontWeight: 700, textTransform: 'uppercase', padding: '4px 0' }}>{d}</div>
          ))}
        </div>

        {/* Calendar grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 4 }}>
          {/* Empty cells for offset */}
          {Array.from({ length: calDays.firstDay }).map((_, i) => <div key={`e${i}`} />)}

          {Array.from({ length: calDays.daysInMonth }, (_, i) => {
            const dayNum = i + 1;
            const dateObj = new Date(calYear, calMonth, dayNum);
            const v = ymd(dateObj);
            const todayStr = ymd(today);
            const isPast = v < todayStr;
            const active = v === selectedDate;
            const isToday = v === todayStr;
            const { planet: dp, moon: dm } = getSpiritualInfo(dateObj);
            return (
              <button
                key={v}
                type="button"
                disabled={isPast}
                onClick={() => setSelectedDate(v)}
                style={{
                  padding: '6px 2px',
                  borderRadius: 10,
                  border: active
                    ? '1.5px solid rgba(200,149,108,0.8)'
                    : isToday
                    ? '1px solid rgba(200,149,108,0.35)'
                    : '1px solid transparent',
                  background: active
                    ? 'linear-gradient(135deg, rgba(200,149,108,0.4) 0%, rgba(162,59,236,0.2) 100%)'
                    : isToday
                    ? 'rgba(200,149,108,0.1)'
                    : 'rgba(255,255,255,0.03)',
                  color: isPast ? 'rgba(255,255,255,0.15)' : active ? '#fff' : 'rgba(255,255,255,0.75)',
                  cursor: isPast ? 'not-allowed' : 'pointer',
                  textAlign: 'center',
                  transition: 'all 0.2s',
                  boxShadow: active ? '0 4px 16px rgba(200,149,108,0.25)' : 'none',
                }}
              >
                <div style={{ fontSize: '0.95rem', fontWeight: 700, lineHeight: 1 }}>{dayNum}</div>
                {!isPast && (
                  <div style={{ display: 'flex', justifyContent: 'center', gap: 1, marginTop: 2 }}>
                    <span style={{ fontSize: '0.55rem' }} title={dp.name}>{dp.emoji}</span>
                    <span style={{ fontSize: '0.55rem' }} title={dm.name}>{dm.emoji}</span>
                  </div>
                )}
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
          <div style={{ marginTop: 24 }}>
            <AnimatedTimePicker 
              value={selectedTime || '10:00 AM'} 
              onChange={setSelectedTime} 
            />
          </div>
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
            { 
              label: 'Phone *', 
              value: phone, 
              setter: setPhone, 
              type: 'tel',   
              ph: getPhoneConfig(countryCode || 'IN').placeholder,     
              required: true,
              readOnly: !!defaultPhone,
              onBlur: () => {
                if (phone.trim()) {
                  setPhone(formatPhone(phone, countryCode || 'IN'));
                }
              }
            },
          ].map(f => (
            <div key={f.label} className="col-12 col-md-4 px-2" style={{ boxSizing: 'border-box' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary,#C8956C)', marginBottom: 6, display: 'block' }}>{f.label}</label>
              <input
                required={f.required}
                type={f.type}
                value={f.value}
                onChange={(e) => f.setter(e.target.value)}
                onBlur={(f as any).onBlur}
                placeholder={f.ph}
                readOnly={(f as any).readOnly}
                style={{
                  width: '100%', boxSizing: 'border-box',
                  background: (f as any).readOnly ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(200,149,108,0.3)',
                  borderRadius: 12, padding: '10px 14px',
                  color: (f as any).readOnly ? '#888' : '#fff', 
                  fontSize: '0.9rem',
                  outline: 'none', fontFamily: 'inherit',
                  cursor: (f as any).readOnly ? 'not-allowed' : 'text',
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
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.9rem', fontWeight: 700, color: 'var(--gold-light,#FFEFA6)' }}>{formatPrice(activePrice, activeUsdPrice)}</div>
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
