import { projectSlugs, type ProjectSlug } from '@/content/projects'
import { siteConfig } from '@/config/site'

/**
 * ROUTE REGISTRY
 * ----------------------------------------------------------------------------
 * Every route in the application, declared once.
 *
 * WHY A REGISTRY RATHER THAN STRING LITERALS
 * Navigation, the sitemap, breadcrumbs and active-link detection all need the
 * same list. Declaring it once means adding a route updates all four, and the
 * `Route` union type makes a typo in an `<a href>` a compile error instead of a
 * 404 discovered in production.
 *
 * LAYERING
 * This module reads from `src/content` and never the reverse. Content is data;
 * routing is a view over it.
 */

export const routes = {
  home: '/',
  work: '/work',
  otherProjects: '/work/other-projects',
  experience: '/experience',
  about: '/about',
  contact: '/contact',
} as const

export type RouteKey = keyof typeof routes
export type Route = (typeof routes)[RouteKey]

/**
 * Case study slugs, derived from the project registry.
 *
 * Previously hardcoded here. Deriving them means adding a project to
 * `src/content/projects.ts` updates the static params, the sitemap and the
 * `CaseStudySlug` union together — the three places that silently drift apart
 * when a slug is maintained by hand.
 */
export const caseStudySlugs = projectSlugs

export type CaseStudySlug = ProjectSlug

/**
 * Builds the canonical path for a case study.
 *
 * Accepts `string` rather than `CaseStudySlug` because callers map over
 * `readonly Project[]`, whose `slug` is `string` — requiring the union would
 * force every call site into an `as` cast, which asserts correctness rather
 * than checking it. Slug validity is genuinely enforced where it matters: by
 * `generateStaticParams` and `dynamicParams = false` on the route itself, which
 * make an unknown slug a 404 rather than a broken page.
 */
export function caseStudyPath(slug: string): string {
  return `${routes.work}/${slug}`
}

/**
 * Primary navigation.
 *
 * `href` is a plain string rather than the `Route` union because Resume points
 * at a static asset, not a route. Narrowing it to `Route` would either exclude
 * Resume or force a fake route entry that the sitemap would then advertise as a
 * page.
 *
 * `label` is placeholder copy; final wording is a content-phase decision.
 */
export interface NavItem {
  readonly href: string
  readonly label: string
  /** Excluded from the header but still present in the footer and sitemap. */
  readonly primary: boolean
  /** Leaves the app — rendered as a native anchor, not a `<Link>`. */
  readonly external?: boolean
}

export const navItems: readonly NavItem[] = [
  { href: routes.work, label: 'Work', primary: true },
  { href: routes.experience, label: 'Experience', primary: true },
  { href: routes.about, label: 'About', primary: true },
  { href: routes.contact, label: 'Contact', primary: true },
  { href: siteConfig.resume, label: 'Resume', primary: true, external: true },
] as const

export const primaryNavItems = navItems.filter((item) => item.primary)

/**
 * Active-state matching.
 *
 * The home route is compared by strict equality — a `startsWith` check against
 * `'/'` matches every path on the site and would light up every nav item at
 * once. Non-home routes use a prefix match so `/work/omnirag-ai` correctly
 * marks `/work` as active.
 */
export function isActiveRoute(pathname: string, href: string): boolean {
  if (href === routes.home) return pathname === routes.home
  return pathname === href || pathname.startsWith(`${href}/`)
}
