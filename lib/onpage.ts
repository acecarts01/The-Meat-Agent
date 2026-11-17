import { generate160Catalog, Product160Item, ShopCategory160 } from '@/lib/products-160-data';
import { CATEGORY_KEYWORDS } from '@/lib/seo-keywords';

// Phase 3 on-page templates. The primary keyword is placed in the title (near the start, with a buy-intent word), the H1,
// the meta description, the first paragraph and the main image alt text. Occurrences are kept to about two per page so
// keyword density stays near the 0.5-1% target (no stuffing).

export function titleCase(s: string): string {
  return s.replace(/\b([a-z])([a-z']*)/g, (_, a: string, b: string) => a.toUpperCase() + b);
}
export function capFirst(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

let uniqueCache: Set<string> | null = null;
function uniquePrimaries(): Set<string> {
  if (uniqueCache) return uniqueCache;
  const counts = new Map<string, number>();
  for (const p of generate160Catalog()) counts.set(p.targetKeyword, (counts.get(p.targetKeyword) ?? 0) + 1);
  for (const k of Object.values(CATEGORY_KEYWORDS)) counts.set(k.primaryKeyword, (counts.get(k.primaryKeyword) ?? 0) + 5);
  uniqueCache = new Set([...counts].filter(([, n]) => n === 1).map(([k]) => k));
  return uniqueCache;
}

// A product page only gets its own primary keyword when that keyword is unique on the site. Products that still inherit
// a category keyword keep their existing copy, so the same keyword is never pushed onto many URLs (no cannibalisation).
export function productHasOwnKeyword(p: Product160Item): boolean {
  return Boolean(p.targetKeyword) && uniquePrimaries().has(p.targetKeyword);
}

function trim(s: string, max: number): string {
  if (s.length <= max) return s;
  return s.slice(0, max - 1).replace(/\s+\S*$/, '').replace(/[ ,:;\-—|]+$/, '');
}

function shortName(name: string): string {
  return name.replace(/\s*\([^)]*\)\s*$/, '').trim();
}

export interface ProductSeo {
  title: string;
  description: string;
  h1Tagline: string;
  intro: string;
  rawAlt: string;
  extraFaq: { question: string; answer: string } | null;
}

export function productSeo(p: Product160Item): ProductSeo | null {
  if (!productHasOwnKeyword(p)) return null;
  const k = p.targetKeyword.toLowerCase();
  const power = /\b(buy|order|shop)\b/.test(k) ? 'Order' : 'Buy';
  const name = shortName(p.name);
  const price = p.price.toFixed(2);

  let title = `${titleCase(k)} | ${power} ${name} Online`;
  if (title.length + 18 <= 70) title += ' | The Meat Agent';
  title = trim(title, 70);

  const lead = `${capFirst(k)}: ${power.toLowerCase()} the ${name} (${p.weight}) from $${price} before GST.`;
  const description = trim(`${lead} Cold-chain delivery across Australia, $423 minimum order.`, 160);

  const h1Tagline = `${capFirst(k)}: delivered cold-chain across Australia`;
  const intro = `If you are searching for ${k}, the ${name} comes as ${p.weight} at $${price} before GST, shipped by cold-chain courier with a target arrival below 2.5°C. The store minimum is $423 AUD across the whole cart.`;
  const rawAlt = `${name}, ${p.weight} raw cut: ${k}`;

  let extraFaq: ProductSeo['extraFaq'] = null;
  const secs = (p.supportingKeywords || []).filter(Boolean).slice(0, 3);
  if (secs.length) {
    extraFaq = {
      question: `How much is the ${name} and how is it delivered?`,
      answer: `The ${name} is ${p.weight} at $${price} before 10% GST, with GST added at checkout. It ships by cold-chain courier in insulated liners, and the store minimum is $423 AUD. People who want ${secs.join(', ')} can order this cut online, then add other cuts to reach the minimum.`,
    };
  }
  return { title, description, h1Tagline, intro, rawAlt, extraFaq };
}

export interface CategorySeo {
  title: string;
  description: string;
  h1Tagline: string;
  intro: string;
  faqHeading: string;
}

export function categorySeo(category: ShopCategory160): CategorySeo | null {
  const kw = CATEGORY_KEYWORDS[category.slug];
  if (!kw?.primaryKeyword) return null;
  const k = kw.primaryKeyword.toLowerCase();
  let title = `${titleCase(k)} | Shop ${category.name} (${category.itemCount} Cuts)`;
  if (title.length + 18 <= 70) title += ' | The Meat Agent';
  title = trim(title, 70);
  const description = trim(
    `${capFirst(k)}: shop ${category.itemCount} ${category.name.toLowerCase()} cuts with cold-chain delivery across Australia. Prices before GST, $423 minimum order, trade accounts available.`,
    160,
  );
  const h1Tagline = `${capFirst(k)}: ${category.itemCount} cuts, delivered cold-chain`;
  const intro = `Looking for ${k}? Browse all ${category.itemCount} ${category.name.toLowerCase()} cuts below, with the weight and price before GST shown on every product.`;
  const faqHeading = `Frequently asked questions about ${k}`;
  return { title, description, h1Tagline, intro, faqHeading };
}
