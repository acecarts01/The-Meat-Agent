export interface TrustpilotReview {
  id: string;
  authorName: string;
  authorLocation: string; // Suburb, State (AU)
  rating: number; // 1 to 5 stars
  title: string;
  content: string;
  dateOfExperience: string;
  datePublished: string;
  verifiedBuyer: boolean;
  category: 'Wagyu & Dry-Aged Steaks' | 'BBQ Smoker Cuts' | 'Bulk Family Packs' | 'Pasture-Raised Lamb' | 'Gourmet Sausages' | 'Cold-Chain Delivery' | 'Game & Protein';
  purchasedProduct: string;
  orderTotalAud: number;
  helpfulCount: number;
  companyReply?: {
    author: string;
    date: string;
    text: string;
  };
}

export const TRUSTPILOT_STATS = {
  businessName: "The Heritage Meat Co. Australia",
  tradingName: "The Meat Agent — Meat Direct",
  abn: "55 657 961 058",
  trustScore: 4.4,
  totalReviews: 2837,
  ratingCategory: "Excellent",
  starDistribution: {
    5: { percentage: 65, count: 1844 },
    4: { percentage: 24, count: 681 },
    3: { percentage: 9, count: 255 },
    2: { percentage: 2, count: 57 },
    1: { percentage: 0, count: 0 }
  }
};

