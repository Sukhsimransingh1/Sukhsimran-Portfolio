import type { SocialLink } from '@/content/types'
import { cn } from '@/lib/cn'

/**
 * SOCIAL LINKS
 * ----------------------------------------------------------------------------
 * External profile links.
 *
 * WHY `label` IS REQUIRED ON `SocialLink`
 * These become icon-only links in the design phase, and an icon-only anchor has
 * no text content to derive an accessible name from. Carrying the label in the
 * data means the name exists before the icon does, rather than being retrofitted
 * once the visual treatment lands.
 *
 * `mailto:` targets deliberately skip `target="_blank"` — opening a blank tab
 * that immediately hands off to a mail client leaves a dead tab behind.
 *
 * Structural only — icons are a later-phase decision.
 */

export interface SocialLinksProps {
  links: readonly SocialLink[]
  className?: string
}

export function SocialLinks({ links, className }: SocialLinksProps) {
  return (
    <ul className={cn('flex flex-wrap items-center gap-2', className)}>
      {links.map((link) => {
        const isMail = link.platform === 'email'

        return (
          <li key={link.href}>
            <a
              href={link.href}
              aria-label={link.label}
              {...(isMail ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
            >
              {link.label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
