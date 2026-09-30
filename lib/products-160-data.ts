import {
  BEEF_IMAGES, CHICKEN_IMAGES, LAMB_IMAGES, SMALLGOODS_IMAGES, MEATBOXES_IMAGES,
  PORK_IMAGES, SEAFOOD_IMAGES, WAGYU_IMAGES, KANGAROO_GAME_IMAGES, VEAL_IMAGES, EQUIPMENT_IMAGES,
} from "./product-images";
import { PRODUCT_KEYWORDS, CATEGORY_KEYWORDS } from "./seo-keywords";
import { generateProductDescription, generateProductFAQs, FaqItem } from "./content-generator";

// Cycles through the real photo pool for a category so each product index gets a distinct
// real image; wraps around (modulo) when a category has fewer photos than products.
function pickImages(pool: string[], idx: number) {
  const raw = pool[idx % pool.length];
  const cooked = pool[(idx + 1) % pool.length];
  return { rawFallback: raw, cookedFallback: cooked };
}

// Looks up real Semrush keyword data for a product by its exact name (see lib/seo-keywords.ts).
// Falls back to the category's own verified keyword if a product is somehow missing an entry —
// this should never happen for the live 160-product catalog, but keeps the build from breaking.
function lookupKeywords(name: string, categorySlug: string) {
  return PRODUCT_KEYWORDS[name] || CATEGORY_KEYWORDS[categorySlug] || {
    primaryKeyword: categorySlug, primaryVolume: 0, primaryKd: 0, primaryIntent: "Informational",
    supporting: [], weakPrimaryGated: true,
  };
}

function buildProductContent(fields: {
  name: string; category: string; categorySlug: string; subcategory: string;
  weight: string; price: number; badge: string; marbling: string; dryAging: string;
}) {
  const kw = lookupKeywords(fields.name, fields.categorySlug);
  const description = generateProductDescription(fields, kw.primaryKeyword);
  const faqs = generateProductFAQs(fields, kw.primaryKeyword, kw.supporting);
  return { kw, description, faqs };
}

export interface Product160Item {
  slug: string;
  sku: string;
  name: string;
  category: string;
  categorySlug: 'beef' | 'chicken' | 'lamb' | 'smallgoods' | 'meatboxes' | 'pork' | 'seafood' | 'wagyu' | 'kangaroo-game' | 'veal' | 'equipment';
  subcategory: string;
  price: number;
  weight: string;
  brand: string;
  badge: string;
  marbling: string;
  dryAging: string;
  thermalRetention: string;
  targetKeyword: string;
  primaryKeywordVolume: number;
  primaryKeywordKd: number;
  supportingKeywords: string[];
  inelastic: boolean;
  images: {
    rawFallback: string;
    cookedFallback: string;
  };
  shortDescription: string;
  faqs: FaqItem[];
}

export interface ShopCategory160 {
  id: string;
  slug: 'beef' | 'chicken' | 'lamb' | 'smallgoods' | 'meatboxes' | 'pork' | 'seafood' | 'wagyu' | 'kangaroo-game' | 'veal' | 'equipment';
  name: string;
  itemCount: number;
  heroTagline: string;
  inelasticRank: number;
  inelasticTier: string;
  heroImage: string;
}

export const SHOP_CATEGORIES_160: ShopCategory160[] = [
  {
    id: "meatboxes",
    slug: "meatboxes",
    name: "Meat Boxes & Bundles",
    itemCount: 21,
    heroTagline: "Curated High-AOV Family Essentials, Pitmaster Feasts & Gym Prep Boxes",
    inelasticRank: 1,
    inelasticTier: "Maximum",
    heroImage: MEATBOXES_IMAGES[0]
  },
  {
    id: "beef",
    slug: "beef",
    name: "Australian Beef",
    itemCount: 39,
    heroTagline: "MSA-Graded Scotch Fillets, Eye Fillets, Tomahawks & Dry-Aged Steaks",
    inelasticRank: 2,
    inelasticTier: "Maximum",
    heroImage: BEEF_IMAGES[0]
  },
  {
    id: "wagyu",
    slug: "wagyu",
    name: "Luxury Wagyu (MB7–MB9+)",
    itemCount: 10,
    heroTagline: "Ultra-High Marble Score Cube Rolls, Rib Caps, Shabu Shabu & Tomahawks",
    inelasticRank: 5,
    inelasticTier: "High",
    heroImage: WAGYU_IMAGES[0]
  },
  {
    id: "smallgoods",
    slug: "smallgoods",
    name: "Artisan Smallgoods & Snags",
    itemCount: 23,
    heroTagline: "Pure Meat Sausages, Natural Hog Casings, Double-Smoked Bacon & Salumi",
    inelasticRank: 3,
    inelasticTier: "Maximum",
    heroImage: SMALLGOODS_IMAGES[0]
  },
  {
    id: "pork",
    slug: "pork",
    name: "Free-Range Heritage Pork",
    itemCount: 14,
    heroTagline: "Crisp Crackling Bellies, St. Louis BBQ Ribs & Thick Berkshire Cutlets",
    inelasticRank: 6,
    inelasticTier: "Very High",
    heroImage: PORK_IMAGES[0]
  },
  {
    id: "chicken",
    slug: "chicken",
    name: "Pasture-Raised Poultry",
    itemCount: 14,
    heroTagline: "100% Air-Chilled, Chemical-Free Skinless Breasts, Thighs & Roasting Birds",
    inelasticRank: 4,
    inelasticTier: "Maximum",
    heroImage: CHICKEN_IMAGES[0]
  },
  {
    id: "kangaroo-game",
    slug: "kangaroo-game",
    name: "Kangaroo & Wild Native Game",
    itemCount: 13,
    heroTagline: "Ultra-Lean Native Australian Kangaroo Fillets, Wild Boar & Venison",
    inelasticRank: 8,
    inelasticTier: "High",
    heroImage: KANGAROO_GAME_IMAGES[0]
  },
  {
    id: "lamb",
    slug: "lamb",
    name: "Southern Pasture Lamb",
    itemCount: 9,
    heroTagline: "French-Trimmed Cutlets, Slow-Roast Lamb Shoulders & Shanks",
    inelasticRank: 7,
    inelasticTier: "Very High",
    heroImage: LAMB_IMAGES[0]
  },
  {
    id: "seafood",
    slug: "seafood",
    name: "Wild Australian Seafood",
    itemCount: 6,
    heroTagline: "Coral Coast Barramundi, Aquna Murray Cod & Yarra Valley Salmon Caviar",
    inelasticRank: 9,
    inelasticTier: "Moderate",
    heroImage: SEAFOOD_IMAGES[0]
  },
  {
    id: "veal",
    slug: "veal",
    name: "Milk-Fed Australian Veal",
    itemCount: 5,
    heroTagline: "Osso Buco Cross-Cuts, Tender Veal Cutlets & Scallopini",
    inelasticRank: 10,
    inelasticTier: "Moderate",
    heroImage: VEAL_IMAGES[0]
  },
  {
    id: "equipment",
    slug: "equipment",
    name: "Pitmaster Equipment & Rubs",
    itemCount: 6,
    heroTagline: "Butcher Cleavers, Thermal Temp Probes, Ironbark Chunks & Rub Tins",
    inelasticRank: 11,
    inelasticTier: "High",
    heroImage: EQUIPMENT_IMAGES[0]
  }
];

