'use client';

import { useState } from 'react';

interface DescObj {
  description?: string;
  whoShouldWear?: string[];
  benefits?: string[];
  howToWear?: string[];
  careInstructions?: string[];
  affirmation?: string;
  disclaimer?: string;
}

interface ProductDescriptionProps {
  descObj: DescObj | null;
  desc: string;
  longDesc?: string;
}

export default function ProductDescription({ descObj, desc, longDesc }: ProductDescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // If there's no structured JSON, just render simple collapse on long description
  if (!descObj) {
    const hasMore = !!longDesc;
    return (
      <div style={{ marginTop: 20, color: 'var(--text-light,#666)', fontSize: '0.95rem', lineHeight: 1.7 }}>
        <p>{desc}</p>
        {isExpanded && longDesc && <p>{longDesc}</p>}
        {hasMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--primary,#C8956C)',
              fontWeight: 700,
              cursor: 'pointer',
              padding: 0,
              fontSize: '0.88rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              marginTop: '10px'
            }}
          >
            <span>{isExpanded ? 'Show Less' : 'Read Full Details'}</span>
            <i className={`fa-solid ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`} style={{ fontSize: '0.75rem' }}></i>
          </button>
        )}
      </div>
    );
  }

  // If there is structured JSON content:
  const hasExtraSections =
    (descObj.whoShouldWear && descObj.whoShouldWear.length > 0) ||
    (descObj.benefits && descObj.benefits.length > 0) ||
    (descObj.howToWear && descObj.howToWear.length > 0) ||
    (descObj.careInstructions && descObj.careInstructions.length > 0) ||
    !!descObj.affirmation ||
    !!descObj.disclaimer;

  return (
    <div style={{ marginTop: 20, color: 'var(--text-light,#666)', fontSize: '0.95rem', lineHeight: 1.7 }}>
      <p>{descObj.description}</p>

      {isExpanded && (
        <div style={{ animation: 'fadeInUp 0.3s ease-out' }}>
          {descObj.whoShouldWear && descObj.whoShouldWear.length > 0 && (
            <div className="mt-4">
              <h6 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.88rem', fontWeight: 700, color: 'var(--dark-2)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px', borderBottom: '1px solid rgba(200, 149, 108, 0.2)', paddingBottom: '4px' }}>Who Should Wear</h6>
              <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'grid', gap: 6 }}>
                {descObj.whoShouldWear.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <i className="fa-solid fa-diamond" style={{ color: 'var(--primary)', fontSize: '0.5rem', marginTop: '8px' }}></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {descObj.benefits && descObj.benefits.length > 0 && (
            <div className="mt-4">
              <h6 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.88rem', fontWeight: 700, color: 'var(--dark-2)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px', borderBottom: '1px solid rgba(200, 149, 108, 0.2)', paddingBottom: '4px' }}>Benefits</h6>
              <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'grid', gap: 6 }}>
                {descObj.benefits.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <i className="fa-solid fa-diamond" style={{ color: 'var(--primary)', fontSize: '0.5rem', marginTop: '8px' }}></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {descObj.howToWear && descObj.howToWear.length > 0 && (
            <div className="mt-4">
              <h6 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.88rem', fontWeight: 700, color: 'var(--dark-2)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px', borderBottom: '1px solid rgba(200, 149, 108, 0.2)', paddingBottom: '4px' }}>How to Wear</h6>
              <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'grid', gap: 6 }}>
                {descObj.howToWear.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <i className="fa-solid fa-diamond" style={{ color: 'var(--primary)', fontSize: '0.5rem', marginTop: '8px' }}></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {descObj.careInstructions && descObj.careInstructions.length > 0 && (
            <div className="mt-4">
              <h6 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.88rem', fontWeight: 700, color: 'var(--dark-2)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px', borderBottom: '1px solid rgba(200, 149, 108, 0.2)', paddingBottom: '4px' }}>Care Instructions</h6>
              <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'grid', gap: 6 }}>
                {descObj.careInstructions.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <i className="fa-solid fa-diamond" style={{ color: 'var(--primary)', fontSize: '0.5rem', marginTop: '8px' }}></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {descObj.affirmation && (
            <div className="mt-4" style={{ background: 'linear-gradient(135deg, rgba(200,149,108,0.08), rgba(200,149,108,0.15))', borderLeft: '3px solid var(--primary,#C8956C)', borderRadius: '0 8px 8px 0', padding: '12px 16px' }}>
              <h6 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.88rem', fontWeight: 700, color: 'var(--dark-2)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>Affirmation</h6>
              <p style={{ fontStyle: 'italic', color: 'var(--dark-2)', fontWeight: 500, margin: 0 }}>&ldquo;{descObj.affirmation}&rdquo;</p>
            </div>
          )}

          {descObj.disclaimer && (
            <p style={{ marginTop: 20, fontSize: '0.82rem', color: '#888', fontStyle: 'italic', lineHeight: 1.6 }}>
              <strong>Disclaimer:</strong> {descObj.disclaimer}
            </p>
          )}
        </div>
      )}

      {hasExtraSections && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--primary,#C8956C)',
            fontWeight: 700,
            cursor: 'pointer',
            padding: 0,
            fontSize: '0.88rem',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginTop: '20px'
          }}
        >
          <span>{isExpanded ? 'Show Less' : 'Read Full Details'}</span>
          <i className={`fa-solid ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`} style={{ fontSize: '0.75rem' }}></i>
        </button>
      )}
    </div>
  );
}
