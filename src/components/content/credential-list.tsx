import { ArrowUpRight } from 'lucide-react'

import { Text } from '@/components/ui/typography'
import type { Achievement, Certification } from '@/content/types'
import { cn } from '@/lib/cn'

/**
 * CREDENTIAL LIST
 * ----------------------------------------------------------------------------
 * Achievements and certifications share one rendering: a rule-separated list of
 * titled rows with a secondary line and an optional outbound link.
 *
 * WHY ONE COMPONENT FOR TWO TYPES
 * They are typed separately in the content layer because a certification has an
 * issuer and a credential ID and an achievement does not — that distinction is
 * real and worth keeping in the data. Visually they are the same object, so the
 * caller normalises to `CredentialItem` at the boundary rather than the
 * component branching on a discriminator it would otherwise need.
 *
 * The whole row is the link target when `href` is present; rows without one
 * render as plain markup with no dead affordance.
 */

export interface CredentialItem {
  readonly title: string
  /** Issuer, date, or any secondary line. */
  readonly meta?: string
  readonly href?: string
}

export interface CredentialListProps {
  items: readonly CredentialItem[]
  className?: string
}

/** Normalises a `Certification` into the shared row shape. */
export function certificationToItem(certification: Certification): CredentialItem {
  const meta = [certification.issuer, certification.issued].filter(Boolean).join(' · ')
  return {
    title: certification.title,
    ...(meta ? { meta } : {}),
    ...(certification.href ? { href: certification.href } : {}),
  }
}

/** Normalises an `Achievement` into the shared row shape. */
export function achievementToItem(achievement: Achievement): CredentialItem {
  const meta = [achievement.detail, achievement.date].filter(Boolean).join(' · ')
  return {
    title: achievement.title,
    ...(meta ? { meta } : {}),
    ...(achievement.href ? { href: achievement.href } : {}),
  }
}

function Row({ item }: { item: CredentialItem }) {
  const content = (
    <>
      <span className="gap-0-5 flex min-w-0 flex-col">
        <Text as="span" variant="base" color="primary" weight="medium">
          {item.title}
        </Text>
        {item.meta ? (
          <Text as="span" variant="sm" color="muted">
            {item.meta}
          </Text>
        ) : null}
      </span>
      {item.href ? (
        <ArrowUpRight
          aria-hidden="true"
          className={cn(
            'text-content-muted size-2 shrink-0',
            'duration-fast ease-out transition-transform',
            'group-hover:-translate-y-px group-hover:translate-x-px',
          )}
        />
      ) : null}
    </>
  )

  if (!item.href) {
    return <div className="flex items-start justify-between gap-2 py-3">{content}</div>
  }

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group flex items-start justify-between gap-2 py-3',
        'duration-fast ease-out transition-colors',
        'hover:text-content-accent',
      )}
    >
      {content}
    </a>
  )
}

export function CredentialList({ items, className }: CredentialListProps) {
  return (
    <ul className={cn('flex flex-col', className)}>
      {items.map((item) => (
        <li key={item.title} className="border-border border-t last:border-b">
          <Row item={item} />
        </li>
      ))}
    </ul>
  )
}
