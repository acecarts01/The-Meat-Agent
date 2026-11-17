import type {NextConfig} from 'next';
import { BLOG_REDIRECTS } from './lib/blog-redirects';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return BLOG_REDIRECTS.flatMap((r) => [
      { source: r.from, destination: r.to, permanent: true },
      { source: r.from + '/', destination: r.to, permanent: true },
    ]);
  },
  async headers() {
    // Product, blog and brand images are static files named by content; cache them in the browser for 30 days and let the
    // CDN serve a stale copy while it revalidates. (Next already sets immutable caching on /_next/static.)
    const longCache = [{ key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' }];
    return [
      { source: '/images/:path*', headers: longCache },
      { source: '/:file(logo.png|logo-mark.svg|logo-lockup.svg|icon-192.png|icon-512.png)', headers: longCache },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    // Serve AVIF first (smaller), WebP as fallback, and let the CDN keep optimised images for 30 days.
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', // This allows any path under the hostname
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'standalone',
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modify—file watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
