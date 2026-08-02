import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

/**
 * ROBOTS
 * ----------------------------------------------------------------------------
 * Generated rather than served as a static file, so the sitemap URL derives
 * from the same config as everything else.
 *
 * `/api/` is disallowed as a hygiene measure — API routes return JSON that has
 * no business in a search index, and crawling them wastes crawl budget on
 * pages that will never rank.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: new URL('/sitemap.xml', siteConfig.url).toString(),
  }
}
