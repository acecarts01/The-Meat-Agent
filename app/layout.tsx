import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://themeatdirect.com.au'),
  title: 'The Meat Agent — Meat Direct | Australian Wholesale Butcher & Wagyu',
  description: 'Direct farm-gate wholesale allocation of MSA-graded Wagyu MB9+, 45-day dry-aged steaks, and smoker primals. Delivered cold-chain across Australia.',
  openGraph: {
    title: 'The Meat Agent — Meat Direct | Australian Wholesale Butcher',
    description: 'Direct farm-gate wholesale allocation of MSA-graded Wagyu MB9+, 45-day dry-aged steaks, and smoker primals. Delivered cold-chain across Australia.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Meat Agent — Meat Direct | Australian Wholesale Butcher',
    description: 'Direct farm-gate wholesale allocation of MSA-graded Wagyu MB9+, 45-day dry-aged steaks, and smoker primals. Delivered cold-chain across Australia.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
