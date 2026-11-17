import type { BlogPost } from './blog-data';

// Batch 3: lamb pricing guide.
// Keyword data: live Semrush (Australia), 16 Nov 2026 - see docs/semrush-live-measured-2026-11-16.csv.
// Prices are from the site's own catalogue (ex-GST; 10% GST is added at checkout).

export const BATCH3_POSTS: BlogPost[] = [
  {
    slug: 'lamb-prices-per-kg-australia',
    title: 'Lamb Prices Per Kg in Australia: Leg, Cutlets and Chops',
    excerpt:
      'Lamb prices per kg in Australia explained: what leg, cutlets, shoulder, chops and mince cost, why cuts differ so much, and how to compare value before you buy.',
    metaDescription:
      'Lamb prices per kg in Australia: real prices for leg, cutlets, shoulder, chops and mince, why cuts differ, and how to compare value before you order.',
    heroImage: '/images/products/lamb/Lamb_0002.webp',
    heroImageAlt: 'A raw boned and netted lamb roast on a white background: lamb prices per kg depend on the cut and on how much bone you pay for',
    niche: 'Lamb',
    categorySlug: 'lamb',
    publishedDate: '2026-11-16',
    readingMinutes: 10,
    primaryKeyword: 'lamb prices',
    primaryKeywordVolume: 480,
    primaryKeywordKd: 21,
    navigationalKeyword: 'price of a leg of lamb',
    supportingKeywords: [
      'leg of lamb price',
      'lamb cutlets price',
      'whole lamb price',
      'lamb near me',
      'lamb chops near me',
    ],
    informationalKeyword: 'lamb cuts',
    tags: [
      'lamb shank near me',
      'cuts of lamb',
      'lamb meat cuts',
      'cut lamb meat',
      'legs of lamb',
      'whole lamb',
      'cost of whole lamb',
      'lamb cuts of meat',
      'lamb cut',
      'lamb whole',
    ],
    outboundLinks: [
      {
        url: 'https://australianlamb.com.au/know-your-meat/lamb-cuts-chart',
        label: 'Australian Lamb: lamb cuts chart with recommended cooking methods',
        source: 'Meat & Livestock Australia (Australian Lamb)',
      },
      {
        url: 'https://www.youtube.com/watch?v=Uq_GB3ldQW8',
        label: '"How to Butcher an Entire Lamb: Every Cut of Meat Explained", a whole-lamb butchery video',
        source: 'YouTube: Bon Appetit',
      },
      {
        url: 'https://www.mla.com.au/globalassets/mla-corporate/extensions-training-and-tools/creative-commons/the-effect-of-cut-and-cooking-method-on-sheepmeat-eating-quality---cc.pdf',
        label: 'The effect of cut and cooking method on sheepmeat eating quality (factsheet)',
        source: 'Meat & Livestock Australia',
      },
    ],
    relatedSkus: ['LM-503', 'LM-501', 'LM-500'],
    sections: [
      {
        heading: 'Lamb prices per kg: what you will actually pay',
        body: [
          'Lamb prices vary far more than most shoppers expect, because one animal is sold as many very different cuts. A bone-in shoulder and a rack of cutlets can sit at opposite ends of the price range, and neither is poor value if it suits the dish. This guide shows real lamb prices per kilogram from Meat Direct (The Meat Agent), explains why each cut costs what it does, and gives you a simple way to compare value, whether you buy from us or anywhere else.',
          'Every price below is the listed price before 10% GST, which is added at checkout, and every figure is taken from our own catalogue. We do not quote other retailers&#39; prices, because prices change weekly and we would rather you compare per-kilogram figures yourself using the method in this guide.',
          'To check the price of a leg of lamb, convert the pack price to price per kilogram and compare the same weight and the same bone-in or boneless state.',
        ],
        table: {
          caption: 'Our lamb range: price and price per kg (before GST)',
          headers: ['Cut', 'Pack', 'Price', 'Per kg'],
          rows: [
            ['Lamb mince, grass-fed', '1kg', '$21.00', '$21.00'],
            ['Diced lamb leg for curry and tagine', '1kg', '$26.50', '$26.50'],
            ['Lamb shoulder, bone-in oyster cut', '2kg', '$54.00', '$27.00'],
            ['Boneless rolled lamb leg roast', '1.8kg', '$49.00', '$27.22'],
            ['Lamb chops, rosemary and garlic', '1kg', '$34.00', '$34.00'],
            ['Lamb shank duo pack', '900g', '$28.50', '$31.67'],
            ['Lamb rump steaks, Moroccan spiced', '600g', '$29.00', '$48.33'],
            ['Crown roast of lamb, 16 cutlets', '1.4kg', '$92.00', '$65.71'],
            ['French-trimmed lamb cutlets, 8 pack', '650g', '$46.00', '$70.77'],
          ],
        },
        image: {
          src: '/images/products/lamb/Lamb_0005.webp',
          alt: 'A raw lamb forequarter cut with rib bones on a white background, an example of a slow-cooking cut',
          caption: 'Forequarter cuts with bone are among the best-value lamb for slow cooking.',
        },
      },
      {
        heading: 'Leg of lamb price: the everyday roast',
        body: [
          'The leg is the classic Australian roast, and leg of lamb price is one of the most searched lamb questions. Our [Boneless Rolled Lamb Leg Roast](/shop/lamb/traditional-boneless-rolled-lamb-leg-roast-with-rosemary-lm-503) is 1.8kg at $49.00, which is $27.22 per kg, or $53.90 with GST. Because it is boneless, you pay for meat rather than bone, and it carves cleanly.',
          'When you compare legs of lamb, check whether the weight includes bone. A bone-in leg looks cheaper per kilogram but yields less meat, so the fair comparison is cost per serve rather than cost per kilogram. As a rule of thumb, boneless meat needs less weight per person, and bone-in needs more. Allow roughly 200g of boneless meat per adult, and more if you want leftovers for sandwiches.',
          'Australian Lamb, the Meat and Livestock Australia consumer site, describes the leg as usually roasted whole or boned and butterflied. Butterflied leg suits the barbecue, and bone-in legs are often seared first and finished in the oven. Rest the roast before carving so the juices settle.',
        ],
      },
      {
        heading: 'Lamb cutlets price: why the rack costs more',
        body: [
          'Lamb cutlets price is high per kilogram for a simple reason: a cutlet is a small, tender portion cut from the rack, and much of the rack&#39;s weight is bone that is trimmed away to present it. Our [French-Trimmed Lamb Cutlets](/shop/lamb/french-trimmed-southern-lamb-cutlets-8-pack-lm-500) are an 8 pack of 650g at $46.00, which is $5.75 per cutlet and $70.77 per kg before GST.',
          'For a table of four, three cutlets each means twelve cutlets, so one 8 pack plus half of another. If you want a centrepiece, the Whole Crown Roast of Lamb with 16 cutlets tied is 1.4kg at $92.00, which is $65.71 per kg and $5.75 per cutlet. Cutlets are cooked quickly at high heat, so a few minutes on each side in a hot pan is enough, followed by a short rest.',
          'Cutlets are a treat rather than an everyday meal, and that is how most households use them. If you want lamb on the table more often, shoulder, diced leg and mince deliver far more meat for the money, and they reward slow cooking.',
        ],
        image: {
          src: '/images/products/lamb/Lamb_0009.webp',
          alt: 'A raw frenched lamb rack with cleaned rib bones on a white background, the cut that cutlets come from',
          caption: 'A frenched rack: cutlets are cut from this section.',
        },
      },
      {
        heading: 'Whole lamb price and the cost of a whole lamb',
        body: [
          'Searches for whole lamb price and the cost of a whole lamb usually come from people who want to buy in bulk. We do not list a whole lamb, and we do not want to quote a figure that would mislead, so here is how to think about it instead. A whole lamb, or a lamb whole as some shoppers search for it, is sold as a carcass, and the carcass weight includes bone, fat and trim that you will not eat, so the price per kilogram looks low while the price per kilogram of meat you actually cook is higher.',
          'It also arrives as one large job: breaking the carcass into leg, shoulder, rack, loin and mince needs skill, tools and freezer space. If you have those, a whole lamb can make sense. If you do not, buying the specific cuts you will cook, already portioned and vacuum sealed, usually costs less in time and waste. Our guide to [how much meat a family of four needs](/blog/bulk-meat-packs-near-me-meat-box-australia) helps you size a freezer order without over-buying.',
          'If you are curious how a whole lamb is divided, Bon Appetit has a butchery video called "How to Butcher an Entire Lamb: Every Cut of Meat Explained". It is a US channel, so some terms differ, but it shows clearly where the leg, shoulder, rack and loin come from.',
        ],
      },
      {
        heading: 'Lamb cuts: what each cut is for',
        body: [
          'The best way to avoid overpaying is to buy the cut that suits the cooking method. Australian Lamb groups cuts by how they are best cooked. The leg is usually roasted whole or boned and butterflied. The shoulder suits slow, moist cooking such as braising or slow roasting. Cutlets are cooked quickly at high heat, loin chops suit the grill or barbecue, and shanks are slow cooked in liquid until very tender. The neck suits stews and curries.',
          'Meat and Livestock Australia&#39;s sheepmeat eating-quality factsheet explains the logic behind this: muscles that work harder contain more connective tissue, which can be partially broken down by casserole-style cooking with low heat and moisture over time. In practice, it means shoulder and shanks give you flavour and tenderness for less money when you cook them slowly, while cutlets and loin cuts are cooked fast and cost more per kilogram.',
          'People search for cuts of lamb, lamb meat cuts and lamb cuts of meat when they want a map of the animal. A simple way to remember it is front, middle and back. The front (shoulder, neck, shank) is slow-cook territory. The middle (rack, loin, chops) is quick, high-heat cooking. The back (leg, rump) is roasting and grilling. Mince and diced meat can come from several areas and suit curries, burgers and pies.',
        ],
      },
      {
        heading: 'Lamb near me, lamb chops near me and lamb shank near me',
        body: [
          'Searches such as lamb near me, lamb chops near me and lamb shank near me are about convenience. A local butcher is ideal when you want to see the meat and buy a small quantity today. Ordering online makes sense when you want halal-certified lamb, want to buy in bulk, or live where specialty cuts are hard to find.',
          'Our [Lamb Shoulder, Bone-In Oyster Cut](/shop/lamb/slow-roast-oyster-cut-lamb-shoulder-bone-in-2kg-lm-501) is 2kg at $54.00, or $27.00 per kg, and is one of the best-value roasts for a slow cook. Our Lamb Shank Duo Pack is 900g at $28.50, and our Rosemary and Garlic Lamb Chops are 1kg at $34.00. You can browse the full range in the [Southern Pasture Lamb category](/shop/lamb).',
          'Orders ship through our cold-chain courier network in insulated liners, with each product page stating the target of arriving below 2.5°C. The store has a $423 AUD minimum across the whole cart, GST of 10% is added at checkout, shipping is $25 below $2,000 and free above, and crypto orders receive an automatic 10% discount. All of our products except pork and pork sausages are halal certified; our primary certifying body is AFIC, and we also hold certification from IFANCA and HCA.',
          'If you also want lower-cost lamb cuts such as tongue and trotters, see our [guide to beef tongue and offal](/blog/beef-tongue-price-buying-guide-australia), which prices them per kilogram.',
        ],
      },
      {
        heading: 'How to compare lamb prices and lamb specials fairly',
        body: [
          'Weekly lamb specials can be good value, but they are only a bargain if the cut suits what you plan to cook. Use the same four checks every time. First, compare price per kilogram, not price per pack. Second, check whether the weight includes bone. Third, check the cut: a cheap leg is not a substitute for cutlets, and the other way round. Fourth, work out cost per serve, using about 200g of boneless meat or about 300g of bone-in meat per adult.',
          'Cost per serve at our prices, before GST and using 200g a serve for boneless cuts, comes to about $4.20 for lamb mince, $5.30 for diced leg, $5.44 for the boneless leg roast and about $14.15 for cutlets. That range is exactly why a mixed order beats an all-cutlet order, and why many households buy shoulder and mince for the week and a rack for a weekend.',
          'Do not forget the other costs that sit around the meat: delivery, minimum order and payment fees. With us, there are no card surcharges when you pay by PayID, bank transfer or crypto, and our guide to [PayID, crypto and the end of card surcharges](/blog/buying-meat-online-australia-delivery-cold-chain-payid) explains why.',
          'Chefs and buyers costing a menu can use the same per-kilogram method. We supply lamb to hotels, restaurants, cafés and caterers through our [trade accounts for commercial kitchens](/wholesale). All of our products except pork and pork sausages are halal certified, you choose the cut state (whole primal, portioned, diced to spec, vacuum-sealed, fresh chilled or snap-frozen), and trade accounts pay on order by PayID, bank transfer or crypto. ',
        ],
      },
      {
        heading: 'A worked lamb order against the $423 minimum',
        body: [
          'Here is one way to reach the minimum with a useful mix. Two bone-in shoulders at $54.00 each come to $108.00. Two boneless rolled leg roasts at $49.00 each come to $98.00. Three kilograms of lamb mince at $21.00 per kg come to $63.00. Two packs of rosemary and garlic lamb chops at $34.00 each come to $68.00. Two 8 packs of cutlets at $46.00 each come to $92.00.',
          'That adds up to $429.00 before GST, which clears the $423 minimum. GST of $42.90 brings it to $471.90, and shipping of $25 gives $496.90. Paying by crypto takes 10% off, applied automatically at checkout. The order gives you roasts for two Sundays, slow-cook shoulder, mince for weeknights and a rack of cutlets for a special meal, all in vacuum-sealed packs that freeze well.',
          'If you are weighing up lamb against other sheep meats, our guides to [lamb meat versus mutton](/blog/lamb-meat-vs-mutton-australia) and to [lamb cutlets versus lamb chops](/blog/lamb-prices-per-kg-australia) cover the differences, and our [lamb and mutton buying guide](/blog/lamb-and-mutton-near-me-australia) compares where to buy each.',
        ],
      },
      {
        heading: 'Common mistakes when comparing lamb prices',
        body: [
          'The first mistake is comparing pack prices rather than price per kilogram. The second is ignoring bone, which makes a bone-in cut look cheaper than it is. The third is buying the wrong cut for the method, for example cooking a shoulder quickly, which gives tough meat, or slow-cooking a cutlet, which wastes it. The fourth is forgetting storage: if you buy in bulk, portion and freeze straight away.',
          'The fifth is treating the cheapest cut as the best value without considering the time and skill needed to cook it. A slow-cooked shoulder is cheap per kilogram but needs hours in the oven, and for a busy weeknight, mince or diced leg may be better value in practice. The sixth is skipping the rest after cooking, which spoils even a good roast. Rest large cuts for several minutes under foil before carving.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much is lamb per kg in Australia?',
        answer:
          'It depends on the cut. In our range, lamb mince is $21.00 per kg, a bone-in shoulder is $27.00 per kg, a boneless leg roast is $27.22 per kg and cutlets are $70.77 per kg, all before 10% GST. Compare cuts by cost per serve.',
      },
      {
        question: 'Why are lamb cutlets so expensive?',
        answer:
          'Cutlets come from the rack, where each small portion carries a rib bone that is trimmed for presentation. The meat is tender and quick to cook, and demand is high. Ours are $46.00 for 8, or $5.75 each, before GST.',
      },
      {
        question: 'Do you sell a whole lamb?',
        answer:
          'No. We list lamb by the cut, including shoulder, leg roast, chops, cutlets, shanks, mince and diced leg, so you buy what you will actually cook. Cuts arrive vacuum sealed, which makes them easy to portion and freeze for later.',
      },
      {
        question: 'Is your lamb halal certified?',
        answer:
          'Yes. All of our products except pork and pork sausages are halal certified. Our primary certifying body is AFIC, and we also hold certification from IFANCA and HCA. The store minimum is $423 AUD, GST of 10% is added at checkout, and crypto orders receive 10% off.',
      },
    ],
  },
];
