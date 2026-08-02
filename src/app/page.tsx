import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Reveal } from '@/animations'
import { ProjectIndex } from '@/components/content/project-index'
import { Section } from '@/components/layout/section'
import { CTA } from '@/components/sections/cta'
import { Hero } from '@/components/sections/hero'
import { SectionHeader } from '@/components/sections/section-header'
import { Button } from '@/components/ui/button'
import { routes } from '@/config/routes'
import { siteConfig } from '@/config/site'
import { orderedProjects } from '@/content/projects'
import { cn } from '@/lib/cn'
import { buildMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = buildMetadata({
  title: 'Home',
  description: siteConfig.description,
  path: routes.home,
})

const WORK_HEADING_ID = 'featured-work'
const CONTACT_HEADING_ID = 'home-contact'

/**
 * HOME
 * ----------------------------------------------------------------------------
 * Composes `Section` directly rather than `PageLayout`, because the opening is
 * a full-height hero rather than the standard titled header band.
 *
 * WHY ONLY THREE BANDS
 * The page answers one question — is this person worth reading further — and
 * then gets out of the way. Skills, experience and credentials each have their
 * own route, and duplicating them here would make the home page a worse version
 * of four pages that already exist.
 *
 * Every string comes from `siteConfig` or the content registry. Sections whose
 * content is unwritten simply render nothing.
 */
export default function HomePage() {
  return (
    <>
      <Hero
        id="hero-title"
        eyebrow="AI Engineer"
        title={siteConfig.title}
        description={siteConfig.description}
        primaryAction={{ label: 'View work', href: routes.work }}
        secondaryAction={{ label: 'Get in touch', href: routes.contact }}
      />

      <Section spacing="xl" divider="top" labelledBy={WORK_HEADING_ID}>
        <Reveal>
          <SectionHeader
            id={WORK_HEADING_ID}
            eyebrow="Selected work"
            title="Case studies"
            action={
              <Link
                href={routes.work}
                className={cn(
                  'text-content-tertiary hover:text-content-primary',
                  'inline-flex items-center gap-1 font-sans text-sm font-medium',
                  'duration-fast transition-colors ease-out',
                )}
              >
                All work
                <ArrowRight aria-hidden="true" className="size-2 shrink-0" />
              </Link>
            }
          />
        </Reveal>

        <ProjectIndex projects={orderedProjects} className="mt-8" />
      </Section>

      <Section spacing="xl" divider="top" labelledBy={CONTACT_HEADING_ID}>
        <Reveal>
          <CTA
            id={CONTACT_HEADING_ID}
            title="Let's build something."
            actions={
              <Button asChild size="lg">
                <Link href={routes.contact}>
                  Get in touch
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            }
          />
        </Reveal>
      </Section>
    </>
  )
}
