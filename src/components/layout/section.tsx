import { cva, type VariantProps } from 'class-variance-authority'
import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Container, type ContainerProps } from './container'

/**
 * SECTION
 * ----------------------------------------------------------------------------
 * A vertical band of the page. Owns rhythm; delegates horizontal constraint to
 * `Container`.
 *
 * WHY SECTION SPACING IS A CLOSED SCALE
 * Vertical rhythm is what makes a long page feel composed rather than assembled.
 * If each section picks its own padding, the gaps between them vary at random
 * and the page reads as a stack of unrelated blocks. A four-step scale means
 * the gaps are proportional by construction.
 *
 * ACCESSIBILITY
 * Renders `<section>` by default. A `<section>` is only exposed as a landmark
 * when it has an accessible name, so `aria-labelledby` should point at the
 * section's heading — that is what lets screen-reader users jump between
 * sections. `labelledBy` exists to make this the obvious path.
 */

const sectionVariants = cva('relative w-full', {
  variants: {
    spacing: {
      none: '',
      sm: 'py-8',
      base: 'py-12',
      lg: 'py-16',
      xl: 'py-24',
    },
    surface: {
      none: '',
      base: 'bg-background',
      surface: 'bg-surface',
      subtle: 'bg-surface-subtle',
    },
    /** Hairline separator. Preferred over a `<hr>` between sections. */
    divider: {
      none: '',
      top: 'border-t border-border',
      bottom: 'border-b border-border',
      both: 'border-y border-border',
    },
  },
  defaultVariants: {
    spacing: 'lg',
    surface: 'none',
    divider: 'none',
  },
})

export interface SectionProps extends VariantProps<typeof sectionVariants> {
  /** Optional so a route can render a structural shell before content exists. */
  children?: ReactNode
  className?: string
  as?: ElementType
  id?: string
  /** Width of the inner container. Pass `false` to opt out entirely. */
  container?: ContainerProps['size'] | false
  /**
   * `id` of the heading that names this section. Required for the section to
   * be announced as a navigable landmark.
   */
  labelledBy?: string
  /** Accessible name when no visible heading exists. */
  label?: string
}

export function Section({
  children,
  className,
  spacing,
  surface,
  divider,
  as: Tag = 'section',
  id,
  container = 'xl',
  labelledBy,
  label,
}: SectionProps) {
  const content =
    container === false ? children : <Container size={container}>{children}</Container>

  return (
    <Tag
      id={id}
      className={cn(sectionVariants({ spacing, surface, divider }), className)}
      aria-labelledby={labelledBy}
      aria-label={label}
    >
      {content}
    </Tag>
  )
}

export { sectionVariants }
