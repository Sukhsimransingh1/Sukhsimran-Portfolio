import { PageLayout } from '@/components/layout/page-layout'
import { Section } from '@/components/layout/section'
import { SocialLinks } from '@/components/content/social-links'
import { routes } from '@/config/routes'
import { socialLinks } from '@/content/socials'
import { buildMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

/**
 * CONTACT
 * ----------------------------------------------------------------------------
 * Contact channels. Driven by `src/content/socials.ts`, empty until the content
 * phase.
 */

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description: 'Placeholder. Replaced in the content phase.',
  path: routes.contact,
})

export default function ContactPage() {
  return (
    <PageLayout title="Contact">
      {socialLinks.length > 0 ? (
        <Section spacing="lg" label="Elsewhere">
          <SocialLinks links={socialLinks} />
        </Section>
      ) : null}
    </PageLayout>
  )
}
