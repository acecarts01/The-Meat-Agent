import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Merchant Portal | Private Dialogue Desk',
  description: 'Confidential Merchant Reply and Customer Care Desk.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function MerchantPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
