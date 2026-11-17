import type { Metadata } from 'next';
import Link from 'next/link';
import { InfoPageShell } from '@/components/InfoPageShell';
import { SiteFaqSection } from '@/components/SiteFaq';
import { ABOUT_FAQS, SITE_LAST_UPDATED, SITE_LAST_UPDATED_LABEL } from '@/lib/site-faqs';

export const metadata: Metadata = {
  title: 'Contact The Meat Agent | Email, Phone & Trade Desk',
  description:
    'Contact The Meat Agent (Meat Direct): email sales@themeatdirect.com.au, phone +61 480 804 189, boning room at 164 Brisbane St, Ipswich QLD. Trade desk replies within two business hours.',
  alternates: { canonical: 'https://themeatdirect.com.au/contact' },
  openGraph: { title: 'Contact The Meat Agent', url: 'https://themeatdirect.com.au/contact', type: 'website' },
};

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': 'https://themeatdirect.com.au/contact#page',
        url: 'https://themeatdirect.com.au/contact',
        name: 'Contact The Meat Agent',
        dateModified: SITE_LAST_UPDATED,
        about: { '@id': 'https://themeatdirect.com.au/#organization' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://themeatdirect.com.au/' },
          { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://themeatdirect.com.au/contact' },
        ],
      },
    ],
  };
  return (
    <InfoPageShell currentPage="contact">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 text-stone-300 text-sm leading-relaxed">
        <nav aria-label="Breadcrumb" className="text-xs text-stone-400 font-mono">
          <Link href="/" className="hover:text-amber-400">Home</Link> / <span className="text-amber-400">Contact</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Contact The Meat Agent</h1>
        <p className="text-xs font-mono text-stone-500">Last updated {SITE_LAST_UPDATED_LABEL}</p>
        <h2 className="text-xl font-black text-white">How to reach us</h2>
        <ul className="space-y-2">
          <li>Email: <a href="mailto:sales@themeatdirect.com.au" className="text-amber-400 hover:underline">sales@themeatdirect.com.au</a></li>
          <li>Phone: <a href="tel:+61480804189" className="text-amber-400 hover:underline">+61 480 804 189</a></li>
          <li>Boning room: 164 Brisbane St, Ipswich QLD 4305</li>
          <li>Business address: 22 Wilson Pl, Harrisville QLD 4307</li>
          <li>Entity: LPJH HOLDINGS PTY LTD, ABN 55 657 961 058</li>
        </ul>
        <h2 className="text-xl font-black text-white">Trade enquiries</h2>
        <p>
          Restaurants, hotels, cafés and caterers can apply for a trade account on our{' '}
          <Link href="/wholesale" className="text-amber-400 hover:underline">wholesale supply for restaurants and hotels</Link> page.
          Our trade desk responds within two business hours.
        </p>
        <h2 className="text-xl font-black text-white">Orders and delivery</h2>
        <p>
          For delivery times, minimum order and payment, see our{' '}
          <Link href="/shipping" className="text-amber-400 hover:underline">shipping and delivery</Link> page.
        </p>
        <p>
          See our <Link href="/returns" className="text-amber-400 hover:underline">returns and refunds policy</Link> and our{' '}
          <Link href="/privacy" className="text-amber-400 hover:underline">privacy policy</Link>.
        </p>
      </article>
      <SiteFaqSection title="Contact and delivery: common questions" faqs={ABOUT_FAQS} />
    </InfoPageShell>
  );
}
