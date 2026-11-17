import Link from 'next/link';
import { InfoPageShell } from '@/components/InfoPageShell';
import { SiteFaqSection } from '@/components/SiteFaq';
import type { SiteFaq } from '@/lib/site-faqs';
import type { PolicySection } from '@/lib/policy-content';

export function PolicyPage({
  title,
  crumb,
  effectiveLabel,
  intro,
  sections,
  faqs,
  faqTitle,
  jsonLd,
}: {
  title: string;
  crumb: string;
  effectiveLabel: string;
  intro: string;
  sections: PolicySection[];
  faqs: SiteFaq[];
  faqTitle: string;
  jsonLd: object;
}) {
  return (
    <InfoPageShell currentPage="home">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 text-stone-300 text-sm leading-relaxed">
        <nav aria-label="Breadcrumb" className="text-xs text-stone-400 font-mono">
          <Link href="/" className="hover:text-amber-400">Home</Link> / <span className="text-amber-400">{crumb}</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">{title}</h1>
        <p className="text-xs font-mono text-stone-500">Effective and last updated {effectiveLabel}</p>
        <p>{intro}</p>
        {sections.map((s) => (
          <section key={s.heading} className="space-y-3">
            <h2 className="text-xl font-black text-white">{s.heading}</h2>
            {s.paragraphs?.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
            {s.list && (
              <ul className="list-disc pl-5 space-y-1.5">
                {s.list.map((li) => <li key={li.slice(0, 40)}>{li}</li>)}
              </ul>
            )}
            {s.after?.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
          </section>
        ))}
      </article>
      <SiteFaqSection title={faqTitle} faqs={faqs} />
    </InfoPageShell>
  );
}
