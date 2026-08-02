'use client'

import { motion } from 'framer-motion'
import { Fragment } from 'react'
import { textRevealContainer, textRevealChild, reducedFade, viewport } from './variants'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { cn } from '@/lib/cn'

interface AnimatedHeadingProps {
  /**
   * Plain string, not ReactNode — the text must be splittable into words, and
   * arbitrary children cannot be split without destroying their structure.
   */
  text: string
  className?: string
  /** Heading level. Choose by document outline, never by visual size. */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  delay?: number
  immediate?: boolean
  /**
   * Required when a `Section` names itself via `labelledBy` — the association
   * only resolves if the heading it points at carries a stable id.
   */
  id?: string
}

/**
 * ANIMATED HEADING
 * ----------------------------------------------------------------------------
 * Reveals a heading word by word.
 *
 * ACCESSIBILITY — THE CENTRAL CONCERN
 * Splitting text into per-word elements destroys it for assistive technology: a
 * screen reader encounters N separate nodes and may announce them individually,
 * with pauses between fragments. The naive implementation of this effect is an
 * accessibility regression, not a flourish.
 *
 * The fix has two required parts:
 *   1. `aria-label` on the wrapper carries the complete, unsplit string.
 *   2. `aria-hidden` on the inner container removes every fragment from the
 *      accessibility tree.
 *
 * Net result: sighted users see the reveal, screen-reader users hear one clean
 * heading. A `.sr-only` duplicate is deliberately NOT used — it would cause
 * double announcement.
 *
 * LAYOUT
 * Each word is wrapped in an `inline-block` mask with `overflow: hidden` so its
 * child can translate up from behind its own bounds. `inline-block` is
 * mandatory: `transform` has no effect on inline elements.
 */
export function AnimatedHeading({
  text,
  className,
  as: Tag = 'h2',
  delay = 0,
  immediate = false,
  id,
}: AnimatedHeadingProps) {
  const prefersReducedMotion = useReducedMotion()
  const words = text.split(' ')

  const MotionTag = motion[Tag] as typeof motion.h2

  // Under reduced motion the split is abandoned entirely — the text renders as
  // a single node with a plain fade. Simpler and structurally safer than
  // animating fragments with the motion stripped out.
  if (prefersReducedMotion) {
    return (
      <MotionTag
        id={id}
        className={cn(className)}
        variants={reducedFade}
        initial="hidden"
        {...(immediate ? { animate: 'visible' } : { whileInView: 'visible', viewport })}
      >
        {text}
      </MotionTag>
    )
  }

  return (
    <Tag id={id} className={cn(className)} aria-label={text}>
      <motion.span
        aria-hidden="true"
        variants={{
          ...textRevealContainer,
          visible: {
            transition: {
              ...(textRevealContainer['visible'] as { transition?: object })?.transition,
              delayChildren: delay,
            },
          },
        }}
        initial="hidden"
        {...(immediate ? { animate: 'visible' } : { whileInView: 'visible', viewport })}
      >
        {words.map((word, index) => (
          <Fragment key={`${word}-${index}`}>
            <span
              style={{
                display: 'inline-block',
                overflow: 'hidden',
                verticalAlign: 'top',
              }}
            >
              <motion.span
                variants={textRevealChild}
                style={{ display: 'inline-block', willChange: 'transform, opacity' }}
              >
                {word}
              </motion.span>
            </span>
            {/* The space sits OUTSIDE the mask. Inside, it would be clipped
                along with the word and every word would run together. JSX
                strips literal whitespace between elements, so it is explicit. */}
            {index < words.length - 1 ? ' ' : null}
          </Fragment>
        ))}
      </motion.span>
    </Tag>
  )
}
