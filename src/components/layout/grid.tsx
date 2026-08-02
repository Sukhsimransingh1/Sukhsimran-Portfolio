import { cva, type VariantProps } from 'class-variance-authority'
import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/cn'

/**
 * GRID
 * ----------------------------------------------------------------------------
 * A 12-column responsive grid.
 *
 * WHY 12 COLUMNS
 * Divisible by 2, 3, 4 and 6 — halves, thirds, quarters and sixths all land on
 * whole columns. A 10- or 16-column grid cannot express thirds without
 * fractional values, and editorial layout uses thirds constantly.
 *
 * WHY EXPLICIT COLUMN COUNTS PER BREAKPOINT
 * `auto-fit` with `minmax()` is convenient but yields an unpredictable count at
 * arbitrary widths, so a "3-up" row silently becomes 4-up on a wide monitor.
 * Explicit counts mean the composition is a decision rather than an emergent
 * property of the viewport.
 */

const gridVariants = cva('grid', {
  variants: {
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-1 sm:grid-cols-2',
      3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
      6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
      12: 'grid-cols-4 sm:grid-cols-8 lg:grid-cols-12',
    },
    gap: {
      none: 'gap-0',
      sm: 'gap-2',
      base: 'gap-3',
      lg: 'gap-4',
      xl: 'gap-6',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    },
  },
  defaultVariants: {
    cols: 12,
    gap: 'base',
    align: 'stretch',
  },
})

export interface GridProps extends VariantProps<typeof gridVariants> {
  children: ReactNode
  className?: string
  as?: ElementType
}

export function Grid({ children, className, cols, gap, align, as: Tag = 'div' }: GridProps) {
  return <Tag className={cn(gridVariants({ cols, gap, align }), className)}>{children}</Tag>
}

/* ==========================================================================
   GRID ITEM
   ========================================================================== */

const gridItemVariants = cva('', {
  variants: {
    span: {
      1: 'col-span-1',
      2: 'col-span-2',
      3: 'col-span-3',
      4: 'col-span-4',
      5: 'col-span-5',
      6: 'col-span-6',
      7: 'col-span-7',
      8: 'col-span-8',
      9: 'col-span-9',
      10: 'col-span-10',
      11: 'col-span-11',
      12: 'col-span-12',
      full: 'col-span-full',
    },
  },
  defaultVariants: {
    span: 'full',
  },
})

export interface GridItemProps extends VariantProps<typeof gridItemVariants> {
  children: ReactNode
  className?: string
  as?: ElementType
}

/**
 * Spans a fixed number of columns.
 *
 * Deliberately offers no per-breakpoint span props. Encoding responsive spans
 * as variants produces a combinatorial explosion of class strings; genuinely
 * bespoke responsive spans belong in `className` at the call site, where the
 * intent is visible.
 */
export function GridItem({ children, className, span, as: Tag = 'div' }: GridItemProps) {
  return <Tag className={cn(gridItemVariants({ span }), className)}>{children}</Tag>
}

Grid.Item = GridItem

export { gridVariants, gridItemVariants }
