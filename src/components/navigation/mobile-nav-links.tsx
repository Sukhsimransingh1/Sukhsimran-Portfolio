'use client'

import { usePathname } from 'next/navigation'
import { ArrowUpRight } from 'lucide-react'

import { NavLink } from './nav-link'
import { primaryNavItems, isActiveRoute } from '@/config/routes'
import { cn } from '@/lib/cn'

/**
 * MOBILE NAV LINKS
 * ----------------------------------------------------------------------------
 * The list rendered inside the header's mobile disclosure panel. Separate from
 * `NavLinks` rather than a variant of it: the two differ in element size, in
 * layout axis and in the affordance shown for external links, which is more
 * divergence than a `variant` prop would usefully hide.
 *
 * Targets are full-width rows at `text-lg` — comfortably above the 44px
 * minimum touch target.
 */
export function MobileNavLinks({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <ul className={cn('flex flex-col py-2', className)}>
      {primaryNavItems.map((item) => {
        const isActive = isActiveRoute(pathname, item.href)
        return (
          <li key={item.href} className="border-border border-b last:border-b-0">
            <NavLink
              item={item}
              current={isActive}
              className={cn(
                'flex items-center justify-between gap-2 py-3',
                'font-sans text-lg font-medium',
                'duration-fast transition-colors ease-out',
                isActive
                  ? 'text-content-primary'
                  : 'text-content-tertiary hover:text-content-primary',
              )}
            >
              <span>{item.label}</span>
              {item.external ? (
                <ArrowUpRight
                  aria-hidden="true"
                  className="text-content-muted size-2 shrink-0"
                />
              ) : null}
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
}
