import { Stagger, StaggerItem } from '@/animations'
import { ProjectCard } from '@/components/cards/project-card'
import { ProjectActions, hasProjectLinks } from '@/components/content/project-actions'
import { gridVariants } from '@/components/layout/grid'
import { Badge } from '@/components/ui/badge'
import { Text } from '@/components/ui/typography'
import { caseStudyPath } from '@/config/routes'
import type { Project } from '@/content/types'
import { cn } from '@/lib/cn'

/**
 * PROJECT GRID
 * ----------------------------------------------------------------------------
 * Maps projects onto `ProjectCard`.
 *
 * WHY THIS IS A WRAPPER AND NOT A NEW CARD
 * `ProjectCard` already owns the hard part — the stretched overlay link that
 * makes the whole card clickable while keeping a single correctly-named anchor.
 * A second card component would duplicate that pattern and inevitably diverge
 * from it. This component owns only the mapping: which fields go into which
 * slot, and the grid geometry around them.
 *
 * CONSTRAINT INHERITED FROM `ProjectCard`
 * The overlay link covers the card, so nothing rendered into `footer` may be
 * interactive. Stack entries are therefore `Badge`s, which are non-interactive
 * by design. Repository and demo links go into the `actions` slot instead,
 * which raises itself above the overlay for exactly this reason.
 *
 * `ProjectActions` returns `null` when a project has neither URL recorded, so
 * the card simply ends at its stack rather than showing an empty control row.
 *
 * WHY THE STACK IS TRUNCATED
 * Several projects carry seven or eight technologies. Rendered in full they wrap
 * to three lines and become the visual centre of the card, which inverts the
 * hierarchy — the tags end up louder than the title. Four plus a count keeps the
 * signal ("this is a Python/FastAPI system") without the noise, and the full
 * list is one click away in the case study's technology block.
 *
 * WHY `Stagger` IS THE GRID RATHER THAN A WRAPPER AROUND IT
 * A `Reveal` per card gives every card the same delay, so they all arrive
 * together and the effect reads as a single block fading in. `Stagger` holds one
 * parent variant state and the children inherit their offset from position,
 * which is what produces the cascade. It renders the `<ul>` and takes the grid
 * classes directly from `gridVariants` — an extra wrapping element between the
 * grid container and its items would break the grid, since only direct children
 * of a grid participate in it.
 */

export interface ProjectGridProps {
  projects: readonly Project[]
  className?: string
  /** Columns at the widest breakpoint. */
  columns?: 1 | 2 | 3
}

/** Tags shown before the remainder collapses into a count. */
const STACK_LIMIT = 4

export function ProjectGrid({ projects, className, columns = 2 }: ProjectGridProps) {
  return (
    <Stagger
      as="ul"
      gap="loose"
      className={cn(gridVariants({ cols: columns, gap: 'lg' }), className)}
    >
      {projects.map((project, index) => {
        const stack = project.stack ?? []
        const shown = stack.slice(0, STACK_LIMIT)
        const remainder = stack.length - shown.length

        return (
          <StaggerItem key={project.slug} as="li" className="flex">
            <ProjectCard
              href={caseStudyPath(project.slug)}
              title={project.title}
              className="w-full"
              eyebrow={
                <>
                  {/* A quiet ordinal in place of the absent year — the card
                      still needs something above the title to anchor it, and a
                      position in the set is true where a date is not known. */}
                  <Text as="span" variant="overline" color="muted" className="tnum">
                    {String(index + 1).padStart(2, '0')}
                  </Text>
                  {project.year ? (
                    <Text as="span" variant="overline" color="tertiary" className="tnum">
                      {project.year}
                    </Text>
                  ) : null}
                </>
              }
              footer={
                <>
                  {shown.map((item) => (
                    <Badge key={item} variant="outline" size="sm">
                      {item}
                    </Badge>
                  ))}
                  {remainder > 0 ? (
                    <Text as="span" variant="caption" color="muted" className="tnum">
                      +{remainder}
                    </Text>
                  ) : null}
                </>
              }
              actions={
                hasProjectLinks(project) ? <ProjectActions project={project} /> : null
              }
            >
              {project.summary ? (
                <Text variant="base" color="primary" measure="sm">
                  {project.summary}
                </Text>
              ) : null}
              {project.description ? (
                <Text variant="sm" measure="sm" className="mt-1">
                  {project.description}
                </Text>
              ) : null}
            </ProjectCard>
          </StaggerItem>
        )
      })}
    </Stagger>
  )
}
