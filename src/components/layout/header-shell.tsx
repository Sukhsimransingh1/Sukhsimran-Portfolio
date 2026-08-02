'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState, type ReactNode } from 'react'
import { Menu, X } from 'lucide-react'

import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import { useScroll } from '@/hooks/use-scroll'
import { cn } from '@/lib/cn'

/**
 * HEADER SHELL
 * ----------------------------------------------------------------------------
 * The interactive chrome of the site header, isolated so `Navbar` itself can
 * stay a Server Component. Everything stateful lives here; the brand mark, the
 * link markup and the theme toggle arrive as already-rendered nodes.
 *
 * TWO BEHAVIOURS
 *
 * 1. ELEVATION ON SCROLL. At the very top the header is flush and borderless —
 *    a bar that is always outlined reads as chrome bolted above the page. Once
 *    scrolled it gains a hairline and a translucent backdrop so content passing
 *    beneath stays legible.
 *
 * 2. MOBILE DISCLOSURE. Below `md` the links collapse behind a toggle.
 */

export interface HeaderShellProps {
  /** Brand mark — server-rendered. */
  brand: ReactNode
  /** Desktop navigation. Hidden below `md`. */
  nav: ReactNode
  /** Trailing controls — theme toggle. */
  actions: ReactNode
  /** Panel contents revealed by the mobile toggle. */
  mobileNav: ReactNode
}

export function HeaderShell({ brand, nav, actions, mobileNav }: HeaderShellProps) {
  const pathname = usePathname()
  const { isScrolled } = useScroll()
  const [isOpen, setIsOpen] = useState(false)

  // Close on navigation. A client-side route change does not unmount the
  // header, so without this the panel stays open over the new page.
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent the page behind the panel from scrolling while it is open.
  useEffect(() => {
    if (!isOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [isOpen])

  const isRaised = isScrolled || isOpen

  return (
    <header
      className={cn(
        'z-header sticky top-0 w-full',
        'duration-base transition-[background-color,border-color] ease-out',
        isRaised
          ? 'border-border bg-background/80 border-b backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <Container>
        <div className="flex h-[var(--header-height)] items-center justify-between gap-3">
          {brand}

          <div className="flex items-center gap-1 md:gap-3">
            <nav aria-label="Main" className="hidden md:block">
              {nav}
            </nav>

            {actions}

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </Button>
          </div>
        </div>
      </Container>

      {/* Kept mounted and toggled with `hidden` rather than conditionally
          rendered, so the `aria-controls` reference always resolves. */}
      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!isOpen}
        className={cn(
          'border-border bg-background border-t md:hidden',
          'h-[calc(100dvh-var(--header-height))] overflow-y-auto',
        )}
      >
        <Container>{mobileNav}</Container>
      </nav>
    </header>
  )
}
