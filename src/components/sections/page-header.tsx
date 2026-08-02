import type { ReactNode } from 'react'
import { AnimatedHeading, Reveal } from '@/animations'
import { Text } from '@/components/ui/typography'
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
 * MOTION
 * The title uses `AnimatedHeading` with `immediate`, because a page header is
 * always above the fold — a scroll-triggered reveal here either fires on mount
 * anyway or leaves the title invisible if the observer resolves late. The
 * eyebrow and standfirst follow on a short offset so the block reads
 * top-to-bottom rather than arriving at once.
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
        <Reveal immediate variant="fade">
          <Text variant="overline" color="tertiary">
            {eyebrow}
          </Text>
        </Reveal>
      ) : null}

      <AnimatedHeading
        immediate
        as={as}
        id={id}
        text={title}
        delay={0.06}
        className="font-display text-content-primary text-4xl leading-tight font-semibold tracking-tight text-balance"
      />

      {description ? (
        <Reveal immediate delay={0.2}>
          <Text variant="lead" measure="md">
            {description}
          </Text>
        </Reveal>
      ) : null}

      {children ? (
        <Reveal immediate delay={0.3}>
          {children}
        </Reveal>
      ) : null}
    </header>
  )
}
