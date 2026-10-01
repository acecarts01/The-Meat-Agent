import type { Metadata } from 'next';
import { BLOG_POSTS } from '@/lib/blog-data';
import { BlogIndexClient } from '@/components/BlogIndexClient';

export const metadata: Metadata = {
  title: 'The Butcher\'s Journal — Buying Guides & Meat Science | The Meat Agent',
  description:
    'In-depth, no-fluff guides on marbling, dry-aging, cold-chain logistics, and buying smarter — written by a direct wholesale Australian butcher, not a recipe blog.',
  alternates: {
    canonical: 'https://themeatdirect.com.au/blog/',
  },
  openGraph: {
    title: 'The Butcher\'s Journal — Buying Guides & Meat Science | The Meat Agent',
    description:
      'In-depth, no-fluff guides on marbling, dry-aging, cold-chain logistics, and buying smarter.',
    url: 'https://themeatdirect.com.au/blog/',
    type: 'website',
  },
};

export default function BlogIndexPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: "The Butcher's Journal | The Meat Agent",
    description: 'Buying guides and meat science articles from The Meat Agent.',
    url: 'https://themeatdirect.com.au/blog/',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://themeatdirect.com.au/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://themeatdirect.com.au/blog/' },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogIndexClient posts={BLOG_POSTS} />
    </>
  );
}
