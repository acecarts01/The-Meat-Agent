// Auto-generated from real Semrush keyword data (Keyword Export/_processed/FINAL_clean_ascii.csv),
// matched against the actual live product/category names. Volume and Keyword Difficulty (KD)
// are real Semrush metrics. Weak single-token matches were gated to a verified category keyword
// rather than shipped as a misleading primary (see weakPrimaryGated).

export interface ProductKeywordEntry {
  primaryKeyword: string;
  primaryVolume: number;
  primaryKd: number;
  primaryIntent: string;
  supporting: string[];
  weakPrimaryGated: boolean;
}

export const PRODUCT_KEYWORDS: Record<string, ProductKeywordEntry> = {
  "Centre-Cut Grass-Fed Eye Fillet Steaks": {
    primaryKeyword: "grass fed eye fillet",
    primaryVolume: 110,
    primaryKd: 7,
    primaryIntent: "Commercial",
    supporting: [],
    weakPrimaryGated: false,
  },
  "Premium Grass-Fed Beef Mince (1kg Family Pack)": {
    primaryKeyword: "grass fed beef mince",
    primaryVolume: 260,
    primaryKd: 6,
    primaryIntent: "Commercial",
    supporting: [],
    weakPrimaryGated: false,
  },
  "Mega Bulk Beef Mince (2kg Value Pack)": {
    primaryKeyword: "buy organic beef mince online",
    primaryVolume: 70,
    primaryKd: 2,
    primaryIntent: "Transactional",
    supporting: [],
    weakPrimaryGated: false,
  },
  "Grass-Fed Beef Eye of Rump Rostbif": {
    primaryKeyword: "grass fed rump",
    primaryVolume: 50,
    primaryKd: 3,
    primaryIntent: "Commercial",
    supporting: [],
    weakPrimaryGated: false,
  },
  "Wagyu Beef Bresaola Dry-Cured Slices (200g)": {
    primaryKeyword: "wagyu beef slices",
    primaryVolume: 110,
    primaryKd: 2,
    primaryIntent: "Informational, Transactional",
    supporting: [],
    weakPrimaryGated: false,
  },
  "The Essential Family Bulk Meat Box (18kg)": {
    primaryKeyword: "meat box",
    primaryVolume: 2400,
    primaryKd: 23,
    primaryIntent: "Commercial",
    supporting: ["box for meat"],
    weakPrimaryGated: false,
  },
  "The Whole Beast Half-Cow Butchery Share (90kg)": {
    primaryKeyword: "half a cow online",
    primaryVolume: 90,
    primaryKd: 1,
    primaryIntent: "Commercial",
    supporting: [],
    weakPrimaryGated: false,
  },
  "Artisan Sausage Maker's Variety Box (7kg)": {
    primaryKeyword: "buy organic sausage online",
    primaryVolume: 50,
    primaryKd: 3,
    primaryIntent: "Transactional",
    supporting: ["bulk sausage"],
    weakPrimaryGated: false,
  },
  "Free-Range Skinless Chicken Breast (2kg Bulk)": {
    primaryKeyword: "free range chicken breast",
    primaryVolume: 170,
    primaryKd: 7,
    primaryIntent: "Commercial",
    supporting: [],
    weakPrimaryGated: false,
  },
  "Free-Range Chicken Drumsticks (2kg Value Pack)": {
    primaryKeyword: "buy free range chicken online",
    primaryVolume: 70,
    primaryKd: 2,
    primaryIntent: "Transactional",
    supporting: [],
    weakPrimaryGated: false,
  },
  "Crumbed Artisan Chicken Breast Schnitzels (6 pack)": {
    primaryKeyword: "bulk chicken breast",
    primaryVolume: 390,
    primaryKd: 7,
    primaryIntent: "Commercial",
    supporting: ["1kg chicken breast"],
    weakPrimaryGated: false,
  },
  "Mediterranean Rosemary & Garlic Lamb Chops (1kg)": {
    primaryKeyword: "price for lamb chops",
    primaryVolume: 50,
    primaryKd: 6,
    primaryIntent: "Transactional",
    supporting: [],
    weakPrimaryGated: false,
  },
  "Pure Grass-Fed Lamb Mince (1kg)": {
    primaryKeyword: "grass fed mince",
    primaryVolume: 170,
    primaryKd: 7,
    primaryIntent: "Commercial",
    supporting: [],
    weakPrimaryGated: false,
  },
  "Diced Lamb Leg for Curry and Tagine (1kg)": {
    primaryKeyword: "price lamb leg",
    primaryVolume: 170,
    primaryKd: 10,
    primaryIntent: "Transactional",
    supporting: [],
    weakPrimaryGated: false,
  },
  "Old-Fashioned Double Smoked Leg Ham off the Bone (1kg)": {
    primaryKeyword: "buy smoked leg ham online",
    primaryVolume: 70,
    primaryKd: 4,
    primaryIntent: "Transactional",
    supporting: [],
    weakPrimaryGated: false,
  },
  "Wagyu & Truffle Handcrafted Sausages (600g)": {
    primaryKeyword: "bulk sausages",
    primaryVolume: 210,
    primaryKd: 8,
    primaryIntent: "Commercial",
    supporting: [],
    weakPrimaryGated: false,
  },
  "Marinated Native Pepperberry Kangaroo Steaks (600g)": {
    primaryKeyword: "deals on steaks near me",
    primaryVolume: 70,
    primaryKd: 9,
    primaryIntent: "Transactional",
    supporting: [],
    weakPrimaryGated: false,
  },
  "Lean Wild Game Burger Patties (6 x 150g)": {
    primaryKeyword: "bulk burger patties",
    primaryVolume: 90,
    primaryKd: 6,
    primaryIntent: "Commercial",
    supporting: [],
    weakPrimaryGated: false,
  },
  "Veal Mince Premium Delicate Blend (1kg)": {
    primaryKeyword: "bulk mince",
    primaryVolume: 170,
    primaryKd: 3,
    primaryIntent: "Commercial",
    supporting: [],
    weakPrimaryGated: false,
  },

  // --- Halal Goat & Mutton, Turkey, Offal & Duck range ---
  // Verified against live Semrush (Australia database, Nov 2026) rather than the
  // older local export, which was missing real demand for most of these terms.
  // Semrush reports volume but no KD for "goat shoulder" — KD recorded as 0 (unknown),
  // never guessed. Not eligible as a blog keyword under the KD 1-28 rule.
  // "mutton leg": volume 20, KD unknown in Semrush — recorded as 0, never guessed.
  // "mutton mince": volume 30, KD unknown in Semrush — recorded as 0, never guessed.
  "Goat & Lamb Offal Trio (Liver, Kidney, Heart)": {
    primaryKeyword: "buy lamb offal online",
    primaryVolume: 70,
    primaryKd: 6,
    primaryIntent: "Transactional",
    supporting: [],
    weakPrimaryGated: false,
  },

  // --- Turkey (joins the existing Chicken/Poultry category) ---
  "Whole Halal Turkey": {
    primaryKeyword: "buy whole turkey online",
    primaryVolume: 70,
    primaryKd: 6,
    primaryIntent: "Transactional",
    supporting: ["whole turkey"],
    weakPrimaryGated: false,
  },

  // --- Offal & Specialty additions (join existing Beef / Lamb categories) ---

  // --- Duck (new category) ---
};

