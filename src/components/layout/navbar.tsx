import Link from 'next/link'
import { Container } from '@/components/layout/container'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { NavLinks } from '@/components/navigation/nav-links'
import { routes } from '@/config/routes'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/cn'

/**
 * NAVBAR
 * ----------------------------------------------------------------------------
 * Site header.
 *
 * A SERVER COMPONENT. Only two descendants are interactive — `NavLinks` (needs
 * `usePathname`) and `ThemeToggle` (needs theme state) — and both declare their
 * own client boundary. The header shell, the logo and the layout stay on the
 * server, so the client bundle carries the interactive parts and nothing else.
 * Marking this file `'use client'` would pull the entire subtree in for no
 * benefit.
 *
 * SEMANTICS
 *   • `<header>` — banner landmark.
 *   • `<nav aria-label="Main">` — a named navigation landmark. The name matters
 *     because the footer also contains a `<nav>`; without distinct labels a
 *     screen reader announces two identical "navigation" landmarks.
 *
 * STICKY, NOT FIXED. `sticky` keeps the header in flow, so it does not overlap
 * content and needs no compensating body padding. `--header-height` is a real
 * token, consumed by `scroll-padding-top` in `base.css` so anchor targets land
 * below the header rather than behind it.
 *
 * Structural only — scroll behaviour, mobile menu and elevation-on-scroll are
 * later-phase decisions.
 */
export function Navbar() {
  return (
    <header
      className={cn(
        'sticky top-0 z-header w-full',
        'border-b border-border',
        // `color-mix` with a fallback: the header reads as part of the page
        // rather than a floating bar, without `backdrop-filter`'s cost.
        'bg-background',
      )}
    >
      <Container>
        <div className="flex h-[var(--header-height)] items-center justify-between gap-3">
          <Link
            href={routes.home}
            className="font-display text-base font-semibold tracking-tight text-content-primary"
          >
            {siteConfig.name}
          </Link>

          <div className="flex items-center gap-3">
            {/* Hidden below `md`. The mobile menu is a later-phase component;
                the nav is not yet reachable on small screens by design, not by
                oversight. */}
            <nav aria-label="Main" className="hidden md:block">
              <NavLinks />
            </nav>

            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  )
}
