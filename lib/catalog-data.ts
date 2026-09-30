export interface Category {
  id: string;
  name: string;
  tagline: string;
  heroImage: string;
  heroFallback: string;
  inelasticityRank: number;
  inelasticityTier: 'Maximum' | 'Extremely High' | 'Very High' | 'High' | 'Moderate to High';
  inelasticityReason: string;
  subcategories: string[];
  productCount: number;
  avgOrderValue: string;
}

export interface ProductItem {
  sku: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  weight: string;
  brand: string;
  badge: string;
  inelastic: boolean;
  images: {
    raw: string;
    cooked: string;
    rawFallback: string;
    cookedFallback: string;
  };
  shortDescription: string;
}

export interface RemovedImage {
  id: string;
  filename: string;
  reason: string;
  category: 'Competitor Logo' | 'Competitor Storefront' | 'Staff Uniform' | 'Retail 3P Packaging' | 'Off-brand Style';
}

export interface BlogPostItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  hook: string;
  targetKeyword: string;
  imageFallback: string;
  curatedImageName: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "premium-beef-steaks",
    name: "Premium Australian Beef & Steaks",
    tagline: "MSA-Graded, 100% Pasture-Fed Angus & High Marble Score Wagyu",
    heroImage: "photo-1558030006-450675393462.webp",
    heroFallback: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80",
    inelasticityRank: 4,
    inelasticityTier: "High",
    inelasticityReason: "Replaces $150+ restaurant steakhouse meals. Customers view dry-aged tomahawks and Fiorentinas as essential home weekend rewards.",
    subcategories: [
      "Dry-Aged & Tomahawks",
      "Scotch Fillet & Ribeye",
      "Eye Fillet & Tenderloin",
      "Bistecca & T-Bone",
      "Wagyu Shabu & Yakiniku"
    ],
    productCount: 35,
    avgOrderValue: "$180 - $280 AUD"
  },
  {
    id: "low-and-slow-bbq",
    name: "Low & Slow American BBQ & Roasts",
    tagline: "Competition-Grade Brisket Points, Flanken Short Ribs & Smoker Primals",
    heroImage: "photo-1594041680534-e8c8cdebd659.webp",
    heroFallback: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    inelasticityRank: 2,
    inelasticityTier: "Extremely High",
    inelasticityReason: "Australian pitmasters with smokers (Traeger, offset, Weber) are brand-loyal and will not buy supermarket beef. Price insensitive.",
    subcategories: [
      "Beef Brisket Point & Flat",
      "Asado Short Ribs & Dino Bones",
      "Slow-Braised Beef Cheeks & Shanks",
      "Pork Ribs & Pork Butts"
    ],
    productCount: 20,
    avgOrderValue: "$140 - $240 AUD"
  },
  {
    id: "everyday-family-staples",
    name: "Everyday Family Staples & Bulk Packs",
    tagline: "Pure 100% Beef Mince, Handcrafted Snags, Burgers & High-Protein Meal Prep",
    heroImage: "DCONGL17_-_Bangers_Mash_Bundle_Lifestyle.webp",
    heroFallback: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1200&q=80",
    inelasticityRank: 1,
    inelasticityTier: "Maximum",
    inelasticityReason: "Mince, sausages, and weekly burger patties are standard weekly Australian grocery items purchased regularly regardless of inflation.",
    subcategories: [
      "Premium Beef Mince (1kg / 2kg Mega)",
      "Artisan Sausages & Bangers",
      "Angus Smashed Burger Patties",
      "Gym & High-Protein Meal Prep Packs",
      "Diced Beef & Casserole Cuts"
    ],
    productCount: 25,
    avgOrderValue: "$110 - $190 AUD"
  },
  {
    id: "pasture-lamb-pork",
    name: "Pasture-Raised Lamb & Heritage Pork",
    tagline: "Southern Highlands Pasture Lamb & Free-Range Kurobuta Pork",
    heroImage: "photo-1432139555190-58524dae6a55.webp",
    heroFallback: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=1200&q=80",
    inelasticityRank: 5,
    inelasticityTier: "High",
    inelasticityReason: "Iconic Australian Sunday roast lamb shoulders, cutlets, and wood-smoked bacon rashers retain steady seasonal demand.",
    subcategories: [
      "Lamb Cutlets & Loin Chops",
      "Slow-Cook Lamb Shanks & Shoulders",
      "Heritage Pork Chops & Cutlets",
      "Artisanal Dry-Cured Bacon Rashers"
    ],
    productCount: 20,
    avgOrderValue: "$130 - $210 AUD"
  },
  {
    id: "free-range-poultry",
    name: "Free-Range Poultry & Game",
    tagline: "100% Antibiotic-Free, Pastured Whole Birds & Fresh Cut Fillets",
    heroImage: "photo-1598103442097-8b74394b95c6.webp",
    heroFallback: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=1200&q=80",
    inelasticityRank: 3,
    inelasticityTier: "Very High",
    inelasticityReason: "Chicken breast and thigh fillets are the primary lean daily protein for fitness athletes and clean-eating households.",
    subcategories: [
      "Whole Roasting Chickens",
      "Skinless Chicken Breast Fillets",
      "Bone-In Chicken Thighs & Drumsticks",
      "Marinated Midweek Chicken & Duck"
    ],
    productCount: 15,
    avgOrderValue: "$95 - $160 AUD"
  },
  {
    id: "wild-seafood-pantry",
    name: "Wild Australian Seafood & Butcher's Pantry",
    tagline: "Native River Cod, Coral Coast Barramundi & Hand-Harvested Salmon Caviar",
    heroImage: "photo-1615141982883-c7ad0e69fd62.webp",
    heroFallback: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=1200&q=80",
    inelasticityRank: 6,
    inelasticityTier: "Moderate to High",
    inelasticityReason: "High-margin basket booster. Customers add native fish fillets, finishing salts, and caviar to qualify for free shipping thresholds.",
    subcategories: [
      "Wild Barramundi & Murray Cod Fillets",
      "Australian Black Pearl Salmon Caviar",
      "Artisanal Crackers & Sea Salts",
      "House Rubs, Glazes & Gravies"
    ],
    productCount: 15,
    avgOrderValue: "$160 - $310 AUD"
  }
];