export function generate160Catalog(): Product160Item[] {
  const items: any[] = [];

  // 1. BEEF (39 Items)
  const beefCuts = [
    { name: "Dry-Aged O'Connor Ribeye Steak Bone-In", sub: "Dry-Aged & Tomahawks", price: 68.90, weight: "900g", badge: "MSA Graded", mb: "MB4-5", age: "45 Days Dry-Aged", kw: "scotch fillet" },
    { name: "Southern Gold Angus Scotch Fillet Steaks", sub: "Scotch Fillet & Ribeye", price: 44.50, weight: "2 x 300g", badge: "Best Seller", mb: "MB3+", age: "28 Days Wet-Aged", kw: "scotch fillet steak" },
    { name: "Centre-Cut Grass-Fed Eye Fillet Steaks", sub: "Eye Fillet & Tenderloin", price: 49.90, weight: "2 x 220g", badge: "Premium", mb: "Pasture Lean", age: "21 Days", kw: "eye fillet steak" },
    { name: "Dry-Aged Bistecca alla Fiorentina T-Bone", sub: "Bistecca & T-Bone", price: 74.00, weight: "1.1kg", badge: "Chef's Cut", mb: "MB4+", age: "35 Days Dry-Aged", kw: "meat" },
    { name: "Full Packer Competition Angus Brisket Point End", sub: "American BBQ Primals", price: 148.00, weight: "5.5kg", badge: "Pitmaster Choice", mb: "MB4+", age: "28 Days Primal", kw: "beef box" },
    { name: "Asado Cross-Cut Flanken Beef Short Ribs", sub: "American BBQ Primals", price: 42.50, weight: "850g", badge: "Smoker Cut", mb: "MB5+", age: "Fresh Vacuum", kw: "bulk scotch fillet" },
    { name: "100% Trimmed Grass-Fed Beef Cheeks", sub: "Slow-Braised & Casserole", price: 38.90, weight: "900g", badge: "High Collagen", mb: "Grass-Fed", age: "Clean Trim", kw: "meat" },
    { name: "Premium Grass-Fed Beef Mince (1kg Family Pack)", sub: "Minces & Burgers", price: 18.90, weight: "1kg", badge: "Staple Value", mb: "85/15 Lean", age: "Daily Grind", kw: "beef mince" },
    { name: "Mega Bulk Beef Mince (2kg Value Pack)", sub: "Minces & Burgers", price: 34.90, weight: "2kg", badge: "Best Value", mb: "85/15 Lean", age: "Daily Grind", kw: "bulk mince" },
    { name: "Angus Beef Burger Patties (6 x 150g)", sub: "Minces & Burgers", price: 19.90, weight: "900g", badge: "BBQ Ready", mb: "Course Grind", age: "Fresh Prep", kw: "bbq meat packs" },
    { name: "Tender Diced Casserole Beef Chuck", sub: "Slow-Braised & Casserole", price: 21.50, weight: "750g", badge: "Winter Classic", mb: "Stewing Cut", age: "Boneless", kw: "meat" },
    { name: "Marinated Garlic & Rosemary Eye Fillet Skewers", sub: "Eye Fillet & Tenderloin", price: 29.90, weight: "4 x 110g", badge: "Ready-to-Cook", mb: "Pasture Lean", age: "House Marinade", kw: "eye fillet" },
    { name: "Long-Bone Tomahawk Steak MBS 5+", sub: "Dry-Aged & Tomahawks", price: 115.00, weight: "1.4kg", badge: "Showstopper", mb: "MB5+", age: "30 Days Aged", kw: "scotch fillet" },
    { name: "Whole Strip Loin Primal Cryovac (4kg)", sub: "Wholesale Primals", price: 189.00, weight: "4kg", badge: "Wholesale Primal", mb: "MB3+", age: "Cryovac Primal", kw: "bulk scotch fillet" },
    { name: "Whole Scotch Fillet Cube Roll Primal (3.8kg)", sub: "Wholesale Primals", price: 215.00, weight: "3.8kg", badge: "Wholesale Primal", mb: "MB4+", age: "Cryovac Primal", kw: "scotch fillet" },
    { name: "Traditional English Cut Dino Beef Ribs (3-Bone)", sub: "American BBQ Primals", price: 79.00, weight: "2.4kg", badge: "Monster Rib", mb: "MB5+", age: "Sub-Zero Sealed", kw: "bbq meat packs" },
    { name: "Thick-Cut Rump Steaks (4 x 250g)", sub: "Everyday Steaks", price: 32.00, weight: "1kg", badge: "Family Steak", mb: "MB2+", age: "Wet-Aged", kw: "meat" },
    { name: "Flat Iron Oyster Blade Steaks (3 x 200g)", sub: "Butcher Specialty", price: 28.50, weight: "600g", badge: "Butcher Secret", mb: "MB4+", age: "Silverskin Removed", kw: "blade steak" },
    { name: "Skirt Steak (Arrachera Cut) for Tacos", sub: "Butcher Specialty", price: 26.00, weight: "700g", badge: "Flavour Bomb", mb: "Grass-Fed", age: "Grain Match", kw: "meat" },
    { name: "Picanha Rump Cap Whole with Fat Cap", sub: "Butcher Specialty", price: 54.00, weight: "1.3kg", badge: "Churrasco", mb: "MB3+", age: "Un-trimmed Cap", kw: "meat" },
    { name: "Osso Buco Beef Shank Cross-Cut Rings", sub: "Slow-Braised & Casserole", price: 24.50, weight: "800g", badge: "Marrow Rich", mb: "Pasture", age: "Bone-In Ring", kw: "meat" },
    { name: "Tri-Tip California Santa Maria Roast", sub: "American BBQ Primals", price: 46.00, weight: "1.2kg", badge: "Smoker Cut", mb: "MB4+", age: "Reverse Sear", kw: "bbq meat packs" },
    { name: "Boneless Rolled Beef Ribeye Roast", sub: "Sunday Roasts", price: 95.00, weight: "2kg", badge: "Centrepiece", mb: "MB3+", age: "Netted Tie", kw: "scotch fillet" },
    { name: "Slow-Cook Beef Shin Gravy Meat", sub: "Slow-Braised & Casserole", price: 19.90, weight: "1kg", badge: "Rich Broth", mb: "High Gelatin", age: "Clean Diced", kw: "meat" },
    { name: "Minute Steaks Thin-Sliced for Sandwiches", sub: "Minces & Burgers", price: 18.50, weight: "500g", badge: "Quick Prep", mb: "Topside Lean", age: "Tenderised", kw: "meat" },
    { name: "Thick Cut Porterhouse / Sirloin (2 x 300g)", sub: "Everyday Steaks", price: 36.00, weight: "600g", badge: "Classic Pub Cut", mb: "MB3+", age: "Aged Strip", kw: "meat" },
    { name: "Corned Silverside Beef Roast with Spices", sub: "Sunday Roasts", price: 24.90, weight: "1.5kg", badge: "Traditional", mb: "House Cure", age: "Pickled Brine", kw: "meat" },
    { name: "Beef Short Rib Chuck Strips (Boneless)", sub: "American BBQ Primals", price: 39.00, weight: "800g", badge: "Korean BBQ", mb: "MB4+", age: "Thin Cut", kw: "bulk scotch fillet" },
    { name: "Marrow Bones Canoe-Cut for Roasting", sub: "Slow-Braised & Casserole", price: 16.00, weight: "1.2kg", badge: "Culinary Rich", mb: "Bone Marrow", age: "Split Canoe", kw: "meat" },
    { name: "Smoked Pulled Beef Point End (Pre-Cooked)", sub: "American BBQ Primals", price: 38.00, weight: "800g", badge: "Heat & Serve", mb: "MB5+", age: "12hr Ironbark", kw: "bbq meat packs" },
    { name: "Beef Sirloin Roast Basting Cut", sub: "Sunday Roasts", price: 62.00, weight: "1.6kg", badge: "Sunday Lunch", mb: "MB3+", age: "Cap On", kw: "meat" },
    { name: "Smash Burger Ground Chuck & Brisket Blend (80/20)", sub: "Minces & Burgers", price: 22.00, weight: "1kg", badge: "Smash Grade", mb: "80/20 Custom", age: "Cold Grind", kw: "beef mince" },
    { name: "Beef Topside Sliced for Jerky / Biltong", sub: "Butcher Specialty", price: 23.50, weight: "1kg", badge: "Dehydrator Cut", mb: "95% Lean", age: "Uniform 4mm", kw: "meat" },
    { name: "Beef Tail (Oxtail) Discs for Soups", sub: "Slow-Braised & Casserole", price: 29.50, weight: "1kg", badge: "Deep Umami", mb: "Rich Gelatin", age: "Disjointed", kw: "meat" },
    { name: "Beef Skirt Fajita Slices Marinated in Lime & Cumin", sub: "Butcher Specialty", price: 27.50, weight: "700g", badge: "Quick Dinner", mb: "Inside Skirt", age: "Marinated", kw: "meat" },
    { name: "T-Bone Classic Backyard Steaks (2 x 400g)", sub: "Bistecca & T-Bone", price: 42.00, weight: "800g", badge: "Family BBQ", mb: "MB2+", age: "Fresh Cryo", kw: "meat" },
    { name: "Grass-Fed Beef Eye of Rump Rostbif", sub: "Sunday Roasts", price: 38.00, weight: "1.4kg", badge: "Lean Roast", mb: "Heart of Rump", age: "Tied Roast", kw: "eye fillet" },
    { name: "Beef Short Rib Single Bone Dinosaur Cut (800g)", sub: "American BBQ Primals", price: 39.50, weight: "800g", badge: "Single Portion", mb: "MB5+", age: "Primal Cut", kw: "bulk scotch fillet" },
    { name: "Beef Chuck Roll Primal for DIY Pitmasters (5kg)", sub: "Wholesale Primals", price: 139.00, weight: "5kg", badge: "Pitmaster Bulk", mb: "MB3+", age: "Boneless Cryovac", kw: "bulk mince" }
  ];

  beefCuts.forEach((c, idx) => {
    const content = buildProductContent({
      name: c.name, category: "Australian Beef", categorySlug: "beef",
      subcategory: (c as any).sub || "", weight: c.weight, price: c.price, badge: c.badge, marbling: (c as any).mb || "", dryAging: (c as any).age || "",
    });
    items.push({
      sku: `BF-${100 + idx}`,
      name: c.name,
      category: "Australian Beef",
      categorySlug: "beef",
      subcategory: c.sub,
      price: c.price,
      weight: c.weight,
      brand: "The Meat Agent — Southern Gold",
      badge: c.badge,
      marbling: c.mb,
      dryAging: c.age,
      thermalRetention: "<2.5°C 48-Hour Cold-Chain Guarantee",
      targetKeyword: content.kw.primaryKeyword,
      primaryKeywordVolume: content.kw.primaryVolume,
      primaryKeywordKd: content.kw.primaryKd,
      supportingKeywords: content.kw.supporting,
      inelastic: true,
      images: pickImages(BEEF_IMAGES, idx),
      shortDescription: content.description,
      faqs: content.faqs,
    });
  });

  // 2. WAGYU (10 Items)
  const wagyuCuts = [
    { name: "Wagyu Cube Roll (Scotch Fillet) MBS 9+", sub: "Wagyu Steaks", price: 125.00, weight: "400g", badge: "Ultra Rare", mb: "MB9+", age: "450 Days Grain-Fed", kw: "scotch fillet" },
    { name: "Wagyu Long-Bone Tomahawk MBS 8-9", sub: "Wagyu Steaks", price: 195.00, weight: "1.6kg", badge: "Black Onyx", mb: "MB8-9", age: "Long Grain Fed", kw: "scotch fillet steak" },
    { name: "Wagyu Whole Rump Cap (Picanha) MBS 7+", sub: "Wagyu Roast", price: 110.00, weight: "1.5kg", badge: "Picanha Royal", mb: "MB7+", age: "Thick White Cap", kw: "meat" },
    { name: "Japanese A5 Black Wagyu Striploin Cut", sub: "A5 Prestige", price: 145.00, weight: "300g", badge: "A5 Authenticated", mb: "BMS 11-12", age: "Air Express Kagoshima", kw: "meat" },
    { name: "Wagyu Brisket Point End Marbled MBS 8+", sub: "Wagyu Smoker", price: 175.00, weight: "4.8kg", badge: "Gold Medal", mb: "MB8+", age: "Chilled Primal", kw: "beef box" },
    { name: "Wagyu Shabu Shabu & Sukiyaki Wafer Slices", sub: "Wagyu Specialty", price: 48.00, weight: "400g", badge: "Micro-Sliced", mb: "MB7+", age: "Inter-leaved Sheet", kw: "meat" },
    { name: "Wagyu Eye Fillet Medallions MBS 7+ (2 x 200g)", sub: "Wagyu Steaks", price: 89.00, weight: "400g", badge: "Pure Silk", mb: "MB7+", age: "Wet-Aged", kw: "eye fillet steak" },
    { name: "Wagyu Smash Burger Gourmet Patties (4 x 180g)", sub: "Wagyu Specialty", price: 29.90, weight: "720g", badge: "Luxe Burger", mb: "MB7 Fat Blend", age: "Coarse Mince", kw: "bbq meat packs" },
    { name: "Wagyu Short Rib Flanken Cut Kalbi MBS 8+", sub: "Wagyu Smoker", price: 68.00, weight: "800g", badge: "Korean BBQ", mb: "MB8+", age: "Thick Flanken", kw: "bulk scotch fillet" },
    { name: "Wagyu Beef Bresaola Dry-Cured Slices (200g)", sub: "Wagyu Specialty", price: 32.00, weight: "200g", badge: "Charcuterie", mb: "MB9+", age: "90 Days Air-Cured", kw: "meat" }
  ];

  wagyuCuts.forEach((c, idx) => {
    const content = buildProductContent({
      name: c.name, category: "Luxury Wagyu (MB7–MB9+)", categorySlug: "wagyu",
      subcategory: (c as any).sub || "", weight: c.weight, price: c.price, badge: c.badge, marbling: (c as any).mb || "", dryAging: (c as any).age || "",
    });
    items.push({
      sku: `WY-${200 + idx}`,
      name: c.name,
      category: "Luxury Wagyu (MB7–MB9+)",
      categorySlug: "wagyu",
      subcategory: c.sub,
      price: c.price,
      weight: c.weight,
      brand: "The Meat Agent — Black Label Wagyu",
      badge: c.badge,
      marbling: c.mb,
      dryAging: c.age,
      thermalRetention: "<2.5°C 48-Hour Cold-Chain Guarantee",
      targetKeyword: content.kw.primaryKeyword,
      primaryKeywordVolume: content.kw.primaryVolume,
      primaryKeywordKd: content.kw.primaryKd,
      supportingKeywords: content.kw.supporting,
      inelastic: false,
      images: pickImages(WAGYU_IMAGES, idx),
      shortDescription: content.description,
      faqs: content.faqs,
    });
  });

  // 3. MEAT BOXES (21 Items)
  const boxCuts = [
    { name: "The Executive Pitmaster Smoker Feast Box (14kg)", sub: "Pitmaster Collections", price: 360.00, weight: "14kg", badge: "Best Seller", mb: "Competition", age: "Mixed Primals", kw: "meat box" },
    { name: "The Essential Family Bulk Meat Box (18kg)", sub: "Family Essentials", price: 448.90, weight: "18kg", badge: "Meets Min Order", mb: "Family Blend", age: "Assorted Packs", kw: "meat box" },
    { name: "Gym High-Protein 10-Pack Lean Rump Box (2.5kg)", sub: "Fitness & Prep", price: 89.00, weight: "2.5kg", badge: "Gym Choice", mb: "Lean Protein", age: "Portioned 250g", kw: "meat box" },
    { name: "Weekly Protein Meal Prep Master Box (12kg)", sub: "Fitness & Prep", price: 245.00, weight: "12kg", badge: "Zero Waste", mb: "High Protein", age: "Vacuum Sealed", kw: "meat box" },
    { name: "The Great Australian BBQ Party Box (10kg)", sub: "Family Essentials", price: 235.00, weight: "10kg", badge: "Crowd Pleaser", mb: "Mixed Cuts", age: "Fresh Prep", kw: "bbq meat packs" },
    { name: "Dry-Aged Steak Connoisseur Tasting Box (4kg)", sub: "Gourmet Boxes", price: 295.00, weight: "4kg", badge: "Luxe Steaks", mb: "MB4-6", age: "Dry-Aged", kw: "scotch fillet" },
    { name: "All-Day Carnivore Zero-Carb Pack (15kg)", sub: "Fitness & Prep", price: 395.00, weight: "15kg", badge: "Keto/Carnivore", mb: "Grass-Fed", age: "Zero Additive", kw: "meat box" },
    { name: "Winter Slow-Cook & Braise Feast Box (9kg)", sub: "Seasonal Boxes", price: 198.00, weight: "9kg", badge: "Casserole Pack", mb: "High Gelatin", age: "Diced & Bone-In", kw: "meat box" },
    { name: "The Wagyu Experience Luxury Sample Box (3.2kg)", sub: "Gourmet Boxes", price: 340.00, weight: "3.2kg", badge: "Ultra Premium", mb: "MB7-9", age: "Curated Luxe", kw: "meat box" },
    { name: "Sub-Zero Direct Wholesale Restock Crate (45kg)", sub: "Wholesale Boxes", price: 890.00, weight: "45kg", badge: "Bulk Commercial", mb: "Mixed MSA", age: "Cryovac Primals", kw: "bulk meat" },
    { name: "The Whole Beast Half-Cow Butchery Share (90kg)", sub: "Wholesale Boxes", price: 2150.00, weight: "90kg", badge: "Free Shipping", mb: "Nose-to-Tail", age: "Custom Breakdown", kw: "half a cow" },
    { name: "Southern Lamb Lover's Heritage Box (8kg)", sub: "Gourmet Boxes", price: 220.00, weight: "8kg", badge: "Pasture Lamb", mb: "Sweet Pasture", age: "Clean Trim", kw: "meat box" },
    { name: "Smash Burger & Hotdog Weekend Bundle (6kg)", sub: "Family Essentials", price: 145.00, weight: "6kg", badge: "Weekend BBQ", mb: "Coarse Grind", age: "Natural Casings", kw: "bbq meat packs" },
    { name: "Organic Free-Range Poultry Farm Box (10kg)", sub: "Family Essentials", price: 165.00, weight: "10kg", badge: "Air-Chilled", mb: "Lean Poultry", age: "Chemical-Free", kw: "chicken mince" },
    { name: "Artisan Sausage Maker's Variety Box (7kg)", sub: "Family Essentials", price: 135.00, weight: "7kg", badge: "Natural Skins", mb: "Pork & Beef", age: "Hand-Linked", kw: "meat box" },
    { name: "The Texas Brisket & Ribs Duo Box (8kg)", sub: "Pitmaster Collections", price: 210.00, weight: "8kg", badge: "Offset Smoker", mb: "MB4+", age: "Untrimmed Cap", kw: "beef box" },
    { name: "Native Australian Game Discovery Box (5kg)", sub: "Gourmet Boxes", price: 155.00, weight: "5kg", badge: "Wild Harvest", mb: "98% Lean", age: "Cryovac", kw: "buy kangaroo mince online" },
    { name: "Sunday Roast Medley Family Box (7kg)", sub: "Family Essentials", price: 175.00, weight: "7kg", badge: "Roast Master", mb: "Roast Tied", age: "Seasoned/Plain", kw: "meat box" },
    { name: "Lean Mince & Burger High-Volume Box (12kg)", sub: "Family Essentials", price: 195.00, weight: "12kg", badge: "Staple Bulk", mb: "85/15 Blend", age: "1kg Vacuum Packs", kw: "bulk mince" },
    { name: "Gourmet Breakfast Butcher Box (Bacon, Snags, Steaks)", sub: "Family Essentials", price: 125.00, weight: "5kg", badge: "Weekend Fryup", mb: "Wood-Smoked", age: "Thick Cut", kw: "meat box" },
    { name: "The $423 Threshold Gateway Direct Box (22kg)", sub: "Wholesale Boxes", price: 425.00, weight: "22kg", badge: "Min Order Hit", mb: "Wholesale Value", age: "Comprehensive", kw: "meat box" }
  ];

  boxCuts.forEach((c, idx) => {
    const content = buildProductContent({
      name: c.name, category: "Meat Boxes & Bundles", categorySlug: "meatboxes",
      subcategory: (c as any).sub || "", weight: c.weight, price: c.price, badge: c.badge, marbling: (c as any).mb || "", dryAging: (c as any).age || "",
    });
    items.push({
      sku: `BX-${300 + idx}`,
      name: c.name,
      category: "Meat Boxes & Bundles",
      categorySlug: "meatboxes",
      subcategory: c.sub,
      price: c.price,
      weight: c.weight,
      brand: "The Meat Agent — Direct Provisions",
      badge: c.badge,
      marbling: c.mb,
      dryAging: c.age,
      thermalRetention: "<2.5°C 48-Hour Cold-Chain Guarantee",
      targetKeyword: content.kw.primaryKeyword,
      primaryKeywordVolume: content.kw.primaryVolume,
      primaryKeywordKd: content.kw.primaryKd,
      supportingKeywords: content.kw.supporting,
      inelastic: true,
      images: pickImages(MEATBOXES_IMAGES, idx),
      shortDescription: content.description,
      faqs: content.faqs,
    });
  });

  // 4. CHICKEN (14 Items)
  const chickenCuts = [
    { name: "Free-Range Skinless Chicken Breast (2kg Bulk)", price: 29.90, weight: "2kg", badge: "Air-Chilled", kw: "bulk chicken breast" },
    { name: "Free-Range Boneless Skinless Chicken Thigh (2kg)", price: 34.00, weight: "2kg", badge: "Juicy Dark", kw: "meat" },
    { name: "Whole Spatchcock Chicken with Lemon Pepper Herb", price: 18.50, weight: "1.3kg", badge: "Quick Roast", kw: "meat" },
    { name: "Chicken Breast & Angus Beef Rump Combo Pack (3kg)", price: 68.00, weight: "3kg", badge: "Gym Combo", kw: "meat box" },
    { name: "Free-Range Chicken Drumsticks (2kg Value Pack)", price: 14.90, weight: "2kg", badge: "Kids Favourite", kw: "meat" },
    { name: "Honey Soy Marinated Chicken Wingettes (2kg)", price: 22.00, weight: "2kg", badge: "Party Finger Food", kw: "meat" },
    { name: "Whole Heritage Free-Range Roasting Bird (1.8kg)", price: 21.00, weight: "1.8kg", badge: "Sunday Bird", kw: "meat" },
    { name: "Lean Chicken Breast Mince 98% Fat Free (1kg)", price: 16.50, weight: "1kg", badge: "Lean Grind", kw: "chicken mince" },
    { name: "Crumbed Artisan Chicken Breast Schnitzels (6 pack)", price: 24.00, weight: "1.1kg", badge: "Panko Golden", kw: "meat" },
    { name: "Smoked Chicken Chorizo Sausages (1kg)", price: 21.00, weight: "1kg", badge: "Spanish Spice", kw: "meat" },
    { name: "Garlic Butter Kiev Stuffed Chicken Breasts (4 pack)", price: 26.00, weight: "900g", badge: "Oven Ready", kw: "meat" },
    { name: "Chicken Tenderloins Hand-Trimmed (1.5kg)", price: 27.00, weight: "1.5kg", badge: "Tenderloin", kw: "meat" },
    { name: "Portuguese Peri-Peri Marinated Half Chickens (2 pack)", price: 25.00, weight: "1.6kg", badge: "Charcoal Ready", kw: "bbq meat packs" },
    { name: "Free-Range Chicken Bones & Necks for Broth (3kg)", price: 12.00, weight: "3kg", badge: "Bone Broth", kw: "meat" }
  ];

  chickenCuts.forEach((c, idx) => {
    const content = buildProductContent({
      name: c.name, category: "Pasture-Raised Poultry", categorySlug: "chicken",
      subcategory: (c as any).sub || "", weight: c.weight, price: c.price, badge: c.badge, marbling: (c as any).mb || "", dryAging: (c as any).age || "",
    });
    items.push({
      sku: `CK-${400 + idx}`,
      name: c.name,
      category: "Pasture-Raised Poultry",
      categorySlug: "chicken",
      subcategory: "Free-Range Poultry",
      price: c.price,
      weight: c.weight,
      brand: "The Meat Agent — Valley Farms",
      badge: c.badge,
      marbling: "Air-Chilled Lean",
      dryAging: "Zero Chlorine Washed",
      thermalRetention: "<2.5°C 48-Hour Cold-Chain Guarantee",
      targetKeyword: content.kw.primaryKeyword,
      primaryKeywordVolume: content.kw.primaryVolume,
      primaryKeywordKd: content.kw.primaryKd,
      supportingKeywords: content.kw.supporting,
      inelastic: true,
      images: pickImages(CHICKEN_IMAGES, idx),
      shortDescription: content.description,
      faqs: content.faqs,
    });
  });

  // 5. LAMB (9 Items)
  const lambCuts = [
    { name: "French-Trimmed Southern Lamb Cutlets (8 pack)", price: 46.00, weight: "650g", badge: "Chef's Cut", kw: "meat" },
    { name: "Slow-Roast Oyster Cut Lamb Shoulder (Bone-In 2kg)", price: 54.00, weight: "2kg", badge: "12hr Braise", kw: "meat" },
    { name: "French-Trimmed Lamb Shank Duo Pack (900g)", price: 28.50, weight: "900g", badge: "Marrow Rich", kw: "meat" },
    { name: "Traditional Boneless Rolled Lamb Leg Roast with Rosemary", price: 49.00, weight: "1.8kg", badge: "Sunday Lunch", kw: "meat" },
    { name: "Mediterranean Rosemary & Garlic Lamb Chops (1kg)", price: 34.00, weight: "1kg", badge: "BBQ Classic", kw: "meat" },
    { name: "Pure Grass-Fed Lamb Mince (1kg)", price: 21.00, weight: "1kg", badge: "Kofta Ready", kw: "meat" },
    { name: "Whole Crown Roast of Lamb (16 Cutlets Tied)", price: 92.00, weight: "1.4kg", badge: "Dinner Party", kw: "meat" },
    { name: "Moroccan Spiced Lamb Rump Steaks (3 x 200g)", price: 29.00, weight: "600g", badge: "Tender Rump", kw: "meat" },
    { name: "Diced Lamb Leg for Curry and Tagine (1kg)", price: 26.50, weight: "1kg", badge: "Lean Diced", kw: "meat" }
  ];

  lambCuts.forEach((c, idx) => {
    const content = buildProductContent({
      name: c.name, category: "Southern Pasture Lamb", categorySlug: "lamb",
      subcategory: (c as any).sub || "", weight: c.weight, price: c.price, badge: c.badge, marbling: (c as any).mb || "", dryAging: (c as any).age || "",
    });
    items.push({
      sku: `LM-${500 + idx}`,
      name: c.name,
      category: "Southern Pasture Lamb",
      categorySlug: "lamb",
      subcategory: "Pasture Lamb",
      price: c.price,
      weight: c.weight,
      brand: "The Meat Agent — Gippsland Pastures",
      badge: c.badge,
      marbling: "Pasture Raised",
      dryAging: "14 Days Aged",
      thermalRetention: "<2.5°C 48-Hour Cold-Chain Guarantee",
      targetKeyword: content.kw.primaryKeyword,
      primaryKeywordVolume: content.kw.primaryVolume,
      primaryKeywordKd: content.kw.primaryKd,
      supportingKeywords: content.kw.supporting,
      inelastic: true,
      images: pickImages(LAMB_IMAGES, idx),
      shortDescription: content.description,
      faqs: content.faqs,
    });
  });

  // 6. SMALLGOODS & SAUSAGES (23 Items)
  const smallgoodsCuts = [
    { name: "Handcrafted Traditional Beef BBQ Sausages (2kg Mega)", price: 28.90, weight: "2kg", badge: "Best Value", kw: "bulk sausages butcher" },
    { name: "Artisan Pork & Fennel Italian Style Sausages (1kg)", price: 18.50, weight: "1kg", badge: "Natural Skin", kw: "meat" },
    { name: "Thick Beef & Caramelised Onion Sausage Snags (1.5kg)", price: 24.00, weight: "1.5kg", badge: "Gourmet Snag", kw: "meat" },
    { name: "Wood-Smoked Double-Cut Rindless Bacon Streaky (1kg)", price: 22.00, weight: "1kg", badge: "Beechwood Smoke", kw: "meat" },
    { name: "Spanish Style Cured Chorizo Links (500g)", price: 15.00, weight: "500g", badge: "Smoked Paprika", kw: "meat" },
    { name: "Mild Cured Hungarian Salami Chub (400g)", price: 16.50, weight: "400g", badge: "Charcuterie", kw: "meat" },
    { name: "Hot Calabrese Soppressata Slices (200g)", price: 9.50, weight: "200g", badge: "Pizza Ready", kw: "meat" },
    { name: "Old-Fashioned Double Smoked Leg Ham off the Bone (1kg)", price: 29.00, weight: "1kg", badge: "Ironbark Smoked", kw: "meat" },
    { name: "Cheese Kransky with Jalapeno Hot Smoke (1kg)", price: 21.00, weight: "1kg", badge: "Melted Cheddar", kw: "meat" },
    { name: "Black Angus Cocktail Franks (1kg)", price: 16.00, weight: "1kg", badge: "Kids Party", kw: "meat" },
    { name: "Cumberland Spiral English Pork Sausages (750g)", price: 17.00, weight: "750g", badge: "Classic Pub", kw: "meat" },
    { name: "Smoked Polish Kielbasa with Garlic (800g)", price: 18.00, weight: "800g", badge: "Traditional", kw: "meat" },
    { name: "Boerewors South African Spiced Beef Spiral (1kg)", price: 22.50, weight: "1kg", badge: "Coriander Seed", kw: "meat" },
    { name: "Prosciutto Crudo Aged 18 Months (200g Sliced)", price: 16.00, weight: "200g", badge: "Aged 18 Months", kw: "meat" },
    { name: "Smoked Beef Pastrami for Reuben Sandwiches (500g)", price: 21.50, weight: "500g", badge: "Deli Special", kw: "meat" },
    { name: "Bavarian Style Bratwurst Pork Sausages (1kg)", price: 19.00, weight: "1kg", badge: "Sauerkraut Ready", kw: "meat" },
    { name: "Duck & Plum Gourmet Dinner Sausages (600g)", price: 18.00, weight: "600g", badge: "Luxe Blend", kw: "meat" },
    { name: "Wagyu & Truffle Handcrafted Sausages (600g)", price: 22.00, weight: "600g", badge: "Truffle Infused", kw: "meat" },
    { name: "Lamb Merguez Spicy Moroccan Links (700g)", price: 18.50, weight: "700g", badge: "Harissa & Cumin", kw: "meat" },
    { name: "Pancetta Flat Cured Italian Bacon (300g Sliced)", price: 14.50, weight: "300g", badge: "Carbonara Grade", kw: "meat" },
    { name: "Traditional Blood Pudding (Black Pudding) Chubs (400g)", price: 12.00, weight: "400g", badge: "Heritage", kw: "meat" },
    { name: "Smoked Strasburg Deli Slices (500g)", price: 11.50, weight: "500g", badge: "Lunchbox", kw: "meat" },
    { name: "Skinless Chipolata Breakfast Sausages (1kg)", price: 17.50, weight: "1kg", badge: "Breakfast Snag", kw: "meat" }
  ];

  smallgoodsCuts.forEach((c, idx) => {
    const content = buildProductContent({
      name: c.name, category: "Artisan Smallgoods & Snags", categorySlug: "smallgoods",
      subcategory: (c as any).sub || "", weight: c.weight, price: c.price, badge: c.badge, marbling: (c as any).mb || "", dryAging: (c as any).age || "",
    });
    items.push({
      sku: `SG-${600 + idx}`,
      name: c.name,
      category: "Artisan Smallgoods & Snags",
      categorySlug: "smallgoods",
      subcategory: "Smallgoods & Charcuterie",
      price: c.price,
      weight: c.weight,
      brand: "The Meat Agent — Heritage Smokehouse",
      badge: c.badge,
      marbling: "Natural Casing",
      dryAging: "Wood-Smoked",
      thermalRetention: "<2.5°C 48-Hour Cold-Chain Guarantee",
      targetKeyword: content.kw.primaryKeyword,
      primaryKeywordVolume: content.kw.primaryVolume,
      primaryKeywordKd: content.kw.primaryKd,
      supportingKeywords: content.kw.supporting,
      inelastic: true,
      images: pickImages(SMALLGOODS_IMAGES, idx),
      shortDescription: content.description,
      faqs: content.faqs,
    });
  });

  // 7. PORK (14 Items)
  const porkCuts = [
    { name: "Free-Range Heritage Pork Belly with Scored Rind (2kg)", price: 42.00, weight: "2kg", badge: "Glass Crackle", kw: "meat" },
    { name: "St. Louis Competition Cut Pork Ribs (2 Racks, 2.2kg)", price: 54.00, weight: "2.2kg", badge: "Pitmaster Cut", kw: "pork ribs smoker" },
    { name: "American Boston Pork Butt for Pulled Pork (3.5kg)", price: 58.00, weight: "3.5kg", badge: "Smoker Essential", kw: "meat" },
    { name: "Thick-Cut Berkshire Pork Loin Cutlets Bone-In (4 x 300g)", price: 34.00, weight: "1.2kg", badge: "Juicy Chops", kw: "meat" },
    { name: "Rolled Boneless Pork Loin Roast with Crispy Skin (2kg)", price: 44.00, weight: "2kg", badge: "Sunday Roast", kw: "meat" },
    { name: "Pork Scotch Fillet Steaks (Neck Collar) (4 x 250g)", price: 26.00, weight: "1kg", badge: "Steak Lover", kw: "meat" },
    { name: "Baby Back Loin Pork Ribs (2 Racks, 1.6kg)", price: 45.00, weight: "1.6kg", badge: "Tender Ribs", kw: "pork ribs smoker" },
    { name: "Free-Range Pork Mince (1kg)", price: 16.50, weight: "1kg", badge: "Dumpling Grade", kw: "meat" },
    { name: "Marinated Chinese Char Siu Pork Fillet Strips (800g)", price: 27.00, weight: "800g", badge: "Asian BBQ", kw: "meat" },
    { name: "Pork Fillet / Tenderloin Duo Pack (750g)", price: 23.50, weight: "750g", badge: "Lean Tender", kw: "meat" },
    { name: "Pickled Pickled Pork Leg for Boiling (1.8kg)", price: 28.00, weight: "1.8kg", badge: "Comfort Food", kw: "meat" },
    { name: "Smoked Pork Knuckle (Eisbein) for Roasting (1.2kg)", price: 22.00, weight: "1.2kg", badge: "German Feast", kw: "meat" },
    { name: "Pork Cutlets Marinated in Apple, Honey & Sage (3 pack)", price: 26.50, weight: "900g", badge: "Quick Gourmet", kw: "meat" },
    { name: "Crispy Pork Belly Strips Pre-Sliced for Stir-Fry (600g)", price: 17.50, weight: "600g", badge: "Fast Cooking", kw: "meat" }
  ];

  porkCuts.forEach((c, idx) => {
    const content = buildProductContent({
      name: c.name, category: "Free-Range Heritage Pork", categorySlug: "pork",
      subcategory: (c as any).sub || "", weight: c.weight, price: c.price, badge: c.badge, marbling: (c as any).mb || "", dryAging: (c as any).age || "",
    });
    items.push({
      sku: `PK-${700 + idx}`,
      name: c.name,
      category: "Free-Range Heritage Pork",
      categorySlug: "pork",
      subcategory: "Heritage Pork",
      price: c.price,
      weight: c.weight,
      brand: "The Meat Agent — Darling Downs Heritage",
      badge: c.badge,
      marbling: "Female Pork Only",
      dryAging: "Dry-Chilled",
      thermalRetention: "<2.5°C 48-Hour Cold-Chain Guarantee",
      targetKeyword: content.kw.primaryKeyword,
      primaryKeywordVolume: content.kw.primaryVolume,
      primaryKeywordKd: content.kw.primaryKd,
      supportingKeywords: content.kw.supporting,
      inelastic: true,
      images: pickImages(PORK_IMAGES, idx),
      shortDescription: content.description,
      faqs: content.faqs,
    });
  });

  // 8. KANGAROO & WILD GAME (13 Items)
  const gameCuts = [
    { name: "Wild Australian Kangaroo Fillets Skinless (1kg)", price: 28.00, weight: "1kg", badge: "98% Lean", kw: "buy kangaroo mince online" },
    { name: "Pure Kangaroo Mince Ultra-Lean (1kg)", price: 18.50, weight: "1kg", badge: "High Iron", kw: "buy kangaroo mince online" },
    { name: "Marinated Native Pepperberry Kangaroo Steaks (600g)", price: 22.00, weight: "600g", badge: "Native Herb", kw: "meat" },
    { name: "Wild Australian Venison Striploin Steaks (400g)", price: 34.00, weight: "400g", badge: "Wild Deer", kw: "meat" },
    { name: "Slow-Braised Venison Osso Buco Shanks (800g)", price: 29.50, weight: "800g", badge: "Game Stew", kw: "meat" },
    { name: "Wild Boar Sausages with Native Thyme (600g)", price: 19.50, weight: "600g", badge: "Rustic Game", kw: "meat" },
    { name: "Kangaroo Rump Roasts Whole (1.2kg)", price: 29.90, weight: "1.2kg", badge: "Lean Roast", kw: "meat" },
    { name: "Wild Wallaby Fillets Tenderised (500g)", price: 26.00, weight: "500g", badge: "Tasmanian Wild", kw: "meat" },
    { name: "Crocodile Tail Fillet Medallions (400g)", price: 38.00, weight: "400g", badge: "Tropical Game", kw: "meat" },
    { name: "Smoked Kangaroo Prosciutto Bresaola (150g)", price: 16.50, weight: "150g", badge: "Native Cured", kw: "meat" },
    { name: "Wild Game Mixed Stewing Meat (Diced 1kg)", price: 24.00, weight: "1kg", badge: "Winter Game", kw: "meat" },
    { name: "Kangaroo Tail Sections for Slow-Cooked Stew (1.5kg)", price: 26.00, weight: "1.5kg", badge: "Traditional", kw: "meat" },
    { name: "Lean Wild Game Burger Patties (6 x 150g)", price: 22.50, weight: "900g", badge: "High Protein", kw: "meat" }
  ];

  gameCuts.forEach((c, idx) => {
    const content = buildProductContent({
      name: c.name, category: "Kangaroo & Wild Native Game", categorySlug: "kangaroo-game",
      subcategory: (c as any).sub || "", weight: c.weight, price: c.price, badge: c.badge, marbling: (c as any).mb || "", dryAging: (c as any).age || "",
    });
    items.push({
      sku: `GM-${800 + idx}`,
      name: c.name,
      category: "Kangaroo & Wild Native Game",
      categorySlug: "kangaroo-game",
      subcategory: "Wild Game",
      price: c.price,
      weight: c.weight,
      brand: "The Meat Agent — Native Bush Harvest",
      badge: c.badge,
      marbling: "Ultra-Lean",
      dryAging: "Sustainable Harvest",
      thermalRetention: "<2.5°C 48-Hour Cold-Chain Guarantee",
      targetKeyword: content.kw.primaryKeyword,
      primaryKeywordVolume: content.kw.primaryVolume,
      primaryKeywordKd: content.kw.primaryKd,
      supportingKeywords: content.kw.supporting,
      inelastic: false,
      images: pickImages(KANGAROO_GAME_IMAGES, idx),
      shortDescription: content.description,
      faqs: content.faqs,
    });
  });

  // 9. SEAFOOD (6 Items)
  const seafoodCuts = [
    { name: "Coral Coast Barramundi Mid-Cut Fillets (2 x 180g)", price: 28.00, weight: "360g", badge: "Wild Ocean", kw: "meat" },
    { name: "Aquna Murray Cod Fresh Centre Fillets (2 x 180g)", price: 34.00, weight: "360g", badge: "Native Fish", kw: "meat" },
    { name: "Yarra Valley Australian Salmon Caviar Tin (50g)", price: 38.00, weight: "50g", badge: "Caviar Gold", kw: "meat" },
    { name: "King Prawns Wild Australian Cleaned & Peeled (500g)", price: 32.00, weight: "500g", badge: "Wild Caught", kw: "meat" },
    { name: "Tasmanian Atlantic Salmon Portions Skin-On (4 x 180g)", price: 39.50, weight: "720g", badge: "Crisp Skin", kw: "meat" },
    { name: "Harvey Bay Sea Scallops Roe-Off (300g)", price: 29.00, weight: "300g", badge: "Sweet Shell", kw: "meat" }
  ];

  seafoodCuts.forEach((c, idx) => {
    const content = buildProductContent({
      name: c.name, category: "Wild Australian Seafood", categorySlug: "seafood",
      subcategory: (c as any).sub || "", weight: c.weight, price: c.price, badge: c.badge, marbling: (c as any).mb || "", dryAging: (c as any).age || "",
    });
    items.push({
      sku: `SF-${900 + idx}`,
      name: c.name,
      category: "Wild Australian Seafood",
      categorySlug: "seafood",
      subcategory: "Australian Seafood",
      price: c.price,
      weight: c.weight,
      brand: "The Meat Agent — Coral Coast Harvest",
      badge: c.badge,
      marbling: "Omega-3 Rich",
      dryAging: "Sub-Zero Chilled",
      thermalRetention: "<2.5°C 48-Hour Cold-Chain Guarantee",
      targetKeyword: content.kw.primaryKeyword,
      primaryKeywordVolume: content.kw.primaryVolume,
      primaryKeywordKd: content.kw.primaryKd,
      supportingKeywords: content.kw.supporting,
      inelastic: false,
      images: pickImages(SEAFOOD_IMAGES, idx),
      shortDescription: content.description,
      faqs: content.faqs,
    });
  });

  // 10. VEAL (5 Items)
  const vealCuts = [
    { name: "Milk-Fed Veal Osso Buco Shank Cross-Cuts (800g)", price: 32.00, weight: "800g", badge: "Italian Classic", kw: "meat veal" },
    { name: "Milk-Fed Veal Cutlets Bone-In (4 x 220g)", price: 42.00, weight: "880g", badge: "Tenderloin Soft", kw: "meat veal" },
    { name: "Tender Veal Scallopini Thin Cutlets (500g)", price: 26.50, weight: "500g", badge: "Saltimbocca", kw: "meat veal" },
    { name: "Veal Mince Premium Delicate Blend (1kg)", price: 22.00, weight: "1kg", badge: "Meatball Grade", kw: "meat veal" },
    { name: "Rolled Boneless Veal Shoulder Roast (1.5kg)", price: 45.00, weight: "1.5kg", badge: "Sunday Lunch", kw: "meat veal" }
  ];

  vealCuts.forEach((c, idx) => {
    const content = buildProductContent({
      name: c.name, category: "Milk-Fed Australian Veal", categorySlug: "veal",
      subcategory: (c as any).sub || "", weight: c.weight, price: c.price, badge: c.badge, marbling: (c as any).mb || "", dryAging: (c as any).age || "",
    });
    items.push({
      sku: `VL-${950 + idx}`,
      name: c.name,
      category: "Milk-Fed Australian Veal",
      categorySlug: "veal",
      subcategory: "Milk-Fed Veal",
      price: c.price,
      weight: c.weight,
      brand: "The Meat Agent — Valley Meadows",
      badge: c.badge,
      marbling: "Milk-Fed Pale",
      dryAging: "Tender Aged",
      thermalRetention: "<2.5°C 48-Hour Cold-Chain Guarantee",
      targetKeyword: content.kw.primaryKeyword,
      primaryKeywordVolume: content.kw.primaryVolume,
      primaryKeywordKd: content.kw.primaryKd,
      supportingKeywords: content.kw.supporting,
      inelastic: false,
      images: pickImages(VEAL_IMAGES, idx),
      shortDescription: content.description,
      faqs: content.faqs,
    });
  });

  // 11. EQUIPMENT (6 Items)
  const equipmentCuts = [
    { name: "Butcher Master Hand-Forged Cleaver 7-Inch", price: 89.00, weight: "650g", badge: "Japanese Steel", kw: "equipment" },
    { name: "Dual-Probe Bluetooth Instant Meat Thermometer", price: 65.00, weight: "300g", badge: "Digital Accuracy", kw: "equipment" },
    { name: "Australian Ironbark Smoker Chunks (10kg Bag)", price: 35.00, weight: "10kg", badge: "Native Wood", kw: "equipment" },
    { name: "Pitmaster Texas Gold Brisket Dry Rub Tin (300g)", price: 16.50, weight: "300g", badge: "All-Natural", kw: "equipment" },
    { name: "Heavy Duty Meat Vacuum Sealer Machine Pro", price: 145.00, weight: "2.8kg", badge: "Sub-Zero Seal", kw: "equipment" },
    { name: "Insulated Heavy Duty Cold-Chain Thermal Delivery Box (60L)", price: 45.00, weight: "1.8kg", badge: "48hr Rated", kw: "equipment" }
  ];

  equipmentCuts.forEach((c, idx) => {
    const content = buildProductContent({
      name: c.name, category: "Pitmaster Equipment & Rubs", categorySlug: "equipment",
      subcategory: (c as any).sub || "", weight: c.weight, price: c.price, badge: c.badge, marbling: (c as any).mb || "", dryAging: (c as any).age || "",
    });
    items.push({
      sku: `EQ-${980 + idx}`,
      name: c.name,
      category: "Pitmaster Equipment & Rubs",
      categorySlug: "equipment",
      subcategory: "Equipment & Spices",
      price: c.price,
      weight: c.weight,
      brand: "The Meat Agent — Hardware",
      badge: c.badge,
      marbling: "Tool Grade",
      dryAging: "N/A",
      thermalRetention: "Freight Safe",
      targetKeyword: content.kw.primaryKeyword,
      primaryKeywordVolume: content.kw.primaryVolume,
      primaryKeywordKd: content.kw.primaryKd,
      supportingKeywords: content.kw.supporting,
      inelastic: false,
      images: pickImages(EQUIPMENT_IMAGES, idx),
      shortDescription: content.description,
      faqs: content.faqs,
    });
  });

  return items.map((item) => ({
    ...item,
    slug: createProductSlug(item.name, item.sku),
  })) as Product160Item[];
}

