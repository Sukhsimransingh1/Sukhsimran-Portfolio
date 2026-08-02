import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

/**
 * WEB APP MANIFEST
 * ----------------------------------------------------------------------------
 * PLACEHOLDER — icons and brand colours are finalised in a later phase.
 *
 * `display: 'browser'` rather than `'standalone'`. This is a portfolio, not an
 * app: `standalone` strips the URL bar and back button when launched from the
 * home screen, which removes navigation affordances users expect on a website.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: '/',
    display: 'browser',
    background_color: '#fafafa',
    theme_color: '#fafafa',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
