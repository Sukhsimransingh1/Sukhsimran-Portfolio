import Link from 'next/link'
import type { ReactNode } from 'react'
import type { NavItem } from '@/config/routes'

/**
 * NAV LINK
 * ----------------------------------------------------------------------------
 * Renders one navigation entry, choosing the correct element for its target.
 *
 * WHY THIS IS ITS OWN COMPONENT
 * Both the header and the footer map `navItems`, and both must make the same
 * choice: `<Link>` for in-app routes, a native `<a>` for anything that leaves
 * the app. Duplicating that branch in two files is how the two navigations
 * drift — one gets a fix, the other does not.
 *
 * WHY EXTERNAL TARGETS ARE NOT `<Link>`
 * `next/link` prefetches and client-side navigates. Against a PDF that means a
 * wasted prefetch and a router transition to a document the router cannot
 * render. A plain anchor lets the browser do what it already does correctly.
 *
 * `rel="noopener"` is required with `target="_blank"` — without it the opened
 * document gets a `window.opener` handle back into this page.
 *
 * A Server Component: the active state is passed in rather than computed, so
 * the footer never pays for a `usePathname` subscription it does not use.
 */

export interface NavLinkProps {
  item: NavItem
  className?: string
  /** Marks the entry as the current page. Header only. */
  current?: boolean
  children?: ReactNode
}

export function NavLink({ item, className, current, children }: NavLinkProps) {
  const label = children ?? item.label

  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
      </a>
    )
  }

  return (
    <Link
      href={item.href}
      aria-current={current ? 'page' : undefined}
      className={className}
    >
      {label}
    </Link>
  )
}
