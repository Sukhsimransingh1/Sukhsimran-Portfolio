import Link from 'next/link'
import { Fragment } from 'react'
import { cn } from '@/lib/cn'

/**
 * BREADCRUMB
 * ----------------------------------------------------------------------------
 * Trail from the site root to the current page. Used on case studies, where a
 * reader arriving from search has no other signal about where they are.
 *
 * ACCESSIBILITY
 *   • `<nav aria-label="Breadcrumb">` — names the landmark so it is
 *     distinguishable from the header's "Main" nav.
 *   • An ordered list, because the sequence is the meaning.
 *   • The final crumb is not a link — it points at the current page, and a link
 *     to where you already are is a dead control. It carries
 *     `aria-current="page"` instead.
 *   • Separators are `aria-hidden`: a screen reader announcing "slash" between
 *     every crumb is noise, and the list structure already conveys the nesting.
 *
 * Structural only — separator glyph and truncation are later-phase decisions.
 */

export interface BreadcrumbItem {
  readonly label: string
  /** Omitted on the final crumb, which represents the current page. */
  readonly href?: string
}

export interface BreadcrumbProps {
  items: readonly BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className={cn('flex flex-wrap items-center gap-1')}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <Fragment key={item.label}>
              <li>
                {item.href && !isLast ? (
                  <Link href={item.href} className="font-sans text-sm">
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="font-sans text-sm">
                    {item.label}
                  </span>
                )}
              </li>

              {isLast ? null : (
                <li aria-hidden className="font-sans text-sm">
                  /
                </li>
              )}
            </Fragment>
          )
        })}
      </ol>
    </nav>
  )
}
