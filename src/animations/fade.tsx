'use client'

import { motion } from 'framer-motion'
import type { ElementType, ReactNode } from 'react'
import { fade, viewport } from './variants'
import { cn } from '@/lib/cn'

interface FadeProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: ElementType
  immediate?: boolean
}

/**
 * FADE
 * ----------------------------------------------------------------------------
 * Opacity-only entrance.
 *
 * WHY A SEPARATE COMPONENT FROM `Reveal`
 * A pure fade involves no translation, scale or blur, so it is already safe
 * under `prefers-reduced-motion` and needs no variant substitution. Keeping it
 * separate makes "this animation is motion-safe by construction" explicit at
 * the call site rather than something to verify by reading the props.
 *
 * Use for content that should appear without implying direction — overlays,
 * images, anything where a translation would suggest a spatial relationship
 * that does not exist.
 */
export function Fade({
  children,
  className,
  delay = 0,
  as = 'div',
  immediate = false,
}: FadeProps) {
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div

  const variant =
    delay > 0
      ? {
          ...fade,
          visible: {
            ...(fade['visible'] as object),
            transition: {
              ...((fade['visible'] as { transition?: object })?.transition ?? {}),
              delay,
            },
          },
        }
      : fade

  return (
    <MotionTag
      className={cn(className)}
      variants={variant}
      initial="hidden"
      {...(immediate ? { animate: 'visible' } : { whileInView: 'visible', viewport })}
    >
      {children}
    </MotionTag>
  )
}
