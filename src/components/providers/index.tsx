import { ThemeProvider } from './theme-provider'
import type { ReactNode } from 'react'

/**
 * PROVIDER COMPOSITION ROOT
 * ----------------------------------------------------------------------------
 * A single mount point for every app-wide provider.
 *
 * WHY COMPOSE HERE INSTEAD OF NESTING IN THE LAYOUT
 * Providers accumulate — analytics, motion config, toasts, command palette.
 * Nesting them directly in `layout.tsx` would force that file to become a
 * Client Component the moment the first provider needs browser APIs, which
 * would opt the entire application out of server rendering.
 *
 * Keeping the boundary here means the layout stays a Server Component
 * permanently, and adding a provider never changes where that boundary sits.
 *
 * NOTE: this file is intentionally NOT marked `'use client'`. It only composes
 * modules that declare the directive themselves, so it stays a Server Component
 * and its children are passed through as already-rendered server output rather
 * than being pulled into the client bundle.
 */
export function Providers({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>
}
