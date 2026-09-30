import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://themeatdirect.com.au'),
  title: 'The Meat Agent — Meat Direct | Australian Wholesale Butcher & Wagyu',
  description: 'Direct farm-gate wholesale allocation of MSA-graded Wagyu MB9+, 45-day dry-aged steaks, and smoker primals. Delivered cold-chain across Australia.',
  openGraph: {
    title: 'The Meat Agent — Meat Direct | Australian Wholesale Butcher',
    description: 'Direct farm-gate wholesale allocation of MSA-graded Wagyu MB9+, 45-day dry-aged steaks, and smoker primals. Delivered cold-chain across Australia.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Meat Agent — Meat Direct | Australian Wholesale Butcher',
    description: 'Direct farm-gate wholesale allocation of MSA-graded Wagyu MB9+, 45-day dry-aged steaks, and smoker primals. Delivered cold-chain across Australia.',
  },
  verification: {
    other: {
      'msvalidate.01': 'F87FCDC8ECE60BCB60172DBD5BF60B04',
    },
  },
};

const ORG_JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://themeatdirect.com.au/#organization',
      name: 'The Meat Agent',
      alternateName: 'Meat Direct',
      legalName: 'LPJH HOLDINGS PTY LTD',
      url: 'https://themeatdirect.com.au/',
      logo: 'https://themeatdirect.com.au/favicon.ico',
      email: 'sales@themeatdirect.com.au',
      identifier: {
        '@type': 'PropertyValue',
        propertyID: 'ABN',
        value: '55 657 961 058',
      },
      address: [
        {
          '@type': 'PostalAddress',
          streetAddress: '22 Wilson Pl',
          addressLocality: 'Harrisville',
          addressRegion: 'QLD',
          postalCode: '4307',
          addressCountry: 'AU',
        },
        {
          '@type': 'PostalAddress',
          streetAddress: '164 Brisbane St',
          addressLocality: 'Ipswich',
          addressRegion: 'QLD',
          postalCode: '4305',
          addressCountry: 'AU',
        },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'sales@themeatdirect.com.au',
        telephone: '+61-480-804-189',
        areaServed: 'AU',
        availableLanguage: 'en',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://themeatdirect.com.au/#website',
      url: 'https://themeatdirect.com.au/',
      name: 'The Meat Agent',
      publisher: { '@id': 'https://themeatdirect.com.au/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://themeatdirect.com.au/shop?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
