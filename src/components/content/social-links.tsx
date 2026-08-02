import { Globe, Mail } from 'lucide-react'
import type { ComponentType } from 'react'

import type { SocialLink, SocialPlatform } from '@/content/types'
import { cn } from '@/lib/cn'

/**
 * SOCIAL LINKS
 * ----------------------------------------------------------------------------
 * Icon-only external profile links.
 *
 * WHY `label` IS REQUIRED ON `SocialLink`
 * An icon-only anchor has no text content to derive an accessible name from, so
 * each link carries `aria-label` from its own `label` field. The glyph is
 * `aria-hidden` — without that a screen reader announces the SVG alongside the
 * label.
 *
 * `mailto:` targets deliberately skip `target="_blank"` — opening a blank tab
 * that immediately hands off to a mail client leaves a dead tab behind.
 *
 * WHY THE BRAND MARKS ARE INLINE SVG
 * lucide-react removed its brand icons (`Github`, `Linkedin`, `Twitter`) — they
 * are third-party trademarks rather than part of the icon language. The three
 * marks below are drawn as filled paths, which is why they set `fill` and no
 * `stroke`: brand glyphs are solid shapes, unlike lucide's stroked outlines.
 * They accept and spread the same props as a lucide component so the two remain
 * interchangeable in `PLATFORM_ICON` — including `aria-hidden`, which the call
 * site applies uniformly rather than each glyph hard-coding it.
 */

interface BrandIconProps {
  className?: string
  'aria-hidden'?: boolean | 'true' | 'false'
}

function GithubMark(props: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.2c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.53.11-3.18 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.23 0 4.63-2.8 5.65-5.48 5.95.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .5Z" />
    </svg>
  )
}

function LinkedinMark(props: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

function XMark(props: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25h6.82l4.71 6.23 5.46-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.11l11.97 15.64Z" />
    </svg>
  )
}

const PLATFORM_ICON: Record<SocialPlatform, ComponentType<BrandIconProps>> = {
  github: GithubMark,
  linkedin: LinkedinMark,
  email: Mail,
  x: XMark,
  website: Globe,
}

export interface SocialLinksProps {
  links: readonly SocialLink[]
  className?: string
}

export function SocialLinks({ links, className }: SocialLinksProps) {
  return (
    <ul className={cn('flex flex-wrap items-center gap-1', className)}>
      {links.map((link) => {
        const isMail = link.platform === 'email'
        const Icon = PLATFORM_ICON[link.platform]

        return (
          <li key={link.href}>
            <a
              href={link.href}
              aria-label={link.label}
              {...(isMail ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
              className={cn(
                'inline-flex size-5 items-center justify-center rounded-md',
                'text-content-tertiary hover:text-content-primary hover:bg-hover',
                'duration-fast transition-colors ease-out',
              )}
            >
              <Icon aria-hidden="true" className="size-2 shrink-0" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
