import { describe, it, expect } from 'vitest';
import { resolveProductImage } from '../lib/resolveProductImage';

describe('resolveProductImage Utility', () => {
  it('should return the path unchanged if it is already a good local path', () => {
    const path = '/images/uploads/custom-pendant.png';
    const result = resolveProductImage(path, 'pendants', 'Custom Pendant');
    expect(result).toBe(path);
  });

  it('should resolve bracelets category to local bracelet path', () => {
    const image = 'http://oldwordpress.com/wp-content/uploads/bracelet.jpg';
    const result = resolveProductImage(image, 'Bracelets', 'Tiger Eye Bracelet');
    expect(result).toBe('/images/products/bracelet.png');
  });

  it('should resolve malas category to local mala path', () => {
    const image = '/images/crystals/old-mala.png';
    const result = resolveProductImage(image, 'Malas', 'Rudraksha Mala');
    expect(result).toBe('/images/products/mala.png');
  });

  it('should resolve towers from name keywords', () => {
    const image = 'http://external.com/crystal.jpg';
    const result = resolveProductImage(image, 'Others', 'Amethyst Tower Point');
    expect(result).toBe('/images/products/tower.png');
  });

  it('should resolve evileye from category name', () => {
    const image = 'http://external.com/crystal.jpg';
    const result = resolveProductImage(image, 'evileye', 'Hamsa Protector');
    expect(result).toBe('/images/products/evileye.png');
  });

  it('should resolve raw stones keywords', () => {
    const image = 'http://external.com/crystal.jpg';
    const result = resolveProductImage(image, 'Others', 'Raw Pyrite Cluster');
    expect(result).toBe('/images/products/raw.png');
  });

  it('should use deterministic cyclic fallback when category and keywords are unknown', () => {
    const image = 'http://external.com/unknown.jpg';
    const result = resolveProductImage(image, 'unknown-category', 'Unknown Product');
    expect(result).toBe('/images/products/tower.png');
  });

  it('should append ?v=2 cache buster to R2 URLs', () => {
    const url = 'https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/designer%20bracelates/Tiger%20eye';
    const result = resolveProductImage(url, 'bracelets', 'Tiger Eye Bracelet');
    expect(result).toBe(url + '?v=2');
  });

  it('should append &v=2 cache buster if R2 URL already has query params', () => {
    const url = 'https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/image.jpg?foo=bar';
    const result = resolveProductImage(url, 'bracelets', 'Test');
    expect(result).toBe(url + '&v=2');
  });
});
