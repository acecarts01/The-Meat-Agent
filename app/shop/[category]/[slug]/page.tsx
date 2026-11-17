import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  generate160Catalog,
  getProductByCategoryAndSlug,
  getProductBySlug,
  getRelatedProducts,
  getCategoryBySlug,
} from '@/lib/products-160-data';
import { productSeo } from '@/lib/onpage';
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

  // Title and meta description are built around the product's real Semrush primary keyword
  // (see lib/seo-keywords.ts) — natural placement, not stuffed, matching the keyword actually
  // assigned to this page.
  const seo = productSeo(product);
  const title = seo?.title ?? `${product.name} — ${product.weight} | The Meat Agent`;
  const description = seo?.description ?? `${product.shortDescription}`.slice(0, 157).replace(/\s+\S*$/, '') + '...';
  const canonicalUrl = `https://themeatdirect.com.au/shop/${product.categorySlug}/${product.slug}`;

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
  const seo = productSeo(product);
  const pageProduct = seo?.extraFaq ? { ...product, faqs: [...product.faqs, seo.extraFaq] } : product;

  // JSON-LD Structured Data: Product + Offer + Brand + BreadcrumbList
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        '@id': `https://themeatdirect.com.au/shop/${product.categorySlug}/${product.slug}#product`,
        name: product.name,
        description: product.shortDescription,
        sku: product.sku,
        mpn: product.sku,
        image: [`https://themeatdirect.com.au${product.images.rawFallback}`, `https://themeatdirect.com.au${product.images.cookedFallback}`],
        brand: {
          '@type': 'Brand',
          name: product.brand,
        },
        category: product.category,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'AUD',
          price: product.price.toFixed(2),
          // Catalogue prices are shown before 10% GST; GST is added at checkout.
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: product.price.toFixed(2),
            priceCurrency: 'AUD',
            valueAddedTaxIncluded: false,
          },
          priceValidUntil: `${new Date().getFullYear()}-12-31`,
          itemCondition: 'https://schema.org/NewCondition',
          availability: 'https://schema.org/InStock',
          url: `https://themeatdirect.com.au/shop/${product.categorySlug}/${product.slug}`,
          seller: {
            '@type': 'Organization',
            name: 'The Meat Agent',
            '@id': 'https://themeatdirect.com.au/#organization',
          },
          hasMerchantReturnPolicy: {
            '@type': 'MerchantReturnPolicy',
            applicableCountry: 'AU',
            returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
            merchantReturnLink: 'https://themeatdirect.com.au/returns',
          },
          // Shipping per the live checkout rules: $25 under $2,000, free at $2,000 or more.
          shippingDetails: [
            {
              '@type': 'OfferShippingDetails',
              shippingRate: { '@type': 'MonetaryAmount', value: '25.00', currency: 'AUD' },
              shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'AU' },
              shippingLabel: 'Standard cold-chain courier (orders under $2,000)',
            },
            {
              '@type': 'OfferShippingDetails',
              shippingRate: { '@type': 'MonetaryAmount', value: '0.00', currency: 'AUD' },
              shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'AU' },
              shippingLabel: 'Free cold-chain courier (orders of $2,000 or more)',
            },
          ],
        },
        // No AggregateRating: the previous 4.4 / 2,837 figure was a site-wide score copied onto every product,
        // not a rating of this product. Add a real per-product rating here only when genuine reviews exist.
      },
      {
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
            item: 'https://themeatdirect.com.au/shop',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: categoryData?.name || product.category,
            item: `https://themeatdirect.com.au/shop/${product.categorySlug}`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: product.name,
            item: `https://themeatdirect.com.au/shop/${product.categorySlug}/${product.slug}`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: pageProduct.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
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
        product={pageProduct}
        seo={seo}
        category={categoryData}
        relatedProducts={related}
      />
    </>
  );
}
