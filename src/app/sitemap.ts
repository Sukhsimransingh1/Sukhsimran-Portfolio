import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'
import { routes, caseStudySlugs } from '@/config/routes'

/**
 * SITEMAP
 * ----------------------------------------------------------------------------
 * Generated from the route registry rather than hand-maintained. A hardcoded
 * sitemap drifts the moment a route is added, and the drift is silent — nothing
 * fails, pages just stop being discovered.
 *
 * `priority` is relative within the site, not absolute. Search engines treat it
 * as a weak hint; the honest signal is `changeFrequency` plus real
 * `lastModified` dates, which arrive with the content layer.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = Object.values(routes).map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
    lastModified: now,
    changeFrequency: route === routes.home ? 'monthly' : 'yearly',
    priority: route === routes.home ? 1 : 0.8,
  }))

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudySlugs.map((slug) => ({
    url: new URL(`${routes.work}/${slug}`, siteConfig.url).toString(),
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.9,
  }))

  return [...staticRoutes, ...caseStudyRoutes]
}
