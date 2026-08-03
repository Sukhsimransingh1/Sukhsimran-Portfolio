import Link from 'next/link'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'

import { Reveal, Stagger, StaggerItem } from '@/animations'
import { ContactCard } from '@/components/content/contact-card'
import { SocialLinks } from '@/components/content/social-links'
import { gridVariants } from '@/components/layout/grid'
import { PageLayout } from '@/components/layout/page-layout'
import { Section } from '@/components/layout/section'
import { SectionHeader } from '@/components/sections/section-header'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/typography'
import { routes } from '@/config/routes'
import { siteConfig } from '@/config/site'
import { socialLinks } from '@/content/socials'
import { buildMetadata } from '@/lib/metadata'
import { cn } from '@/lib/cn'
import type { Metadata } from 'next'

/**
 * CONTACT
 * ----------------------------------------------------------------------------
 * Contact channels, read from `siteConfig` and the socials registry.
 *
 * WHY THERE IS NO FORM
 * A form needs a server action, a spam strategy and a delivery provider, and it
 * gives the sender no record of what they sent. A `mailto:` hands the message to
 * a client the visitor already trusts and already has open. For a portfolio the
 * form is strictly more infrastructure for a strictly worse outcome.
 *
 * Every channel is conditional on its value existing in config. With none set
 * the page still renders its header and the closing note rather than collapsing
 * to an empty body.
 */

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description:
    'Get in touch about machine learning, generative AI or backend engineering work.',
  path: routes.contact,
})

const CHANNELS_HEADING_ID = 'contact-channels'
const ELSEWHERE_HEADING_ID = 'contact-elsewhere'

/** Location is content, not configuration — it has no other consumer. */
const LOCATION = 'Jalandhar, Punjab, India'

export default function ContactPage() {
  const { email } = siteConfig.author
  const { github, linkedin } = siteConfig.links

  return (
    <PageLayout
      title="Contact"
      eyebrow="Get in touch"
      description="Open to internships, collaboration and conversations about applied machine learning and generative AI."
    >
      <Section spacing="lg" divider="top" labelledBy={CHANNELS_HEADING_ID}>
        <Reveal>
          <SectionHeader
            id={CHANNELS_HEADING_ID}
            eyebrow="Channels"
            title="Ways to reach me"
          />
        </Reveal>

        <Stagger
          as="ul"
          gap="loose"
          className={cn(gridVariants({ cols: 2, gap: 'lg' }), 'mt-8')}
        >
          {email ? (
            <StaggerItem as="li" className="flex">
              <ContactCard
                title="Email"
                description="The most reliable way to reach me. I read everything and reply to anything that isn't a mass send."
                className="w-full"
                action={
                  <Button asChild variant="outline">
                    <a href={`mailto:${email}`}>
                      <Mail aria-hidden="true" />
                      {email}
                    </a>
                  </Button>
                }
              />
            </StaggerItem>
          ) : null}

          <StaggerItem as="li" className="flex">
            <ContactCard
              title="Location"
              description="Based in Punjab, India. Comfortable working remotely across time zones."
              className="w-full"
              action={
                <span className="text-content-tertiary inline-flex items-center gap-1">
                  <MapPin aria-hidden="true" className="size-2 shrink-0" />
                  <Text as="span" variant="sm">
                    {LOCATION}
                  </Text>
                </span>
              }
            />
          </StaggerItem>

          {github ? (
            <StaggerItem as="li" className="flex">
              <ContactCard
                title="GitHub"
                description="Source for the projects listed under work, plus the smaller experiments that never got written up."
                className="w-full"
                action={
                  <Button asChild variant="outline">
                    <a href={github} target="_blank" rel="noopener noreferrer">
                      View profile
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  </Button>
                }
              />
            </StaggerItem>
          ) : null}

          {linkedin ? (
            <StaggerItem as="li" className="flex">
              <ContactCard
                title="LinkedIn"
                description="Background, education and the roles I've held, for anyone who wants the formal version."
                className="w-full"
                action={
                  <Button asChild variant="outline">
                    <a href={linkedin} target="_blank" rel="noopener noreferrer">
                      View profile
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  </Button>
                }
              />
            </StaggerItem>
          ) : null}
        </Stagger>
      </Section>

      {socialLinks.length > 0 ? (
        <Section spacing="lg" divider="top" labelledBy={ELSEWHERE_HEADING_ID}>
          <Reveal>
            <div
              className={cn(
                'flex flex-col gap-3',
                'sm:flex-row sm:items-center sm:justify-between',
              )}
            >
              <div className="flex flex-col gap-1">
                <Text as="span" variant="overline" color="tertiary">
                  Elsewhere
                </Text>
                <h2
                  id={ELSEWHERE_HEADING_ID}
                  className="font-display text-content-primary text-xl leading-snug font-semibold tracking-tight"
                >
                  Same person, other places
                </h2>
              </div>

              <SocialLinks links={socialLinks} />
            </div>
          </Reveal>
        </Section>
      ) : null}

      <Section spacing="lg" divider="top" label="Work">
        <Reveal>
          <div className="flex flex-col items-start gap-3">
            <Text variant="base" measure="sm">
              If you'd rather see the work first, the case studies go through the
              decisions behind each system rather than listing features.
            </Text>
            <Button asChild variant="outline">
              <Link href={routes.work}>Read the case studies</Link>
            </Button>
          </div>
        </Reveal>
      </Section>
    </PageLayout>
  )
}
