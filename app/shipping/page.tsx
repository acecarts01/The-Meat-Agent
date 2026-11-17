import type { Metadata } from 'next';
import Link from 'next/link';
import { InfoPageShell } from '@/components/InfoPageShell';
import { SiteFaqSection } from '@/components/SiteFaq';
import { SHOP_FAQS, SITE_LAST_UPDATED, SITE_LAST_UPDATED_LABEL } from '@/lib/site-faqs';

export const metadata: Metadata = {
  title: 'Shipping & Delivery | Cold-Chain Meat Delivery Australia | The Meat Agent',
  description:
    'Cold-chain meat delivery across Australia: $423 minimum, $25 shipping under $2,000 and free above, arrival target below 2.5°C, PayID, bank and crypto.',
  alternates: { canonical: 'https://themeatdirect.com.au/shipping' },
  openGraph: { title: 'Shipping & Delivery | The Meat Agent', url: 'https://themeatdirect.com.au/shipping', type: 'website' },
};

export default function ShippingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://themeatdirect.com.au/shipping#page',
        url: 'https://themeatdirect.com.au/shipping',
        name: 'Shipping & Delivery',
        dateModified: SITE_LAST_UPDATED,
        isPartOf: { '@id': 'https://themeatdirect.com.au/#website' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://themeatdirect.com.au/' },
          { '@type': 'ListItem', position: 2, name: 'Shipping & Delivery', item: 'https://themeatdirect.com.au/shipping' },
        ],
      },
    ],
  };
  return (
    <InfoPageShell currentPage="home">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 text-stone-300 text-sm leading-relaxed">
        <nav aria-label="Breadcrumb" className="text-xs text-stone-400 font-mono">
          <Link href="/" className="hover:text-amber-400">Home</Link> / <span className="text-amber-400">Shipping &amp; Delivery</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Shipping &amp; Delivery</h1>
        <p className="text-xs font-mono text-stone-500">Last updated {SITE_LAST_UPDATED_LABEL}</p>
        <h2 className="text-xl font-black text-white">Minimum order, GST and shipping cost</h2>
        <p>
          The store minimum is $423 AUD across the whole cart. Prices on the site are listed before 10% GST, and GST is added at
          checkout. Shipping is $25 for orders under $2,000 and free for orders of $2,000 or more.
        </p>
        <h2 className="text-xl font-black text-white">How the cold chain works</h2>
        <p>
          Orders ship by cold-chain courier in insulated liners, packed at our boning room in Ipswich, QLD. Each product page states
          a target of arriving below 2.5°C. Daily or weekly delivery runs in Ipswich and Brisbane, weekly delivery runs statewide and
          interstate by tracked courier, and monthly bulk orders go anywhere in Australia. Interstate orders take longer than local
          runs, so plan freezer space before your order arrives.
        </p>
        <h2 className="text-xl font-black text-white">Payment</h2>
        <p>
          We take payment by PayID, bank transfer or crypto. Crypto payments receive an automatic 10% discount, and there is no card
          surcharge. Orders are dispatched once payment clears, and we do not currently offer net payment terms.
        </p>
        <h2 className="text-xl font-black text-white">Halal certification</h2>
        <p>
          All of our products except pork and pork sausages are halal certified (AFIC primary, with IFANCA and HCA also held).
        </p>
        <h2 className="text-xl font-black text-white">Trade customers</h2>
        <p>
          Restaurants, hotels, cafés and caterers can set a delivery schedule through a trade account. See our{' '}
          <Link href="/wholesale" className="text-amber-400 hover:underline">wholesale supply for restaurants and hotels</Link>.
          Problems with an order are covered by our <Link href="/returns" className="text-amber-400 hover:underline">returns and refunds policy</Link>. Questions: <Link href="/contact" className="text-amber-400 hover:underline">contact us</Link>.
        </p>
      </article>
      <SiteFaqSection title="Shipping, payment and ordering: common questions" faqs={SHOP_FAQS} />
    </InfoPageShell>
  );
}
