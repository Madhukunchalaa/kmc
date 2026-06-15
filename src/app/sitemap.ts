import { MetadataRoute } from 'next';
import { connectMongoose } from '@/lib/mongoose';
import { Product } from '@/models/Product';
import Blog from '@/models/Blog';

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://krissmaagiiccrystals.com';

  // Static URLs
  const staticUrls = [
    '',
    '/about',
    '/contact',
    '/crystal-strength',
    '/services',
    '/shop',
    '/blogs',
    '/privacy-policy',
    '/returns',
    '/shipping-policy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  let productUrls: MetadataRoute.Sitemap = [];
  let blogUrls: MetadataRoute.Sitemap = [];

  try {
    await connectMongoose();
    
    // Fetch active products
    const products = await Product.find({ active: true, isDeleted: false }).lean();
    productUrls = products.map((p: any) => ({
      url: `${baseUrl}/shop/${p.slug}`,
      lastModified: p.updatedAt || new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));

    // Fetch published blogs
    const blogs = await Blog.find({ published: true }).lean();
    blogUrls = blogs.map((b: any) => ({
      url: `${baseUrl}/blogs/${b.slug}`,
      lastModified: b.updatedAt || new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    }));
  } catch (err) {
    console.error('Failed to generate dynamic sitemap entries:', err);
  }

  return [...staticUrls, ...productUrls, ...blogUrls];
}
