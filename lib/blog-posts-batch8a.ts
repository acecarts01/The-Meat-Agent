import type { BlogPost } from './blog-data';

// Batch 8a: wholesale beef / trade supply. Replaces the older ABN post.
// Keyword data: Semrush (Australia). Prices are from the site's own catalogue (ex-GST; 10% GST is added at checkout).

const TRADE =
  `All of our products except pork and pork sausages are halal certified, you choose the cut state (whole primal, portioned, diced to spec, vacuum-sealed, fresh chilled or snap-frozen), and trade accounts pay on order by PayID, bank transfer or crypto. Daily or weekly cold-chain delivery runs in the Ipswich and Brisbane metro area, weekly delivery runs statewide and interstate by tracked courier, and monthly bulk orders go anywhere in Australia.`;

export const BATCH8A_POSTS: BlogPost[] = [
  {
    slug: 'wholesale-beef-near-me-meat-supplier-restaurants-australia',
    title: 'Wholesale Beef Near Me: Meat Supplier for Restaurants',
    excerpt:
      'Wholesale beef near me for restaurants, hotels, cafés and caterers: real trade prices per kg, cut-to-spec primals and mince, cold-chain delivery and how to check a supplier.',
    metaDescription:
      'Wholesale beef near me for restaurants, hotels and cafés: real prices per kg, cut-to-spec primals and mince, pay-on-order and cold-chain delivery.',
    heroImage: '/images/products/meatboxes/MeatBoxes_0022.webp',
    heroImageAlt:
      'A raw beef steak on a white background: wholesale beef near me, supplied as primals, steaks and mince for restaurants and cafés',
    niche: 'Wholesale',
    categorySlug: 'meatboxes',
    publishedDate: '2026-11-17',
    readingMinutes: 10,
    primaryKeyword: 'wholesale beef near me',
    primaryKeywordVolume: 90,
    primaryKeywordKd: 25,
    navigationalKeyword: 'beef wholesalers',
    supportingKeywords: [
      'bulk meat perth',
      'wholesale lamb melbourne',
      'wholesale beef',
      'wholesale beef mince',
      'wholesale meat supplier',
    ],
    informationalKeyword: 'whole ribeye wholesale',
    tags: [
      'bulk meat brisbane',
      'wholesale meat melbourne',
      'wholesale meat perth',
      'wholesale butcher melbourne',
      'bulk beef perth',
      'meat suppliers to restaurants',
      'fresh meat suppliers',
      'wholesale butcher brisbane',
      'wholesale meat brisbane',
      'bulk meat delivery brisbane',
    ],
    outboundLinks: [
      {
        url: 'https://www.abr.gov.au/business-super-funds-charities/applying-abn',
        label: 'Australian Business Register: applying for an ABN (and how the public ABN lookup works)',
        source: 'Australian Business Register (government)',
      },
      {
        url: 'https://www.foodstandards.gov.au/business/food-safety',
        label: 'Food Standards Australia New Zealand: food safety guidance for food businesses',
        source: 'FSANZ (government)',
      },
      {
        url: 'https://www.foodstandards.gov.au/business/safety/factsheets/receivingfoodsafely',
        label: 'Food Standards Australia New Zealand: receiving food safely (a business must check delivered food arrives at the correct temperature)',
        source: 'FSANZ (government)',
      },
      {
        url: 'https://www.youtube.com/watch?v=n63BXokd5dI',
        label: '"How Chefs Make Cheap Meat Taste Expensive", a chef-led video on getting more from cheaper cuts (Andy Cooks)',
        source: 'YouTube: Andy Cooks',
      },
    ],
    relatedSkus: ['BX-309', 'BX-318', 'BX-320', 'BF-114', 'BF-108'],
    sections: [
      {
        heading: 'Wholesale beef near me: what trade buyers actually need',
        body: [
          `Searching for wholesale beef near me usually means one of two things: you run a kitchen and want a dependable supplier, or you buy in volume and want a lower price per kilogram than retail packs. Meat Direct (The Meat Agent) supplies both. This guide sets out real trade prices from our catalogue, how our delivery and payment work for restaurants, hotels, cafés and caterers, and the checks to make before you trust any wholesale meat supplier with your menu.`,
          `Every price in this guide is the listed price before 10% GST, which is added at checkout. The store minimum is $423 AUD across the whole cart, shipping is $25 under $2,000 and free above, and there is no separate wholesale minimum: trade buyers meet the same $423 threshold but buy at case and trade rates rather than single-pack retail prices. Our boning room is at 164 Brisbane St, Ipswich.`,
          `What a kitchen needs from a supplier is simple to list and hard to find together: consistent cuts, a stated weight on every product, cold-chain delivery, a clear price per kilogram and a person who answers. The rest of this guide shows how we meet each of those, so you can compare us with any other wholesale meat supplier on the same terms.`,
          `Venues comparing beef wholesalers should apply the same checks to every supplier: price per kilogram, delivery temperature, minimums and payment terms.`,
        ],
        image: {
          src: '/images/products/beef/Beef_0021.webp',
          alt: 'Raw beef short ribs on a white background, one of the larger cuts a trade kitchen can order whole or portioned',
          caption: 'Trade buyers can order cuts whole, portioned or diced to specification.',
        },
      },
      {
        heading: 'Wholesale beef price: what our trade range costs per kg',
        body: [
          `Wholesale beef price is easiest to judge as a price per kilogram, because pack sizes differ. The table below converts the pack prices in our range to price per kilogram, before GST. The bulk crates and boxes sit at the bottom of the range, and the single primal and mince packs show where a smaller trade order lands.`,
          `Read the table by what you cook. A café that sells burgers wants mince at the lowest price per kilogram, so the 2kg bulk mince pack at $17.45 per kg and the 12kg Lean Mince and Burger Box at $16.25 per kg are the lines to start with. A steakhouse wants a primal it can portion in-house, so the cube roll at $56.58 per kg is the better comparison. A caterer feeding a large event usually buys the 45kg crate or a mixed box, because the price per kilogram is close to $20 and one order covers several dishes.`,
        ],
        table: {
          caption: 'Wholesale beef and bulk box prices, per kg (before GST)',
          headers: ['Product', 'Pack', 'Price', 'Per kg'],
          rows: [
            ['Lean Mince and Burger High-Volume Box', '12kg', '$195.00', '$16.25'],
            ['Mega Bulk Beef Mince, 2kg value pack', '2kg', '$34.90', '$17.45'],
            ['Premium Grass-Fed Beef Mince, family pack', '1kg', '$18.90', '$18.90'],
            ['The $423 Threshold Gateway Direct Box', '22kg', '$425.00', '$19.32'],
            ['Sub-Zero Direct Wholesale Restock Crate', '45kg', '$890.00', '$19.78'],
            ['The Whole Beast Half-Cow Butchery Share', '90kg', '$2,150.00', '$23.89'],
            ['The Essential Family Bulk Meat Box', '18kg', '$448.90', '$24.94'],
            ['Full Packer Competition Angus Brisket, point end', '5.5kg', '$148.00', '$26.91'],
            ['Whole Scotch Fillet (cube roll) primal', '3.8kg', '$215.00', '$56.58'],
          ],
        },
      },
      {
        heading: 'Wholesale beef mince for burgers, meatballs and sauces',
        body: [
          `Wholesale beef mince is the line most kitchens buy first, because it goes into the most dishes and the saving compounds. Our [Mega Bulk Beef Mince 2kg Value Pack](/shop/beef/mega-bulk-beef-mince-2kg-value-pack-bf-108/) is $34.90, or $17.45 per kg, and the [Lean Mince and Burger High-Volume Box](/shop/meatboxes/lean-mince-burger-high-volume-box-12kg-bx-318/) is 12kg at $195.00, which is $16.25 per kg. For a quick sense of cost per portion, a 150g burger patty from the bulk pack costs about $2.62 before GST, and the same patty from the 12kg box costs about $2.44.`,
          `A café selling 200 burgers a week would use about 30kg of mince in patties alone. At $17.45 per kg that is $523.50 a week before GST, and the same volume at the 1kg family-pack price of $18.90 would be $567.00, a difference of $43.50 a week or roughly $2,262 a year. Those numbers are for the mince only and will vary with your patty weight and wastage, but they show why a trade account tends to pay for itself within a few orders.`,
          `Mince also suits the back of house: bolognese, chilli, meatballs, pie fillings and sausage rolls all start with the same product. If you want a deeper look at the cuts and grind, our guide to [beef mince price per kg](/blog/beef-mince-price-per-kg-australia/) explains what to check on a pack, and our notes on portioning and freezing apply to a trade freezer as well as a home one. Venues that also serve sausages can compare packs in our guide to [sausage price per kg](/blog/sausage-price-per-kg-sausages-butcher-australia/), and our guide to [pork shoulder price](/blog/pork-meat-near-me-pork-shoulder-price-australia/) covers belly, shoulder and loin for the same menu.`,
        ],
      },
      {
        heading: 'Whole ribeye wholesale: the cube roll (scotch fillet) primal',
        body: [
          `If you search for whole ribeye wholesale, the Australian name to look for is the cube roll, which butchers and menus also call scotch fillet. It is the ribeye muscle sold as a whole primal, so you portion the steaks yourself. Our [Whole Scotch Fillet Cube Roll Primal](/shop/beef/whole-scotch-fillet-cube-roll-primal-3-8kg-bf-114/) is 3.8kg at $215.00, which is $56.58 per kg.`,
          `The case for buying the primal is the price per kilogram. Our pre-cut scotch fillet steaks cost more per kilogram than the primal, because you are paying for the cutting, trimming and packing. For a venue with a sharp knife and a competent cook, the primal gives you control over steak thickness and weight, and the trim goes into stock, mince or a staff meal. After trimming you will have less than 3.8kg of steak, so ask us for the typical yield if you want to cost a dish precisely rather than assuming one.`,
          `To put numbers on a menu item, a 250g serve cut from the primal costs $14.15 before trim. Our pre-cut [Southern Gold Angus Scotch Fillet Steaks](/shop/beef/southern-gold-angus-scotch-fillet-steaks-bf-101/) are $44.50 for two 300g steaks, which is $74.17 per kg, so the primal is about 24% cheaper per kilogram before trimming. The honest comparison is always the same cut against the same cut, and our guide to [rump steak price per kg](/blog/rump-steak-price-per-kg-australia/) walks through the primal-versus-pre-cut arithmetic with real figures.`,
        ],
      },
      {
        heading: 'Bulk meat Perth and wholesale lamb Melbourne: interstate supply',
        body: [
          `Not every trade buyer is near Brisbane, and we ship further than the metro runs. Daily or weekly cold-chain delivery covers Ipswich and Brisbane, weekly delivery runs statewide and interstate by tracked courier, and monthly bulk orders go anywhere in Australia. That means a venue looking for bulk meat Perth or a restaurant group asking about wholesale lamb Melbourne can order from us, with the delivery cadence agreed at the start rather than assumed.`,
          `Interstate buying works best when you plan around the courier. Order a larger quantity less often, choose vacuum-sealed or snap-frozen cuts so the product holds its condition in transit, and have freezer space ready on arrival. Each product page states the target of arriving below 2.5°C, and the boxes ship in insulated liners. If you want lamb in the mix, our guide to [lamb prices per kg](/blog/lamb-prices-per-kg-australia/) lists the current cuts and prices from the same catalogue.`,
          `The honest limit is time. A weekly tracked courier is slower than a same-day local run, so an interstate kitchen should hold a buffer of stock rather than ordering for tomorrow. For many venues that is not a problem, because the saving on volume and the consistent specification outweigh the extra planning.`,
        ],
      },
      {
        heading: 'Choosing a wholesale meat supplier: checks that protect you',
        body: [
          `Whoever you choose, check five things before the first order. First, verify the business: the Australian Business Register publishes a free public ABN lookup, and the [Australian Business Register](https://www.abr.gov.au/business-super-funds-charities/applying-abn) explains how ABNs work. An ABN confirms registration and the legal entity name; it does not confirm food safety or quality, so treat it as one check among several. Our ABN is 55 657 961 058, and every tax invoice shows it.`,
          `Second, ask about food safety. Food businesses handling meat are expected to control temperature and cross-contamination, and [Food Standards Australia New Zealand](https://www.foodstandards.gov.au/business/food-safety) publishes guidance for food businesses. Ask a supplier how they keep product cold, what the delivery temperature target is, and how they pack for transit. Ours is a target of arriving below 2.5°C in insulated liners. The FSANZ factsheet on [receiving food safely](https://www.foodstandards.gov.au/business/safety/factsheets/receivingfoodsafely) says a food business must make sure potentially hazardous food, which includes raw meat, arrives at the correct temperature, so take a probe thermometer to your goods-in checks.`,
          `Third, ask for the specification in writing: cut name, weight, state (chilled or frozen) and packaging. Fourth, check certification if your venue needs it. All of our products except pork and pork sausages are halal certified, our primary certifying body is AFIC, and we also hold IFANCA and HCA certification, so ask any supplier to name the certifier and show the certificate. Fifth, find out how you pay and what happens when something goes wrong: we take payment on order by PayID, bank transfer or crypto, and our trade desk answers questions within two business hours.`,
        ],
      },
      {
        heading: 'Trade supply: how we work with restaurants, hotels and caterers',
        body: [
          `Restaurants, hotels, cafés, caterers, clubs and canteens can open a trade account through our [wholesale supply for restaurants and hotels](/wholesale/) page. ` + TRADE,
          `There are no net payment terms: every order is confirmed and dispatched once payment clears, which keeps pricing sharp and removes credit risk on both sides. If you pay by crypto, a 10% discount is applied automatically, and PayID settles instantly. For a kitchen that wants predictable costs, pay-on-order also makes it easier to match purchases to takings.`,
          `Chefs who want to get more from cheaper cuts will find ideas in Andy Cooks' video, ["How Chefs Make Cheap Meat Taste Expensive"](https://www.youtube.com/watch?v=n63BXokd5dI), which is a chef-led take on turning inexpensive cuts into menu items. It is a general cooking video rather than a product pitch, and the same thinking applies to our brisket and short rib lines, where a lower price per kilogram rewards slow cooking.`,
          `If you are planning a larger order, our [bulk meat packs near me](/blog/bulk-meat-packs-near-me-meat-box-australia/) guide shows how boxes compare with retail packs, and you can browse the full [bulk meat and box range](/shop/meatboxes/) or the [beef category](/shop/beef/) before you apply. Our guide to [buying brisket online](/blog/buy-beef-brisket-online-price-per-kg-australia/) is useful for any venue running a smoker.`,
        ],
      },
      {
        heading: 'Common mistakes when buying wholesale beef',
        body: [
          `The first mistake is comparing pack prices instead of price per kilogram, which hides the real cost. The second is buying more than your freezer and your menu can turn over, because a cheap kilogram that is thrown out is the most expensive kilogram you buy. The third is ignoring trim and yield on a primal, so a dish that looked profitable on paper loses its margin on the board.`,
          `A fourth mistake is choosing a supplier on price alone and finding out later that delivery is unreliable or the cut specification changes from order to order. A fifth is skipping the food safety questions because the price looked good. A sixth is forgetting GST: the prices here are before GST, and a business registered for GST can usually claim it back, but you should plan cash flow on the GST-inclusive figure.`,
          `Finally, do not treat one order as a test of the supplier. Place a first order large enough to be representative, inspect the packaging and temperature on arrival, check the weights against the invoice, and then decide whether to move to a regular schedule.`,
        ],
      },
    ],
    faqs: [
      {
        question: 'Is there a minimum order for wholesale beef?',
        answer:
          'There is no separate wholesale minimum. The standard $423 AUD cart minimum applies, but trade buyers purchase at case and trade rates rather than single-pack retail pricing. GST of 10% is added at checkout, and shipping is $25 under $2,000 and free above that amount.',
      },
      {
        question: 'Can you deliver wholesale beef interstate?',
        answer:
          'Yes. Weekly delivery runs statewide and interstate by tracked courier, and monthly bulk orders go anywhere in Australia. Daily or weekly cold-chain delivery covers Ipswich and Brisbane. Each product page states the target of arriving below 2.5°C, and boxes ship in insulated liners.',
      },
      {
        question: 'What payment terms do you offer trade customers?',
        answer:
          'Trade orders are pay-on-order by PayID, bank transfer or crypto, and crypto carries an automatic 10% discount. We do not currently offer net 7 or net 30 credit accounts. Each order is confirmed and dispatched once payment clears. Questions go to our trade desk.',
      },
      {
        question: 'Is your wholesale beef halal certified?',
        answer:
          'Yes. All of our products except pork and pork sausages are halal certified. Our primary certifying body is AFIC, and we also hold certification from IFANCA and HCA. Ask any wholesale supplier to name the certifier and show you the certificate before your first order.',
      },
      {
        question: 'How do I check a wholesale meat supplier is legitimate?',
        answer:
          'Look up the ABN on the free Australian Business Register to confirm the registered entity, then ask about food safety, delivery temperature and packaging. An ABN confirms registration only, not quality, so also check the supplier address, certification and the specification on each product page.',
      },
    ],
  },
];
