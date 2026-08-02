'use client'

import { motion } from 'framer-motion'
import type { ElementType, ReactNode } from 'react'
import { variants, viewport, reducedFade, type VariantName } from './variants'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { cn } from '@/lib/cn'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Which entrance to use. Default `fadeUp`. */
  variant?: VariantName
  /** Seconds to wait before starting. Use sparingly — prefer `Stagger`. */
  delay?: number
  /** Render as a different element. Default `div`. */
  as?: ElementType
  /**
   * Animate on mount instead of on scroll.
   * Correct for above-the-fold content, which may already be in view before any
   * observer fires.
   */
  immediate?: boolean
}

/**
 * REVEAL
 * ----------------------------------------------------------------------------
 * Scroll-triggered entrance. The default way anything enters the page.
 *
 * REDUCED MOTION
 * When the user has requested reduced motion, the variant is swapped for a
 * plain opacity fade rather than disabled. The element still signals "this is
 * new" without the translation or blur that constitute the actual vestibular
 * trigger.
 *
 * WHY `whileInView` OVER IntersectionObserver
 * Framer's implementation shares one observer across all instances, so a page
 * with fifty reveals allocates one observer rather than fifty.
 */
export function Reveal({
  children,
  className,
  variant = 'fadeUp',
  delay = 0,
  as = 'div',
  immediate = false,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion()
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div

  const base = prefersReducedMotion ? reducedFade : variants[variant]

  // Delay is merged INTO the variant's own transition rather than passed as a
  // `transition` prop. A prop-level transition replaces the variant's
  // transition wholesale, which would silently discard the token duration and
  // easing and leave the element animating on Framer's defaults.
  const activeVariant =
    delay > 0
      ? {
          ...base,
          visible: {
            ...(base['visible'] as object),
            transition: {
              ...((base['visible'] as { transition?: object })?.transition ?? {}),
              delay,
            },
          },
        }
      : base

  return (
    <MotionTag
      className={cn(className)}
      variants={activeVariant}
      initial="hidden"
      {...(immediate ? { animate: 'visible' } : { whileInView: 'visible', viewport })}
    >
      {children}
    </MotionTag>
  )
}
