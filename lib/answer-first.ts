import type { BlogPost, BlogSection } from '@/lib/blog-data';
import { OPENERS } from '@/lib/answer-openers';

// GEO answer-first formatting: every H2 section opens with a self-contained answer of 40-60 words so AI search engines can
// quote it cleanly. The text is not rewritten: the section's own opening sentences are grouped into the first paragraph and
// the remainder follows as the next paragraph. Sections that already open with 40-60 words, or that have no sentence
// boundary that lands in that range, are left exactly as written.

const MIN = 40;
const MAX = 58;

const wordCount = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').split(/\s+/).filter(Boolean).length;

function sentences(text: string): string[] {
  // Split after . ! ? when the next sentence starts with a capital letter, digit, $ or opening bracket.
  return text.split(/(?<=[.!?])\s+(?=[A-Z0-9$\[("'])/).map((s) => s.trim()).filter(Boolean);
}

function reshape(body: string[]): string[] {
  if (!body.length) return body;
  const first = wordCount(body[0]);
  if (first >= MIN && first <= MAX) return body;

  // Walk sentences across the first paragraphs until the running total lands in 40-60 words.
  const flat: { s: string; para: number }[] = [];
  body.slice(0, 3).forEach((p, para) => sentences(p).forEach((s) => flat.push({ s, para })));
  let count = 0;
  for (let i = 0; i < flat.length; i++) {
    const w = wordCount(flat[i].s);
    if (count + w > MAX) {
      // Over the cap: try ending the opening at a clause break (semicolon) inside this long sentence.
      const clauses = flat[i].s.split(/;\s+/);
      if (clauses.length > 1 && count < MIN) {
        let c = count;
        const take: string[] = [];
        for (const cl of clauses) {
          const cw = wordCount(cl);
          if (c + cw > MAX) break;
          take.push(cl);
          c += cw;
        }
        if (take.length && c >= MIN && take.length < clauses.length) {
          const closed = take.join('; ').replace(/[;,:]\s*$/, '');
          const head = flat.slice(0, i).map((x) => x.s).join(' ');
          const opening = (head ? head + ' ' : '') + (/[.!?]$/.test(closed) ? closed : closed + '.');
          const restClauses = clauses.slice(take.length).join('; ');
          const restText = restClauses.charAt(0).toUpperCase() + restClauses.slice(1);
          const consumedParas = flat[i].para;
          const tail = [restText, ...flat.slice(i + 1).filter((x) => x.para === consumedParas).map((x) => x.s)].join(' ');
          return [opening, tail, ...body.slice(consumedParas + 1)];
        }
      }
      return body;
    }
    count += w;
    if (count >= MIN) {
      const opening = flat.slice(0, i + 1).map((x) => x.s).join(' ');
      const consumedParas = flat[i].para;
      // Remainder of the paragraph we stopped in, then everything after it.
      const rest: string[] = [];
      const tail = flat.slice(i + 1).filter((x) => x.para === consumedParas).map((x) => x.s).join(' ');
      if (tail) rest.push(tail);
      return [opening, ...rest, ...body.slice(consumedParas + 1)];
    }
  }
  return body;
}

export function applyAnswerFirst(post: BlogPost): BlogPost {
  const sections: BlogSection[] = post.sections.map((s) => {
    let body = reshape(s.body);
    const w = body.length ? wordCount(body[0]) : 0;
    const opener = OPENERS[`${post.slug}|${s.heading}`];
    if (opener && (w < MIN || w > MAX)) body = opener.replace ? [opener.text, ...body.slice(1)] : [opener.text, ...body];
    return { ...s, body };
  });
  return { ...post, sections };
}