export const PROVENANCE_BRANDS = [
  {
    name: "O'Connor Superior Beef",
    location: "Gippsland, Victoria",
    description: "100% Grass-Fed Angus raised on rainfall pastures in Southern Victoria. MSA graded with superior tenderness.",
    categoryFocus: "Prime Steaks, Brisket & Mince"
  },
  {
    name: "Stone Axe & Westholme Wagyu",
    location: "NSW & Queensland Highlands",
    description: "Fullblood Australian Wagyu genetics delivering Marble Scores 7 through 9+ with buttery umami depth.",
    categoryFocus: "Wagyu Shabu, Sukiyaki & Ribeye"
  },
  {
    name: "Borrowdale Free Range Pork",
    location: "Goondiwindi, Queensland",
    description: "Certified high-welfare, pasture-roaming pork with no hormone promoters or antibiotics. Exceptional crackling.",
    categoryFocus: "Pork Chops, Belly & Bacon"
  },
  {
    name: "Roaring Forties Lamb",
    location: "Tasmania & South Australia",
    description: "Sovereign Maritime pasture-raised lamb known for naturally sweet, clean flavor and delicate fat cover.",
    categoryFocus: "Lamb Cutlets & Slow Roasts"
  },
  {
    name: "Aquna Murray Cod",
    location: "Riverina Basin, New South Wales",
    description: "Iconic native Australian freshwater fish farmed sustainably in land-based open ponds. Rich in natural omega-3s.",
    categoryFocus: "Fresh Native Fish Fillets"
  },
  {
    name: "Coral Coast Barramundi",
    location: "Hinchinbrook, Far North Queensland",
    description: "Pristine saltwater estuary farming producing firm, sweet white fish with crackling-crisp skin when pan-seared.",
    categoryFocus: "Crispy Skin-on Fillets"
  },
  {
    name: "Black Pearl Caviar",
    location: "Tasmanian Cold Waters, Australia",
    description: "Hand-harvested Australian salmon caviar eggs with vibrant orange luster and delicate sea pop.",
    categoryFocus: "Gourmet Caviar & Accompaniments"
  },
  {
    name: "The Fine Cheese Co. Provisions",
    location: "Artisan Pantry Selection",
    description: "Heritage accompaniments including EVOO crackers and finishing sea salts to complete dinner platters.",
    categoryFocus: "Butcher Pantry & Charcuterie"
  }
];

export const REMOVED_COMPETITOR_ASSETS: RemovedImage[] = [
  {
    id: "rem-1",
    filename: "imgi_1_VICS_Meat_Logo_White.webp",
    reason: "Competitor primary white vector logo. Must never appear on an independent store.",
    category: "Competitor Logo"
  },
  {
    id: "rem-2",
    filename: "imgi_65_VICS_Meat_Logo_Red.webp",
    reason: "Competitor trademark red brand logo.",
    category: "Competitor Logo"
  },
  {
    id: "rem-3",
    filename: "imgi_386_0e2676450b3bdfd3ecfdb89f0312a8bf7bfa75ca-1600x2006.jpg",
    reason: "Photo of brick-and-mortar storefront featuring lit neon 'VIC\\'S THE CHEF\\'S BUTCHER' sign.",
    category: "Competitor Storefront"
  },
  {
    id: "rem-4",
    filename: "imgi_388_9a15a2ac1f89c12f03d214d9ab9f6bd326da4c39-1465x808.jpg",
    reason: "Butcher preparing meat at counter wearing black crewneck clearly printed with competitor logo.",
    category: "Staff Uniform"
  },
  {
    id: "rem-5",
    filename: "imgi_389_f7830a7846002f73f69660aef3894f247fdd26da-480x480.jpg",
    reason: "Close-up of egg and bacon burger with 'VIC\\'S MEAT' heat-branded directly onto the brioche bun.",
    category: "Retail 3P Packaging"
  },
  {
    id: "rem-6",
    filename: "imgi_381_b1f410d73925070153717c09b927d0756526a662-6082x4054.jpg",
    reason: "Consumer holding 3 retail soup pouches with bold 'VIC\\'S' brand wordmarks.",
    category: "Retail 3P Packaging"
  },
  {
    id: "rem-7",
    filename: "imgi_125_DCONGL17_-_Bangers_Mash_Bundle_2.webp",
    reason: "Bangers and mash meal kit displaying competitor branded mash pouches.",
    category: "Retail 3P Packaging"
  },
  {
    id: "rem-8",
    filename: "imgi_163_Untitled-1_0034_GenerativeFill33...webp",
    reason: "Béarnaise sauce jar featuring large competitor brand label on glass front.",
    category: "Retail 3P Packaging"
  },
  {
    id: "rem-9",
    filename: "imgi_171_MicrosoftTeams-image_296...webp",
    reason: "Béarnaise dip bowl placed next to competitor sauce container.",
    category: "Retail 3P Packaging"
  },
  {
    id: "rem-10",
    filename: "imgi_390_7c7ffa5be7cba63b5485ddfd5e0ae5fe6e864dbb-1080x1080.jpg",
    reason: "Hand holding 'Dirty Martini Pasta Sauce' retail bottle with third-party branding.",
    category: "Retail 3P Packaging"
  },
  {
    id: "rem-11",
    filename: "imgi_12_Mascot_Hero_image.webp",
    reason: "Clashing cartoon mascot artwork that dilutes the premium, farm-direct Australian aesthetic.",
    category: "Off-brand Style"
  }
];

