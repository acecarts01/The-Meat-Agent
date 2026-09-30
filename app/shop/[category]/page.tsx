import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  SHOP_CATEGORIES_160,
  generate160Catalog,
  getCategoryBySlug,
} from '@/lib/products-160-data';
import { CategoryPageClient } from '@/components/CategoryPageClient';

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return SHOP_CATEGORIES_160.map((c) => ({
    category: c.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: catSlug } = await params;
  const category = getCategoryBySlug(catSlug);

  if (!category) {
    return {
      title: 'Department Not Found | The Meat Agent',
      description: 'The requested butcher department was not found.',
      robots: { index: false, follow: true },
    };
  }

  const title = `${category.name} (${category.itemCount} Cuts) | The Meat Agent`;
  const description = `${category.heroTagline}. Direct wholesale allocation across Australia with refrigerated cold-chain courier delivery.`;
  const canonicalUrl = `https://meatdirect.com.au/shop/${category.slug}/`;

  return {
    title,
    description: description.slice(0, 160),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description: description.slice(0, 160),
      url: canonicalUrl,
      type: 'website',
      images: [{ url: category.heroImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: description.slice(0, 160),
      images: [category.heroImage],
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: catSlug } = await params;
  const category = getCategoryBySlug(catSlug);

  if (!category) {
    notFound();
  }

  const catalog = generate160Catalog();
  const products = catalog.filter((p) => p.categorySlug === category.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category.name} | The Meat Agent`,
    description: category.heroTagline,
    url: `https://meatdirect.com.au/shop/${category.slug}/`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://meatdirect.com.au/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Shop',
          item: 'https://meatdirect.com.au/shop/',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: category.name,
          item: `https://meatdirect.com.au/shop/${category.slug}/`,
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CategoryPageClient category={category} products={products} />
    </>
  );
}
