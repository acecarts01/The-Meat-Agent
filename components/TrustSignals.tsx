import Link from 'next/link';
import { Star, Snowflake, BadgeCheck, Landmark, RotateCcw, Receipt, Lock, ShieldCheck } from 'lucide-react';

export type HalalStatus = 'yes' | 'no' | 'unknown';

// Pork and pork-based smallgoods are not halal certified; every other product is. Smallgoods that are not clearly pork or
// clearly beef/lamb/duck/chicken are left without a halal claim rather than guessing.
const PORK_NAME = /\b(pork|bacon|ham|prosciutto|pancetta|salami|soppressata|chorizo|kielbasa|bratwurst|cumberland|strasburg|blood pudding|kransky|eisbein|char siu|boar)\b/i;
const NON_PORK_SMALLGOODS = /\b(beef|lamb|duck|wagyu|chicken|boerewors|franks|pastrami|merguez|kangaroo)\b/i;

const OTHER_MEAT = /(kangaroo|venison|lamb|beef|wagyu|duck|chicken|turkey|goat|mutton|veal)/i;

export function halalStatus(categorySlug: string, name: string): HalalStatus {
  // Boxes can mix products (some include bacon or pork sausages), so no blanket halal claim is made for them.
  if (categorySlug === 'equipment' || categorySlug === 'meatboxes') return 'unknown';
  if (categorySlug === 'pork') return 'no';
  if (PORK_NAME.test(name) && !OTHER_MEAT.test(name)) return 'no';
  if (categorySlug === 'smallgoods') return NON_PORK_SMALLGOODS.test(name) ? 'yes' : 'unknown';
  return 'yes';
}

interface Item {
  icon: React.ReactNode;
  title: string;
  body: React.ReactNode;
}

export function TrustSignals({ halal, compact = false }: { halal: HalalStatus; compact?: boolean }) {
  const items: Item[] = [
    {
      icon: <Star className="w-4 h-4 text-[#00B67A]" />,
      title: 'TrustScore 4.4 / 5.0',
      body: 'Rated from 2,837 verified customer reviews.',
    },
    {
      icon: <Snowflake className="w-4 h-4 text-sky-400" />,
      title: 'Cold-chain delivery',
      body: 'Packed in insulated liners and shipped by cold-chain courier, with a target arrival below 2.5°C.',
    },
    ...(halal === 'yes'
      ? [{ icon: <BadgeCheck className="w-4 h-4 text-emerald-400" />, title: 'Halal certified', body: 'Certified by AFIC, with IFANCA and HCA also held.' }]
      : halal === 'no'
        ? [{ icon: <BadgeCheck className="w-4 h-4 text-stone-400" />, title: 'Not halal certified', body: 'This is a pork product. Every other product we sell is halal certified.' }]
        : []),
    {
      icon: <Landmark className="w-4 h-4 text-amber-400" />,
      title: 'Registered Australian business',
      body: (
        <>
          LPJH HOLDINGS PTY LTD, ABN{' '}
          <a href="https://abr.business.gov.au/ABN/View?id=55657961058" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-400">
            55 657 961 058
          </a>
          . Boning room in Ipswich, QLD.
        </>
      ),
    },
    {
      icon: <Lock className="w-4 h-4 text-emerald-400" />,
      title: 'Secure payment, no card surcharge',
      body: 'Pay by PayID, bank transfer or crypto (10% off). We never see or store card details.',
    },
    {
      icon: <RotateCcw className="w-4 h-4 text-red-400" />,
      title: 'Problems put right',
      body: (
        <>
          Warm, damaged, wrong or unacceptable-quality orders are replaced, credited or refunded. See our{' '}
          <Link href="/returns" className="underline hover:text-amber-400">returns and refunds policy</Link>.
        </>
      ),
    },
    {
      icon: <Receipt className="w-4 h-4 text-amber-400" />,
      title: 'Clear pricing',
      body: 'Prices are before 10% GST, added at checkout. $423 AUD minimum order, $25 shipping under $2,000 and free above.',
    },
  ];

  const shown = compact ? items.slice(0, 4) : items;
  return (
    <section aria-labelledby="trust-signals-heading" className="p-4 bg-stone-900/60 border border-stone-800 rounded-xl space-y-3">
      <h2 id="trust-signals-heading" className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
        <ShieldCheck className="w-4 h-4 text-amber-500" />
        Why buy from The Meat Agent
      </h2>
      <ul className={`grid gap-3 ${compact ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2'}`}>
        {shown.map((it) => (
          <li key={it.title} className="flex gap-2.5 text-xs leading-relaxed">
            <span className="mt-0.5 shrink-0">{it.icon}</span>
            <span>
              <span className="block font-bold text-stone-100">{it.title}</span>
              <span className="text-stone-400">{it.body}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