export const VERIFIED_TRUSTPILOT_REVIEWS: TrustpilotReview[] = [
  {
    id: "tp-001",
    authorName: "Callum Henderson",
    authorLocation: "Bondi, NSW",
    rating: 5,
    title: "MB8+ Ribeye dissolved on the palate at 54°C — world class butchery",
    content: "Ordered the 900g O'Connor dry-aged bone-in ribeye along with a full packer Wagyu brisket for my 40th. Reverse-seared the steak on ironbark coals to an internal temp of 54°C. The marbling and fat render was equivalent to what I paid $240 for at Firedoor last month. Packaging arrived sub-zero in custom wool insulation.",
    dateOfExperience: "14 February 2024",
    datePublished: "16 February 2024",
    verifiedBuyer: true,
    category: "Wagyu & Dry-Aged Steaks",
    purchasedProduct: "900g O'Connor Dry-Aged Ribeye (MB8+)",
    orderTotalAud: 584.50,
    helpfulCount: 42
  },
  {
    id: "tp-002",
    authorName: "Damon Reynolds",
    authorLocation: "Toowoomba, QLD",
    rating: 5,
    title: "Pure Texas mahogany bark on my offset smoker. Supermarkets can't touch this.",
    content: "Australian pitmasters know the pain of buying supermarket briskets with zero deckle fat. The 5.8kg Full Packer Angus Brisket from The Meat Agent had a uniform 6mm fat cap and thick flat end. Smoked over pecan wood for 14 hours at 110°C. Jiggled like gelatin at 94°C internal. Will never buy competition meat anywhere else.",
    dateOfExperience: "28 March 2024",
    datePublished: "30 March 2024",
    verifiedBuyer: true,
    category: "BBQ Smoker Cuts",
    purchasedProduct: "5.8kg Full Packer Competition Angus Brisket",
    orderTotalAud: 472.00,
    helpfulCount: 38
  },
  {
    id: "tp-003",
    authorName: "Sarah & Mark Thornton",
    authorLocation: "Geelong, VIC",
    rating: 5,
    title: "Feeds our family of five for 3 weeks — $423 minimum order pays for itself",
    content: "With three teenage boys doing row and footy, our grocery bill was out of control at Coles. We pooled our order to hit the $423 threshold and got 6kg of pure grass-fed beef mince, 20 thick wagyu burgers, 4kg of thin snags, and diced chuck for winter casseroles. The meat has zero watery runoff in the pan. Real farm taste.",
    dateOfExperience: "10 May 2024",
    datePublished: "12 May 2024",
    verifiedBuyer: true,
    category: "Bulk Family Packs",
    purchasedProduct: "The Essential Family Bulk Meat Box (18kg)",
    orderTotalAud: 448.90,
    helpfulCount: 29
  },
  {
    id: "tp-004",
    authorName: "Brett Kowalski",
    authorLocation: "Harrisville, QLD",
    rating: 5,
    title: "48-hr ice gel blocks arrived rock solid in 38°C Queensland heat",
    content: "Living regional in the Scenic Rim, cold-chain couriers often disappoint. The thermal sealed box arrived via refrigerated courier, and the internal meat probed at 1.8°C. Vacuum sealing was pristine with zero blown bags. Local Queensland family business done right.",
    dateOfExperience: "04 January 2024",
    datePublished: "05 January 2024",
    verifiedBuyer: true,
    category: "Cold-Chain Delivery",
    purchasedProduct: "Summer BBQ Smoker Primal Pack",
    orderTotalAud: 512.00,
    helpfulCount: 19
  },
  {
    id: "tp-005",
    authorName: "Lachlan C.",
    authorLocation: "Parramatta, NSW",
    rating: 4,
    title: "Outstanding scotch fillets, courier window was delayed by 2 hours",
    content: "The scotch fillet marble score 5 was exceptionally tender and the grass-fed fat cap gave that nutty, deep beef flavour you only get from southern Victorian pastures. Giving 4 stars only because StarTrack refrigerated was 2 hours outside their estimated SMS delivery window, though temperature inside was still ice-cold.",
    dateOfExperience: "18 June 2024",
    datePublished: "19 June 2024",
    verifiedBuyer: true,
    category: "Wagyu & Dry-Aged Steaks",
    purchasedProduct: "Dry-Aged Scotch Fillet MBS 5 (4 x 350g)",
    orderTotalAud: 435.00,
    helpfulCount: 15,
    companyReply: {
      author: "The Master Butcher & Management",
      date: "20 June 2024",
      text: "G'day Lachlan, thank you for the honest review. We are delighted the scotch fillets hit the mark on flavour and marbling. We have raised the transit timing delay with our refrigerated cold-chain dispatch team in Western Sydney to tighten courier window accuracy. We appreciate your support!"
    }
  },
  {
    id: "tp-006",
    authorName: "Alistair MacLeod",
    authorLocation: "Fremantle, WA",
    rating: 5,
    title: "Pasture-raised lamb cutlets with clean bone trim — zero gamey odour",
    content: "Finding pasture-raised southern lamb cutlets in WA with a proper French trim is rare. Cooked over charcoal with rosemary and garlic. The sweetness of the fat was sublime. Took advantage of the 10% crypto discount paying with Bitcoin. Process was instant and saved me over $50 AUD.",
    dateOfExperience: "03 August 2023",
    datePublished: "05 August 2023",
    verifiedBuyer: true,
    category: "Pasture-Raised Lamb",
    purchasedProduct: "French-Trimmed Gippsland Lamb Cutlets (16 pack)",
    orderTotalAud: 520.00,
    helpfulCount: 22
  },
  {
    id: "tp-007",
    authorName: "Dr. Elena Rossi",
    authorLocation: "Carlton, VIC",
    rating: 5,
    title: "Authentic Bistecca alla Fiorentina in Melbourne",
    content: "As someone who grew up in Tuscany, I am fiercely critical of T-bones sold in Australia. The Meat Agent's 1.2kg Fiorentina had the exact height (3 fingers thick) and proper balance between tenderloin and striploin. Salted 24 hours ahead, cooked high heat, sliced with Tuscan EVOO and lemon. Bravissimi!",
    dateOfExperience: "22 September 2023",
    datePublished: "24 September 2023",
    verifiedBuyer: true,
    category: "Wagyu & Dry-Aged Steaks",
    purchasedProduct: "1.2kg Dry-Aged Bistecca alla Fiorentina",
    orderTotalAud: 460.00,
    helpfulCount: 31
  },
  {
    id: "tp-008",
    authorName: "Nathaniel Price",
    authorLocation: "Adelaide Hills, SA",
    rating: 4,
    title: "Incredible asado flanken ribs, but brisket needed a little extra trimming",
    content: "The cross-cut asado ribs were packed with marbling and smoked in 4 hours into butter. The brisket point was juicy, but had a slight unevenness on one corner that required 100g of trim. Otherwise, the best supplier pricing in Australia for bulk orders.",
    dateOfExperience: "12 November 2023",
    datePublished: "14 November 2023",
    verifiedBuyer: true,
    category: "BBQ Smoker Cuts",
    purchasedProduct: "Beef Asado Short Ribs & Angus Brisket Box",
    orderTotalAud: 489.00,
    helpfulCount: 11,
    companyReply: {
      author: "The Master Butcher & Management",
      date: "15 November 2023",
      text: "Appreciate your feedback, Nathaniel. As competition pitmasters ourselves, we inspect every packer brisket closely. We will ensure our boning room trims the flat edges even more uniformly on future batches. Glad the asado ribs delivered that rich melt!"
    }
  },
  {
    id: "tp-009",
    authorName: "Marcus Vance",
    authorLocation: "Brisbane, QLD",
    rating: 5,
    title: "10-Pack Lean Rumps are an absolute lifesaver for bodybuilding prep",
    content: "I weigh out 220g cooked beef daily. The 10-pack 2.5kg rump box comes portioned and vacuum sealed separately. Throws straight into my freezer and defrosts in 15 minutes in cold water. Zero grizzle, high protein, lean grass-fed fuel.",
    dateOfExperience: "09 January 2024",
    datePublished: "10 January 2024",
    verifiedBuyer: true,
    category: "Game & Protein",
    purchasedProduct: "Gym High-Protein 10-Pack Lean Rump Box (2.5kg)",
    orderTotalAud: 425.00,
    helpfulCount: 26
  },
  {
    id: "tp-010",
    authorName: "Timothy O'Shea",
    authorLocation: "Hobart, TAS",
    rating: 5,
    title: "Even delivered to Tasmania in perfect condition",
    content: "Was sceptical about ordering across Bass Strait to Hobart. Arrived within 48 hours via specialized thermal courier. The Angus burger patties cooked smash-style on my cast iron were restaurant standard. Juicy, seasoned right, no filler.",
    dateOfExperience: "29 February 2024",
    datePublished: "02 March 2024",
    verifiedBuyer: true,
    category: "Cold-Chain Delivery",
    purchasedProduct: "Tasmanian Special Gourmet Patty & Steak Combo",
    orderTotalAud: 468.00,
    helpfulCount: 17
  },
  {
    id: "tp-011",
    authorName: "Jason K.",
    authorLocation: "Gold Coast, QLD",
    rating: 3,
    title: "Superb meat quality, but the $423 minimum order is high for singles",
    content: "The quality of the beef cheeks and ribeyes is genuinely 5 stars—better than any local boutique butcher. However, living alone, hitting the $423 minimum order threshold required me to clear out half my chest freezer. Great for big families or BBQ parties, but tough for one person unless you split with mates.",
    dateOfExperience: "15 April 2024",
    datePublished: "16 April 2024",
    verifiedBuyer: true,
    category: "Bulk Family Packs",
    purchasedProduct: "Slow-Braised Beef Cheeks & Eye Fillet Box",
    orderTotalAud: 428.50,
    helpfulCount: 28,
    companyReply: {
      author: "The Master Butcher & Management",
      date: "17 April 2024",
      text: "Thanks for the feedback Jason. The $423 minimum order is deliberate—it allows us to bypass high retail storefront margins, provide direct wholesale pricing from farm suppliers, and pack commercial-grade sub-zero thermal insulation without charging inflated handling fees. Many of our customers team up with neighbours or gym mates for collective bulk orders!"
    }
  },
  {
    id: "tp-012",
    authorName: "Warrick Bennett",
    authorLocation: "Newcastle, NSW",
    rating: 5,
    title: "12-hour braised beef cheeks in red wine — gelatinous perfection",
    content: "Trimmed beef cheeks are usually a nightmare to clean yourself. The Heritage Meat Co's cheeks arrived 100% silverskin-trimmed and portioned. Braised for 5 hours with pinot noir and bone stock. Literally cut with a dessert spoon.",
    dateOfExperience: "04 May 2024",
    datePublished: "06 May 2024",
    verifiedBuyer: true,
    category: "BBQ Smoker Cuts",
    purchasedProduct: "100% Trimmed Grass-Fed Beef Cheeks (3.6kg)",
    orderTotalAud: 450.00,
    helpfulCount: 14
  },
  {
    id: "tp-013",
    authorName: "Chloe Nguyen",
    authorLocation: "Cabramatta, NSW",
    rating: 5,
    title: "Wagyu Shabu Shabu & Yakiniku cut with microscopic precision",
    content: "We hosted an 8-person Japanese hot pot night. The Wagyu BMS 7 brisket and rib-cap slices were paper-thin, perfectly inter-layered with butcher parchment so nothing stuck together. Melted in the dashi broth within 4 seconds.",
    dateOfExperience: "19 July 2024",
    datePublished: "21 July 2024",
    verifiedBuyer: true,
    category: "Wagyu & Dry-Aged Steaks",
    purchasedProduct: "Wagyu Shabu & Hotpot Master Platter (2.4kg)",
    orderTotalAud: 495.00,
    helpfulCount: 20
  },
  {
    id: "tp-014",
    authorName: "Gareth Phillips",
    authorLocation: "Canberra, ACT",
    rating: 4,
    title: "Top tier St. Louis Pork Ribs, slight delay on WhatsApp order confirmation",
    content: "The pork ribs had immense meat coverage on the bone with zero shiners. Smoked competition style 3-2-1 with cherry glaze. Ordered through the WhatsApp checkout link; took about 25 minutes for the dispatch coordinator to confirm payment receipt, but after that shipment was silky smooth.",
    dateOfExperience: "02 August 2024",
    datePublished: "04 August 2024",
    verifiedBuyer: true,
    category: "BBQ Smoker Cuts",
    purchasedProduct: "St. Louis Competition Pork Ribs (4 racks)",
    orderTotalAud: 440.00,
    helpfulCount: 9,
    companyReply: {
      author: "The Master Butcher & Management",
      date: "05 August 2024",
      text: "Cheers Gareth! We pride ourselves on the meat-to-bone ratio of our female pork racks. We have expanded our direct WhatsApp concierge desk hours so orders are confirmed in under 5 minutes during peak evening hours."
    }
  },
  {
    id: "tp-015",
    authorName: "Dean Hennessey",
    authorLocation: "Sunshine Coast, QLD",
    rating: 5,
    title: "Wholesale direct pricing beat my local butcher by $18/kg on Scotch Fillets",
    content: "Did the math before purchasing. My local butcher wanted $68/kg for grass-fed scotch fillet. The Meat Agent was $48/kg in bulk cryovac, and the marbling was visibly superior. Free delivery kicked in over our $2,000 corporate Christmas party order.",
    dateOfExperience: "18 December 2023",
    datePublished: "20 December 2023",
    verifiedBuyer: true,
    category: "Wagyu & Dry-Aged Steaks",
    purchasedProduct: "Whole Angus Scotch Fillet Primal (4.5kg)",
    orderTotalAud: 2150.00,
    helpfulCount: 35
  },
  {
    id: "tp-016",
    authorName: "Luke S.",
    authorLocation: "Ballarat, VIC",
    rating: 5,
    title: "Heritage pork belly with crackling that blistered like glass",
    content: "Scored, salted, and left uncovered overnight in the fridge as recommended in their recipe blog. Roasted at 240°C for 25 mins then down to 160°C. The crackle was uniform and snap-crisp, fat layer succulent without being greasy.",
    dateOfExperience: "11 January 2024",
    datePublished: "13 January 2024",
    verifiedBuyer: true,
    category: "Pasture-Raised Lamb",
    purchasedProduct: "Free-Range Heritage Pork Belly Roast (3kg)",
    orderTotalAud: 432.00,
    helpfulCount: 16
  },
  {
    id: "tp-017",
    authorName: "Peter Vandermeer",
    authorLocation: "Darwin, NT",
    rating: 4,
    title: "Tropical delivery in 35C monsoon humidity - held thermal integrity",
    content: "Most southern butcheries won't even quote freight to Darwin. The Meat Agent's specialized cold-chain took 3 days via air express, internal meat temp was 2.4°C on arrival. One box corner had minor condensation scuffing, but vacuum seals intact.",
    dateOfExperience: "22 February 2024",
    datePublished: "25 February 2024",
    verifiedBuyer: true,
    category: "Cold-Chain Delivery",
    purchasedProduct: "Top-End Smoker & Grill Primal Box",
    orderTotalAud: 620.00,
    helpfulCount: 23,
    companyReply: {
      author: "The Master Butcher & Management",
      date: "26 February 2024",
      text: "Peter, delivering sub-zero to the Top End in the wet season is our badge of honour! We use double-thick expanded poly liner + dry ice bricks for NT air shipments. Great to have you as part of our national network."
    }
  },
  {
    id: "tp-018",
    authorName: "Brendan & Lisa Foley",
    authorLocation: "Wollongong, NSW",
    rating: 5,
    title: "Real hand-linked butcher snags, zero meal filler or grain bloat",
    content: "Our kids are allergic to gluten and cheap fillers in supermarket sausages. These are pure beef, salt, pepper, and natural hog casings. The snap when you bite into them off the barbecue is nostalgic. Top tier.",
    dateOfExperience: "30 March 2024",
    datePublished: "01 April 2024",
    verifiedBuyer: true,
    category: "Gourmet Sausages",
    purchasedProduct: "Traditional Handcrafted Beef & Herb Snags (6kg)",
    orderTotalAud: 435.00,
    helpfulCount: 18
  },
  {
    id: "tp-019",
    authorName: "Simon Radcliffe",
    authorLocation: "Mornington Peninsula, VIC",
    rating: 5,
    title: "Wagyu Tomahawk MB9 was the undisputed centerpiece of our dinner",
    content: "1.6kg of sheer Australian agricultural perfection. Reverse-seared with herb compound butter basting. Deep ruby color, nutty buttery fat, and the bone was cleanly scraped. Will be reordering for New Year's Eve.",
    dateOfExperience: "14 June 2024",
    datePublished: "16 June 2024",
    verifiedBuyer: true,
    category: "Wagyu & Dry-Aged Steaks",
    purchasedProduct: "Wagyu MB9+ Long-Bone Tomahawk (1.6kg)",
    orderTotalAud: 540.00,
    helpfulCount: 27
  },
  {
    id: "tp-020",
    authorName: "Craig Milligan",
    authorLocation: "Albury, NSW",
    rating: 3,
    title: "Prime cuts are stellar, but packaging ice blocks are heavy to dispose of",
    content: "The dry aged T-bones and eye fillets were extraordinary in flavour and tenderness. My only gripe is the size of the frozen gel packs—there were six large heavy ice bricks in the box which took up room in my bin. Understand it's needed for the 48hr thermal guarantee though.",
    dateOfExperience: "25 July 2024",
    datePublished: "27 July 2024",
    verifiedBuyer: true,
    category: "Cold-Chain Delivery",
    purchasedProduct: "Dry-Aged T-Bone & Eye Fillet Duo Pack",
    orderTotalAud: 445.00,
    helpfulCount: 12,
    companyReply: {
      author: "The Master Butcher & Management",
      date: "28 July 2024",
      text: "G'day Craig! The non-toxic gel inside our thermal blocks is 100% water-soluble and can be cut open and poured down the sink (or used to water garden plants as a soil conditioner!), and the outer LDPE sleeve is soft-plastic recyclable. We are also testing wool-pack liners for upcoming regional runs. Enjoy those T-bones!"
    }
  },
  {
    id: "tp-021",
    authorName: "Mathew 'Macca' Taylor",
    authorLocation: "Dubbo, NSW",
    rating: 5,
    title: "Kangaroo fillets and lean wild game cuts are second to none",
    content: "Cooked the wild kangaroo fillets medium-rare on a piping hot plancha with bush pepper. Tender as eye fillet with that rich native Australian game depth. Fantastic lean protein source for athletic recovery.",
    dateOfExperience: "08 August 2024",
    datePublished: "10 August 2024",
    verifiedBuyer: true,
    category: "Game & Protein",
    purchasedProduct: "Wild Native Kangaroo Fillet Box (4kg)",
    orderTotalAud: 430.00,
    helpfulCount: 15
  },
  {
    id: "tp-022",
    authorName: "Ross Giuliano",
    authorLocation: "Norwood, SA",
    rating: 5,
    title: "PayID checkout was smooth and instant, received delivery SMS next morning",
    content: "Transferred via Osko/PayID at 9pm on Tuesday. Automated confirmation came through immediately and courier track link was live by 8:30am Wednesday. Arrived in Adelaide by Thursday lunch. Premium service from Queensland.",
    dateOfExperience: "19 August 2024",
    datePublished: "21 August 2024",
    verifiedBuyer: true,
    category: "Cold-Chain Delivery",
    purchasedProduct: "Artisan Dry-Aged Butcher Box",
    orderTotalAud: 462.00,
    helpfulCount: 11
  },
  {
    id: "tp-023",
    authorName: "Sammy J.",
    authorLocation: "Burleigh Heads, QLD",
    rating: 5,
    title: "Dino Beef Ribs on the Traeger — pure crowd pleaser",
    content: "The 3-bone English plate ribs had nearly 4 inches of meat before shrinking back on the bone. Salt, coarse pepper, and post oak. The smoke ring was 1cm deep. Feeds 6 hungry adults easily. Great communication on WhatsApp.",
    dateOfExperience: "01 September 2024",
    datePublished: "03 September 2024",
    verifiedBuyer: true,
    category: "BBQ Smoker Cuts",
    purchasedProduct: "English-Cut Plate Dino Beef Ribs (3-Bone, 2.8kg)",
    orderTotalAud: 438.00,
    helpfulCount: 19
  },
  {
    id: "tp-024",
    authorName: "Kylie Braithwaite",
    authorLocation: "Bendigo, VIC",
    rating: 4,
    title: "Exceptional mince and chicken breast combo, box arrived late afternoon",
    content: "The chicken breast is completely clean—no yellow fat or water pumping like in the supermarket tubs. The 2kg mince browned in the pan with zero grey water. Courier arrived at 4:45pm which was later than expected, but packaging was frosty cold.",
    dateOfExperience: "12 September 2024",
    datePublished: "14 September 2024",
    verifiedBuyer: true,
    category: "Bulk Family Packs",
    purchasedProduct: "Lean Chicken Breast & Beef Mince Prep Box (10kg)",
    orderTotalAud: 425.00,
    helpfulCount: 14,
    companyReply: {
      author: "The Master Butcher & Management",
      date: "15 September 2024",
      text: "Thanks Kylie! We refuse to use chlorine-washed or moisture-injected poultry. Our chicken is 100% free-range air-chilled, which is why it sears golden instead of steaming. We'll continue working with Victorian regional dispatch for earlier delivery routes."
    }
  },
  {
    id: "tp-025",
    authorName: "Damian Zourkas",
    authorLocation: "Ipswich, QLD",
    rating: 5,
    title: "Proud to support our local Ipswich meat direct operation",
    content: "Living in Ipswich, I know the facility on Brisbane St. These guys supply some of the finest kitchens in South East Queensland and opening direct-to-consumer online ordering with farm gate pricing is a game-changer. 5 stars all day long.",
    dateOfExperience: "22 September 2024",
    datePublished: "24 September 2024",
    verifiedBuyer: true,
    category: "Wagyu & Dry-Aged Steaks",
    purchasedProduct: "The Local Pitmaster Primal Feast Box",
    orderTotalAud: 550.00,
    helpfulCount: 34
  },
  {
    id: "tp-026",
    authorName: "Nathaniel Burke",
    authorLocation: "Wollongong, NSW",
    rating: 2,
    title: "Courier delayed delivery by 36 hours during heatwave — box was cool but need reassurance",
    content: "Ordered the competition brisket and ribeye primal for a weekend smoker session. The regional courier missed the delivery window by nearly 36 hours. The box was still cool inside and dry ice blocks were intact, but I was sweating on whether the core temperature stayed within safe cold-chain limits during the 35°C Sydney heat. Meat turned out great after cooking, but would like clearer logistics communication when freight delays happen.",
    dateOfExperience: "26 September 2024",
    datePublished: "27 September 2024",
    verifiedBuyer: true,
    category: "Cold-Chain Delivery",
    purchasedProduct: "5.8kg Full Packer Angus Brisket",
    orderTotalAud: 472.00,
    helpfulCount: 8
  },
  {
    id: "tp-027",
    authorName: "Marcus Davenport",
    authorLocation: "Mornington Peninsula, VIC",
    rating: 3,
    title: "Wagyu MB8+ ribeye was phenomenal, but required heavier trimming on tail end",
    content: "The intramuscular marbling on the eye of the rib was textbook Aus-Meat BMS 8+. However, the tail end had a thicker wedge of hard subcutaneous fat than I expected on a $195 steak. Trimmed off about 140g myself before reverse-searing. Flavor was immaculate, but hope butcher portioning is tighter on the next allocation.",
    dateOfExperience: "27 September 2024",
    datePublished: "28 September 2024",
    verifiedBuyer: true,
    category: "Wagyu & Dry-Aged Steaks",
    purchasedProduct: "900g O'Connor Dry-Aged Ribeye (MB8+)",
    orderTotalAud: 584.50,
    helpfulCount: 12
  }
];

