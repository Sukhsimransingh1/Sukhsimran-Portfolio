import type { ReactNode } from 'react'

import { ProjectActions } from '@/components/content/project-actions'
import { Badge } from '@/components/ui/badge'
import { Heading, Text } from '@/components/ui/typography'
import type { Project } from '@/content/types'
import { cn } from '@/lib/cn'

/**
 * CASE STUDY HERO
 * ----------------------------------------------------------------------------
 * The masthead of a case study: title, standfirst, and the metadata that
 * establishes context before the narrative starts.
 *
 * WHY IT TAKES A WHOLE `Project` RATHER THAN LOOSE PROPS
 * Every field it renders comes from the same record, and each is optional. As
 * discrete props that would be seven optional parameters at the call site, all
 * threaded from one object the caller already has.
 *
 * The metadata sits beneath a rule as a specification block rather than inline,
 * so a reader can scan role/year/status without entering the prose.
 *
 * REPOSITORY AND DEMO ACTIONS SIT HERE, NOT ONLY AT THE FOOT OF THE PAGE.
 * `CaseStudyLayout` already renders a `Links` block, but that is the end of a
 * long read. A visitor who arrives wanting the code should not have to scroll
 * the whole narrative to find it. `ProjectActions` renders nothing when neither
 * URL exists, so this costs no space on projects that have none.
 *
 * Every field is optional on `Project`, so this renders correctly for a project
 * that is still an identity-only stub.
 */

export interface CaseStudyHeroProps {
  project: Project
  className?: string
  /** `id` of the title, so the surrounding section can be a named landmark. */
  id?: string
}

const STATUS_LABEL: Record<NonNullable<Project['status']>, string> = {
  shipped: 'Shipped',
  'in-progress': 'In progress',
  archived: 'Archived',
}

/** One cell of the specification block. */
function SpecItem({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="gap-0-5 flex flex-col">
      <dt>
        <Text as="span" variant="overline" color="muted">
          {label}
        </Text>
      </dt>
      <dd>
        <Text as="span" variant="sm" color="primary" weight="medium">
          {children}
        </Text>
      </dd>
    </div>
  )
}

export function CaseStudyHero({ project, className, id }: CaseStudyHeroProps) {
  const { title, description, summary, role, year, status, stack } = project
  const standfirst = description ?? summary
  const hasSpec = Boolean(role || year || status)

  return (
    <header className={cn('flex flex-col', className)}>
      <Heading as="h1" variant="display-lg" id={id} className="max-w-[var(--measure-md)]">
        {title}
      </Heading>

      {standfirst ? (
        <Text variant="lead" measure="sm" className="mt-3">
          {standfirst}
        </Text>
      ) : null}

      {hasSpec ? (
        <dl
          className={cn(
            'border-border mt-8 grid grid-cols-2 gap-4 border-t pt-4',
            'sm:flex sm:flex-wrap sm:gap-8',
          )}
        >
          {role ? <SpecItem label="Role">{role}</SpecItem> : null}
          {year ? (
            <SpecItem label="Year">
              <span className="tnum">{year}</span>
            </SpecItem>
          ) : null}
          {status ? <SpecItem label="Status">{STATUS_LABEL[status]}</SpecItem> : null}
        </dl>
      ) : null}

      {stack && stack.length > 0 ? (
        <ul className={cn('flex flex-wrap gap-1', hasSpec ? 'mt-4' : 'mt-8')}>
          {stack.map((item) => (
            <li key={item}>
              <Badge variant="outline" size="sm">
                {item}
              </Badge>
            </li>
          ))}
        </ul>
      ) : null}

      <ProjectActions project={project} size="base" className="mt-6" />
    </header>
  )
}
