'use client';

import { useState } from 'react';

interface DailyMetric {
  day: string;
  revenue: number;
  bookings: number;
}

interface CategorySummary {
  category: string;
  revenue: number;
}

export default function DashboardCharts({
  dailyMetrics,
  categorySummary
}: {
  dailyMetrics: DailyMetric[];
  categorySummary: CategorySummary[];
}) {
  const [activeSaleIdx, setActiveSaleIdx] = useState<number | null>(null);
  const [activeBookingIdx, setActiveBookingIdx] = useState<number | null>(null);

  // Constants for SVG charts
  const width = 600;
  const height = 240;
  const padding = 40;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  // 1. Calculations for Sales Trend (Line/Area Chart)
  const maxRevenue = Math.max(...dailyMetrics.map((d) => d.revenue), 1000);
  const salesPoints = dailyMetrics.map((d, idx) => {
    const x = padding + (idx / (dailyMetrics.length - 1)) * chartWidth;
    const y = padding + chartHeight - (d.revenue / maxRevenue) * chartHeight;
    return { x, y, ...d };
  });

  const salesPath = salesPoints.length
    ? `M ${salesPoints[0].x} ${salesPoints[0].y} ` +
      salesPoints.slice(1).map((p) => `L ${p.x} ${p.y}`).join(' ')
    : '';

  const salesAreaPath = salesPoints.length
    ? `${salesPath} L ${salesPoints[salesPoints.length - 1].x} ${height - padding} L ${salesPoints[0].x} ${height - padding} Z`
    : '';

  // 2. Calculations for Bookings Trend (Bar Chart)
  const maxBookings = Math.max(...dailyMetrics.map((d) => d.bookings), 5);
  const barWidth = Math.max(2, (chartWidth / dailyMetrics.length) * 0.7);
  const bookingBars = dailyMetrics.map((d, idx) => {
    const x = padding + (idx / dailyMetrics.length) * chartWidth + (chartWidth / dailyMetrics.length - barWidth) / 2;
    const barHeight = (d.bookings / maxBookings) * chartHeight;
    const y = height - padding - barHeight;
    return { x, y, w: barWidth, h: barHeight, ...d };
  });

  // 3. Category Summary calculations
  const totalCatRevenue = categorySummary.reduce((sum, c) => sum + c.revenue, 0);

  return (
    <div className="row g-4 mt-2">
      {/* Sales Trend Chart */}
      <div className="col-lg-7">
        <div
          style={{
            background: '#fff',
            padding: '1.5rem',
            borderRadius: 16,
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
            border: '1px solid rgba(0,0,0,0.02)',
            height: '100%',
          }}
        >
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', margin: 0, fontWeight: 700 }}>
                Sales & Revenue Trend
              </h4>
              <p style={{ fontSize: '0.8rem', color: '#888', margin: 0 }}>Revenue trends over the last 30 days.</p>
            </div>
            {activeSaleIdx !== null && (
              <div style={{ background: 'var(--primary,#C8956C)15', color: 'var(--primary,#C8956C)', padding: '4px 10px', borderRadius: 8, fontSize: '0.8rem', fontWeight: 600 }}>
                {salesPoints[activeSaleIdx].day}: ₹{salesPoints[activeSaleIdx].revenue.toLocaleString('en-IN')}
              </div>
            )}
          </div>

          <div style={{ position: 'relative', width: '100%', overflowX: 'auto' }}>
            <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="100%" style={{ minWidth: '500px', display: 'block' }}>
              <defs>
                <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--primary,#C8956C)" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="var(--primary,#C8956C)" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              {[0, 0.25, 0.5, 0.75, 1].map((p, idx) => {
                const y = padding + p * chartHeight;
                return (
                  <g key={idx}>
                    <line x1={padding} y1={y} x2={width - padding} y2={y} stroke="#f0f0f0" strokeDasharray="3 3" />
                    <text x={padding - 8} y={y + 4} textAnchor="end" fontSize="10" fill="#999">
                      ₹{Math.round(maxRevenue * (1 - p)).toLocaleString('en-IN')}
                    </text>
                  </g>
                );
              })}

              {/* Area Path */}
              {salesAreaPath && <path d={salesAreaPath} fill="url(#salesGrad)" />}

              {/* Line Path */}
              {salesPath && (
                <path d={salesPath} fill="none" stroke="var(--primary,#C8956C)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              )}

              {/* Interactive Hover Targets & Points */}
              {salesPoints.map((p, idx) => {
                const showLabels = idx % 5 === 0 || idx === salesPoints.length - 1;
                return (
                  <g key={idx}>
                    {/* X-axis labels */}
                    {showLabels && (
                      <g>
                        <line x1={p.x} y1={height - padding} x2={p.x} y2={height - padding + 5} stroke="#ccc" />
                        <text x={p.x} y={height - padding + 18} textAnchor="middle" fontSize="10" fill="#999">
                          {p.day}
                        </text>
                      </g>
                    )}

                    {/* Active point indicator */}
                    {(activeSaleIdx === idx || p.revenue > 0) && (
                      <circle
                        cx={p.x}
                        cy={p.y}
                        r={activeSaleIdx === idx ? 6 : 3.5}
                        fill={activeSaleIdx === idx ? 'var(--primary,#C8956C)' : '#fff'}
                        stroke="var(--primary,#C8956C)"
                        strokeWidth={activeSaleIdx === idx ? 3 : 2}
                        style={{ transition: 'all 0.15s ease' }}
                      />
                    )}

                    {/* Invisible hover hotspot */}
                    <rect
                      x={p.x - chartWidth / (dailyMetrics.length * 2)}
                      y={padding}
                      width={chartWidth / dailyMetrics.length}
                      height={chartHeight}
                      fill="transparent"
                      style={{ cursor: 'pointer' }}
                      onMouseEnter={() => setActiveSaleIdx(idx)}
                      onMouseLeave={() => setActiveSaleIdx(null)}
                    />
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>

      {/* Bookings Trend Chart */}
      <div className="col-lg-5">
        <div
          style={{
            background: '#fff',
            padding: '1.5rem',
            borderRadius: 16,
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
            border: '1px solid rgba(0,0,0,0.02)',
            height: '100%',
          }}
        >
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', margin: 0, fontWeight: 700 }}>
                Booking Schedule Load
              </h4>
              <p style={{ fontSize: '0.8rem', color: '#888', margin: 0 }}>Sessions booked in the last 30 days.</p>
            </div>
            {activeBookingIdx !== null && (
              <div style={{ background: '#3F8EFC15', color: '#3F8EFC', padding: '4px 10px', borderRadius: 8, fontSize: '0.8rem', fontWeight: 600 }}>
                {bookingBars[activeBookingIdx].day}: {bookingBars[activeBookingIdx].bookings} sessions
              </div>
            )}
          </div>

          <div style={{ position: 'relative', width: '100%', overflowX: 'auto' }}>
            <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="100%" style={{ minWidth: '400px', display: 'block' }}>
              {/* Grid Lines */}
              {[0, 0.25, 0.5, 0.75, 1].map((p, idx) => {
                const y = padding + p * chartHeight;
                return (
                  <g key={idx}>
                    <line x1={padding} y1={y} x2={width - padding} y2={y} stroke="#f8f8f8" strokeDasharray="2 2" />
                    <text x={padding - 8} y={y + 4} textAnchor="end" fontSize="10" fill="#bbb">
                      {Math.round(maxBookings * (1 - p))}
                    </text>
                  </g>
                );
              })}

              {/* Bars */}
              {bookingBars.map((b, idx) => {
                const showLabel = idx % 5 === 0 || idx === bookingBars.length - 1;
                const isActive = activeBookingIdx === idx;
                return (
                  <g key={idx}>
                    {/* The Bar */}
                    <rect
                      x={b.x}
                      y={b.y}
                      width={b.w}
                      height={b.h}
                      rx={b.w / 2}
                      fill={isActive ? '#3F8EFC' : 'rgba(63, 142, 252, 0.65)'}
                      style={{ transition: 'all 0.2s ease', transformOrigin: `${b.x}px ${height - padding}px` }}
                    />

                    {/* X Axis Labels */}
                    {showLabel && (
                      <g>
                        <text x={b.x + b.w / 2} y={height - padding + 18} textAnchor="middle" fontSize="10" fill="#999">
                          {b.day}
                        </text>
                      </g>
                    )}

                    {/* Hover Hotspot */}
                    <rect
                      x={b.x - b.w * 0.5}
                      y={padding}
                      width={b.w * 2}
                      height={chartHeight}
                      fill="transparent"
                      style={{ cursor: 'pointer' }}
                      onMouseEnter={() => setActiveBookingIdx(idx)}
                      onMouseLeave={() => setActiveBookingIdx(null)}
                    />
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>

      {/* Category Popularity breakdown */}
      <div className="col-12">
        <div
          style={{
            background: '#fff',
            padding: '1.5rem',
            borderRadius: 16,
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
            border: '1px solid rgba(0,0,0,0.02)',
          }}
        >
          <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', margin: '0 0 1rem 0', fontWeight: 700 }}>
            Sales Distribution by Category
          </h4>
          
          {categorySummary.length === 0 ? (
            <p style={{ color: '#999', fontSize: '0.9rem', margin: 0 }}>No product sales recorded yet.</p>
          ) : (
            <div style={{ display: 'grid', gap: '1rem' }}>
              {categorySummary.map((c) => {
                const percentage = totalCatRevenue > 0 ? (c.revenue / totalCatRevenue) * 100 : 0;
                return (
                  <div key={c.category}>
                    <div className="d-flex justify-content-between align-items-center mb-1" style={{ fontSize: '0.85rem' }}>
                      <span style={{ fontWeight: 600 }}>{c.category}</span>
                      <span style={{ color: '#666' }}>
                        ₹{c.revenue.toLocaleString('en-IN')} ({percentage.toFixed(1)}%)
                      </span>
                    </div>
                    <div style={{ width: '100%', height: '8px', background: '#FAF6F1', borderRadius: 999, overflow: 'hidden' }}>
                      <div
                        style={{
                          width: `${percentage}%`,
                          height: '100%',
                          background: 'linear-gradient(90deg, var(--primary,#C8956C), var(--gold-light,#E8C99A))',
                          borderRadius: 999,
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
