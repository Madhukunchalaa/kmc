'use client';

import { useState } from 'react';

export default function ProductImageZoom({ image, name }: { image: string; name: string }) {
  const [zoomStyle, setZoomStyle] = useState({
    transformOrigin: 'center center',
    transform: 'scale(1)'
  });
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - left;
    const py = e.clientY - top;
    const x = (px / width) * 100;
    const y = (py / height) * 100;
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: 'scale(1.8)'
    });
    setCoords({ x: px, y: py });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      transformOrigin: 'center center',
      transform: 'scale(1)'
    });
    setIsHovered(false);
  };

  return (
    <div style={{
      padding: '14px',
      background: '#fff',
      border: '1px solid rgba(200, 149, 108, 0.16)',
      borderRadius: 36,
      boxShadow: '0 25px 70px rgba(45, 27, 14, 0.05)',
      position: 'relative'
    }}>
      {/* Interactive Hover Card */}
      <div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ 
          position: 'relative',
          borderRadius: 24, 
          overflow: 'hidden', 
          cursor: 'none', // Replaced with custom lens cursor
          width: '100%',
          aspectRatio: '1 / 1',
          background: '#fff',
          border: '1px solid rgba(200, 149, 108, 0.25)',
        }}
        className="product-image-card"
      >
        {/* Floating Energised Badge */}
        <span style={{ 
          position: 'absolute', 
          top: '20px', 
          left: '20px', 
          background: 'rgba(45, 27, 14, 0.85)', 
          backdropFilter: 'blur(8px)', 
          border: '1px solid var(--accent)', 
          color: 'var(--accent)', 
          padding: '6px 14px', 
          borderRadius: '30px', 
          fontSize: '0.72rem', 
          letterSpacing: '0.08em', 
          fontWeight: 700, 
          textTransform: 'uppercase', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '6px', 
          zIndex: 5,
          pointerEvents: 'none'
        }}>
          <i className="fa-solid fa-wand-magic-sparkles" style={{ color: 'var(--accent)' }}></i>
          Cleansed &amp; Energised
        </span>

        {/* Main Product Image */}
        <img 
          src={image} 
          alt={name} 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            display: 'block', 
            transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
            ...zoomStyle
          }} 
        />

        {/* Custom Magnifier Lens Overlay */}
        {isHovered && (
          <div 
            style={{
              position: 'absolute',
              left: coords.x - 65, // centers the 130px circle
              top: coords.y - 65,
              width: 130,
              height: 130,
              borderRadius: '50%',
              border: '2px solid var(--accent, #E8C99A)',
              boxShadow: '0 8px 32px rgba(45, 27, 14, 0.35), inset 0 0 15px rgba(255,255,255,0.2)',
              pointerEvents: 'none',
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'contrast(1.1) brightness(1.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
            }}
          >
            <i 
              className="fa-solid fa-magnifying-glass" 
              style={{ 
                color: '#fff', 
                fontSize: '1.1rem', 
                filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.5))' 
              }}
            ></i>
          </div>
        )}
      </div>
    </div>
  );
}

