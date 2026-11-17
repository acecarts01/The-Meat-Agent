import type { Metadata } from 'next';
import { HomePageClient } from '@/components/HomePageClient';

// The home page was a client-only file with no metadata export, so it had no canonical tag.
export const metadata: Metadata = {
  title: 'Best Butcher Near Me | Buy Wagyu, Beef & Lamb Direct | The Meat Agent',
  description:
    'Looking for the best butcher near me? The Meat Agent sells beef, wagyu, lamb, chicken and game direct from Ipswich QLD. Cold-chain delivery across Australia.',
  alternates: { canonical: 'https://themeatdirect.com.au' },
};

export default function HomePage() {
  return <HomePageClient />;
}
