'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const currentYear = new Date().getFullYear();
const YEARS = Array.from({ length: 5 }, (_, i) => currentYear - i);

function FilterInner() {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  const activeMonth = sp.get('month') ? Number(sp.get('month')) : null;
  const activeYear = sp.get('year') ? Number(sp.get('year')) : currentYear;
  const isAllTime = !activeMonth;

  const navigate = (month: number | null, year: number) => {
    const params = new URLSearchParams();
    if (month) {
      params.set('month', String(month));
      params.set('year', String(year));
    }
    const qs = params.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname);
  };

  const setAllTime = () => navigate(null, currentYear);
  const setThisMonth = () => navigate(new Date().getMonth() + 1, currentYear);

  return (
    <div style={{
      background: '#fff',
      borderRadius: 14,
      padding: '14px 20px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      marginBottom: 20,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap',
    }}>
      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#555', letterSpacing: '0.05em', textTransform: 'uppercase', marginRight: 4 }}>
        <i className="fa-solid fa-filter me-2" style={{ color: '#C8956C' }}></i>
        View period:
      </span>

      {/* All Time button */}
      <button
        onClick={setAllTime}
        style={{
          padding: '6px 18px',
          borderRadius: 20,
          border: `2px solid ${isAllTime ? '#C8956C' : 'rgba(0,0,0,0.12)'}`,
          background: isAllTime ? '#C8956C' : 'transparent',
          color: isAllTime ? '#fff' : '#555',
          fontWeight: 600,
          fontSize: '0.85rem',
          cursor: 'pointer',
          transition: 'all 0.15s',
        }}
      >
        All Time
      </button>

      {/* This Month shortcut */}
      <button
        onClick={setThisMonth}
        style={{
          padding: '6px 18px',
          borderRadius: 20,
          border: `2px solid ${(!isAllTime && activeMonth === new Date().getMonth() + 1 && activeYear === currentYear) ? '#3F8EFC' : 'rgba(0,0,0,0.12)'}`,
          background: (!isAllTime && activeMonth === new Date().getMonth() + 1 && activeYear === currentYear) ? '#3F8EFC' : 'transparent',
          color: (!isAllTime && activeMonth === new Date().getMonth() + 1 && activeYear === currentYear) ? '#fff' : '#555',
          fontWeight: 600,
          fontSize: '0.85rem',
          cursor: 'pointer',
          transition: 'all 0.15s',
        }}
      >
        This Month
      </button>

      {/* Divider */}
      <div style={{ height: 28, width: 1, background: 'rgba(0,0,0,0.1)' }} />

      {/* Month + Year pickers */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <select
          value={activeMonth ?? ''}
          onChange={(e) => {
            const m = Number(e.target.value);
            if (m) navigate(m, activeYear);
          }}
          style={{
            padding: '6px 10px',
            borderRadius: 8,
            border: '1px solid rgba(0,0,0,0.15)',
            fontSize: '0.85rem',
            background: !isAllTime ? '#f9f3ee' : '#fff',
            fontWeight: !isAllTime ? 600 : 400,
            cursor: 'pointer',
          }}
        >
          <option value="">— Month —</option>
          {MONTHS.map((m, i) => (
            <option key={m} value={i + 1}>{m}</option>
          ))}
        </select>

        <select
          value={activeYear}
          onChange={(e) => {
            const y = Number(e.target.value);
            if (!isAllTime && activeMonth) navigate(activeMonth, y);
          }}
          style={{
            padding: '6px 10px',
            borderRadius: 8,
            border: '1px solid rgba(0,0,0,0.15)',
            fontSize: '0.85rem',
            background: !isAllTime ? '#f9f3ee' : '#fff',
            fontWeight: !isAllTime ? 600 : 400,
            cursor: 'pointer',
          }}
        >
          {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
        </select>
      </div>

      {/* Current filter label */}
      {!isAllTime && activeMonth && (
        <span style={{
          fontSize: '0.78rem',
          color: '#C8956C',
          fontWeight: 600,
          background: '#C8956C18',
          padding: '4px 10px',
          borderRadius: 20,
        }}>
          {MONTHS[activeMonth - 1]} {activeYear}
        </span>
      )}
    </div>
  );
}

export default function DashboardFilter() {
  return (
    <Suspense>
      <FilterInner />
    </Suspense>
  );
}
