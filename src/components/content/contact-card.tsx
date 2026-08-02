import type { ReactNode } from 'react'
import { Card } from '@/components/ui/card'
import { Heading, Text } from '@/components/ui/typography'
import { cn } from '@/lib/cn'

/**
 * CONTACT CARD
 * ----------------------------------------------------------------------------
 * A single contact channel — email, a scheduling link, a social profile.
 *
 * WHY THIS DOES NOT USE `ProjectCard`'s OVERLAY PATTERN
 * A contact card may hold more than one action (an address to read plus a link
 * to open), and the stretched overlay covers everything beneath it. Actions go
 * in a slot and remain individually focusable.
 *
 * Structural only.
 */

export interface ContactCardProps {
  title: string
  description?: string
  /** Links or buttons. Each stays independently focusable. */
  action?: ReactNode
  className?: string
}

export function ContactCard({ title, description, action, className }: ContactCardProps) {
  return (
    <Card as="article" variant="outline" className={cn('flex flex-col gap-1', className)}>
      <Heading as="h3" variant="h5">
        {title}
      </Heading>

      {description ? (
        <Text variant="sm" measure="sm">
          {description}
        </Text>
      ) : null}

      {action ? <div className="mt-auto flex flex-wrap gap-1 pt-1">{action}</div> : null}
    </Card>
  )
}
