export interface KeywordItem {
  id: string;
  keyword: string;
  cluster: 'High-Intent Buyer' | 'Inelastic Family Staples' | 'BBQ & Smoker Pitmaster' | 'Steakhouse & Wagyu' | 'Gym Protein Prep' | 'Geo & Metro Delivery';
  monthlyVolumeAU: number;
  keywordDifficulty: number; // 0 - 100 KD%
  intent: 'Transactional' | 'Commercial' | 'Informational';
  cpcAUD: number;
  competitiveDensity: number; // 0.0 - 1.0
  serpFeatures: string[];
  recommendedTargetUrl: string;
  inelasticScore: 'High' | 'Very High' | 'Maximum';
}

export const SEMRUSH_KEYWORDS: KeywordItem[] = [
  // Cluster 1: High-Intent Buyer / Commercial Online Butcher
  {
    id: 'kw-01',
    keyword: 'online butcher australia',
    cluster: 'High-Intent Buyer',
    monthlyVolumeAU: 12100,
    keywordDifficulty: 48,
    intent: 'Transactional',
    cpcAUD: 2.85,
    competitiveDensity: 0.88,
    serpFeatures: ['Local Pack', 'Reviews', 'Sitelinks', 'Shopping Ads'],
    recommendedTargetUrl: '/',
    inelasticScore: 'Maximum'
  },
  {
    id: 'kw-02',
    keyword: 'meat delivery sydney',
    cluster: 'Geo & Metro Delivery',
    monthlyVolumeAU: 9900,
    keywordDifficulty: 44,
    intent: 'Transactional',
    cpcAUD: 3.10,
    competitiveDensity: 0.92,
    serpFeatures: ['Local Pack', 'Shopping Ads', 'Top Stories'],
    recommendedTargetUrl: '/shop/',
    inelasticScore: 'Maximum'
  },
  {
    id: 'kw-03',
    keyword: 'meat delivery melbourne',
    cluster: 'Geo & Metro Delivery',
    monthlyVolumeAU: 8100,
    keywordDifficulty: 42,
    intent: 'Transactional',
    cpcAUD: 2.95,
    competitiveDensity: 0.89,
    serpFeatures: ['Local Pack', 'Shopping Ads'],
    recommendedTargetUrl: '/shop/',
    inelasticScore: 'Maximum'
  },
  {
    id: 'kw-04',
    keyword: 'online butcher brisbane',
    cluster: 'Geo & Metro Delivery',
    monthlyVolumeAU: 5400,
    keywordDifficulty: 38,
    intent: 'Transactional',
    cpcAUD: 2.60,
    competitiveDensity: 0.84,
    serpFeatures: ['Local Pack', 'Reviews'],
    recommendedTargetUrl: '/shop/',
    inelasticScore: 'Very High'
  },
  {
    id: 'kw-05',
    keyword: 'meat box delivery australia',
    cluster: 'High-Intent Buyer',
    monthlyVolumeAU: 6600,
    keywordDifficulty: 39,
    intent: 'Transactional',
    cpcAUD: 3.40,
    competitiveDensity: 0.87,
    serpFeatures: ['Reviews', 'Shopping Ads', 'People Also Ask'],
    recommendedTargetUrl: '/shop/everyday-family-staples/',
    inelasticScore: 'Maximum'
  },
  {
    id: 'kw-06',
    keyword: 'buy meat online',
    cluster: 'High-Intent Buyer',
    monthlyVolumeAU: 14800,
    keywordDifficulty: 52,
    intent: 'Transactional',
    cpcAUD: 2.75,
    competitiveDensity: 0.91,
    serpFeatures: ['Shopping Ads', 'Local Pack', 'Sitelinks'],
    recommendedTargetUrl: '/shop/',
    inelasticScore: 'Maximum'
  },
  {
    id: 'kw-07',
    keyword: 'grass fed meat delivery',
    cluster: 'High-Intent Buyer',
    monthlyVolumeAU: 4400,
    keywordDifficulty: 35,
    intent: 'Commercial',
    cpcAUD: 3.15,
    competitiveDensity: 0.82,
    serpFeatures: ['People Also Ask', 'Shopping Ads'],
    recommendedTargetUrl: '/about/',
    inelasticScore: 'Very High'
  },
  {
    id: 'kw-08',
    keyword: 'bulk meat packs online',
    cluster: 'Inelastic Family Staples',
    monthlyVolumeAU: 4900,
    keywordDifficulty: 36,
    intent: 'Transactional',
    cpcAUD: 2.45,
    competitiveDensity: 0.79,
    serpFeatures: ['Shopping Ads', 'Product Snippets'],
    recommendedTargetUrl: '/shop/everyday-family-staples/',
    inelasticScore: 'Maximum'
  },

  // Cluster 2: Inelastic Family Staples & Weekly Groceries
  {
    id: 'kw-09',
    keyword: 'bulk beef mince online',
    cluster: 'Inelastic Family Staples',
    monthlyVolumeAU: 2900,
    keywordDifficulty: 28,
    intent: 'Transactional',
    cpcAUD: 1.85,
    competitiveDensity: 0.74,
    serpFeatures: ['Shopping Ads', 'Product Snippets'],
    recommendedTargetUrl: '/shop/everyday-family-staples/beef-mince-premium-2kg/',
    inelasticScore: 'Maximum'
  },
  {
    id: 'kw-10',
    keyword: 'grass fed beef mince 1kg',
    cluster: 'Inelastic Family Staples',
    monthlyVolumeAU: 2400,
    keywordDifficulty: 24,
    intent: 'Transactional',
    cpcAUD: 1.95,
    competitiveDensity: 0.71,
    serpFeatures: ['Product Snippets', 'People Also Ask'],
    recommendedTargetUrl: '/shop/everyday-family-staples/beef-mince-premium-1kg/',
    inelasticScore: 'Maximum'
  },
  {
    id: 'kw-11',
    keyword: 'artisan beef sausages buy online',
    cluster: 'Inelastic Family Staples',
    monthlyVolumeAU: 1800,
    keywordDifficulty: 22,
    intent: 'Transactional',
    cpcAUD: 1.65,
    competitiveDensity: 0.65,
    serpFeatures: ['Shopping Ads'],
    recommendedTargetUrl: '/shop/everyday-family-staples/beef-sausages-mega-special-2kg/',
    inelasticScore: 'Maximum'
  },
  {
    id: 'kw-12',
    keyword: 'family meat packs delivery',
    cluster: 'Inelastic Family Staples',
    monthlyVolumeAU: 3600,
    keywordDifficulty: 33,
    intent: 'Commercial',
    cpcAUD: 2.20,
    competitiveDensity: 0.78,
    serpFeatures: ['People Also Ask', 'Shopping Ads'],
    recommendedTargetUrl: '/shop/everyday-family-staples/',
    inelasticScore: 'Maximum'
  },
  {
    id: 'kw-13',
    keyword: 'angus burger patties bulk',
    cluster: 'Inelastic Family Staples',
    monthlyVolumeAU: 1600,
    keywordDifficulty: 21,
    intent: 'Transactional',
    cpcAUD: 1.90,
    competitiveDensity: 0.69,
    serpFeatures: ['Product Snippets'],
    recommendedTargetUrl: '/shop/everyday-family-staples/beef-patties-angus-6pk/',
    inelasticScore: 'High'
  },

  // Cluster 3: Low & Slow American BBQ Pitmaster (High Margin & Inelastic)
  {
    id: 'kw-14',
    keyword: 'buy beef brisket online australia',
    cluster: 'BBQ & Smoker Pitmaster',
    monthlyVolumeAU: 4400,
    keywordDifficulty: 32,
    intent: 'Transactional',
    cpcAUD: 2.50,
    competitiveDensity: 0.81,
    serpFeatures: ['Shopping Ads', 'People Also Ask', 'Video'],
    recommendedTargetUrl: '/shop/low-and-slow-bbq/beef-brisket-point-end-1-5kg/',
    inelasticScore: 'Very High'
  },
  {
    id: 'kw-15',
    keyword: 'competition brisket australia',
    cluster: 'BBQ & Smoker Pitmaster',
    monthlyVolumeAU: 1900,
    keywordDifficulty: 26,
    intent: 'Commercial',
    cpcAUD: 2.70,
    competitiveDensity: 0.77,
    serpFeatures: ['People Also Ask', 'Image Pack'],
    recommendedTargetUrl: '/shop/low-and-slow-bbq/',
    inelasticScore: 'Very High'
  },
  {
    id: 'kw-16',
    keyword: 'asado short ribs butcher',
    cluster: 'BBQ & Smoker Pitmaster',
    monthlyVolumeAU: 2200,
    keywordDifficulty: 27,
    intent: 'Transactional',
    cpcAUD: 2.15,
    competitiveDensity: 0.73,
    serpFeatures: ['Shopping Ads', 'Images'],
    recommendedTargetUrl: '/shop/low-and-slow-bbq/beef-asado-style-short-ribs-750g/',
    inelasticScore: 'Very High'
  },
  {
    id: 'kw-17',
    keyword: 'beef cheeks grass fed buy online',
    cluster: 'BBQ & Smoker Pitmaster',
    monthlyVolumeAU: 3100,
    keywordDifficulty: 25,
    intent: 'Transactional',
    cpcAUD: 1.95,
    competitiveDensity: 0.72,
    serpFeatures: ['Product Snippets', 'Recipe Rich Snippets'],
    recommendedTargetUrl: '/shop/low-and-slow-bbq/beef-cheeks-100-trimmed-900g/',
    inelasticScore: 'Very High'
  },
  {
    id: 'kw-18',
    keyword: 'dino ribs beef ribs online',
    cluster: 'BBQ & Smoker Pitmaster',
    monthlyVolumeAU: 1700,
    keywordDifficulty: 23,
    intent: 'Commercial',
    cpcAUD: 2.30,
    competitiveDensity: 0.68,
    serpFeatures: ['Video', 'People Also Ask'],
    recommendedTargetUrl: '/shop/low-and-slow-bbq/',
    inelasticScore: 'High'
  },

  // Cluster 4: Steaks & Wagyu (High AOV)
  {
    id: 'kw-19',
    keyword: 'buy dry aged steak online australia',
    cluster: 'Steakhouse & Wagyu',
    monthlyVolumeAU: 2800,
    keywordDifficulty: 34,
    intent: 'Transactional',
    cpcAUD: 3.80,
    competitiveDensity: 0.85,
    serpFeatures: ['Shopping Ads', 'Reviews'],
    recommendedTargetUrl: '/shop/premium-beef-steaks/beef-rib-eye-oconnor-dry-aged-900g/',
    inelasticScore: 'High'
  },
  {
    id: 'kw-20',
    keyword: 'bistecca alla fiorentina buy australia',
    cluster: 'Steakhouse & Wagyu',
    monthlyVolumeAU: 1600,
    keywordDifficulty: 20,
    intent: 'Transactional',
    cpcAUD: 3.20,
    competitiveDensity: 0.67,
    serpFeatures: ['Product Snippets', 'Knowledge Panel'],
    recommendedTargetUrl: '/shop/premium-beef-steaks/bistecca-alla-fiorentina-900g/',
    inelasticScore: 'High'
  },
  {
    id: 'kw-21',
    keyword: 'scotch fillet steak delivery',
    cluster: 'Steakhouse & Wagyu',
    monthlyVolumeAU: 3600,
    keywordDifficulty: 37,
    intent: 'Transactional',
    cpcAUD: 2.90,
    competitiveDensity: 0.83,
    serpFeatures: ['Shopping Ads', 'Product Snippets'],
    recommendedTargetUrl: '/shop/premium-beef-steaks/beef-scotch-fillet-steak-600g/',
    inelasticScore: 'High'
  },
  {
    id: 'kw-22',
    keyword: 'eye fillet steaks online',
    cluster: 'Steakhouse & Wagyu',
    monthlyVolumeAU: 3900,
    keywordDifficulty: 36,
    intent: 'Transactional',
    cpcAUD: 3.50,
    competitiveDensity: 0.86,
    serpFeatures: ['Shopping Ads', 'Reviews'],
    recommendedTargetUrl: '/shop/premium-beef-steaks/beef-eye-fillet-steaks-440g/',
    inelasticScore: 'High'
  },
  {
    id: 'kw-23',
    keyword: 'wagyu beef delivery sydney melbourne',
    cluster: 'Steakhouse & Wagyu',
    monthlyVolumeAU: 2400,
    keywordDifficulty: 41,
    intent: 'Commercial',
    cpcAUD: 4.10,
    competitiveDensity: 0.89,
    serpFeatures: ['Shopping Ads', 'Local Pack'],
    recommendedTargetUrl: '/shop/premium-beef-steaks/',
    inelasticScore: 'High'
  },

  // Cluster 5: Gym Meal Prep & High-Protein Packs
  {
    id: 'kw-24',
    keyword: 'meat delivery meal prep gym',
    cluster: 'Gym Protein Prep',
    monthlyVolumeAU: 3200,
    keywordDifficulty: 29,
    intent: 'Commercial',
    cpcAUD: 2.65,
    competitiveDensity: 0.76,
    serpFeatures: ['People Also Ask', 'Shopping Ads'],
    recommendedTargetUrl: '/shop/game-protein-boxes/protein-rumps-10-pack-2-5kg/',
    inelasticScore: 'Maximum'
  },
  {
    id: 'kw-25',
    keyword: 'bulk chicken breast delivery australia',
    cluster: 'Gym Protein Prep',
    monthlyVolumeAU: 4800,
    keywordDifficulty: 31,
    intent: 'Transactional',
    cpcAUD: 2.30,
    competitiveDensity: 0.80,
    serpFeatures: ['Shopping Ads', 'Product Snippets'],
    recommendedTargetUrl: '/shop/game-protein-boxes/chicken-breast-angus-steak-combo-2kg/',
    inelasticScore: 'Maximum'
  },
  {
    id: 'kw-26',
    keyword: 'lean rump steak 10 pack',
    cluster: 'Gym Protein Prep',
    monthlyVolumeAU: 1400,
    keywordDifficulty: 18,
    intent: 'Transactional',
    cpcAUD: 2.10,
    competitiveDensity: 0.64,
    serpFeatures: ['Product Snippets'],
    recommendedTargetUrl: '/shop/game-protein-boxes/protein-rumps-10-pack-2-5kg/',
    inelasticScore: 'Maximum'
  },

  // Cluster 6: Regional & Metro Cold-Chain Delivery
  {
    id: 'kw-27',
    keyword: 'meat delivery perth',
    cluster: 'Geo & Metro Delivery',
    monthlyVolumeAU: 3900,
    keywordDifficulty: 35,
    intent: 'Transactional',
    cpcAUD: 2.70,
    competitiveDensity: 0.81,
    serpFeatures: ['Local Pack', 'Shopping Ads'],
    recommendedTargetUrl: '/shop/',
    inelasticScore: 'Very High'
  },
  {
    id: 'kw-28',
    keyword: 'meat delivery adelaide',
    cluster: 'Geo & Metro Delivery',
    monthlyVolumeAU: 2900,
    keywordDifficulty: 32,
    intent: 'Transactional',
    cpcAUD: 2.50,
    competitiveDensity: 0.78,
    serpFeatures: ['Local Pack', 'Shopping Ads'],
    recommendedTargetUrl: '/shop/',
    inelasticScore: 'Very High'
  },
  {
    id: 'kw-29',
    keyword: 'canberra butcher delivery',
    cluster: 'Geo & Metro Delivery',
    monthlyVolumeAU: 1800,
    keywordDifficulty: 25,
    intent: 'Transactional',
    cpcAUD: 2.40,
    competitiveDensity: 0.72,
    serpFeatures: ['Local Pack'],
    recommendedTargetUrl: '/shop/',
    inelasticScore: 'High'
  },
  {
    id: 'kw-30',
    keyword: 'refrigerated meat courier home delivery',
    cluster: 'High-Intent Buyer',
    monthlyVolumeAU: 2100,
    keywordDifficulty: 26,
    intent: 'Informational',
    cpcAUD: 1.70,
    competitiveDensity: 0.60,
    serpFeatures: ['People Also Ask', 'Knowledge Panel'],
    recommendedTargetUrl: '/faq/',
    inelasticScore: 'High'
  }
];

export function generateSemrushCsv(): string {
  const headers = [
    'Keyword',
    'Cluster',
    'Search Volume (AU)',
    'Keyword Difficulty (KD%)',
    'Intent',
    'CPC (AUD)',
    'Competitive Density',
    'SERP Features',
    'Target Route',
    'Demand Inelasticity'
  ];

  const rows = SEMRUSH_KEYWORDS.map(kw => [
    `"${kw.keyword}"`,
    `"${kw.cluster}"`,
    kw.monthlyVolumeAU,
    `${kw.keywordDifficulty}%`,
    kw.intent,
    `$${kw.cpcAUD.toFixed(2)}`,
    kw.competitiveDensity.toFixed(2),
    `"${kw.serpFeatures.join(', ')}"`,
    `"${kw.recommendedTargetUrl}"`,
    kw.inelasticScore
  ]);

  return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
}
