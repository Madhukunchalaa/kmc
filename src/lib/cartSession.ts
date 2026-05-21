// Anonymous cart-session id stored in a cookie so guest carts persist across visits.

const COOKIE_NAME = 'kmc_sid';

function makeId(): string {
  return (
    'kmc_' +
    Math.random().toString(36).slice(2, 10) +
    Date.now().toString(36)
  );
}

export function getOrCreateClientSessionId(): string {
  if (typeof document === 'undefined') return '';
  const existing = document.cookie
    .split('; ')
    .find((c) => c.startsWith(COOKIE_NAME + '='));
  if (existing) return decodeURIComponent(existing.split('=')[1]);
  const id = makeId();
  const oneYear = 60 * 60 * 24 * 365;
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(id)}; path=/; max-age=${oneYear}; SameSite=Lax`;
  return id;
}

export const CART_COOKIE = COOKIE_NAME;
