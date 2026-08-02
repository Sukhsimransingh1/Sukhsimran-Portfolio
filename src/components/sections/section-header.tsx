import type { ReactNode } from 'react'
import { Heading, Text } from '@/components/ui/typography'
import { cn } from '@/lib/cn'

/**
 * SECTION HEADER
 * ----------------------------------------------------------------------------
 * The opening block of a section within a page. Distinct from `PageHeader`:
 * this renders `h2` and sits at a smaller type scale, because a page has one
 * title and many sections.
 *
 * `id` exists so the parent `Section` can reference it via `labelledBy`, making
 * the section a navigable landmark.
 *
 * No motion of its own. Section headers appear below the fold, so the call site
 * wraps this in a `Reveal` — putting a scroll trigger inside the component would
 * force every consumer into a client boundary it may not want.
 */

export interface SectionHeaderProps {
  title: string
  eyebrow?: string
  description?: string
  /** Trailing slot — typically a "view all" link. */
  action?: ReactNode
  className?: string
  id?: string
  as?: 'h2' | 'h3'
}

export function SectionHeader({
  title,
  eyebrow,
  description,
  action,
  className,
  id,
  as = 'h2',
}: SectionHeaderProps) {
  return (
    <header className={cn('flex flex-col gap-2', className)}>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="gap-0-5 flex flex-col">
          {eyebrow ? (
            <Text variant="overline" color="tertiary">
              {eyebrow}
            </Text>
          ) : null}

          <Heading as={as} variant="h2" id={id}>
            {title}
          </Heading>
        </div>

        {action}
      </div>

      {description ? (
        <Text variant="base" measure="md">
          {description}
        </Text>
      ) : null}
    </header>
  )
}
