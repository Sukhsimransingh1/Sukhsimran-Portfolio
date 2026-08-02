'use client'

import { useMediaQuery } from './use-media-query'

/**
 * Reports whether the user has requested reduced motion at the OS level.
 *
 * WHY A CUSTOM HOOK WHEN FRAMER MOTION SHIPS `useReducedMotion`
 * Framer's version returns `null` until it has measured, which forces every
 * call site to handle a third state. This returns a plain boolean and defaults
 * to `false` on the server.
 *
 * HOW TO RESPOND TO IT
 * The correct response is almost never "remove the animation" — motion often
 * carries meaning (what appeared, where it came from). The correct response is
 * to remove *vestibular triggers*: large translations, scale, parallax,
 * continuous movement. A short opacity fade is generally safe and preserves the
 * communicative intent.
 *
 * The CSS half of this is handled by the `prefers-reduced-motion` block in
 * `base.css`. This hook covers Framer Motion, whose inline transform styles no
 * stylesheet rule can reach.
 */
export function useReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)', false)
}
