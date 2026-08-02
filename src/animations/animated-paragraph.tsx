'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, reducedFade, viewport } from './variants'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { cn } from '@/lib/cn'

interface AnimatedParagraphProps {
  children: ReactNode
  className?: string
  delay?: number
  immediate?: boolean
}

/**
 * ANIMATED PARAGRAPH
 * ----------------------------------------------------------------------------
 * Reveals body copy as a single block.
 *
 * WHY NOT WORD-BY-WORD LIKE `AnimatedHeading`
 * A deliberate asymmetry. Per-word reveal on a heading is a brief accent on a
 * handful of words. On a paragraph it becomes a typewriter effect: the reader
 * is forced to wait for text they are already trying to read, and reading speed
 * is capped by the animation. Motion that impedes reading is a UX failure
 * regardless of how it looks.
 *
 * Accepts `ReactNode` rather than `string`, so inline links and emphasis work
 * normally — no splitting means no structural constraint.
 */
export function AnimatedParagraph({
  children,
  className,
  delay = 0,
  immediate = false,
}: AnimatedParagraphProps) {
  const prefersReducedMotion = useReducedMotion()
  const base = prefersReducedMotion ? reducedFade : fadeUp

  const variant =
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
    <motion.p
      className={cn(className)}
      variants={variant}
      initial="hidden"
      {...(immediate ? { animate: 'visible' } : { whileInView: 'visible', viewport })}
    >
      {children}
    </motion.p>
  )
}
