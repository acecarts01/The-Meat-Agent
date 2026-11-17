import type { Metadata } from 'next';
import { WholesaleLandingClient } from '@/components/WholesaleLandingClient';

export const metadata: Metadata = {
  title: 'Wholesale Meat Suppliers for Restaurants & Hotels | The Meat Agent',
  description:
    'Australian wholesale meat supplier for restaurants, hotels, cafés and caterers. Daily, weekly or monthly delivery, any cut state, Halal certified (AFIC) except pork. Apply for a trade account.',
  alternates: {
    canonical: 'https://themeatdirect.com.au/wholesale',
  },
  openGraph: {
    title: 'Wholesale Meat Suppliers for Restaurants & Hotels | The Meat Agent',
    description:
      'Direct-from-supplier wholesale meat for restaurants, hotels, cafés and caterers — daily, weekly or monthly delivery, Halal certified (AFIC) except pork.',
    url: 'https://themeatdirect.com.au/wholesale',
    type: 'website',
  },
};

export default function WholesalePage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is there a minimum order for wholesale accounts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No separate wholesale minimum — the standard $423 AUD cart minimum applies, but at trade/case rates rather than single-pack retail pricing.',
        },
      },
      {
        '@type': 'Question',
        name: 'What payment terms do you offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Pay-on-order via PayID (instant), direct EFT, or crypto (10% discount applied automatically). We don't currently offer net-7/30 credit accounts — every order is confirmed and dispatched once payment clears.",
        },
      },
      {
        '@type': 'Question',
        name: 'How often can you deliver?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Daily or weekly cold-chain delivery is available in the Ipswich/Brisbane metro area. Elsewhere in Queensland and interstate, weekly or monthly dispatch runs via tracked courier.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is The Meat Agent Halal certified?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — we hold Halal certification from AFIC (our primary certifying body), with additional certification from IFANCA and HCA. Pork and pork sausages are the only products that are not halal certified.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you supply goat, mutton, turkey or offal for a halal menu?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "We're actively expanding our halal goat, mutton, turkey and offal range based on direct demand from trade customers. Ask your trade desk contact for current availability and lead times on these lines.",
        },
      },
      {
        '@type': 'Question',
        name: 'How do I get a commercial price list?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Submit the trade application on this page or message our WhatsApp trade desk directly — our commercial manager responds within 2 business hours with pricing for your venue type and volume.',
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://themeatdirect.com.au/' },
      { '@type': 'ListItem', position: 2, name: 'Wholesale', item: 'https://themeatdirect.com.au/wholesale' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <WholesaleLandingClient />
    </>
  );
}
