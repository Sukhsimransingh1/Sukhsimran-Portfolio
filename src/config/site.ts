/**
 * SITE CONFIGURATION
 * ----------------------------------------------------------------------------
 * Single source of truth for site-level constants consumed by metadata, the
 * sitemap, robots.txt, structured data and navigation.
 *
 * Centralised so the canonical URL and author identity are declared once —
 * duplicating them across metadata files is how OG tags and sitemaps drift out
 * of sync.
 *
 * ⚠️  PLACEHOLDER VALUES — real identity and copy land in a later phase.
 */

export const siteConfig = {
  name: 'Portfolio',
  title: 'Portfolio',
  description: 'Placeholder description. Replaced in the content phase.',

  /**
   * Absolute origin, no trailing slash.
   * Falls back to localhost so `new URL()` in metadata never throws in dev.
   * In production this must be set — Next cannot infer the deployment origin,
   * and an unset value silently emits relative OG URLs, which crawlers reject.
   */
  url: process.env['NEXT_PUBLIC_SITE_URL'] ?? 'http://localhost:3000',

  locale: 'en_US',
  lang: 'en',

  author: {
    name: 'Placeholder',
    email: '',
    handle: '',
  },

  /** Rendered by the OG image route and Twitter cards. */
  ogImage: {
    path: '/og/default.png',
    width: 1200,
    height: 630,
    alt: 'Portfolio',
  },

  /** Empty until real profiles are supplied; consumers must handle absence. */
  links: {
    github: '',
    linkedin: '',
    email: '',
  },

  /**
   * Résumé asset, served from `public/`. A path rather than an empty
   * placeholder because navigation links to it — the file itself lands with the
   * content phase.
   */
  resume: '/resume/resume.pdf',
} as const

export type SiteConfig = typeof siteConfig
