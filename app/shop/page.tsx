import type { Metadata } from 'next';
import { generate160Catalog, TOTAL_CATALOG_COUNT } from '@/lib/products-160-data';
import { ShopCatalogPageClient } from '@/components/ShopCatalogPageClient';
import { SiteFaqSection } from '@/components/SiteFaq';
import { SHOP_FAQS } from '@/lib/site-faqs';

export const metadata: Metadata = {
  title: `Meat Fresh From The Butcher | Buy ${TOTAL_CATALOG_COUNT} Cuts Online | The Meat Agent`,
  description: `Meat fresh from our Ipswich boning room: shop ${TOTAL_CATALOG_COUNT} beef, wagyu, lamb, chicken, pork and game cuts. Prices before GST, cold-chain delivery Australia-wide.`,
  alternates: {
    canonical: 'https://themeatdirect.com.au/shop',
  },
  openGraph: {
    title: `Australian Butcher Catalog — ${TOTAL_CATALOG_COUNT} Wholesale Cuts | The Meat Agent`,
    description: `Browse all ${TOTAL_CATALOG_COUNT} Australian beef steaks, whole smoker primals, MSA Wagyu MB9+, dry-aged ribeyes, Halal goat & mutton, and pasture poultry.`,
    url: 'https://themeatdirect.com.au/shop',
    type: 'website',
  },
};

export default function ShopIndexPage() {
  const products = generate160Catalog();
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://themeatdirect.com.au/' },
      { '@type': 'ListItem', position: 2, name: 'Shop', item: 'https://themeatdirect.com.au/shop' },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ShopCatalogPageClient
        initialProducts={products}
        faqSlot={<SiteFaqSection title="Buying meat online: your questions answered" faqs={SHOP_FAQS} />}
      />
    </>
  );
}
