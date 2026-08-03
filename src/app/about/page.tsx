import { Reveal, Stagger, StaggerItem } from '@/animations'
import {
  CredentialList,
  achievementToItem,
  certificationToItem,
} from '@/components/content/credential-list'
import { SkillCategory } from '@/components/content/skill-category'
import { PageLayout } from '@/components/layout/page-layout'
import { Section } from '@/components/layout/section'
import { SectionHeader } from '@/components/sections/section-header'
import { Text } from '@/components/ui/typography'
import { routes } from '@/config/routes'
import { achievements, certifications } from '@/content/achievements'
import { skillGroups } from '@/content/skills'
import { buildMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

/**
 * ABOUT
 * ----------------------------------------------------------------------------
 * Three bands: the bio, skills, then credentials.
 *
 * The dated timeline deliberately lives on `/experience` rather than here — it
 * is the same `timeline` source, and rendering it on both pages would give two
 * routes identical content competing for the same search query.
 *
 * WHY THE BIO PROSE LIVES HERE AND NOT IN `src/content`
 * The content registry holds *collections* — things that are enumerated,
 * ordered and rendered by a mapping component. The opening paragraphs are
 * singular editorial copy with exactly one consumer, and a module exporting one
 * string array would add an indirection without adding a capability.
 *
 * Each section still guards on its source being non-empty: a heading above an
 * empty list reads as a rendering failure.
 */

export const metadata: Metadata = buildMetadata({
  title: 'About',
  description:
    'Computer Science undergraduate specialising in machine learning and generative AI, building production-ready AI systems end to end.',
  path: routes.about,
})

const SKILLS_HEADING_ID = 'about-skills'
const CREDENTIALS_HEADING_ID = 'about-credentials'

const BIO_LEAD =
  'I am a Computer Science undergraduate at IK Gujral Punjab Technical University, where my work centres on machine learning, generative AI and the engineering that turns a model into a system somebody can actually use.'

const BIO = [
  'I have built end-to-end ML pipelines, retrieval-augmented generation systems, NLP applications and full-stack AI products spanning healthcare, disaster intelligence, document understanding and intelligent assistants.',
  'What interests me is the whole lifecycle rather than any single stage of it — data processing, model training, API development, deployment, and the production behaviour that only appears once real traffic arrives.',
  'The through-line is AI that is reliable, explainable and useful outside a notebook.',
]

const FACTS = [
  { label: 'Degree', value: 'B.Tech, Computer Science & Engineering' },
  { label: 'University', value: 'IK Gujral Punjab Technical University' },
  { label: 'Years', value: '2023 — 2027' },
  { label: 'CGPA', value: '9.01 / 10' },
  { label: 'Focus', value: 'Machine Learning · Generative AI' },
]

export default function AboutPage() {
  return (
    <PageLayout
      title="About"
      eyebrow="Profile"
      description="Building intelligent systems with AI and machine learning."
    >
      <Section spacing="lg" label="Biography">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="flex flex-col gap-3 md:col-span-7">
            <Reveal>
              <Text variant="lead" color="primary" measure="md">
                {BIO_LEAD}
              </Text>
            </Reveal>

            <Stagger className="flex flex-col gap-3">
              {BIO.map((paragraph) => (
                <StaggerItem key={paragraph}>
                  <Text variant="base" measure="md">
                    {paragraph}
                  </Text>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* A definition list, not a table: these are label/value pairs with no
              row-and-column relationship to encode. */}
          <Reveal className="md:col-span-4 md:col-start-9">
            <dl className="flex flex-col">
              {FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className={
                    'border-border gap-0-5 flex flex-col border-b py-2 first:pt-0 last:border-b-0 last:pb-0'
                  }
                >
                  <dt>
                    <Text as="span" variant="overline" color="muted">
                      {fact.label}
                    </Text>
                  </dt>
                  <dd>
                    <Text as="span" variant="sm" color="primary">
                      {fact.value}
                    </Text>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>

      {skillGroups.length > 0 ? (
        <Section spacing="lg" divider="top" labelledBy={SKILLS_HEADING_ID}>
          <Reveal>
            <SectionHeader
              id={SKILLS_HEADING_ID}
              eyebrow="Capabilities"
              title="Skills"
              description="Grouped by discipline rather than listed flat — what each one is, and what it has been used to build."
            />
          </Reveal>

          <ul className="mt-8 flex flex-col">
            {skillGroups.map((group, index) => (
              <li
                key={group.title}
                className="border-border border-t py-6 first:border-t-0 first:pt-0 last:pb-0"
              >
                <Reveal>
                  <SkillCategory group={group} index={index} as="div" />
                </Reveal>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      {certifications.length > 0 || achievements.length > 0 ? (
        <Section spacing="lg" divider="top" labelledBy={CREDENTIALS_HEADING_ID}>
          <Reveal>
            <SectionHeader
              id={CREDENTIALS_HEADING_ID}
              eyebrow="Record"
              title="Certifications & achievements"
            />
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-12">
            {certifications.length > 0 ? (
              <Reveal className="md:col-span-6">
                <Text variant="overline" color="tertiary" className="mb-2">
                  Certifications
                </Text>
                <CredentialList items={certifications.map(certificationToItem)} />
              </Reveal>
            ) : null}

            {achievements.length > 0 ? (
              <Reveal className="md:col-span-6">
                <Text variant="overline" color="tertiary" className="mb-2">
                  Achievements
                </Text>
                <CredentialList items={achievements.map(achievementToItem)} />
              </Reveal>
            ) : null}
          </div>
        </Section>
      ) : null}
    </PageLayout>
  )
}