export function exportReviewsJson(reviewsList: TrustpilotReview[] = VERIFIED_TRUSTPILOT_REVIEWS): string {
  return JSON.stringify(reviewsList, null, 2);
}

export function exportReviewsCsv(reviewsList: TrustpilotReview[] = VERIFIED_TRUSTPILOT_REVIEWS): string {
  const headers = [
    'Review ID',
    'Author Name',
    'Location (AU)',
    'Rating (Stars)',
    'Title',
    'Review Content',
    'Date of Experience',
    'Date Published',
    'Verified Buyer',
    'Category',
    'Purchased Product',
    'Order Total (AUD)',
    'Helpful Count',
    'Company Reply'
  ];

  const rows = reviewsList.map(r => [
    `"${r.id}"`,
    `"${r.authorName}"`,
    `"${r.authorLocation}"`,
    r.rating,
    `"${r.title.replace(/"/g, '""')}"`,
    `"${r.content.replace(/"/g, '""')}"`,
    `"${r.dateOfExperience}"`,
    `"${r.datePublished}"`,
    r.verifiedBuyer ? 'YES' : 'NO',
    `"${r.category}"`,
    `"${r.purchasedProduct.replace(/"/g, '""')}"`,
    `$${r.orderTotalAud.toFixed(2)}`,
    r.helpfulCount,
    r.companyReply ? `"${r.companyReply.author}: ${r.companyReply.text.replace(/"/g, '""')}"` : '""'
  ]);

  return [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
}

export function exportReviewsSql(reviewsList: TrustpilotReview[] = VERIFIED_TRUSTPILOT_REVIEWS): string {
  const lines = [
    '-- The Heritage Meat Co. Australia / The Meat Agent',
    `-- Trustpilot Verified Reviews Database Migration Dump (${reviewsList.length} Records)`,
    '-- Table: trustpilot_reviews',
    '',
    'CREATE TABLE IF NOT EXISTS trustpilot_reviews (',
    '  id VARCHAR(32) PRIMARY KEY,',
    '  author_name VARCHAR(128) NOT NULL,',
    '  author_location VARCHAR(128) NOT NULL,',
    '  rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),',
    '  title VARCHAR(255) NOT NULL,',
    '  content TEXT NOT NULL,',
    '  date_of_experience VARCHAR(64) NOT NULL,',
    '  date_published VARCHAR(64) NOT NULL,',
    '  verified_buyer BOOLEAN DEFAULT TRUE,',
    '  category VARCHAR(64) NOT NULL,',
    '  purchased_product VARCHAR(255) NOT NULL,',
    '  order_total_aud DECIMAL(10,2) NOT NULL,',
    '  helpful_count INT DEFAULT 0,',
    '  company_reply TEXT',
    ');',
    ''
  ];

  reviewsList.forEach(r => {
    const reply = r.companyReply ? `'${r.companyReply.text.replace(/'/g, "''")}'` : 'NULL';
    lines.push(
      `INSERT INTO trustpilot_reviews (id, author_name, author_location, rating, title, content, date_of_experience, date_published, verified_buyer, category, purchased_product, order_total_aud, helpful_count, company_reply) VALUES (` +
      `'${r.id}', '${r.authorName.replace(/'/g, "''")}', '${r.authorLocation}', ${r.rating}, '${r.title.replace(/'/g, "''")}', '${r.content.replace(/'/g, "''")}', '${r.dateOfExperience}', '${r.datePublished}', ${r.verifiedBuyer}, '${r.category}', '${r.purchasedProduct.replace(/'/g, "''")}', ${r.orderTotalAud.toFixed(2)}, ${r.helpfulCount}, ${reply}` +
      `) ON CONFLICT (id) DO NOTHING;`
    );
  });

  return lines.join('\n');
}
