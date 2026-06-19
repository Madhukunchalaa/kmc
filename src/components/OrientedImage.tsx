'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface OrientedImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  style?: React.CSSProperties;
  sizes?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  quality?: number;
  [key: string]: any;
}

/**
 * OrientedImage - Automatically handles EXIF orientation
 * Detects if image needs rotation and applies CSS transform
 */
export default function OrientedImage({
  src,
  alt,
  fill,
  className = '',
  style = {},
  sizes,
  priority,
  loading = 'lazy',
  quality,
  ...props
}: OrientedImageProps) {
  const [orientation, setOrientation] = useState<number>(1);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Only check orientation for external images (R2/CDN)
    if (!src.startsWith('http') && !src.includes('r2.dev')) {
      setOrientation(1);
      return;
    }

    // Fetch image and read EXIF orientation
    const detectOrientation = async () => {
      try {
        const response = await fetch(src);
        const blob = await response.blob();
        const reader = new FileReader();

        reader.onload = (e) => {
          const view = new DataView(e.target?.result as ArrayBuffer);
          
          // Check if JPEG
          if (view.getUint16(0, false) !== 0xFFD8) {
            setOrientation(1);
            return;
          }

          const length = view.byteLength;
          let offset = 2;

          while (offset < length) {
            if (view.getUint16(offset + 2, false) <= 8) break;
            const marker = view.getUint16(offset, false);
            offset += 2;

            if (marker === 0xFFE1) {
              // EXIF marker found
              if (view.getUint32(offset += 2, false) !== 0x45786966) {
                break;
              }

              const little = view.getUint16(offset += 6, false) === 0x4949;
              offset += view.getUint32(offset + 4, little);
              const tags = view.getUint16(offset, little);
              offset += 2;

              for (let i = 0; i < tags; i++) {
                const tag = view.getUint16(offset + (i * 12), little);
                if (tag === 0x0112) {
                  // Orientation tag found
                  const orientationValue = view.getUint16(offset + (i * 12) + 8, little);
                  setOrientation(orientationValue);
                  return;
                }
              }
            } else if ((marker & 0xFF00) !== 0xFF00) {
              break;
            } else {
              offset += view.getUint16(offset, false);
            }
          }

          setOrientation(1);
        };

        reader.readAsArrayBuffer(blob);
      } catch (error) {
        console.warn('Could not read EXIF orientation:', error);
        setOrientation(1);
      }
    };

    detectOrientation();
  }, [src]);

  // Get CSS transform based on EXIF orientation
  const getOrientationTransform = (): React.CSSProperties => {
    switch (orientation) {
      case 2:
        return { transform: 'scaleX(-1)' };
      case 3:
        return { transform: 'rotate(180deg)' };
      case 4:
        return { transform: 'scaleY(-1)' };
      case 5:
        return { transform: 'rotate(90deg) scaleX(-1)' };
      case 6:
        return { transform: 'rotate(90deg)' };
      case 7:
        return { transform: 'rotate(270deg) scaleX(-1)' };
      case 8:
        return { transform: 'rotate(270deg)' };
      default:
        return {};
    }
  };

  const orientationStyle = getOrientationTransform();
  const combinedStyle = {
    ...style,
    ...orientationStyle,
    transition: isLoaded ? 'none' : 'opacity 0.3s ease',
    opacity: isLoaded ? 1 : 0,
  };

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      style={combinedStyle}
      sizes={sizes}
      priority={priority}
      loading={loading}
      quality={quality}
      onLoad={() => setIsLoaded(true)}
      {...props}
    />
  );
}
