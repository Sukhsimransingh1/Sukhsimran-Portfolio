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
 * `focus-within` rather than `hover` alone for the border: the actions inside
 * are the only focusable elements, so keyboard users need the container itself
 * to acknowledge that focus has entered it.
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
    <Card
      as="article"
      variant="outline"
      padding="lg"
      className={cn(
        'flex h-full flex-col gap-1',
        'duration-base transition-colors ease-out',
        'hover:border-border-interactive focus-within:border-border-interactive',
        className,
      )}
    >
      <Heading as="h3" variant="h5">
        {title}
      </Heading>

      {description ? (
        <Text variant="sm" measure="sm">
          {description}
        </Text>
      ) : null}

      {action ? <div className="mt-auto flex flex-wrap gap-2 pt-3">{action}</div> : null}
    </Card>
  )
}
