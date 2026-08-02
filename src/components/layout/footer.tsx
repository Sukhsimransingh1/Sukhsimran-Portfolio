import Link from 'next/link'

import { Container } from '@/components/layout/container'
import { SocialLinks } from '@/components/content/social-links'
import { NavLink } from '@/components/navigation/nav-link'
import { Text } from '@/components/ui/typography'
import { navItems, routes } from '@/config/routes'
import { siteConfig } from '@/config/site'
import { socialLinks } from '@/content/socials'
import { cn } from '@/lib/cn'

/**
 * FOOTER
 * ----------------------------------------------------------------------------
 * Site footer. A Server Component — nothing here is interactive beyond links.
 *
 * SEMANTICS
 *   • `<footer>` — contentinfo landmark.
 *   • `<nav aria-label="Footer">` — distinct from the header's "Main" nav, so
 *     the two landmarks are individually addressable rather than announcing as
 *     two anonymous "navigation" regions.
 *
 * The year is computed at build time. This is a static page, so it is baked
 * into the HTML at build rather than evaluated per request — correct here, and
 * worth noting as a deliberate trade-off: a site built in December and not
 * redeployed will show a stale year in January. Acceptable for a portfolio that
 * redeploys on every content change; it would not be for a long-lived static
 * page.
 *
 * `mt-auto` pins the footer to the bottom of the flex column in `layout.tsx`,
 * so a short page still puts it at the viewport floor rather than mid-screen.
 */
export function Footer() {
  const year = new Date().getFullYear()
  const owner = siteConfig.author.name || siteConfig.name

  return (
    <footer className="border-border mt-auto w-full border-t">
      <Container>
        <div className="flex flex-col gap-8 py-10 md:py-12">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between md:gap-8">
            <div className="flex max-w-[var(--measure-xs)] flex-col gap-1">
              <Link
                href={routes.home}
                className={cn(
                  'font-display text-content-primary text-base font-semibold tracking-tight',
                  'hover:text-content-accent duration-fast transition-colors ease-out',
                  'self-start',
                )}
              >
                {siteConfig.name}
              </Link>
              <Text variant="sm" color="tertiary">
                {siteConfig.description}
              </Text>
            </div>

            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <NavLink
                      item={item}
                      className={cn(
                        'font-sans text-sm',
                        'text-content-tertiary hover:text-content-primary',
                        'duration-fast transition-colors ease-out',
                      )}
                    />
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div
            className={cn(
              'border-border flex flex-col gap-2 border-t pt-6',
              'sm:flex-row sm:items-center sm:justify-between',
            )}
          >
            <Text variant="sm" color="muted">
              © {year} {owner}
            </Text>

            {socialLinks.length > 0 ? <SocialLinks links={socialLinks} /> : null}
          </div>
        </div>
      </Container>
    </footer>
  )
}
