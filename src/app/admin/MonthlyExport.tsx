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
  const [loadingFull, setLoadingFull] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const downloadBlob = async (url: string, filename: string, setLoad: (v: boolean) => void) => {
    setLoad(true);
    setErr(null);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.reason || 'Export failed');
      }
      const blob = await res.blob();
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = filename;
      a.click();
      URL.revokeObjectURL(a.href);
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Download failed');
    } finally {
      setLoad(false);
    }
  };

  const download = () =>
    downloadBlob(
      `/api/admin/export/monthly?month=${month}&year=${year}`,
      `krissmaagiic-${year}-${String(month).padStart(2, '0')}.xlsx`,
      setLoading,
    );

  const downloadFull = () =>
    downloadBlob(
      `/api/admin/export/full`,
      `krissmaagiic-full-report-${new Date().toISOString().split('T')[0]}.xlsx`,
      setLoadingFull,
    );

  return (
    <div style={{ background: '#fff', borderRadius: 14, padding: '20px 24px', boxShadow: '0 2px 10px rgba(0,0,0,0.06)', marginBottom: 28 }}>
      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: 16 }}>
        <i className="fa-solid fa-file-excel me-2" style={{ color: '#1D6F42' }}></i>
        Data Export
      </h3>

      {/* Monthly Export */}
      <div style={{ marginBottom: 16 }}>
        <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#555', margin: '0 0 10px' }}>Monthly Report</p>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, flexWrap: 'wrap' }}>
          <div>
            <label style={{ fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: 4 }}>Month</label>
            <select value={month} onChange={(e) => setMonth(Number(e.target.value))}
              style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid rgba(0,0,0,0.15)', fontSize: '0.9rem', minWidth: 140 }}>
              {MONTHS.map((m, i) => <option key={m} value={i + 1}>{m}</option>)}
            </select>
          </div>
          <div>
            <label style={{ fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: 4 }}>Year</label>
            <select value={year} onChange={(e) => setYear(Number(e.target.value))}
              style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid rgba(0,0,0,0.15)', fontSize: '0.9rem' }}>
              {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>
          <button onClick={download} disabled={loading || loadingFull} className="btn-primary-custom"
            style={{ height: 40, justifyContent: 'center', minWidth: 180, opacity: loading ? 0.8 : 1 }}>
            <i className={`fa-solid ${loading ? 'fa-spinner fa-spin' : 'fa-download'} me-2`}></i>
            <span>{loading ? 'Generating…' : 'Download Monthly'}</span>
          </button>
        </div>
        <p style={{ fontSize: '0.72rem', color: '#aaa', margin: '6px 0 0' }}>
          Orders + Bookings + Summary for selected month
        </p>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px dashed rgba(0,0,0,0.08)', margin: '16px 0' }} />

      {/* Full Report */}
      <div>
        <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#555', margin: '0 0 10px' }}>Full Report (All Time)</p>
        <button onClick={downloadFull} disabled={loading || loadingFull}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: loadingFull ? '#888' : '#1D6F42', color: '#fff',
            border: 'none', borderRadius: 10, padding: '10px 22px',
            fontWeight: 600, cursor: loadingFull ? 'default' : 'pointer',
            fontSize: '0.9rem', opacity: loadingFull ? 0.8 : 1,
          }}>
          <i className={`fa-solid ${loadingFull ? 'fa-spinner fa-spin' : 'fa-file-arrow-down'}`}></i>
          {loadingFull ? 'Generating full report…' : 'Download Full Report'}
        </button>
        <p style={{ fontSize: '0.72rem', color: '#aaa', margin: '6px 0 0' }}>
          5 sheets: Summary · All Orders · All Bookings · All Customers · All Products
        </p>
      </div>

      {err && <p style={{ color: '#D95F5F', marginTop: 12, fontSize: '0.85rem' }}><i className="fa-solid fa-circle-exclamation me-2" />{err}</p>}
    </div>
  );
}
