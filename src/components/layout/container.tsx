import { cva, type VariantProps } from 'class-variance-authority'
import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/cn'

/**
 * CONTAINER
 * ----------------------------------------------------------------------------
 * Horizontal constraint and gutter. The only component permitted to own page
 * margins — every section defers to it, so left and right edges align down the
 * entire page.
 *
 * `px-gutter` resolves to `clamp(1.5rem, 1rem + 2.5vw, 3rem)`, so the gutter
 * scales with viewport instead of stepping at breakpoints. Fixed gutters look
 * cramped on wide screens and wasteful on narrow ones.
 */

const containerVariants = cva('mx-auto w-full px-gutter', {
  variants: {
    size: {
      xs: 'max-w-xs',
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      /** Default. Wide enough for editorial layout, narrow enough to stay composed. */
      xl: 'max-w-xl',
      '2xl': 'max-w-2xl',
      /** Reading measure — for long-form prose, not layout. */
      prose: 'max-w-prose',
      full: 'max-w-none',
    },
  },
  defaultVariants: {
    size: 'xl',
  },
})

export interface ContainerProps extends VariantProps<typeof containerVariants> {
  children: ReactNode
  className?: string
  as?: ElementType
}

export function Container({
  children,
  className,
  size,
  as: Tag = 'div',
}: ContainerProps) {
  return <Tag className={cn(containerVariants({ size }), className)}>{children}</Tag>
}

export { containerVariants }
