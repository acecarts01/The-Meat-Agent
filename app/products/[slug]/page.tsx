import { permanentRedirect, notFound } from 'next/navigation';
import { getProductBySlug } from '@/lib/products-160-data';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductRedirectPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  permanentRedirect(`/shop/${product.categorySlug}/${product.slug}`);
}
