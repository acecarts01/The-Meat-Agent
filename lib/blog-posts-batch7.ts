import type { BlogPost } from './blog-data';

// Batch 7: refreshed older posts (wagyu, steak, chicken, dry aged) rewritten to the blog rule.
// Keyword data: Semrush (Australia). Prices are from the site's own catalogue (ex-GST; 10% GST is added at checkout).

const FSANZ = {
  url: 'https://www.foodstandards.gov.au/consumer/prevention-of-foodborne-illness/food-safety-basics',
  label: 'Food Standards Australia New Zealand: food safety basics (storage at 5°C or colder, keeping raw and cooked food apart, cooking to 75°C)',
  source: 'FSANZ (government)',
};

const TRADE =
  'All of our products except pork and pork sausages are halal certified, you choose the cut state (whole primal, portioned, diced to spec, vacuum-sealed, fresh chilled or snap-frozen), and trade accounts pay on order by PayID, bank transfer or crypto. Daily or weekly cold-chain delivery runs in the Ipswich and Brisbane metro area, weekly delivery runs statewide and interstate by tracked courier, and monthly bulk orders go anywhere in Australia.';

export const BATCH7_POSTS: BlogPost[] = [
  // ---------------------------------------------------------------------------------------------
  {
    slug: 'wagyu-beef-price-per-kg-australia',
    title: 'Wagyu Beef Price Per Kg in Australia: Marbling Score Guide',
    excerpt:
      'Wagyu beef price per kg in Australia: real prices for cube roll, tomahawk, rump cap, brisket and A5, how marble scores work, and how to buy wagyu beef online.',
    metaDescription:
      'Wagyu beef price per kg in Australia: real prices for cube roll, tomahawk, rump cap, brisket and A5, how marble scores work and how to buy wagyu beef.',
    heroImage: '/images/products/beef/Beef_0010.webp',
    heroImageAlt: 'A raw trimmed beef roast on a white background: wagyu beef price per kg depends on the cut and its marbling score',
    niche: 'Wagyu',
    categorySlug: 'wagyu',
    publishedDate: '2026-11-17',
    readingMinutes: 10,
    primaryKeyword: 'wagyu beef price',
    primaryKeywordVolume: 210,
    primaryKeywordKd: 8,
    navigationalKeyword: 'buy wagyu online',
    supportingKeywords: ['buy wagyu beef', 'wagyu beef price per kg', 'wagyu meat price', 'wagyu price', 'a5 wagyu price'],
    informationalKeyword: 'a5 wagyu steak',
    tags: [
      'australian wagyu price per kg',
      'wagyu price per kg',
      'wagyu pricing',
      'price for wagyu beef',
      'buy wagyu meat',
      'purchase wagyu beef',
      'wagyu beef for sale',
      'wagyu steak price',
      'buying wagyu beef online',
      'wagyu beef steak price',
    ],
    outboundLinks: [
      {
        url: 'https://www.wagyu.org.au/worlds-luxury-beef/wagyu-beef-grade-and-marbling-score',
        label: 'Australian Wagyu Association: Wagyu beef grade and marbling score (Marble Score 0 to 9+)',
        source: 'Australian Wagyu Association',
      },
      {
        url: 'https://www.youtube.com/watch?v=uNT_AxXrUGs',
        label: '"Gordon Ramsay\'s Guide To Steak", a general guide to steak cuts and what to look for (not wagyu-specific)',
        source: 'YouTube: Gordon Ramsay',
      },
    ],
    relatedSkus: ['WY-200', 'WY-202', 'WY-204'],
    sections: [
      {
        heading: 'Wagyu beef price per kg: what you will actually pay',
        body: [
          'Wagyu beef price varies more than almost any other meat, because the cut, the marbling and the origin each move the price. This guide gives real wagyu beef prices from Meat Direct (The Meat Agent), explains how marbling scores work, shows how to compare wagyu price per kg fairly, and explains how to buy wagyu beef online in Australia.',
          'Every price below is the listed price before 10% GST, which is added at checkout. All of our products except pork and pork sausages are halal certified; our primary certifying body is AFIC, and we also hold certification from IFANCA and HCA.',
          'A simple way to read the table is by occasion. For a weeknight, the burger patties and the rump cap give you wagyu flavour at the lowest price per kilogram. For a weekend cook, brisket and short rib reward slow cooking and feed a crowd. For a celebration, cube roll, eye fillet or tomahawk are the steaks to choose, and A5 is a once-in-a-while indulgence. Matching the cut to the occasion is the single biggest way to control what you spend.',
          'If you plan to buy wagyu online, check the marble score and weight on the product page and compare price per kilogram, as in the table above.',
        ],
        table: {
          caption: 'Our wagyu range: price and price per kg (before GST)',
          headers: ['Cut', 'Pack', 'Price', 'Per kg'],
          rows: [
            ['Wagyu brisket point end, marbled MBS 8+', '4.8kg', '$175.00', '$36.46'],
            ['Wagyu smash burger gourmet patties, 4 x 180g', '720g', '$29.90', '$41.53'],
            ['Wagyu whole rump cap (picanha), MBS 7+', '1.5kg', '$110.00', '$73.33'],
            ['Wagyu short rib flanken cut (kalbi), MBS 8+', '800g', '$68.00', '$85.00'],
            ['Wagyu shabu shabu and sukiyaki wafer slices', '400g', '$48.00', '$120.00'],
            ['Wagyu long-bone tomahawk, MBS 8-9', '1.6kg', '$195.00', '$121.88'],
            ['Wagyu beef bresaola, dry-cured slices', '200g', '$32.00', '$160.00'],
            ['Wagyu eye fillet medallions, MBS 7+, 2 x 200g', '400g', '$89.00', '$222.50'],
            ['Wagyu cube roll (scotch fillet), MBS 9+', '400g', '$125.00', '$312.50'],
            ['Japanese A5 black wagyu striploin cut', '300g', '$145.00', '$483.33'],
          ],
        },
        image: {
          src: '/images/products/beef/Beef_0021.webp',
          alt: 'Raw beef short ribs on a white background, a cut that appears in our wagyu range as the kalbi flanken cut',
          caption: 'Short ribs and brisket sit at the lower end of wagyu pricing per kilogram.',
        },
      },
      {
        heading: 'Wagyu price per kg by cut: why the range is so wide',
        body: [
          'Wagyu price per kg runs from about $36 for brisket to over $480 for A5 striploin in our range, a spread of more than ten times, and the reason is the cut. Tender, quick-cooking steaks such as cube roll and eye fillet come from small muscles, so there is little of each animal, and they cost the most per kilogram. Hard-working cuts such as brisket and short rib are larger and need slow cooking, so they cost far less.',
          'That means the cheapest way into wagyu is not a cheaper steak but a different cut. A wagyu brisket cooked slowly, or wagyu burger patties, gives you the rich, marbled flavour at a fraction of the price of a cube roll steak. If you want a steak, the rump cap (picanha) is the value pick: our [Wagyu Whole Rump Cap](/shop/wagyu/wagyu-whole-rump-cap-picanha-mbs-7-wy-202/) is 1.5kg at $110.00, or $73.33 per kg, which is less than most premium wagyu steaks.',
          'Price per serve tells the story better than price per kilogram. At realistic serve sizes before GST, a 180g smash burger patty costs about $7.48, a 200g serve of rump cap costs about $14.67, a 300g serve of short rib costs $25.50, an 80g serve of A5 striploin costs about $38.67, a 150g serve of cube roll costs about $46.88, and a share of tomahawk at 400g per person costs about $48.75. Seen that way, wagyu is far less out of reach than the per-kilogram prices suggest, and a rich cut in a small portion can cost less than a large serve of ordinary premium steak.',
        ],
      },
      {
        heading: 'Wagyu meat price and marbling score: what MBS means',
        body: [
          'Marbling is the intramuscular fat that gives wagyu its richness, and it is scored. The Australian Wagyu Association explains that the Australian Marble Score runs from 0 to 9+, and that the MIJ-30 digital carcase camera is approved for AUS-MEAT grading across the full 0 to 9+ range. You will see MBS on our product names, for example MBS 7+ on the rump cap and MBS 9+ on the cube roll.',
          'Higher marbling generally means a higher wagyu meat price, but the relationship is not linear and depends on the cut. The Association also notes that marbling in wagyu is determined by the genetics of the animal and by the nutrition in the feeding program. Japanese A5 uses a different grading system from the Australian scale, so the numbers cannot be compared directly, and we do not convert one to the other.',
          'The practical advice is to buy the score that suits the cut. For a slow-cooked brisket, a moderate-to-high score gives plenty of richness. For a seared steak, a very high score is intensely rich, so portions are smaller than with ordinary steak, and many people find a 7 or 8 a better everyday choice than a 9.',
          'Marbling also changes how you cook. Because the fat melts as the meat heats, highly marbled wagyu is often cooked a little less aggressively than lean steak, with a hot sear and a short finish rather than a long time on the heat, and it benefits from a good rest. Fat that has not had time to render can feel greasy, while fat that has rendered gives the buttery texture people pay for. If a steak is very rich, slicing it and serving it with something acidic, such as pickles or a sharp salad, balances the plate.',
        ],
      },
      {
        heading: 'Buy wagyu beef: cube roll, tomahawk and rump cap',
        body: [
          'When you buy wagyu beef, three cuts cover most occasions. Our [Wagyu Cube Roll (Scotch Fillet)](/shop/wagyu/wagyu-cube-roll-scotch-fillet-mbs-9-wy-200/) is 400g at $125.00, or $312.50 per kg and $137.50 with GST, and is the steak for a special dinner. Our [Wagyu Long-Bone Tomahawk](/shop/wagyu/wagyu-long-bone-tomahawk-mbs-8-9-wy-201/) is 1.6kg at $195.00, which is $121.88 per kg and serves two to three people as a shared centrepiece. The rump cap is the everyday-value option.',
          'Because wagyu is rich, portion sizes are smaller than for standard steak. A 100g to 150g serve of a very high-marbled cut is plenty, served with a simple side. That is part of why wagyu price per kg looks high but the price per serve can be comparable to a larger serve of premium non-wagyu steak.',
          'Each cut has a simple best use. The rump cap, or picanha, is traditionally roasted whole with its fat cap on, then sliced thinly against the grain. The shabu shabu and sukiyaki wafer slices are cut thin enough to cook in seconds in a hot broth or a hot pan, so they suit a hot-pot dinner. The short rib flanken cut is sliced across the bone for fast grilling in the style of Korean barbecue. Choosing the cut with its traditional cooking method in mind gets the best result for the money.',
        ],
      },
      {
        heading: 'A5 wagyu price and A5 wagyu steak: what to expect',
        body: [
          'People searching for a5 wagyu price and a5 wagyu steak are usually looking at Japanese black wagyu, which is graded on the Japanese scale; our striploin is named as Japanese on its product page. Our [Japanese A5 Black Wagyu Striploin Cut](/shop/wagyu/japanese-a5-black-wagyu-striploin-cut-wy-203/) is 300g at $145.00, which is $483.33 per kg and $159.50 with GST.',
          'A5 is so heavily marbled that it is served in small portions, usually 50g to 100g per person, and cooked briefly in a very hot pan or on a hot plate. It is closer to a delicacy than a steak, and it is worth buying only if you want to taste it as it is intended. For most households, an Australian wagyu cube roll or rump cap delivers more meat for the money.',
        ],
      },
      {
        heading: 'Wagyu beef for sale: how to choose and how to cook it',
        body: [
          'Whatever you buy, check four things: the cut, the marble score on the product page, the weight, and the price per kilogram. Then cook it simply. Season with salt, sear in a hot pan or on a hot plate, rest the meat, and slice or serve it with minimal sauce so the beef is the star.',
          'Gordon Ramsay has a video called "Gordon Ramsay\'s Guide To Steak" on his YouTube channel. It is a general guide to steak cuts and what to look for rather than a wagyu video, but the principles of buying and cooking a good steak apply, and it is a useful primer.',
          'Food Standards Australia New Zealand advises keeping perishable food at 5°C or colder and using separate boards and knives for raw meat. Store wagyu in the fridge until you are ready to cook, or freeze it in its vacuum seal if you will not use it within the use-by date, and thaw it slowly in the fridge.',
          'Storage matters for an expensive cut. Keep wagyu in the coldest part of the fridge in its vacuum seal until the day you cook it, and do not open the seal early. If you will not cook it within the use-by date, freeze it straight away, because the vacuum seal protects it from freezer burn. When you thaw it, give it a full night in the fridge, then let it sit out of the fridge for a short time before cooking so it cooks evenly.',
        ],
      },
      {
        heading: 'Wagyu price in an order: reaching the $423 minimum',
        body: [
          'Orders ship through our cold-chain courier network in insulated liners, with each product page stating the target of arriving below 2.5°C. The store has a $423 AUD minimum across the whole cart. For example, one rump cap ($110.00), one brisket ($175.00), two burger patty packs ($59.80), one short rib flanken cut ($68.00) and one bresaola ($32.00) come to $444.80 before GST. GST adds $44.48, and shipping is $25 under $2,000, giving $514.28. Crypto orders receive an automatic 10% discount.',
          'If you want to try several cuts at once, our [Wagyu Experience Luxury Sample Box](/shop/meatboxes/the-wagyu-experience-luxury-sample-box-3-2kg-bx-308/) is 3.2kg at $340.00, or $106.25 per kg. You can browse the full range in the [Wagyu category](/shop/wagyu/), and our guide to [lamb prices per kg](/blog/lamb-prices-per-kg-australia/) shows how we present per-kilogram pricing for another premium red meat.',
        ],
      },
      {
        heading: 'Trade supply: wagyu for restaurants and hotels',
        body: [
          'Restaurants, hotels and caterers can buy wagyu in volume through our [wholesale supply for restaurants and hotels](/wholesale/). ' + TRADE,
          'For a venue, the key numbers are cost per serve and consistency. A brisket or short rib costs far less per portion than a steak, and a burger patty gives a wagyu menu item at a controlled price. Talk to us about your specification and volume, and we can advise on which cuts give you the best margin.',
        ],
      },
      {
        heading: 'Common mistakes when buying wagyu',
        body: [
          'The most common mistake is paying steak prices for a cut you plan to cook the wrong way, such as buying a cube roll and overcooking it. The second is assuming a higher score is always better for every dish. The third is ignoring portion size and buying too much. The fourth is comparing a wagyu price per kg with a standard steak price without allowing for the smaller serve.',
          'A fifth mistake is not checking the origin and grading statement: our product pages state the marble score for Australian wagyu and name Japanese A5 where it applies, and you should expect the same of any supplier.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much is wagyu beef per kg?',
        answer:
          'In our range, wagyu brisket is $36.46 per kg, rump cap is $73.33 per kg, tomahawk is $121.88 per kg, cube roll is $312.50 per kg and Japanese A5 striploin is $483.33 per kg, all before 10% GST. Prices are listed on each product page.',
      },
      {
        question: 'What does the MBS marbling score mean?',
        answer:
          'It is the marble score for Australian wagyu, which runs from 0 to 9+ according to the Australian Wagyu Association. A higher score means more intramuscular fat. It is not directly comparable with the Japanese A5 system. Check the marble score on each product page.',
      },
      {
        question: 'Can I order only one wagyu steak?',
        answer:
          'Not on its own, because the store minimum is $423 AUD across the whole cart. Combine wagyu with other cuts or a box. GST of 10% is added at checkout, and shipping is $25 under $2,000. The total is shown before you pay.',
      },
      {
        question: 'Is your wagyu halal certified?',
        answer:
          'Yes. All of our products except pork and pork sausages are halal certified, including our wagyu range. Our primary certifying body is AFIC, and we also hold certification from IFANCA and HCA. Ask any supplier to name the certifier and show you the certificate. Certificates are available on request.',
      },
    ],
  },
  // ---------------------------------------------------------------------------------------------
  {
    slug: 'rump-steak-price-per-kg-australia',
    title: 'Rump Steak Price Per Kg: Scotch, Ribeye and Primal Guide',
    excerpt:
      'Rump steak price per kg and steak prices in Australia: real prices for rump, scotch fillet, ribeye, porterhouse and T-bone, and whether buying a whole primal saves money.',
    metaDescription:
      'Rump steak price per kg in Australia: real prices for rump, scotch fillet, T-bone and porterhouse, and whether buying a whole primal beats pre-cut steaks.',
    heroImage: '/images/products/beef/Beef_0003.webp',
    heroImageAlt: 'Diced raw beef beside a meat grinder on a dark counter: rump steak price per kg depends on the cut and the trim',
    niche: 'Beef',
    categorySlug: 'beef',
    publishedDate: '2026-11-17',
    readingMinutes: 10,
    primaryKeyword: 'rump steak price',
    primaryKeywordVolume: 260,
    primaryKeywordKd: 8,
    navigationalKeyword: 'buy rump steak online',
    supportingKeywords: ['scotch fillet steak price', 'beef steak price', 'steak price', 'price of rib eye steak', 'steak prices'],
    informationalKeyword: 'scotch fillet',
    tags: [
      'ribeye steak price',
      'buy ribeye steak',
      'buy ribeye steak near me',
      't bone steak price',
      'buy eye fillet steak',
      'buying ribeye steak',
      'rib eye steak price',
      'eye fillet steak price',
      'buy steak in bulk',
      'buy beef steak',
    ],
    outboundLinks: [
      FSANZ,
      {
        url: 'https://www.youtube.com/watch?v=46eRIxVxkG8',
        label: '"How to Cook Perfect Steak", including tips on getting good cuts from your butcher',
        source: 'YouTube: Jamie Oliver',
      },
    ],
    relatedSkus: ['BF-116', 'BF-101', 'BF-114'],
    sections: [
      {
        heading: 'Rump steak price per kg: what steak really costs',
        body: [
          'Steak prices vary widely, and the only fair way to compare is price per kilogram. This guide gives real rump steak price figures from Meat Direct (The Meat Agent), compares them with scotch fillet, ribeye, porterhouse, T-bone and eye fillet, and answers the question that sits behind many steak searches: is it cheaper to buy a whole primal and cut your own steaks?',
          'Every price below is the listed price before 10% GST, which is added at checkout. All of our products except pork and pork sausages are halal certified; our primary certifying body is AFIC, and we also hold certification from IFANCA and HCA.',
          'To buy rump steak online, the thick-cut rump pack of four 250g steaks is $32.00, which is $32.00 per kg before GST.',
        ],
        table: {
          caption: 'Our steak range: price and price per kg (before GST)',
          headers: ['Steak', 'Pack', 'Price', 'Per kg'],
          rows: [
            ['Thick-cut rump steaks', '4 x 250g', '$32.00', '$32.00'],
            ['Skirt steak (arrachera cut)', '700g', '$26.00', '$37.14'],
            ['Minute steaks, thin-sliced', '500g', '$18.50', '$37.00'],
            ['Flat iron oyster blade steaks', '3 x 200g', '$28.50', '$47.50'],
            ['T-bone classic backyard steaks', '2 x 400g', '$42.00', '$52.50'],
            ['Thick-cut porterhouse / sirloin', '2 x 300g', '$36.00', '$60.00'],
            ['Dry-aged bistecca alla Fiorentina T-bone', '1.1kg', '$74.00', '$67.27'],
            ['Southern Gold Angus scotch fillet steaks', '2 x 300g', '$44.50', '$74.17'],
            ['Dry-aged O\'Connor ribeye steak, bone-in', '900g', '$68.90', '$76.56'],
            ['Centre-cut grass-fed eye fillet steaks', '2 x 220g', '$49.90', '$113.41'],
          ],
        },
        image: {
          src: '/images/products/beef/Beef_0010.webp',
          alt: 'A raw trimmed beef roast on a white background, the kind of whole cut that steaks are portioned from',
          caption: 'Steaks are portioned from whole muscles, which is why a primal can be cheaper per kilogram.',
        },
      },
      {
        heading: 'Rump steak price: the everyday steak',
        body: [
          'Rump is the best-value steak in our range. Our [Thick-Cut Rump Steaks](/shop/beef/thick-cut-rump-steaks-4-x-250g-bf-116/) are four 250g steaks, 1kg in total, at $32.00, which is $32.00 per kg, $8.00 a steak and $35.20 with GST. Rump has plenty of beef flavour, and when it is cut thick and cooked to medium-rare it eats well, though it is a little firmer than fillet or scotch.',
          'The trick with rump is slicing. Rest the cooked steak, then slice it across the grain, and it becomes noticeably more tender. If you prefer a very tender steak, step up to scotch or eye fillet, but if you want a good, honest steak at a low price, rump is it.',
          'Thickness is what separates a good rump steak from a disappointing one. A thick-cut steak lets you sear the outside hard while keeping the centre pink, whereas a thin steak overcooks before it browns. Pat the steak dry, season it well, and cook it in a very hot pan without moving it for the first couple of minutes so a crust can form. Then turn it once, add a knob of butter if you like, and let it rest for about as long as it cooked.',
        ],
      },
      {
        heading: 'Scotch fillet steak price and what is scotch fillet?',
        body: [
          'Scotch fillet is a popular steak, and one of the most searched beef terms, because it combines tenderness with flavour. It is the boneless eye of the ribeye, cut from the rib section, and it carries more marbling than rump. Our [Southern Gold Angus Scotch Fillet Steaks](/shop/beef/southern-gold-angus-scotch-fillet-steaks-bf-101/) are two 300g steaks at $44.50, which is $22.25 a steak and $74.17 per kg.',
          'Scotch fillet steak price sits at more than twice the price per kilogram of rump, and the extra is worth it if you value richness and tenderness. If you cook steak once a week, a mix works well: rump for most meals and scotch for the weekend.',
          'Scotch fillet and ribeye are close relatives. The scotch fillet is the boneless eye of the rib section, while a ribeye is usually the same muscle with its surrounding cap, sometimes sold on the bone. Both have generous marbling and cook well on a hot pan or grill. If you are choosing between them, the bone-in ribeye gives you more flavour from the bone and a nice presentation, while the boneless scotch is easier to carve and cook evenly.',
        ],
      },
      {
        heading: 'Beef steak price and price of rib eye steak',
        body: [
          'Ribeye is the bone-in cousin of scotch fillet, and the price of rib eye steak depends on whether it is bone-in and how it has been aged. Our dry-aged [O\'Connor Ribeye Steak, Bone-In](/shop/beef/dry-aged-o-connor-ribeye-steak-bone-in-bf-100/) is 900g at $68.90, which is $76.56 per kg and $75.79 with GST, and is listed as 45 days dry-aged.',
          'A simple way to compare beef steak price across cuts is to work out the cost per serve. At 250g a serve, rump is $8.00, T-bone is about $13.13, porterhouse is $15.00, scotch fillet is about $18.54, bone-in ribeye is about $19.14, and eye fillet is about $28.35, all before GST. Fillet costs most because it is the most tender and the smallest muscle.',
          'Thickness and weight matter when you compare steaks. A 300g steak that is cut thick is a more substantial meal than two thin steaks of the same total weight, and bone-in steaks include the weight of the bone, so the price per kilogram of edible meat is higher than the headline figure. Check the weight on the product page, and when you compare suppliers, compare the same type of cut and the same trim.',
        ],
      },
      {
        heading: 'Steak price versus buying a primal: does it save money?',
        body: [
          'A whole primal is a large cut that you portion yourself, and it is usually cheaper per kilogram than the same cut sold as individual steaks. Our [Whole Scotch Fillet Cube Roll Primal](/shop/beef/whole-scotch-fillet-cube-roll-primal-3-8kg-bf-114/) is 3.8kg at $215.00, which is $56.58 per kg, against $74.17 per kg for the scotch fillet steaks. That is a saving of $17.59 per kilogram, or about 24%.',
          'The saving is real but not free. You must trim and portion the primal, and some weight is lost in trimming. Even if trimming costs you 15% of the weight, the effective cost is about $66.56 per kilogram of usable meat, which is still below the steak price. Our Whole Strip Loin Primal is 4kg at $189.00, or $47.25 per kilogram.',
          'A primal only makes sense if you have a sharp knife, a way to vacuum-seal or wrap steaks, and freezer space. If not, buy the steaks, which come portioned and ready to cook. Our earlier guide to [how much meat a family of four needs](/blog/bulk-meat-packs-near-me-meat-box-australia/) helps you decide how much steak to buy at once.',
          'If you decide to cut your own, the process is simple. Chill the primal well so it is firm, trim the outer fat and silver skin, and cut steaks across the grain at the thickness you like, usually 2.5 to 3cm for pan cooking. Keep the trim for mince or stock. Wrap or vacuum-seal each steak individually, label it with the date, and freeze what you will not cook within a few days. Done once, it takes under half an hour and gives you several weeks of steak at a lower cost per kilogram.',
        ],
      },
      {
        heading: 'Buy ribeye steak, buy eye fillet steak and buy steak in bulk',
        body: [
          'Searches such as buy ribeye steak, buy eye fillet steak and buy steak in bulk show that many people want a reliable online source. Eye fillet is the most tender cut, and our Centre-Cut Grass-Fed Eye Fillet Steaks are two 220g steaks at $49.90, or $24.95 a steak. For a bulk buy, our Dry-Aged Steak Connoisseur Tasting Box is 4kg at $295.00 for people who want a variety.',
          'If you buy steak in bulk, portion the steaks in their vacuum seal, label them, and freeze them. Thaw in the fridge overnight, bring the steak out of the fridge a little while before cooking, and pat it dry before it hits the pan. Jamie Oliver has a video called "How to Cook Perfect Steak" that includes tips on getting good cuts from your butcher, which is a useful companion to a bulk order.',
          'When you buy steak, check the thickness, the trim, the weight and the packaging. A good steak is evenly cut, has a clean trim and arrives vacuum sealed and cold. If you buy a steak online, look for a product page that states the weight per steak and the number in the pack, so you can work out what each steak costs, and so you know you are comparing like with like.',
        ],
      },
      {
        heading: 'T-bone steak price and bone-in steaks',
        body: [
          'T-bone and porterhouse combine two muscles on one bone, a strip loin and a fillet, so they suit people who like both textures. Our [T-Bone Classic Backyard Steaks](/shop/beef/t-bone-classic-backyard-steaks-2-x-400g-bf-135/) are two 400g steaks at $42.00, or $52.50 per kg, which is a lower T-bone steak price than most dry-aged options. The Dry-Aged Bistecca alla Fiorentina T-Bone is 1.1kg at $74.00, or $67.27 per kg, and is listed as 35 days dry-aged.',
          'Bone-in steaks cook more slowly near the bone, so give them a little extra time and let them rest. They are good for sharing: one large bistecca can serve two people with sides.',
          'The T-bone has a fillet on one side of the bone and a strip loin on the other. The fillet side cooks faster than the strip side, so if you are cooking on a barbecue, put the strip side nearer the heat and the fillet side further away. Let the steak rest, then slice both muscles off the bone and share them.',
        ],
      },
      {
        heading: 'Ordering steak: minimum order, delivery and trade supply',
        body: [
          'Orders ship through our cold-chain courier network in insulated liners, with each product page stating the target of arriving below 2.5°C. The store has a $423 AUD minimum across the whole cart. For example, two scotch fillet packs ($89.00), four rump steak packs ($128.00), two porterhouse packs ($72.00), two T-bone packs ($84.00) and two flat iron packs ($57.00) come to $430.00 before GST. GST adds $43.00, and shipping is $25 under $2,000, giving $498.00.',
          'Food Standards Australia New Zealand advises keeping raw meat at 5°C or colder and using separate boards and knives for raw meat and food eaten uncooked. Restaurants, hotels and caterers can order steak and primals in volume through our [trade supply for restaurants and hotels](/wholesale/). ' + TRADE + ' You can browse the full range in the [Beef category](/shop/beef/).',
        ],
      },
      {
        heading: 'Common mistakes when comparing steak prices',
        body: [
          'The first mistake is comparing pack prices rather than price per kilogram. The second is ignoring the weight of bone. The third is comparing a primal price with a steak price without allowing for trimming. The fourth is buying an expensive steak and cooking it badly. The fifth is skipping the rest after cooking.',
          'A sixth mistake is forgetting that steak is a perishable product. Buy only what you will cook within the use-by date and freeze the rest in its vacuum seal. If you plan to buy often, our guide to [bulk meat packs](/blog/bulk-meat-packs-near-me-meat-box-australia/) shows how to plan the freezer.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much is rump steak per kg?',
        answer:
          'Our thick-cut rump steaks are $32.00 per kg before 10% GST, sold as four 250g steaks for $32.00, or $8.00 a steak. Compare per kilogram across suppliers, and check whether the steak is trimmed and how thick it is cut.',
      },
      {
        question: 'Is it cheaper to buy a primal than steaks?',
        answer:
          'Usually, yes. Our whole scotch fillet cube roll primal is $56.58 per kg against $74.17 per kg for the steaks, about 24% less. You must trim and portion it yourself, and some weight is lost in trimming. Ask us for the typical yield if you want to cost it precisely.',
      },
      {
        question: 'What is the difference between scotch fillet and ribeye?',
        answer:
          'Scotch fillet is the boneless eye of the ribeye, cut from the rib section. Ribeye often means the same cut sold bone-in or with the cap on. Both are rich and well marbled, and both suit fast, hot cooking. Check each product page for the exact cut.',
      },
      {
        question: 'Is your steak halal certified?',
        answer:
          'Yes. All of our products except pork and pork sausages are halal certified, including every steak in the range. Our primary certifying body is AFIC, and we also hold certification from IFANCA and HCA. Ask any supplier to name the certifier and show you the certificate. Certificates are available on request.',
      },
    ],
  },
  // ---------------------------------------------------------------------------------------------
  {
    slug: 'chicken-breast-price-per-kg-australia',
    title: 'Chicken Breast Price Per Kg: Free Range Chicken Guide',
    excerpt:
      'Chicken breast price per kg in Australia: real prices for free-range breast, thigh, drumsticks and whole birds, how to compare value, how to cook breast safely and how to order.',
    metaDescription:
      'Chicken breast price per kg in Australia: real prices for free-range breast, thigh, drumsticks and whole birds, how to compare value and how to order in bulk.',
    heroImage: '/images/products/chicken/Chicken_0006.webp',
    heroImageAlt: 'Two raw skinless chicken breasts with lemon and thyme: chicken breast price per kg depends on the pack, the trim and the free-range claim',
    niche: 'Poultry',
    categorySlug: 'chicken',
    publishedDate: '2026-11-17',
    readingMinutes: 10,
    primaryKeyword: 'chicken breast price',
    primaryKeywordVolume: 390,
    primaryKeywordKd: 15,
    navigationalKeyword: 'buy packaged chicken breast online',
    supportingKeywords: [
      'chicken breast on sale',
      'chicken breast near me',
      'chicken breast price per kg',
      'whole chicken price',
      'buy whole chicken online',
    ],
    informationalKeyword: 'chicken breast fillet',
    tags: [
      'chicken breast sale',
      'price for a whole chicken',
      'cheapest chicken breast near me',
      'chicken breast prices',
      'chicken thigh price',
      'chicken breast bulk',
      'whole chicken cost',
      'free range whole chicken',
      'diced chicken breast',
      'free range chicken',
    ],
    outboundLinks: [
      FSANZ,
      {
        url: 'https://www.youtube.com/watch?v=vrpcnb0osM4',
        label: '"Gordon Ramsay Demonstrates How To Cook A Perfect Chicken Breast", a MasterChef Junior clip',
        source: 'YouTube: MasterChef On FOX',
      },
    ],
    relatedSkus: ['CK-400', 'CK-401', 'CK-404'],
    sections: [
      {
        heading: 'Chicken breast price per kg: what you will pay',
        body: [
          'Chicken breast price is one of the most searched meat prices, and the right way to compare it is price per kilogram, with attention to the trim, the pack size and whether the chicken is free range. This guide gives real prices from Meat Direct (The Meat Agent) for breast, thigh, drumsticks, wings and whole birds, explains how to compare chicken value, and shows how to cook breast safely and juicily.',
          'Every price below is the listed price before 10% GST, which is added at checkout. All of our products except pork and pork sausages are halal certified; our primary certifying body is AFIC, and we also hold certification from IFANCA and HCA.',
          'Price per serve is the clearest way to compare chicken. At a 150g serve before GST, breast costs about $2.24, boneless thigh about $2.55 and tenderloins about $2.70. A pair of drumsticks at roughly 200g costs about $1.49. A crumbed schnitzel from the 6 pack costs $4.00 each, because the pack includes the crumb and the preparation. Plain breast and thigh are the lowest-cost proteins in the range, and the value packs make them cheaper still.',
          'Remember that price per kilogram does not include water loss in cooking. Chicken breast loses weight as it cooks, so a 150g raw serve becomes a smaller cooked serve. If you are tracking portions for fitness, weigh your portion before or after cooking, and use the same method every time, so your numbers are consistent.',
          'If you want to buy packaged chicken breast online, the 2kg bulk pack at $29.90 is the line to start with.',
        ],
        table: {
          caption: 'Our chicken range: price and price per kg (before GST)',
          headers: ['Product', 'Pack', 'Price', 'Per kg'],
          rows: [
            ['Free-range chicken drumsticks, value pack', '2kg', '$14.90', '$7.45'],
            ['Honey soy marinated chicken wingettes', '2kg', '$22.00', '$11.00'],
            ['Whole spatchcock chicken, lemon pepper herb', '1.3kg', '$18.50', '$14.23'],
            ['Free-range skinless chicken breast, bulk', '2kg', '$29.90', '$14.95'],
            ['Portuguese peri-peri marinated half chickens', '1.6kg', '$25.00', '$15.63'],
            ['Free-range boneless skinless chicken thigh', '2kg', '$34.00', '$17.00'],
            ['Chicken tenderloins, hand-trimmed', '1.5kg', '$27.00', '$18.00'],
            ['Crumbed artisan chicken breast schnitzels, 6 pack', '1.1kg', '$24.00', '$21.82'],
            ['Garlic butter kiev stuffed chicken breasts, 4 pack', '900g', '$26.00', '$28.89'],
          ],
        },
        image: {
          src: '/images/products/chicken/Chicken_0003.webp',
          alt: 'A crumbed chicken schnitzel, one of the value-added chicken breast products in our range',
          caption: 'Breast is lean, which is why it dries out if overcooked.',
        },
      },
      {
        heading: 'Chicken breast on sale and the price of bulk packs',
        body: [
          'Searches for chicken breast on sale and chicken breast sale show how price-sensitive this cut is, because breast is a staple for families, gyms and meal-preppers. Our [Free-Range Skinless Chicken Breast](/shop/chicken/free-range-skinless-chicken-breast-2kg-bulk-ck-400/) is a 2kg bulk pack at $29.90, which is $14.95 per kg and $32.89 with GST. That is a price you can hold every day, not just when there is a sale.',
          'Bulk packs reduce cost per kilogram and the number of orders, but they only save money if you portion and freeze them straight away. Open the pack, split it into meal-sized bags of 500g, label the date, and freeze flat. Thaw in the fridge and cook within a day.',
          'When you see a chicken breast special elsewhere, convert it to price per kilogram before you decide, and check what you are actually buying. Some packs are trimmed and skinless, others are not, and some are marinated, which changes the price. The most reliable comparison is the same product type, in the same state, at the same weight. With that approach, a price that looks like a bargain sometimes turns out to be an ordinary price, and an everyday price in a bulk pack can be the better value.',
        ],
      },
      {
        heading: 'Chicken breast near me: buying online versus local',
        body: [
          'A search for chicken breast near me, or the cheapest chicken breast near me, usually returns supermarkets and butchers. A local shop is convenient for small quantities. Ordering online makes sense if you want free-range, skinless, bulk packs, or halal-certified chicken, or if you buy regularly and want to stock the freezer.',
          'Orders ship through our cold-chain courier network in insulated liners, with each product page stating the target of arriving below 2.5°C. Chicken is more perishable than red meat, so check the use-by date on arrival, put it in the fridge or freezer promptly, and keep raw chicken on the bottom shelf in a covered container so it cannot drip onto other foods.',
          'A short checklist helps whichever way you buy. Look for a clear use-by date, check that the chicken is cold, check that the pack is sealed and not leaking, and make sure the colour looks fresh. If you buy locally, ask when the product was delivered. If you buy online, check the temperature on arrival and contact the supplier the same day if something looks wrong.',
        ],
      },
      {
        heading: 'Whole chicken price and buy whole chicken online',
        body: [
          'Whole chicken price is often the lowest per kilogram, because you are buying the whole bird. Our [Whole Spatchcock Chicken with Lemon Pepper Herb](/shop/chicken/whole-spatchcock-chicken-with-lemon-pepper-herb-ck-402/) is 1.3kg at $18.50, which is $14.23 per kg, and it is flattened and seasoned so it cooks quickly and evenly on the barbecue or in the oven. Our Portuguese Peri-Peri Marinated Half Chickens are a 2 pack of 1.6kg at $25.00, or $15.63 per kg.',
          'People searching for the price for a whole chicken or whole chicken cost are often weighing a whole bird against cut-up pieces. A whole bird gives you breast, thigh, drumstick and carcass for stock, but you must cut it up or cook it whole. If you cook chicken most nights, buying breast and thigh in bulk is usually easier. If you like roasts and stock, buy whole.',
          'A spatchcock chicken, also called a butterflied chicken, has had its backbone removed and has been flattened. Because it is flat, it cooks evenly and quickly, usually in much less time than a whole bird, and the skin crisps well. It is a good choice for the barbecue or for a quick roast, and you can carve it into portions easily. The backbone, if you keep it, makes a good base for stock.',
        ],
      },
      {
        heading: 'Chicken thigh price and free range whole chicken',
        body: [
          'Chicken thigh price is higher per kilogram than breast in our range, because the thigh is boneless and skinless, but it is more forgiving to cook and stays juicy. Our [Free-Range Boneless Skinless Chicken Thigh](/shop/chicken/free-range-boneless-skinless-chicken-thigh-2kg-ck-401/) is 2kg at $34.00, or $17.00 per kg. Drumsticks are the cheapest cut at $7.45 per kg because they are sold on the bone.',
          'The term free range matters for many shoppers. Our product names state it where it applies, and we keep the claim limited to what the names say; ask any supplier to explain what free range means for their birds, and look for a named standard. The right choice depends on your priorities: cost, convenience or the way the birds were raised.',
          'Thigh is the choice for slow dishes. It has more fat and connective tissue than breast, so it stays tender through long cooking and suits curries, stews, tagines and braises. It also works well in a hot pan or on the grill, and it is more forgiving if you overcook it by a few minutes. If you cook a lot of one-pot dishes, a bulk pack of thigh is often better value in practice than breast.',
        ],
      },
      {
        heading: 'Chicken breast fillet and diced chicken breast: how to cook it',
        body: [
          'A chicken breast fillet is lean, so it dries out quickly if overcooked. The simplest fix is to cook it gently and not for too long, then rest it. Pat it dry, season it, cook it in a medium-hot pan until it is golden on both sides, and finish it in the pan with a lid on low heat or in a hot oven. Diced chicken breast cooks in minutes in a stir-fry or curry, so keep the pieces similar in size.',
          'Food Standards Australia New Zealand advises cooking all poultry to at least 75°C in the centre, and a thermometer takes the guesswork out. A brine or marinade helps keep lean breast juicy. Gordon Ramsay demonstrates how to cook a pan-seared chicken breast in a MasterChef Junior clip on the MasterChef On FOX channel, which is a clear, practical demonstration of the technique.',
          'A few techniques make lean breast better. If the fillet is thick at one end, place it between sheets of baking paper and flatten it gently so it is an even thickness, which cooks it evenly. Season it generously, and consider a short brine of salt dissolved in water for half an hour to an hour before cooking, then pat it dry. Cook it until just done and rest it for a few minutes. Slice across the grain for the most tender result.',
          'Leftover cooked breast keeps for a few days in the fridge and is excellent in salads, wraps and sandwiches. Reheat it gently, or eat it cold, because reheating at high heat dries it out.',
        ],
      },
      {
        heading: 'Ordering chicken: minimum order, delivery and trade supply',
        body: [
          'The store has a $423 AUD minimum across the whole cart. For example, four 2kg breast packs ($119.60), three 2kg thigh packs ($102.00), four drumstick packs ($59.60), two wingette packs ($44.00), four spatchcock chickens ($74.00) and one tenderloin pack ($27.00) come to $426.20 before GST. GST adds $42.62, and shipping is $25 under $2,000, giving $493.82. Crypto orders receive an automatic 10% discount, and you can also pay by PayID or bank transfer.',
          'Restaurants, hotels, cafés and caterers can order chicken in volume through our [commercial supply accounts for kitchens](/wholesale/). ' + TRADE + ' You can browse the full range in the [Pasture-Raised Poultry category](/shop/chicken/), and our guide to [halal chicken, beef and steak](/blog/halal-chicken-beef-steak-near-me-australia/) explains how halal certification applies to poultry.',
        ],
      },
      {
        heading: 'Common mistakes when buying chicken',
        body: [
          'The first mistake is comparing pack prices rather than price per kilogram. The second is buying more fresh chicken than you can use before the date. The third is not portioning bulk packs before freezing. The fourth is washing raw chicken, which spreads bacteria around the kitchen; cooking it properly kills them. The fifth is overcooking breast.',
          'A sixth mistake is assuming all free-range claims are the same. Read what the label says, ask the supplier, and choose on what matters to you. A seventh is storing raw chicken above other foods in the fridge, where it can drip. Keep it on the bottom shelf, covered.',
          'An eighth mistake is cooking from partly frozen chicken, which cooks unevenly and leaves the centre raw. Thaw chicken fully in the fridge, cook it promptly, and do not refreeze raw chicken that has fully thawed unless you cook it first. Label what you freeze so nothing gets forgotten at the bottom of the freezer.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much is chicken breast per kg?',
        answer:
          'Our free-range skinless chicken breast is $14.95 per kg in the 2kg bulk pack, before 10% GST. Thigh is $17.00 per kg, tenderloins are $18.00 per kg and drumsticks are $7.45 per kg. Compare per kilogram across suppliers. Prices are listed on each product page.',
      },
      {
        question: 'Is it cheaper to buy a whole chicken?',
        answer:
          'Often, yes per kilogram. Our whole spatchcock chicken is $14.23 per kg, against $14.95 per kg for bulk breast. A whole bird also gives you thigh, drumstick and a carcass for stock, but you must carve it or cook it whole.',
      },
      {
        question: 'What temperature should chicken be cooked to?',
        answer:
          'Food Standards Australia New Zealand advises cooking all poultry to at least 75°C in the centre. Use a thermometer in the thickest part, and rest the chicken before slicing. Keep raw chicken at 5°C or colder until you cook it.',
      },
      {
        question: 'Is your chicken halal certified?',
        answer:
          'Yes. All of our products except pork and pork sausages are halal certified, including every chicken product. Our primary certifying body is AFIC, and we also hold certification from IFANCA and HCA. Ask any supplier to name the certifier and show you the certificate. Certificates are available on request.',
      },
    ],
  },
  // ---------------------------------------------------------------------------------------------
  {
    slug: 'dry-aged-beef-near-me-buy-online-australia',
    title: 'Dry Aged Beef Near Me: Buy Dry Aged Beef Online in Australia',
    excerpt:
      'Dry aged beef near me: what dry ageing does, how it differs from wet ageing, real prices for dry-aged ribeye and T-bone, how to cook it and how to buy dry aged beef online.',
    metaDescription:
      'Dry aged beef near me: what dry ageing does, dry vs wet ageing, real prices for dry-aged ribeye and T-bone, how to cook it and how to buy dry aged beef online.',
    heroImage: '/images/products/beef/Beef_0010.webp',
    heroImageAlt: 'A raw trimmed beef roast on a white background: dry aged beef near me starts as a whole cut aged before it is portioned',
    niche: 'Beef',
    categorySlug: 'beef',
    publishedDate: '2026-11-17',
    readingMinutes: 9,
    primaryKeyword: 'dry aged beef near me',
    primaryKeywordVolume: 70,
    primaryKeywordKd: 7,
    navigationalKeyword: 'buy ribeye',
    supportingKeywords: ['aged beef near me', 'dry aged beef online', 'aged beef meat', 'dry aged butcher', 'best dry aged beef online'],
    informationalKeyword: 'dry aged tomahawk',
    tags: [
      'dry aged rib eye',
      'dry aged porterhouse',
      'dry aged beef melbourne',
      'dry aged meat near me',
      'dry aged meats',
      'dry aged sirloin',
      'dry aged wagyu',
      'whats dry aged meat',
      'dry aged scotch fillet',
      'tomahawk steaks',
    ],
    outboundLinks: [
      {
        url: 'https://www.mla.com.au/contentassets/f7423b3de0fa4865bfb1f8a470742e78/dry_aged_food_safety_brochure.pdf',
        label: 'Meat & Livestock Australia: dry aged beef technical update (ageing conditions and food safety)',
        source: 'Meat & Livestock Australia',
      },
      {
        url: 'https://www.youtube.com/watch?v=2iUHZfzFQWo',
        label: '"Dry Aging vs. Wet Aging Beef", an explainer from a beef brand\'s test kitchen',
        source: 'YouTube: Certified Angus Beef',
      },
      FSANZ,
    ],
    relatedSkus: ['BF-100', 'BF-103', 'BF-101'],
    sections: [
      {
        heading: 'Dry aged beef near me: what you are looking for',
        body: [
          'If you search for dry aged beef near me, you are usually looking for a butcher that ages its own meat, which is a short list in most cities. Dry aged beef has a deeper, nuttier flavour and a more tender texture than fresh beef, and it costs more because the process takes weeks and the meat loses weight. This guide explains what dry ageing is, how it differs from wet ageing, what it costs, and how to buy dry aged beef online from Meat Direct (The Meat Agent).',
          'Every price below is the listed price before 10% GST, which is added at checkout. All of our products except pork and pork sausages are halal certified; our primary certifying body is AFIC, and we also hold certification from IFANCA and HCA.',
          'When you look for a dry aged butcher, ask four questions. How long is the meat aged? In what conditions, including temperature and humidity? What yield is lost to trim? And can you see or confirm the cut and the weight? A butcher or online supplier that answers all four clearly is more likely to be running a controlled process, and that matters, because Meat and Livestock Australia stresses that well-controlled conditions are required for dry ageing.',
          'If you want to buy ribeye that has been aged for flavour, the bone-in dry-aged ribeye is the cut to choose.',
        ],
        table: {
          caption: 'Our dry-aged steaks (price before GST)',
          headers: ['Steak', 'Ageing', 'Pack', 'Price', 'Per kg'],
          rows: [
            ['Dry-aged bistecca alla Fiorentina T-bone', '35 days', '1.1kg', '$74.00', '$67.27'],
            ['Dry-aged O\'Connor ribeye steak, bone-in', '45 days', '900g', '$68.90', '$76.56'],
          ],
        },
        image: {
          src: '/images/products/beef/Beef_0021.webp',
          alt: 'Raw bone-in beef short ribs on a white background, a bone-in cut similar in style to dry-aged ribeye',
          caption: 'Bone-in cuts are the classic choice for dry ageing.',
        },
      },
      {
        heading: 'What is dry ageing, and how is it different from wet ageing?',
        body: [
          'Meat and Livestock Australia explains that ageing is a long-established method for improving the tenderness, flavour and overall acceptance of beef. Traditionally it was done by hanging the carcase or primal cut in a cool room. With vacuum packaging, selected primals can be aged in the bag, which is sometimes called wet ageing, whereas dry ageing is the ageing of primal cuts unpackaged, in air.',
          'The key difference is what happens to the surface. In dry ageing, moisture evaporates and a dry crust forms that is trimmed away before cooking, which concentrates the flavour but reduces the yield. In wet ageing, the meat sits in its own juices, so there is less weight loss but a milder change in flavour. The Certified Angus Beef test kitchen has a video called "Dry Aging vs. Wet Aging Beef" that explains the two methods, and although it is a brand explainer from a US producer, it is a clear, neutral introduction.',
          'Both methods rely on the natural enzymes in beef, which gradually break down muscle fibres and connective tissue, making the meat more tender over time. Dry ageing adds evaporation, which concentrates the flavour and creates a distinctive savoury, nutty character. Wet ageing keeps the meat in its own juices, so the flavour change is subtler. Neither is better for everyone; many people prefer the intensity of dry aged beef, while others prefer the cleaner beef flavour of a wet-aged or fresh steak.',
        ],
      },
      {
        heading: 'Aged beef meat: how long and at what temperature',
        body: [
          'The Meat and Livestock Australia update notes that the rate of tenderness improvement during ageing rises with temperature, but so does bacterial growth, so ageing is usually done at a temperature as low as possible without freezing the meat. It gives the ideal temperature for long-term ageing as minus 0.5°C, plus or minus 1°C, and says that for ageing of only one to two weeks, temperatures of 2 to 3°C could be acceptable.',
          'The same publication states that dry ageing can fill a niche market, that well-controlled conditions are required, and that only premium products should be selected for dry ageing to justify the higher price. That is why dry aged beef is sold as a premium product, and why it is best left to a supplier with the right equipment rather than attempted casually at home. Our dry-aged steaks are listed with their ageing time on the product pages.',
          'Time matters, but there is no single right answer. As a general rule, longer ageing intensifies flavour but increases weight loss and trim, which raises the cost. A steak aged for around 35 days has a noticeable change in flavour and texture, and one aged for 45 days is more pronounced. The sweet spot depends on your taste, and the best way to find it is to try a shorter and a longer aged steak side by side, which is easy to do with our two dry-aged cuts.',
        ],
      },
      {
        heading: 'Aged beef near me and dry aged beef online: the price',
        body: [
          'Dry aged beef costs more than fresh beef of the same cut, because the meat loses weight during ageing and the trim removes more, and because the process ties up cool-room space for weeks. Our [Dry-Aged O\'Connor Ribeye Steak, Bone-In](/shop/beef/dry-aged-o-connor-ribeye-steak-bone-in-bf-100/) is 900g at $68.90, which is $76.56 per kg and $75.79 with GST, aged 45 days and listed as MSA graded. Our [Dry-Aged Bistecca alla Fiorentina T-Bone](/shop/beef/dry-aged-bistecca-alla-fiorentina-t-bone-bf-103/) is 1.1kg at $74.00, which is $67.27 per kg, aged 35 days.',
          'For comparison, our fresh scotch fillet steaks are $74.17 per kg and our rump steaks are $32.00 per kg, so a dry-aged bone-in ribeye is priced close to fresh scotch fillet per kilogram, but it also includes the bone. If you want the dry-aged flavour without the higher price, a dry-aged steak shared between two people with sides is an economical way to enjoy it.',
          'To put the price in context, a 900g bone-in ribeye at $68.90 feeds two people comfortably with sides, which works out at about $34.45 per person before GST. A fresh scotch fillet pack at $44.50 for two 300g steaks costs $22.25 per steak. The dry-aged steak is the more expensive per person, but it is bigger, bone-in and aged for 45 days, so it is a different kind of meal from a weeknight steak.',
        ],
      },
      {
        heading: 'Dry aged butcher and dry aged rib eye: how to choose',
        body: [
          'A dry aged butcher should be able to tell you how long the meat has been aged, at what temperature and humidity, and what the yield loss was. Searches for the best dry aged beef online are really searches for transparency, so for an online supplier, check that the ageing time and the cut are stated on the product page, that the weight is the weight after ageing and trimming, and that the meat arrives vacuum sealed and cold.',
          'Look for thick cuts. Dry-aged steaks are usually cut thick, because the crust has been trimmed away and a thick steak lets you get a good sear on the outside while staying medium-rare inside. Dry aged rib eye and dry aged porterhouse are popular choices, along with dry aged sirloin and dry aged scotch fillet, and some butchers also age wagyu, so dry aged wagyu appears in specialist ranges. If you are asking whats dry aged meat in the first place, it is simply beef that has been aged in the open air for weeks before it is cut, and a bone-in cut such as the bistecca or tomahawk adds flavour and makes a good centrepiece.',
        ],
      },
      {
        heading: 'How to cook a dry aged steak, including a dry aged tomahawk',
        body: [
          'Cook dry aged beef simply. Take it out of the fridge about thirty minutes before cooking so it is not cold in the centre, pat it dry, season with salt, and sear it in a very hot pan or on a hot grill. Because the flavour is concentrated, you do not need much else, and a knob of butter, a sprig of thyme and a rest are plenty.',
          'A dry aged tomahawk is a long-bone ribeye that is cooked in two stages: sear it on both sides, then finish it in a moderate oven or on the cooler side of a barbecue until it reaches your preferred doneness, and rest it before carving. Slice the meat off the bone and serve it in thick slices. A thermometer helps, because thick cuts are easy to over- or under-cook.',
          'Food Standards Australia New Zealand advises keeping raw meat at 5°C or colder, and using separate boards and knives for raw meat and cooked food. Whole steaks are cooked differently from mince, but good handling applies to every cut.',
          'Rest is crucial with thick steaks. Rest the cooked steak for at least five to ten minutes on a warm plate or a rack, loosely covered, so the juices settle. If you carve it straight away, the juices run out and the meat is drier. Add a good pinch of flaky salt to the sliced meat, and serve it with simple sides, such as roasted potatoes, a green salad or grilled vegetables, so the beef is the star.',
        ],
      },
      {
        heading: 'Dry aged beef melbourne and Australia-wide delivery',
        body: [
          'Many people search for dry aged beef Melbourne or dry aged beef in their own city because they want a local specialist. If you cannot find one, ordering online works well: our dry-aged steaks are vacuum sealed and travel through our cold-chain courier network in insulated liners, with each product page stating the target of arriving below 2.5°C. The courier network covers every capital, though delivery takes longer over greater distances.',
          'The store has a $423 AUD minimum across the whole cart. For example, two dry-aged ribeyes ($137.80), two dry-aged T-bones ($148.00), two scotch fillet packs ($89.00) and two rump packs ($64.00) come to $438.80 before GST. GST adds $43.88, and shipping is $25 under $2,000, giving $507.68. You can browse the full range in the [Beef category](/shop/beef/), and our guide to [steak prices per kg](/blog/rump-steak-price-per-kg-australia/) compares the whole steak range.',
        ],
      },
      {
        heading: 'Trade supply: dry aged beef for restaurants and hotels',
        body: [
          'Restaurants, hotels and steakhouses can buy dry-aged cuts through our [wholesale supply for steakhouses and hotels](/wholesale/). ' + TRADE,
          'For a venue, dry aged beef is a menu differentiator, but only if the supply is consistent and the yield is understood. Ask us about the ageing time, the cut and the pack size you need, and we can advise on what is available.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the difference between dry aged and wet aged beef?',
        answer:
          'Dry ageing keeps primal cuts unpackaged in air so moisture evaporates and a crust forms, which concentrates flavour but reduces yield. Wet ageing keeps the meat in a vacuum bag, so there is less weight loss and a milder change in flavour.',
      },
      {
        question: 'How long are your dry aged steaks aged?',
        answer:
          'The dry-aged O\'Connor ribeye is listed as 45 days dry-aged and the bistecca alla Fiorentina T-bone as 35 days. The ageing time is stated on each product page. Prices are $76.56 and $67.27 per kg before 10% GST. Check each product page before you order.',
      },
      {
        question: 'Can I order only one dry aged steak?',
        answer:
          'Not on its own, because the store minimum is $423 AUD across the whole cart. Combine dry-aged steaks with other cuts. GST of 10% is added at checkout, and shipping is $25 under $2,000 and free above. The total is shown before you pay.',
      },
      {
        question: 'Is your dry aged beef halal certified?',
        answer:
          'Yes. All of our products except pork and pork sausages are halal certified, including our dry-aged steaks. Our primary certifying body is AFIC, and we also hold certification from IFANCA and HCA. Ask any supplier to name the certifier and show you the certificate. Certificates are available on request.',
      },
    ],
  },
];
