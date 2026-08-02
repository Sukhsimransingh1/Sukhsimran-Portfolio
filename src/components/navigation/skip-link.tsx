import { cn } from '@/lib/cn'

/**
 * SKIP LINK
 * ----------------------------------------------------------------------------
 * Lets keyboard users jump past the navigation straight to the main content.
 *
 * WCAG 2.4.1 (Bypass Blocks, Level A). Without it, every keyboard user tabs
 * through the entire header on every page load before reaching content — on a
 * multi-page site that is a real, repeated cost.
 *
 * It must be the FIRST focusable element in the DOM, otherwise it cannot be
 * reached before the thing it exists to skip.
 *
 * Visually hidden until focused, then positioned over the header. Hiding it
 * with `display: none` would remove it from the tab order entirely and defeat
 * the purpose — hence the clip-path technique in `.sr-only-focusable`.
 */
export function SkipLink({ href = '#main' }: { href?: string }) {
  return (
    <a
      href={href}
      className={cn(
        'sr-only-focusable',
        'focus:z-max focus:fixed focus:top-2 focus:left-2',
        'focus:border-border-strong focus:rounded-md focus:border',
        'focus:bg-surface focus:px-3 focus:py-2',
        'focus:text-content-primary focus:font-sans focus:text-sm focus:font-medium',
        'focus:shadow-lg',
      )}
    >
      Skip to content
    </a>
  )
}
