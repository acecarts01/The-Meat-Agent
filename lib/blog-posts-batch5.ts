import type { BlogPost } from './blog-data';

// Batch 5: duck meat and duck fat guide (fills the duck gap).
// Keyword data: live Semrush (Australia), 17 Nov 2026 - see docs/semrush-live-measured-2026-11-16.csv.
// Prices are from the site's own catalogue (ex-GST; 10% GST is added at checkout).

export const BATCH5_POSTS: BlogPost[] = [
  {
    slug: 'duck-meat-whole-duck-and-duck-fat-australia',
    title: 'Duck Meat in Australia: Whole Duck and Duck Fat Guide',
    excerpt:
      'Duck meat explained: whole duck sizes and prices, how to roast it, duck fat potatoes, fresh versus frozen duck, and where to buy duck in Australia.',
    metaDescription:
      'Duck meat guide: whole duck price per kg, how to roast it, duck fat potatoes, fresh versus frozen duck and where to buy duck online in Australia.',
    heroImage: '/images/products/duck/Duck_0001.webp',
    heroImageAlt: 'Two raw whole ducks with lemon slices and rosemary on a dark wooden board: duck meat sold whole and ready to roast',
    niche: 'Duck',
    categorySlug: 'duck',
    publishedDate: '2026-11-17',
    readingMinutes: 10,
    primaryKeyword: 'duck meat',
    primaryKeywordVolume: 880,
    primaryKeywordKd: 12,
    supportingKeywords: [
      'duck meat near me',
      'frozen duck',
      'buy duck',
      'where to buy duck',
      'where can you buy duck',
    ],
    informationalKeyword: 'duck fat potatoes',
    tags: [
      'roast potatoes in duck fat',
      'duck fat roast potatoes',
      'duck fat potatoes recipe',
      'duck fats',
      'potatoes in duck fat',
      'potato duck fat',
      'duck fat roasted potatoes',
      'potato with duck fat',
      'where buy duck',
      'where can i buy duck',
    ],
    outboundLinks: [
      {
        url: 'https://www.foodstandards.gov.au/consumer/prevention-of-foodborne-illness/food-safety-basics',
        label: 'Food Standards Australia New Zealand: food safety basics (cooking poultry thoroughly, storage and keeping raw and cooked food apart)',
        source: 'FSANZ (government)',
      },
      {
        url: 'https://www.youtube.com/watch?v=rjIw8B1FiVw',
        label: '"Incredible Roast Duck", a whole-duck roasting video covering preparing the duck, rendering the fat, the gravy and carving',
        source: 'YouTube: Jamie Oliver',
      },
    ],
    relatedSkus: ['DK-600', 'DK-602'],
    sections: [
      {
        heading: 'Duck meat in Australia: what you can buy and what it costs',
        body: [
          'Duck meat is richer than chicken, with a layer of fat under the skin that crisps beautifully in the oven and renders into one of the best cooking fats there is. It is also surprisingly good value when you buy it whole. This guide shows real prices from Meat Direct (The Meat Agent), explains how to roast a duck and cook with the fat, covers fresh versus frozen duck, and shows where to buy duck in Australia, including for hotels and restaurants.',
          'Every price below is the listed price before 10% GST, which is added at checkout. All of our products except pork and pork sausages are halal certified; our primary certifying body is AFIC, and we also hold certification from IFANCA and HCA.',
        ],
        table: {
          caption: 'Our duck range (price before GST)',
          headers: ['Product', 'Pack', 'Price', 'Per kg', 'Price with GST'],
          rows: [
            ['Whole duck, fresh raw', '2.2kg', '$29.99', '$13.63', '$32.99'],
            ['Rendered duck fat, jar', '300g', '$8.99', '$29.97', '$9.89'],
          ],
        },
        image: {
          src: '/images/products/duck/Duck_0002.webp',
          alt: 'A glass jar of pale rendered duck fat with a black lid on a black background',
          caption: 'Rendered duck fat keeps well and makes exceptional roast potatoes.',
        },
      },
      {
        heading: 'Whole duck: size, serves and cost per serve',
        body: [
          'Our [Whole Duck](/shop/duck/whole-duck-dk-600) is a 2.2kg bird at $29.99 before GST, which is $13.63 per kg and $32.99 with GST. Duck carries a lot of bone and fat, so a bird this size usually feeds about three to four people as a main course, and you should allow a little more weight per person than you would for chicken.',
          'The fat is not waste. A whole duck gives you rendered fat that you can pour off, strain and keep, so the real cost of the meal is lower than the price of the bird suggests. A jar of rendered fat from our range costs $8.99, so if you roast a duck every month or two you will build up a supply of your own.',
          'Whole duck is also one of the easiest centrepieces to cook. It needs little more than salt, time and a hot oven at the end to crisp the skin. It suits Christmas and Easter tables, dinner parties and weekend roasts, and the carcass makes outstanding stock.',
          'A simple way to plan is by weight and appetite. For a family dinner of four, one 2.2kg duck with roast potatoes and a green vegetable is generous. For a dinner party of six to eight, cook two ducks side by side rather than looking for a larger bird, because two smaller ducks cook faster, crisp better and give you twice the rendered fat and carcass for stock.',
        ],
      },
      {
        heading: 'How to roast a whole duck',
        body: [
          'The principle is to melt the fat slowly and then crisp the skin. Pat the duck very dry, prick the skin without piercing the meat, season it generously with salt, and roast it on a rack so the fat can drain away. Pour off the rendered fat as it collects, and finish the duck at a higher temperature so the skin turns golden and crackling. Rest it before carving.',
          'If you want to watch the technique, Jamie Oliver has a video called "Incredible Roast Duck" on his YouTube channel. It is organised into chapters on preparing the duck, rendering the fat and adding grapes, making the gravy, and carving and serving, so you can jump to the part you need. It is a recipe video rather than a product guide, but it shows the key steps clearly.',
          'Whatever method you use, cook the duck right through. Food Standards Australia New Zealand advises cooking all poultry, whole or minced, to at least 75°C in the centre, and a meat thermometer in the thickest part of the thigh takes the guesswork out.',
          'Serve roast duck with something sharp or fruity to cut the richness. Orange, cherry, plum and apple sauces are classics, and a plain salad of bitter leaves with a sharp dressing works just as well. Roast potatoes cooked in a few spoonfuls of the rendered fat finish the plate, and a glass of the pan juices spooned over the carved meat is hard to beat.',
          'Carve by taking off the legs first, then slicing the breast from the bone. The legs have darker meat that stays juicy, and the breast is best sliced thinly. If the breast is cooked a little more than you like, the sauce and the rested juices make up for it.',
        ],
      },
      {
        heading: 'Frozen duck, fresh duck and frozen duckling: what to know',
        body: [
          'Many shoppers search for frozen duck, because supermarket ducks are often sold frozen. There is nothing wrong with frozen duck if it is thawed correctly, but fresh duck avoids the thawing step and the extra moisture that can come with it. Our whole duck is listed as fresh raw, so there is nothing to defrost before you cook.',
          'If you do buy frozen duck or a frozen duckling, thaw it slowly in the fridge on a tray on the bottom shelf, in its wrapping, and allow a day or more for a whole bird. Never thaw it on the bench. Once thawed, pat it very dry before roasting, because surface moisture is the enemy of crisp skin.',
          'A duckling is a young duck and is generally smaller and more tender, while a mature duck has more flavour and more fat. If a pack does not say which it is, ask the supplier, because it changes the cooking time.',
        ],
      },
      {
        heading: 'Duck fat potatoes: roast potatoes in duck fat',
        body: [
          'Duck fat potatoes are the reason many people buy duck fat in the first place, and searches for roast potatoes in duck fat, duck fat roast potatoes and duck fat potatoes recipe are among the most popular food queries in this niche. The idea is simple: duck fat has a high enough smoking point to roast at a hot oven temperature, and it gives potatoes a deep golden crust and a savoury flavour.',
          'Our [Rendered Duck Fat Jar](/shop/duck/rendered-duck-fat-jar-dk-602) is 300g at $8.99 before GST. A method that works well: peel and cut the potatoes, parboil them until the edges are soft, drain and shake them roughly in the colander to rough up the surfaces, then tip them into a tray of hot duck fat and roast until crisp. Turn them once or twice. Season with salt at the end.',
          'You can use the same fat for roasted vegetables such as parsnips and carrots, for frying eggs, for confit, or to cook a steak. Because a little goes a long way, one jar lasts several meals. Store it in the fridge once opened, and use a clean spoon each time.',
          'A few extra tips help. Heat the tray with the fat in the oven before adding the potatoes, so they sizzle when they go in. Do not crowd the tray, because potatoes that touch steam instead of crisping. Leave them undisturbed for the first twenty minutes or so, then turn them, and finish with a pinch of flaky salt and fresh herbs such as rosemary or thyme.',
        ],
      },
      {
        heading: 'Where to buy duck: duck meat near me and online',
        body: [
          'People who ask where to buy duck, where can you buy duck or buy duck online are often finding that local supermarkets stock duck only around Christmas, and that many butchers sell it only by order. Searches for duck meat near me show the same frustration. If a specialist butcher is nearby, ask when they have fresh duck in stock. If not, ordering online is the practical answer.',
          'Orders ship through our cold-chain courier network in insulated liners, with each product page stating the target of arriving below 2.5°C. The store has a $423 AUD minimum across the whole cart, so duck is ordered alongside other cuts. For example, four whole ducks ($119.96), six jars of duck fat ($53.94), two scotch fillet steak packs ($89.00), two thick-cut rump steak packs ($64.00) and two bone-in lamb shoulders ($108.00) come to $434.90 before GST. GST adds $43.49, and shipping is $25 under $2,000, giving $503.39. Crypto orders receive an automatic 10% discount, and you can also pay by PayID or bank transfer.',
          'If you run a hotel, restaurant, café or catering business, duck is a menu staple and we supply it to trade customers through our [commercial supply accounts for hotels and restaurants](/wholesale), with daily or weekly cold-chain delivery in the Ipswich and Brisbane metro area, weekly courier delivery statewide and interstate, and monthly bulk orders anywhere in Australia. You can browse the range in the [Duck category](/shop/duck), and our guide to [where to buy a turkey](/blog/where-can-i-buy-a-turkey-australia) shows how the same ordering rules apply to other festive birds.',
        ],
      },
      {
        heading: 'Duck fats, storage and safe handling',
        body: [
          'Rendered duck fats keep well, but they still need care. Keep the jar in the fridge after opening, use a clean utensil, and keep the lid on. If you render your own fat from a roast, strain it through a fine sieve into a clean jar and refrigerate it promptly. Label the date so you know how long it has been there.',
          'Raw duck needs the same handling as any raw poultry. Food Standards Australia New Zealand advises keeping perishable food at 5°C or colder and using separate boards and knives for raw meat and for food eaten uncooked. Keep the duck on the bottom shelf of the fridge in a covered container, wash your hands and your board after handling it, and do not put cooked slices on a plate that held the raw bird.',
          'Cooked duck keeps in the fridge for a few days and freezes well. Shredded leftover duck is excellent in pancakes, salads, fried rice and pasta, and the carcass makes a rich stock if you simmer it with onion, carrot and bay leaf.',
        ],
      },
      {
        heading: 'Common mistakes when cooking duck',
        body: [
          'The most common mistake is not drying the skin, which leaves it soft instead of crisp. The second is roasting at a high temperature from the start, which browns the skin before the fat has had time to melt. The third is throwing away the fat. The fourth is carving too soon, so the juices run onto the board.',
          'A fifth mistake is under-cooking: duck should be cooked right through to a safe temperature when you roast it whole, and the legs need longer than the breast. The sixth is buying too small a bird for the number of guests, forgetting how much of the weight is bone and fat. When in doubt, order a second duck, because leftovers are valuable.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much is a whole duck?',
        answer:
          'Our whole duck is 2.2kg at $29.99 before GST, which is $13.63 per kg and $32.99 with 10% GST. It is listed fresh raw, so there is nothing to thaw, and it usually feeds about three to four people as a main course.',
      },
      {
        question: 'How do I get crispy duck skin?',
        answer:
          'Pat the duck very dry, prick the skin, season with salt and roast it on a rack so the fat drains away. Pour off the fat as it collects, then finish at a higher temperature. Rest the duck before you carve it.',
      },
      {
        question: 'Can I order only a duck?',
        answer:
          'Not on its own, because the store minimum is $423 AUD across the whole cart. Combine duck and duck fat with steaks, lamb or other cuts. GST of 10% is added at checkout, and shipping is $25 under $2,000 and free above that amount.',
      },
      {
        question: 'Is your duck halal certified?',
        answer:
          'Yes. All of our products except pork and pork sausages are halal certified, including our whole duck and duck fat. Our primary certifying body is AFIC, and we also hold certification from IFANCA and HCA. Ask any supplier to name the certifier and show you the certificate.',
      },
    ],
  },
];
