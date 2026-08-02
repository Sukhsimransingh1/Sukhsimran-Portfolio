import { Badge } from '@/components/ui/badge'
import { Heading, Text } from '@/components/ui/typography'
import type { Project } from '@/content/types'
import { cn } from '@/lib/cn'

/**
 * CASE STUDY HERO
 * ----------------------------------------------------------------------------
 * The opening of a case study: title, standfirst, and the metadata that
 * establishes context before the narrative starts — role, year, stack.
 *
 * WHY IT TAKES A WHOLE `Project` RATHER THAN LOOSE PROPS
 * Every field it renders comes from the same record, and each is optional. As
 * discrete props that would be seven optional parameters at the call site, all
 * threaded from one object the caller already has.
 *
 * Every field below is optional on `Project`, so this renders correctly for a
 * project that is still an identity-only stub.
 *
 * Structural only.
 */

export interface CaseStudyHeroProps {
  project: Project
  className?: string
  /** `id` of the title, so the surrounding section can be a named landmark. */
  id?: string
}

export function CaseStudyHero({ project, className, id }: CaseStudyHeroProps) {
  const { title, description, summary, role, year, stack } = project
  const standfirst = description ?? summary

  return (
    <header className={cn('flex flex-col gap-3', className)}>
      <Heading as="h1" variant="display-lg" id={id}>
        {title}
      </Heading>

      {standfirst ? (
        <Text variant="lead" measure="md">
          {standfirst}
        </Text>
      ) : null}

      {role || year ? (
        <dl className="flex flex-wrap gap-4">
          {role ? (
            <div className="flex flex-col gap-0-5">
              <dt>
                <Text as="span" variant="overline" color="tertiary">
                  Role
                </Text>
              </dt>
              <dd>
                <Text as="span" variant="sm" color="primary">
                  {role}
                </Text>
              </dd>
            </div>
          ) : null}

          {year ? (
            <div className="flex flex-col gap-0-5">
              <dt>
                <Text as="span" variant="overline" color="tertiary">
                  Year
                </Text>
              </dt>
              <dd>
                <Text as="span" variant="sm" color="primary">
                  {year}
                </Text>
              </dd>
            </div>
          ) : null}
        </dl>
      ) : null}

      {stack && stack.length > 0 ? (
        <ul className="flex flex-wrap gap-1">
          {stack.map((item) => (
            <li key={item}>
              <Badge variant="outline" size="sm">
                {item}
              </Badge>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  )
}
