import { NextRequest } from 'next/server';
import { timingSafeEqual } from 'crypto';

// Returns null when the request is authorized, otherwise an error reason.
export function checkAdminPasscode(req: NextRequest): 'not-configured' | 'unauthorized' | null {
  const expected = process.env.ADMIN_PASSCODE;
  if (!expected) return 'not-configured';

  const provided = req.headers.get('x-admin-passcode') || '';
  const expectedBuf = Buffer.from(expected);
  const providedBuf = Buffer.from(provided);
  if (providedBuf.length !== expectedBuf.length || !timingSafeEqual(providedBuf, expectedBuf)) {
    return 'unauthorized';
  }
  return null;
}
