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
 * Structural only.
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
    <header className={cn('flex flex-col gap-1', className)}>
      {eyebrow ? (
        <Text variant="overline" color="tertiary">
          {eyebrow}
        </Text>
      ) : null}

      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <Heading as={as} variant="h2" id={id}>
          {title}
        </Heading>

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
