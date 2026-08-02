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
 * which is a content concern rather than a site-identity one.
 *
 * Empty by design — real profiles arrive in the content phase.
 */

export const socialLinks: readonly SocialLink[] = []
