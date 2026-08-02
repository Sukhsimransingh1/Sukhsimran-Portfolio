'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useMounted } from '@/hooks/use-mounted'

/**
 * THEME TOGGLE
 * ----------------------------------------------------------------------------
 * Switches between light and dark.
 *
 * THE HYDRATION PROBLEM, AND THE FIX
 * The server cannot know the resolved theme — it lives in localStorage or in an
 * OS preference, neither of which exists during SSR. Rendering the "correct"
 * icon on the server is therefore impossible, and guessing produces a hydration
 * mismatch.
 *
 * `useMounted` gates the icon: before mount, a fixed placeholder occupying the
 * exact final dimensions is rendered. That keeps the server and first client
 * render identical (no mismatch) and prevents layout shift when the real icon
 * appears.
 *
 * ACCESSIBILITY
 *   • `aria-label` — the button is icon-only, so it has no text to name it.
 *   • `aria-pressed` — communicates toggle *state*, not just the action, so a
 *     screen reader announces "dark mode, pressed" rather than a bare label.
 *   • Icons are `aria-hidden`: they duplicate the label and would be announced
 *     twice.
 *
 * `resolvedTheme` rather than `theme` — `theme` can be the literal string
 * `"system"`, which is not something the icon can represent. `resolvedTheme` is
 * always concretely `"light"` or `"dark"`.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useMounted()

  const isDark = resolvedTheme === 'dark'

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        aria-hidden="true"
        // Focus is suppressed on the placeholder so keyboard order does not
        // shift the moment the real control mounts.
        tabIndex={-1}
      >
        <span className="size-2" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
    >
      {isDark ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
    </Button>
  )
}