export function createProductSlug(name: string, sku: string): string {
  const cleanName = name
    .toLowerCase()
    .replace(/[()]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  const cleanSku = sku.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return `${cleanName}-${cleanSku}`;
}

export function getAllProducts(): Product160Item[] {
  return generate160Catalog();
}

export function getProductBySlug(slug: string): Product160Item | undefined {
  const catalog = generate160Catalog();
  const normalized = decodeURIComponent(slug).toLowerCase().trim();
  return catalog.find((p) => {
    const pSlug = p.slug.toLowerCase();
    const pSku = p.sku.toLowerCase();
    return (
      pSlug === normalized ||
      pSku === normalized ||
      pSlug.endsWith(`-${normalized}`) ||
      normalized.endsWith(`-${pSku}`) ||
      pSlug.replace(/[^a-z0-9]/g, '') === normalized.replace(/[^a-z0-9]/g, '')
    );
  });
}

export function getProductByCategoryAndSlug(categorySlug: string, slug: string): Product160Item | undefined {
  const catalog = generate160Catalog();
  const normalizedSlug = decodeURIComponent(slug).toLowerCase().trim();
  const normalizedCat = decodeURIComponent(categorySlug).toLowerCase().trim();
  return catalog.find((p) => {
    const catMatch = normalizedCat === 'all' || p.categorySlug.toLowerCase() === normalizedCat;
    if (!catMatch) return false;
    const pSlug = p.slug.toLowerCase();
    const pSku = p.sku.toLowerCase();
    return (
      pSlug === normalizedSlug ||
      pSku === normalizedSlug ||
      pSlug.endsWith(`-${normalizedSlug}`) ||
      normalizedSlug.endsWith(`-${pSku}`) ||
      pSlug.replace(/[^a-z0-9]/g, '') === normalizedSlug.replace(/[^a-z0-9]/g, '')
    );
  });
}

export function getRelatedProducts(product: Product160Item, limit: number = 4): Product160Item[] {
  const catalog = generate160Catalog();
  const sameCat = catalog.filter((p) => p.sku !== product.sku && p.categorySlug === product.categorySlug);
  if (sameCat.length >= limit) return sameCat.slice(0, limit);
  const otherCat = catalog.filter((p) => p.sku !== product.sku && p.categorySlug !== product.categorySlug);
  return [...sameCat, ...otherCat].slice(0, limit);
}

export function getCategoryBySlug(slug: string): ShopCategory160 | undefined {
  return SHOP_CATEGORIES_160.find((c) => c.slug === slug || c.id === slug);
}
