import type { ReactNode } from 'react'
import { Heading, Text } from '@/components/ui/typography'
import { cn } from '@/lib/cn'

/**
 * CTA
 * ----------------------------------------------------------------------------
 * A closing call to action — the block that ends a page by pointing somewhere.
 *
 * `actions` is a slot rather than a `href`/`label` pair because the terminal
 * block on different pages needs different affordances: one button on a case
 * study, a button plus social links on About. A slot absorbs that without
 * growing a variant prop per page.
 *
 * Centred rather than left-aligned, unlike every other block on the site. The
 * asymmetry is the point: after a page of left-ranged editorial text, a centred
 * closing block reads as a deliberate full stop rather than one more paragraph.
 */

export interface CTAProps {
  title: string
  description?: string
  /** Buttons or links. */
  actions?: ReactNode
  className?: string
  id?: string
}

export function CTA({ title, description, actions, className, id }: CTAProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-3 py-8 text-center md:py-12',
        className,
      )}
    >
      <Heading as="h2" variant="display-md" id={id} align="center">
        {title}
      </Heading>

      {description ? (
        <Text variant="lead" measure="md" align="center">
          {description}
        </Text>
      ) : null}

      {actions ? (
        <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
          {actions}
        </div>
      ) : null}
    </div>
  )
}
