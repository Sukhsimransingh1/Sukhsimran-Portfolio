import { Container } from '@/components/layout/container'
import { NavLink } from '@/components/navigation/nav-link'
import { Text } from '@/components/ui/typography'
import { navItems } from '@/config/routes'
import { siteConfig } from '@/config/site'

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
 * Structural only — the link groups and layout are later-phase decisions.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-border mt-auto w-full border-t">
      <Container>
        <div className="flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
          <Text variant="sm" color="muted">
            © {year} {siteConfig.author.name || siteConfig.name}
          </Text>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <NavLink
                    item={item}
                    className="text-content-tertiary duration-fast hover:text-content-primary font-sans text-sm transition-colors ease-out"
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  )
}
