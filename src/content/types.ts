/**
 * DOMAIN TYPES
 * ----------------------------------------------------------------------------
 * The shape of every piece of portfolio content.
 *
 * WHY THESE LIVE HERE AND NOT IN `src/types`
 * `src/types/index.ts` holds cross-cutting *type utilities* — generics that
 * describe how components are written. These describe what the portfolio is
 * about. Keeping them beside the data they type means a change to the content
 * model is a one-directory change.
 *
 * WHY EVERY FIELD IS `readonly`
 * Content modules are declared `as const satisfies readonly Project[]`, which
 * makes the literals deeply readonly. A mutable interface would not be
 * satisfied by a readonly literal, so `satisfies` would fail. `readonly` here
 * is a structural requirement, not a stylistic preference.
 *
 * WHY OPTIONAL (`?`) RATHER THAN NULLABLE (`| null`)
 * Scaffolding must type-check while every narrative field is still unwritten.
 * With `?` an unwritten field is simply absent; with `| null` every stub would
 * have to spell out `field: null` for a dozen fields per project, and removing
 * a field later would be a breaking change rather than a deletion.
 */

/* -------------------------------------------------------------------------- */
/* Case study                                                                 */
/* -------------------------------------------------------------------------- */

/**
 * A titled block of prose within a case study.
 *
 * `body` is an array of paragraphs rather than one string with newlines: the
 * renderer emits one `<p>` per entry, and a single string would force either
 * `dangerouslySetInnerHTML` or a split on whitespace at render time.
 */
export interface CaseStudySection {
  readonly heading?: string
  readonly body: readonly string[]
}

/**
 * An engineering decision and the reasoning behind it.
 *
 * `alternatives` is what distinguishes a case study from a feature list — the
 * options considered and rejected are the evidence of judgement.
 */
export interface EngineeringDecision {
  readonly title: string
  readonly rationale: string
  readonly alternatives?: readonly string[]
}

export interface Challenge {
  readonly title: string
  readonly description: string
  readonly resolution?: string
}

/**
 * A measured outcome.
 *
 * `value` is a string, not a number: impact is written as `'40%'`, `'3.2s'` or
 * `'12k requests/day'`, and formatting those from a number plus a unit field is
 * more machinery than the content justifies.
 */
export interface ImpactMetric {
  readonly label: string
  readonly value: string
  readonly detail?: string
}

/** A technology, grouped so the renderer can cluster by layer. */
export interface Technology {
  readonly name: string
  readonly category?: string
}

/**
 * Dimensions are required. Next's `<Image>` needs intrinsic size to reserve
 * space before the file loads; without it every gallery image causes layout
 * shift on load.
 */
export interface GalleryItem {
  readonly src: string
  /** Required — a decorative gallery image would not belong in a case study. */
  readonly alt: string
  readonly width: number
  readonly height: number
  readonly caption?: string
}

export type ProjectLinkKind = 'repository' | 'demo' | 'paper' | 'article' | 'other'

export interface ProjectLink {
  readonly kind: ProjectLinkKind
  readonly label: string
  readonly href: string
}

/**
 * The case study spine.
 *
 * WHY NAMED FIELDS RATHER THAN A BLOCK ARRAY
 * A discriminated union of blocks would let any project invent its own
 * structure. The narrative order — problem, solution, architecture, decisions,
 * challenges, impact, reflection — is deliberately the same for every project,
 * because a reader comparing two case studies should not have to relearn the
 * layout. Named fields make that order a compile-time guarantee.
 *
 * Every field is optional so a project can exist as a routable stub before its
 * story is written; the layout renders only what is present.
 */
export interface CaseStudy {
  readonly overview?: CaseStudySection
  readonly problem?: CaseStudySection
  readonly solution?: CaseStudySection
  readonly architecture?: CaseStudySection
  readonly decisions?: readonly EngineeringDecision[]
  readonly challenges?: readonly Challenge[]
  readonly impact?: readonly ImpactMetric[]
  readonly technology?: readonly Technology[]
  readonly gallery?: readonly GalleryItem[]
  readonly links?: readonly ProjectLink[]
  readonly reflection?: CaseStudySection
}

