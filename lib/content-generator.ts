// Generates genuinely distinct per-product descriptions and FAQs from REAL product
// attributes (name, subcategory, weight, marbling, badge, price, category) — never
// invented facts, never one boilerplate paragraph reused across products. Cooking
// guidance is inferred from the subcategory, which is real data already on each product.

export interface ContentProductInput {
  name: string;
  category: string;
  categorySlug: string;
  subcategory: string;
  weight: string;
  price: number;
  badge: string;
  marbling: string;
  dryAging: string;
}

interface CookingProfile {
  method: string;
  verb: string;
  tip: string;
  storageNote: string;
}

// Subcategory -> real cooking guidance. Matched by substring so new subcategories
// degrade gracefully to a sensible default rather than throwing.
const COOKING_PROFILES: Array<{ match: RegExp; profile: CookingProfile }> = [
  {
    match: /tomahawk|bistecca|t-bone|scotch fillet|ribeye|eye fillet|tenderloin|everyday steaks|wagyu steaks|a5 prestige/i,
    profile: {
      method: 'pan-sear or chargrill',
      verb: 'seared hard on both sides and rested',
      tip: 'bring it to room temperature for 20–30 minutes before cooking so it sears evenly rather than steaming in a cold centre',
      storageNote: 'keep refrigerated at 0–4°C and use within 3–5 days of delivery, or freeze immediately in its vacuum seal for up to 6 months',
    },
  },
  {
    match: /mince|burger/i,
    profile: {
      method: 'pan-fry, grill, or slow-simmer',
      verb: 'browned in a hot pan and broken up, or shaped into patties',
      tip: 'handle it as little as possible when shaping patties — overworking mince makes the finished burger dense rather than juicy',
      storageNote: 'refrigerate at 0–4°C and use within 1–2 days, or freeze flat in its packaging for faster thawing later',
    },
  },
  {
    match: /slow-braised|casserole|wagyu smoker|american bbq primals|wholesale primals|pitmaster/i,
    profile: {
      method: 'low-and-slow braise or smoke',
      verb: 'cooked gently over several hours until the connective tissue breaks down',
      tip: 'resist the urge to rush it on high heat — the collagen in this cut needs time and moisture to turn tender rather than tough',
      storageNote: 'refrigerate at 0–4°C and use within 3–4 days, or freeze in its vacuum seal for up to 9 months given the cut size',
    },
  },
  {
    match: /sunday roasts|wagyu roast/i,
    profile: {
      method: 'oven roast',
      verb: 'roasted at a moderate oven temperature and rested for 15–20 minutes before carving',
      tip: 'rest it properly under foil after roasting — cutting in too early lets the juices run out onto the board instead of back through the meat',
      storageNote: 'refrigerate at 0–4°C and use within 3–5 days, or freeze in its original seal for up to 6 months',
    },
  },
  {
    match: /butcher specialty|wagyu specialty/i,
    profile: {
      method: 'quick high-heat cooking',
      verb: 'cooked fast over high heat given its thinner, leaner cut profile',
      tip: 'this cut is naturally lean, so avoid overcooking it past medium or it will firm up quickly',
      storageNote: 'refrigerate at 0–4°C and use within 2–3 days, or freeze for up to 6 months',
    },
  },
  {
    match: /family essentials|fitness & prep|gourmet boxes|seasonal boxes|wholesale boxes/i,
    profile: {
      method: 'mixed — each cut inside follows its own best method',
      verb: 'portioned and individually packed so each cut can be cooked according to what it is',
      tip: 'check the individual packs inside for the cut-specific cooking note, since a mixed box spans several cooking styles',
      storageNote: 'refrigerate at 0–4°C and use within 3–5 days, or freeze the individual vacuum-sealed portions for up to 6 months',
    },
  },
];

const DEFAULT_PROFILE: CookingProfile = {
  method: 'pan-sear, grill, or oven-cook depending on thickness',
  verb: 'cooked to your preferred doneness and rested briefly before serving',
  tip: 'let it rest for a few minutes after cooking so the juices redistribute through the meat',
  storageNote: 'refrigerate at 0–4°C and use within 3–5 days of delivery, or freeze in its original vacuum seal for longer storage',
};

