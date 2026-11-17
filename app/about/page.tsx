import type { Metadata } from 'next';
import Link from 'next/link';
import { InfoPageShell } from '@/components/InfoPageShell';
import { SiteFaqSection } from '@/components/SiteFaq';
import { ABOUT_FAQS, SITE_LAST_UPDATED, SITE_LAST_UPDATED_LABEL } from '@/lib/site-faqs';

export const metadata: Metadata = {
  title: 'About The Meat Agent | Australian Meat Supplier, Ipswich QLD',
  description:
    'The Meat Agent (Meat Direct) is an Australian meat supplier with a boning room in Ipswich, QLD. ABN 55 657 961 058. Beef, lamb, chicken, wagyu, game and smallgoods, delivered cold-chain.',
  alternates: { canonical: 'https://themeatdirect.com.au/about' },
  openGraph: { title: 'About The Meat Agent', url: 'https://themeatdirect.com.au/about', type: 'website' },
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': 'https://themeatdirect.com.au/about#page',
        url: 'https://themeatdirect.com.au/about',
        name: 'About The Meat Agent',
        dateModified: SITE_LAST_UPDATED,
        about: { '@id': 'https://themeatdirect.com.au/#organization' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://themeatdirect.com.au/' },
          { '@type': 'ListItem', position: 2, name: 'About', item: 'https://themeatdirect.com.au/about' },
        ],
      },
    ],
  };
  return (
    <InfoPageShell currentPage="about">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 text-stone-300 text-sm leading-relaxed">
        <nav aria-label="Breadcrumb" className="text-xs text-stone-400 font-mono">
          <Link href="/" className="hover:text-amber-400">Home</Link> / <span className="text-amber-400">About</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">About The Meat Agent</h1>
        <p className="text-xs font-mono text-stone-500">Last updated {SITE_LAST_UPDATED_LABEL}</p>
        <p>
          The Meat Agent, trading as Meat Direct, is an Australian meat supplier operated by LPJH HOLDINGS PTY LTD, ABN 55 657
          961 058. Our boning room is at 164 Brisbane St, Ipswich, Queensland. We sell beef, wagyu, lamb, chicken, goat and
          mutton, pork, game, seafood, veal and smallgoods, online, to households and to trade customers.
        </p>
        <h2 className="text-xl font-black text-white">What we sell and how it reaches you</h2>
        <p>
          Orders ship by cold-chain courier in insulated liners, and each product page states a target of arriving below 2.5°C.
          Prices are listed before 10% GST, which is added at checkout. The store minimum is $423 AUD across the whole cart, and
          shipping is $25 for orders under $2,000 and free above that. See our{' '}
          <Link href="/shipping" className="text-amber-400 hover:underline">shipping and delivery</Link> page for the full detail.
        </p>
        <h2 className="text-xl font-black text-white">Halal certification</h2>
        <p>
          All of our products except pork and pork sausages are halal certified. Our primary certifying body is AFIC, and we also
          hold certification from IFANCA and HCA.
        </p>
        <h2 className="text-xl font-black text-white">Supplying restaurants, hotels and cafés</h2>
        <p>
          Restaurants, hotels, cafés, caterers and resellers can open a trade account for case and trade rates, any cut state and
          scheduled delivery. Trade accounts pay on order by PayID, bank transfer or crypto. Apply through our{' '}
          <Link href="/wholesale" className="text-amber-400 hover:underline">wholesale supply for restaurants and hotels</Link> page.
        </p>
        <h2 className="text-xl font-black text-white">Contact</h2>
        <p>
          Email <a href="mailto:sales@themeatdirect.com.au" className="text-amber-400 hover:underline">sales@themeatdirect.com.au</a>{' '}
          or call +61 480 804 189. More detail is on our <Link href="/contact" className="text-amber-400 hover:underline">contact</Link> page.
        </p>
      </article>
      <SiteFaqSection title="About The Meat Agent: common questions" faqs={ABOUT_FAQS} />
    </InfoPageShell>
  );
}
