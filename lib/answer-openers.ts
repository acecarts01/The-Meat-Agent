// Hand-written 40-60 word direct answers for H2 sections whose own opening sentences cannot be grouped into that range.
// Every figure is taken from the same post or from the live catalogue (prices before 10% GST). Key: "post-slug|heading".
// replace: true swaps the section's first paragraph; otherwise the answer is placed above the existing text.

export interface Opener {
  text: string;
  replace?: boolean;
}

export const OPENERS: Record<string, Opener> = {
  'where-can-i-buy-a-turkey-australia|Fresh or frozen: which turkey should you buy?': {
    text: 'A fresh turkey has been chilled, not frozen, so it needs no thawing but must be cooked within a few days of buying. A frozen turkey keeps much longer but must be fully defrosted before it goes in the oven, which takes planning. Choose fresh for convenience and a short timeline, and frozen for flexibility.',
  },
  'where-can-i-buy-a-turkey-australia|What is turkey meat, and how does it differ from chicken?': {
    text: 'Turkey is a larger bird than chicken. Its breast is lean and pale and dries out quickly if overcooked, while the darker, richer legs and thighs need longer to become tender. That difference is the main challenge of roasting a whole bird: cooking the breast gently while the legs finish.',
  },
  'where-to-buy-goat-meat-near-me-australia|Where to buy goat meat near me in Australia': {
    text: 'Goat is a specialty meat in Australia, so where you can buy it depends on your postcode. The four main routes are a halal butcher or specialty grocer, a farm or abattoir selling direct, a general butcher who orders it in, or a supplier shipping cold-chain to your door.',
  },
  'where-to-buy-goat-meat-near-me-australia|Fresh goat meat near me: how to judge a supplier': {
    replace: true,
    text: 'Price is the least reliable signal when you buy fresh goat meat. Better checks are the stated cut and weight, the packaging and use-by date, how the supplier keeps the meat cold, and whether it names its halal certifier. Ask these questions before you order from any supplier.',
  },
  'goat-vs-lamb-australia|Flavour and fat: what actually differs': {
    text: 'Goat is usually leaner with an earthy character, and some people find it milder or slightly sweeter than lamb. Lamb is richer because of its fat, which also carries much of the stronger flavour in older sheep. Flavour varies with the animal\'s age, how it was raised, the cut and the trim.',
  },
  'lamb-meat-vs-mutton-australia|What is mutton meat?': {
    text: 'Mutton is meat from older sheep. Australian definitions for lamb, mutton and ram were updated in 2019 to align with the AUS-MEAT ovine definitions, and age is judged by teeth. Under the new definition an animal can be classed as lamb with permanent incisors, as long as those teeth are not in wear.',
  },
  'halal-butcher-near-me-online-australia|What is halal meat?': {
    text: 'Halal means permissible. For meat, it means the animal was slaughtered and processed to Islamic requirements and the meat has not touched anything forbidden. For a buyer the practical question is assurance: who checked that these requirements were met, and can you see the certifier\'s name?',
  },
  'halal-butcher-near-me-online-australia|What a halal-certified order from us looks like': {
    text: 'All of our products except pork and pork sausages are halal certified, so you can build one order across goat, mutton, lamb, beef and chicken without checking each cut. Our primary certifying body is AFIC, with IFANCA and HCA also held. Pork and pork sausages are not halal certified.',
  },
  'halal-meat-near-me-delivery-australia|Halal meat near me: where to look': {
    text: 'A shop that sells halal meat is not the same as a shop with certified halal meat, so search results can mislead. Check who certifies the product, how quickly the meat reaches you and its quality. If there is no good option nearby, halal-certified cuts can be ordered cold-chain from Meat Direct.',
  },
  'halal-chicken-beef-steak-near-me-australia|Halal chicken near me: what to know first': {
    text: 'Halal poultry is certified differently from halal red meat, so a halal sign on a shop does not answer the question. Check the named certifier on the pack, compare per-kilogram prices and confirm the cold chain. If no halal butcher is nearby, halal-certified chicken and beef can be ordered cold-chain.',
  },
  'lamb-and-mutton-near-me-australia|Lamb and mutton near me: where to buy': {
    text: 'Lamb is easy to find at supermarkets and butchers, but mutton is a specialty product that many shops stock only occasionally. Check per-kilogram prices and whether the cut is bone-in. If local shops do not stock mutton, you can order mutton and lamb cold-chain from Meat Direct.',
  },
  'lamb-and-mutton-near-me-australia|Cheap lamb and lamb meat near me: getting value': {
    replace: true,
    text: 'The best-value lamb is often not the cheapest pack. Compare per-kilogram prices, check whether the cut is bone-in, and buy the cut that suits the dish: bone-in shoulder for a slow roast, mince for everyday cooking and cutlets as a treat.',
  },
  'beef-mince-price-per-kg-australia|Beef mince price per kg: what you will actually pay': {
    text: 'Compare beef mince by price per kilogram, because pack weights differ. At Meat Direct the 2kg bulk pack is $17.45 per kg and the 1kg grass-fed family pack is $18.90 per kg, before 10% GST. Buying in bulk saves money only if you portion and freeze it straight away.',
  },
  'beef-mince-price-per-kg-australia|What is mince, and how is it made?': {
    text: 'Mince is meat that has been ground, usually from trimmed cuts, so it cooks quickly and absorbs the flavour of sauces and seasonings. It is sold in different grinds and fat contents, and the fat affects both flavour and how much the pack shrinks in the pan.',
  },
  'beef-mince-price-per-kg-australia|Ordering mince: minimum order, delivery and trade supply': {
    text: 'Mince orders ship by cold-chain courier in insulated liners, with a target arrival below 2.5°C. The store minimum is $423 AUD across the whole cart, GST of 10% is added at checkout, and shipping is $25 under $2,000. Crypto payments receive an automatic 10% discount.',
  },
  'kangaroo-steak-near-me-kangaroo-meat-for-sale|Ordering kangaroo online: minimum order and trade supply': {
    text: 'Kangaroo orders ship by cold-chain courier in insulated liners, with each product page stating a target arrival below 2.5°C. The store minimum is $423 AUD across the whole cart, GST of 10% is added at checkout, and shipping is $25 under $2,000. Combine mince, fillets and roasts to reach the minimum.',
  },
  'bulk-meat-packs-near-me-meat-box-australia|Bulk meat packs near me: what you are really buying': {
    text: 'A meat box is a large, pre-selected pack of cuts sold at a lower price per kilogram than most individual retail packs. People look for bulk meat packs to cut weekly meat spend, to get more choice than they have locally, or to feed many people. Check the weight, price per kilogram and your freezer space first.',
  },
  'wagyu-beef-price-per-kg-australia|Wagyu price in an order: reaching the $423 minimum': {
    text: 'Wagyu orders must reach the $423 AUD store minimum across the whole cart. GST of 10% is added at checkout, shipping is $25 under $2,000, and orders ship by cold-chain courier with a target arrival below 2.5°C. Crypto payments receive an automatic 10% discount.',
  },
  'rump-steak-price-per-kg-australia|Rump steak price per kg: what steak really costs': {
    text: 'Rump is our best-value steak at $32.00 per kg before GST, against $74.17 per kg for pre-cut scotch fillet steaks. Compare steak by price per kilogram and by the same cut. A whole cube roll primal at $56.58 per kg costs about 24% less than pre-cut scotch fillet before trimming.',
  },
  'rump-steak-price-per-kg-australia|Rump steak price: the everyday steak': {
    text: 'Our Thick-Cut Rump Steaks are four 250g steaks, 1kg in total, at $32.00, or $8.00 a steak before GST. Rump is the best-value steak in the range, with plenty of beef flavour, and it eats well cut thick and cooked to medium-rare, though it is firmer than fillet or scotch.',
  },
  'rump-steak-price-per-kg-australia|Ordering steak: minimum order, delivery and trade supply': {
    text: 'Steak orders ship by cold-chain courier in insulated liners, with a target arrival below 2.5°C. The store minimum is $423 AUD across the whole cart, GST of 10% is added at checkout, and shipping is $25 under $2,000. Mix rump, scotch fillet, porterhouse and T-bone to reach the minimum.',
  },
  'chicken-breast-price-per-kg-australia|Chicken breast price per kg: what you will pay': {
    text: 'Our free-range skinless chicken breast is $14.95 per kg in the 2kg bulk pack before GST, with thigh at $17.00 per kg and drumsticks at $7.45 per kg. Compare chicken by price per kilogram, and check the trim, the pack size and whether it is free range.',
  },
  'chicken-breast-price-per-kg-australia|Chicken breast fillet and diced chicken breast: how to cook it': {
    text: 'Chicken breast is lean, so cook it gently and rest it to keep it juicy. Pat it dry, season it, and cook it in a medium-hot pan until golden on both sides, then finish with a lid on low heat or in a hot oven. Diced breast cooks in minutes in a stir-fry or curry.',
  },
  'dry-aged-beef-near-me-buy-online-australia|What is dry ageing, and how is it different from wet ageing?': {
    text: 'Dry ageing is ageing primal cuts unpackaged, in air, in a cool room to improve tenderness and flavour. Wet ageing keeps the meat in vacuum packaging instead. Meat and Livestock Australia describes ageing as a long-established method for improving the tenderness, flavour and overall acceptance of beef.',
  },
  'dry-aged-beef-near-me-buy-online-australia|Aged beef meat: how long and at what temperature': {
    text: 'Meat and Livestock Australia notes that ageing improves tenderness faster at higher temperatures but also increases bacterial growth, so it is done as cold as possible without freezing. It gives the ideal temperature for long-term ageing as minus 0.5°C, plus or minus 1°C, and says 2 to 3°C could be acceptable for one to two weeks.',
  },
  'dry-aged-beef-near-me-buy-online-australia|Aged beef near me and dry aged beef online: the price': {
    text: 'Dry aged beef costs more than fresh beef of the same cut because the meat loses weight during ageing and the trim removes more. Our 45-day dry-aged O\'Connor ribeye is $76.56 per kg and our 35-day bistecca T-bone is $67.27 per kg, both before 10% GST.',
  },
  'dry-aged-beef-near-me-buy-online-australia|Dry aged butcher and dry aged rib eye: how to choose': {
    text: 'A dry aged butcher should tell you how long the meat was aged, at what temperature and humidity, and how much weight was lost. For an online supplier, check that the ageing time and cut are stated on the product page, the weight is after ageing and trimming, and the meat arrives vacuum sealed and cold.',
  },
  'wholesale-beef-near-me-meat-supplier-restaurants-australia|Trade supply: how we work with restaurants, hotels and caterers': {
    text: 'Restaurants, hotels, cafés, caterers, clubs and canteens can open a trade account for case and trade rates. Trade accounts choose the cut state, pay on order by PayID, bank transfer or crypto, and receive daily to monthly cold-chain delivery depending on location. The $423 AUD minimum applies.',
  },
  'sausage-price-per-kg-sausages-butcher-australia|Sausage price per kg: what you will actually pay': {
    text: 'Sausage price per kg in our range runs from $14.45 for the 2kg beef BBQ pack to $36.67 for wagyu and truffle sausages, with most lines between about $17 and $23 per kg before GST. Compare packs by price per kilogram, because pack weights range from 600g to 2kg.',
  },
  'sausage-price-per-kg-sausages-butcher-australia|How many sausages in a kilo?': {
    text: 'A thick sausage of about 100g gives roughly 10 to a kilo, a barbecue sausage of 70g to 80g gives about 12 to 14, and a thin chipolata of 40g to 50g gives about 20 to 25. A pack label is the only reliable source, so weigh a few from your pack.',
  },
  'sausage-price-per-kg-sausages-butcher-australia|Sausage butcher online: gourmet, smoked and specialty links': {
    text: 'Buying from a sausage butcher online lets you choose from the whole range instead of what a shop has that day. Beyond beef snags, our range includes smoked Polish kielbasa, cheese kransky, lamb merguez, duck and plum sausages and smoked chicken chorizo, priced from $18.00 to $21.00 a pack before GST.',
  },
  'buying-meat-online-australia-delivery-cold-chain-payid|Buying meat online: what to check before you order': {
    text: 'Buying meat online is safe when the supplier controls the cold chain, states the weight and price per kilogram on every product, and explains what happens if something arrives wrong. Check how the meat is kept cold, how you pay, and the minimum order and delivery cost before you buy.',
  },
  'buying-meat-online-australia-delivery-cold-chain-payid|Cold chain and frozen transport: how meat stays cold': {
    text: 'The cold chain is the unbroken run of refrigeration from the boning room to your door. Food Standards Australia New Zealand advises keeping perishable food at 5°C or colder, and our target is stricter: each order should arrive below 2.5°C, shipped by courier in insulated liners.',
  },
  'pork-meat-near-me-pork-shoulder-price-australia|Pork meat near me: what is in our pork range': {
    text: 'Our pork range runs from $15.56 per kg for the pickled pork leg to $31.33 per kg for the pork fillet duo, before 10% GST. Boston pork butt is $16.57 per kg, belly is $21.00 per kg and pork mince is $16.50 per kg. Pork and pork sausages are not halal certified.',
  },
  'pork-meat-near-me-pork-shoulder-price-australia|Trade supply: pork wholesale for cafés, pubs and caterers': {
    text: 'Cafés, pubs, restaurants and caterers can buy pork wholesale through a trade account, paying on order by PayID, bank transfer or crypto. Belly suits slow-roasted dishes, Boston butt suits pulled pork and loin suits roasts, with the $423 AUD minimum applying. Daily to monthly cold-chain delivery depends on location.',
  },
  'kangaroo-steak-near-me-kangaroo-meat-for-sale|Kangaroo steak near me: where to buy kangaroo meat': {
    text: 'Kangaroo is sold as mince and steaks in supermarkets, as fillets and roasts in specialist butchers, and online by game suppliers. It is a distinctly Australian red meat that many people first try at a restaurant. You can order kangaroo mince, fillets, rump roasts and tail from Meat Direct, shipped cold-chain.',
  },
  'wagyu-beef-price-per-kg-australia|Wagyu price per kg by cut: why the range is so wide': {
    text: 'Wagyu runs from about $36 per kg for brisket to over $480 per kg for A5 striploin in our range, and the cut explains the gap. Tender steaks such as cube roll and eye fillet come from small muscles, so there is little of each animal. Hard-working cuts like brisket and short rib cost far less.',
  },
  'wagyu-beef-price-per-kg-australia|Buy wagyu beef: cube roll, tomahawk and rump cap': {
    text: 'Three wagyu cuts cover most occasions. The cube roll is 400g at $125.00, or $312.50 per kg, for a special dinner. The long-bone tomahawk is 1.6kg at $195.00, or $121.88 per kg, and serves two to three people. The rump cap is the everyday-value option. All prices are before GST.',
  },
  'dry-aged-beef-near-me-buy-online-australia|Dry aged beef near me: what you are looking for': {
    text: 'Searching for dry aged beef near me usually means finding a butcher that ages its own meat, which is a short list in most cities. Dry aged beef has a deeper, nuttier flavour and a more tender texture, and it costs more because ageing takes weeks and the meat loses weight. You can also buy it online.',
  },
  'sausage-price-per-kg-sausages-butcher-australia|Sausages in bulk: the variety box and trade packs': {
    text: 'The simplest way to buy sausages in bulk is the Artisan Sausage Maker\'s Variety Box, which is 7kg at $135.00, or $19.29 per kg before GST. It is a mixed box, so you try several styles from one order, and the price per kilogram sits in the middle of the single-pack range.',
  },
  'buying-meat-online-australia-delivery-cold-chain-payid|Trade supply and common mistakes when buying meat online': {
    text: 'Restaurants, hotels, cafés and caterers can order meat online through a trade account, choosing the cut state and paying on order by PayID, bank transfer or crypto. Delivery runs daily to monthly by location, and the $423 AUD minimum applies. The common mistakes below apply to every online meat order.',
  },
};
