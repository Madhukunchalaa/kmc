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
  designSymbolism?: string;
  recommendedHand?: string;
  recommendedAnkle?: string;
  bestFinger?: string;
  bestDayToWear?: string;
  whenToWear?: string;
  placement?: string;
  howToUse?: string;
  howToEnergize?: string;
  affirmation?: string;
  careInstructions?: string[];
  disclaimer?: string;
  // dynamic configuration format
  sizesLabel?: string;
  showSizes?: boolean;
  chakrasLabel?: string;
  showChakras?: boolean;
  sections?: any[];
  // legacy format (still rendered if present)
  whoShouldWear?: string[];
  howToWear?: string[];
}

interface ProductDescriptionProps {
  descObj: DescObj | null;
  desc: string;
  longDesc?: string;
  category?: string;
  chakras?: string[];
  subcategory?: string;
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

function ListField({ label, items }: { label: string; items?: string[] | string }) {
  if (!items) return null;
  const arr = Array.isArray(items) ? items : [items];
  if (arr.length === 0) return null;
  return (
    <div className="mt-4">
      <h6 style={headingStyle}>{label}</h6>
      <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'grid', gap: 6 }}>
        {arr.map((item, idx) => (
          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
            <i className="fa-solid fa-diamond" style={{ color: 'var(--primary)', fontSize: '0.5rem', marginTop: '8px' }}></i>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export interface DynamicSection {
  id: string;
  title: string;
  type: 'text' | 'list' | 'affirmation' | 'disclaimer';
  content: string | string[];
}

export function getDynamicSections(
  d: DescObj | null,
  fallbackDesc: string,
  category?: string
): DynamicSection[] {
  if (!d) {
    return [
      {
        id: 'description',
        title: 'Description',
        type: 'text',
        content: fallbackDesc || '',
      },
    ];
  }

  // If new dynamic format with a sections array is already present
  if ('sections' in d && Array.isArray((d as any).sections)) {
    return (d as any).sections;
  }

  // Otherwise, construct from legacy fields for backwards compatibility
  const sections: DynamicSection[] = [];

  // Short description always first
  sections.push({
    id: 'description',
    title: 'Description',
    type: 'text',
    content: fallbackDesc || d.description || '',
  });

  if (d.purpose) {
    sections.push({ id: 'purpose', title: 'Purpose', type: 'text', content: d.purpose });
  }
  if (d.crystalsIncluded) {
    sections.push({ id: 'crystalsIncluded', title: 'Crystals Included', type: 'text', content: d.crystalsIncluded });
  }
  if (d.designSymbolism) {
    sections.push({ id: 'designSymbolism', title: 'Design Symbolism', type: 'text', content: d.designSymbolism });
  }
  if (d.associatedChakras) {
    sections.push({ id: 'associatedChakras', title: 'Associated Chakras', type: 'text', content: d.associatedChakras });
  }
  
  const zodiacLine = d.zodiacSign
    ? `${d.zodiacSign}${d.birthDates ? ` · ${d.birthDates}` : ''}`
    : '';
  if (zodiacLine) {
    sections.push({ id: 'zodiac', title: 'Zodiac Sign', type: 'text', content: zodiacLine });
  }

  if (d.benefits && d.benefits.length > 0) {
    sections.push({ id: 'benefits', title: 'Benefits', type: 'list', content: d.benefits });
  }
  if (d.whoShouldWear && d.whoShouldWear.length > 0) {
    sections.push({ id: 'whoShouldWear', title: 'Who Should Wear', type: 'list', content: d.whoShouldWear });
  }

  const isAnklet = (category || '').toLowerCase().includes('anklet');
  if (isAnklet && (d.recommendedAnkle || d.recommendedHand)) {
    sections.push({
      id: 'recommendedAnkle',
      title: 'Recommended Ankle',
      type: 'text',
      content: d.recommendedAnkle || d.recommendedHand || '',
    });
  } else if (d.recommendedHand) {
    sections.push({
      id: 'recommendedHand',
      title: 'Recommended Hand to Wear',
      type: 'text',
      content: d.recommendedHand,
    });
  }

  if (d.bestFinger) {
    sections.push({ id: 'bestFinger', title: 'Best Finger', type: 'text', content: d.bestFinger });
  }
  if (d.bestDayToWear) {
    sections.push({ id: 'bestDayToWear', title: 'Best Day to Wear', type: 'text', content: d.bestDayToWear });
  }
  if (d.whenToWear) {
    sections.push({ id: 'whenToWear', title: 'When to Wear', type: 'text', content: d.whenToWear });
  }
  if (d.howToWear && d.howToWear.length > 0) {
    sections.push({ id: 'howToWear', title: 'How to Wear', type: 'list', content: d.howToWear });
  }
  if (d.placement) {
    sections.push({ id: 'placement', title: 'Placement Recommendation', type: 'text', content: d.placement });
  }
  if (d.howToUse) {
    sections.push({ id: 'howToUse', title: 'How to Use', type: 'text', content: d.howToUse });
  }
  if (d.howToEnergize) {
    sections.push({ id: 'howToEnergize', title: 'How to Energize', type: 'text', content: d.howToEnergize });
  }
  if (d.affirmation) {
    sections.push({ id: 'affirmation', title: 'Affirmation', type: 'affirmation', content: d.affirmation });
  }
  if (d.careInstructions && d.careInstructions.length > 0) {
    sections.push({ id: 'careInstructions', title: 'Care Instructions', type: 'list', content: d.careInstructions });
  }
  if (d.disclaimer) {
    sections.push({ id: 'disclaimer', title: 'Disclaimer', type: 'disclaimer', content: d.disclaimer });
  }

  return sections;
}

export default function ProductDescription({ descObj, desc, longDesc, category, subcategory, chakras }: ProductDescriptionProps) {
  const isRing = (category || '').toLowerCase() === 'rings';
  const [isExpanded, setIsExpanded] = useState(false);

  const sections = getDynamicSections(descObj, desc || longDesc || '', category);
  const primarySection = sections[0];
  const extraSections = sections.slice(1);
  const hasExtraSections = extraSections.length > 0;

  return (
    <div style={{ marginTop: 20, color: 'var(--text-light,#666)', fontSize: '0.95rem', lineHeight: 1.7 }}>
      {/* Short/Primary description always shows first */}
      {primarySection && (
        primarySection.type === 'list' ? (
          <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'grid', gap: 6 }}>
            {(primarySection.content as string[]).map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <i className="fa-solid fa-diamond" style={{ color: 'var(--primary)', fontSize: '0.5rem', marginTop: '8px' }}></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>{primarySection.content}</p>
        )
      )}

      {isRing && (
        <p style={{ marginTop: 8, marginBottom: 0, fontSize: '0.85rem', color: 'var(--primary,#C8956C)', fontWeight: 600 }}>
          <i className="fa-solid fa-circle-info" style={{ marginRight: 6 }}></i>All rings are adjustable.
        </p>
      )}

      {isExpanded && (
        <div style={{ animation: 'fadeInUp 0.3s ease-out' }}>
          {extraSections.map((sec) => {
            if (sec.type === 'text') {
              return <Field key={sec.id} label={sec.title} value={sec.content as string} />;
            }
            if (sec.type === 'list') {
              return <ListField key={sec.id} label={sec.title} items={sec.content} />;
            }
            if (sec.type === 'affirmation') {
              return (
                <div key={sec.id} className="mt-4" style={{ background: 'linear-gradient(135deg, rgba(200,149,108,0.08), rgba(200,149,108,0.15))', borderLeft: '3px solid var(--primary,#C8956C)', borderRadius: '0 8px 8px 0', padding: '12px 16px' }}>
                  <h6 style={{ ...headingStyle, border: 'none', marginBottom: '6px', paddingBottom: 0 }}>{sec.title}</h6>
                  <p style={{ fontStyle: 'italic', color: 'var(--dark-2)', fontWeight: 500, margin: 0 }}>&ldquo;{sec.content}&rdquo;</p>
                </div>
              );
            }
            if (sec.type === 'disclaimer') {
              return (
                <p key={sec.id} style={{ marginTop: 20, fontSize: '0.82rem', color: '#888', fontStyle: 'italic', lineHeight: 1.6 }}>
                  <strong>{sec.title}:</strong> {sec.content}
                </p>
              );
            }
            return null;
          })}
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
