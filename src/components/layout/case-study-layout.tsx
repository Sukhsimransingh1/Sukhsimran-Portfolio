import { Badge } from '@/components/ui/badge'
import { Heading, Text } from '@/components/ui/typography'
import type {
  CaseStudy,
  CaseStudySection as CaseStudySectionData,
  Challenge,
  EngineeringDecision,
  ImpactMetric,
} from '@/content/types'
import { cn } from '@/lib/cn'

/**
 * CASE STUDY LAYOUT
 * ----------------------------------------------------------------------------
 * The narrative spine shared by every case study.
 *
 * WHY ONE LAYOUT FOR ALL PROJECTS
 * The reading order — overview, problem, solution, architecture, decisions,
 * challenges, impact, technology, gallery, links, reflection — is fixed, so a
 * reader comparing two projects does not have to relearn the structure. Owning
 * that order here means it is genuinely identical rather than identical by
 * convention, and a change to the spine is one edit rather than four.
 *
 * WHY EVERY SECTION IS CONDITIONAL
 * Sections render only when their data exists. A project that is still an
 * identity-only stub renders an empty article rather than a page of empty
 * headings, and a project with no gallery simply has no gallery — neither case
 * needs a flag or a variant.
 *
 * HEADING LEVELS
 * `CaseStudyHero` owns the `h1`. Every section here is an `h2`, so the document
 * outline stays flat and correct regardless of which sections are present.
 *
 * Structural only — spacing, rules and the reading-column treatment are
 * later-phase decisions.
 */

export interface CaseStudyLayoutProps {
  caseStudy: CaseStudy
  className?: string
}

/** A titled prose block. One `<p>` per paragraph. */
function ProseSection({
  section,
  fallbackHeading,
}: {
  section: CaseStudySectionData
  fallbackHeading: string
}) {
  return (
    <section className="flex flex-col gap-2">
      <Heading as="h2" variant="h3">
        {section.heading ?? fallbackHeading}
      </Heading>

      {section.body.map((paragraph) => (
        <Text key={paragraph} measure="md">
          {paragraph}
        </Text>
      ))}
    </section>
  )
}

function DecisionList({ decisions }: { decisions: readonly EngineeringDecision[] }) {
  return (
    <section className="flex flex-col gap-2">
      <Heading as="h2" variant="h3">
        Engineering decisions
      </Heading>

      <ul className="flex flex-col gap-3">
        {decisions.map((decision) => (
          <li key={decision.title} className="flex flex-col gap-1">
            <Heading as="h3" variant="h5">
              {decision.title}
            </Heading>
            <Text measure="md">{decision.rationale}</Text>

            {decision.alternatives && decision.alternatives.length > 0 ? (
              <div className="gap-0-5 flex flex-col">
                <Text as="span" variant="overline" color="tertiary">
                  Alternatives considered
                </Text>
                <ul className="flex flex-wrap gap-1">
                  {decision.alternatives.map((alternative) => (
                    <li key={alternative}>
                      <Badge variant="outline" size="sm">
                        {alternative}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  )
}

function ChallengeList({ challenges }: { challenges: readonly Challenge[] }) {
  return (
    <section className="flex flex-col gap-2">
      <Heading as="h2" variant="h3">
        Challenges
      </Heading>

      <ul className="flex flex-col gap-3">
        {challenges.map((challenge) => (
          <li key={challenge.title} className="flex flex-col gap-1">
            <Heading as="h3" variant="h5">
              {challenge.title}
            </Heading>
            <Text measure="md">{challenge.description}</Text>
            {challenge.resolution ? (
              <Text measure="md">{challenge.resolution}</Text>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  )
}

/**
 * Impact metrics.
 *
 * A `<dl>` rather than a list of divs: each metric is a term and its value, and
 * the description-list semantics let a screen reader announce the pairing.
 */
function ImpactList({ impact }: { impact: readonly ImpactMetric[] }) {
  return (
    <section className="flex flex-col gap-2">
      <Heading as="h2" variant="h3">
        Impact
      </Heading>

      <dl className="flex flex-wrap gap-4">
        {impact.map((metric) => (
          <div key={metric.label} className="gap-0-5 flex flex-col">
            <dt>
              <Text as="span" variant="overline" color="tertiary">
                {metric.label}
              </Text>
            </dt>
            <dd className="gap-0-5 flex flex-col">
              <Text as="span" variant="lg" color="primary" weight="semibold">
                {metric.value}
              </Text>
              {metric.detail ? (
                <Text as="span" variant="sm">
                  {metric.detail}
                </Text>
              ) : null}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export function CaseStudyLayout({ caseStudy, className }: CaseStudyLayoutProps) {
  const {
    overview,
    problem,
    solution,
    architecture,
    decisions,
    challenges,
    impact,
    technology,
    gallery,
    links,
    reflection,
  } = caseStudy

  return (
    <article className={cn('flex flex-col gap-12', className)}>
      {overview ? <ProseSection section={overview} fallbackHeading="Overview" /> : null}
      {problem ? <ProseSection section={problem} fallbackHeading="Problem" /> : null}
      {solution ? <ProseSection section={solution} fallbackHeading="Solution" /> : null}
      {architecture ? (
        <ProseSection section={architecture} fallbackHeading="Architecture" />
      ) : null}

      {decisions && decisions.length > 0 ? <DecisionList decisions={decisions} /> : null}
      {challenges && challenges.length > 0 ? (
        <ChallengeList challenges={challenges} />
      ) : null}
      {impact && impact.length > 0 ? <ImpactList impact={impact} /> : null}

      {technology && technology.length > 0 ? (
        <section className="flex flex-col gap-2">
          <Heading as="h2" variant="h3">
            Technology
          </Heading>
          <ul className="flex flex-wrap gap-1">
            {technology.map((item) => (
              <li key={item.name}>
                <Badge variant="outline" size="sm">
                  {item.name}
                </Badge>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Gallery renders its own figures in a later phase — `next/image` needs
          the sizing strategy that arrives with the design pass. */}
      {gallery && gallery.length > 0 ? (
        <section className="flex flex-col gap-2">
          <Heading as="h2" variant="h3">
            Gallery
          </Heading>
        </section>
      ) : null}

      {links && links.length > 0 ? (
        <section className="flex flex-col gap-2">
          <Heading as="h2" variant="h3">
            Links
          </Heading>
          <ul className="flex flex-wrap gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {reflection ? (
        <ProseSection section={reflection} fallbackHeading="Reflection" />
      ) : null}
    </article>
  )
}
