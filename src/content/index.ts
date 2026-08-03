/**
 * CONTENT BARREL
 * ----------------------------------------------------------------------------
 * The content layer's public surface.
 *
 * LAYERING RULE
 * `src/content` imports nothing from `src/config`. The dependency runs one way:
 *
 *     src/content   →  (nothing)
 *     src/config    →  may import src/content
 *     src/app, src/components  →  may import both
 *
 * `src/config/routes.ts` derives the case study slugs from this module, so a
 * reverse import would create a cycle.
 */

export type {
  Achievement,
  CaseStudy,
  CaseStudySection,
  Certification,
  Challenge,
  EngineeringDecision,
  Experience,
  GalleryItem,
  ImpactMetric,
  OtherProject,
  Project,
  ProjectLink,
  ProjectLinkKind,
  ProjectStatus,
  Skill,
  SkillGroup,
  SocialLink,
  SocialPlatform,
  Technology,
  TimelineEntry,
  TimelineKind,
} from './types'

export {
  getProjectBySlug,
  isProjectSlug,
  orderedProjects,
  otherProjects,
  projectLink,
  projectSlugs,
  projects,
  type ProjectSlug,
} from './projects'

export { experience, getCurrentRole } from './experience'
export { skillGroups } from './skills'
export { achievements, certifications } from './achievements'
export { timeline } from './timeline'
export { socialLinks } from './socials'
