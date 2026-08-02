import { ProjectCard } from '@/components/cards/project-card'
import { Grid } from '@/components/layout/grid'
import { Badge } from '@/components/ui/badge'
import { Text } from '@/components/ui/typography'
import { caseStudyPath } from '@/config/routes'
import type { Project } from '@/content/types'

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
 * Structural only — column counts and responsive behaviour are later-phase
 * decisions.
 */

export interface ProjectGridProps {
  projects: readonly Project[]
  className?: string
  /** Columns at the widest breakpoint. */
  columns?: 1 | 2 | 3
}

export function ProjectGrid({ projects, className, columns = 2 }: ProjectGridProps) {
  return (
    <Grid cols={columns} gap="lg" className={className}>
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          href={caseStudyPath(project.slug)}
          title={project.title}
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
      ))}
    </Grid>
  )
}
