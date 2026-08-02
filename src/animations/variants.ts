import type { Variants, Transition } from 'framer-motion'
import { duration, easing, distance, motionBlur, stagger } from '@/lib/tokens'

/**
 * MOTION VARIANTS
 * ----------------------------------------------------------------------------
 * The complete animation vocabulary. Every animation in the application comes
 * from this file.
 *
 * WHY CENTRALISE
 * Inline `animate={{ ... }}` objects are how motion systems decay: two
 * developers write 0.3s and 0.35s for the same gesture, and the interface stops
 * feeling like one product. A closed vocabulary makes consistency the default
 * and makes a global timing change a one-file edit.
 *
 * WHAT IS ANIMATED
 * Only `opacity`, `transform` and `filter`. These are the properties the
 * compositor can handle off the main thread. Animating `width`, `height`, `top`
 * or `margin` forces layout on every frame and will drop frames on mid-range
 * hardware regardless of how well the rest is written.
 *
 * REDUCED MOTION
 * Not handled here. Variants stay pure so they remain composable; the
 * `Reveal`/`Fade`/`Stagger` wrappers substitute reduced variants at runtime.
 */

/* ==========================================================================
   TRANSITIONS
   ========================================================================== */

export const transitions = {
  fast: { duration: duration.fast, ease: easing.out },
  base: { duration: duration.base, ease: easing.out },
  slow: { duration: duration.slow, ease: easing.out },
  emphasized: { duration: duration.slow, ease: easing.emphasized },

  /**
   * Spring reserved for direct-manipulation feedback (magnetic hover, drag)
   * where a duration-based curve feels mechanical because the gesture is
   * continuous rather than discrete.
   *
   * `damping` is high relative to `stiffness` — critically damped, so it
   * settles without visible overshoot. Bounce reads as playful, which the
   * brand guide rules out.
   */
  spring: { type: 'spring', stiffness: 260, damping: 30, mass: 0.6 },
} as const satisfies Record<string, Transition>

/* ==========================================================================
   ENTRANCE VARIANTS
   --------------------------------------------------------------------------
   Named states (`hidden` / `visible`) rather than raw props, so a parent can
   orchestrate children: a child that declares the same state names inherits
   the parent's transition automatically, which is what makes `stagger` work
   without prop drilling.
   ========================================================================== */

export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.base },
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: distance.md },
  visible: { opacity: 1, y: 0, transition: transitions.base },
}

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -distance.md },
  visible: { opacity: 1, y: 0, transition: transitions.base },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: distance.md },
  visible: { opacity: 1, x: 0, transition: transitions.base },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -distance.md },
  visible: { opacity: 1, x: 0, transition: transitions.base },
}

/**
 * Scale entrance.
 * Starts at 0.96, not 0.8 — a large scale delta reads as a "pop", which is a
 * different (and louder) statement than the restrained reveal this system uses.
 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: transitions.base },
}

/**
 * Blur reveal — the signature entrance.
 *
 * COST WARNING: `filter: blur()` is expensive. The compositor must re-rasterise
 * the layer on every frame, and on a large element that alone can miss frame
 * budget. Reserve this for a small number of hero-level moments; use `fadeUp`
 * for everything ordinary.
 */
export const blurReveal: Variants = {
  hidden: { opacity: 0, filter: `blur(${motionBlur}px)`, y: distance.sm },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: duration.slow, ease: easing.emphasized },
  },
}

/**
 * Clip-path reveal — content wipes up from behind a mask.
 * Reads as *uncovering* rather than *arriving*, which suits editorial headings.
 * Requires `overflow: hidden` on the animated element.
 */
export const clipReveal: Variants = {
  hidden: { opacity: 0, clipPath: 'inset(100% 0 0 0)' },
  visible: {
    opacity: 1,
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: duration.slow, ease: easing.emphasized },
  },
}

/* ==========================================================================
   STAGGER
   --------------------------------------------------------------------------
   A container variant that sequences its children. The container animates
   nothing itself — it exists purely to schedule descendants.
   ========================================================================== */

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger.base,
      // Small lead-in so the group's first child does not start on the exact
      // frame the container becomes visible, which reads as abrupt.
      delayChildren: 0.05,
    },
  },
}

/** Builds a stagger container with an explicit rhythm. */
export function createStagger(gap: number = stagger.base, delay = 0.05): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: gap, delayChildren: delay },
    },
  }
}

/**
 * Per-word or per-line text reveal.
 *
 * ACCESSIBILITY REQUIREMENT: splitting text into per-word elements destroys it
 * for screen readers, which will announce each fragment as a separate node. The
 * consuming component MUST expose the full string via `aria-label` on the
 * wrapper and mark the fragments `aria-hidden`. `AnimatedHeading` does this.
 */
export const textRevealContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger.tight, delayChildren: 0.02 },
  },
}

export const textRevealChild: Variants = {
  hidden: { opacity: 0, y: '0.4em' },
  visible: {
    opacity: 1,
    y: '0em',
    transition: { duration: duration.slow, ease: easing.emphasized },
  },
}

/* ==========================================================================
   REDUCED-MOTION COUNTERPARTS
   --------------------------------------------------------------------------
   Not empty objects. Removing animation entirely also removes the information
   it carried — what appeared, and that it is new. These keep a short opacity
   fade (safe: no vestibular trigger) and drop every translation, scale and
   blur, which are the actual triggers.
   ========================================================================== */

export const reducedFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: duration.fast } },
}

export const reducedStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.02 } },
}

/* ==========================================================================
   VIEWPORT DEFAULTS
   ========================================================================== */

/**
 * Shared config for `whileInView`.
 *
 * `once: true` — reveals never replay. Re-animating already-read content is
 * distracting and makes scroll-back feel unstable.
 *
 * `margin: '0px 0px -12% 0px'` — shrinks the trigger area from the bottom, so
 * an element animates once it is meaningfully on screen rather than the instant
 * one pixel crosses the fold.
 */
export const viewport = {
  once: true,
  margin: '0px 0px -12% 0px',
} as const

/* ==========================================================================
   REGISTRY
   ========================================================================== */

export const variants = {
  fade,
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  scaleIn,
  blurReveal,
  clipReveal,
} as const

export type VariantName = keyof typeof variants
