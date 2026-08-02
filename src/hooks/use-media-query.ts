'use client'

import { useCallback, useSyncExternalStore } from 'react'

/**
 * Subscribes to a media query and returns its current match state.
 *
 * WHY `useSyncExternalStore` RATHER THAN useState + useEffect
 * A `matchMedia` result is external mutable state. The effect-based pattern
 * reads it *after* paint, so the first client render always emits the fallback
 * value and then corrects itself — a visible flash on every mount.
 *
 * `useSyncExternalStore` reads synchronously during render via `getSnapshot`,
 * and its separate `getServerSnapshot` gives the server an explicit,
 * tearing-free value. This is the API React added for exactly this problem.
 */
export function useMediaQuery(query: string, serverFallback = false): boolean {
  // Memoised on `query`: `useSyncExternalStore` tears down and re-establishes
  // the subscription whenever `subscribe` changes identity, so an inline
  // closure here would detach and re-attach the listener on every render.
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const mql = window.matchMedia(query)
      mql.addEventListener('change', onStoreChange)
      return () => mql.removeEventListener('change', onStoreChange)
    },
    [query],
  )

  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query])

  // The server has no viewport. Callers pass the value that makes their
  // mobile-or-desktop assumption explicit rather than accidental.
  const getServerSnapshot = useCallback(() => serverFallback, [serverFallback])

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
