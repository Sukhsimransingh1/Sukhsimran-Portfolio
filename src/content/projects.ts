import type { OtherProject, Project } from './types'

/**
 * PROJECT REGISTRY
 * ----------------------------------------------------------------------------
 * The four featured projects. This array is the single source of truth for
 * which case study routes exist: `generateStaticParams`, the sitemap, the
 * `CaseStudySlug` union and `/work` all read from it.
 *
 * Adding a project is one entry here and nothing else.
 *
 * ⚠️  IDENTITY ONLY — slug, title and ordering are real; every narrative field
 * is deliberately unwritten. The case study bodies arrive in the content phase.
 *
 * WHY `as const satisfies readonly Project[]` AND NOT AN ANNOTATION
 * `const projects: readonly Project[]` would widen `slug` from its literal to
 * `string`, and `ProjectSlug` would degrade to `string` — losing the compile-
 * time guarantee that `/work/<slug>` links point at a project that exists.
 * `satisfies` checks the shape against `Project` while `as const` preserves the
 * literals, so we get both validation and the union.
 */

export const projects = [
  {
    slug: 'pranrakshak-ai',
    title: 'PranRakshak AI',
    order: 1,
  },
  {
    slug: 'disastersense-ai',
    title: 'DisasterSense AI',
    order: 2,
  },
  {
    slug: 'omnirag-ai',
    title: 'OmniRAG AI',
    order: 3,
  },
  {
    slug: 'resume-screening-ai',
    title: 'Resume Screening AI',
    order: 4,
  },
] as const satisfies readonly Project[]

/** Union of the four literal slugs. Not `string`. */
export type ProjectSlug = (typeof projects)[number]['slug']

/** Every slug, in registry order. Drives static params and the sitemap. */
export const projectSlugs: readonly ProjectSlug[] = projects.map((project) => project.slug)

/**
 * Projects in display order.
 *
 * `order` is optional on `Project`, so a missing value sorts last rather than
 * coercing `undefined` into `NaN` and corrupting the comparison.
 */
export const orderedProjects: readonly Project[] = [...projects].sort(
  (a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER),
)

/**
 * Looks up a project by slug.
 *
 * Returns `undefined` on miss rather than throwing: the case study route needs
 * to call `notFound()`, which is Next's own control flow, and an exception
 * there would surface as a 500 instead of a 404.
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

/** Narrows an arbitrary string to a known slug. */
export function isProjectSlug(slug: string): slug is ProjectSlug {
  return projects.some((project) => project.slug === slug)
}

/**
 * Projects without a case study, listed on `/work/other-projects`.
 *
 * Empty by design. The page maps this array, so future entries need no
 * component change.
 */
export const otherProjects: readonly OtherProject[] = []