/* -------------------------------------------------------------------------- */
/* Project                                                                    */
/* -------------------------------------------------------------------------- */

export type ProjectStatus = 'shipped' | 'in-progress' | 'archived'

/**
 * A featured project — one that has its own case study route at
 * `/work/<slug>`.
 *
 * `slug` doubles as the URL segment and the identity key, so it must be
 * URL-safe and stable; changing one breaks an indexed URL.
 */
export interface Project {
  readonly slug: string
  readonly title: string
  /** One-line positioning statement. Rendered on cards and in metadata. */
  readonly summary?: string
  /** Longer standfirst for the case study hero. */
  readonly description?: string
  readonly year?: number
  readonly role?: string
  readonly status?: ProjectStatus
  /** Short tags for the card footer. Distinct from `caseStudy.technology`. */
  readonly stack?: readonly string[]
  readonly cover?: GalleryItem
  /** Controls ordering on `/work`. Lower sorts first. */
  readonly order?: number
  readonly caseStudy?: CaseStudy
}

/**
 * A project without a case study, listed on `/work/other-projects`.
 *
 * Structurally a `Project` minus the narrative — modelled separately rather
 * than as `Partial<Project>` so the absence of a case study is expressed in
 * the type rather than left to convention.
 */
export interface OtherProject {
  readonly name: string
  readonly summary?: string
  readonly year?: number
  readonly stack?: readonly string[]
  readonly href?: string
}

/* -------------------------------------------------------------------------- */
/* Experience                                                                 */
/* -------------------------------------------------------------------------- */

/**
 * Dates are ISO strings (`'2024-06'` or `'2024-06-01'`), not `Date` objects.
 * A `Date` in a module-scope literal is constructed at import time, is not
 * serialisable across the server/client boundary, and cannot appear in an
 * `as const` expression.
 *
 * `end` absent means the role is current.
 */
export interface Experience {
  readonly company: string
  readonly role: string
  readonly start: string
  readonly end?: string
  readonly location?: string
  readonly summary?: string
  readonly highlights?: readonly string[]
  readonly stack?: readonly string[]
  readonly href?: string
}

/* -------------------------------------------------------------------------- */
/* Skills, credentials, achievements                                          */
/* -------------------------------------------------------------------------- */

export interface Skill {
  readonly name: string
  readonly detail?: string
}

export interface SkillGroup {
  readonly title: string
  readonly summary?: string
  readonly skills: readonly Skill[]
}

export interface Certification {
  readonly title: string
  readonly issuer: string
  readonly issued?: string
  readonly credentialId?: string
  readonly href?: string
}

export interface Achievement {
  readonly title: string
  readonly detail?: string
  readonly date?: string
  readonly href?: string
}

/* -------------------------------------------------------------------------- */
/* Timeline                                                                   */
/* -------------------------------------------------------------------------- */

export type TimelineKind = 'experience' | 'education' | 'project' | 'achievement'

/**
 * A single dated entry on the About page timeline.
 *
 * Deliberately not derived from `Experience` — the timeline interleaves roles,
 * education and milestones, so it needs its own flat shape with a `kind`
 * discriminator the renderer can style on.
 */
export interface TimelineEntry {
  readonly kind: TimelineKind
  readonly title: string
  readonly subtitle?: string
  readonly start: string
  readonly end?: string
  readonly description?: string
}

/* -------------------------------------------------------------------------- */
/* Social links                                                               */
/* -------------------------------------------------------------------------- */

export type SocialPlatform = 'github' | 'linkedin' | 'email' | 'x' | 'website'

export interface SocialLink {
  readonly platform: SocialPlatform
  /** Accessible name. Icon-only links have no text content to be named by. */
  readonly label: string
  readonly href: string
}
