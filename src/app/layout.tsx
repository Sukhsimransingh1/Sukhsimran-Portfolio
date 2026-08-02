import type { Metadata, Viewport } from 'next'
import { Providers } from '@/components/providers'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { SkipLink } from '@/components/navigation/skip-link'
import { fontVariables } from '@/lib/fonts'
import { siteConfig } from '@/config/site'
import '@/styles/globals.css'

/**
 * ROOT LAYOUT
 * ----------------------------------------------------------------------------
 * A SERVER COMPONENT, and it must stay one. Every client-side concern is
 * delegated to `Providers`, so this file — and the header, footer and page
 * shell it renders — is server-rendered. Adding `'use client'` here would opt
 * the entire application out of server rendering in a single line.
 */

export const metadata: Metadata = {
  // `metadataBase` resolves every relative URL in OG/Twitter tags to absolute.
  // Crawlers reject relative image URLs, and without this the failure is
  // invisible in development.
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    // Applied to child pages that set a plain string title.
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }, { url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/apple-icon.png',
  },

  manifest: '/manifest.webmanifest',

  formatDetection: {
    // Stops iOS Safari auto-linking numbers as phone numbers, which silently
    // restyles dates and metrics.
    telephone: false,
  },
}

/**
 * VIEWPORT
 * ----------------------------------------------------------------------------
 * `maximumScale` and `userScalable` are deliberately NOT set. Restricting zoom
 * is a WCAG 1.4.4 failure and breaks the primary accommodation for low-vision
 * users. It is a common default in boilerplates and is always wrong.
 *
 * `themeColor` responds to the colour scheme so the browser chrome matches the
 * active theme rather than fighting it.
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#111113' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // `suppressHydrationWarning` is REQUIRED, and only here.
    // `next-themes` writes `data-theme` onto <html> via a blocking inline
    // script before React hydrates — that is what prevents the flash of wrong
    // theme. React then sees an attribute the server did not render and warns.
    // The mismatch is intentional and confined to this element; the flag
    // suppresses the warning for <html> only, not for the tree.
    <html lang={siteConfig.lang} className={fontVariables} suppressHydrationWarning>
      <body>
        <Providers>
          {/* First focusable element in the DOM — see WCAG 2.4.1. */}
          <SkipLink />

          <div className="flex min-h-dvh flex-col">
            <Navbar />

            {/* `id="main"` is the skip-link target. `tabIndex={-1}` makes it
                programmatically focusable so focus actually lands here when the
                skip link is followed — without it some browsers move the
                scroll position but leave focus in the header. */}
            <main id="main" tabIndex={-1} className="flex-1">
              {children}
            </main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
