import type { BlogPost } from './blog-data';

// Batch 4: beef tongue and offal guide (fills the offal gap).
// Keyword data: live Semrush (Australia), 16 Nov 2026 - see docs/semrush-live-measured-2026-11-16.csv.
// Prices are from the site's own catalogue (ex-GST; 10% GST is added at checkout).

export const BATCH4_POSTS: BlogPost[] = [
  {
    slug: 'beef-tongue-price-buying-guide-australia',
    title: 'Beef Tongue Price and Buying Guide for Australian Cooks',
    excerpt:
      'Beef tongue explained: what it costs per kg, how to choose and cook it, what else is in the offal range, and how cold-chain delivery works in Australia.',
    metaDescription:
      'Beef tongue price and buying guide: real per-kg prices for tongue, heart, tripe and lamb offal, how to cook it and how to order halal-certified cuts.',
    heroImage: '/images/products/beef/Beef_0021.webp',
    heroImageAlt: 'Raw beef short ribs on a white background, shown as a stand-in for the whole-animal cuts that sit alongside beef tongue and other offal',
    niche: 'Offal',
    categorySlug: 'beef',
    publishedDate: '2026-11-16',
    readingMinutes: 10,
    primaryKeyword: 'beef tongue',
    primaryKeywordVolume: 1000,
    primaryKeywordKd: 23,
    supportingKeywords: [
      'cow tongue beef',
      'tongue of cow',
      'beef tongue meat',
      'beef tongue near me',
      'cow tongue near me',
    ],
    informationalKeyword: 'beef offal',
    tags: [
      'offal meat',
      'meat and offal',
      'what is offal meat',
      'beef offals',
      'buy beef offals online',
      'beef tounge',
      'beef toung',
      'meat offal',
      'offel',
      'offal lamb',
    ],
    outboundLinks: [
      {
        url: 'https://www.foodstandards.gov.au/consumer/prevention-of-foodborne-illness/food-safety-basics',
        label: 'Food Standards Australia New Zealand: food safety basics (cooking, storage and keeping raw and cooked food apart)',
        source: 'FSANZ (government)',
      },
      {
        url: 'https://www.Mla.com.au/globalassets/mla-corporate/prices--markets/documents/trends--analysis/mla_mi-coproducts-info-sheet_feb-2024_180224.pdf',
        label: 'Meat & Livestock Australia co-products information sheet (how edible offal is used)',
        source: 'Meat & Livestock Australia',
      },
      {
        url: 'https://www.youtube.com/watch?v=814MQjTjnfU',
        label: '"Beef Tongue Tacos with Tomatillo Salsa", a video with chapters on purchasing and cooking tongue and cleaning and slicing the meat',
        source: 'YouTube: Rick Bayless',
      },
    ],
    relatedSkus: ['BF-139', 'BF-140', 'BF-141'],
    sections: [
      {
        heading: 'Beef tongue: what it is and what it costs',
        body: [
          'Beef tongue is one of the most rewarding cuts you can cook, and one of the least expensive per serve once you know how to handle it. It is a single, large muscle with a tough skin that must be removed, and with slow, moist cooking it turns tender and rich. This guide gives you real prices from Meat Direct (The Meat Agent), explains how to choose and cook it, covers the rest of our offal range, and shows how ordering by cold-chain delivery works in Australia.',
          'Every price below is the listed price before 10% GST, which is added at checkout, and all of our products except pork and pork sausages are halal certified. Our primary certifying body is AFIC, and we also hold certification from IFANCA and HCA.',
        ],
        table: {
          caption: 'Our beef tongue and offal range (price before GST)',
          headers: ['Cut', 'Pack', 'Price', 'Per kg'],
          rows: [
            ['Whole beef tongue (ox tongue)', '1.2kg', '$28.79', '$23.99'],
            ['Beef heart', '900g', '$11.69', '$12.99'],
            ['Beef tripe', '1kg', '$7.99', '$7.99'],
            ['Lamb kidney', '500g', '$6.50', '$13.00'],
            ['Lamb tongue', '700g', '$13.99', '$19.99'],
            ['Lamb brain', '600g', '$12.99', '$21.65'],
            ['Lamb trotters (paya)', '1kg', '$9.99', '$9.99'],
            ['Goat and lamb offal trio (liver, kidney, heart)', '900g', '$18.99', '$21.10'],
          ],
        },
        image: {
          src: '/images/products/lamb/Lamb_0004.webp',
          alt: 'Raw bone-in lamb shank pieces on a white background, an example of the slow-cooking cuts that suit the same moist methods as tongue',
          caption: 'Tongue, shanks and other working cuts all reward slow, moist cooking.',
        },
      },
      {
        heading: 'Beef tongue meat: how to choose a good one',
        body: [
          'When you buy beef tongue meat, you are buying a whole muscle, so look at the basics. It should be fresh, with a clean colour and no off smell, and it should be firm rather than slimy. The skin will be rough and pale, and it is meant to be there; you remove it after cooking. Check that the pack is intact and the product is cold.',
          'Our [Whole Beef Tongue (Ox Tongue)](/shop/beef/whole-beef-tongue-ox-tongue-bf-139) is a 1.2kg tongue at $28.79 before GST, which is $23.99 per kg and $31.67 with GST. A tongue this size feeds about four to six people when sliced, depending on what you serve with it, and the leftovers make excellent sandwiches.',
          'Price per kilogram is the right comparison, but remember that a whole tongue includes the skin and some trim, so your cost per serve of finished meat is a little higher than the headline figure. Even so, it compares well with premium cuts, and the flavour is rich and beefy.',
          'It also helps to think about portions. A 1.2kg tongue will lose some weight in cooking and peeling, so for a table of six, plan on one tongue and serve it with generous sides. If you are cooking for a crowd, two tongues cooked together in a large pot take no more effort than one, and cooked tongue freezes well, so there is little waste.',
        ],
      },
      {
        heading: 'Cow tongue beef, tongue of cow and ox tongue: the same cut',
        body: [
          'Shoppers search for cow tongue beef, tongue of cow, ox tongue and beef tongue, and they all describe the same product: the tongue of a bovine animal. In Australia the product is usually sold as beef tongue or ox tongue, and there is no meaningful difference between the names. Our product page uses ox tongue in its title for that reason.',
          'Meat and Livestock Australia&#39;s co-products information sheet lists tongue among edible offal that is used in Latin and Asian cuisine, and notes that its usage in food service is increasing. That matches what many Australian cooks are finding: tongue is a staple in tacos de lengua, in Japanese grilled dishes and in Eastern European and Middle Eastern cooking, and it is a classic of traditional British and Irish kitchens too.',
        ],
      },
      {
        heading: 'How to cook beef tongue step by step',
        body: [
          'The method is simple and forgiving. Rinse the tongue, place it in a large pot, cover it with water and add aromatics such as onion, carrot, celery, bay leaf and peppercorns. Bring it to a boil, skim, then reduce the heat and simmer gently with the lid partly on. Tongue is commonly simmered for around two to three hours, depending on size, and the test is tenderness: a fork or skewer should slide in easily.',
          'While the tongue is still warm, lift it from the pot and peel off the skin with a small knife; it comes away more easily when warm. Trim any gristle at the base, then slice across the grain. You can serve it as it is with a sharp sauce such as salsa verde or mustard, fry the slices until crisp, chop it for tacos, or pickle it. The cooking liquid makes a good stock.',
          'If you want to see the process on video, Rick Bayless has a Taco Manual video called "Beef Tongue Tacos with Tomatillo Salsa" with chapters on purchasing and cooking tongue, cleaning and slicing the meat, and assembling the tacos. It is a Mexican recipe, but the preparation steps apply to any beef tongue. Because tongue is a hard-working muscle, slow moist cooking is the right approach. Meat and Livestock Australia&#39;s sheepmeat factsheet explains the principle for working muscles: connective tissue can be partially broken down by casserole-style cooking with low heat and moisture over time. The same logic is why tongue, tripe and heart reward patience.',
          'Serving ideas are endless. Thin slices on rye with mustard and pickles are a classic. Chopped tongue in warm tortillas with onion, coriander and lime is quick and popular. Slices crisped in a hot pan with butter make a rich starter, and diced tongue stirred through a tomato sauce makes an easy pasta topping. Whatever you choose, keep the slices thin, because the texture is best that way.',
          'Cook the tongue a day ahead if you can. It slices more neatly when cold, and you can reheat the slices gently in a little of the cooking liquid. That makes it a very practical choice for entertaining, since most of the work is done before your guests arrive.',
        ],
      },
      {
        heading: 'Beef offal: what else is in the range',
        body: [
          'Beef offal covers more than tongue, and the cheapest cuts per kilogram are some of the most useful. Our [Beef Tripe](/shop/beef/beef-tripe-bf-140) is 1kg at $7.99, and the MLA co-products sheet notes that tripe is often used in moisture-based cooking methods such as stews and soups. Our [Beef Heart](/shop/beef/beef-heart-bf-141) is 900g at $11.69, or $12.99 per kg, and the same sheet describes heart as a slow-cook meat.',
          'On the lamb side, the [Lamb Tongue](/shop/lamb/lamb-tongue-lm-512) is 700g at $13.99, a smaller, quicker alternative to beef tongue, and the [Lamb Trotters (Paya)](/shop/lamb/lamb-trotters-paya-lm-511) are 1kg at $9.99 for the slow-cooked dish of the same name. We also list lamb kidney, lamb brain and a goat and lamb offal trio.',
          'If you are new to offal, start with heart or tripe in a stew, because they are forgiving and the cooking method is familiar. Move on to tongue once you are comfortable with the simmer-and-peel routine.',
        ],
      },
      {
        heading: 'Offal meat: what is offal meat, and why cook with it?',
        body: [
          'People often ask what is offal meat. Offal, sometimes spelled offel in searches, means the edible organs and other parts of an animal that are not the main muscle cuts, including tongue, heart, kidney, liver, tripe and trotters. You will also see it called variety meat. Searches for meat offal, meat and offal and beef offals are all looking for the same thing.',
          'The reasons to cook with offal are practical. It is generally inexpensive per kilogram, it makes use of the whole animal, and it is central to many cuisines, from Mexican tacos and Italian trippa to Middle Eastern and South Asian dishes. The MLA co-products sheet lists a long line of uses for each part around the world, from slow-cooked stews to grilled and fried dishes. If you want the lamb version of the same idea, offal lamb dishes such as kidney, tongue and trotters follow the same slow, moist logic.',
        ],
      },
      {
        heading: 'Beef tongue near me: buying online',
        body: [
          'Searches such as beef tongue near me and cow tongue near me are about convenience, and many butchers will order tongue if you ask. If your local shop does not stock it, or you want halal-certified offal and a consistent supply, you can buy beef offals online from us and have it delivered. Orders ship through our cold-chain courier network in insulated liners, with each product page stating the target of arriving below 2.5°C.',
          'There is one practical point to plan for: our store has a $423 AUD minimum across the whole order, and offal is inexpensive, so you will combine it with other cuts. For example, three whole tongues ($86.37), four kilograms of tripe ($31.96), two beef hearts ($23.38), two lamb tongues ($27.98) and two lamb trotters ($19.98) come to $189.67. Add two scotch fillet steak packs ($89.00), two mega bulk beef mince packs ($69.80) and four thick-cut rump steak packs ($128.00), and the order reaches $476.47 before GST.',
          'GST of 10% adds $47.65, and shipping is $25 below $2,000, giving $549.12. Crypto orders receive an automatic 10% discount, and you can also pay by PayID or bank transfer. You can browse the full range in the [Beef category](/shop/beef), and our guide to [how the $423 minimum works](/blog/bulk-meat-packs-near-me-meat-box-australia) shows how households reach it without over-buying.',
          'Restaurants, hotels and caterers that put tongue, tripe or heart on the menu can order through our [trade supply for restaurants and hotels](/wholesale), in the cut state the kitchen needs. All of our products except pork and pork sausages are halal certified, you choose the cut state (whole primal, portioned, diced to spec, vacuum-sealed, fresh chilled or snap-frozen), and trade accounts pay on order by PayID, bank transfer or crypto. ',
        ],
      },
      {
        heading: 'Food safety and storage for tongue and other offal',
        body: [
          'Offal needs the same care as any raw meat, and a little more attention to cooking. Food Standards Australia New Zealand advises keeping perishable food at 5°C or colder, keeping raw meat away from foods that will be eaten uncooked, and using separate boards and knives for raw meat. It also lists liver and other offal among the foods to cook to at least 75°C in the centre.',
          'In practice, that means keeping your offal on the bottom shelf of the fridge in a covered container, cooking it within the use-by date or freezing it promptly, and using a thermometer for cuts such as heart, kidney and liver. For tongue, the long simmer takes it well beyond that temperature, but the handling rules still apply: wash your hands and your board after handling the raw tongue, and do not put cooked slices on a plate that held the raw one.',
          'For storage, freeze offal in its vacuum seal if you will not cook it within a few days. Thaw it in the fridge, not on the bench, and cook it soon after thawing. A cooked tongue keeps well in the fridge for sandwiches and in the freezer sliced and layered with baking paper.',
        ],
      },
      {
        heading: 'Common mistakes with beef tongue and offal',
        body: [
          'The most common mistake is cooking tongue too fast or for too short a time, which leaves it tough and makes the skin hard to peel. The second is letting it cool before peeling, when the skin is much harder to remove. The third is slicing with the grain instead of across it. The fourth is skipping seasoning in the cooking liquid, which gives bland meat.',
          'Other mistakes are about buying: choosing a pack without checking the weight, assuming all offal is cooked the same way, or not planning freezer space. Offal is best bought in quantities you will use, and portioned straight away. If in doubt, start with one tongue, one heart and a pack of tripe, and learn which you like.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much is beef tongue per kg?',
        answer:
          'Our whole beef tongue is 1.2kg at $28.79, which is $23.99 per kg, before 10% GST. Beef heart is $12.99 per kg and beef tripe is $7.99 per kg. Compare per kilogram, and remember that a whole tongue includes the skin you will peel off.',
      },
      {
        question: 'How long does beef tongue take to cook?',
        answer:
          'Commonly around two to three hours of gentle simmering, depending on size. Test with a fork for tenderness, then peel the skin while it is still warm. If the tongue is firm, simmer it longer rather than raising the heat.',
      },
      {
        question: 'Can I order only offal?',
        answer:
          'Not on its own, because the store minimum is $423 AUD across the whole cart and offal is inexpensive per kilogram. Combine it with steaks, mince or roasts. GST of 10% is added at checkout, and shipping is $25 under $2,000 and free above.',
      },
      {
        question: 'Is your beef tongue halal certified?',
        answer:
          'Yes. All of our products except pork and pork sausages are halal certified, including beef tongue, heart and tripe. Our primary certifying body is AFIC, and we also hold certification from IFANCA and HCA. Ask any supplier to name the certifier and show the certificate.',
      },
    ],
  },
];
