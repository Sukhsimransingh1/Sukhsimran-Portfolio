/**
 * TOKEN MIRROR (TypeScript)
 * ----------------------------------------------------------------------------
 * A typed reflection of the values that JavaScript genuinely needs to know
 * about — motion timings for Framer Motion, breakpoints for matchMedia, the
 * z-index ladder for portals.
 *
 * SCOPE, deliberately narrow: this file mirrors ONLY tokens that JS consumes.
 * Colours, spacing and typography are absent by design — those belong to CSS,
 * and duplicating them here would create two sources of truth that drift.
 *
 * Values are `as const` so they widen to literal types, which lets downstream
 * signatures accept `keyof typeof duration` instead of a bare `string`.
 */

/* ==========================================================================
   MOTION
   --------------------------------------------------------------------------
   Seconds, not milliseconds: Framer Motion's `transition.duration` is in
   seconds, and converting at every call site is where off-by-1000 bugs live.
   ========================================================================== */
export const duration = {
  instant: 0.075,
  fast: 0.2,
  base: 0.32,
  slow: 0.46,
  slower: 0.6,
} as const

export type Duration = keyof typeof duration

/**
 * Cubic-bézier control points matching the CSS easing tokens exactly.
 * Framer Motion accepts a 4-tuple in this form.
 */
export const easing = {
  linear: [0, 0, 1, 1],
  in: [0.4, 0, 1, 1],
  out: [0.16, 1, 0.3, 1],
  inOut: [0.65, 0, 0.35, 1],
  emphasized: [0.22, 1, 0.36, 1],
} as const

export type Easing = keyof typeof easing

/** Travel distance in px for reveal animations. Mirrors --motion-distance-*. */
export const distance = {
  sm: 8,
  md: 16,
  lg: 28,
} as const

export type Distance = keyof typeof distance

/** Blur radius in px applied by the `blurReveal` variant. */
export const motionBlur = 8

/**
 * Delay between children in a staggered sequence, in seconds.
 * Above ~0.12s a group stops reading as one gesture and starts reading as
 * separate events, which undermines the grouping the stagger is meant to imply.
 */
export const stagger = {
  tight: 0.04,
  base: 0.07,
  loose: 0.11,
} as const

export type Stagger = keyof typeof stagger

/* ==========================================================================
   BREAKPOINTS
   --------------------------------------------------------------------------
   In px because `matchMedia` queries are authored in px. Must stay in sync
   with the rem values in `primitives.css` (1rem = 16px).
   ========================================================================== */
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

export type Breakpoint = keyof typeof breakpoints

/* ==========================================================================
   Z-INDEX
   --------------------------------------------------------------------------
   Needed in JS for portalled surfaces (modals, tooltips, the cursor layer)
   that are rendered outside the normal document flow.
   ========================================================================== */
export const zIndex = {
  behind: -1,
  base: 0,
  raised: 10,
  sticky: 20,
  header: 30,
  dropdown: 40,
  overlay: 50,
  modal: 60,
  popover: 70,
  toast: 80,
  tooltip: 90,
  cursor: 100,
  max: 999,
} as const

export type ZIndex = keyof typeof zIndex
