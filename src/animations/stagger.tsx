'use client'

import { motion } from 'framer-motion'
import type { ElementType, ReactNode } from 'react'
import {
  createStagger,
  variants,
  viewport,
  reducedFade,
  reducedStagger,
  type VariantName,
} from './variants'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { stagger as staggerTokens, type Stagger as StaggerToken } from '@/lib/tokens'
import { cn } from '@/lib/cn'

interface StaggerProps {
  children: ReactNode
  className?: string
  /** Rhythm between children. Default `base` (70ms). */
  gap?: StaggerToken
  /** Seconds before the first child starts. */
  delay?: number
  as?: ElementType
  immediate?: boolean
}

/**
 * STAGGER
 * ----------------------------------------------------------------------------
 * Sequences the entrance of a group of children.
 *
 * WHY STAGGER AT ALL
 * It is not decoration. Simultaneous entrance gives the eye no reading order;
 * a short offset establishes one, so a list reads top-to-bottom instead of
 * arriving as an undifferentiated block.
 *
 * USAGE — children must be `<Stagger.Item>`:
 *
 *   <Stagger>
 *     <Stagger.Item>…</Stagger.Item>
 *     <Stagger.Item>…</Stagger.Item>
 *   </Stagger>
 *
 * The container animates nothing itself; it only schedules descendants. Items
 * declare the same `hidden`/`visible` state names, which is how Framer
 * propagates orchestration without prop drilling.
 */
export function Stagger({
  children,
  className,
  gap = 'base',
  delay = 0.05,
  as = 'div',
  immediate = false,
}: StaggerProps) {
  const prefersReducedMotion = useReducedMotion()
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div

  const containerVariants = prefersReducedMotion
    ? reducedStagger
    : createStagger(staggerTokens[gap], delay)

  return (
    <MotionTag
      className={cn(className)}
      variants={containerVariants}
      initial="hidden"
      {...(immediate ? { animate: 'visible' } : { whileInView: 'visible', viewport })}
    >
      {children}
    </MotionTag>
  )
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
  variant?: VariantName
  as?: ElementType
}

/**
 * A single staggered child.
 *
 * Deliberately declares no `initial`/`animate`/`whileInView` of its own — the
 * parent drives state. Setting them here would detach the item from the
 * parent's orchestration and every child would animate at once.
 */
function StaggerItem({
  children,
  className,
  variant = 'fadeUp',
  as = 'div',
}: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion()
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div

  return (
    <MotionTag
      className={cn(className)}
      variants={prefersReducedMotion ? reducedFade : variants[variant]}
    >
      {children}
    </MotionTag>
  )
}

Stagger.Item = StaggerItem
