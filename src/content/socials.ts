import type { SocialLink } from './types'

/**
 * SOCIAL LINKS
 * ----------------------------------------------------------------------------
 * Profiles rendered in the footer and on `/contact`.
 *
 * WHY THIS DOES NOT READ `siteConfig.links`
 * `src/content` must not import `src/config` — `src/config/routes.ts` imports
 * the project registry from here, and a reverse import would close the cycle.
 * The ordering, labelling and selection of social links is also editorial,
 * which is a content concern rather than a site-identity one. The two lists
 * overlap by design: `siteConfig.links` feeds `sameAs` in the structured data,
 * this one feeds the UI.
 *
 * `label` is a full sentence-shaped name rather than the platform word, because
 * these render as icon-only anchors whose entire accessible name comes from it —
 * "GitHub" alone announces as an unlabelled destination.
 */

export const socialLinks: readonly SocialLink[] = [
  {
    platform: 'github',
    label: 'GitHub profile',
    href: 'https://github.com/Sukhsimransingh1',
  },
  {
    platform: 'linkedin',
    label: 'LinkedIn profile',
    href: 'https://www.linkedin.com/in/sukhsimran-singh1',
  },
  {
    platform: 'email',
    label: 'Email Sukhsimran Singh',
    href: 'mailto:sukhsimransingh304@gmail.com',
  },
]