export const BLOG_POSTS: BlogPostItem[] = [
  {
    id: "blog-1",
    title: "The Reverse-Sear Technique: How to Cook Paris-Bistro Steak Frites at Home",
    category: "Steak Masterclass",
    readTime: "5 min read",
    hook: "Master edge-to-edge medium-rare doneness with a sizzling cast-iron crust and green peppercorn pan jus.",
    targetKeyword: "how to cook scotch fillet reverse sear",
    curatedImageName: "2bf30b98583e44c0819d0385152254d2.thumbnail.0000000.webp",
    imageFallback: "/images/blog/Hero_Beef_009.webp"
  },
  {
    id: "blog-2",
    title: "12-Hour Braised Beef Cheeks in Barossa Shiraz & Dutch Carrots",
    category: "Slow Cooking",
    readTime: "6 min read",
    hook: "Why beef cheeks contain the highest collagen content of any cut, yielding gelatinous, spoon-tender richness.",
    targetKeyword: "braised beef cheeks slow cooker recipe",
    curatedImageName: "BOFLVO10-beef-cheeks-100-trimmed-900g-619672.webp",
    imageFallback: "/images/blog/Hero_Beef_010.webp"
  },
  {
    id: "blog-3",
    title: "Quick 10-Minute Yakiniku Wagyu Rice Bowls for Weeknight Dinners",
    category: "Quick Dinners",
    readTime: "4 min read",
    hook: "Shabu-shabu ribbons seared with sweet soy, mirin, toasted sesame seeds, and crisp butter lettuce wraps.",
    targetKeyword: "wagyu beef yakiniku bowl",
    curatedImageName: "b1f410d73925070153717c09b927d0756526a662-6082x4054.jpg",
    imageFallback: "/images/blog/Hero_Wagyu_126.webp"
  },
  {
    id: "blog-4",
    title: "Traditional Grass-Fed Beef Bolognese & Family Lasagna al Forno",
    category: "Family Comfort",
    readTime: "7 min read",
    hook: "The science of browning 2kg of pure grass-fed beef mince to build fond for the ultimate multi-layer lasagna.",
    targetKeyword: "authentic beef bolognese family lasagna",
    curatedImageName: "b76f96bfac42519d2d62d08d5293389a0188705f-1080x1080.png",
    imageFallback: "/images/blog/Hero_Beef_011.webp"
  },
  {
    id: "blog-5",
    title: "Italian Beef Meatballs in Rich Sugo over Creamy Parmesan Polenta",
    category: "Midweek Italian",
    readTime: "4 min read",
    hook: "Tender, hand-rolled beef meatballs simmered gently so they stay juicy and melt on the palate.",
    targetKeyword: "grass fed beef meatballs recipe",
    curatedImageName: "beef-mince-premium-1kg-737866.webp",
    imageFallback: "/images/products/beef/Beef_0027.webp"
  },
  {
    id: "blog-6",
    title: "Smoked Asado Short Ribs with Fresh Argentine Chimichurri",
    category: "Low & Slow BBQ",
    readTime: "6 min read",
    hook: "Flanken-cut beef ribs seared over red-hot charcoal and basted with chopped parsley, garlic, and red wine vinegar.",
    targetKeyword: "asado beef short ribs chimichurri",
    curatedImageName: "beef-asado-style-short-ribs-oconnor-superior-250g-x-3-pieces-376938.webp",
    imageFallback: "/images/products/beef/Beef_0053.webp"
  },
  {
    id: "blog-7",
    title: "Fragrant Ginger, Garlic & Lemongrass Poached Free-Range Chicken",
    category: "Clean Eating",
    readTime: "5 min read",
    hook: "A delicate, aromatic broth-poached chicken dish packed with collagen and immune-boosting fresh aromatics.",
    targetKeyword: "poached free range chicken broth",
    curatedImageName: "6cecad0bf6468a693fb1c412363280b307634cf1-1200x1200.jpg",
    imageFallback: "/images/blog/Hero_Chicken_001.webp"
  },
  {
    id: "blog-8",
    title: "Infographic: The Complete Guide to Resting & Slicing Scotch Fillet",
    category: "Cooking Guide",
    readTime: "3 min read",
    hook: "Why internal juice redistribution depends on a 5-minute rest at room temperature on a warm timber board.",
    targetKeyword: "how to rest scotch fillet steak",
    curatedImageName: "How_to_cook_Scotch_Fillet_Steak.webp",
    imageFallback: "/images/products/beef/Beef_0062.webp"
  }
];

