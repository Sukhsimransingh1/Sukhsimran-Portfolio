'use client'

import { useEffect, useRef, useState } from 'react'

interface UseInViewOptions {
  /** Fraction of the element that must be visible. */
  threshold?: number
  /** Shrinks/grows the viewport rect. Negative bottom delays the trigger. */
  rootMargin?: string
  /** Stop observing after the first intersection. Default: true. */
  once?: boolean
}

/**
 * Reports whether an element has entered the viewport.
 *
 * WHY NOT FRAMER MOTION'S `whileInView`
 * For simple cases Framer's built-in is fine. This exists for the cases where
 * the *state* is needed rather than an animation — conditionally mounting an
 * expensive subtree, triggering a counter, marking a nav section active.
 *
 * `once: true` is the default because reveal animations should not replay on
 * every scroll-back. Re-animating content the user has already read is noise,
 * and the observer disconnects after firing, so it costs nothing thereafter.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
  once = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return

        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, inView } as const
}
