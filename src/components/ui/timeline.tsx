import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

/**
 * TIMELINE
 * ----------------------------------------------------------------------------
 * Chronological sequence — experience, project phases.
 *
 * SEMANTICS: renders `<ol>`, not a stack of `<div>`s. The order *is* the
 * meaning here, and an ordered list communicates that to assistive tech, which
 * announces position and count ("item 2 of 5"). A div stack conveys none of it.
 *
 * The connecting rail is drawn with a pseudo-element on each item rather than a
 * single absolutely-positioned line, so it terminates naturally at the last
 * item without needing to measure the list.
 *
 * Structural only — no content, per the current phase.
 */

export interface TimelineProps {
  children: ReactNode
  className?: string
}

export function Timeline({ children, className }: TimelineProps) {
  return <ol className={cn('relative flex flex-col', className)}>{children}</ol>
}

export interface TimelineItemProps {
  children: ReactNode
  className?: string
  /** Suppresses the connecting rail on the final item. */
  isLast?: boolean
}

export function TimelineItem({ children, className, isLast = false }: TimelineItemProps) {
  return (
    <li
      className={cn(
        'relative flex gap-3 pb-6 last:pb-0',
        // The rail: a 1px vertical border on the marker column, drawn by the
        // item itself so it stops cleanly at the last entry.
        !isLast &&
          'before:bg-border before:absolute before:top-3 before:bottom-0 before:left-[3px] before:w-px',
        className,
      )}
    >
      {children}
    </li>
  )
}

/**
 * The node marker.
 * `aria-hidden` — it is decoration. The list structure already conveys
 * sequence, so announcing a bullet adds noise without information.
 */
export function TimelineMarker({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'z-raised relative mt-1 size-1 shrink-0 rounded-full',
        'bg-border-strong ring-background ring-4',
        className,
      )}
    />
  )
}

export function TimelineContent({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={cn('flex min-w-0 flex-col gap-1', className)}>{children}</div>
}

Timeline.Item = TimelineItem
Timeline.Marker = TimelineMarker
Timeline.Content = TimelineContent
