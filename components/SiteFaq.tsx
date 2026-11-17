import { faqJsonLd, SiteFaq } from '@/lib/site-faqs';

// Server component: renders the visible Q&A and the matching FAQPage JSON-LD (1:1 with what is on screen).
export function SiteFaqSection({ title, faqs }: { title: string; faqs: SiteFaq[] }) {
  return (
    <section aria-labelledby="site-faq-heading" className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
      <h2 id="site-faq-heading" className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4">
        {title}
      </h2>
      <div className="space-y-3">
        {faqs.map((f) => (
          <details key={f.question} className="group bg-stone-900/60 border border-stone-800 rounded-xl p-4" open>
            <summary className="cursor-pointer text-sm sm:text-base font-bold text-stone-100">{f.question}</summary>
            <p className="mt-2 text-sm text-stone-300 leading-relaxed">{f.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
