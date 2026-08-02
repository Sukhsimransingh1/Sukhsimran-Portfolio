import type { ReactNode } from 'react'

import { Text } from '@/components/ui/typography'
import { cn } from '@/lib/cn'

/**
 * EMPTY STATE
 * ----------------------------------------------------------------------------
 * Renders where content is registered but not yet authored.
 *
 * WHY THIS EXISTS RATHER THAN RENDERING NOTHING
 * A section that vanishes when its array is empty leaves an unexplained gap in
 * the page rhythm and reads as a layout bug. A dashed, low-contrast placeholder
 * reads as deliberate — the structure is visible, the content is pending.
 *
 * Not announced assertively: this is scaffolding, not an error.
 */

export interface EmptyStateProps {
  /** What is missing, in the reader's terms. */
  message: string
  /** Optional second line — where the content will come from. */
  hint?: ReactNode
  className?: string
}

export function EmptyState({ message, hint, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        'border-border flex flex-col items-start gap-1 rounded-lg border border-dashed',
        'px-4 py-6',
        className,
      )}
    >
      <Text variant="sm" color="muted">
        {message}
      </Text>
      {hint ? (
        <Text variant="xs" color="muted">
          {hint}
        </Text>
      ) : null}
    </div>
  )
}
