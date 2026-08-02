'use client'

import { useEffect, useState } from 'react'

interface ScrollState {
  /** Vertical offset in px. */
  y: number
  /** True once scrolled past the threshold — drives header elevation. */
  isScrolled: boolean
  /** Last significant direction. Useful for hide-on-scroll headers. */
  direction: 'up' | 'down'
}

/**
 * Tracks scroll position and direction.
 *
 * PERFORMANCE
 * The listener is passive, so the browser never waits on it before scrolling —
 * a non-passive scroll handler is one of the most common causes of janky
 * scrolling.
 *
 * Reads are deferred into `requestAnimationFrame` and coalesced with a
 * `ticking` guard. Scroll fires far more often than the display refreshes;
 * without this, `scrollY` is read many times per frame, and each read forces
 * style recalculation.
 *
 * `directionThreshold` suppresses direction flapping from sub-pixel scroll
 * noise and trackpad momentum, which would otherwise toggle a hide-on-scroll
 * header continuously.
 */
export function useScroll(threshold = 8, directionThreshold = 6): ScrollState {
  const [state, setState] = useState<ScrollState>({
    y: 0,
    isScrolled: false,
    direction: 'up',
  })

  useEffect(() => {
    let lastY = window.scrollY
    let ticking = false

    const update = () => {
      const y = window.scrollY
      const delta = y - lastY

      setState((prev) => {
        const direction =
          Math.abs(delta) < directionThreshold
            ? prev.direction
            : delta > 0
              ? 'down'
              : 'up'

        const isScrolled = y > threshold

        // Bail out when nothing meaningful changed. Returning the previous
        // object keeps React from re-rendering every consumer on every frame.
        if (
          prev.y === y &&
          prev.isScrolled === isScrolled &&
          prev.direction === direction
        ) {
          return prev
        }

        return { y, isScrolled, direction }
      })

      lastY = y
      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }

    // Seed from the current position: a restored scroll offset on reload would
    // otherwise leave the header rendering as if it were at the top.
    update()

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold, directionThreshold])

  return state
}
