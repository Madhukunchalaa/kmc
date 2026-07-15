'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { formatMoney } from '@/lib/money';

const SP_LABEL: Record<string, string> = {
  'not-required': '',
  pending: 'awaiting shipping payment',
  'link-sent': 'shipping link sent',
  paid: 'shipping paid',
};

interface OrdersTableClientProps {
  orders: any[];
}

export default function OrdersTableClient({ orders }: OrdersTableClientProps) {
  const router = useRouter();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [updating, setUpdating] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const toggleSelectAll = () => {
    if (selectedIds.length === orders.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(orders.map((o) => o._id));
    }
  };

  const toggleSelectOne = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((x) => x !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const updateStatusBulk = async (status: 'confirmed' | 'shipped' | 'delivered') => {
    if (selectedIds.length === 0) return;
    setUpdating(true);
    setMsg(`Updating ${selectedIds.length} order(s) to "${status}"...`);
    try {
      let successCount = 0;
      await Promise.all(
        selectedIds.map(async (id) => {
          try {
            const res = await fetch(`/api/admin/orders/${id}`, {
              method: 'PATCH',
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify({ status, adminNote: '' }),
            });
            const data = await res.json();
            if (data.ok) successCount++;
          } catch (e) {
            console.error('Failed to update order', id, e);
          }
        })
      );
      setMsg(`Successfully updated ${successCount} of ${selectedIds.length} order(s)`);
      setSelectedIds([]);
      router.refresh();
    } catch (e) {
      setMsg('Error updating orders');
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
            Selected {selectedIds.length} order(s)
          </span>
          <div className="d-flex gap-2 flex-wrap">
            <button 
              type="button" 
              className="btn-outline-custom btn-sm" 
              disabled={updating}
              onClick={() => updateStatusBulk('confirmed')}
              style={{ padding: '6px 12px', fontSize: '0.8rem', height: 'auto' }}
            >
              Mark Confirmed
            </button>
            <button 
              type="button" 
              className="btn-outline-custom btn-sm" 
              disabled={updating}
              onClick={() => updateStatusBulk('shipped')}
              style={{ padding: '6px 12px', fontSize: '0.8rem', height: 'auto' }}
            >
              Mark Shipped
            </button>
            <button 
              type="button" 
              className="btn-primary-custom btn-sm" 
              disabled={updating}
              onClick={() => updateStatusBulk('delivered')}
              style={{ padding: '6px 12px', fontSize: '0.8rem', height: 'auto', background: '#1E8449', borderColor: '#1E8449' }}
            >
              <i className="fa-solid fa-truck-ramp-box mr-1"></i>
              Mark Delivered
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
                    checked={orders.length > 0 && selectedIds.length === orders.length} 
                    onChange={toggleSelectAll} 
                    style={{ cursor: 'pointer' }}
                  />
                </th>
                <th style={{ padding: 12, textAlign: 'left' }}>Order #</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Customer</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Items</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Delivery</th>
                <th style={{ padding: 12, textAlign: 'right' }}>Total</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Status</th>
                <th style={{ padding: 12, textAlign: 'right' }}>Date</th>
                <th style={{ padding: 12, width: 80 }}></th>
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 && (
                <tr>
                  <td colSpan={9} style={{ padding: 32, textAlign: 'center', color: '#999' }}>
                    <i className="fa-solid fa-receipt" style={{ fontSize: '2rem', marginBottom: '8px', display: 'block', color: '#ccc' }}></i>
                    No orders found matching these criteria.
                  </td>
                </tr>
              )}
              {orders.map((o) => (
                <tr key={o._id} style={{ borderTop: '1px solid rgba(0,0,0,0.05)', transition: 'background 0.15s' }}>
                  <td style={{ padding: 12, width: 40, textAlign: 'center' }}>
                    <input 
                      type="checkbox" 
                      checked={selectedIds.includes(o._id)} 
                      onChange={() => toggleSelectOne(o._id)}
                      style={{ cursor: 'pointer' }}
                    />
                  </td>
                  <td style={{ padding: 12, fontWeight: 600 }}>
                    <div>{o.orderNumber}</div>
                    {o.customer?.giftMessage && (
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        color: '#D95F7A',
                        background: 'rgba(217,95,122,0.1)',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        marginTop: '4px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}>
                        <i className="fa-solid fa-gift" style={{ fontSize: '0.65rem' }}></i>
                        Gift Order
                      </span>
                    )}
                    {o.customizationDetails && (
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        color: '#8A3FB2',
                        background: 'rgba(138,63,178,0.1)',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        marginTop: '4px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}>
                        <i className="fa-solid fa-wand-magic-sparkles" style={{ fontSize: '0.65rem' }}></i>
                        Custom Bracelet
                      </span>
                    )}
                  </td>
                  <td style={{ padding: 12 }}>
                    <div style={{ fontWeight: 600 }}>{o.customer?.name}</div>
                    <div style={{ color: '#888', fontSize: '0.78rem' }}>{o.customer?.email} · {o.customer?.phone}</div>
                  </td>
                  <td style={{ padding: 12 }}>
                    <div style={{ fontWeight: 500 }}>{o.items?.length} item{o.items?.length === 1 ? '' : 's'}</div>
                    <div style={{ fontSize: '0.78rem', color: '#999', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', maxWidth: '200px' }}>
                      {(o.items ?? []).map((i: any) => `${i.name} (${i.qty ?? i.quantity ?? 1})`).join(', ')}
                    </div>
                  </td>
                  <td style={{ padding: 12, textAlign: 'center', whiteSpace: 'nowrap' }}>
                    {o.international ? (
                      <span title={o.customer?.country || 'Abroad'} style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, color: '#8A4F27', background: 'rgba(200,149,108,0.14)', borderRadius: 20, padding: '2px 10px' }}>
                        🌍 Abroad
                        {o.shippingPayment && o.shippingPayment.status !== 'not-required' && (
                          <span style={{ display: 'block', fontSize: '0.62rem', fontWeight: 500, color: o.shippingPayment.status === 'paid' ? '#1E8449' : '#B8702A' }}>
                            {SP_LABEL[o.shippingPayment.status] || ''}
                          </span>
                        )}
                      </span>
                    ) : (
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#1E8449', background: '#4CAF5018', borderRadius: 20, padding: '2px 10px' }}>
                        🇮🇳 India
                      </span>
                    )}
                  </td>
                  <td style={{ padding: 12, textAlign: 'right', fontWeight: 600, whiteSpace: 'nowrap' }}>
                    {formatMoney(o.total && o.total > 0 ? o.total : o.subtotal, o.currency)}
                  </td>
                  <td style={{ padding: 12, textAlign: 'center' }}>
                    <span className="crystal-tag status-tag" style={{ fontSize: '0.72rem' }}>{o.status}</span>
                  </td>
                  <td style={{ padding: 12, textAlign: 'right', fontSize: '0.82rem', color: '#888' }}>
                    {o.createdAt ? new Date(o.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : ''}
                  </td>
                  <td style={{ padding: 12, textAlign: 'right' }}>
                    <Link href={`/admin/orders/${o._id}`} style={{ color: 'var(--primary,#C8956C)', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600 }}>
                      View →
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
