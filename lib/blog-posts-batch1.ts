import type { BlogPost } from './blog-data';

// Batch 1 of the halal / goat / mutton / turkey launch posts.
// Keyword data: live Semrush (Australia), 16 Nov 2026 — see docs/semrush-live-measured-2026-11-16.csv
// and docs/used-keywords.csv. Facts: NSW Food Authority, Australian Government, MLA; prices from the
// site's own catalogue (ex-GST; 10% GST is added at checkout).

export const BATCH1_POSTS: BlogPost[] = [
  // ---------------------------------------------------------------------------------------------
  {
    slug: 'where-can-i-buy-a-turkey-australia',
    title: "Where Can I Buy a Turkey in Australia? 2026 Buyer's Guide",
    excerpt:
      'Supermarket, butcher or direct cold-chain delivery: where to buy a whole turkey in Australia, what size to order, cooking times and food-safety limits.',
    metaDescription:
      'Where can I buy a turkey in Australia? Compare supermarkets, butchers and cold-chain delivery, plus sizes, cooking times and NSW Food Authority safety rules.',
    heroImage: '/images/products/chicken/Chicken_0017.webp',
    heroImageAlt: 'Raw whole halal turkey on a white background: where can I buy a turkey that is oven-ready',
    niche: 'Poultry',
    categorySlug: 'chicken',
    publishedDate: '2026-11-16',
    readingMinutes: 9,
    primaryKeyword: 'where can i buy a turkey',
    primaryKeywordVolume: 90,
    primaryKeywordKd: 7,
    supportingKeywords: [
      'where can you buy turkey',
      'buy turkey meat online',
      'where can i buy a turkey near me',
      'where to buy fresh turkey near me',
      'turkeys for sale',
    ],
    navigationalKeyword: 'meat direct',
    informationalKeyword: 'turkey meat',
    tags: [
      'turkey near me',
      'turkey for sale',
      'frozen turkeys',
      'frozen whole turkey',
      'turkeys australia',
      'young turkey',
      'christmas turkey',
      'turkeys this christmas',
      'turkey for christmas',
      'christmas turkey order',
    ],
    outboundLinks: [
      {
        url: 'https://www.foodauthority.nsw.gov.au/help/summer-eating/turkey-tips',
        label: 'NSW Food Authority: turkey tips for defrosting, cooking and storing',
        source: 'NSW Food Authority (government)',
      },
      {
        url: 'https://www.youtube.com/watch?v=ubeVG_Nt0pE',
        label: '"How to Butcher a Turkey: Step-by-Step Guide", a butchery walkthrough',
        source: 'YouTube: The Farmers Cupboard',
      },
    ],
    relatedSkus: ['CK-414', 'CK-415'],
    sections: [
      {
        heading: 'Where can you buy a turkey in Australia?',
        body: [
          'Where can I buy a turkey in Australia, and how early do I need to order? For most households the honest answer is that there are three realistic places: a supermarket, a local butcher, or a supplier that ships cold-chain direct to your door. Which one is right depends on how early you plan, how big the bird needs to be and whether you need it to be halal. This guide compares all three, gives you real sizes, cooking times and food-safety limits from the NSW Food Authority, and explains exactly how ordering a whole turkey from Meat Direct (The Meat Agent) works, including the $423 minimum order that surprises first-time buyers.',
          'Because most households cook a whole turkey once a year, around Christmas, the sizes you want can be tight in the final weeks. That is the single biggest reason people type where can you buy turkey into a search box at the last minute and settle for whatever is left. Deciding where to buy a turkey early, before the pressure starts, is the most useful thing you can do.',
          'The table below is a quick map of the options. None of them is automatically best; each solves a different problem.',
          'If you simply want to buy turkey for a festive table, the whole bird and the breast fillet are the two products to compare, and both list their weight and price on the product page.',
        ],
        table: {
          caption: 'Where to buy a whole turkey in Australia: the three main options',
          headers: ['Option', 'Best for', 'Watch-outs', 'Plan ahead by'],
          rows: [
            ['Supermarket', 'Convenience: the bird goes in with the weekly shop', 'Seasonal range, often frozen, limited sizes, halal status varies by brand', 'Check stock store by store; do not leave it to the last week'],
            ['Local butcher', 'A fresh bird, a custom size, and a thaw service if you need one', 'Pre-order is usually essential in the weeks before Christmas', 'Ask for the cut-off date when you order'],
            ['Direct, cold-chain delivery', 'Halal birds, bulk or wholesale volumes, delivery to your door', 'Minimum order applies; courier time must be allowed for', 'Order with several days of margin before the day you need it'],
          ],
        },
        image: {
          src: '/images/products/chicken/Chicken_0018.webp',
          alt: 'Two raw turkey breast fillets laid out beside a sprig of herbs and black peppercorns',
          caption: 'If a whole bird is too big, turkey breast fillets cook in a fraction of the time.',
        },
      },
      {
        heading: 'Fresh or frozen: which turkey should you buy?',
        body: [
          'A fresh turkey is simply a turkey that has been chilled rather than frozen; it needs no thawing but has a short shelf life, so you cook it within a few days of buying. A frozen turkey keeps for much longer but has to be fully defrosted before it goes in the oven, and that is where most of the planning problems start.',
          'The NSW Food Authority is clear on the safe way to do it: a turkey should be fully defrosted in the fridge, not on the kitchen bench, and a large frozen turkey can take up to 3 days to defrost safely. It needs to sit in a dish large enough to hold the liquid that comes out as it thaws, ideally on the bottom shelf so nothing drips onto other food. The fridge itself needs to be at 5°C or below.',
          'There is also a rule that catches people out: if a frozen turkey has significantly defrosted between the shop and your home, it should not go back into the freezer. It needs to be fully defrosted and then cooked properly, and the cooked meat can be frozen afterwards. The Food Authority also points out that if you cannot safely defrost a bird at home, the alternative is to buy fresh or ask your butcher to defrost it in their cool room.',
          'In practice, frozen turkeys and frozen whole turkeys are a good choice if you have the fridge space and the days to spare, and a fresh bird is the better choice if you do not. Either way, work backwards from the day you want to eat: subtract three days for a large frozen bird, then add a buffer for delivery.',
        ],
      },
      {
        heading: 'How big a turkey do you need?',
        body: [
          'A widely used rule of thumb is about 500g of raw bird per guest for a main meal, and closer to 750g per guest if you want proper leftovers. A turkey carries a lot of bone, so a bird that looks enormous in the shop feeds fewer people than the weight suggests. If you are between sizes, go up.',
          'The second thing size controls is time. The NSW Food Authority gives a simple guide: allow roughly 45 minutes per kilogram in an oven at around 160°C to 170°C, so a 4kg turkey takes about 3 hours. The table applies that rule to common sizes. Treat the times as a planning figure only, because ovens, birds and stuffing all vary, and always confirm with a thermometer.',
        ],
        table: {
          caption: 'Turkey size, guests and approximate oven time (45 minutes per kg at 160–170°C)',
          headers: ['Raw weight', 'Guests (about 500g each)', 'Approximate cooking time', 'Fridge defrost if frozen'],
          rows: [
            ['3kg', '6', 'About 2 hours 15 minutes', 'Plan for up to 3 days'],
            ['4kg', '8', 'About 3 hours', 'Plan for up to 3 days'],
            ['4.5kg', '9', 'About 3 hours 20 minutes', 'Plan for up to 3 days'],
            ['5kg', '10', 'About 3 hours 45 minutes', 'Plan for up to 3 days'],
            ['6kg', '12', 'About 4 hours 30 minutes', 'Plan for up to 3 days'],
          ],
        },
      },
      {
        heading: 'Buy turkey meat online: how ordering a whole halal turkey from Meat Direct works',
        body: [
          'If you would rather buy turkey meat online than queue at a counter, here is exactly how it works with us, including the parts that are easy to miss. Our [Whole Halal Turkey](/shop/chicken/whole-halal-turkey-ck-414) is a 4.5kg bird listed at $220.50 AUD before GST, which works out at $49.00 per kilogram. GST of 10% is added at checkout, so the bird costs $242.55 including GST. The listing describes it as fresh raw rather than frozen.',
          'The part that surprises people is the minimum order. Our store has a $423 AUD minimum across the whole order, so a single turkey cannot be ordered on its own. In practice that makes the turkey the centrepiece of a bigger Christmas order: the rest of the table, a few weeks of family meals and a freezer top-up. If you are not sure how that maths plays out for a household, our guide to [the $423 minimum order](/blog/bulk-meat-packs-near-me-meat-box-australia) walks through it, and the [family meat-volume formula](/blog/bulk-meat-packs-near-me-meat-box-australia) helps you size the rest of the order.',
          'Shipping is $25 flat for orders under $2,000 and free above that. Orders travel through our cold-chain courier network in insulated liners, and each product page states the target of arriving below 2.5°C; the [how our cold-chain delivery works](/blog/buying-meat-online-australia-delivery-cold-chain-payid) explains how that is achieved. You can pay by PayID, bank transfer or crypto, and crypto orders receive an automatic 10% discount.',
          'The whole [poultry range is in the Pasture-Raised Poultry category](/shop/chicken), and if you only want a smaller, faster option, the [Turkey Breast Fillet](/shop/chicken/turkey-breast-fillet-ck-415) is a 1kg pack at $29.00 before GST ($31.90 with GST). It cooks in a fraction of the time and suits smaller tables. All of our products except pork and pork sausages are halal certified; our primary certifying body is AFIC, and we also hold certification from IFANCA and HCA.',
          'If you would rather cook a smaller roast, our guide to [fresh whole turkey and turkey breast](/blog/halal-turkey-fresh-whole-and-breast-australia) compares the two formats, with real prices and cooking times.',
          'Hotels, restaurants, cafés and caterers can order turkey for festive menus and events through our [trade supply for hotels and restaurants](/wholesale). All of our products except pork and pork sausages are halal certified, you choose the cut state (whole primal, portioned, diced to spec, vacuum-sealed, fresh chilled or snap-frozen), and trade accounts pay on order by PayID, bank transfer or crypto. Daily or weekly cold-chain delivery runs in the Ipswich and Brisbane metro area, with weekly delivery statewide and interstate and monthly bulk orders anywhere in Australia.',
        ],
      },
      {
        heading: 'Where can I buy a turkey near me? Questions to ask before you commit',
        body: [
          'If you are searching for where you can buy a turkey near me, or where to buy fresh turkey near me, the shop you find matters less than the answers you get from it. Ask these questions before you hand over a deposit.',
          'First, is the bird fresh or frozen, and if it is frozen, when was it frozen and can they thaw it for you? Second, what is the actual weight range, since birds are often sold as a band rather than a precise weight, and the price per kilogram is what lets you compare two shops fairly. Third, what is included: the neck and giblets, the packaging, and whether the bird is trussed. Fourth, what is the pick-up window, and what happens if you cannot collect on the day. Finally, if it matters to you, ask whether the bird is halal and who certified it.',
          'When you search for turkeys for sale, you will also find live birds and breeding stock listed, which is a different market entirely. For a table, you want a processed, oven-ready bird from a food retailer, so check that the listing says so.',
        ],
      },
      {
        heading: 'What is turkey meat, and how does it differ from chicken?',
        body: [
          'Turkey meat comes from a larger bird than chicken, and the size changes how you cook it. The breast is the lean, pale meat and the legs and thighs are darker and richer. Because the breast carries little fat, it dries out quickly if it is overcooked, while the legs need more time to become tender, which is the central challenge of roasting a whole bird.',
          'That is why a thermometer is worth more than any timing chart. The Food Authority says that if you use a meat thermometer, the thickest part of the turkey should reach at least 74°C. It also gives a visual test: cooked turkey meat is white and the juices run clear, not pink, when a skewer is pushed through to the bone in the thickest part of the thigh or breast.',
          'If you want to see how a whole bird is divided into its main parts, The Farmers Cupboard channel has a step-by-step butchery video called "How to Butcher a Turkey". It is aimed at people processing a bird at home, so you will not need the early steps if you buy an oven-ready turkey, but it is a useful reference if you plan to cook the legs and breast separately.',
        ],
      },
      {
        heading: 'Turkey food safety: the rules that matter',
        body: [
          'Defrosting, cooking, storing and serving can each give bacteria a chance to spoil the meal, so it is worth knowing the limits. These come from the NSW Food Authority guidance linked at the end of this article.',
          'Keep the bird at 5°C or below in the fridge and leave it in its wrapping while it thaws. The longest a thawing or thawed turkey should be left at room temperature is 2 hours. Do not wash the turkey before cooking, use separate boards and knives for raw poultry, and wash your hands thoroughly after handling it. Stuffing should be made on the day, and the cavity should not be overstuffed.',
          'For cooking, preheat the oven first and do not try to cook the bird at a lower temperature for longer, for example overnight, because that encourages bacteria to grow. Once it is cooked, eat it or refrigerate it within 2 hours. Leftovers keep best in small containers in the fridge and should be eaten within 3 days; slices can be frozen for longer. Reheat until steaming hot all the way through, at least 75°C.',
        ],
      },
      {
        heading: 'Common mistakes when buying a turkey',
        body: [
          'The most common mistake is leaving it late and buying whatever is available, which usually means a frozen bird that cannot defrost in time. The second is buying by looks rather than by weight and guests, then finding the bird either too small or too large for the oven. Check your oven and roasting dish dimensions before you choose a size.',
          'The third is thawing on the bench to save time, which the Food Authority specifically warns against. The fourth is comparing prices without comparing weight: a lower price on a smaller bird can cost more per kilogram. The fifth is forgetting that the bird needs room in the fridge for days, not hours, so clear a shelf before it arrives.',
          'If you want a second festive bird for the table, our guide to [duck meat, whole duck and duck fat](/blog/duck-meat-whole-duck-and-duck-fat-australia) covers sizes, prices and roasting.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How far ahead should I order a turkey for Christmas?',
        answer:
          'Order as early as you can. If the bird is frozen, allow up to 3 days to defrost in the fridge, plus a buffer for delivery. Our courier network aims for about 48 hours, so ordering at least a week before the day you need it leaves comfortable margin.',
      },
      {
        question: 'Can I buy just one turkey from The Meat Agent?',
        answer:
          'Not on its own. The store has a $423 AUD minimum order across the whole cart, so the turkey is ordered alongside other cuts. GST of 10% is added at checkout, shipping is $25 below $2,000 and free above it.',
      },
      {
        question: 'How long does a turkey take to cook?',
        answer:
          'The NSW Food Authority suggests about 45 minutes per kilogram at roughly 160°C to 170°C, so a 4kg turkey takes about 3 hours. Check that the thickest part reaches at least 74°C with a thermometer before you serve it, then rest the bird before carving.',
      },
      {
        question: 'Is it safe to defrost a turkey on the kitchen bench?',
        answer:
          'No. The Food Authority says a turkey should be fully defrosted in the fridge. A thawing or thawed turkey should be at room temperature for no more than 2 hours in total, and large birds can take up to 3 days in the fridge.',
      },
      {
        question: 'Is your turkey halal?',
        answer:
          'Yes. All of our products except pork and pork sausages are halal certified, including the Whole Halal Turkey. Our primary certifying body is AFIC, and we also hold certification from IFANCA and HCA. If you buy turkey elsewhere, ask the supplier to name the certifying body and show the certificate.',
      },
    ],
  },
  // ---------------------------------------------------------------------------------------------
  {
    slug: 'where-to-buy-goat-meat-near-me-australia',
    title: 'Where to Buy Goat Meat Near Me: Halal Cuts and Prices',
    excerpt:
      'Where to buy goat meat near me in Australia: halal goat cuts, real per-kg prices, how to judge a supplier, and how direct cold-chain delivery works.',
    metaDescription:
      'Where to buy goat meat near me in Australia: compare suppliers, see real halal goat prices per kg, learn what certification means and how delivery works.',
    heroImage: '/images/products/goat-mutton/GoatMutton_0001.webp',
    heroImageAlt: 'Raw bone-in goat leg on a dark wooden board, showing where to buy goat meat near me in a whole-leg cut',
    niche: 'Goat & Mutton',
    categorySlug: 'goat-mutton',
    publishedDate: '2026-11-16',
    readingMinutes: 10,
    primaryKeyword: 'where to buy goat meat near me',
    primaryKeywordVolume: 170,
    primaryKeywordKd: 10,
    supportingKeywords: [
      'where can i buy goat meat near me',
      'buy goat meat near me',
      'fresh goat meat near me',
      'goat meat shop near me',
      'where can you buy goat meat',
    ],
    informationalKeyword: 'meat of a goat',
    tags: [
      'goats meat',
      'boer goat meat',
      'cut goat',
      'cutting goats',
      'cutting a goat',
      'goat meats',
      'where can i buy goat meat',
      'where to buy goat meat',
      'where can i purchase goat meat',
      'goat meat recipes',
    ],
    outboundLinks: [
      {
        url: 'https://agriculture.gov.au/biosecurity-trade/export/controlled-goods/meat/exporting-halal-red-meat-and-products',
        label: 'Australian Government: exporting halal red meat and products',
        source: 'Department of Agriculture, Fisheries and Forestry',
      },
      {
        url: 'https://www.mla.com.au/globalassets/mla-corporate/extensions-training-and-tools/creative-commons/the-effect-of-cut-and-cooking-method-on-sheepmeat-eating-quality---cc.pdf',
        label: 'The effect of cut and cooking method on sheepmeat eating quality (factsheet)',
        source: 'Meat & Livestock Australia',
      },
      {
        url: 'https://www.youtube.com/watch?v=kLwwOojt2ow',
        label: '"Professional Goat & Mutton Cutting", a video of a carcass being cut into pieces',
        source: 'YouTube: Excellent Food',
      },
    ],
    relatedSkus: ['GT-1001', 'GT-1003', 'GT-1004'],
    sections: [
      {
        heading: 'Where to buy goat meat near me in Australia',
        body: [
          'Where to buy goat meat near me is one of those searches where the answer changes completely depending on your postcode, because goat is a specialty meat in Australia rather than a supermarket staple. In practice you have four routes: a halal butcher or specialty grocer, a farm or abattoir that sells direct, a general butcher who will order it in, or a supplier that ships cold-chain to your door. This guide compares them, shows real halal goat prices per kilogram from Meat Direct (The Meat Agent), and explains what to check so you end up with fresh goat meat rather than a disappointing tray.',
          'Searches like where can I buy goat meat near me, goat meat shop near me and where can you buy goat meat usually come from one of two buyers. The first wants a single family order for a curry, a roast or a celebration. The second runs a kitchen, caterer or restaurant and needs consistent supply. Both are served by the same checklist, but the second group should also read our [wholesale page for restaurants and caterers](/wholesale).',
          'If you are in a capital city, our guide to [buying goat in Adelaide, Brisbane, Perth, Melbourne and Sydney](/blog/goat-meat-delivered-adelaide-brisbane-perth-melbourne-sydney) explains what to expect in each.',
        ],
        table: {
          caption: 'Four ways to buy goat meat in Australia',
          headers: ['Route', 'Best for', 'Watch-outs'],
          rows: [
            ['Halal butcher or specialty grocer', 'Walk-in buying, choosing your own cut, asking questions', 'Range varies; goat may need ordering ahead'],
            ['Farm gate or abattoir direct', 'Whole or half animals in bulk', 'Large quantities, processing and freezer space are on you'],
            ['General butcher (special order)', 'Convenience if you already shop there', 'Cut specification and certification must be confirmed'],
            ['Direct, cold-chain delivery', 'Any postcode our courier reaches, halal-certified cuts', 'Minimum order applies; allow for courier time'],
          ],
        },
        image: {
          src: '/images/products/goat-mutton/GoatMutton_0003.webp',
          alt: 'Diced raw goat curry cuts piled on a wooden board with fresh rosemary',
          caption: 'Diced curry cuts are the easiest way to try goat for the first time.',
        },
      },
      {
        heading: 'What is the meat of a goat called?',
        body: [
          'In Australia the meat of a goat is usually just sold as goat, and that plain label is what you should look for on the pack. On restaurant menus you will also see capretto, which is Italian for kid, and cabrito, the Spanish word, both meaning meat from a young animal. A young kid is generally tender and mild, while meat from an older goat has more flavour and needs longer, slower cooking.',
          'That difference matters when you are comparing prices and cuts. A bone-in leg or shoulder from an older animal rewards a long roast or braise, while mince and diced cuts are forgiving and quick to use. If a supplier cannot tell you which cut you are buying, or how it should be cooked, that is a reason to keep looking.',
        ],
      },
      {
        heading: 'Goat cuts and prices at The Meat Agent',
        body: [
          'Price is the other thing people want to know before they commit, so here is our current range. Prices are listed before GST, and 10% GST is added at checkout. We list each pack at its own weight, so we have shown the price per kilogram as well, which is the only fair way to compare cuts and suppliers.',
          'Our goat range is [Halal Goat Mince](/shop/goat-mutton/halal-goat-mince-gt-1002), [Halal Goat Diced Curry Cuts](/shop/goat-mutton/halal-goat-diced-curry-cuts-gt-1003), [Halal Goat Ribs Rack](/shop/goat-mutton/halal-goat-ribs-rack-gt-1005), a whole [Halal Goat Leg](/shop/goat-mutton/halal-goat-leg-bone-in-whole-gt-1001) and a [Halal Goat Shoulder](/shop/goat-mutton/halal-goat-shoulder-bone-in-gt-1004). The mutton range sits alongside it in the [Halal Goat and Mutton category](/shop/goat-mutton).',
        ],
        table: {
          caption: 'Halal goat cuts: pack weight, price before GST, and price per kg',
          headers: ['Cut', 'Pack', 'Price (ex GST)', 'Per kg', 'With 10% GST'],
          rows: [
            ['Goat mince', '1kg', '$15.00', '$15.00', '$16.50'],
            ['Goat diced curry cuts', '1kg', '$21.00', '$21.00', '$23.10'],
            ['Goat ribs rack', '1kg', '$24.99', '$24.99', '$27.49'],
            ['Goat leg, bone-in', '2.2kg', '$44.00', '$20.00', '$48.40'],
            ['Goat shoulder, bone-in', '1.8kg', '$53.98', '$29.99', '$59.38'],
          ],
        },
      },
      {
        heading: 'Which goat cut for which dish',
        body: [
          'Meat and Livestock Australia explains the principle in its sheepmeat factsheet: muscles that work constantly contain more connective tissue, and the collagen in that tissue can be partially broken down by casserole-style wet cooking with low heat and moisture over a period of time. Muscles that do little work are more tender and suit pan frying, grilling or roasting. The factsheet is about sheepmeat, but the same cut-and-method logic is how goat is cooked in practice, and goat is leaner than lamb, so the cut matters even more.',
          'Applied to the range above, the leg and shoulder are working muscles, so roast them low and slow or braise them. Diced curry cuts are made for simmering in a sauce until tender. Ribs suit a covered, slow cook so they do not dry out. Mince is the quickest option: it makes koftas, burgers, bolognese and keema, and it browns well because there is little surface moisture.',
          'The most common cooking error is treating goat like a steak. Because it carries less fat than many cuts of lamb, fast, high-heat cooking of a tough cut gives a dry, chewy result. Give it time, keep the heat moderate, and use moisture.',
          'Goat takes seasoning well, and a marinade does two jobs: it adds flavour and, if it contains an acidic ingredient such as yoghurt, lemon juice or vinegar, it helps balance a stronger flavour. A simple marinade of yoghurt, garlic, ginger and ground spices is a common starting point for curries and roasts. Marinate in the fridge, not on the bench, and give bone-in cuts several hours or overnight.',
          'Salt matters more than people expect. Season generously and early, and taste the sauce as it cooks, because lean meat needs a well-seasoned liquid to carry flavour. If you are browning the meat first, pat it dry so it sears rather than steams, and brown in batches so the pan stays hot.',
        ],
      },
      {
        heading: 'Fresh goat meat near me: how to judge a supplier',
        body: [
          'When you are looking for fresh goat meat near me, price is the least reliable signal. These are the checks that tell you more.',
          'Ask for the cut by name and weight, so you are comparing like with like. Ask how it is packed and whether it is chilled or frozen, because that decides how long you have after it arrives. Ask how it is kept cold between the processor and you; for our orders the target is arrival below 2.5°C, and our [cold-chain delivery guide](/blog/buying-meat-online-australia-delivery-cold-chain-payid) explains how we do that. Look for a name and ABN you can check; our [guide to checking a wholesale butcher\'s ABN](/blog/wholesale-beef-near-me-meat-supplier-restaurants-australia) shows how. And finally ask who certified the meat as halal, and whether you can see the certificate.',
        ],
      },
      {
        heading: 'Halal goat meat: what the certification covers',
        body: [
          'Halal certification is not the same as a halal label on a pack, and it is worth knowing where the rules come from. The Australian Government\'s halal program, the Authorised Halal Program, was established in 1997 as a partnership between the Government, Approved Islamic Organisations and export-registered establishments. The Department of Agriculture states that it regulates the production and certification of halal red meat and red meat products intended for export, and that only product compliant with the program and with importing-country requirements is eligible for an official Australian halal certificate.',
          'For meat you buy in Australia, the practical step is to find out which certifying body stands behind the supplier. All of our products except pork and pork sausages are halal certified; our primary certifying body is AFIC, and we also hold certification from IFANCA and HCA. Whatever supplier you choose, ask them to name the body, not just say that the meat is halal.',
        ],
      },
      {
        heading: 'How ordering goat meat from us works',
        body: [
          'We ship through our cold-chain courier network. The store has a $423 AUD minimum order across the whole cart, GST of 10% is added at checkout, shipping is $25 for orders under $2,000 and free above that. You can pay by PayID, bank transfer or crypto, and crypto orders receive an automatic 10% discount.',
          'The minimum is easy to reach with goat, because a leg, a shoulder and a few packs of mince and diced cuts add up quickly, and goat freezes well in its vacuum seal. Many customers build a combined order of goat, mutton and lamb and freeze portions. If you are cooking for a business, contact our trade desk through the wholesale page instead, where we can set up regular deliveries.',
          'We also supply goat to restaurants, hotels, caterers and butchers who put goat on the menu or the counter. See our [trade accounts for restaurants and caterers](/wholesale) for cadence and delivery options. All of our products except pork and pork sausages are halal certified, you choose the cut state (whole primal, portioned, diced to spec, vacuum-sealed, fresh chilled or snap-frozen), and trade accounts pay on order by PayID, bank transfer or crypto. ',
        ],
      },
      {
        heading: 'How much goat meat to buy and how to store it',
        body: [
          'A planning figure many cooks use is roughly 250g to 300g of boneless meat per person for a curry or braise, and about 400g to 500g per person for bone-in cuts such as leg, shoulder or ribs, because the bone is part of the weight. Those are rules of thumb rather than hard rules, and appetite and side dishes change them. A 2.2kg bone-in leg will comfortably serve a table of four to five as a roast, and more if it is part of a spread with rice, bread and salads.',
          'For a larger gathering it is usually easier to combine cuts: a leg or shoulder for the centrepiece, diced curry cuts for a second dish, and mince for kebabs or kofta. That also protects you if someone does not like one of the dishes. If you are cooking for a business or an event, our wholesale page lets you set up regular or one-off supply.',
          'Keep goat meat in the fridge at 5°C or below, in its vacuum seal until you are ready to use it, and cook it within the use-by guidance on the pack. If you will not use it in time, freeze it straight away rather than waiting; freezing in the original seal helps prevent freezer burn. Portion larger cuts before freezing so you only thaw what you will cook.',
          'Thaw in the fridge on a tray, not on the bench, and plan to cook the meat after thawing rather than refreezing it, which protects quality. If you have leftovers from a cooked dish, cool them promptly and refrigerate or freeze them.',
        ],
      },
      {
        heading: 'Common mistakes when buying goat meat',
        body: [
          'The first mistake is buying on price alone without checking the pack weight, which makes a small pack look cheap. The second is buying the wrong cut for the dish, for example a tough leg for a quick stir-fry. The third is assuming goat and lamb behave the same; our comparison of [goat and lamb](/blog/goat-vs-lamb-australia) explains the differences, and our guide to [lamb meat versus mutton](/blog/lamb-meat-vs-mutton-australia) covers the age question.',
          'The fourth mistake is overcooking lean cuts quickly and calling the result tough, when the real problem was heat. The fifth is not planning the freezer: if you order a whole leg, portion and label it so you only thaw what you will use.',
          'If you want to see how a carcass is divided into the cuts you are buying, the Excellent Food channel has a video titled "Professional Goat & Mutton Cutting". It shows the cutting process, which helps you picture where the leg, shoulder and ribs come from before you decide what to order.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Where can I buy goat meat near me if there is no halal butcher in my area?',
        answer:
          'Order direct from a supplier that ships cold-chain. Meat Direct ships halal-certified goat cuts through its courier network in insulated liners. The store minimum is $423 AUD across the whole cart, GST of 10% is added at checkout, and shipping is $25 under $2,000 and free above.',
      },
      {
        question: 'Is goat meat the same as mutton?',
        answer:
          'No. Goat meat comes from goats, while mutton comes from mature sheep. They are often cooked in similar ways because both reward slow, moist cooking, but the flavour differs. Our guide to lamb versus mutton explains the sheep age definitions in more detail.',
      },
      {
        question: 'What is the best goat cut for curry?',
        answer:
          'Diced curry cuts, bone-in or boneless, and shoulder suit curry best because they simmer until tender. Our diced curry cuts are $21.00 per kg before GST. Brown the meat first, then cook it gently in the sauce with the lid on until it is tender.',
      },
      {
        question: 'How long does goat meat keep?',
        answer:
          'Keep it refrigerated at 5°C or colder and cook it within a few days, or freeze it in its vacuum seal. Check the pack and the use-by guidance, and thaw frozen goat in the fridge rather than on the bench before cooking.',
      },
      {
        question: 'Is your goat meat halal certified?',
        answer:
          'Yes. All of our products except pork and pork sausages are halal certified, including every goat cut. Our primary certifying body is AFIC, and we also hold certification from IFANCA and HCA. Whichever supplier you use, ask them to name the certifying body rather than simply saying the meat is halal.',
      },
    ],
  },
  // ---------------------------------------------------------------------------------------------
  {
    slug: 'goat-vs-lamb-australia',
    title: 'Goat vs Lamb: Taste, Cooking and Price Compared in Australia',
    excerpt:
      'Goat vs lamb compared for Australian buyers: flavour, fat, cooking method and a real per-kg price comparison from our catalogue.',
    metaDescription:
      'Goat vs lamb: how they differ in flavour, fat and cooking, with a real per-kg price comparison and a guide to which one to buy for your recipe.',
    heroImage: '/images/products/goat-mutton/GoatMutton_0004.webp',
    heroImageAlt: 'Raw goat shoulder on a wooden board, the cut at the centre of a goat vs lamb decision',
    niche: 'Goat & Mutton',
    categorySlug: 'goat-mutton',
    publishedDate: '2026-11-16',
    readingMinutes: 9,
    primaryKeyword: 'goat vs lamb',
    primaryKeywordVolume: 480,
    primaryKeywordKd: 28,
    navigationalKeyword: 'lamb per kg price',
    supportingKeywords: [
      'lamb vs goat meat',
      'lamb vs goat',
      'goat meat vs lamb',
      'goat vs lamb meat',
      'goat meat lamb',
    ],
    informationalKeyword: 'goat or lamb meat',
    tags: [
      'lamb or goat meat',
      'goat lamb meat difference',
      'lamb and goat meat difference',
      'lamb goat difference',
      'goat meat or lamb meat',
      'mutton lamb or goat',
      'mutton vs goat meat',
      'recipes goat meat',
      'goat meat vs mutton',
      'lamb goat meat',
    ],
    outboundLinks: [
      {
        url: 'https://www.mla.com.au/globalassets/mla-corporate/extensions-training-and-tools/creative-commons/the-effect-of-cut-and-cooking-method-on-sheepmeat-eating-quality---cc.pdf',
        label: 'The effect of cut and cooking method on sheepmeat eating quality (factsheet)',
        source: 'Meat & Livestock Australia',
      },
      {
        url: 'https://www.youtube.com/watch?v=QNwQljENU6w',
        label: '"How To Prepare Lamb Mutton And Goat Completely Boneless", a butchery lesson',
        source: 'YouTube: Chef Salim Recipes',
      },
    ],
    relatedSkus: ['GT-1002', 'GT-1003', 'GT-1001'],
    sections: [
      {
        heading: 'Goat vs lamb: the short answer',
        body: [
          'Goat vs lamb is a question that comes up the moment someone tries a goat curry or sees goat in a halal butcher and wonders whether it is worth swapping. The short answer is that the two meats are close cousins in the kitchen but not identical. Goat is generally leaner and benefits from slower, moister cooking, while lamb has more fat and is more forgiving. Which one you should buy comes down to the dish, the cut and the price, and this guide compares all three using real numbers from the Meat Direct (The Meat Agent) catalogue.',
          'A caution first: most of what you will read online about lamb vs goat meat is written for overseas readers, with no Australian pricing and no sourcing for the claims. We have tried to do the opposite. Where we give a fact we say where it comes from, and where something is a matter of taste we say so.',
          'When you compare the two, use the lamb per kg price rather than the pack price, and divide the goat price the same way, so the comparison is fair.',
          'Looking for another lean red meat? Our guide to [kangaroo meat for sale](/blog/kangaroo-steak-near-me-kangaroo-meat-for-sale) covers kangaroo steak, mince and tail.',
        ],
        table: {
          caption: 'Goat meat vs lamb at a glance',
          headers: ['Factor', 'Goat', 'Lamb'],
          rows: [
            ['Fat', 'Generally leaner, less marbling', 'Generally more fat, more forgiving'],
            ['Best cooking method', 'Low and slow, moist heat for working muscles', 'Fast heat for tender cuts, slow for shoulder and shanks'],
            ['Flavour', 'Often described as earthy and distinctive; opinions vary', 'Familiar, richer; stronger in older animals'],
            ['Typical dishes', 'Curries, braises, biryani, slow roasts', 'Roasts, cutlets, chops, kebabs, kofta'],
            ['Price (our catalogue, mince)', '$15.00 per kg', '$21.00 per kg'],
          ],
        },
        image: {
          src: '/images/products/goat-mutton/GoatMutton_0002.webp',
          alt: 'Raw minced goat on baking paper with rosemary and salt on a black slate surface',
          caption: 'Goat mince is the simplest way to compare the two meats in the same recipe.',
        },
      },
      {
        heading: 'Goat or lamb meat: which should you buy?',
        body: [
          'If you are choosing between goat or lamb meat for a specific meal, start with the cooking method rather than the label. For a long-simmered curry, biryani or braise, goat holds its shape and carries spices well, and the leaner meat gives a clean sauce. In a goat meat vs lamb contest for a slow-cooked dish, goat usually wins on value. For a quick roast of tender cuts, chops or cutlets, lamb is the safer choice because its fat protects it from drying out.',
          'If you are cooking for guests who have not eaten goat before, mince or diced curry cuts are the gentlest introduction, because they are cooked in a sauce and the flavour is blended with spices. A bone-in leg roast is the more confident option for people who already enjoy it. Both meats are often interchangeable in recipes written for the other, as long as you adjust the cooking time for the leanness.',
          'When you are standing at a butcher or looking at a supplier\'s range, use this short checklist. Decide the dish first: slow and saucy points to goat or lamb shoulder, quick and grilled points to lamb. Check the cut, because a working muscle needs time whatever the animal. Compare the price per kilogram, not the pack price. Ask about trim: a well-trimmed cut removes a lot of strong flavour.',
          'If you are still unsure, buy mince or diced cuts of both, cook them in the same recipe on the same night, and taste them side by side. That is the cheapest and most reliable way to learn which one your household prefers.',
        ],
      },
      {
        heading: 'Flavour and fat: what actually differs',
        body: [
          'Flavour is the part that online articles argue about most, and the honest summary is that it varies with the age of the animal, how it was raised, which cut you use and how it is trimmed. Goat is usually described as leaner with a distinctive, earthy character, and some people find it milder and slightly sweeter than lamb, while others find it stronger. Lamb is richer because of its fat, and that fat is also where much of the stronger flavour in older sheep sits.',
          'Meat and Livestock Australia makes a practical point about this in its sheepmeat factsheet: to avoid pronounced mutton flavours, heavily trim the fat from the meat of older animals. That is advice about sheep, but it points to a general truth: trimming surface fat is the single easiest way to tone down strong flavour in any ruminant meat.',
          'On fat content itself, we are deliberately not quoting nutrition numbers here, because they vary by cut and by animal. If nutrition matters to you, compare the nutrition panels on the packs you are choosing between rather than relying on a general claim.',
        ],
      },
      {
        heading: 'Cooking goat and lamb: the method decides the result',
        body: [
          'The MLA factsheet explains why method matters. Muscles used constantly contain more connective tissue, and the collagen can be partially broken down by casserole-style wet cooking at low heat over time. Muscles that do little work are tender and suit pan frying, grilling or roasting. In sheepmeat, the loin is the tender cut; the legs and shoulder are the working muscles.',
          'The same logic applies to goat in practice, and because goat is leaner, mistakes show up faster. A goat leg roasted hot and fast can be dry; the same leg roasted covered at a moderate temperature, or braised, becomes tender. Lamb is more tolerant, but a lamb shoulder still rewards the same slow approach.',
          'The practical rule is simple. For tender cuts use quick, dry heat and do not overcook. For working muscles use moisture, low heat and time. For mince, brown it well and then decide whether it is going into a sauce or a patty.',
          'Swapping one meat for the other is easy if you adjust four things. First, cut size: for a curry or braise, cut goat into slightly larger pieces than you would lamb, because lean meat dries out more easily when it is chopped small. Second, time: allow longer for goat, and judge by tenderness rather than the clock, pressing a piece with a fork to see whether it yields.',
          'Third, liquid: keep the pot covered and add a little extra stock or water if the sauce reduces too far, because goat has less fat to keep it moist. Fourth, heat: keep it moderate. A gentle simmer or a covered low oven gives a better result than a hard boil. Going the other way, if you are replacing goat with lamb in a slow recipe, you can usually shorten the time and expect a richer, fattier sauce, so skim the surface before serving.',
          'For mince, no adjustment is needed. Goat mince and lamb mince can be swapped one for one in koftas, burgers, bolognese and keema. Goat mince will produce a slightly leaner result, so a splash of oil in the pan helps with browning.',
        ],
      },
      {
        heading: 'Price comparison: goat vs lamb per kilogram',
        body: [
          'Here is how the two compare in our own catalogue, per kilogram and before GST. We have chosen like-for-like cuts where we can. Our goat leg is bone-in and our lamb leg roast is boneless, so the leg comparison is not exact, and we have said so in the table.',
          'On the cuts that compare directly, goat comes out cheaper: [goat mince](/shop/goat-mutton/halal-goat-mince-gt-1002) is $15.00 per kg against $21.00 for our lamb mince, and [goat diced curry cuts](/shop/goat-mutton/halal-goat-diced-curry-cuts-gt-1003) are $21.00 per kg against $26.50 for diced lamb leg. The lamb range is in the [Southern Pasture Lamb category](/shop/lamb). Prices are before 10% GST, which is added at checkout.',
          'If you are costing a menu rather than a family dinner, the same per-kilogram figures apply to trade orders. Hotels, restaurants and caterers can set up a [commercial supply account](/wholesale) and choose goat, lamb or both in the cut state their kitchen needs. All of our products except pork and pork sausages are halal certified, you choose the cut state (whole primal, portioned, diced to spec, vacuum-sealed, fresh chilled or snap-frozen), and trade accounts pay on order by PayID, bank transfer or crypto. ',
        ],
        table: {
          caption: 'Our catalogue prices per kg, before GST',
          headers: ['Cut', 'Goat', 'Lamb', 'Note'],
          rows: [
            ['Mince, 1kg', '$15.00', '$21.00', 'Directly comparable'],
            ['Diced for curry, 1kg', '$21.00', '$26.50', 'Lamb is diced leg'],
            ['Leg roast', '$20.00 (bone-in, 2.2kg pack)', '$27.22 (boneless rolled, 1.8kg pack)', 'Bone-in vs boneless: not like for like'],
          ],
        },
      },
      {
        heading: 'Which one for which dish',
        body: [
          'For curry, biryani and slow braises, choose goat shoulder or diced curry cuts and cook until tender. For a quick weeknight meal, lamb mince or goat mince both work, and goat mince tends to be cheaper. For a celebration roast, a bone-in goat leg or a lamb leg both suit a long, covered roast.',
          'For grilling, choose lamb cutlets or chops, because tender, fatty cuts are what grilling rewards. Whether you are reading about goat vs lamb meat or searching for goat meat lamb recipes, the decision rule is the same: match the cut to the cooking method. If you are cooking kebabs from a working muscle, marinate and cube it, or choose goat shoulder braised first. If you are unsure, our [lamb cutlets and chops guide](/blog/lamb-prices-per-kg-australia) is a good starting point for lamb.',
          'If you are also weighing up older sheep, see our guide to [lamb meat versus mutton](/blog/lamb-meat-vs-mutton-australia), and if your main question is where to find goat in the first place, read [where to buy goat meat near you](/blog/where-to-buy-goat-meat-near-me-australia).',
          'Goat and lamb both appear in celebration cooking across many cuisines, including South Asian, Middle Eastern and African dishes, and both are staples in many halal kitchens. All of our products except pork and pork sausages are halal certified; our primary certifying body is AFIC, and we also hold certification from IFANCA and HCA, so the choice between goat and lamb does not change the certification.',
          'If you are feeding a crowd, a whole bone-in leg or shoulder of goat makes a dramatic centrepiece, and lamb works equally well. The practical difference is time: plan for goat to take longer, and start earlier. If you are cooking for a business, our [wholesale page for restaurants, hotels and caterers](/wholesale) explains how regular supply works.',
          'To see how goat is sold in each major city, read our guide to [goat meat across the capital cities](/blog/goat-meat-delivered-adelaide-brisbane-perth-melbourne-sydney).',
        ],
      },
      {
        heading: 'Shopping terms worth knowing before you compare',
        body: [
          'A few labels change what you are really paying for. Bone-in means the weight includes bone, so a bone-in leg gives you less edible meat per kilogram than a boneless one; that is not a reason to avoid it, because the bone adds flavour in a slow roast, but it matters when you compare prices. Boneless and diced cuts cost more per kilogram but waste nothing.',
          'Trimmed means surface fat and silverskin have already been removed, which is useful for goat and mutton where strong flavour lives in the fat. Vacuum-sealed means the meat can be refrigerated or frozen in the original pack, which protects it from freezer burn. And always check whether the price you are looking at is for the whole pack or per kilogram, because a small pack can look cheaper than it is.',
        ],
      },
      {
        heading: 'Common mistakes when swapping goat and lamb',
        body: [
          'The first mistake is cooking goat at lamb timings. Goat is leaner, so quick, high-heat cooking of a working muscle gives a dry, chewy result. The second is skipping the trim: surface fat and silverskin carry a lot of strong flavour. The third is cutting too small for a long cook, so the pieces dry out before they are tender.',
          'The fourth is buying on price per pack rather than per kilogram; always compare the per-kilogram figure. The fifth is expecting the flavour to be identical, then being disappointed. Treat goat as its own meat that happens to behave well in lamb recipes.',
          'If you want to see the three meats boned out side by side, the Chef Salim Recipes channel has a video called "How To Prepare Lamb Mutton And Goat Completely Boneless", a beginner butchery lesson. It is useful if you plan to buy a whole leg or shoulder and prepare it yourself.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is goat meat healthier than lamb?',
        answer:
          'Goat is generally leaner, but nutrition varies by cut and animal, so we do not quote figures. Compare the nutrition panels on the specific packs you are choosing between, and trim visible fat from either meat before cooking if you want a leaner meal.',
      },
      {
        question: 'Can I use goat in a lamb recipe?',
        answer:
          'Usually yes, especially for curries, braises and mince dishes. Because goat is leaner, cook it more gently and for longer, keep the pot covered and add a little extra liquid if the sauce reduces. For mince, you can swap goat and lamb one for one.',
      },
      {
        question: 'Which is cheaper, goat or lamb?',
        answer:
          'In our catalogue, goat mince is $15.00 per kg against $21.00 for lamb mince, and goat diced curry cuts are $21.00 per kg against $26.50 for diced lamb leg, all before 10% GST. Always compare per-kilogram prices, because pack sizes and bone-in versus boneless cuts differ.',
      },
      {
        question: 'Does goat taste gamey?',
        answer:
          'Opinions differ, and flavour varies with the age of the animal and the cut. Many people describe goat as earthy and distinctive rather than gamey. Trimming visible fat, marinating with acidic ingredients such as yoghurt or lemon, and cooking it gently all help balance stronger flavour.',
      },
      {
        question: 'Is your goat and lamb halal certified?',
        answer:
          'Yes. All of our products except pork and pork sausages are halal certified, so the choice between goat and lamb does not change the certification. Our primary certifying body is AFIC, and we also hold certification from IFANCA and HCA. Ask any supplier to name the body that certified the meat.',
      },
    ],
  },
  // ---------------------------------------------------------------------------------------------
  {
    slug: 'lamb-meat-vs-mutton-australia',
    title: 'Lamb Meat vs Mutton: MLA Eating-Quality Scores Explained',
    excerpt:
      'Lamb meat vs mutton explained with Meat & Livestock Australia eating-quality scores, the official age definitions, and a per-kg price comparison.',
    metaDescription:
      'Lamb meat vs mutton: see MLA eating-quality scores by cut, how Australia defines lamb, hogget and mutton by teeth, and which to buy for your recipe.',
    heroImage: '/images/products/goat-mutton/GoatMutton_0006.webp',
    heroImageAlt: 'Raw bone-in mutton leg on dark slate with chilli and peppercorns: lamb meat vs mutton starts with the cut',
    niche: 'Goat & Mutton',
    categorySlug: 'goat-mutton',
    publishedDate: '2026-11-16',
    readingMinutes: 10,
    primaryKeyword: 'lamb meat vs mutton',
    primaryKeywordVolume: 480,
    primaryKeywordKd: 28,
    navigationalKeyword: 'leg of lamb price per kg',
    supportingKeywords: [
      'lamb vs sheep',
      'hogget vs lamb',
      'mutton neck fillet',
      'lamb price',
      'grass fed lamb',
    ],
    informationalKeyword: 'mutton meat',
    tags: [
      'lamb shoulder price',
      'buy lamb shoulder',
      'grass fed lamb meat',
      'lamb specials',
      'lamb shoulder cost',
      'buy lamb',
      'buy a lamb',
      'where to buy lamb',
      'beef vs lamb',
      'lamb butcher',
    ],
    outboundLinks: [
      {
        url: 'https://legislation.gov.au/F2019L00364/asmade/2019-03-25/es/original/pdf',
        label: 'Explanatory statement: Export Control (Meat and Meat Products) Amendment (Trade Descriptions for Sheep) Order 2019',
        source: 'Australian Government (legislation.gov.au)',
      },
      {
        url: 'https://www.mla.com.au/globalassets/mla-corporate/extensions-training-and-tools/creative-commons/the-effect-of-cut-and-cooking-method-on-sheepmeat-eating-quality---cc.pdf',
        label: 'The effect of cut and cooking method on sheepmeat eating quality (factsheet)',
        source: 'Meat & Livestock Australia',
      },
      {
        url: 'https://www.youtube.com/watch?v=QNwQljENU6w',
        label: '"How To Prepare Lamb Mutton And Goat Completely Boneless", a butchery lesson',
        source: 'YouTube: Chef Salim Recipes',
      },
    ],
    relatedSkus: ['GT-1006', 'GT-1007'],
    sections: [
      {
        heading: 'Lamb meat vs mutton: what the numbers say',
        body: [
          'Lamb meat vs mutton is usually argued on taste, but Australia has something better than opinion: consumer eating-quality scores published by Meat and Livestock Australia. In its sheepmeat factsheet, the MSA program scored grilled and roasted cuts of lamb and mutton out of 100, and the results are clear. When grilled, lamb cuts clearly outscored mutton cuts, and some mutton cuts fell to the level MLA calls unsatisfactory. This guide walks through those scores, explains how Australia defines lamb, hogget and mutton, and compares real per-kilogram prices from Meat Direct (The Meat Agent).',
          'The point is not that mutton is bad. It is that mutton is a different product, and it rewards different handling. If you buy it the way you buy lamb, you will be disappointed; if you buy it the way it was meant to be cooked, it is excellent value.',
          'A useful benchmark is the leg of lamb price per kg, because the leg is the most commonly bought sheep-meat roast and is easy to compare with a mutton leg.',
        ],
        table: {
          caption: 'MSA "overall liking" scores out of 100 (source: Meat & Livestock Australia, July 2019)',
          headers: ['Cut', 'Lamb grilled', 'Lamb roasted', 'Mutton grilled', 'Mutton roasted'],
          rows: [
            ['Loin', '66', '68', '60', '54'],
            ['Knuckle', '70', '65', '54', '59'],
            ['Rump', '65', '68', '56', '56'],
            ['Silverside', '60', '60', '50', 'Unsatisfactory'],
            ['Topside', '52', '59', '50', 'Unsatisfactory'],
          ],
        },
        image: {
          src: '/images/products/goat-mutton/GoatMutton_0007.webp',
          alt: 'Raw halal mutton mince on baking paper with rosemary and a cleaver on a white background',
          caption: 'Mince is the most forgiving way to use mutton.',
        },
      },
      {
        heading: 'What is mutton meat?',
        body: [
          'Mutton meat is meat from older sheep. The Australian Government\'s explanatory statement for the 2019 trade-description changes explains that the definitions for lamb, mutton and ram were replaced with new definitions aligned with the AUS-MEAT ovine definitions. The statement also shows that age is judged by teeth: before the change, lamb was meat from an animal showing no eruption of permanent incisor teeth, and the new definition allows an animal to be classed as lamb with permanent incisors as long as those teeth are not in wear.',
          'In everyday terms, that makes lamb the young end of the range, hogget the middle, and mutton the mature end. The exact boundaries are set by teeth rather than by a simple birthday, which is why you may see older, heavier lamb on sale and why labels matter. If you want the precise wording, read the statement linked below rather than relying on a rule of thumb.',
        ],
      },
      {
        heading: 'Lamb vs sheep, and hogget vs lamb',
        body: [
          'A common confusion is lamb vs sheep. Sheep is the animal; lamb, hogget and mutton are terms for the meat, determined by how mature the animal is. So when someone asks about lamb versus sheep meat, they are really asking about lamb versus mutton.',
          'Hogget vs lamb is the middle ground. Hogget is generally the term for a sheep in its second year, and it sits between the two in flavour and fat. MLA\'s factsheet treats lamb, hogget and mutton as separate categories when it scores eating quality, and it notes that the potential for mutton loin as a good grilling meat exists but is more variable than lamb or hogget loin.',
          'For a buyer, the useful summary is this: lamb is tender and mild and forgiving, hogget has more flavour, and mutton has the most flavour and the most connective tissue, so it needs the most careful cooking.',
          'If mutton sounds too strong and lamb too mild, ask whether a supplier has hogget. It is generally the term for a sheep in its second year, so the meat sits between lamb and mutton in flavour and fat. MLA\'s factsheet covers lamb, hogget and mutton, and notes that the eating quality of mutton loin is more variable than that of lamb and hogget loin, which makes hogget an interesting middle path for roasts.',
          'We do not currently list hogget as a separate product, so for now our choice is lamb for tenderness and mutton for flavour and value. If hogget matters to you, say so when you contact the trade desk, because demand is what decides what we add to the range.',
        ],
      },
      {
        heading: 'How to cook mutton so it eats well',
        body: [
          'The MLA factsheet gives you the method in two sentences. Collagen and connective tissue can be partially broken down through casserole-style wet cooking with low heat and moisture over a period of time. Cuts that do little work, such as the loin, are more tender and suit pan frying, grilling or roasting. Mutton is more variable, so the safest approach for working muscles like the leg and shoulder is low and slow.',
          'The factsheet also gives a trimming tip: to avoid pronounced mutton flavours, heavily trim the fat from the meat of older animals. That means taking off the external fat before cooking, and it is the single most effective thing you can do if you are sensitive to strong flavour.',
          'Our [Halal Mutton Leg](/shop/goat-mutton/halal-mutton-leg-bone-in-gt-1006) is a bone-in 2.5kg cut suited to a covered, slow roast. A mutton neck fillet, which comes from the neck, is typically braised or diced for a curry. Mince is the gentlest way in: [halal mutton mince](/shop/goat-mutton/halal-mutton-mince-gt-1007) makes koftas, keema and rich pasta sauces without any long cooking.',
          'This is a method rather than a strict recipe, because ovens and legs vary. Trim the external fat and silverskin, then marinate the leg in the fridge overnight in something acidic with garlic, herbs and spices; yoghurt or lemon juice both work. Brown the leg if you wish, then place it in a roasting dish with a little liquid and cover it tightly with foil or a lid.',
          'Roast at a low to moderate oven temperature until the meat is tender and pulls easily from the bone, and allow several hours for a 2.5kg leg, judging by tenderness rather than the clock. Rest the meat for around 20 minutes before carving or pulling, and use the cooking juices as a sauce after skimming the fat. This is the cooking style MLA describes: low heat and moisture over a period of time to break down connective tissue.',
          'Slow, saucy dishes are where mutton shines. In a curry or biryani, the long cooking time breaks down the collagen, the fat melts into the sauce and the stronger flavour of mature meat stands up to bold spices. That is why mutton is a long-standing favourite in many kitchens, and why the strong flavour that puts some people off a grilled mutton chop is exactly what makes a good curry.',
          'If you are using mutton in a curry, cut the meat into generous pieces, brown it well, and add the liquid in stages so you can control the thickness of the sauce. Taste for salt late, because the sauce reduces as it cooks.',
        ],
      },
      {
        heading: 'Lamb price and mutton price: our per-kg comparison',
        body: [
          'Mutton is usually the better value per kilogram, and that is its real selling point. Here is the comparison from our own catalogue, before GST. Our lamb range is in the [Southern Pasture Lamb category](/shop/lamb), where the mince is sold as grass fed lamb.',
          'In our range, mutton leg is $24.00 per kg ($60.00 for the 2.5kg bone-in leg) and mutton mince is $23.00 per kg. Lamb mince is $21.00 per kg and a 2kg bone-in lamb shoulder is $54.00, or $27.00 per kg. The prices are close on mince and the leg is competitive against lamb shoulder, so the choice should be driven by the dish. Prices do not include 10% GST, which is added at checkout.',
          'It also helps to think in cost per serve. Using the rule of thumb of 400g to 500g of bone-in meat per person, a 2.5kg mutton leg feeds roughly five to six people, which works out at about $11 to $13 per serve including GST. That is a useful number to hold against the price of chops or cutlets, which are priced for a very different style of eating.',
          'For a full cut-by-cut price list, see our guide to [lamb prices per kg](/blog/lamb-prices-per-kg-australia).',
        ],
        table: {
          caption: 'Our catalogue prices per kg, before GST',
          headers: ['Cut', 'Mutton', 'Lamb'],
          rows: [
            ['Mince, 1kg', '$23.00', '$21.00'],
            ['Leg or shoulder, bone-in', '$24.00 (leg, 2.5kg)', '$27.00 (shoulder, 2kg)'],
          ],
        },
      },
      {
        heading: 'Which should you buy?',
        body: [
          'Buy lamb for quick cooking: chops, cutlets, a tender roast, kebabs. Buy mutton for slow cooking: curries, braises, biryani, a long covered roast, or mince for dishes with plenty of spice. If you are cooking for people who are wary of strong flavour, start with lamb or hogget, or trim mutton heavily.',
          'If you are weighing up goat as well, read our comparison of [goat and lamb](/blog/goat-vs-lamb-australia), and if you want to buy goat, see [where to buy goat meat near you](/blog/where-to-buy-goat-meat-near-me-australia). The whole range is in the [Halal Goat and Mutton category](/shop/goat-mutton).',
          'All of our products except pork and pork sausages are halal certified; our primary certifying body is AFIC, and we also hold certification from IFANCA and HCA.',
        ],
      },
      {
        heading: 'How to buy mutton: what to look for',
        body: [
          'Read the description on the pack rather than assuming. Meat from older sheep is sold as mutton, and a good supplier will say so plainly. Ask whether the cut is bone-in or boneless, because bone-in cuts weigh more per pack and the per-kilogram price is the fair way to compare them. Ask what the pack weight is and how it is stored, and compare the same cut in different suppliers.',
          'Look at the trim. Because MLA advises heavily trimming the fat from older animals to avoid pronounced mutton flavours, a cut that is already well trimmed saves you work, and a cut with a thick fat cap will need trimming at home. Darker, deeper-coloured meat is normal in more mature animals, so colour alone is not a sign of a problem.',
          'For shopping advice and real per-kilogram prices, see our guide to [buying lamb and mutton](/blog/lamb-and-mutton-near-me-australia).',
          'Kitchens that cook mutton at volume, such as restaurants, hotels and caterers, can buy through our [wholesale supply for commercial kitchens](/wholesale). All of our products except pork and pork sausages are halal certified, you choose the cut state (whole primal, portioned, diced to spec, vacuum-sealed, fresh chilled or snap-frozen), and trade accounts pay on order by PayID, bank transfer or crypto. ',
        ],
      },
      {
        heading: 'Common mistakes with mutton and lamb',
        body: [
          'The first mistake is grilling a working muscle from an older animal, which MLA\'s scores show is where mutton performs worst. The second is skipping the trim, which is how people end up deciding they dislike mutton. The third is cooking mutton at lamb timings and temperatures.',
          'The fourth is comparing by pack price instead of per-kilogram price. The fifth is assuming that "sheep meat" on a label means the same thing as lamb. Always read the actual description.',
          'To see how a leg or shoulder is boned out, the Chef Salim Recipes channel has a beginner butchery lesson called "How To Prepare Lamb Mutton And Goat Completely Boneless". It is a practical companion if you plan to buy a bone-in leg and prepare it yourself.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is mutton tougher than lamb?',
        answer:
          'Often, yes. MLA consumer scores show grilled mutton cuts scoring below lamb, and some fell to the unsatisfactory level. Slow, moist cooking at low heat breaks down connective tissue and gives a much better result, which is why mutton suits curries, stews and long roasts.',
      },
      {
        question: 'What is the difference between lamb and mutton in Australia?',
        answer:
          'Lamb is the young end and mutton the mature end, with hogget in between. Australian definitions judge age mainly by permanent incisor teeth rather than a simple birthday, as set out in the 2019 export trade-description changes. Ask your supplier which one a pack contains.',
      },
      {
        question: 'How do I stop mutton tasting too strong?',
        answer:
          'MLA advises heavily trimming the fat from the meat of older animals to avoid pronounced mutton flavours. Marinating in an acidic mixture such as yoghurt or lemon juice, and cooking low and slow so the connective tissue breaks down, also helps a great deal.',
      },
      {
        question: 'Is mutton cheaper than lamb?',
        answer:
          'Often per kilogram. In our catalogue, mutton leg is $24.00 per kg and a 2kg lamb shoulder is $27.00 per kg, while mince is $23.00 per kg for mutton and $21.00 per kg for lamb, all before GST. Compare bone-in and boneless cuts carefully.',
      },
      {
        question: 'Is your mutton halal certified?',
        answer:
          'Yes. All of our products except pork and pork sausages are halal certified, including our mutton leg and mutton mince. Our primary certifying body is AFIC, and we also hold certification from IFANCA and HCA. Ask any supplier to name the body that certified the meat.',
      },
    ],
  },
];
