import type { Metadata } from 'next';
import { HomePageClient } from '@/components/HomePageClient';

// The home page was a client-only file with no metadata export, so it had no canonical tag.
export const metadata: Metadata = {
  alternates: { canonical: 'https://themeatdirect.com.au' },
};

export default function HomePage() {
  return <HomePageClient />;
}
