'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { formatMoney } from '@/lib/money';

interface BookingsTableClientProps {
  bookings: any[];
}

export default function BookingsTableClient({ bookings }: BookingsTableClientProps) {
  const router = useRouter();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [updating, setUpdating] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const toggleSelectAll = () => {
    if (selectedIds.length === bookings.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(bookings.map((b) => b._id));
    }
  };

  const toggleSelectOne = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((x) => x !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const updateStatusBulk = async (status: 'approved' | 'booked' | 'completed' | 'cancelled') => {
    if (selectedIds.length === 0) return;
    setUpdating(true);
    setMsg(`Updating ${selectedIds.length} booking(s) to "${status}"...`);
    try {
      let successCount = 0;
      await Promise.all(
        selectedIds.map(async (id) => {
          try {
            const res = await fetch(`/api/admin/bookings/${id}`, {
              method: 'PATCH',
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify({ status, adminNote: '' }),
            });
            const data = await res.json();
            if (data.ok) successCount++;
          } catch (e) {
            console.error('Failed to update booking', id, e);
          }
        })
      );
      setMsg(`Successfully updated ${successCount} of ${selectedIds.length} booking(s)`);
      setSelectedIds([]);
      router.refresh();
    } catch (e) {
      setMsg('Error updating bookings');
    }
    setUpdating(false);
  };

  return (
    <div>
      {selectedIds.length > 0 && (
        <div 
          className="d-flex align-items-center justify-content-between p-3 mb-3 flex-wrap gap-2"
          style={{
            background: 'var(--primary-light, #FAF6F1)',
            border: '1.5px solid var(--primary, #C8956C)',
            borderRadius: 14,
            boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
          }}
        >
          <span style={{ fontWeight: 600, color: '#2D1B0E' }}>
            Selected {selectedIds.length} booking(s)
          </span>
          <div className="d-flex gap-2 flex-wrap">
            <button 
              type="button" 
              className="btn-outline-custom btn-sm" 
              disabled={updating}
              onClick={() => updateStatusBulk('approved')}
              style={{ padding: '6px 12px', fontSize: '0.8rem', height: 'auto' }}
            >
              Mark Approved
            </button>
            <button 
              type="button" 
              className="btn-outline-custom btn-sm" 
              disabled={updating}
              onClick={() => updateStatusBulk('booked')}
              style={{ padding: '6px 12px', fontSize: '0.8rem', height: 'auto' }}
            >
              Mark Booked
            </button>
            <button 
              type="button" 
              className="btn-primary-custom btn-sm" 
              disabled={updating}
              onClick={() => updateStatusBulk('completed')}
              style={{ padding: '6px 12px', fontSize: '0.8rem', height: 'auto', background: '#1E8449', borderColor: '#1E8449' }}
            >
              <i className="fa-solid fa-calendar-check mr-1"></i>
              Mark Completed
            </button>
          </div>
        </div>
      )}

      {msg && (
        <div 
          className="p-2 px-3 mb-3" 
          style={{ 
            fontSize: '0.85rem', 
            borderRadius: 8, 
            background: msg.includes('Error') ? '#FDF2F2' : '#F4FBF7', 
            color: msg.includes('Error') ? '#D95F5F' : '#1E8449',
            border: `1px solid ${msg.includes('Error') ? '#FDE2E2' : '#E6F4EA'}`
          }}
        >
          {msg}
        </div>
      )}

      <div style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', minWidth: '800px' }}>
            <thead>
              <tr style={{ background: '#FAF6F1' }}>
                <th style={{ padding: 12, width: 40, textAlign: 'center' }}>
                  <input 
                    type="checkbox" 
                    checked={bookings.length > 0 && selectedIds.length === bookings.length} 
                    onChange={toggleSelectAll} 
                    style={{ cursor: 'pointer' }}
                  />
                </th>
                <th style={{ padding: 12, textAlign: 'left' }}>Booking #</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Service</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Customer</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Date / Time</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Status</th>
                <th style={{ padding: 12, width: 80 }}></th>
              </tr>
            </thead>
            <tbody>
              {bookings.length === 0 && (
                <tr>
                  <td colSpan={7} style={{ padding: 32, textAlign: 'center', color: '#999' }}>
                    <i className="fa-solid fa-calendar-xmark" style={{ fontSize: '2rem', marginBottom: '8px', display: 'block', color: '#ccc' }}></i>
                    No bookings found matching these criteria.
                  </td>
                </tr>
              )}
              {bookings.map((b) => (
                <tr key={b._id} style={{ borderTop: '1px solid rgba(0,0,0,0.05)', transition: 'background 0.15s' }}>
                  <td style={{ padding: 12, width: 40, textAlign: 'center' }}>
                    <input 
                      type="checkbox" 
                      checked={selectedIds.includes(b._id)} 
                      onChange={() => toggleSelectOne(b._id)}
                      style={{ cursor: 'pointer' }}
                    />
                  </td>
                  <td style={{ padding: 12, fontWeight: 600 }}>
                    {b.bookingNumber}
                    <div style={{ marginTop: 4 }}>
                      {b.currency && b.currency !== 'INR' ? (
                        <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#8A4F27', background: 'rgba(200,149,108,0.14)', borderRadius: 20, padding: '2px 8px' }}>
                          🌍 Abroad
                        </span>
                      ) : (
                        <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#1E8449', background: '#4CAF5018', borderRadius: 20, padding: '2px 8px' }}>
                          🇮🇳 India
                        </span>
                      )}
                    </div>
                  </td>
                  <td style={{ padding: 12 }}>
                    <div style={{ fontWeight: 600 }}>{b.serviceTitle}</div>
                    <div style={{ fontSize: '0.78rem', color: '#888' }}>
                      {formatMoney(b.servicePrice, b.currency)}
                    </div>
                  </td>
                  <td style={{ padding: 12 }}>
                    <div style={{ fontWeight: 600 }}>{b.customer?.name}</div>
                    <div style={{ color: '#888', fontSize: '0.78rem' }}>{b.customer?.email} · {b.customer?.phone}</div>
                  </td>
                  <td style={{ padding: 12 }}>
                    {b.date !== 'N/A' && b.date ? (
                      <>
                        <div>{new Date(b.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
                        <strong style={{ fontSize: '0.8rem', color: 'var(--primary,#C8956C)' }}>{b.timeSlot}</strong>
                      </>
                    ) : (
                      <strong style={{ color: '#888', fontSize: '0.85rem' }}>Async / Unscheduled</strong>
                    )}
                  </td>
                  <td style={{ padding: 12, textAlign: 'center' }}>
                    <span className="crystal-tag status-tag" style={{ fontSize: '0.72rem' }}>{b.status}</span>
                  </td>
                  <td style={{ padding: 12, textAlign: 'right' }}>
                    <Link href={`/admin/bookings/${b._id}`} style={{ color: 'var(--primary,#C8956C)', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600 }}>
                      Review →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
