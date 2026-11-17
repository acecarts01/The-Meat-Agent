// Site-wide facts used for FAQ blocks and their FAQPage schema. Every answer is a verified business fact
// (checkout rules, delivery cadence, payment methods, certification). Prices are ex-GST; GST is added at checkout.

export interface SiteFaq {
  question: string;
  answer: string;
}

export const SITE_LAST_UPDATED = '2026-11-17';
export const SITE_LAST_UPDATED_LABEL = '17 November 2026';

export const SHOP_FAQS: SiteFaq[] = [
  {
    question: 'What is the minimum order when you buy meat online from The Meat Agent?',
    answer:
      'The store minimum is $423 AUD across the whole cart. Prices are shown before 10% GST, which is added at checkout. Shipping is $25 for orders under $2,000 and free above that amount, so you can combine cuts from any category to reach the minimum.',
  },
  {
    question: 'How is the meat delivered and kept cold?',
    answer:
      'Orders ship by cold-chain courier in insulated liners, and each product page states a target of arriving below 2.5°C. Daily or weekly delivery runs in Ipswich and Brisbane, weekly delivery runs statewide and interstate by tracked courier, and monthly bulk orders go anywhere in Australia.',
  },
  {
    question: 'Is your meat halal certified?',
    answer:
      'All of our products except pork and pork sausages are halal certified. Our primary certifying body is AFIC, and we also hold certification from IFANCA and HCA. Pork and pork sausages are not halal certified, and the product page for each cut shows what it is.',
  },
  {
    question: 'How can I pay for my order?',
    answer:
      'You can pay by PayID, bank transfer or crypto. PayID is instant, and crypto payments receive an automatic 10% discount. There is no card surcharge, and orders are dispatched once payment clears. We do not currently offer net payment terms.',
  },
  {
    question: 'Do you supply restaurants, hotels and cafés?',
    answer:
      'Yes. Restaurants, hotels, cafés, caterers and resellers can open a trade account for case and trade rates, any cut state and scheduled delivery. The same $423 minimum applies. Apply on our wholesale page and our trade desk responds within two business hours.',
  },
];

export const BLOG_FAQS: SiteFaq[] = [
  {
    question: 'Who writes the buying guides on The Meat Agent blog?',
    answer:
      'The guides are written by The Meat Agent team, which supplies meat direct from our boning room in Ipswich, Queensland. Prices come from our own catalogue, sources are linked, and a guide is only updated when its facts or prices change.',
  },
  {
    question: 'Are the prices in your guides up to date?',
    answer:
      'Prices in each guide are taken from our catalogue on the date shown on the post and are listed before 10% GST. Check the product page for the current price and weight before you order, because prices and pack sizes can change.',
  },
  {
    question: 'Can I buy the products mentioned in a guide directly?',
    answer:
      'Yes. Each guide links to the matching category and product pages. The store minimum is $423 AUD across the whole cart, shipping is $25 under $2,000 and free above, and orders ship by cold-chain courier.',
  },
  {
    question: 'Do you offer trade pricing for restaurants and cafés?',
    answer:
      'Yes. Venues can open a trade account through our wholesale page for case and trade rates, with daily, weekly or monthly delivery depending on location. Payment is on order by PayID, bank transfer or crypto, and there are no net terms.',
  },
];

export const ABOUT_FAQS: SiteFaq[] = [
  {
    question: 'Who is The Meat Agent?',
    answer:
      'The Meat Agent, trading as Meat Direct, is an Australian meat supplier operated by LPJH HOLDINGS PTY LTD, ABN 55 657 961 058. Our boning room is at 164 Brisbane St, Ipswich, Queensland, and we sell to households and to trade customers.',
  },
  {
    question: 'How can I contact The Meat Agent?',
    answer:
      'Email sales@themeatdirect.com.au or call +61 480 804 189. Trade customers can apply through the wholesale page, and our trade desk responds within two business hours.',
  },
  {
    question: 'Where do you deliver?',
    answer:
      'We deliver across Australia by cold-chain courier. Daily or weekly delivery runs in Ipswich and Brisbane, weekly delivery runs statewide and interstate by tracked courier, and monthly bulk orders go anywhere in Australia.',
  },
];

export function faqJsonLd(faqs: SiteFaq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}
