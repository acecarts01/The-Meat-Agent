import type { Metadata } from 'next';
import { PolicyPage } from '@/components/PolicyPage';
import { PRIVACY_INTRO, PRIVACY_SECTIONS, PRIVACY_FAQS, POLICY_EFFECTIVE, POLICY_EFFECTIVE_LABEL } from '@/lib/policy-content';

export const metadata: Metadata = {
  title: 'Privacy Policy | The Meat Agent',
  description:
    'How The Meat Agent (LPJH HOLDINGS PTY LTD) collects, uses and protects personal information under the Privacy Act 1988 and the Australian Privacy Principles.',
  alternates: { canonical: 'https://themeatdirect.com.au/privacy' },
  openGraph: { title: 'Privacy Policy | The Meat Agent', url: 'https://themeatdirect.com.au/privacy', type: 'website' },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://themeatdirect.com.au/privacy#page',
        url: 'https://themeatdirect.com.au/privacy',
        name: 'Privacy Policy',
        dateModified: POLICY_EFFECTIVE,
        isPartOf: { '@id': 'https://themeatdirect.com.au/#website' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://themeatdirect.com.au/' },
          { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: 'https://themeatdirect.com.au/privacy' },
        ],
      },
    ],
  };
  return (
    <PolicyPage
      title="Privacy Policy"
      crumb="Privacy Policy"
      effectiveLabel={POLICY_EFFECTIVE_LABEL}
      intro={PRIVACY_INTRO}
      sections={PRIVACY_SECTIONS}
      faqs={PRIVACY_FAQS}
      faqTitle="Privacy: common questions"
      jsonLd={jsonLd}
    />
  );
}
