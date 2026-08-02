import { cva, type VariantProps } from 'class-variance-authority'
import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

/**
 * BADGE
 * ----------------------------------------------------------------------------
 * A small non-interactive label — tech tags, status, metadata.
 *
 * NON-INTERACTIVE BY DESIGN: no hover state, no click handler, no focus. A
 * badge that looks clickable but is not is a UX failure; if something needs to
 * be actionable, it is a `Button` with `variant="outline" size="sm"`.
 *
 * COLOUR IS NEVER THE ONLY SIGNAL (WCAG 1.4.1). The status variants must carry
 * a text label or icon that conveys the same meaning — a colour-only badge is
 * invisible to anyone with a colour vision deficiency.
 */

const badgeVariants = cva(
  [
    'inline-flex items-center gap-0-5',
    'font-sans font-medium whitespace-nowrap',
    'border',
    '[&_svg]:size-2 [&_svg]:shrink-0',
  ],
  {
    variants: {
      variant: {
        default: 'bg-surface-subtle border-border text-content-secondary',
        outline: 'bg-transparent border-border-strong text-content-secondary',
        solid: 'bg-primary border-transparent text-primary-foreground',
        accent: 'bg-accent-subtle border-transparent text-content-accent',
        success:
          'bg-success-surface border-success-border text-success-foreground',
        warning:
          'bg-warning-surface border-warning-border text-warning-foreground',
        danger: 'bg-danger-surface border-danger-border text-danger-foreground',
      },
      size: {
        sm: 'h-3 px-1 text-2xs rounded-sm',
        base: 'h-4 px-1 text-xs rounded-sm',
        lg: 'h-5 px-2 text-sm rounded-md',
      },
      /** Uppercase eyebrow treatment. Wide tracking is required at these sizes. */
      caps: {
        true: 'uppercase tracking-wider',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'base',
      caps: false,
    },
  },
)

export interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children: ReactNode
  className?: string
}

export function Badge({ children, className, variant, size, caps }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size, caps }), className)}>
      {children}
    </span>
  )
}

export { badgeVariants }
