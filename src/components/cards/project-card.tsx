import Link from 'next/link'
import type { ReactNode } from 'react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/cn'

/**
 * PROJECT CARD
 * ----------------------------------------------------------------------------
 * Entry point to a case study.
 *
 * THE OVERLAY-LINK PATTERN, AND WHY
 * The whole card is clickable, but only the title is a real link. A stretched
 * pseudo-element (`after:absolute after:inset-0`) expands that single anchor's
 * hit area to cover the card.
 *
 * The alternatives are worse:
 *   • Wrapping the card in an `<a>` — the accessible name becomes every word
 *     inside it, so a screen reader announces the title, the description, and
 *     each tag as one run-on link.
 *   • An onClick on the card — not focusable, not keyboard-operable, no
 *     middle-click, no "open in new tab".
 *
 * With the overlay: one link, named by the title, full-card hit area, and every
 * native anchor behaviour preserved.
 *
 * CONSTRAINT: no other interactive element may sit inside the card, because the
 * overlay would cover it. Anything that needs its own action requires
 * `position: relative` and a higher stacking context to sit above the overlay.
 *
 * Structural only — content arrives in a later phase.
 */

export interface ProjectCardProps {
  href: string
  /** Accessible name for the card's link. */
  title: string
  children?: ReactNode
  className?: string
  /** Rendered above the title — eyebrow, index, or year. */
  eyebrow?: ReactNode
  /** Rendered below the body — tags, metadata. */
  footer?: ReactNode
  /** Media slot. Sits outside the padded region. */
  media?: ReactNode
}

export function ProjectCard({
  href,
  title,
  children,
  className,
  eyebrow,
  footer,
  media,
}: ProjectCardProps) {
  return (
    <Card
      as="article"
      variant="outline"
      padding="none"
      interactive
      className={cn('group flex flex-col overflow-hidden', className)}
    >
      {media ? <div className="relative overflow-hidden">{media}</div> : null}

      <div className="flex flex-1 flex-col gap-2 p-4">
        {eyebrow ? <div className="flex items-center gap-1">{eyebrow}</div> : null}

        <h3 className="font-display tracking-snug text-content-primary text-xl leading-snug font-semibold">
          <Link
            href={href}
            // The overlay. `z-raised` keeps it above the card's own background
            // without escaping the card's stacking context.
            className="after:z-raised after:absolute after:inset-0 after:content-['']"
          >
            {title}
          </Link>
        </h3>

        {children ? <div className="flex-1">{children}</div> : null}

        {footer ? (
          <div className="mt-auto flex flex-wrap items-center gap-1 pt-1">{footer}</div>
        ) : null}
      </div>
    </Card>
  )
}
