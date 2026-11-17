import sharp from 'sharp';
import fs from 'node:fs';

// Brand mark: white cleaver on the site's red-to-amber gradient (same palette as the navbar badge).
const MARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512" role="img" aria-label="The Meat Agent logo">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#dc2626"/>
      <stop offset="1" stop-color="#b45309"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="112" fill="url(#g)"/>
  <g transform="rotate(-40 256 256) translate(-12 0)">
    <path d="M84 190h236a24 24 0 0 1 24 24v84a24 24 0 0 1-24 24H84a14 14 0 0 1-14-14V204a14 14 0 0 1 14-14z" fill="#ffffff"/>
    <rect x="70" y="190" width="274" height="14" rx="7" fill="#fecaca"/>
    <circle cx="116" cy="246" r="16" fill="#b91c1c"/>
    <rect x="336" y="234" width="112" height="44" rx="22" fill="#1c1917"/>
    <rect x="352" y="250" width="80" height="6" rx="3" fill="#fbbf24"/>
  </g>
</svg>`;

// Horizontal lockup for general use (text uses the system sans stack).
const LOCKUP = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1040 256" width="1040" height="256" role="img" aria-label="The Meat Agent - Meat Direct">
  <g transform="scale(0.5)">${MARK.replace(/<svg[^>]*>|<\/svg>/g, '')}</g>
  <text x="290" y="120" font-family="Arial Black, Arial, Helvetica, sans-serif" font-size="92" font-weight="900" fill="#ffffff" letter-spacing="-2">THE MEAT AGENT</text>
  <text x="294" y="190" font-family="Arial, Helvetica, sans-serif" font-size="46" font-weight="700" fill="#fbbf24" letter-spacing="10">MEAT DIRECT</text>
</svg>`;

fs.writeFileSync('public/logo-mark.svg', MARK);
fs.writeFileSync('public/logo-lockup.svg', LOCKUP);
fs.writeFileSync('app/icon.svg', MARK);

const png = (size) => sharp(Buffer.from(MARK)).resize(size, size).png().toBuffer();

fs.writeFileSync('public/logo.png', await png(512));
fs.writeFileSync('public/icon-192.png', await png(192));
fs.writeFileSync('public/icon-512.png', await png(512));
fs.writeFileSync('app/apple-icon.png', await png(180));

// favicon.ico: ICO container with PNG payloads (16, 32, 48)
const sizes = [16, 32, 48];
const bufs = await Promise.all(sizes.map(png));
const head = Buffer.alloc(6);
head.writeUInt16LE(0, 0); head.writeUInt16LE(1, 2); head.writeUInt16LE(sizes.length, 4);
let offset = 6 + 16 * sizes.length;
const dirs = [];
sizes.forEach((s, i) => {
  const d = Buffer.alloc(16);
  d.writeUInt8(s, 0); d.writeUInt8(s, 1); d.writeUInt8(0, 2); d.writeUInt8(0, 3);
  d.writeUInt16LE(1, 4); d.writeUInt16LE(32, 6);
  d.writeUInt32LE(bufs[i].length, 8); d.writeUInt32LE(offset, 12);
  offset += bufs[i].length;
  dirs.push(d);
});
fs.writeFileSync('app/favicon.ico', Buffer.concat([head, ...dirs, ...bufs]));
console.log('logo assets written');
