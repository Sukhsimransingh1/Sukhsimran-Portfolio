import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
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
 * The `actions` slot below is the sanctioned way to do that — it raises itself
 * to `z-sticky` (20) against the overlay's `z-raised` (10), so the buttons stay
 * clickable while the rest of the card still routes to the case study.
 *
 * THE ARROW IS NOT A BUTTON. It sits in the title row as a static glyph that
 * responds to `group-hover`, so it reads as "this card goes somewhere" without
 * becoming a second tab stop competing with the overlay link.
 */

export interface ProjectCardProps {
  href: string
  /** Accessible name for the card's link. */
  title: string
  children?: ReactNode
  className?: string
  /** Rendered above the title — eyebrow, index, or year. */
  eyebrow?: ReactNode
  /** Rendered below the body — tags, metadata. Must not be interactive. */
  footer?: ReactNode
  /**
   * Interactive slot beneath the footer — repository and demo links.
   *
   * Raised above the overlay so its contents remain clickable and focusable.
   * Rendered only when supplied, so a project with no links has no empty rule.
   */
  actions?: ReactNode
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
  actions,
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

      <div className="flex flex-1 flex-col gap-2 p-5 md:p-6">
        {eyebrow ? (
          <div className="flex items-center gap-2">{eyebrow}</div>
        ) : null}

        <div className="flex items-start justify-between gap-3">
          <h3
            className={cn(
              'font-display tracking-snug text-content-primary text-2xl leading-snug font-semibold text-balance',
              'duration-base transition-colors ease-out',
              'group-hover:text-content-accent',
            )}
          >
            <Link
              href={href}
              // The overlay. `z-raised` keeps it above the card's own background
              // without escaping the card's stacking context.
              className="after:z-raised after:absolute after:inset-0 after:content-['']"
            >
              {title}
            </Link>
          </h3>

          <ArrowUpRight
            aria-hidden="true"
            className={cn(
              'text-content-muted mt-1 size-2 shrink-0',
              'duration-base ease-out transition-[transform,color]',
              'group-hover:text-content-accent group-hover:-translate-y-px group-hover:translate-x-px',
            )}
          />
        </div>

        {children ? <div className="flex-1">{children}</div> : null}

        {footer ? (
          <div
            className={cn(
              'border-border mt-auto flex flex-wrap items-center gap-1',
              'border-t pt-3',
            )}
          >
            {footer}
          </div>
        ) : null}

        {actions ? (
          // `relative` establishes the positioning context and `z-sticky` lifts
          // it clear of the title link's `z-raised` overlay — without both, the
          // overlay swallows every click landing on these controls.
          <div className="z-sticky relative mt-3 flex flex-wrap items-center gap-1">
            {actions}
          </div>
        ) : null}
      </div>
    </Card>
  )
}
