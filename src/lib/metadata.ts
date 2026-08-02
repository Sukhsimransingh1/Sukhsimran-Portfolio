import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

/**
 * METADATA FACTORY
 * ----------------------------------------------------------------------------
 * Produces a complete, correct `Metadata` object from a small input.
 *
 * WHY A FACTORY
 * Next merges page metadata over the root layout's, but the merge is shallow
 * per top-level key: a page that sets `openGraph.title` replaces the *entire*
 * inherited `openGraph` object, silently dropping images, locale and type. That
 * failure is invisible locally — it only shows up as a broken link preview
 * after deploy.
 *
 * Building each page's metadata through this factory means the OG and Twitter
 * blocks are always constructed whole.
 */

interface BuildMetadataOptions {
  title: string
  description: string
  /** Path relative to the site root, e.g. `/work`. Used for the canonical URL. */
  path?: string
  /** Absolute or root-relative image URL. Defaults to the site OG image. */
  image?: string
  /** `article` for case studies, `website` elsewhere. */
  type?: 'website' | 'article'
  /** Keeps a page out of search indexes (e.g. drafts, thank-you pages). */
  noIndex?: boolean
  publishedTime?: string
  modifiedTime?: string
}

export function buildMetadata({
  title,
  description,
  path = '/',
  image,
  type = 'website',
  noIndex = false,
  publishedTime,
  modifiedTime,
}: BuildMetadataOptions): Metadata {
  const url = new URL(path, siteConfig.url).toString()
  const ogImage = new URL(image ?? siteConfig.ogImage.path, siteConfig.url).toString()

  return {
    title,
    description,

    // Self-referencing canonical on every page. Without it, query-string
    // variants (utm_*, ref) are indexed as separate documents and split
    // ranking signals across duplicates.
    alternates: { canonical: url },

    openGraph: {
      type,
      url,
      title,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [
        {
          url: ogImage,
          width: siteConfig.ogImage.width,
          height: siteConfig.ogImage.height,
          alt: title,
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors: [siteConfig.author.name],
      }),
    },

    twitter: {
      // `summary_large_image` renders a 1.91:1 hero rather than a small square
      // thumbnail — the correct card for a portfolio link.
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      // Ternary rather than `&&`: `handle` is typed as the empty-string literal
      // until a real value is configured, and `'' && {...}` narrows to `''`,
      // which is not spreadable.
      ...(siteConfig.author.handle ? { creator: siteConfig.author.handle } : {}),
    },

    ...(noIndex && {
      robots: { index: false, follow: false },
    }),
  }
}
