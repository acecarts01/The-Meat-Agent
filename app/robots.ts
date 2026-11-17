import { MetadataRoute } from 'next';

const BASE_URL = 'https://themeatdirect.com.au';

const DISALLOWED_PATHS = ['/api/', '/merchant-portal', '/merchant-portal/', '/admin/', '/order/'];

// AI search / answer-engine agents (fetch pages to cite them in answers) and the main
// search engines: explicitly allowed so their access is unambiguous.
const SEARCH_AND_AI_ANSWER_BOTS = [
  'Googlebot',
  'Bingbot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'Perplexity-User',
  'Claude-SearchBot',
  'Claude-User',
];

// Model-training crawlers: blocked site-wide (owner decision, Phase 1). Search and answer bots above stay allowed.
const TRAINING_BOTS = ['GPTBot', 'ClaudeBot', 'Google-Extended', 'anthropic-ai', 'CCBot', 'Bytespider', 'cohere-ai'];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: DISALLOWED_PATHS },
      ...SEARCH_AND_AI_ANSWER_BOTS.map((userAgent) => ({ userAgent, allow: '/', disallow: DISALLOWED_PATHS })),
      ...TRAINING_BOTS.map((userAgent) => ({ userAgent, disallow: '/' })),
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
