import { PageLayout } from '@/components/layout/page-layout'
import { Section } from '@/components/layout/section'
import { SkillCategory } from '@/components/content/skill-category'
import { routes } from '@/config/routes'
import { skillGroups } from '@/content/skills'
import { timeline } from '@/content/timeline'
import { achievements, certifications } from '@/content/achievements'
import { buildMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

/**
 * ABOUT
 * ----------------------------------------------------------------------------
 * Assembles the four content sources that describe the person: skills,
 * timeline, certifications and achievements. All four are empty until the
 * content phase; each section renders only when its source has entries, so the
 * page is a correct empty shell rather than a set of empty headings.
 */

export const metadata: Metadata = buildMetadata({
  title: 'About',
  description: 'Placeholder. Replaced in the content phase.',
  path: routes.about,
})

export default function AboutPage() {
  return (
    <PageLayout title="About">
      {skillGroups.length > 0 ? (
        <Section spacing="lg" label="Skills">
          <ul className="flex flex-col gap-6">
            {skillGroups.map((group) => (
              <SkillCategory key={group.title} group={group} as="li" />
            ))}
          </ul>
        </Section>
      ) : null}

      {timeline.length > 0 ? <Section spacing="lg" label="Timeline" /> : null}

      {certifications.length > 0 ? <Section spacing="lg" label="Certifications" /> : null}

      {achievements.length > 0 ? <Section spacing="lg" label="Achievements" /> : null}
    </PageLayout>
  )
}
