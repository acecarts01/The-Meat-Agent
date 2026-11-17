import type { Metadata } from 'next';
import { PolicyPage } from '@/components/PolicyPage';
import { RETURNS_INTRO, RETURNS_SECTIONS, RETURNS_FAQS, POLICY_EFFECTIVE, POLICY_EFFECTIVE_LABEL } from '@/lib/policy-content';

export const metadata: Metadata = {
  title: 'Returns & Refunds Policy | The Meat Agent',
  description:
    'Returns and refunds policy for The Meat Agent: perishable meat, your Australian Consumer Law rights, how to report a warm, damaged or wrong order, and how refunds are paid.',
  alternates: { canonical: 'https://themeatdirect.com.au/returns' },
  openGraph: { title: 'Returns & Refunds Policy | The Meat Agent', url: 'https://themeatdirect.com.au/returns', type: 'website' },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://themeatdirect.com.au/returns#page',
        url: 'https://themeatdirect.com.au/returns',
        name: 'Returns & Refunds Policy',
        dateModified: POLICY_EFFECTIVE,
        isPartOf: { '@id': 'https://themeatdirect.com.au/#website' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://themeatdirect.com.au/' },
          { '@type': 'ListItem', position: 2, name: 'Returns & Refunds Policy', item: 'https://themeatdirect.com.au/returns' },
        ],
      },
    ],
  };
  return (
    <PolicyPage
      title="Returns & Refunds Policy"
      crumb="Returns & Refunds Policy"
      effectiveLabel={POLICY_EFFECTIVE_LABEL}
      intro={RETURNS_INTRO}
      sections={RETURNS_SECTIONS}
      faqs={RETURNS_FAQS}
      faqTitle="Returns and refunds: common questions"
      jsonLd={jsonLd}
    />
  );
}
