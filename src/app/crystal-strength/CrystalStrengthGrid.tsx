'use client';

import { useState } from 'react';
import ScrollFade from '@/components/ScrollFade';
import CrystalCard from './CrystalCard';
import CrystalProductsModal from './CrystalProductsModal';
import type { CrystalCardData } from './CrystalCard';

interface CrystalStrengthGridProps {
  crystals: CrystalCardData[];
}

export default function CrystalStrengthGrid({ crystals }: CrystalStrengthGridProps) {
  const [activeCrystal, setActiveCrystal] = useState<CrystalCardData | null>(null);

  return (
    <>
      <div className="row g-4">
        {crystals.map((c, idx) => (
          <div className="col-sm-6 col-lg-4" key={c.name}>
            <ScrollFade delay={Math.min(idx, 6) * 60}>
              <div onClick={() => setActiveCrystal(c)} style={{ height: '100%' }}>
                <CrystalCard crystal={c} />
              </div>
            </ScrollFade>
          </div>
        ))}
      </div>

      {activeCrystal && (
        <CrystalProductsModal
          crystal={activeCrystal}
          onClose={() => setActiveCrystal(null)}
        />
      )}
    </>
  );
}
