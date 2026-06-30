'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { resolveProductImage } from '@/lib/resolveProductImage';

interface ProductImageGalleryProps {
  images?: string[];
  mainImage: string;
  category: string;
  name: string;
  onImageSelect?: (imageUrl: string) => void;
}

export default function ProductImageGallery({
  images = [],
  mainImage,
  category,
  name,
  onImageSelect,
}: ProductImageGalleryProps) {
  // Main/display image always first; remaining gallery images follow (de-duped, order preserved)
  const rawList = [mainImage, ...images];
  const uniqueImages = Array.from(new Set(rawList.filter((img) => !!img)));

  const [activeIndex, setActiveIndex] = useState(0);

  // When the selected variant changes (mainImage prop updates), highlight the matching thumbnail
  useEffect(() => {
    const idx = uniqueImages.indexOf(mainImage);
    setActiveIndex(idx >= 0 ? idx : 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainImage]);
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({
    transform: 'scale(1)',
    transformOrigin: 'center',
  });
  
  // Determine if this is a pyramid product
  const isPyramid = category === 'pyramids' || name.toLowerCase().includes('pyramid');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      transform: 'scale(2.2)',
      transformOrigin: `${x}% ${y}%`,
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      transform: 'scale(1)',
      transformOrigin: 'center',
    });
  };

  const activeImage = uniqueImages[activeIndex] || mainImage;
  const resolvedActiveImage = resolveProductImage(activeImage, category, name);

  return (
    <div className="product-image-gallery" style={{ width: '100%' }}>
      {/* Main Image Viewport with Hover Zoom */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '20px',
          boxShadow: 'var(--shadow-lg, 0 20px 50px rgba(0,0,0,0.08))',
          backgroundColor: 'var(--bg-soft, #FAF6F1)',
          cursor: 'zoom-in',
          width: '100%',
          aspectRatio: '5 / 6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          src={resolvedActiveImage}
          alt={name}
          width={600}
          height={720}
          priority
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: isPyramid ? 'center bottom' : 'center center',
            display: 'block',
            ...zoomStyle,
            transform: activeImage.includes('Rose%20quartz')
              ? `rotate(-90deg) ${zoomStyle.transform === 'scale(1)' ? 'scale(1.4)' : 'scale(3.08)'}`
              : zoomStyle.transform,
            transition: 'transform 0.25s ease-out, transform-origin 0.08s ease-out',
          }}
        />
      </div>

      {/* Thumbnails list if there are multiple images */}
      {uniqueImages.length > 1 && (
        <>
          <style
            dangerouslySetInnerHTML={{
              __html: `
                .thumbnail-scroll::-webkit-scrollbar {
                  display: none;
                }
              `,
            }}
          />
          <div
            className="thumbnail-scroll"
            style={{
              display: 'flex',
              gap: '12px',
              marginTop: '16px',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              padding: '4px 2px',
            }}
          >
            {uniqueImages.map((imgUrl, idx) => {
              const resolvedThumb = resolveProductImage(imgUrl, category, name);
              const isActive = activeIndex === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => { setActiveIndex(idx); onImageSelect?.(imgUrl); }}
                  aria-label={`View image ${idx + 1}`}
                  style={{
                    width: '76px',
                    height: '76px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: isActive
                      ? '2.5px solid var(--primary, #C8956C)'
                      : '2.5px solid transparent',
                    boxShadow: isActive
                      ? '0 4px 12px rgba(200, 149, 108, 0.25)'
                      : '0 2px 6px rgba(0,0,0,0.03)',
                    background: 'var(--bg-soft, #FAF6F1)',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: isActive ? 1 : 0.65,
                    transform: isActive ? 'scale(1.05)' : 'scale(1)',
                    flexShrink: 0,
                  }}
                  onMouseEnter={() => { setActiveIndex(idx); onImageSelect?.(imgUrl); }}
                >
                  <Image
                    src={resolvedThumb}
                    alt={`${name} thumbnail ${idx + 1}`}
                    width={76}
                    height={76}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transform: imgUrl.includes('Rose%20quartz') ? 'rotate(-90deg) scale(1.4)' : undefined,
                    }}
                  />
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
