// Older posts that were rewritten under a new, keyword-first slug (or retired). Old URLs redirect permanently.
export const BLOG_REDIRECTS: Array<{ from: string; to: string }> = [
  { from: '/blog/choosing-a-competition-brisket', to: '/blog/buy-beef-brisket-online-price-per-kg-australia' },
  { from: '/blog/supermarket-mince-vs-farm-gate-beef-mince', to: '/blog/beef-mince-price-per-kg-australia' },
  { from: '/blog/kangaroo-meat-australias-leanest-protein', to: '/blog/kangaroo-steak-near-me-kangaroo-meat-for-sale' },
  { from: '/blog/meat-box-minimum-order-family-savings', to: '/blog/bulk-meat-packs-near-me-meat-box-australia' },
  { from: '/blog/dry-aging-vs-wet-aging-steak', to: '/blog/dry-aged-beef-near-me-buy-online-australia' },
  { from: '/blog/pasture-raised-chicken-vs-supermarket', to: '/blog/chicken-breast-price-per-kg-australia' },
  { from: '/blog/wagyu-mb9-vs-mb3-worth-it', to: '/blog/wagyu-beef-price-per-kg-australia' },
  { from: '/blog/whole-primals-vs-pre-cut-steaks-value', to: '/blog/rump-steak-price-per-kg-australia' },
  { from: '/blog/understanding-abn-wholesale-butcher-compliance', to: '/blog/wholesale-beef-near-me-meat-supplier-restaurants-australia' },
  { from: '/blog/smallgoods-supermarket-vs-smokehouse', to: '/blog/sausage-price-per-kg-sausages-butcher-australia' },
  { from: '/blog/cold-chain-science-48-hour-delivery', to: '/blog/buying-meat-online-australia-delivery-cold-chain-payid' },
  { from: '/blog/payid-crypto-end-of-card-surcharges', to: '/blog/buying-meat-online-australia-delivery-cold-chain-payid' },
  { from: '/blog/pork-crackling-butcher-secrets', to: '/blog/pork-meat-near-me-pork-shoulder-price-australia' },
  // Retired (no Transactional demand for the topic, or merged into a stronger post); redirected to the closest live page.
  { from: '/blog/veal-vs-beef-age-difference', to: '/shop/veal' },
  { from: '/blog/how-much-meat-family-of-four-needs', to: '/blog/bulk-meat-packs-near-me-meat-box-australia' },
  { from: '/blog/lamb-cutlets-vs-lamb-chops-guide', to: '/blog/lamb-prices-per-kg-australia' },
  // Earlier retirements.
  { from: '/blog/home-butcher-knife-kit-essentials', to: '/shop/equipment' },
  { from: '/blog/why-cryovac-seals-matter-more-than-dates', to: '/blog/bulk-meat-packs-near-me-meat-box-australia' },
  { from: '/blog/smoker-wood-pairing-guide', to: '/blog/buy-beef-brisket-online-price-per-kg-australia' },
  { from: '/blog/msa-marbling-score-explained', to: '/shop/wagyu' },
  { from: '/blog/frozen-vs-fresh-seafood-truth', to: '/shop/seafood' },
];

export const RETIRED_BLOG_SLUGS = new Set(BLOG_REDIRECTS.map((r) => r.from.replace('/blog/', '')));
