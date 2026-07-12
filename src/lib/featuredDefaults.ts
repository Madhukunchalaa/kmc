/**
 * Fallback bestseller product slugs shown in the homepage
 * "Featured Crystal Collections" section when the admin has NOT chosen a custom
 * selection (Settings → Homepage Featured Products left empty).
 *
 * Shared by the homepage (src/app/page.tsx) and the admin settings preview so
 * the two never drift apart. If you change the default line-up, change it here.
 */
export const DEFAULT_FEATURED_SLUGS = [
  'rose-quartz-bracelet',
  'triple-protection-bracelet',
  'money-magnet-bracelet',
  'seven-chakra-bracelet',
  'black-tourmaline-bracelet',
];
