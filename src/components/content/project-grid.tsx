import { Stagger, StaggerItem } from '@/animations'
import { ProjectCard } from '@/components/cards/project-card'
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
 * by design.
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

export function ProjectGrid({ projects, className, columns = 2 }: ProjectGridProps) {
  return (
    <Stagger
      as="ul"
      className={cn(gridVariants({ cols: columns, gap: 'lg' }), className)}
    >
      {projects.map((project) => (
        <StaggerItem key={project.slug} as="li" className="flex">
          <ProjectCard
            href={caseStudyPath(project.slug)}
            title={project.title}
            className="w-full"
            eyebrow={
              project.year ? (
                <Text as="span" variant="overline" color="tertiary">
                  {project.year}
                </Text>
              ) : null
            }
            footer={project.stack?.map((item) => (
              <Badge key={item} variant="outline" size="sm">
                {item}
              </Badge>
            ))}
          >
            {project.summary ? <Text variant="sm">{project.summary}</Text> : null}
          </ProjectCard>
        </StaggerItem>
      ))}
    </Stagger>
  )
}
