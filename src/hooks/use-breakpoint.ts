'use client'

import { useMediaQuery } from './use-media-query'
import { breakpoints, type Breakpoint } from '@/lib/tokens'

/**
 * Reports whether the viewport is at or above a named breakpoint.
 *
 * WHEN NOT TO USE THIS
 * Layout should be responsive in CSS. A JS breakpoint check runs only after
 * hydration, so anything gated behind it is absent from the server HTML — bad
 * for perceived performance and invisible to crawlers.
 *
 * Reserve this for behaviour that CSS genuinely cannot express: mounting a
 * different component tree, enabling a pointer-driven interaction, or skipping
 * an animation on small screens.
 *
 * `serverFallback` defaults to `false` (assume small screen), which pairs with
 * a mobile-first render and lets desktop enhancements layer on after mount.
 */
export function useBreakpoint(breakpoint: Breakpoint, serverFallback = false): boolean {
  return useMediaQuery(`(min-width: ${breakpoints[breakpoint]}px)`, serverFallback)
}

/**
 * Reports whether the primary input device is a fine pointer (mouse/trackpad).
 *
 * Correct gate for hover-dependent effects like the magnetic button and the
 * custom cursor: a viewport-width check misclassifies touch laptops and small
 * desktop windows, whereas `pointer: fine` describes the actual capability.
 */
export function useHasPointer(): boolean {
  return useMediaQuery('(hover: hover) and (pointer: fine)', false)
}
