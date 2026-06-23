'use client';

export interface CrystalCardData {
  name: string;
  keyword: string;
  desc: string;
  gradient?: string;
  emoji?: string;
  image: string;
  tags: string[];
  chakras?: string[];
  color?: string;
}

interface CrystalCardProps {
  crystal: CrystalCardData;
}

export default function CrystalCard({ crystal }: CrystalCardProps) {
  return (
    <div
      className="crystal-card"
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
        '--crystal-color': crystal.color,
      } as React.CSSProperties}
    >
      <div>
        <div className="crystal-gem-image-wrapper">
          <img src={crystal.image} alt={crystal.name} className="crystal-gem-image" />
        </div>
        <h3 className="crystal-name">{crystal.name}</h3>
        <p className="crystal-keyword">{crystal.keyword}</p>
        <p className="crystal-desc">{crystal.desc}</p>
        <div className="crystal-tags">
          {crystal.tags.map((t) => (
            <span className="crystal-tag" key={t}>{t}</span>
          ))}
        </div>
        {crystal.chakras && crystal.chakras.length > 0 && (
          <p style={{ fontSize: '0.75rem', color: 'rgba(255, 200, 150, 0.75)', marginTop: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            {crystal.chakras.join(' · ')}
          </p>
        )}
      </div>
    </div>
  );
}