export const CATEGORY_KEYWORDS: Record<string, ProductKeywordEntry> = {
  // Category pages target the head term; individual products target the specific
  // long-tail cut below, so the two don't compete for the same query.
  "goat-mutton": {
    primaryKeyword: "goat meat near me",
    primaryVolume: 1600,
    primaryKd: 12,
    primaryIntent: "Transactional",
    supporting: ["mutton near me", "mutton meat near me"],
    weakPrimaryGated: false,
  },
  "duck": {
    primaryKeyword: "duck sale",
    primaryVolume: 90,
    primaryKd: 6,
    primaryIntent: "Transactional",
    supporting: [],
    weakPrimaryGated: false,
  },
  "beef": {
    primaryKeyword: "buy porterhouse steak online",
    primaryVolume: 140,
    primaryKd: 6,
    primaryIntent: "Transactional",
    supporting: ["buy t bone steaks online", "buy ribeye steak online", "buy scotch steak online", "buy chuck steak online", "buy blade steak online"],
    weakPrimaryGated: false,
  },
  "chicken": {
    primaryKeyword: "chicken price",
    primaryVolume: 260,
    primaryKd: 17,
    primaryIntent: "Transactional",
    supporting: ["where do you buy chicken", "butcher chickens near me", "meat and chicken", "chicken wholesale near me", "buy chicken"],
    weakPrimaryGated: false,
  },
  "lamb": {
    primaryKeyword: "buy lamb steak online",
    primaryVolume: 70,
    primaryKd: 6,
    primaryIntent: "Transactional",
    supporting: ["buy lamb rump steak online", "buy lamb leg steak online"],
    weakPrimaryGated: false,
  },
  "smallgoods": {
    primaryKeyword: "smallgoods near me",
    primaryVolume: 170,
    primaryKd: 21,
    primaryIntent: "Transactional",
    supporting: [],
    weakPrimaryGated: false,
  },
  "meatboxes": {
    primaryKeyword: "meat in bulk near me",
    primaryVolume: 480,
    primaryKd: 28,
    primaryIntent: "Transactional",
    supporting: ["buy meat box", "meat subscription", "meat boxes", "meat packs", "meat box delivery"],
    weakPrimaryGated: false,
  },
  "pork": {
    primaryKeyword: "buy pork online",
    primaryVolume: 210,
    primaryKd: 6,
    primaryIntent: "Transactional",
    supporting: ["buy pork steak online", "buy pork mince online", "buy pork bones online", "buy frozen pork online", "buy mince pork sausage online"],
    weakPrimaryGated: false,
  },
  "seafood": {
    primaryKeyword: "fresh seafood near me",
    primaryVolume: 2900,
    primaryKd: 22,
    primaryIntent: "Transactional",
    supporting: ["seafood shop near me", "fresh seafood"],
    weakPrimaryGated: false,
  },
  "wagyu": {
    primaryKeyword: "wagyu near me",
    primaryVolume: 880,
    primaryKd: 12,
    primaryIntent: "Transactional",
    supporting: ["wagyu beef near me", "buy wagyu beef online", "wagyu butcher near me", "wagyu steak near me", "wagyu steak"],
    weakPrimaryGated: false,
  },
  "kangaroo-game": {
    primaryKeyword: "kangaroo meat near me",
    primaryVolume: 320,
    primaryKd: 12,
    primaryIntent: "Transactional",
    supporting: ["buy kangaroo steak online", "kangaroo meat sydney"],
    weakPrimaryGated: false,
  },
  "veal": {
    primaryKeyword: "veal near me",
    primaryVolume: 170,
    primaryKd: 10,
    primaryIntent: "Transactional",
    supporting: ["buy veal online"],
    weakPrimaryGated: false,
  },
  "equipment": {
    primaryKeyword: "butcher equipment near me",
    primaryVolume: 20,
    primaryKd: 19.0,
    primaryIntent: "Transactional",
    supporting: ["butcher equipment for sale near me", "m&s butcher equipment", "butcher equipment shop", "butchery equipment near me", "butchers equipment near me"],
    weakPrimaryGated: false,
  },
};