// Seed full 130 product catalog
export function generate130Catalog(): ProductItem[] {
  const products: ProductItem[] = [];

  const coreSeed: ProductItem[] = [
    {
      sku: "BEEF-001",
      name: "O'Connor 30-Day Dry-Aged Tomahawk Steak (900g)",
      category: "premium-beef-steaks",
      subcategory: "Dry-Aged & Tomahawks",
      price: 84.99,
      weight: "900g",
      brand: "O'Connor Superior Beef",
      badge: "Signature Cut",
      inelastic: false,
      images: {
        raw: "Beef_Rib_Eye_Steak_Grass_Fed_Angus_Premium_O_Connor_Dry_Aged_-_900g.webp",
        cooked: "Beef_Rib_Eye_Steak_Grass_Fed_Angus_Premium_O_Connor_Dry_Aged_-_900g-2.webp",
        rawFallback: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        cookedFallback: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80"
      },
      shortDescription: "30-day dry aged bone-in tomahawk from Gippsland Victoria, prized for intense nutty marbling and tender eating quality."
    },
    {
      sku: "BEEF-002",
      name: "Grass-Fed Beef Bistecca alla Fiorentina T-Bone (900g)",
      category: "premium-beef-steaks",
      subcategory: "Bistecca & T-Bone",
      price: 68.50,
      weight: "900g",
      brand: "O'Connor Superior Beef",
      badge: "King of Steaks",
      inelastic: false,
      images: {
        raw: "beef-bistecca-alla-fiorentina-grass-fed-angus-premium-oconnor-900g-cryo-vac-vics-meat-616716.webp",
        cooked: "Untitled_design_-_2024-12-24T120416.462.webp",
        rawFallback: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=600&q=80",
        cookedFallback: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80"
      },
      shortDescription: "Colossal cut combining tender eye fillet and robust sirloin on the bone. The true Florentine showpiece."
    },
    {
      sku: "BEEF-003",
      name: "Pasture-Raised Scotch Fillet Ribeye Steaks (2 x 300g)",
      category: "premium-beef-steaks",
      subcategory: "Scotch Fillet & Ribeye",
      price: 49.90,
      weight: "600g (2 x 300g)",
      brand: "O'Connor Superior Beef",
      badge: "Australia's Favourite",
      inelastic: true,
      images: {
        raw: "BRCKVO23-beef-scotch-fillet-steak-grass-fed-300g-x-2-pieces-296717.webp",
        cooked: "RibeyeFlameGrilled_Croppped.webp",
        rawFallback: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=600&q=80",
        cookedFallback: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
      },
      shortDescription: "Generously marbled Scotch Fillet cut to a thick 300g steak. Exceptional juiciness and rich beef flavour."
    },
    {
      sku: "BEEF-004",
      name: "Centre-Cut Beef Eye Fillet Medallions (2 x 220g)",
      category: "premium-beef-steaks",
      subcategory: "Eye Fillet & Tenderloin",
      price: 44.90,
      weight: "440g (2 x 220g)",
      brand: "O'Connor Superior Beef",
      badge: "Melt in Mouth",
      inelastic: false,
      images: {
        raw: "beef-eye-fillet-steaks-centre-cut-grass-fed-220g-x-2-pieces-264759.webp",
        cooked: "beef-eye-fillet-steaks-centre-cut-grass-fed-220g-x-2-pieces-vics-meat-435578.webp",
        rawFallback: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        cookedFallback: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80"
      },
      shortDescription: "Pure tenderloin with zero surface fat. Hand-trimmed centre medallions for the tenderest steak experience."
    },
    {
      sku: "BEEF-005",
      name: "Ultra-Thin Wagyu Beef for Shabu Shabu & Sukiyaki (300g)",
      category: "premium-beef-steaks",
      subcategory: "Wagyu Shabu & Yakiniku",
      price: 36.00,
      weight: "300g",
      brand: "Stone Axe & Westholme Wagyu",
      badge: "MS 7+ Wagyu",
      inelastic: false,
      images: {
        raw: "20d0bdb5fe25d0bb484315dac20ee5d9b2593349-1024x1024.jpg",
        cooked: "b1f410d73925070153717c09b927d0756526a662-6082x4054.jpg",
        rawFallback: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        cookedFallback: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80"
      },
      shortDescription: "Paper-thin ribbons of Fullblood Wagyu MS 7+. Cooks in 5 seconds in hot broth or over high-heat yakiniku grills."
    },
    {
      sku: "BBQ-001",
      name: "Grass-Fed Angus Beef Brisket Point End (1.5kg)",
      category: "low-and-slow-bbq",
      subcategory: "Beef Brisket Point & Flat",
      price: 48.00,
      weight: "1.5kg",
      brand: "O'Connor Superior Beef",
      badge: "Pitmaster Gold",
      inelastic: true,
      images: {
        raw: "beef-brisket-point-end-angus-grass-fed-15kg-322679.webp",
        cooked: "beef-brisket-point-end-angus-grass-fed-15kg-453059.webp",
        rawFallback: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=600&q=80",
        cookedFallback: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
      },
      shortDescription: "The rich, fatty point end of the brisket with optimal marbling. Yields competition-grade burnt ends and tender bark."
    },
    {
      sku: "BBQ-002",
      name: "O'Connor Beef Asado Short Ribs (750g - 3 Pieces)",
      category: "low-and-slow-bbq",
      subcategory: "Asado Short Ribs & Dino Bones",
      price: 39.50,
      weight: "750g (3 Ribs)",
      brand: "O'Connor Superior Beef",
      badge: "Smoker Favourite",
      inelastic: true,
      images: {
        raw: "BRIBVO10-beef-asado-style-short-ribs-oconnor-superior-250g-x-3-pieces-459568.webp",
        cooked: "beef-asado-style-short-ribs-oconnor-superior-250g-x-3-pieces-376938.webp",
        rawFallback: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        cookedFallback: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=600&q=80"
      },
      shortDescription: "Flanken cut short ribs cut across the bone. Perfect for high-heat charcoal asado or 6-hour low-and-slow smoking."
    },
    {
      sku: "BBQ-003",
      name: "100% Trimmed Pasture-Raised Beef Cheeks (900g)",
      category: "low-and-slow-bbq",
      subcategory: "Slow-Braised Beef Cheeks & Shanks",
      price: 34.00,
      weight: "900g",
      brand: "O'Connor Superior Beef",
      badge: "Collagene Rich",
      inelastic: true,
      images: {
        raw: "beef-cheeks-100-trimmed-900g-268639.webp",
        cooked: "BOFLVO10-beef-cheeks-100-trimmed-900g-619672.webp",
        rawFallback: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=600&q=80",
        cookedFallback: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=600&q=80"
      },
      shortDescription: "Dense in natural collagen that transforms into silky, spoon-tender gelatin after a slow 4-hour braise."
    },
    {
      sku: "STAPLE-001",
      name: "Premium Grass-Fed Beef Mince (1kg)",
      category: "everyday-family-staples",
      subcategory: "Premium Beef Mince (1kg / 2kg Mega)",
      price: 19.90,
      weight: "1kg",
      brand: "O'Connor Superior Beef",
      badge: "Weekly Essential",
      inelastic: true,
      images: {
        raw: "beef-mince-premium-1kg-136679.webp",
        cooked: "beef-mince-premium-1kg-737866.webp",
        rawFallback: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=600&q=80",
        cookedFallback: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=600&q=80"
      },
      shortDescription: "Ground fresh daily from lean whole steak trimmings with zero preservatives, binders, or added water."
    },
    {
      sku: "STAPLE-002",
      name: "Mega Special Premium Beef Mince (2kg Value Pack)",
      category: "everyday-family-staples",
      subcategory: "Premium Beef Mince (1kg / 2kg Mega)",
      price: 35.90,
      weight: "2kg",
      brand: "O'Connor Superior Beef",
      badge: "Best Value",
      inelastic: true,
      images: {
        raw: "beef-mince-premium-2kg-mega-special-853731.webp",
        cooked: "b76f96bfac42519d2d62d08d5293389a0188705f-1080x1080.png",
        rawFallback: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=600&q=80",
        cookedFallback: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80"
      },
      shortDescription: "2kg bulk pack split into two 1kg trays. Save on weekly grocery budgets while feeding the family real grass-fed beef."
    },
    {
      sku: "STAPLE-003",
      name: "Handcrafted Grass-Fed Angus Burger Patties (6 x 150g)",
      category: "everyday-family-staples",
      subcategory: "Angus Smashed Burger Patties",
      price: 24.50,
      weight: "900g (6 x 150g)",
      brand: "O'Connor Superior Beef",
      badge: "Smash Ready",
      inelastic: true,
      images: {
        raw: "beef-patties-angus-150g-x-6-pieces-600895.webp",
        cooked: "beef-patties-angus-150g-x-6-pieces-937552.webp",
        rawFallback: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
        cookedFallback: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
      },
      shortDescription: "80/20 lean-to-fat ratio seasoned lightly with sea salt and cracked pepper. Unrivalled crust when smashed on the flat top."
    },
    {
      sku: "STAPLE-004",
      name: "Traditional Butcher's Beef Thin Sausages (2kg Mega Pack)",
      category: "everyday-family-staples",
      subcategory: "Artisan Sausages & Bangers",
      price: 29.90,
      weight: "2kg (approx. 24 snags)",
      brand: "O'Connor Superior Beef",
      badge: "Aussie Classic",
      inelastic: true,
      images: {
        raw: "beef-sausages-mega-special-2kg-693090.webp",
        cooked: "DCONGL17_-_Bangers_Mash_Bundle_Lifestyle.webp",
        rawFallback: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=600&q=80",
        cookedFallback: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=600&q=80"
      },
      shortDescription: "Natural casing, pure prime beef, and mild herbs. No artificial fillers, bursts, or excessive grease."
    },
    {
      sku: "STAPLE-005",
      name: "10-Pack Lean High-Protein Rump Steaks (Gym Box 2.5kg)",
      category: "everyday-family-staples",
      subcategory: "Gym & High-Protein Meal Prep Packs",
      price: 79.00,
      weight: "2.5kg (10 x 250g)",
      brand: "O'Connor Superior Beef",
      badge: "Gym Meal Prep",
      inelastic: true,
      images: {
        raw: "ProteinRumps10Pack_red_HP.webp",
        cooked: "photo-1558030006-450675393462.webp",
        rawFallback: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=600&q=80",
        cookedFallback: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80"
      },
      shortDescription: "10 individually vacuum-sealed 250g lean rump steaks. 54g pure protein per steak for optimal sports recovery."
    },
    {
      sku: "STAPLE-006",
      name: "High-Protein Chicken Breast & Angus Steak Combo (2kg)",
      category: "everyday-family-staples",
      subcategory: "Gym & High-Protein Meal Prep Packs",
      price: 58.00,
      weight: "2kg (1kg Chicken + 1kg Steak)",
      brand: "O'Connor Superior Beef",
      badge: "Macro Builder",
      inelastic: true,
      images: {
        raw: "ChickenBreastFillet-LA-lionica-2kg-protein-steak-combine-pack-HP-Label.webp",
        cooked: "photo-1598103442097-8b74394b95c6.webp",
        rawFallback: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=600&q=80",
        cookedFallback: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=600&q=80"
      },
      shortDescription: "1kg trimmed free-range chicken breast fillets paired with 1kg lean Angus steaks. The ultimate fitness athlete weekly bundle."
    },
    {
      sku: "PORK-001",
      name: "Artisanal Dry-Cured Middle Bacon Rashers (500g)",
      category: "pasture-lamb-pork",
      subcategory: "Artisanal Dry-Cured Bacon Rashers",
      price: 18.50,
      weight: "500g",
      brand: "Borrowdale Free Range Pork",
      badge: "Natural Smoke",
      inelastic: true,
      images: {
        raw: "SVTYSM11.webp",
        cooked: "photo-1432139555190-58524dae6a55.webp",
        rawFallback: "https://images.unsplash.com/photo-1528607929212-2636ec44253e?auto=format&fit=crop&w=600&q=80",
        cookedFallback: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=600&q=80"
      },
      shortDescription: "Naturally cured over Australian beechwood with zero synthetic nitrates. Crisp rind and savoury balance."
    },
    {
      sku: "SEA-001",
      name: "Coral Coast Barramundi Mid-Cut Fillets (180g)",
      category: "wild-seafood-pantry",
      subcategory: "Wild Barramundi & Murray Cod Fillets",
      price: 16.90,
      weight: "180g",
      brand: "Coral Coast Barramundi",
      badge: "Ocean Fresh",
      inelastic: true,
      images: {
        raw: "barramundi-mid-cut-fillet-coral-coast-australia-160-180g-x-1-piece-940493.webp",
        cooked: "barramundi-mid-cut-fillet-coral-coast-australia-160-180g-x-1-piece-638547.webp",
        rawFallback: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        cookedFallback: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80"
      },
      shortDescription: "Sustainably ocean-farmed in Far North Queensland. Renders glassy crisp skin with pearlescent, moist white flesh."
    },
    {
      sku: "SEA-002",
      name: "Aquna Riverina Murray Cod Mid-Cut Fillet (180g)",
      category: "wild-seafood-pantry",
      subcategory: "Wild Barramundi & Murray Cod Fillets",
      price: 19.50,
      weight: "180g",
      brand: "Aquna Murray Cod",
      badge: "Native Australian",
      inelastic: true,
      images: {
        raw: "aquna-murray-cod-mid-cut-fillet-160-180g-x-1-piece-653768.webp",
        cooked: "aquna-murray-cod-mid-cut-fillet-160-180g-x-1-piece-385748.webp",
        rawFallback: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        cookedFallback: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80"
      },
      shortDescription: "Australia's iconic native fish. High natural omega-3 content gives a rich, buttery flake when pan-roasted."
    },
    {
      sku: "SEA-003",
      name: "Black Pearl Australian Salmon Caviar (50g)",
      category: "wild-seafood-pantry",
      subcategory: "Australian Black Pearl Salmon Caviar",
      price: 38.00,
      weight: "50g",
      brand: "Black Pearl Caviar",
      badge: "Luxury Reserve",
      inelastic: false,
      images: {
        raw: "australian-salmon-caviar-50g-246327.webp",
        cooked: "australian-salmon-caviar-50g-970660.webp",
        rawFallback: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        cookedFallback: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80"
      },
      shortDescription: "Glistening amber spheres with a delicate pop and fresh briny sea sweetness. Sustainably harvested in clean Australian waters."
    }
  ];

  products.push(...coreSeed);

  // Extended catalog definitions to reach 130 items across all 6 departments
  const categoryExpansions: {
    cat: string;
    sub: string;
    brand: string;
    items: { name: string; price: number; weight: string; badge: string; inelastic: boolean }[];
  }[] = [
    {
      cat: "premium-beef-steaks",
      sub: "Scotch Fillet & Ribeye",
      brand: "Stone Axe & Westholme Wagyu",
      items: [
        { name: "Fullblood Wagyu Ribeye Steak MS 9+ (350g)", price: 98.0, weight: "350g", badge: "MS 9+ Wagyu", inelastic: false },
        { name: "Fullblood Wagyu Sirloin Striploin MS 8+ (300g)", price: 79.5, weight: "300g", badge: "MS 8+ Wagyu", inelastic: false },
        { name: "Grass-Fed Porterhouse / NY Strip Steaks (2 x 250g)", price: 39.0, weight: "500g", badge: "Prime Cut", inelastic: true },
        { name: "Gippsland Grass-Fed Rump Cap Picanha (1kg Whole)", price: 42.0, weight: "1kg", badge: "Picanha", inelastic: true },
        { name: "Angus Grass-Fed Flat Iron Steak (250g)", price: 21.0, weight: "250g", badge: "Bistro Cut", inelastic: true },
        { name: "Fullblood Wagyu Rib Cap Ribeye Lifter (300g)", price: 68.0, weight: "300g", badge: "Rare Cut", inelastic: false },
        { name: "Australian Black Angus Minute Steaks (4 x 120g)", price: 24.0, weight: "480g", badge: "Midweek Quick", inelastic: true },
        { name: "Angus Beef Chuck Eye Delmonico Steaks (2 x 250g)", price: 29.5, weight: "500g", badge: "Delmonico", inelastic: true },
        { name: "Grass-Fed Beef Flank Steak (700g)", price: 31.0, weight: "700g", badge: "Fajita Cut", inelastic: true },
        { name: "Beef Skirt Steak for Carne Asada (600g)", price: 27.5, weight: "600g", badge: "Carne Asada", inelastic: true },
        { name: "Grain-Finished T-Bone Classic (500g)", price: 36.0, weight: "500g", badge: "Pub Classic", inelastic: true },
        { name: "Grass-Fed Sirloin Medallions with Rosemary Rub (400g)", price: 32.0, weight: "400g", badge: "Herb Rubbed", inelastic: true },
        { name: "Wagyu Denver Steak MS 7+ (300g)", price: 39.0, weight: "300g", badge: "Denver Cut", inelastic: false },
        { name: "Wagyu Tri-Tip Santa Maria Cut (800g)", price: 54.0, weight: "800g", badge: "Santa Maria", inelastic: false },
        { name: "Fullblood Wagyu Yakiniku Karubi Plate (250g)", price: 34.0, weight: "250g", badge: "Yakiniku", inelastic: false },
        { name: "Centre-Cut Chateaubriand Fillet Roast (600g)", price: 62.0, weight: "600g", badge: "Luxury Roast", inelastic: false },
        { name: "Dry-Aged Ribeye Cowboy Steak (600g)", price: 58.0, weight: "600g", badge: "Cowboy Ribeye", inelastic: false },
        { name: "30-Day Dry Aged Côte de Bœuf (800g)", price: 74.0, weight: "800g", badge: "French Classic", inelastic: false },
        { name: "Fullblood Wagyu Bavette Skirt MS 7+ (400g)", price: 42.0, weight: "400g", badge: "Bavette", inelastic: false },
        { name: "Grass-Fed Beef Eye Fillet Carpaccio Slices (150g)", price: 18.0, weight: "150g", badge: "Raw Carpaccio", inelastic: false },
        { name: "Dry-Aged Club Steak on the Bone (450g)", price: 44.0, weight: "450g", badge: "Club Steak", inelastic: false },
        { name: "Wagyu Sirloin Skewers with Yakitori Glaze (4 x 100g)", price: 38.0, weight: "400g", badge: "Yakitori", inelastic: false },
        { name: "Wagyu Beef Eye Fillet Tournedos (200g)", price: 48.0, weight: "200g", badge: "Tournedos", inelastic: false },
        { name: "45-Day Dry-Aged Sirloin on the Bone (400g)", price: 46.0, weight: "400g", badge: "45-Day Aged", inelastic: false },
        { name: "Dry-Aged Bone-In Ribeye T-Bone Fiorentina (1.2kg Grand)", price: 95.0, weight: "1.2kg", badge: "Grand Bistecca", inelastic: false },
        { name: "Grass-Fed Beef Onglet Hanger Steak (400g)", price: 26.5, weight: "400g", badge: "Butcher's Onglet", inelastic: true },
        { name: "Grass-Fed Petite Tenderloin Filets (2 x 180g)", price: 36.0, weight: "360g", badge: "Petite Tender", inelastic: true },
        { name: "Wagyu Beef Flank MS 8+ (500g)", price: 52.0, weight: "500g", badge: "Marbled Flank", inelastic: false },
        { name: "Standing Prime Rib Roast on Bone (1kg Primal)", price: 65.0, weight: "1kg", badge: "Roast Primal", inelastic: false },
        { name: "Single Grass-Fed Bone-In Rib Eye Cut (450g)", price: 38.0, weight: "450g", badge: "Bone-in Ribeye", inelastic: true }
      ]
    },
    {
      cat: "low-and-slow-bbq",
      sub: "Beef Brisket Point & Flat",
      brand: "O'Connor Superior Beef",
      items: [
        { name: "Full Packer Competition Beef Brisket (5.5kg Whole)", price: 149.0, weight: "5.5kg", badge: "Competition Spec", inelastic: true },
        { name: "Wagyu Beef Dino Ribs Plate (3-Bone 2.2kg)", price: 110.0, weight: "2.2kg", badge: "Monster Ribs", inelastic: true },
        { name: "St. Louis Cut Pork Spare Ribs (1.3kg Rack)", price: 32.0, weight: "1.3kg", badge: "St. Louis Cut", inelastic: true },
        { name: "USA Baby Back Pork Loin Ribs (900g Rack)", price: 28.0, weight: "900g", badge: "Baby Backs", inelastic: true },
        { name: "Boston Pork Butt for Pulled Pork (2.5kg Bone-In)", price: 38.0, weight: "2.5kg", badge: "Pulled Pork", inelastic: true },
        { name: "Whole Beef Tri-Tip Roast for Smoker (1kg)", price: 44.0, weight: "1kg", badge: "Smoked Tri-Tip", inelastic: true },
        { name: "Pasture-Raised Beef Shin Shank Osso Buco (1.2kg)", price: 32.0, weight: "1.2kg", badge: "Osso Buco", inelastic: true },
        { name: "Whole Grass-Fed Beef Oxtail (1kg Cut)", price: 34.0, weight: "1kg", badge: "Gelatin Rich", inelastic: true },
        { name: "Smoked Wagyu Brisket Burnt Ends Prep Pack (1kg)", price: 39.0, weight: "1kg", badge: "Burnt Ends", inelastic: true },
        { name: "Borrowdale Free-Range Pork Belly for Smoker (1.5kg)", price: 36.0, weight: "1.5kg", badge: "Crisp Crackling", inelastic: true },
        { name: "Grass-Fed Beef Chuck Roast for Pulled Beef (1.5kg)", price: 38.0, weight: "1.5kg", badge: "Pulled Beef", inelastic: true },
        { name: "Beef Short Ribs English Cut Cross-Cut (1kg)", price: 38.0, weight: "1kg", badge: "English Short Ribs", inelastic: true },
        { name: "Smoked Texas Hot Link Artisan Sausages (1kg Pack)", price: 24.0, weight: "1kg", badge: "Texas Hot Link", inelastic: true },
        { name: "Beef Navel End Pastrami Cure Cut (2kg)", price: 48.0, weight: "2kg", badge: "Pastrami Navel", inelastic: true },
        { name: "Smoked Lamb Ribs Whole Breast (1kg)", price: 26.0, weight: "1kg", badge: "Lamb Ribs", inelastic: true },
        { name: "Smoker Hardwood Wood Chunk Starter Bundle (3kg)", price: 19.5, weight: "3kg", badge: "Ironbark Wood", inelastic: true },
        { name: "Signature Texas Salt & Pepper 16-Mesh Rub (250g)", price: 14.5, weight: "250g", badge: "16-Mesh Rub", inelastic: true }
      ]
    },
    {
      cat: "everyday-family-staples",
      sub: "Artisan Sausages & Bangers",
      brand: "O'Connor Superior Beef",
      items: [
        { name: "Lean Grass-Fed Beef Stir-Fry Strips (600g)", price: 19.5, weight: "600g", badge: "Stir Fry Ready", inelastic: true },
        { name: "Classic Italian Pork & Fennel Sausages (1kg)", price: 22.0, weight: "1kg", badge: "Pork & Fennel", inelastic: true },
        { name: "Gluten-Free Beef & Honeycomb Sausages (1kg)", price: 22.0, weight: "1kg", badge: "Gluten Free", inelastic: true },
        { name: "Grass-Fed Beef Rump Steak Family Pack (4 x 250g)", price: 34.0, weight: "1kg", badge: "Family Pack", inelastic: true },
        { name: "Lean Turkey Breast Mince (1kg)", price: 21.0, weight: "1kg", badge: "Lean Turkey", inelastic: true },
        { name: "Free-Range Chicken Breast Fillets Bulk (2kg)", price: 32.0, weight: "2kg", badge: "Bulk 2kg", inelastic: true },
        { name: "Beef & Vegetable Handcrafted Meatballs (12 x 40g)", price: 18.0, weight: "480g", badge: "Family Favourite", inelastic: true },
        { name: "Wagyu Beef Smash Burgers (4 x 180g)", price: 26.0, weight: "720g", badge: "Wagyu Smash", inelastic: true },
        { name: "Jalapeño & Cheddar Beef Smoked Dogs (6pk 600g)", price: 19.0, weight: "600g", badge: "Jalapeño Cheddar", inelastic: true },
        { name: "Weekly Family Essentials Meat Box (5.5kg)", price: 125.0, weight: "5.5kg", badge: "Free Shipping Box", inelastic: true },
        { name: "Couples Midweek Quick Dinners Box (3.2kg)", price: 79.0, weight: "3.2kg", badge: "Couples Box", inelastic: true },
        { name: "Grass-Fed Beef Gravy Beef Shins (800g)", price: 19.0, weight: "800g", badge: "Gravy Beef", inelastic: true },
        { name: "Gourmet Beef Chevapchichi Skinless Sausages (12pk)", price: 16.5, weight: "500g", badge: "Chevapchichi", inelastic: true },
        { name: "Grass-Fed Beef Schnitzels Crumbed in Panko (4pk 600g)", price: 21.0, weight: "600g", badge: "Crumbed Schnitty", inelastic: true },
        { name: "Low-FODMAP Lean Beef Mince (1kg)", price: 22.0, weight: "1kg", badge: "Low FODMAP", inelastic: true },
        { name: "High-Protein Grass-Fed Beef Jerky Sticks (200g)", price: 15.0, weight: "200g", badge: "Zero Sugar", inelastic: true },
        { name: "Beef Tenderloin Stir-Fry with Snow Peas (650g)", price: 27.0, weight: "650g", badge: "Chef Prep", inelastic: true },
        { name: "Grass-Fed Diced Casserole Beef (750g)", price: 22.5, weight: "750g", badge: "Slow Cooker", inelastic: true },
        { name: "Grass-Fed Beef Eye Fillet Skewers (4 x 110g)", price: 26.0, weight: "440g", badge: "Grill Skewers", inelastic: true }
      ]
    },
    {
      cat: "pasture-lamb-pork",
      sub: "Lamb Cutlets & Loin Chops",
      brand: "Roaring Forties Lamb",
      items: [
        { name: "French-Trimmed Lamb Cutlets Rack (8 Cutlets 700g)", price: 49.0, weight: "700g", badge: "Crown Cutlets", inelastic: true },
        { name: "Grass-Fed Lamb Loin Chops (6pk 650g)", price: 29.5, weight: "650g", badge: "Pan Fry Chops", inelastic: true },
        { name: "Slow-Cooked Lamb Shank Duo (2 x 450g Bone-In)", price: 26.0, weight: "900g", badge: "Winter Shank", inelastic: true },
        { name: "Whole Bone-In Pasture Lamb Shoulder (2kg Roast)", price: 48.0, weight: "2kg", badge: "Pull-Apart Lamb", inelastic: true },
        { name: "Easy-Carve Boneless Lamb Leg Roast (1.5kg)", price: 42.0, weight: "1.5kg", badge: "Boneless Roast", inelastic: true },
        { name: "Borrowdale Free-Range Pork Cutlets (2 x 300g)", price: 24.5, weight: "600g", badge: "Pork Cutlets", inelastic: true },
        { name: "Borrowdale Thick-Cut Pork Loin Steaks (2 x 250g)", price: 19.5, weight: "500g", badge: "Loin Steaks", inelastic: true },
        { name: "Rolled Free-Range Pork Loin Roast with Crackling (1.5kg)", price: 38.0, weight: "1.5kg", badge: "Crackling Master", inelastic: true },
        { name: "Streaky Wood-Smoked Pork Belly Bacon (400g)", price: 16.5, weight: "400g", badge: "Streaky Bacon", inelastic: true },
        { name: "Diced Grass-Fed Lamb for Curry & Souvlaki (750g)", price: 26.0, weight: "750g", badge: "Diced Lamb", inelastic: true },
        { name: "Marinated Greek Garlic & Oregano Lamb Skewers (4pk)", price: 24.0, weight: "440g", badge: "Greek Souvlaki", inelastic: true },
        { name: "Artisanal Speck Bacon Slab Cured & Smoked (500g)", price: 18.0, weight: "500g", badge: "Cured Speck", inelastic: true },
        { name: "Borrowdale Free-Range Pork Medallions (4 x 120g)", price: 18.0, weight: "480g", badge: "Lean Medallions", inelastic: true },
        { name: "Lamb Chump Steaks (2 x 220g)", price: 21.0, weight: "440g", badge: "Chump Steaks", inelastic: true },
        { name: "Rosemary & Garlic Butter Basted Lamb Rump (400g)", price: 22.5, weight: "400g", badge: "Basted Rump", inelastic: true },
        { name: "Free-Range Pork Collar Butt Scotch Steaks (2 x 250g)", price: 18.5, weight: "500g", badge: "Pork Scotch", inelastic: true },
        { name: "Lamb Kofta Skewers with Middle Eastern Cumin (6pk)", price: 19.0, weight: "450g", badge: "Kofta Spiced", inelastic: true },
        { name: "Kaiserfleisch Double Smoked Pork Belly Cut (500g)", price: 19.5, weight: "500g", badge: "Kaiserfleisch", inelastic: true },
        { name: "Pasture Lamb Minced with Mint & Rosemary (500g)", price: 14.0, weight: "500g", badge: "Gourmet Lamb Mince", inelastic: true }
      ]
    },
    {
      cat: "free-range-poultry",
      sub: "Whole Roasting Chickens",
      brand: "Australian Pasture Raised Poultry",
      items: [
        { name: "Certified Organic Whole Pastured Chicken (1.8kg)", price: 26.5, weight: "1.8kg", badge: "Certified Organic", inelastic: true },
        { name: "Skinless Free-Range Chicken Breast Fillets (1kg)", price: 18.9, weight: "1kg", badge: "Lean Breast", inelastic: true },
        { name: "Boneless Free-Range Chicken Thigh Fillets (1kg)", price: 19.5, weight: "1kg", badge: "Juicy Thighs", inelastic: true },
        { name: "Butterflied Free-Range Lemon Herb Spatchcock (1.4kg)", price: 24.0, weight: "1.4kg", badge: "Spatchcock", inelastic: true },
        { name: "Free-Range Chicken Drumsticks Family Pack (1.5kg)", price: 14.5, weight: "1.5kg", badge: "Drumsticks", inelastic: true },
        { name: "Free-Range Chicken Wings Mid-Joint & Drumette (1.2kg)", price: 13.9, weight: "1.2kg", badge: "Crispy Wings", inelastic: true },
        { name: "Marinated Honey Soy Chicken Tenderloin Skewers (6pk)", price: 16.5, weight: "500g", badge: "Honey Soy", inelastic: true },
        { name: "Free-Range Chicken Schnitzels Hand-Crumbed Herb (4pk)", price: 18.0, weight: "600g", badge: "Herb Schnitzel", inelastic: true },
        { name: "Whole Free-Range Duck (2.2kg Aylesbury Breed)", price: 38.0, weight: "2.2kg", badge: "Roast Duck", inelastic: false },
        { name: "Duck Breast Fillets Skin-On (2 x 220g)", price: 28.0, weight: "440g", badge: "Duck Breast", inelastic: false },
        { name: "Free-Range Chicken Liver for Artisan Parfait (500g)", price: 8.5, weight: "500g", badge: "Chicken Liver", inelastic: true },
        { name: "Chicken & Camembert Gourmet Sausages (6pk 500g)", price: 15.0, weight: "500g", badge: "Camembert Sausage", inelastic: true },
        { name: "Portuguese Peri-Peri Marinated Spatchcock (1.4kg)", price: 24.5, weight: "1.4kg", badge: "Peri-Peri", inelastic: true },
        { name: "Bone-in Skin-on Free-Range Chicken Marylands (4pk)", price: 15.5, weight: "900g", badge: "Marylands", inelastic: true },
        { name: "Free-Range Chicken Mince 100% Breast Meat (1kg)", price: 17.5, weight: "1kg", badge: "Chicken Mince", inelastic: true }
      ]
    },
    {
      cat: "wild-seafood-pantry",
      sub: "Wild Barramundi & Murray Cod Fillets",
      brand: "Aquna & Coral Coast Seafood",
      items: [
        { name: "Tasmanian Huon Atlantic Salmon Fillets (2 x 200g)", price: 24.0, weight: "400g", badge: "Huon Salmon", inelastic: true },
        { name: "Moreton Bay Bugs Green Raw Halves (500g)", price: 44.0, weight: "500g", badge: "Moreton Bay Bugs", inelastic: false },
        { name: "Wild Australian King Prawns XL Green (1kg Box)", price: 49.0, weight: "1kg", badge: "Wild King Prawns", inelastic: false },
        { name: "WA Rock Lobster Tail (Raw Frozen 300g)", price: 54.0, weight: "300g", badge: "WA Rock Lobster", inelastic: false },
        { name: "Sydney Rock Oysters Freshly Shucked (Dozen)", price: 29.0, weight: "12 oysters", badge: "Sydney Rock Oysters", inelastic: false },
        { name: "Gold Band Snapper Mid-Cut Fillets (2 x 180g)", price: 28.0, weight: "360g", badge: "Gold Band Snapper", inelastic: true },
        { name: "Smoked Ocean Trout Flakes (200g)", price: 18.0, weight: "200g", badge: "Ocean Trout", inelastic: true },
        { name: "The Fine Cheese Co. Basil EVOO Crackers (125g)", price: 11.5, weight: "125g", badge: "Artisan Crackers", inelastic: true },
        { name: "Murray River Pink Flake Sea Salt Tub (250g)", price: 12.0, weight: "250g", badge: "Murray River Salt", inelastic: true },
        { name: "Artisanal Chimichurri Herb Glaze for Steaks (250ml)", price: 14.0, weight: "250ml", badge: "Chimichurri", inelastic: true },
        { name: "Red Wine & Bone Marrow Finishing Jus (300g)", price: 14.5, weight: "300g", badge: "Bone Marrow Jus", inelastic: true },
        { name: "Black Truffle Infused Grass-Fed Butter Disc (100g)", price: 13.5, weight: "100g", badge: "Truffle Butter", inelastic: false }
      ]
    }
  ];

  let counter = 100;
  for (const group of categoryExpansions) {
    for (const item of group.items) {
      if (products.length >= 130) break;
      products.push({
        sku: `AUS-${++counter}`,
        name: item.name,
        category: group.cat,
        subcategory: group.sub,
        price: item.price,
        weight: item.weight,
        brand: group.brand,
        badge: item.badge,
        inelastic: item.inelastic,
        images: {
          raw: "BRCKVO23-beef-scotch-fillet-steak-grass-fed-300g-x-2-pieces-296717.webp",
          cooked: "RibeyeFlameGrilled_Croppped.webp",
          rawFallback: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=600&q=80",
          cookedFallback: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
        },
        shortDescription: `Artisan Australian butcher cut ${item.name.toLowerCase()}, cold-chain packed for maximum freshness and flavour.`
      });
    }
  }

  return products.slice(0, 130);
}
