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
 * `title` is the `<h1>` of the home page as well as the metadata title, so it
 * is the name rather than a tagline — a tagline as `h1` leaves the document
 * outline without the one thing a reader is looking for.
 */

export const siteConfig = {
  name: 'Sukhsimran Singh',
  title: 'Sukhsimran Singh',
  description:
    'Computer Science undergraduate specialising in Machine Learning and Generative AI. I design ML pipelines, NLP systems and ship full-stack AI applications.',

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
    name: 'Sukhsimran Singh',
    email: 'sukhsimransingh304@gmail.com',
    handle: '',
  },

  /** Rendered by the OG image route and Twitter cards. */
  ogImage: {
    path: '/og/default.png',
    width: 1200,
    height: 630,
    alt: 'Sukhsimran Singh — AI & Machine Learning Engineer',
  },

  /**
   * Profile URLs, derived from the handles recorded in `docs/old-portfolio.md`
   * (`Sukhsimransingh1`, `sukhsimran-singh1`) rather than invented — both are
   * the canonical profile path for their platform. Consumers must still handle
   * absence: `personJsonLd` filters empties out of `sameAs`, because an empty
   * string is an invalid URL and would invalidate the whole node.
   */
  links: {
    github: 'https://github.com/Sukhsimransingh1',
    linkedin: 'https://www.linkedin.com/in/sukhsimran-singh1',
    email: 'mailto:sukhsimransingh304@gmail.com',
  },

  /**
   * Résumé asset, served from `public/`. A path rather than an empty
   * placeholder because navigation links to it — the file itself lands with the
   * content phase.
   */
  resume: '/resume/resume.pdf',
} as const

export type SiteConfig = typeof siteConfig
