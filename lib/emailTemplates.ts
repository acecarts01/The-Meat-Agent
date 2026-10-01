// Light-shell transactional email template (per WebForge mandate):
// white card body, dark brand header band, near-black text, brand colour as accent only.
// Never a dark-background body — Zoho/Gmail dark mode force-invert it with no opt-out.

const BRAND_PRIMARY = '#b91c1c'; // red-700, matches site accent
const HEADER_DARK = '#1c1917'; // stone-900, matches site header/footer
const TEXT = '#1c1917';
const MUTED = '#78716c';
const BORDER = '#e7e5e4';

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function field(label: string, value: string): string {
  return `<tr><td style="padding:4px 0;color:${MUTED};font-size:12px;width:120px;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:4px 0;color:${TEXT};font-size:13px;">${value}</td></tr>`;
}

export function divider(): string {
  return `<hr style="border:none;border-top:1px solid ${BORDER};margin:16px 0;" />`;
}

export function callout(html: string): string {
  return `<div style="background:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:12px 16px;margin:16px 0;color:${TEXT};font-size:13px;">${html}</div>`;
}

export function button(href: string, label: string): string {
  return `<table role="presentation" cellspacing="0" cellpadding="0" style="margin:20px 0;"><tr><td style="background:${BRAND_PRIMARY};border-radius:6px;">` +
    `<a href="${href}" style="display:inline-block;padding:12px 24px;color:#ffffff;font-family:Arial,sans-serif;font-size:14px;font-weight:bold;text-decoration:none;border-radius:6px;">${escapeHtml(label)}</a>` +
    `</td></tr></table>`;
}

export function itemsTable(
  items: { quantity: number; name: string; weight: string; sku: string; price: number }[]
): string {
  const rows = items
    .map(
      (i) =>
        `<tr>` +
        `<td style="padding:8px;border-bottom:1px solid ${BORDER};font-size:13px;color:${TEXT};">${escapeHtml(i.quantity.toString())}x ${escapeHtml(i.name)} <span style="color:${MUTED};">(${escapeHtml(i.weight)})</span></td>` +
        `<td style="padding:8px;border-bottom:1px solid ${BORDER};font-family:monospace;font-size:12px;color:${MUTED};">${escapeHtml(i.sku)}</td>` +
        `<td style="padding:8px;border-bottom:1px solid ${BORDER};font-size:13px;color:${TEXT};text-align:right;">$${(i.price * i.quantity).toFixed(2)}</td>` +
        `</tr>`
    )
    .join('');
  return `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="width:100%;border-collapse:collapse;margin:12px 0;"><tbody>${rows}</tbody></table>`;
}

export function shell(opts: { preheader?: string; title: string; bodyHtml: string; footerHtml?: string }): string {
  const { preheader, title, bodyHtml, footerHtml } = opts;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="color-scheme" content="light" />
<meta name="supported-color-schemes" content="light" />
<title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:#f5f5f4;font-family:Arial,Helvetica,sans-serif;">
${preheader ? `<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>` : ''}
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f5f5f4;padding:24px 0;">
<tr><td align="center">
<table role="presentation" width="600" cellspacing="0" cellpadding="0" style="width:600px;max-width:94vw;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
<tr><td style="background:${HEADER_DARK};padding:20px 28px;">
<span style="color:#ffffff;font-size:16px;font-weight:bold;font-family:Arial,sans-serif;letter-spacing:0.3px;">THE MEAT AGENT</span>
<span style="color:${BRAND_PRIMARY};font-size:11px;font-weight:bold;font-family:Arial,sans-serif;background:#ffffff;border-radius:4px;padding:2px 8px;margin-left:8px;">MEAT DIRECT</span>
</td></tr>
<tr><td style="padding:28px;color:${TEXT};">
${bodyHtml}
</td></tr>
<tr><td style="background:#fafaf9;border-top:1px solid ${BORDER};padding:16px 28px;color:${MUTED};font-size:11px;line-height:1.6;">
${footerHtml || `The Meat Agent — Meat Direct<br/>ABN 55 657 961 058<br/>22 Wilson Pl, Harrisville QLD 4307`}
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}
