/**
 * Resolves any product image URL (including broken WordPress URLs or old crystal paths)
 * to the correct local product image based on category and product name.
 */
export function resolveProductImage(image: string, category: string, name: string): string {
  const isExternal = image.startsWith('http');
  const isOldCrystal = image.startsWith('/images/crystals/');
  if (!isExternal && !isOldCrystal) return image; // already a good local path

  const cat = (category || '').toLowerCase();
  const n = (name || '').toLowerCase();

  if (cat === 'bracelets' || n.includes('bracelet') || n.includes('chain'))               return '/images/products/bracelet.png';
  if (cat === 'malas'     || n.includes('mala'))                                           return '/images/products/mala.png';
  if (cat === 'pendants'  || n.includes('pendant') || n.includes('locket'))                return '/images/products/pendant.png';
  if (cat === 'spheres'   || n.includes('sphere')  || n.includes('ball'))                  return '/images/products/sphere.png';
  if (cat === 'towers'    || n.includes('tower')   || n.includes('point') || n.includes('obelisk')) return '/images/products/tower.png';
  if (cat === 'trees'     || n.includes('tree'))                                           return '/images/products/tree.png';
  if (cat === 'evileye'   || n.includes('evil'))                                           return '/images/products/evileye.png';
  if (cat === 'silver'    || n.includes('silver')  || n.includes('ring') || n.includes('earring')) return '/images/products/silver.png';
  if (cat === 'raw'       || n.includes('raw')     || n.includes('cluster') || n.includes('rough') || n.includes('coin') || n.includes('stone') || n.includes('zibu')) return '/images/products/raw.png';

  // Fallback — deterministic cycle by first character
  const fallbacks = [
    '/images/products/bracelet.png', '/images/products/raw.png',
    '/images/products/sphere.png',   '/images/products/tower.png',
    '/images/products/mala.png',     '/images/products/pendant.png',
  ];
  return fallbacks[n.charCodeAt(0) % fallbacks.length];
}
