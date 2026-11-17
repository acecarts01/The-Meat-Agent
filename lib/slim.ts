import type { Product160Item } from '@/lib/products-160-data';

// List views (shop index, category pages) only need card fields. FAQs, keyword lists and long copy are only used on the
// product page itself, so they are stripped before the list is serialised into the page payload (cuts the HTML/RSC size).
export function slimProducts(list: Product160Item[]): Product160Item[] {
  return list.map((p) => ({
    ...p,
    faqs: [],
    supportingKeywords: [],
    targetKeyword: '',
    thermalRetention: '',
    dryAging: p.dryAging,
  }));
}
