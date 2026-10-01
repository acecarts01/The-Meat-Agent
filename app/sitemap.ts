import { MetadataRoute } from 'next';
import { generate160Catalog, SHOP_CATEGORIES_160 } from '@/lib/products-160-data';
import { BLOG_POSTS } from '@/lib/blog-data';

const BASE_URL = 'https://themeatdirect.com.au';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const catalog = generate160Catalog();

  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE_URL}/shop/`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/blog/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
  ];

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}/`,
    lastModified: p.publishedDate,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const categoryEntries: MetadataRoute.Sitemap = SHOP_CATEGORIES_160.map((c) => ({
    url: `${BASE_URL}/shop/${c.slug}/`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const productEntries: MetadataRoute.Sitemap = catalog.map((p) => ({
    url: `${BASE_URL}/shop/${p.categorySlug}/${p.slug}/`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticEntries, ...categoryEntries, ...productEntries, ...blogEntries];
}
