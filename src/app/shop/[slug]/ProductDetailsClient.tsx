'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProductImageGallery from '@/components/ProductImageGallery';
import ProductPriceDisplay from '@/components/ProductPriceDisplay';
import ProductBuyPanel from './ProductBuyPanel';

export default function ProductDetailsClient({ product, children }: { product: any; children: React.ReactNode }) {
  const router = useRouter();

  const sub = (product.subcategory || '').toLowerCase();
  const cat = (product.category || '').toLowerCase();
  const isBraceletsByCrystals = cat === 'bracelets' && sub !== 'designer bracelets' && sub !== 'signature bracelets';

  const hasVariants = Array.isArray(product.variants) && product.variants.length > 0;
  
  // Find index of '8mm' in variants if it exists, otherwise default to 0
  const defaultVariantIdx = hasVariants
    ? Math.max(0, product.variants.findIndex((v: any) => v.name === '8mm' || v.name === '8MM'))
    : 0;

  const [selectedVariantIdx, setSelectedVariantIdx] = useState<number>(defaultVariantIdx);
  const defaultSize = isBraceletsByCrystals && !hasVariants
    ? (Array.isArray(product.sizes) && product.sizes.length > 0 ? product.sizes[0] : '8mm')
    : null;
  const [selectedSize, setSelectedSize] = useState<string | null>(defaultSize);

  const currentVariant = hasVariants ? product.variants[selectedVariantIdx] : null;

  const displayImage = currentVariant ? currentVariant.image : product.image;
  const displayPrice = currentVariant ? currentVariant.price : product.price;
  const displayOriginalPrice = currentVariant ? currentVariant.originalPrice : product.originalPrice;
  const displayUsdPrice = currentVariant ? currentVariant.usdPrice : product.usdPrice;
  const displayOriginalUsdPrice = currentVariant ? currentVariant.originalUsdPrice : product.originalUsdPrice;

  return (
    <div>
      <button
        onClick={() => router.back()}
        style={{
          background: 'linear-gradient(135deg, rgba(200, 149, 108, 0.08), rgba(200, 149, 108, 0.03))',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer',
          color: 'var(--primary, #C8956C)',
          fontSize: '0.9rem',
          fontWeight: 600,
          padding: '10px 20px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '24px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 2px 8px rgba(200, 149, 108, 0.1)',
          backdropFilter: 'blur(10px)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(200, 149, 108, 0.15), rgba(200, 149, 108, 0.08))';
          e.currentTarget.style.transform = 'translateX(-4px)';
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(200, 149, 108, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(200, 149, 108, 0.08), rgba(200, 149, 108, 0.03))';
          e.currentTarget.style.transform = 'translateX(0)';
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(200, 149, 108, 0.1)';
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ flexShrink: 0 }}
        >
          <path
            d="M10 12L6 8L10 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back
      </button>
    <div className="row g-5 align-items-start">
      <div className="col-lg-5">
        <ProductImageGallery
          images={product.images}
          mainImage={displayImage}
          category={product.category}
          name={product.name}
          onImageSelect={(url) => {
            if (!hasVariants) return;
            const idx = product.variants.findIndex((v: any) => v.image === url);
            if (idx >= 0) setSelectedVariantIdx(idx);
          }}
        />
      </div>
      <div className="col-lg-7">
        <span className="product-category" style={{ fontSize: '0.85rem' }}>{product.subcategory}</span>
        <h1 className="section-title" style={{ textAlign: 'left', fontSize: '2.4rem', marginTop: 8 }}>{product.name}</h1>
        <div className="d-flex align-items-center gap-3 mt-3">
          <ProductPriceDisplay
            price={displayPrice}
            originalPrice={displayOriginalPrice}
            usdPrice={displayUsdPrice}
            originalUsdPrice={displayOriginalUsdPrice}
          />
          {product.badge && <span className={`product-badge ${product.badge.toLowerCase()}`} style={{ position: 'static' }}>{product.badge}</span>}
        </div>

        {hasVariants && (
          <div className="mt-4 mb-3">
            <h6 style={{ color: 'var(--text,#2D1B0E)', fontWeight: 600, marginBottom: '10px' }}>
              {isBraceletsByCrystals ? 'Select Bead Size:' : 'Select Size:'}
            </h6>
            <div className="d-flex flex-wrap gap-2">
              {product.variants.map((v: any, i: number) => (
                <button
                  key={v.name}
                  onClick={() => setSelectedVariantIdx(i)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: selectedVariantIdx === i ? '2px solid var(--primary,#C8956C)' : '1px solid rgba(0,0,0,0.1)',
                    background: selectedVariantIdx === i ? 'rgba(200, 149, 108, 0.1)' : 'transparent',
                    color: selectedVariantIdx === i ? 'var(--primary-dark,#A7744D)' : '#555',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {v.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {!hasVariants && isBraceletsByCrystals && (
          <div className="mt-4 mb-3">
            <h6 style={{ color: 'var(--text,#2D1B0E)', fontWeight: 600, marginBottom: '10px' }}>Select Bead Size: <span style={{ color: 'red' }}>*</span></h6>
            <div className="d-flex flex-wrap gap-2">
              {(Array.isArray(product.sizes) && product.sizes.length > 0 ? product.sizes : ['8mm']).map((sz: string) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: selectedSize === sz ? '2px solid var(--primary,#C8956C)' : '1px solid rgba(0,0,0,0.1)',
                    background: selectedSize === sz ? 'rgba(200, 149, 108, 0.1)' : 'transparent',
                    color: selectedSize === sz ? 'var(--primary-dark,#A7744D)' : '#555',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {children}

        <ProductBuyPanel 
          productId={product.slug} 
          stock={product.stock} 
          variant={isBraceletsByCrystals ? (hasVariants ? currentVariant.name : (selectedSize || undefined)) : (currentVariant ? currentVariant.name : undefined)}
          sizeMandatory={isBraceletsByCrystals && !hasVariants && !selectedSize}
        />

        <ul style={{ marginTop: 32, padding: 0, listStyle: 'none', display: 'grid', gap: 10, color: 'var(--text-light,#666)', fontSize: '0.9rem' }}>
          <li><i className="fa-solid fa-shield-halved me-2" style={{ color: 'var(--primary,#C8956C)' }}></i> 100% authentic, ritually energised</li>
          <li><i className="fa-solid fa-truck-fast me-2" style={{ color: 'var(--primary,#C8956C)' }}></i> Pan-India shipping in 4–7 business days</li>
          <li><i className="fa-solid fa-hand-sparkles me-2" style={{ color: 'var(--primary,#C8956C)' }}></i> Each piece intuitively selected by Kriss</li>
        </ul>
      </div>
    </div>
    </div>
  );
}
