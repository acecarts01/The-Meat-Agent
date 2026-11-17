import type { BlogPost } from './blog-data';

// Batch 8d: pork. Replaces the older pork crackling post.
// Keyword data: Semrush (Australia). Prices are from the site's own catalogue (ex-GST; 10% GST is added at checkout).

const FSANZ = {
  url: 'https://www.foodstandards.gov.au/consumer/prevention-of-foodborne-illness/food-safety-basics',
  label: 'Food Standards Australia New Zealand: food safety basics (storage at 5°C or colder, keeping raw and cooked food apart, cooking to 75°C)',
  source: 'FSANZ (government)',
};

const TRADE_PORK =
  `Trade accounts pay on order by PayID, bank transfer or crypto. Daily or weekly cold-chain delivery runs in the Ipswich and Brisbane metro area, weekly delivery runs statewide and interstate by tracked courier, and monthly bulk orders go anywhere in Australia.`;

export const BATCH8D_POSTS: BlogPost[] = [
  {
    slug: 'pork-meat-near-me-pork-shoulder-price-australia',
    title: 'Pork Meat Near Me: Pork Shoulder Price, Belly and Crackle',
    excerpt:
      'Pork meat near me: real prices per kg for pork shoulder, belly, rolled loin roast, ribs, scotch fillet and mince, how to get crackling, and how to buy from a pork butcher online in Australia.',
    metaDescription:
      'Pork meat near me: real pork shoulder price, belly, rolled loin and mince prices per kg, how to get crackle, and how to buy from a pork butcher online.',
    heroImage: '/images/products/pork/Pork_0014.webp',
    heroImageAlt:
      'A raw slab of pork belly on a white background: pork meat near me, sold as belly, loin, shoulder, ribs and mince',
    niche: 'Pork',
    categorySlug: 'pork',
    publishedDate: '2026-11-17',
    readingMinutes: 10,
    primaryKeyword: 'pork meat near me',
    primaryKeywordVolume: 110,
    primaryKeywordKd: 20,
    supportingKeywords: [
      'pork shoulder price',
      'pork crackle near me',
      'pork butcher',
      'pork prices',
      'buy mince pork online',
    ],
    informationalKeyword: 'pork scotch fillet',
    tags: [
      'pork wholesale',
      'wholesale pork meat',
      'wholesale pork',
      'pork mince vs beef mince',
      'diced pork',
      'how to cook pork scotch fillet steak',
      'pork scotch fillet steak',
      'leanest cuts of pork',
      'pork scotch fillets',
      'recipe for pork scotch fillet',
    ],
    outboundLinks: [
      FSANZ,
      {
        url: 'https://www.youtube.com/watch?v=PNlvPWpWwDs',
        label: '"How to Make Perfectly Crispy Crackling and Juicy Roast Pork" (Andy Cooks)',
        source: 'YouTube: Andy Cooks',
      },
      {
        url: 'https://www.youtube.com/watch?v=4rsPL1yj1gI',
        label: 'Andy Cooks on cooking a juicy pork scotch steak, made with Get Some Pork On Your Fork',
        source: 'YouTube: Andy Cooks',
      },
    ],
    relatedSkus: ['PK-700', 'PK-702', 'PK-704', 'PK-705', 'PK-707'],
    sections: [
      {
        heading: 'Pork meat near me: what is in our pork range',
        body: [
          `Looking for pork meat near me usually means you want a clear price, a stated weight and a cut you can cook with confidence. This guide gives real pork prices per kilogram from the range at Meat Direct (The Meat Agent), explains pork shoulder price, belly, rolled loin and scotch fillet, shows how to get crackling, and covers how to buy from a pork butcher online in Australia.`,
          `Every price below is the listed price before 10% GST, which is added at checkout. The store minimum is $423 AUD across the whole cart, so pork is usually ordered alongside other cuts or in a larger order, and shipping is $25 under $2,000 and free above that. Pork and pork sausages are the only products we sell that are not halal certified; everything else in the range is.`,
          `The table converts each pack to price per kilogram, because pack weights differ. At the low end, the pickled pork leg and the Boston pork butt sit at about $15.56 and $16.57 per kg. In the middle are belly, loin roast, ribs and scotch fillet steaks. At the top are the pre-portioned fillet and marinated lines, where you pay for preparation as well as meat.`,
        ],
        table: {
          caption: 'Pork prices per kg across our range (before GST)',
          headers: ['Pork product', 'Pack', 'Price', 'Per kg'],
          rows: [
            ['Pickled Pork Leg for Boiling', '1.8kg', '$28.00', '$15.56'],
            ['Free-Range Pork Mince', '1kg', '$16.50', '$16.50'],
            ['American Boston Pork Butt for Pulled Pork', '3.5kg', '$58.00', '$16.57'],
            ['Smoked Pork Knuckle (Eisbein)', '1.2kg', '$22.00', '$18.33'],
            ['Free-Range Heritage Pork Belly, scored rind', '2kg', '$42.00', '$21.00'],
            ['Rolled Boneless Pork Loin Roast, crispy skin', '2kg', '$44.00', '$22.00'],
            ['St. Louis Competition Cut Pork Ribs, 2 racks', '2.2kg', '$54.00', '$24.55'],
            ['Pork Scotch Fillet Steaks (neck collar), 4 x 250g', '1kg', '$26.00', '$26.00'],
            ['Thick-Cut Berkshire Pork Loin Cutlets, 4 x 300g', '1.2kg', '$34.00', '$28.33'],
            ['Baby Back Loin Pork Ribs, 2 racks', '1.6kg', '$45.00', '$28.13'],
            ['Crispy Pork Belly Strips, pre-sliced', '600g', '$17.50', '$29.17'],
            ['Pork Fillet / Tenderloin Duo Pack', '750g', '$23.50', '$31.33'],
          ],
        },
        image: {
          src: '/images/products/pork/Pork_0004.webp',
          alt: 'Raw chunks of pork with streaks of fat on a white background, the kind of fatty cut that suits slow cooking',
          caption: 'Fatty, hard-working cuts suit slow cooking and cost less per kilogram than lean cuts.',
        },
      },
      {
        heading: 'Pork shoulder price: Boston butt for pulled pork',
        body: [
          `Pork shoulder price is the best value in the range, because the cut is large, has plenty of fat and connective tissue, and rewards slow cooking. Our [American Boston Pork Butt for Pulled Pork](/shop/pork/american-boston-pork-butt-for-pulled-pork-3-5kg-pk-702) is 3.5kg at $58.00, which is $16.57 per kg. Boston butt is the upper part of the shoulder, and it is the cut most cooks choose for pulled pork.`,
          `Cooked slowly in the oven, a smoker or a slow cooker, the fat renders and the collagen softens, so the meat pulls apart with two forks. A piece this size feeds a crowd, and because you lose weight to rendering and trimming, plan on the cooked yield being noticeably less than the raw weight. If you want to cost a serve precisely, weigh your cooked, pulled meat rather than assuming a yield.`,
          `Shoulder also suits pork stews, curries, tacos and sandwiches, and leftover pulled pork freezes well. If you cook a lot of low-and-slow food, our guide to [buying brisket online](/blog/buy-beef-brisket-online-price-per-kg-australia) covers the same technique with beef, and the two cuts pair well on a barbecue menu.`,
        ],
      },
      {
        heading: 'Pork butcher: belly, rolled loin and how to get crackle',
        body: [
          `A good pork butcher sells cuts with the skin on for one reason above all: crackling. Our [Free-Range Heritage Pork Belly with Scored Rind](/shop/pork/free-range-heritage-pork-belly-with-scored-rind-2kg-pk-700) is 2kg at $42.00, or $21.00 per kg, and our [Rolled Boneless Pork Loin Roast with Crispy Skin](/shop/pork/rolled-boneless-pork-loin-roast-with-crispy-skin-2kg-pk-704) is 2kg at $44.00, or $22.00 per kg. Both are sold with the skin on, which is what you need if you search for pork crackle near me.`,
          `The principle behind crackle is dryness and heat. The skin must be as dry as possible before it meets high heat, because moisture on the surface turns to steam and stops the skin blistering. Pat the skin dry, leave it uncovered in the fridge for a few hours or overnight if you have time, rub it with salt, and finish the roast with a blast of high heat so the skin puffs and crisps. Cooks differ on details such as scoring and oiling, so it is worth watching an experienced cook.`,
          `Andy Cooks' video ["How to Make Perfectly Crispy Crackling and Juicy Roast Pork"](https://www.youtube.com/watch?v=PNlvPWpWwDs) shows one method from a respected Australian chef, and it is a general cooking video rather than a product pitch. Watch it before your first roast, then adapt the timing to your oven and the size of your piece. Pork also appears in our smallgoods range, and our guide to [sausage price per kg](/blog/sausage-price-per-kg-sausages-butcher-australia) lists the pork sausages beside the beef ones.`,
        ],
      },
      {
        heading: 'Pork scotch fillet: the neck steak explained',
        body: [
          `Pork scotch fillet is one of the most searched pork terms in Australia, and it confuses people because it is not the same cut as beef scotch fillet. Pork scotch fillet is the neck or collar of the pig, a well-marbled muscle that stays juicy when cooked. Our [Pork Scotch Fillet Steaks (Neck Collar)](/shop/pork/pork-scotch-fillet-steaks-neck-collar-4-x-250g-pk-705) are a pack of four 250g steaks, 1kg in total, at $26.00, which is $6.50 per steak and $26.00 per kg.`,
          `Because it has fat through the meat, scotch fillet steak is forgiving. Cook it in a hot pan or on a barbecue, turn it once, and rest it for a few minutes before serving. People searching for how to cook pork scotch fillet steak or a recipe for pork scotch fillet are usually looking for a quick weeknight method, and a hot pan with salt, pepper and a splash of something sharp such as apple cider vinegar is enough.`,
          `Andy Cooks has a video on [cooking a juicy pork scotch steak](https://www.youtube.com/watch?v=4rsPL1yj1gI), made with Get Some Pork On Your Fork, which is a visual guide to cooking the cut. It is an educational cooking video rather than a store promotion, and the method applies to any pork scotch fillets you buy.`,
        ],
      },
      {
        heading: 'Pork prices: belly, loin, ribs and cutlets compared',
        body: [
          `Pork prices across the range tell you what you are paying for. Belly at $21.00 per kg is the best crackling cut and doubles as the base for slow-roasted belly. Loin at $22.00 to $28.33 per kg is leaner, so it suits quick roasts and cutlets. Ribs sit at $24.55 to $28.13 per kg, and the price includes bone, so the edible meat costs more per kilogram than the headline figure.`,
          `Per serve, a 200g serve of belly costs about $4.20 before GST, a scotch fillet steak is $6.50, and a thick-cut loin cutlet from the 4 x 300g pack is $8.50. Those figures are raw weight, so cooked serves are smaller, and you should compare like with like when you look at a price from another supplier. Our [pork category](/shop/pork) lists every cut with weight and price.`,
          `Marinated and pre-sliced lines such as the char siu fillet strips at $27.00 for 800g, the marinated cutlets at $26.50 for 900g and the pre-sliced crispy belly strips at $17.50 for 600g carry a higher price per kilogram, because the preparation is part of the price. They save time on a busy night, so whether they are good value depends on how you use your time.`,
        ],
      },
      {
        heading: 'Buy mince pork online: pork mince vs beef mince',
        body: [
          `If you want to buy mince pork online, our [Free-Range Pork Mince](/shop/pork/free-range-pork-mince-1kg-pk-707) is 1kg at $16.50. Our Premium Grass-Fed Beef Mince is $18.90 per kg, so pork mince is $2.40 per kg cheaper, a saving of about 13%. For a household using 8kg a month, that is about $19.20 a month before GST.`,
          `Pork mince vs beef mince is a question of taste and fat. Pork mince is a little sweeter and softer, and it is a classic in meatballs, dumplings, san choy bau and sausage rolls. Beef mince has a deeper flavour and suits burgers and bolognese. Many cooks blend the two for meatballs and meatloaf, because the pork adds tenderness and the beef adds flavour. Our guide to [beef mince price per kg](/blog/beef-mince-price-per-kg-australia) explains how to compare packs and portion them for the freezer.`,
          `Treat all mince with care, because it has more surface area than a whole cut. Keep it cold, cook it right through, and use a separate board for raw mince. Food Standards Australia New Zealand advises keeping perishable food at 5°C or colder and cooking to 75°C, which is the sensible target for minced pork.`,
        ],
      },
      {
        heading: 'Leanest cuts of pork and diced pork for everyday cooking',
        body: [
          `If you are looking for the leanest cuts of pork, the fillet or tenderloin and the loin are the choices. Our Pork Fillet / Tenderloin Duo Pack is 750g at $23.50, which is $31.33 per kg, and it cooks quickly, but it can dry out if overcooked, so rest it and slice it across the grain. Loin cutlets and the rolled loin roast are leaner than belly or shoulder, with a fat cap you can keep or trim.`,
          `People also search for diced pork, which is useful for curries, stir-fries and casseroles. We do not list a pre-diced pork pack in the range, but a shoulder or scotch fillet is easy to dice at home: cut it into even pieces so they cook at the same rate, and trim any hard sinew. Shoulder gives tender results in a long braise, while loin is better for a fast stir-fry.`,
          `A simple rule of thumb for choosing: fatty and slow for shoulder and belly, lean and fast for loin and fillet, and middle ground for scotch fillet. Matching the cut to the cooking method does more for the result than any recipe.`,
        ],
      },
      {
        heading: 'Trade supply: pork wholesale for cafés, pubs and caterers',
        body: [
          `Cafés, pubs, restaurants and caterers searching for pork wholesale or wholesale pork meat can buy through our [wholesale supply for restaurants and hotels](/wholesale). ` + TRADE_PORK,
          `For a venue, the useful lines are belly for slow-roasted dishes, Boston butt for pulled pork rolls and loin for roasts, because each has a clear cost per serve. A 2kg belly at $42.00 gives you a predictable food cost, and the shoulder at $16.57 per kg is one of the lowest-cost proteins in the range. Tell us your volume and the cut state you want, and we can advise on which pork suits your menu.`,
          `The common mistakes when buying pork are easy to avoid. Do not buy a lean cut for a long braise, do not skip the drying step if you want crackle, do not compare headline prices without checking the weight and whether bone is included, and do not forget that the $423 minimum applies to the whole order. Finally, check the product page for whether a line is raw, pickled or smoked, because pickled pork leg and smoked knuckle are cooked differently from a raw roast.`,
        ],
      },
    ],
    faqs: [
      {
        question: 'How much is pork shoulder per kg?',
        answer:
          'Our American Boston Pork Butt for pulled pork is 3.5kg at $58.00, which is $16.57 per kg before 10% GST. It is the lowest-cost large pork roast in our range and suits slow cooking, pulled pork, stews and curries. Check the weight on the product page.',
      },
      {
        question: 'Which pork cut gives the best crackling?',
        answer:
          'Pork belly with the skin on and scored is the classic choice, and a rolled loin roast with the skin on also works. Dry the skin well, salt it and finish with high heat. Our belly is 2kg at $42.00 and our rolled loin is 2kg at $44.00.',
      },
      {
        question: 'Is pork scotch fillet the same as beef scotch fillet?',
        answer:
          'No. Pork scotch fillet is the neck or collar of the pig, a juicy, well-marbled muscle usually sold as steaks. Beef scotch fillet is the ribeye muscle from the rib section. They share a name but come from different animals and cook differently.',
      },
      {
        question: 'What is the minimum order for pork?',
        answer:
          'The store minimum is $423 AUD across the whole cart, so add pork to other cuts or a larger order. GST of 10% is added at checkout, and shipping is $25 under $2,000 and free above that amount. Check the final total before paying.',
      },
      {
        question: 'How do I store and cook pork mince safely?',
        answer:
          'Keep pork mince at 5°C or colder, use it by the use-by date or freeze it straight away, and cook it right through to 75°C, as advised by Food Standards Australia New Zealand. Use a separate board for raw mince and wash hands after handling.',
      },
    ],
  },
];
