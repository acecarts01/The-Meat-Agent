import type { BlogPost } from './blog-data';

// Batch 8b: sausage price per kg. Replaces the older smallgoods supermarket-vs-smokehouse post.
// Keyword data: Semrush (Australia). Prices are from the site's own catalogue (ex-GST; 10% GST is added at checkout).

const FSANZ = {
  url: 'https://www.foodstandards.gov.au/consumer/prevention-of-foodborne-illness/food-safety-basics',
  label: 'Food Standards Australia New Zealand: food safety basics (storage at 5°C or colder, keeping raw and cooked food apart, cooking to 75°C)',
  source: 'FSANZ (government)',
};

const TRADE_SG =
  `Trade accounts pay on order by PayID, bank transfer or crypto. Daily or weekly cold-chain delivery runs in the Ipswich and Brisbane metro area, weekly delivery runs statewide and interstate by tracked courier, and monthly bulk orders go anywhere in Australia.`;

export const BATCH8B_POSTS: BlogPost[] = [
  {
    slug: 'sausage-price-per-kg-sausages-butcher-australia',
    title: 'Sausage Price Per Kg: Beef Snags, Boerewors and Bratwurst',
    excerpt:
      'Sausage price per kg in Australia: real prices for beef snags, boerewors, bratwurst, chipolatas and gourmet sausages, how many sausages are in a kilo, and how to buy from a sausage butcher online.',
    metaDescription:
      'Sausage price per kg in Australia: real prices for beef snags, boerewors and bratwurst, how many sausages in a kilo, and how to buy from a butcher online.',
    heroImage: '/images/products/smallgoods/Smallgoods_0004.webp',
    heroImageAlt:
      'A tray of raw sausages in clear packaging: sausage price per kg is lowest on large value packs bought from a butcher',
    niche: 'Smallgoods',
    categorySlug: 'smallgoods',
    publishedDate: '2026-11-17',
    readingMinutes: 9,
    primaryKeyword: 'sausage price',
    primaryKeywordVolume: 50,
    primaryKeywordKd: 6,
    supportingKeywords: [
      'sausages in bulk',
      'butcher sausages',
      'sausage butcher',
      'cost of sausage',
      'beef sausages',
    ],
    informationalKeyword: 'how many sausages in a kilo',
    tags: [
      'how many sausages to a kilo',
      'beef sausage',
      'kielbasa sausage australia',
      'sausage pack',
      'meats and sausages',
      'sausage in australia',
      'mince chicken sausage',
      'sausage mince',
      'mince sausage',
      'what is sausage mince',
    ],
    outboundLinks: [
      FSANZ,
      {
        url: 'https://www.youtube.com/watch?v=PkQT1irR7LQ',
        label: '"10 SAUSAGE Recipes & Dinner Ideas", ten ways to cook with sausages (Jamie Oliver)',
        source: 'YouTube: Jamie Oliver',
      },
      {
        url: 'https://www.jamieoliver.com/inspiration/the-best-sausage-recipes',
        label: 'Jamie Oliver: the best sausage recipes (pasta, casseroles, bakes and roasts)',
        source: 'jamieoliver.com',
      },
    ],
    relatedSkus: ['SG-600', 'SG-602', 'SG-612', 'BX-314'],
    sections: [
      {
        heading: 'Sausage price per kg: what you will actually pay',
        body: [
          `Sausage price per kg varies far more than most people expect, because a sausage can be a plain beef snag or a gourmet link with wagyu and truffle. This guide gives the real sausage price per kilogram for the range at Meat Direct (The Meat Agent), shows how to compare packs fairly, explains how many sausages are in a kilo, and covers how to buy from a sausage butcher online in Australia.`,
          `Every price below is the listed price before 10% GST, which is added at checkout. The store minimum is $423 AUD across the whole cart, so sausages are usually bought alongside other cuts or as part of a larger order, and shipping is $25 under $2,000 and free above that. Our pork sausages are not halal certified; all of our other sausages are covered by our halal certification.`,
          `The table converts each pack to price per kilogram, which is the only fair way to compare, because packs range from 600g to 2kg. At the low end, our 2kg beef BBQ pack is $14.45 per kg. At the high end, the wagyu and truffle sausage is $36.67 per kg. Most of the range sits between about $17 and $23 per kg.`,
        ],
        table: {
          caption: 'Sausage price per kg across our range (before GST)',
          headers: ['Sausage', 'Pack', 'Price', 'Per kg'],
          rows: [
            ['Handcrafted Traditional Beef BBQ Sausages', '2kg', '$28.90', '$14.45'],
            ['Black Angus Cocktail Franks', '1kg', '$16.00', '$16.00'],
            ['Thick Beef and Caramelised Onion Snags', '1.5kg', '$24.00', '$16.00'],
            ['Skinless Chipolata Breakfast Sausages', '1kg', '$17.50', '$17.50'],
            ['Bavarian Style Bratwurst Pork Sausages', '1kg', '$19.00', '$19.00'],
            ['Cheese Kransky with Jalapeno Hot Smoke', '1kg', '$21.00', '$21.00'],
            ['Boerewors South African Spiced Beef Spiral', '1kg', '$22.50', '$22.50'],
            ['Smoked Polish Kielbasa with Garlic', '800g', '$18.00', '$22.50'],
            ['Lamb Merguez Spicy Moroccan Links', '700g', '$18.50', '$26.43'],
            ['Duck and Plum Gourmet Dinner Sausages', '600g', '$18.00', '$30.00'],
            ['Wagyu and Truffle Handcrafted Sausages', '600g', '$22.00', '$36.67'],
          ],
        },
        image: {
          src: '/images/products/smallgoods/Smallgoods_0020.webp',
          alt: 'Cooked sausages glazed and browned on a wooden board with rosemary, showing the finished look of a butcher-style sausage',
          caption: 'Sausage price per kg is only part of the story: the cooked result and the meat content matter too.',
        },
      },
      {
        heading: 'Beef sausages: BBQ packs, snags and boerewors',
        body: [
          `Beef sausages are the everyday end of the range, and the best value sits in the large packs. Our [Handcrafted Traditional Beef BBQ Sausages 2kg Mega pack](/shop/smallgoods/handcrafted-traditional-beef-bbq-sausages-2kg-mega-sg-600/) is $28.90, which is $14.45 per kg, and our [Thick Beef and Caramelised Onion Sausage Snags](/shop/smallgoods/thick-beef-caramelised-onion-sausage-snags-1-5kg-sg-602/) are 1.5kg at $24.00, or $16.00 per kg. For a barbecue or a school fundraiser, those two packs cover a crowd at a low cost per serve.`,
          `If a serve is about 250g, which is two to three thick sausages, the BBQ pack works out at about $3.61 a serve before GST and the caramelised onion snags at $4.00. A serve of the wagyu and truffle sausage at the same weight is about $9.17, so it is a special-occasion sausage rather than a weeknight one. These per-serve figures assume a 250g serve; check the weight and count on the product page for your own portion.`,
          `Boerewors deserves its own mention. Our [Boerewors South African Spiced Beef Spiral](/shop/smallgoods/boerewors-south-african-spiced-beef-spiral-1kg-sg-612/) is 1kg at $22.50, sold as a coiled spiral rather than individual links, which is how boerewors is traditionally cooked on the braai or barbecue. It is a spiced beef sausage, so it suits a roll with onions and a sharp sauce.`,
        ],
      },
      {
        heading: 'Sausages in bulk: the variety box and trade packs',
        body: [
          `If you want sausages in bulk, the simplest route is the [Artisan Sausage Maker's Variety Box](/shop/meatboxes/artisan-sausage-maker-s-variety-box-7kg-bx-314/), which is 7kg at $135.00, or $19.29 per kg before GST. It is a mixed box, so you try several styles from one order instead of committing to a single flavour, and the price per kilogram sits in the middle of the single-pack range. Check the product page for the exact contents, because a mixed box can change between listings.`,
          `Bulk buying only makes sense if you can store the product. Sausages freeze well in their vacuum seal, and a 7kg box needs the freezer space of a few shopping bags. Freeze them as soon as the order arrives, label the date, and thaw only what you need in the fridge overnight. A box this size also pairs well with our guide to [bulk meat packs near me](/blog/bulk-meat-packs-near-me-meat-box-australia/), which shows how to plan a freezer around a larger order.`,
          `For cafés, pubs, clubs and caterers that serve sausages every week, the same logic applies at a larger scale. Our [wholesale supply for restaurants and hotels](/wholesale/) page explains how trade accounts work, and our guide to [wholesale beef near me](/blog/wholesale-beef-near-me-meat-supplier-restaurants-australia/) covers the trade pricing across the range.`,
        ],
      },
      {
        heading: 'How many sausages in a kilo?',
        body: [
          `The honest answer is that it depends on the sausage, and a pack label is the only reliable source. As a rough guide, a thick beef or pork sausage of around 100g gives about 10 to a kilo, a standard barbecue sausage of 70g to 80g gives about 12 to 14, and a thin chipolata of around 40g to 50g gives about 20 to 25. Cocktail franks are smaller again.`,
          `Why it matters: when you compare sausage price per kg between two packs, you are not comparing the cost of one sausage. A cheaper pack of thin sausages can give you more sausages per kilogram than a pack of thick ones, so the cost per sausage can be higher or lower than the price per kilogram suggests. The cost of sausage that matters is the cost per serve you actually eat, so use the number of sausages in your serve rather than guessing from the headline price.`,
          `A simple method is to weigh a few from the pack and divide. If five sausages weigh 500g, each is about 100g and a kilo holds about ten. It takes thirty seconds and removes the guesswork when you are planning for a party or a trade menu, where an error of a few sausages per kilo adds up across a large order.`,
        ],
      },
      {
        heading: 'Butcher sausages vs supermarket: what is in a sausage?',
        body: [
          `Butcher sausages and supermarket sausages can look the same in the pan and be very different in the packet. A sausage is minced meat, fat, seasoning and a casing, and some sausages also include fillers such as rusk or breadcrumbs, water and flavourings. The ingredients list on the label tells you what is in it, and comparing the meat content between two packs is the quickest way to judge value.`,
          `You will sometimes see the term sausage mince. It is the seasoned minced meat that goes inside a sausage casing, and some butchers sell it loose so you can shape rissoles, meatballs or your own sausages. Searches such as what is sausage mince and mince sausage are about the same thing: sausage meat before it is filled into a casing. We sell finished sausages in this range rather than loose sausage meat, so the products here are ready to cook.`,
          `If you are comparing a butcher sausage with a supermarket one, look at four things: the meat content, the fat content and type of meat, the casing and the price per kilogram. A higher price per kilogram is not automatically better, and a lower one is not automatically worse, but a label that lists the meat clearly and a butcher who can tell you what is in the product are good signs.`,
        ],
      },
      {
        heading: 'Sausage butcher online: gourmet, smoked and specialty links',
        body: [
          `Buying from a sausage butcher online means you choose from the whole range rather than from what a shop has on the day. Beyond beef snags, our range includes a [Smoked Polish Kielbasa with Garlic](/shop/smallgoods/smoked-polish-kielbasa-with-garlic-800g-sg-611/) at $18.00 for 800g, a Cheese Kransky with jalapeno at $21.00 for 1kg, a Lamb Merguez at $18.50 for 700g, a Duck and Plum sausage at $18.00 for 600g, and a Smoked Chicken Chorizo at $21.00 for 1kg. People searching for kielbasa sausage in Australia are usually looking for the smoked Polish style, which is a pre-smoked sausage that suits grilling or slicing into a stew.`,
          `Smoked and cured links such as kielbasa and kransky are handled differently from raw sausages, so read the pack instructions. Our [smallgoods category](/shop/smallgoods/) groups the sausages with bacon, ham, salami and other cured items, which is handy if you are building a breakfast or antipasto order up to the $423 minimum.`,
          `Our Bavarian bratwurst, Cumberland and pork and fennel sausages are pork, and our guide to [pork meat near me](/blog/pork-meat-near-me-pork-shoulder-price-australia/) covers the rest of the pork range. If your plans include a barbecue feast, our guide to [buying brisket online](/blog/buy-beef-brisket-online-price-per-kg-australia/) and our [beef mince price per kg](/blog/beef-mince-price-per-kg-australia/) guide pair well with a sausage order, because brisket, burgers and snags together make a complete menu.`,
        ],
      },
      {
        heading: 'How to cook sausages and keep them safe',
        body: [
          `Cook raw sausages gently so the outside browns without the centre staying raw. Start in a pan over medium heat or on a barbecue with a cooler zone, turn them often, and cook until the juices run clear and there is no pink in the middle. Food Standards Australia New Zealand advises cooking to a core temperature of 75°C, keeping perishable food at 5°C or colder, and keeping raw and cooked food apart, so use a separate board and tongs for raw sausages.`,
          `For recipe ideas, Jamie Oliver's video ["10 SAUSAGE Recipes & Dinner Ideas"](https://www.youtube.com/watch?v=PkQT1irR7LQ) shows ten dishes built around sausages, and his site has a collection of the [best sausage recipes](https://www.jamieoliver.com/inspiration/the-best-sausage-recipes) covering pasta, casseroles and bakes. They are general recipe sources rather than product pitches, but they show how far a pack of sausages can go beyond the barbecue.`,
          `Storage is simple. Keep raw sausages in the coldest part of the fridge in their vacuum seal until the use-by date, freeze what you will not use straight away, and thaw in the fridge. Do not refreeze raw sausages that have fully thawed unless you cook them first. Cooked sausages keep for a few days in the fridge and reheat well, and cold leftover sausage is excellent sliced into a salad or a wrap.`,
        ],
      },
      {
        heading: 'Trade supply: sausages for cafés, pubs and caterers',
        body: [
          `Cafés, pubs, clubs, caterers and canteens can buy sausages through a [trade account](/wholesale/). ` + TRADE_SG,
          `For a venue, the numbers to watch are cost per serve and consistency. A 2kg pack at $14.45 per kg costs about $3.61 for a 250g serve before GST, so a sausage sizzle or a breakfast plate has a predictable food cost. Tell us your volume and your preferred style, and we can suggest which lines suit your menu and your margin.`,
          `Common mistakes are easy to avoid. Do not compare only the price per kilogram without checking the weight and count per pack, do not buy more than your freezer and your menu can turn over, and do not assume every sausage on the page is raw: check the product page for whether a line is smoked, cured or ready to eat. Finally, remember the $423 minimum, and plan a sausage order alongside other cuts so you reach it without buying more than you need.`,
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the average sausage price per kg?',
        answer:
          'In our range, sausage price per kg runs from $14.45 for the 2kg beef BBQ pack to $36.67 for wagyu and truffle sausages, with most lines between about $17 and $23 per kg before 10% GST. The price depends on the meat, the flavourings and the pack size.',
      },
      {
        question: 'How many sausages are in a kilo?',
        answer:
          'It depends on size. A thick sausage of about 100g gives roughly 10 per kilo, a barbecue sausage of 70g to 80g gives about 12 to 14, and a thin chipolata of 40g to 50g gives about 20 to 25. Weigh a few from your pack to be sure.',
      },
      {
        question: 'Can I order only sausages from your store?',
        answer:
          'Not on their own, because the store minimum is $423 AUD across the whole cart. Add sausages to other cuts or choose the 7kg variety box. GST of 10% is added at checkout, and shipping is $25 under $2,000 and free above that.',
      },
      {
        question: 'Are butcher sausages better than supermarket sausages?',
        answer:
          'Not automatically, but a butcher can usually tell you the meat content and what is in the sausage, and a clear label lets you compare. Check the ingredients, the meat content and the price per kilogram rather than relying on the word butcher alone.',
      },
      {
        question: 'How do I cook sausages safely?',
        answer:
          'Cook them gently until there is no pink in the middle and the core reaches 75°C, which is the temperature advised by Food Standards Australia New Zealand. Keep raw sausages at 5°C or colder, and use a separate board and tongs for raw and cooked sausages.',
      },
    ],
  },
];
