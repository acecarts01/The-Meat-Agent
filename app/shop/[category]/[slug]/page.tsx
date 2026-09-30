import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  generate160Catalog,
  getProductByCategoryAndSlug,
  getProductBySlug,
  getRelatedProducts,
  getCategoryBySlug,
} from '@/lib/products-160-data';
import { ProductDetailClient } from '@/components/ProductDetailClient';

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const catalog = generate160Catalog();
  return catalog.map((p) => ({
    category: p.categorySlug,
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const product = getProductByCategoryAndSlug(category, slug) || getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Cut Not Found | The Meat Agent',
      description: 'The requested butcher cut or wholesale allocation was not found.',
      robots: { index: false, follow: true },
    };
  }

  const title = `${product.name} — ${product.weight} | The Meat Agent`;
  const description = `${product.shortDescription} ${product.marbling}, ${product.dryAging}. Cold-chain delivered across Australia from The Meat Agent.`;
  const canonicalUrl = `https://meatdirect.com.au/shop/${product.categorySlug}/${product.slug}/`;

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
      siteName: 'The Meat Agent',
      images: [
        {
          url: product.images.rawFallback,
          width: 1200,
          height: 900,
          alt: `${product.name} - Raw Butcher Cut`,
        },
        {
          url: product.images.cookedFallback,
          width: 1200,
          height: 900,
          alt: `${product.name} - Plated Cooked Presentation`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: description.slice(0, 160),
      images: [product.images.rawFallback],
    },
    other: {
      'og:updated_time': new Date().toISOString(),
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { category, slug } = await params;
  const product = getProductByCategoryAndSlug(category, slug) || getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const categoryData = getCategoryBySlug(product.categorySlug);
  const related = getRelatedProducts(product, 4);

  // JSON-LD Structured Data: Product + Offer + Brand + BreadcrumbList
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        '@id': `https://meatdirect.com.au/shop/${product.categorySlug}/${product.slug}/#product`,
        name: product.name,
        description: product.shortDescription,
        sku: product.sku,
        image: [product.images.rawFallback, product.images.cookedFallback],
        brand: {
          '@type': 'Brand',
          name: product.brand,
        },
        category: product.category,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'AUD',
          price: product.price.toFixed(2),
          itemCondition: 'https://schema.org/NewCondition',
          availability: 'https://schema.org/InStock',
          url: `https://meatdirect.com.au/shop/${product.categorySlug}/${product.slug}/`,
          seller: {
            '@type': 'Organization',
            name: 'The Meat Agent',
          },
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.4',
          reviewCount: '2837',
          bestRating: '5',
          worstRating: '1',
        },
      },
      {
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
            name: categoryData?.name || product.category,
            item: `https://meatdirect.com.au/shop/${product.categorySlug}/`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: product.name,
            item: `https://meatdirect.com.au/shop/${product.categorySlug}/${product.slug}/`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetailClient
        product={product}
        category={categoryData}
        relatedProducts={related}
      />
    </>
  );
}
