'use client'

import { useEffect, useState } from 'react'

/**
 * Reports whether the component has completed its first client-side render.
 *
 * WHY THIS EXISTS
 * Server-rendered HTML cannot know the user's theme, viewport, or any other
 * browser-only state. Rendering that state during hydration produces markup
 * that disagrees with the server's output, and React logs a hydration
 * mismatch — in some cases discarding and re-rendering the subtree.
 *
 * The fix is to render a stable, state-free output on the server and first
 * client pass, then render the real value once mounted. `useEffect` never runs
 * on the server, so `mounted` is reliably `false` during hydration.
 *
 * Use this ONLY for genuinely client-dependent UI (theme toggles, media-query
 * branches). Gating ordinary content behind it costs server rendering and hurts
 * both perceived performance and crawlability.
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}
