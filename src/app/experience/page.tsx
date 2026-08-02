import { PageLayout } from '@/components/layout/page-layout'
import { Section } from '@/components/layout/section'
import { ExperienceCard } from '@/components/content/experience-card'
import { routes } from '@/config/routes'
import { experience } from '@/content/experience'
import { buildMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

/**
 * EXPERIENCE
 * ----------------------------------------------------------------------------
 * Roles, most recent first. Driven by `src/content/experience.ts`, which is
 * empty until the content phase — the list renders nothing rather than
 * placeholder rows.
 */

export const metadata: Metadata = buildMetadata({
  title: 'Experience',
  description: 'Placeholder. Replaced in the content phase.',
  path: routes.experience,
})

export default function ExperiencePage() {
  return (
    <PageLayout title="Experience">
      <Section spacing="lg" label="Roles">
        {experience.length > 0 ? (
          <ul className="flex flex-col gap-8">
            {experience.map((entry) => (
              <ExperienceCard
                key={`${entry.company}-${entry.role}`}
                experience={entry}
                as="li"
              />
            ))}
          </ul>
        ) : null}
      </Section>
    </PageLayout>
  )
}
