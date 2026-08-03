import { Reveal, Stagger, StaggerItem } from '@/animations'
import { ExperienceCard } from '@/components/content/experience-card'
import { TimelineList } from '@/components/content/timeline-list'
import { PageLayout } from '@/components/layout/page-layout'
import { Section } from '@/components/layout/section'
import { SectionHeader } from '@/components/sections/section-header'
import { routes } from '@/config/routes'
import { experience } from '@/content/experience'
import { timeline } from '@/content/timeline'
import { buildMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

/**
 * EXPERIENCE
 * ----------------------------------------------------------------------------
 * Roles in full, then the same history compressed into a dated timeline.
 *
 * WHY BOTH VIEWS ON ONE PAGE
 * They answer different questions. The cards answer "what was the work"; the
 * timeline answers "when, and against what else". The timeline also carries
 * education, which is not a role and so cannot appear in the list above.
 *
 * Each band renders only when its source has entries — a heading above an empty
 * list reads as a rendering failure rather than as an absence of content.
 */

export const metadata: Metadata = buildMetadata({
  title: 'Experience',
  description:
    'Backend AI engineering work — FastAPI services, LLM workflows, agentic pipelines and RAG systems in production.',
  path: routes.experience,
})

const ROLES_HEADING_ID = 'experience-roles'
const TIMELINE_HEADING_ID = 'experience-timeline'

export default function ExperiencePage() {
  return (
    <PageLayout
      title="Experience"
      eyebrow="Career"
      description="Where the systems were built, and what they had to do once they were."
    >
      {experience.length > 0 ? (
        <Section spacing="lg" divider="top" labelledBy={ROLES_HEADING_ID}>
          <Reveal>
            <SectionHeader id={ROLES_HEADING_ID} eyebrow="Positions" title="Roles" />
          </Reveal>

          <Stagger as="ul" className="mt-8 flex flex-col">
            {experience.map((entry) => (
              <StaggerItem
                key={`${entry.company}-${entry.role}`}
                as="li"
                className="border-border border-t py-6 first:border-t-0 first:pt-0 last:pb-0"
              >
                <ExperienceCard experience={entry} as="div" />
              </StaggerItem>
            ))}
          </Stagger>
        </Section>
      ) : null}

      {timeline.length > 0 ? (
        <Section spacing="lg" divider="top" labelledBy={TIMELINE_HEADING_ID}>
          <Reveal>
            <SectionHeader
              id={TIMELINE_HEADING_ID}
              eyebrow="Chronology"
              title="Timeline"
              description="Roles and education in a single dated sequence."
            />
          </Reveal>

          <Reveal className="mt-8">
            <TimelineList entries={timeline} />
          </Reveal>
        </Section>
      ) : null}
    </PageLayout>
  )
}
