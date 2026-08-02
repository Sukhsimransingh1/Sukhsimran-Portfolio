import { Inter, JetBrains_Mono } from 'next/font/google'

/**
 * FONT LOADING
 * ----------------------------------------------------------------------------
 * `next/font` self-hosts these at build time. That removes the request to
 * Google's CDN entirely, which matters for three reasons: it eliminates a
 * third-party connection on the critical path, it removes a privacy dependency,
 * and it lets the files be served with a 1-year immutable cache.
 *
 * `display: 'swap'` renders fallback text immediately rather than blocking on
 * the webfont — FOUT over FOIT. Invisible text is a worse failure than a font
 * flash, and `adjustFontFallback` (on by default) synthesises a metric-matched
 * fallback so the swap causes almost no layout shift.
 *
 * PLACEHOLDER NOTE: Inter and JetBrains Mono are workhorse defaults chosen so
 * the system is buildable now. Final typeface selection is a later phase — when
 * it happens, only this file changes, because everything downstream reads the
 * CSS variables these exports define.
 */

export const fontSans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans-primary',
  // Variable font: one file covers the whole weight range, so requesting extra
  // weights costs nothing additional over the wire.
  weight: 'variable',
  fallback: ['system-ui', 'arial'],
})

/**
 * Display face.
 * Currently the same family as body text — a deliberate placeholder. Pointing
 * it at its own variable now means swapping in a genuine display face later is
 * a one-line change rather than a find-and-replace across every heading.
 */
export const fontDisplay = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display-primary',
  weight: 'variable',
  fallback: ['system-ui', 'arial'],
})

export const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono-primary',
  weight: 'variable',
  fallback: ['ui-monospace', 'monospace'],
})

/** Applied to <html> so every font variable is in scope document-wide. */
export const fontVariables = [
  fontSans.variable,
  fontDisplay.variable,
  fontMono.variable,
].join(' ')
