'use client';

import { products } from '@/data/products';
import { useCurrency } from '@/context/CurrencyContext';
import { useRouter } from 'next/navigation';
import type { CrystalCardData } from './CrystalCard';

interface CrystalProductsModalProps {
  crystal: CrystalCardData;
  onClose: () => void;
}

export default function CrystalProductsModal({ crystal, onClose }: CrystalProductsModalProps) {
  const router = useRouter();
  const { formatPrice } = useCurrency();

  // Find products that contain this crystal
  const matchingProducts = products.filter((p) => {
    const nameMatch = p.name.toLowerCase().includes(crystal.name.toLowerCase());
    const descMatch = (p.desc || '').toLowerCase().includes(crystal.name.toLowerCase());
    
    let longDescMatch = false;
    if (p.longDesc) {
      try {
        const parsed = JSON.parse(p.longDesc);
        const crystalsIncluded = (parsed.crystalsIncluded || '').toLowerCase();
        longDescMatch = crystalsIncluded.includes(crystal.name.toLowerCase());
      } catch {
        longDescMatch = p.longDesc.toLowerCase().includes(crystal.name.toLowerCase());
      }
    }
    
    return nameMatch || descMatch || longDescMatch;
  });

  return (
    <div className="crystal-modal-overlay" onClick={onClose}>
      <div className="crystal-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="crystal-modal-close-btn"
          aria-label="Close modal"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* Header */}
        <div className="crystal-modal-header">
          <img
            src={crystal.image}
            alt={crystal.name}
            className="crystal-modal-header-img"
          />
          <div>
            <h4 className="crystal-modal-title">
              {crystal.name} Products
            </h4>
            <p className="crystal-modal-subtitle">
              {crystal.keyword}
            </p>
          </div>
        </div>

        {/* Products List */}
        <div className="crystal-modal-body">
          {matchingProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'rgba(255,255,255,0.45)' }}>
              <i className="fa-solid fa-hourglass-empty" style={{ fontSize: '2.5rem', color: '#C8956C', marginBottom: '16px', display: 'block' }}></i>
              <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', margin: '0 0 6px' }}>No direct products found</p>
              <p style={{ fontSize: '0.85rem', margin: 0, color: 'rgba(255,255,255,0.5)' }}>We don't have standard {crystal.name} products in stock right now.</p>
              <p style={{ fontSize: '0.8rem', color: '#C8956C', marginTop: '12px' }}>Please contact us for custom crystal healing orders!</p>
            </div>
          ) : (
            <div className="crystal-modal-grid">
              {matchingProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    onClose();
                    router.push(`/shop/${p.slug || p.id}`);
                  }}
                  className="crystal-modal-product-card"
                >
                  <div className="crystal-modal-product-image-wrapper">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="crystal-modal-product-image"
                    />
                  </div>
                  <h5 className="crystal-modal-product-name">
                    {p.name}
                  </h5>
                  <div className="crystal-modal-product-footer">
                    <span className="crystal-modal-product-price">
                      {formatPrice(p.price, p.usdPrice)}
                    </span>
                    <span className="crystal-modal-product-view-btn">
                      View <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.55rem' }}></i>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
