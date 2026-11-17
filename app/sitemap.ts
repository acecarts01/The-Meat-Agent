import { MetadataRoute } from 'next';
import { generate160Catalog, SHOP_CATEGORIES_160 } from '@/lib/products-160-data';
import { BLOG_POSTS } from '@/lib/blog-data';

const BASE_URL = 'https://themeatdirect.com.au';

export default function sitemap(): MetadataRoute.Sitemap {
  // Fixed catalogue/content date (a per-build timestamp tells crawlers nothing). Update when the catalogue or copy changes.
  const now = '2026-11-17';
  const catalog = generate160Catalog();

  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE_URL}/shop`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/wholesale`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/shipping`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/returns`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: p.updatedDate ?? p.publishedDate,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const categoryEntries: MetadataRoute.Sitemap = SHOP_CATEGORIES_160.map((c) => ({
    url: `${BASE_URL}/shop/${c.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const productEntries: MetadataRoute.Sitemap = catalog.map((p) => ({
    url: `${BASE_URL}/shop/${p.categorySlug}/${p.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticEntries, ...categoryEntries, ...productEntries, ...blogEntries];
}
