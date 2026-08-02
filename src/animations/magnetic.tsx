'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef, type ReactNode, type MouseEvent } from 'react'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { useHasPointer } from '@/hooks/use-breakpoint'
import { transitions } from './variants'
import { cn } from '@/lib/cn'

interface MagneticProps {
  children: ReactNode
  className?: string
  /**
   * How far the element follows the cursor, as a fraction of the distance from
   * its centre. 0.2 means it travels 20% of the way — enough to feel
   * responsive, small enough that the element never detaches from its slot.
   */
  strength?: number
  /** Pull radius in px beyond the element's own bounds. */
  radius?: number
}

/**
 * MAGNETIC
 * ----------------------------------------------------------------------------
 * The wrapped element drifts toward the cursor on approach.
 *
 * WHEN THIS IS APPROPRIATE
 * Rarely. It is an attention magnet, so it is correct on exactly one or two
 * primary calls to action per page. Applied broadly, every element competes and
 * the page feels restless.
 *
 * WHY MotionValue INSTEAD OF STATE
 * `useMotionValue` writes directly to the DOM node's transform, bypassing React
 * entirely. Driving this with `useState` would trigger a re-render on every
 * `mousemove` — dozens per second, each reconciling the subtree.
 *
 * `useSpring` smooths the raw pointer position so the element eases toward the
 * cursor rather than tracking it rigidly, which is what makes it read as
 * magnetism rather than as dragging.
 *
 * TWO GUARDS, BOTH REQUIRED
 *   • `useHasPointer` — on touch there is no cursor to be attracted to, and the
 *     effect would fire once on tap as a meaningless jump.
 *   • `useReducedMotion` — unpredictable cursor-following motion is exactly the
 *     category `prefers-reduced-motion` exists to suppress.
 *
 * When either guard fails, children are rendered unwrapped — no motion element,
 * no listeners, no cost.
 */
export function Magnetic({
  children,
  className,
  strength = 0.2,
  radius = 0,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const hasPointer = useHasPointer()

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, transitions.spring)
  const springY = useSpring(y, transitions.spring)

  const isEnabled = hasPointer && !prefersReducedMotion

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const element = ref.current
    if (!element) return

    const rect = element.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    x.set((event.clientX - centerX) * strength)
    y.set((event.clientY - centerY) * strength)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  if (!isEnabled) {
    return <div className={cn(className)}>{children}</div>
  }

  return (
    <div
      ref={ref}
      className={cn('inline-flex', className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={radius > 0 ? { padding: radius, margin: -radius } : undefined}
    >
      <motion.div style={{ x: springX, y: springY }}>{children}</motion.div>
    </div>
  )
}
