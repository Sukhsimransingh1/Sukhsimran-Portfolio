'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ComponentProps } from 'react'

/**
 * THEME PROVIDER
 * ----------------------------------------------------------------------------
 * Thin wrapper over `next-themes`, isolated in its own client module so the
 * root layout can stay a Server Component. Only this subtree ships to the
 * client; the layout's own markup is still server-rendered.
 *
 * CONFIGURATION RATIONALE
 *
 * `attribute="data-theme"` — writes `data-theme="dark"` on <html>, matching the
 *   attribute the semantic tokens and the `dark:` custom variant key off. A
 *   class-based strategy would work too, but an attribute keeps theme state out
 *   of the className string, where it can be clobbered by other class writers.
 *
 * `defaultTheme="system"` — respects the OS preference on first visit. Choosing
 *   a fixed default overrides a user-level accessibility setting, which is the
 *   wrong default for anyone who set dark mode for photophobia or eye strain.
 *
 * `enableSystem` — keeps following the OS *live*, so a mid-session switch
 *   (macOS auto-dark at sunset) is reflected without a reload.
 *
 * `disableTransitionOnChange` — suppresses CSS transitions for the duration of
 *   the flip. Without it, `body`'s colour transition fires on every element
 *   simultaneously and produces a visible smear as unrelated properties
 *   interpolate through intermediate colours.
 */
export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="theme"
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
