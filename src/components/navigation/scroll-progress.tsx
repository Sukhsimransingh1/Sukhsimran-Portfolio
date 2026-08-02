'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { cn } from '@/lib/cn'

/**
 * SCROLL PROGRESS
 * ----------------------------------------------------------------------------
 * A reading-progress bar. Intended for long pages — case studies — not the site
 * as a whole.
 *
 * WHY FRAMER'S `useScroll` RATHER THAN THE PROJECT'S `useScroll` HOOK
 * This needs a normalised 0–1 progress value driven outside React's render
 * cycle. `useScrollYProgress` returns a `MotionValue` that writes straight to
 * the DOM, so the bar updates every frame without re-rendering a component.
 * The project's own `useScroll` returns state, which would re-render on scroll —
 * correct for a header that toggles a class, wasteful for a continuous value.
 *
 * WHY `scaleX` AND NOT `width`
 * `width` triggers layout on every frame. `scaleX` is compositor-only.
 * `transform-origin: left` makes it grow from the start edge.
 *
 * ACCESSIBILITY
 * Purely decorative — it duplicates information the scrollbar already conveys,
 * so it is `aria-hidden` rather than a `progressbar` that would announce
 * continuously while scrolling.
 *
 * REDUCED MOTION
 * The spring is bypassed rather than the bar hidden: the indicator still
 * tracks position, it just does so without easing overshoot.
 */

export interface ScrollProgressProps {
  className?: string
}

export function ScrollProgress({ className }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()
  const prefersReducedMotion = useReducedMotion()

  const smoothed = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 30,
    mass: 0.6,
  })

  return (
    <motion.div
      aria-hidden
      style={{
        scaleX: prefersReducedMotion ? scrollYProgress : smoothed,
        transformOrigin: 'left',
      }}
      className={cn('z-header bg-accent fixed inset-x-0 top-0 h-px', 'gpu', className)}
    />
  )
}
