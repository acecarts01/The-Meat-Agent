import type { Metadata } from 'next';
import { Suspense } from 'react';
import { generate160Catalog, TOTAL_CATALOG_COUNT } from '@/lib/products-160-data';
import { ShopCatalogPageClient } from '@/components/ShopCatalogPageClient';

export const metadata: Metadata = {
  title: `Australian Butcher Catalog — ${TOTAL_CATALOG_COUNT} Wholesale Cuts | The Meat Agent`,
  description: `Browse all ${TOTAL_CATALOG_COUNT} Australian beef steaks, whole smoker primals, MSA Wagyu MB9+, dry-aged ribeyes, Halal goat & mutton, and pasture poultry. Cold-chain delivery nationwide.`,
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
  return (
    <Suspense fallback={null}>
      <ShopCatalogPageClient initialProducts={products} />
    </Suspense>
  );
}
