import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  SHOP_CATEGORIES_160,
  generate160Catalog,
  getCategoryBySlug,
} from '@/lib/products-160-data';
import { CATEGORY_KEYWORDS } from '@/lib/seo-keywords';
import { getCategoryFAQs } from '@/lib/content-generator';
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

  // Real Semrush primary keyword for this category (see lib/seo-keywords.ts) — worked
  // naturally into the title rather than stuffed or repeated.
  const kw = CATEGORY_KEYWORDS[category.slug];
  const title = kw
    ? `${category.name} — ${kw.primaryKeyword} (${category.itemCount} Cuts) | The Meat Agent`
    : `${category.name} (${category.itemCount} Cuts) | The Meat Agent`;
  const description = `${category.heroTagline}. Direct wholesale allocation across Australia with refrigerated cold-chain courier delivery.`;
  const canonicalUrl = `https://themeatdirect.com.au/shop/${category.slug}/`;

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
  const faqs = getCategoryFAQs(category.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category.name} | The Meat Agent`,
    description: category.heroTagline,
    url: `https://themeatdirect.com.au/shop/${category.slug}/`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://themeatdirect.com.au/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Shop',
          item: 'https://themeatdirect.com.au/shop/',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: category.name,
          item: `https://themeatdirect.com.au/shop/${category.slug}/`,
        },
      ],
    },
  };

  const faqJsonLd = faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <CategoryPageClient category={category} products={products} faqs={faqs} />
    </>
  );
}
