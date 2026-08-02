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
 * fails WCAG 1.4.1 for sighted users who cannot distinguish the hue — hence the
 * underline rule alongside the colour shift.
 */
export function NavLinks({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <ul className={cn('flex items-center gap-4', className)}>
      {primaryNavItems.map((item) => {
        const isActive = isActiveRoute(pathname, item.href)

        return (
          <li key={item.href}>
            <NavLink
              item={item}
              current={isActive}
              className={cn(
                'relative block py-1 font-sans text-sm font-medium',
                'duration-fast transition-colors ease-out',
                // Drawn as a pseudo-element so its width can animate without
                // shifting the text baseline the way a real border would.
                'after:bg-content-primary after:absolute after:inset-x-0 after:-bottom-px after:h-px',
                'after:duration-base after:origin-left after:transition-transform after:ease-out after:content-[""]',
                isActive
                  ? 'text-content-primary after:scale-x-100'
                  : 'text-content-tertiary hover:text-content-primary after:scale-x-0 hover:after:scale-x-100',
              )}
            />
          </li>
        )
      })}
    </ul>
  )
}
