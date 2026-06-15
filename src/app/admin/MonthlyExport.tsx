'use client';

import { useState } from 'react';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const currentYear = new Date().getFullYear();
const YEARS = Array.from({ length: 5 }, (_, i) => currentYear - i);

export default function MonthlyExport() {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(currentYear);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const download = async () => {
    setLoading(true);
    setErr(null);
    try {
      const res = await fetch(`/api/admin/export/monthly?month=${month}&year=${year}`);
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.reason || 'Export failed');
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `krissmaagiic-${year}-${String(month).padStart(2, '0')}.xlsx`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Download failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: '#fff', borderRadius: 14, padding: '20px 24px', boxShadow: '0 2px 10px rgba(0,0,0,0.06)', marginBottom: 28 }}>
      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: 16 }}>
        <i className="fa-solid fa-file-excel me-2" style={{ color: '#1D6F42' }}></i>
        Monthly Data Export
      </h3>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, flexWrap: 'wrap' }}>
        <div>
          <label style={{ fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: 4 }}>Month</label>
          <select
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
            style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid rgba(0,0,0,0.15)', fontSize: '0.9rem', minWidth: 140 }}
          >
            {MONTHS.map((m, i) => (
              <option key={m} value={i + 1}>{m}</option>
            ))}
          </select>
        </div>
        <div>
          <label style={{ fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: 4 }}>Year</label>
          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid rgba(0,0,0,0.15)', fontSize: '0.9rem' }}
          >
            {YEARS.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>
        <button
          onClick={download}
          disabled={loading}
          className="btn-primary-custom"
          style={{ height: 40, justifyContent: 'center', minWidth: 180, opacity: loading ? 0.8 : 1 }}
        >
          <i className={`fa-solid ${loading ? 'fa-spinner fa-spin' : 'fa-download'} me-2`}></i>
          <span>{loading ? 'Generating…' : 'Download Excel'}</span>
        </button>
      </div>
      {err && <p style={{ color: '#D95F5F', marginTop: 10, fontSize: '0.85rem' }}><i className="fa-solid fa-circle-exclamation me-2"></i>{err}</p>}
      <p style={{ fontSize: '0.75rem', color: '#aaa', marginTop: 8, marginBottom: 0 }}>
        Downloads an Excel with 3 sheets: Summary · Products · Services
      </p>
    </div>
  );
}