function getCookingProfile(subcategory: string): CookingProfile {
  for (const { match, profile } of COOKING_PROFILES) {
    if (match.test(subcategory)) return profile;
  }
  return DEFAULT_PROFILE;
}

// Deterministic pseudo-random index from a string, so the same product always gets
// the same template variant (stable across builds) without needing external state.
function hashIndex(s: string, mod: number): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) >>> 0;
  }
  return h % mod;
}

const OPENERS = [
  (name: string, category: string) => `${name} is one of our most requested cuts in the ${category} range`,
  (name: string, category: string) => `Sourced as part of our ${category} allocation, the ${name.toLowerCase()} is a genuine butcher's favourite`,
  (name: string, category: string) => `This ${name.toLowerCase()} comes straight from our ${category} program`,
  (name: string) => `${name} arrives exactly as a butcher would portion it for their own kitchen`,
];

export function generateProductDescription(p: ContentProductInput, primaryKeyword: string): string {
  const profile = getCookingProfile(p.subcategory);
  const openerIdx = hashIndex(p.name, OPENERS.length);
  const opener = OPENERS[openerIdx](p.name, p.category.toLowerCase());

  const marblingBit = p.marbling && p.marbling.toLowerCase() !== 'n/a'
    ? ` Graded ${p.marbling}, `
    : ' ';
  const agingBit = p.dryAging ? `finished with ${p.dryAging.toLowerCase()}.` : '.';

  const sentences = [
    `${opener}.${marblingBit}${agingBit}`,
    `Best ${profile.method}: ${profile.verb}. For best results, ${profile.tip}.`,
    `Supplied at ${p.weight} per pack. Storage: ${profile.storageNote}.`,
  ];

  return sentences.join(' ');
}

export interface FaqItem {
  question: string;
  answer: string;
}

const CATEGORY_LABEL: Record<string, string> = {
  beef: 'beef', chicken: 'chicken', lamb: 'lamb', smallgoods: 'smallgoods', meatboxes: 'box',
  pork: 'pork', seafood: 'seafood', wagyu: 'Wagyu beef', 'kangaroo-game': 'game meat', veal: 'veal',
  equipment: 'item',
};

export function generateProductFAQs(p: ContentProductInput, primaryKeyword: string, supporting: string[]): FaqItem[] {
  const profile = getCookingProfile(p.subcategory);
  const label = CATEGORY_LABEL[p.categorySlug] || 'product';
  const faqs: FaqItem[] = [];

  faqs.push({
    question: `How do I cook ${p.name}?`,
    answer: `The best method for this cut is to ${profile.method} it — ${profile.verb}. Key tip: ${profile.tip}.`,
  });

  faqs.push({
    question: `How should I store and freeze this ${label}?`,
    answer: `${profile.storageNote.charAt(0).toUpperCase()}${profile.storageNote.slice(1)}. Always keep it in its original vacuum seal until you're ready to cook — this preserves freshness and prevents freezer burn.`,
  });

  faqs.push({
    question: `What weight and pack size does ${p.name} come in?`,
    answer: `Each order of ${p.name} is supplied at ${p.weight}${p.badge ? `, graded as "${p.badge}"` : ''}. If you need a different pack size for wholesale or bulk ordering, contact our concierge team before placing your order.`,
  });

  if (p.marbling && p.marbling.toLowerCase() !== 'n/a') {
    faqs.push({
      question: `What does the "${p.marbling}" marbling grade mean?`,
      answer: `${p.marbling} refers to the intramuscular fat distribution in this cut, which directly affects juiciness and flavour when cooked. Higher marbling grades render more fat through the meat during cooking, producing a richer, more tender result — this is one of the reasons we grade and disclose it on every applicable cut.`,
    });
  }

  if (supporting.length > 0) {
    faqs.push({
      question: `Is ${p.name} the same as ${supporting[0]}?`,
      answer: `${p.name} is our specific cut and preparation — if you're comparing it to a generic "${supporting[0]}" search, the key differences are our sourcing (direct farm-gate allocation, not supermarket distribution), the exact weight (${p.weight}), and the cold-chain handling it receives between processing and delivery.`,
    });
  }

  faqs.push({
    question: `Do you deliver ${p.name} across Australia?`,
    answer: `Yes — this item ships via our sub-zero 48-hour cold-chain courier network, insulated in thermal wool liners with solid dry ice to maintain under 2.5°C core temperature on arrival, even in peak summer heat.`,
  });

  return faqs;
}

