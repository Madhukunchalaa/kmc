'use client';

import { useState } from 'react';

export interface DescObj {
  // new owner format
  purpose?: string;
  crystalsIncluded?: string;
  associatedChakras?: string;
  zodiacSign?: string;
  birthDates?: string;
  description?: string;
  benefits?: string[];
  recommendedHand?: string;
  recommendedAnkle?: string;
  whenToWear?: string;
  howToEnergize?: string;
  affirmation?: string;
  careInstructions?: string[];
  disclaimer?: string;
  // legacy format (still rendered if present)
  whoShouldWear?: string[];
  howToWear?: string[];
}

interface ProductDescriptionProps {
  descObj: DescObj | null;
  desc: string;
  longDesc?: string;
  category?: string;
}

const headingStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '0.88rem',
  fontWeight: 700,
  color: 'var(--dark-2)',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  marginBottom: '8px',
  borderBottom: '1px solid rgba(200, 149, 108, 0.2)',
  paddingBottom: '4px',
};

function Field({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="mt-4">
      <h6 style={headingStyle}>{label}</h6>
      <p style={{ margin: 0 }}>{value}</p>
    </div>
  );
}

function ListField({ label, items }: { label: string; items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="mt-4">
      <h6 style={headingStyle}>{label}</h6>
      <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'grid', gap: 6 }}>
        {items.map((item, idx) => (
          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
            <i className="fa-solid fa-diamond" style={{ color: 'var(--primary)', fontSize: '0.5rem', marginTop: '8px' }}></i>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProductDescription({ descObj, desc, longDesc, category }: ProductDescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // No structured JSON → simple collapse on the long description.
  if (!descObj) {
    const hasMore = !!longDesc;
    return (
      <div style={{ marginTop: 20, color: 'var(--text-light,#666)', fontSize: '0.95rem', lineHeight: 1.7 }}>
        <p>{desc}</p>
        {isExpanded && longDesc && <p>{longDesc}</p>}
        {hasMore && (
          <button onClick={() => setIsExpanded(!isExpanded)} style={btnStyle}>
            <span>{isExpanded ? 'Show Less' : 'Read Full Details'}</span>
            <i className={`fa-solid ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`} style={{ fontSize: '0.75rem' }}></i>
          </button>
        )}
      </div>
    );
  }

  const d = descObj;
  const zodiacLine = d.zodiacSign
    ? `${d.zodiacSign}${d.birthDates ? ` · ${d.birthDates}` : ''}`
    : '';

  const hasExtraSections =
    !!d.purpose || !!d.crystalsIncluded || !!d.associatedChakras || !!zodiacLine ||
    (d.benefits && d.benefits.length > 0) ||
    (d.whoShouldWear && d.whoShouldWear.length > 0) ||
    (d.howToWear && d.howToWear.length > 0) ||
    !!d.recommendedHand || !!d.whenToWear || !!d.howToEnergize ||
    (d.careInstructions && d.careInstructions.length > 0) ||
    !!d.affirmation || !!d.disclaimer;

  return (
    <div style={{ marginTop: 20, color: 'var(--text-light,#666)', fontSize: '0.95rem', lineHeight: 1.7 }}>
      {/* Short description always shows first */}
      <p>{desc || d.description}</p>

      {isExpanded && (
        <div style={{ animation: 'fadeInUp 0.3s ease-out' }}>
          {/* Long description in expanded section if different from short desc */}
          {d.description && d.description !== desc && <p>{d.description}</p>}
          <Field label="Purpose" value={d.purpose} />
          <Field label="Crystals Included" value={d.crystalsIncluded} />
          <Field label="Associated Chakras" value={d.associatedChakras} />
          {zodiacLine && <Field label="Zodiac Sign" value={zodiacLine} />}

          <ListField label="Benefits" items={d.benefits} />
          {/* legacy field, only if a product still uses it */}
          <ListField label="Who Should Wear" items={d.whoShouldWear} />

          {category?.toLowerCase().includes('anklet') ? (
            <Field label="Recommended Ankle" value={d.recommendedAnkle || d.recommendedHand} />
          ) : (
            <Field label="Recommended Hand to Wear" value={d.recommendedHand} />
          )}
          <Field label="When to Wear" value={d.whenToWear} />
          {/* legacy combined field */}
          <ListField label="How to Wear" items={d.howToWear} />
          <Field label="How to Energize" value={d.howToEnergize} />

          {d.affirmation && (
            <div className="mt-4" style={{ background: 'linear-gradient(135deg, rgba(200,149,108,0.08), rgba(200,149,108,0.15))', borderLeft: '3px solid var(--primary,#C8956C)', borderRadius: '0 8px 8px 0', padding: '12px 16px' }}>
              <h6 style={{ ...headingStyle, border: 'none', marginBottom: '6px', paddingBottom: 0 }}>Affirmation</h6>
              <p style={{ fontStyle: 'italic', color: 'var(--dark-2)', fontWeight: 500, margin: 0 }}>&ldquo;{d.affirmation}&rdquo;</p>
            </div>
          )}

          <ListField label="Care Instructions" items={d.careInstructions} />

          {d.disclaimer && (
            <p style={{ marginTop: 20, fontSize: '0.82rem', color: '#888', fontStyle: 'italic', lineHeight: 1.6 }}>
              <strong>Disclaimer:</strong> {d.disclaimer}
            </p>
          )}
        </div>
      )}

      {hasExtraSections && (
        <button onClick={() => setIsExpanded(!isExpanded)} style={btnStyle}>
          <span>{isExpanded ? 'Show Less' : 'Read Full Details'}</span>
          <i className={`fa-solid ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`} style={{ fontSize: '0.75rem' }}></i>
        </button>
      )}
    </div>
  );
}

const btnStyle: React.CSSProperties = {
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
  marginTop: '20px',
};
