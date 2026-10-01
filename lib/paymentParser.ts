// Splits one pasted blob of payment info (bank details, a wallet address, a payment
// link — any country, any rail) into individually-copyable {label, value} fields.
// Pure string parsing, safe to import from both server routes and client components.

export interface ParsedPaymentField {
  label: string;
  value: string;
}

const KNOWN_LABEL_WORDS = [
  'bank', 'bank name', 'account name', 'account number', 'acc name', 'acc number',
  'bsb', 'swift', 'swift code', 'iban', 'sort code', 'routing number',
  'payid', 'payid number', 'wallet', 'wallet address', 'network', 'address',
  'reference', 'memo', 'amount', 'currency', 'link', 'payment link',
];

export function parsePaymentDetail(raw: string): ParsedPaymentField[] {
  const lines = raw
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);

  if (lines.length === 0) return [];

  const fields: ParsedPaymentField[] = [];
  let detailCount = 0;

  for (const line of lines) {
    const colonIdx = line.indexOf(':');
    if (colonIdx > 0 && colonIdx < 40) {
      const label = line.slice(0, colonIdx).trim();
      const value = line.slice(colonIdx + 1).trim();
      if (label && value) {
        fields.push({ label, value });
        continue;
      }
    }

    const lower = line.toLowerCase();
    const matchedWord = KNOWN_LABEL_WORDS.find((w) => lower.startsWith(w + ' ') || lower === w);
    if (matchedWord) {
      const value = line.slice(matchedWord.length).trim();
      if (value) {
        fields.push({ label: matchedWord.replace(/\b\w/g, (c) => c.toUpperCase()), value });
        continue;
      }
    }

    detailCount += 1;
    fields.push({ label: `Detail ${detailCount}`, value: line });
  }

  return fields;
}
