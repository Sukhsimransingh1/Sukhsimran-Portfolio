import { siteConfig } from '@/config/site'
import { caseStudyPath, routes } from '@/config/routes'
import type { Project } from '@/content/types'

/**
 * STRUCTURED DATA (JSON-LD)
 * ----------------------------------------------------------------------------
 * Schema.org descriptions of the site, its author and its case studies.
 *
 * WHY THIS IS SEPARATE FROM `buildMetadata`
 * `buildMetadata` returns Next's `Metadata`, which emits `<meta>` tags. JSON-LD
 * is a `<script type="application/ld+json">` in the body — a different output
 * channel entirely. Folding it into the metadata factory would mean returning
 * two unrelated things from one function.
 *
 * WHY THE RETURN TYPE IS NOT `any`
 * Schema.org objects are open-ended, but `any` would disable checking at every
 * call site. `JsonLdObject` is a recursive JSON type: it permits arbitrary keys
 * while still rejecting values that cannot be serialised — a `Date`, a
 * function, or `undefined` in an array would all be caught here rather than
 * silently emitting invalid JSON.
 *
 * ⚠️  Values come from `siteConfig`, which is still placeholder. The shape is
 * correct; the content is not, until the identity phase lands.
 */

type JsonLdValue =
  string | number | boolean | null | JsonLdObject | readonly JsonLdValue[]

export interface JsonLdObject {
  readonly [key: string]: JsonLdValue | undefined
}

/** Stable `@id` for the author node, so other nodes can reference it. */
const personId = `${siteConfig.url}#person`
const websiteId = `${siteConfig.url}#website`

/**
 * The author.
 *
 * `sameAs` links the entity to its profiles elsewhere — this is what lets a
 * search engine connect the site to a GitHub or LinkedIn identity. Empty
 * entries are filtered out; an empty string is an invalid URL and invalidates
 * the whole node.
 */
export function personJsonLd(): JsonLdObject {
  const sameAs = [siteConfig.links.github, siteConfig.links.linkedin].filter(
    (link) => link.length > 0,
  )

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': personId,
    name: siteConfig.author.name,
    url: siteConfig.url,
    ...(siteConfig.author.email ? { email: siteConfig.author.email } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  }
}

/** The site itself, attributed to the author node. */
export function websiteJsonLd(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    inLanguage: siteConfig.lang,
    author: { '@id': personId },
  }
}

/**
 * A case study.
 *
 * Typed `CreativeWork` rather than `Article`: these are project records, not
 * published articles, and `Article` implies a `datePublished` and editorial
 * body that a case study does not have.
 */
export function caseStudyJsonLd(project: Project): JsonLdObject {
  const url = new URL(caseStudyPath(project.slug), siteConfig.url).toString()

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': url,
    name: project.title,
    url,
    ...(project.summary ? { abstract: project.summary } : {}),
    ...(project.description ? { description: project.description } : {}),
    ...(project.year ? { dateCreated: String(project.year) } : {}),
    ...(project.stack && project.stack.length > 0
      ? { keywords: [...project.stack] }
      : {}),
    author: { '@id': personId },
    isPartOf: { '@id': websiteId },
  }
}

/** Collection page for `/work`, listing the case studies in display order. */
export function workCollectionJsonLd(projects: readonly Project[]): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Work',
    url: new URL(routes.work, siteConfig.url).toString(),
    isPartOf: { '@id': websiteId },
    hasPart: projects.map((project) => ({
      '@type': 'CreativeWork',
      name: project.title,
      url: new URL(caseStudyPath(project.slug), siteConfig.url).toString(),
    })),
  }
}
