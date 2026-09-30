import type { Metadata } from 'next';
import { generate160Catalog } from '@/lib/products-160-data';
import { ShopCatalogPageClient } from '@/components/ShopCatalogPageClient';

export const metadata: Metadata = {
  title: 'Australian Butcher Catalog — 160 Wholesale Cuts | The Meat Agent',
  description: 'Browse all 160 Australian beef steaks, whole smoker primals, MSA Wagyu MB9+, dry-aged ribeyes, and pasture poultry. Cold-chain delivery nationwide.',
  alternates: {
    canonical: 'https://meatdirect.com.au/shop/',
  },
  openGraph: {
    title: 'Australian Butcher Catalog — 160 Wholesale Cuts | The Meat Agent',
    description: 'Browse all 160 Australian beef steaks, whole smoker primals, MSA Wagyu MB9+, dry-aged ribeyes, and pasture poultry.',
    url: 'https://meatdirect.com.au/shop/',
    type: 'website',
  },
};

export default function ShopIndexPage() {
  const products = generate160Catalog();
  return <ShopCatalogPageClient initialProducts={products} />;
}
