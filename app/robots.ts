import { MetadataRoute } from 'next';

const BASE_URL = 'https://themeatdirect.com.au';

const DISALLOWED_PATHS = ['/api/', '/merchant-portal', '/merchant-portal/'];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: DISALLOWED_PATHS,
      },
      // Explicit allow rules for known AI/GEO crawlers so their presence is
      // unambiguous to anyone auditing the file (a bare "*" already covers
      // them, but naming them avoids any doubt about intent).
      { userAgent: 'GPTBot', allow: '/', disallow: DISALLOWED_PATHS },
      { userAgent: 'Google-Extended', allow: '/', disallow: DISALLOWED_PATHS },
      { userAgent: 'ClaudeBot', allow: '/', disallow: DISALLOWED_PATHS },
      { userAgent: 'anthropic-ai', allow: '/', disallow: DISALLOWED_PATHS },
      { userAgent: 'PerplexityBot', allow: '/', disallow: DISALLOWED_PATHS },
      { userAgent: 'CCBot', allow: '/', disallow: DISALLOWED_PATHS },
      { userAgent: 'Bytespider', allow: '/', disallow: DISALLOWED_PATHS },
      { userAgent: 'cohere-ai', allow: '/', disallow: DISALLOWED_PATHS },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
