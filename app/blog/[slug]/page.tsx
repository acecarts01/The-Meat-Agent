import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, getBlogPostBySlug, getRelatedBlogPosts } from '@/lib/blog-data';
import { BlogPostClient } from '@/components/BlogPostClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found | The Meat Agent',
      description: 'The requested blog article was not found.',
      robots: { index: false, follow: true },
    };
  }

  const canonicalUrl = `https://themeatdirect.com.au/blog/${post.slug}/`;

  return {
    title: `${post.title} | The Meat Agent`,
    description: post.excerpt,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonicalUrl,
      type: 'article',
      images: [{ url: post.heroImage, width: 1600, height: 1200, alt: post.title }],
      publishedTime: post.publishedDate,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.heroImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedBlogPosts(post, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `https://themeatdirect.com.au/blog/${post.slug}/#article`,
        headline: post.title,
        description: post.excerpt,
        image: post.heroImage,
        datePublished: post.publishedDate,
        dateModified: post.publishedDate,
        author: {
          '@type': 'Organization',
          name: 'The Meat Agent',
          '@id': 'https://themeatdirect.com.au/#organization',
        },
        publisher: {
          '@type': 'Organization',
          name: 'The Meat Agent',
          '@id': 'https://themeatdirect.com.au/#organization',
        },
        mainEntityOfPage: `https://themeatdirect.com.au/blog/${post.slug}/`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://themeatdirect.com.au/' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://themeatdirect.com.au/blog/' },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: `https://themeatdirect.com.au/blog/${post.slug}/`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: post.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
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
      <BlogPostClient post={post} related={related} />
    </>
  );
}
