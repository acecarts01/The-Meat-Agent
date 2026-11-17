// Website-level keyword set (owner rule, 17 Nov 2026): the primary (main) keyword and its 5 supporting
// keywords are Transactional; the 20 extra supporting keywords are Transactional first, Commercial only
// where no Transactional keyword fit. Volume, KD and intent are live Semrush data (Australia, desktop,
// 17 Nov 2026). Informational keywords never appear here: they belong to the blogs.

export interface SiteKeyword {
  keyword: string;
  intent: 'Transactional' | 'Commercial';
  volume: number;
  kd: number;
  /** Page type that should carry it (one keyword, one page). */
  target: string;
}

export const SITE_PRIMARY_KEYWORD: SiteKeyword = {
  keyword: 'best butcher near me',
  intent: 'Transactional',
  volume: 1300,
  kd: 25,
  target: 'Home page',
};

export const SITE_SUPPORTING_KEYWORDS: SiteKeyword[] = [
  { keyword: 'wagyu near me', intent: 'Transactional', volume: 880, kd: 12, target: 'Wagyu category' },
  { keyword: 'bulk meat near me', intent: 'Transactional', volume: 480, kd: 16, target: 'Wholesale page' },
  { keyword: 'wagyu beef near me', intent: 'Transactional', volume: 480, kd: 13, target: 'Wagyu category' },
  { keyword: 'meat in bulk near me', intent: 'Transactional', volume: 480, kd: 28, target: 'Meat boxes category' },
  { keyword: 'buy wagyu beef online', intent: 'Transactional', volume: 260, kd: 14, target: 'Wagyu category' },
];

export const SITE_EXTRA_SUPPORTING_KEYWORDS: SiteKeyword[] = [
  { keyword: 'meat fresh', intent: 'Transactional', volume: 390, kd: 28, target: 'Shop page' },
  { keyword: 'wagyu butcher near me', intent: 'Transactional', volume: 260, kd: 14, target: 'Wagyu category' },
  { keyword: 'wagyu steak near me', intent: 'Transactional', volume: 260, kd: 10, target: 'Wagyu category' },
  { keyword: 'butcher chickens near me', intent: 'Transactional', volume: 260, kd: 14, target: 'Chicken category' },
  { keyword: 'chicken price', intent: 'Transactional', volume: 260, kd: 17, target: 'Chicken category' },
  { keyword: 'where do you buy chicken', intent: 'Transactional', volume: 260, kd: 9, target: 'Chicken category' },
  { keyword: 'chicken wholesale near me', intent: 'Transactional', volume: 210, kd: 23, target: 'Wholesale page' },
  { keyword: 'buy chicken', intent: 'Transactional', volume: 140, kd: 13, target: 'Chicken category' },
  { keyword: 'buy porterhouse steak online', intent: 'Transactional', volume: 140, kd: 6, target: 'Beef category' },
  { keyword: 'buy t bone steaks online', intent: 'Transactional', volume: 110, kd: 6, target: 'Beef category' },
  { keyword: 'buy ribeye steak online', intent: 'Transactional', volume: 90, kd: 15, target: 'Beef category' },
  { keyword: 'buy lamb steak online', intent: 'Transactional', volume: 70, kd: 6, target: 'Lamb category' },
  { keyword: 'buy scotch steak online', intent: 'Transactional', volume: 70, kd: 7, target: 'Beef category' },
  { keyword: 'buy chuck steak online', intent: 'Transactional', volume: 70, kd: 6, target: 'Beef category' },
  { keyword: 'buy blade steak online', intent: 'Transactional', volume: 70, kd: 2, target: 'Beef category' },
  { keyword: 'buy kangaroo steak online', intent: 'Transactional', volume: 70, kd: 6, target: 'Kangaroo and game category' },
  { keyword: 'buy pork steak online', intent: 'Transactional', volume: 70, kd: 6, target: 'Pork category' },
  { keyword: 'wagyu steak', intent: 'Commercial', volume: 2400, kd: 22, target: 'Wagyu category' },
  { keyword: 'meat subscription', intent: 'Commercial', volume: 1600, kd: 19, target: 'Meat boxes category' },
  { keyword: 'meat packs', intent: 'Commercial', volume: 720, kd: 19, target: 'Meat boxes category' },
];

export const SITE_KEYWORDS_ALL: SiteKeyword[] = [
  SITE_PRIMARY_KEYWORD,
  ...SITE_SUPPORTING_KEYWORDS,
  ...SITE_EXTRA_SUPPORTING_KEYWORDS,
];
