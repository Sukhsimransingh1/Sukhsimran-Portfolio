import { ArrowUpRight, ExternalLink } from 'lucide-react'
import type { ComponentProps } from 'react'

import { Button } from '@/components/ui/button'
import { projectLink } from '@/content/projects'
import type { Project } from '@/content/types'
import { cn } from '@/lib/cn'

/**
 * PROJECT ACTIONS
 * ----------------------------------------------------------------------------
 * Repository and live-demo buttons for a project.
 *
 * WHY ONE COMPONENT SHARED BY THE CARD AND THE CASE STUDY HERO
 * Both surfaces answer the same question — "can I see the code, can I try it" —
 * and both must answer it identically or the card promises an action the case
 * study appears to lack. Sharing the component means the label wording, the
 * icon, the external-link semantics and the empty case are decided once.
 *
 * EVERY BUTTON IS CONDITIONAL, AND THE COMPONENT ITSELF RETURNS `null` WHEN
 * NEITHER LINK EXISTS. A project with no recorded URLs renders no empty row and
 * no disabled button — a disabled action is a promise the page cannot keep, and
 * it still occupies the tab order to say so.
 *
 * Links are read through `projectLink`, so the storage decision (they live on
 * `caseStudy.links`) stays in the content layer.
 *
 * `rel="noopener noreferrer"` on both: `noopener` severs the `window.opener`
 * reference the new tab would otherwise hold over this one.
 */

export interface ProjectActionsProps {
  project: Project
  className?: string
  /** `sm` on cards where the actions are secondary to the title link. */
  size?: ComponentProps<typeof Button>['size']
}

/**
 * Whether a project has any outbound link worth rendering an actions slot for.
 *
 * Callers need this because `<ProjectActions />` returning `null` is still a
 * truthy React element — a parent testing `actions ? <div>…</div> : null` would
 * render an empty bordered row around nothing. Testing the data instead of the
 * element is the only way to make the slot genuinely disappear.
 */
export function hasProjectLinks(project: Project): boolean {
  return Boolean(projectLink(project, 'repository') ?? projectLink(project, 'demo'))
}

export function ProjectActions({ project, className, size = 'sm' }: ProjectActionsProps) {
  const repository = projectLink(project, 'repository')
  const demo = projectLink(project, 'demo')

  if (!repository && !demo) return null

  return (
    <div className={cn('flex flex-wrap items-center gap-1', className)}>
      {repository ? (
        <Button asChild variant="outline" size={size}>
          <a href={repository.href} target="_blank" rel="noopener noreferrer">
            {repository.label}
            <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
      ) : null}

      {demo ? (
        <Button asChild variant="outline" size={size}>
          <a href={demo.href} target="_blank" rel="noopener noreferrer">
            {demo.label}
            <ExternalLink aria-hidden="true" />
          </a>
        </Button>
      ) : null}
    </div>
  )
}