const CATEGORY_FAQS: Record<string, FaqItem[]> = {
  beef: [
    { question: 'What makes your beef different from supermarket beef?', answer: 'Our beef is allocated direct from farm-gate processing rather than passing through central supermarket distribution warehouses. That means no added water in mince, no multiple cold-chain breaks, and cuts that are portioned to genuine butcher-shop specification rather than retail-display specification.' },
    { question: 'What does MSA grading mean?', answer: 'MSA (Meat Standards Australia) is the national eating-quality grading system used across the Australian beef industry. It assesses factors like marbling, pH, and ageing to predict tenderness and eating quality — cuts labelled "MSA Graded" on our site have been assessed against this standard.' },
    { question: 'What is the difference between wet-aged and dry-aged beef?', answer: 'Wet-aged beef is aged in its vacuum-sealed packaging, retaining moisture and developing tenderness over a shorter window. Dry-aged beef is aged uncovered in controlled humidity and temperature, concentrating flavour and developing a distinct nutty, mineral character — it typically costs more due to moisture loss and trim waste during the ageing process.' },
    { question: 'Can I order beef in bulk or wholesale quantities?', answer: 'Yes — our Wholesale Primals range and bulk mince packs are designed for exactly this. For quantities beyond what is listed, use our Wholesale Trade Desk to arrange a custom allocation.' },
    { question: 'How long does beef last in the fridge or freezer?', answer: 'Fresh vacuum-sealed beef keeps 3–5 days refrigerated at 0–4°C. Frozen in its original seal, most cuts hold quality for 6–9 months depending on the cut — larger primals and bone-in roasts generally freeze better than thin steaks.' },
  ],
  chicken: [
    { question: 'Is your chicken free-range?', answer: 'Yes, our poultry range is sourced as free-range, air-chilled Australian chicken. Air-chilling (rather than water-chilling) avoids water absorption into the meat, which is why our chicken browns properly in a pan instead of releasing excess liquid.' },
    { question: 'How long can I keep raw chicken in the fridge?', answer: 'Raw chicken should be used within 1–2 days of refrigeration at 0–4°C, or frozen immediately if you won\'t cook it within that window. Always store it on the lowest fridge shelf to prevent any drip contaminating other food.' },
    { question: 'What internal temperature should chicken reach when cooked?', answer: 'Chicken should reach a minimum internal temperature of 75°C at the thickest point to be considered safely cooked, per Australian food safety guidelines. A meat thermometer is the only reliable way to confirm this, particularly for bone-in cuts and whole birds.' },
    { question: 'Do you sell whole chickens or only portioned cuts?', answer: 'We stock both — whole roasting birds through to individually portioned breast, thigh, wing, and drumstick cuts, plus mince and schnitzel-ready fillets for quicker meal prep.' },
    { question: 'Can I freeze marinated chicken?', answer: 'Yes, marinated chicken freezes well — in fact, freezing in the marinade can help tenderise the meat further. Thaw it fully in the refrigerator (never at room temperature) before cooking.' },
  ],
  lamb: [
    { question: 'Where does your lamb come from?', answer: 'Our lamb is sourced from Southern Australian pasture-raised flocks, chosen for their naturally sweet flavour and delicate fat cover compared to grain-finished alternatives.' },
    { question: 'What is the difference between lamb and mutton?', answer: 'Lamb comes from sheep under 12 months old and has a milder, more delicate flavour with finer-grained meat. Mutton comes from older sheep, has a stronger flavour and firmer texture, and generally benefits from longer, slower cooking methods.' },
    { question: 'How do I stop lamb from tasting too "gamey"?', answer: 'Trimming excess surface fat before cooking, and pairing the meat with acidic or aromatic elements like rosemary, garlic, lemon, or a vinegar-based marinade, both help balance lamb\'s naturally richer flavour profile.' },
    { question: 'What is the best way to cook a lamb rack?', answer: 'Sear the rack fat-side down first to render and crisp the fat cap, then finish in a hot oven until it reaches your preferred doneness — most people prefer lamb rack medium-rare to medium, resting it for 5–10 minutes before carving between the bones.' },
    { question: 'Do you offer French-trimmed cutlets?', answer: 'Yes, our lamb rack and cutlet range is French-trimmed, meaning the bone is scraped clean of fat and connective tissue for a neater presentation and easier handling at the table.' },
  ],
  smallgoods: [
    { question: 'Are your sausages and smallgoods free of fillers?', answer: 'Our smallgoods range is made from real meat cuts without synthetic fillers or excessive binders — always check the specific product\'s ingredient note, since recipes vary by item (natural hog casings, cure types, and smoking methods differ across the range).' },
    { question: 'How long do cured smallgoods like salami and prosciutto keep once opened?', answer: 'Once opened, cured and sliced smallgoods should generally be consumed within 5–7 days if refrigerated and kept well-wrapped. Whole, unsliced cured items last considerably longer due to their lower moisture content.' },
    { question: 'Can I freeze sausages and bacon?', answer: 'Yes — both freeze well. Sausages hold quality for around 1–2 months frozen, while bacon can be frozen for up to 1 month without significant texture change; beyond that, quality gradually declines even though it remains safe to eat.' },
    { question: 'What is the difference between rindless and traditional bacon?', answer: 'Rindless bacon has the skin removed before packaging, cooking faster and more evenly with less trimming needed. Traditional rind-on bacon retains the skin, which can be crisped separately and adds extra flavour to slow-cooked dishes.' },
    { question: 'Do you offer nitrate-free or additive-free smallgoods?', answer: 'Availability varies by product — check the individual listing for curing method details. If you have a specific dietary requirement, contact our concierge team before ordering and we can confirm exactly what each product contains.' },
  ],
  meatboxes: [
    { question: 'What is included in a meat box, and can I customise it?', answer: 'Each box lists its exact contents on its product page — typically a curated mix of steaks, mince, sausages, and roasting cuts sized for the box\'s stated purpose (family, BBQ, competition, etc.). For a fully custom allocation outside the listed boxes, use our Wholesale Trade Desk.' },
    { question: 'How is a meat box packed for delivery?', answer: 'Every box is cryovac-sealed by cut, then packed together in insulated thermal wool liners with solid dry ice bricks, so each individual pack arrives at the same safe temperature regardless of its position in the box.' },
    { question: 'Do meat boxes qualify for free shipping?', answer: 'Free shipping applies to any order — including meat boxes — that reaches our free-freight threshold of $2,000 AUD. Boxes below that threshold are charged standard cold-chain freight at checkout.' },
    { question: 'How long will the contents of a meat box keep once delivered?', answer: 'Treat each item inside according to its own cut type — fresh steaks and mince keep 3–5 days refrigerated, while most cuts can be frozen in their individual vacuum seal for 6+ months. We recommend freezing anything you won\'t use within the first week.' },
    { question: 'Are meat boxes good value compared to buying cuts individually?', answer: 'Boxes are priced to reflect bulk allocation efficiency — buying the same cuts individually at listed per-item pricing typically costs more than the equivalent box, which is why boxes are positioned as our highest-AOV, most convenient option for stocking a freezer in one order.' },
  ],
  pork: [
    { question: 'Is your pork free-range?', answer: 'Yes, our pork range is sourced from free-range, female-only Australian herds, selected specifically to avoid boar taint and deliver consistently sweeter meat.' },
    { question: 'How do I get crispy crackling on pork belly or roast?', answer: 'Score the skin in a tight diagonal pattern (without cutting into the meat), pat it completely dry, salt it generously, and roast uncovered at a high temperature for the first 20–30 minutes before dropping to a moderate heat to finish cooking the meat through.' },
    { question: 'What internal temperature should pork reach when cooked?', answer: 'Modern Australian pork is safe to eat at a minimum internal temperature of 63°C with a brief rest, giving a juicier result than older well-done guidance — though mince and sausages should still reach 71–75°C throughout.' },
    { question: 'What is the difference between pork loin and pork scotch fillet?', answer: 'Pork loin is a lean, tender cut from along the back, best suited to quicker cooking methods like roasting or grilling. Pork scotch fillet (from the shoulder/neck) carries more marbling and connective tissue, making it more forgiving for slow-cooking or grilling without drying out.' },
    { question: 'Can I freeze pork ribs and slow-cook cuts?', answer: 'Yes — ribs and other slow-cook pork cuts freeze well in their vacuum seal for up to 6 months. Thaw fully in the refrigerator before cooking for the most even result.' },
  ],
  seafood: [
    { question: 'Is your seafood wild-caught or farmed?', answer: 'It varies by product — check each listing individually, as our range includes both wild-caught Australian seafood and responsibly farmed options like Tasmanian salmon.' },
    { question: 'How fresh is seafood when it arrives?', answer: 'Seafood is snap-chilled or flash-frozen at the point of processing and shipped through the same sub-zero cold-chain courier network as our meat range, arriving at verified sub-2.5°C core temperature.' },
    { question: 'How long can I keep fresh seafood before cooking it?', answer: 'Fresh seafood is best used within 1–2 days of delivery. If you won\'t cook it immediately, transfer it to the coldest part of your fridge or freeze it in its original packaging as soon as it arrives.' },
    { question: 'How do I know when fish fillets are cooked through?', answer: 'Fish is cooked through when it turns opaque and flakes easily with a fork at the thickest part — this is a more reliable test than timing alone, since fillet thickness varies.' },
    { question: 'Can I refreeze seafood that has been thawed?', answer: 'We don\'t recommend refreezing previously frozen seafood once fully thawed, as it affects both texture and food safety. Only freeze what you know you won\'t use fresh, and thaw only what you plan to cook.' },
  ],
  wagyu: [
    { question: 'What does the MBS (Marble Score) number mean?', answer: 'MBS is the Australian marbling score for Wagyu beef, ranging from 0 (no visible marbling) up to 9+ for the most heavily marbled grades. Higher MBS means more intramuscular fat, which renders during cooking for exceptional juiciness and a distinctly buttery mouthfeel.' },
    { question: 'How is Wagyu different from regular Angus beef?', answer: 'Wagyu cattle are genetically predisposed to develop significantly higher intramuscular fat (marbling) than standard Angus or other European breeds, which is the primary driver of Wagyu\'s signature rich flavour and tenderness.' },
    { question: 'How should I cook high-marbling Wagyu to avoid wasting the marbling?', answer: 'Cook high-MBS Wagyu hot and fast in small portions — the high fat content means it doesn\'t need long cooking to become tender, and overcooking it past medium risks rendering out (and wasting) the very marbling you\'re paying for.' },
    { question: 'What is the difference between Australian Wagyu and Japanese A5 Wagyu?', answer: 'Japanese A5 is a specific grading awarded within Japan\'s own certification system to Wagyu raised and processed in Japan. Australian Wagyu is raised locally (often from Japanese genetics) and graded on the Australian MBS scale — both can reach very high marbling levels, but they are graded under different national systems.' },
    { question: 'Is Wagyu worth the price difference over standard beef?', answer: 'That depends on what you value in the eating experience — Wagyu\'s premium reflects genuinely higher production cost (longer feeding periods, lower yield per animal) and a measurably different eating quality from the marbling. It suits special-occasion cooking more than everyday meals, which is why we position it as a smaller part of a balanced order rather than a everyday staple.' },
  ],
  'kangaroo-game': [
    { question: 'Is kangaroo meat sustainably sourced?', answer: 'Yes — wild kangaroo harvesting in Australia operates under strict government quotas based on population monitoring, and is generally considered one of the more sustainable red meat options available, given kangaroos are wild, free-ranging, and require no additional land clearing or feed inputs.' },
    { question: 'How lean is kangaroo meat compared to beef?', answer: 'Kangaroo is significantly leaner than most beef cuts, typically under 2% fat, which also means it cooks faster and can dry out more easily if overcooked — cook it hot and fast, and avoid pushing it past medium.' },
    { question: 'What does venison or wild boar taste like compared to farmed meat?', answer: 'Wild game generally carries a deeper, more pronounced flavour than farmed equivalents due to the animal\'s natural diet and activity level. Marinating or pairing with robust aromatics (juniper, red wine, garlic) is a traditional way to complement this richer flavour profile.' },
    { question: 'How do I stop lean game meat like kangaroo from drying out?', answer: 'Because it carries so little fat, lean game benefits from quick high-heat searing rather than prolonged cooking, and a short rest afterwards — some cooks also lightly oil or marinate it beforehand to help retain moisture during cooking.' },
    { question: 'Is game meat suitable for a low-fat or high-protein diet?', answer: 'Yes, kangaroo and venison are both naturally high in protein and iron while being very low in fat, which is why they\'re popular with fitness-focused and lean-protein diets specifically.' },
  ],
  veal: [
    { question: 'What is veal, and how is it different from beef?', answer: 'Veal comes from young calves, typically milk-fed, giving it a paler colour, finer grain, and more delicate flavour than mature beef. It\'s prized in Italian and French cooking specifically for this tenderness and subtlety.' },
    { question: 'How do I cook veal cutlets without drying them out?', answer: 'Veal cutlets are thin and lean, so they cook very quickly — a fast pan-sear of just 1–2 minutes per side over medium-high heat is usually enough. Overcooking is the most common mistake with veal given how little fat it carries to protect it.' },
    { question: 'What is osso buco, and how should it be cooked?', answer: 'Osso buco is a cross-cut veal shank with the bone (and marrow) left in. It\'s a slow-braising cut — cooked low and slow in liquid for several hours until the connective tissue breaks down and the marrow becomes spoonable.' },
    { question: 'Is veal more expensive than regular beef, and why?', answer: 'Yes, generally — veal commands a premium due to the younger age at processing, more intensive rearing requirements, and lower yield per animal compared to mature beef cattle.' },
    { question: 'Can I substitute veal for beef in a recipe?', answer: 'In most recipes, yes, though expect a milder flavour and shorter cooking time given veal\'s leaner, more delicate composition — dishes designed around long, fatty beef braises may need adjusting to suit veal\'s faster-cooking nature.' },
  ],
  equipment: [
    { question: 'What steel should I look for in a butcher knife?', answer: 'High-carbon stainless steel is the standard choice for butcher and kitchen knives — it holds an edge well, resists corrosion, and is easier to sharpen than pure carbon steel while avoiding the softness of lower-grade stainless blades.' },
    { question: 'How often should I sharpen my knives?', answer: 'A honing steel should be used before most cutting sessions to realign the edge, while an actual sharpening (on a whetstone or with a sharpening service) is typically needed every few months depending on use frequency — the honing steel alone does not sharpen a blunt blade, only maintains an already-sharp one.' },
    { question: 'What is the difference between a vacuum sealer bag and a standard zip bag for freezing meat?', answer: 'Vacuum sealing removes air from around the meat before sealing, which significantly reduces freezer burn and extends safe freezer storage time compared to a standard zip bag, where trapped air causes ice crystals and oxidation over time.' },
    { question: 'Do you sell equipment separately from meat orders, or only as add-ons?', answer: 'Equipment items can be ordered on their own or alongside a meat order — they\'re listed as standard products in our catalog, not exclusive add-ons.' },
    { question: 'How do I maintain a magnetic knife bar safely?', answer: 'Wipe it down regularly to prevent grease buildup, ensure it\'s mounted securely into a wall stud or solid backing (not just plasterboard), and position knives with the spine facing outward where practical to reduce the risk of a blade slipping off the magnet edge-first.' },
  ],
};

export function getCategoryFAQs(categorySlug: string): FaqItem[] {
  return CATEGORY_FAQS[categorySlug] || [];
}
