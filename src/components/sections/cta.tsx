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
 * Structural only.
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
    <div className={cn('flex flex-col items-start gap-3', className)}>
      <Heading as="h2" variant="h1" id={id}>
        {title}
      </Heading>

      {description ? (
        <Text variant="lead" measure="md">
          {description}
        </Text>
      ) : null}

      {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
    </div>
  )
}
