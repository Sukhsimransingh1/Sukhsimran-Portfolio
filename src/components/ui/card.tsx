import { cva, type VariantProps } from 'class-variance-authority'
import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/cn'

/**
 * CARD
 * ----------------------------------------------------------------------------
 * A bounded surface.
 *
 * NO GLASSMORPHISM — a deliberate constraint from the design system.
 * `backdrop-filter` is expensive (it forces a compositor read-back of
 * everything behind the element), it produces unpredictable contrast because
 * the backdrop is arbitrary content, and it dates a design to a specific
 * period. Cards here separate from the page by border and surface tone, which
 * is stable in both themes and free to render.
 *
 * ELEVATION AND THEME
 * `elevated` behaves differently per theme, and that is intentional. In light
 * mode elevation reads as shadow; in dark mode shadows are nearly invisible, so
 * the semantic tokens shift the surface lighter instead. Because the component
 * consumes `bg-elevated` and `shadow-*` rather than raw values, both behaviours
 * come for free.
 */

const cardVariants = cva('relative', {
  variants: {
    variant: {
      /** Default — flat, bordered. Correct for most content. */
      outline: 'bg-surface border border-border',
      /** Raised. Reserve for content that genuinely floats above the page. */
      elevated: 'bg-elevated border border-border-subtle shadow-md',
      /** Tonal separation, no border. */
      subtle: 'bg-surface-subtle',
      /** Structural only — no surface of its own. */
      ghost: '',
    },
    padding: {
      none: 'p-0',
      sm: 'p-3',
      base: 'p-4',
      lg: 'p-6',
    },
    radius: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      base: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
    },
    /**
     * Hover affordance for cards that are themselves links.
     *
     * Border and background only — no lift, no scale. A card that jumps on
     * hover pulls focus away from the content it contains, and repeated across
     * a grid it makes the whole page feel unstable.
     */
    interactive: {
      true: [
        'transition-[border-color,background-color,box-shadow]',
        'duration-fast ease-out',
        'hover:border-border-interactive',
        // Keyboard focus reaches the inner link, so the ring is drawn on the
        // card via `:focus-within`.
        'focus-within:border-border-interactive',
      ],
      false: '',
    },
  },
  defaultVariants: {
    variant: 'outline',
    padding: 'base',
    radius: 'base',
    interactive: false,
  },
})

export interface CardProps extends VariantProps<typeof cardVariants> {
  children: ReactNode
  className?: string
  as?: ElementType
}

export function Card({
  children,
  className,
  variant,
  padding,
  radius,
  interactive,
  as: Tag = 'div',
}: CardProps) {
  return (
    <Tag
      className={cn(cardVariants({ variant, padding, radius, interactive }), className)}
    >
      {children}
    </Tag>
  )
}

/* ==========================================================================
   SLOTS
   --------------------------------------------------------------------------
   Composition over configuration: slots let a card be assembled from parts
   rather than driven by a growing set of boolean props.
   ========================================================================== */

export function CardHeader({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={cn('flex flex-col gap-1', className)}>{children}</div>
}

export function CardBody({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={cn('flex flex-col gap-2', className)}>{children}</div>
}

export function CardFooter({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={cn('flex items-center gap-2', className)}>{children}</div>
}

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter

export { cardVariants }
