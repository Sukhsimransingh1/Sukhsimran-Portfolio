'use client'

import { usePathname } from 'next/navigation'
import { primaryNavItems, isActiveRoute } from '@/config/routes'
import { NavLink } from './nav-link'
import { cn } from '@/lib/cn'

/**
 * NAV LINKS
 * ----------------------------------------------------------------------------
 * Primary navigation with active-state marking.
 *
 * A Client Component because it needs `usePathname`. Isolated in its own file
 * so the surrounding `Navbar` can remain a Server Component — only the links
 * ship to the client, not the header shell.
 *
 * ACCESSIBILITY
 * `aria-current="page"` is what actually communicates the active item. Styling
 * alone conveys nothing to a screen reader, and a colour-only active state also
 * fails WCAG 1.4.1 for sighted users who cannot distinguish the hue.
 *
 * Structural only — the underline treatment and hover choreography are design
 * decisions for a later phase.
 */
export function NavLinks({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <ul className={cn('flex items-center gap-3', className)}>
      {primaryNavItems.map((item) => {
        const isActive = isActiveRoute(pathname, item.href)

        return (
          <li key={item.href}>
            <NavLink
              item={item}
              current={isActive}
              className={cn(
                'font-sans text-sm font-medium',
                'duration-fast transition-colors ease-out',
                isActive
                  ? 'text-content-primary'
                  : 'text-content-tertiary hover:text-content-primary',
              )}
            />
          </li>
        )
      })}
    </ul>
  )
}
