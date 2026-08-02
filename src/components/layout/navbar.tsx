import Link from 'next/link'

import { HeaderShell } from '@/components/layout/header-shell'
import { MobileNavLinks } from '@/components/navigation/mobile-nav-links'
import { NavLinks } from '@/components/navigation/nav-links'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { routes } from '@/config/routes'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/cn'

/**
 * NAVBAR
 * ----------------------------------------------------------------------------
 * Site header.
 *
 * A SERVER COMPONENT. The interactive parts each declare their own client
 * boundary — `HeaderShell` (scroll state and the mobile disclosure),
 * `NavLinks`/`MobileNavLinks` (need `usePathname`) and `ThemeToggle` (theme
 * state). The brand mark and the composition stay on the server, so the client
 * bundle carries the interactive parts and nothing else. Marking this file
 * `'use client'` would pull the entire subtree in for no benefit.
 *
 * SEMANTICS
 *   • `<header>` — banner landmark, owned by `HeaderShell`.
 *   • `<nav aria-label="Main">` — a named navigation landmark. The name matters
 *     because the footer also contains a `<nav>`; without distinct labels a
 *     screen reader announces two identical "navigation" landmarks.
 *
 * STICKY, NOT FIXED. `sticky` keeps the header in flow, so it does not overlap
 * content and needs no compensating body padding. `--header-height` is a real
 * token, consumed by `scroll-padding-top` in `base.css` so anchor targets land
 * below the header rather than behind it.
 */
export function Navbar() {
  return (
    <HeaderShell
      brand={
        <Link
          href={routes.home}
          className={cn(
            'font-display text-content-primary text-base font-semibold tracking-tight',
            'hover:text-content-accent duration-fast transition-colors ease-out',
          )}
        >
          {siteConfig.name}
        </Link>
      }
      nav={<NavLinks />}
      actions={<ThemeToggle />}
      mobileNav={<MobileNavLinks />}
    />
  )
}
