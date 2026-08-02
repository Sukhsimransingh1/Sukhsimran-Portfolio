import type { ReactNode } from 'react'
import { Heading, Text } from '@/components/ui/typography'
import { cn } from '@/lib/cn'

/**
 * PAGE HEADER
 * ----------------------------------------------------------------------------
 * The opening block of a top-level page — eyebrow, title, standfirst.
 *
 * WHY THE HEADING CARRIES AN `id`
 * `Section` exposes a `labelledBy` prop so a section becomes a named landmark.
 * That only works if the heading it points at has a stable `id`, so this
 * component takes one rather than generating it — a generated id would change
 * between server and client render and break the association.
 *
 * Renders `h1` by default: a page has exactly one, and it is this one.
 *
 * Structural only — type scale and spacing are later-phase decisions.
 */

export interface PageHeaderProps {
  title: string
  /** Small label above the title — section name, category, or index. */
  eyebrow?: string
  /** Standfirst beneath the title. */
  description?: string
  /** Trailing slot — actions, metadata, breadcrumbs. */
  children?: ReactNode
  className?: string
  id?: string
  as?: 'h1' | 'h2'
}

export function PageHeader({
  title,
  eyebrow,
  description,
  children,
  className,
  id,
  as = 'h1',
}: PageHeaderProps) {
  return (
    <header className={cn('flex flex-col gap-2', className)}>
      {eyebrow ? (
        <Text variant="overline" color="tertiary">
          {eyebrow}
        </Text>
      ) : null}

      <Heading as={as} variant="display-md" id={id}>
        {title}
      </Heading>

      {description ? (
        <Text variant="lead" measure="md">
          {description}
        </Text>
      ) : null}

      {children}
    </header>
  )
}
