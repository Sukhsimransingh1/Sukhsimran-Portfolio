import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

import { Reveal } from '@/animations'
import { Badge } from '@/components/ui/badge'
import { Heading, Text } from '@/components/ui/typography'
import type {
  CaseStudy,
  CaseStudySection as CaseStudySectionData,
  Challenge,
  EngineeringDecision,
  GalleryItem,
  ImpactMetric,
  ProjectLink,
  Technology,
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
 * LAYOUT
 * Each section is a two-column grid: a sticky label in the left rail and the
 * content in a reading-measure column on the right. The rail collapses above
 * the content on narrow viewports. This is what makes a long case study
 * navigable without a floating table of contents.
 */

export interface CaseStudyLayoutProps {
  caseStudy: CaseStudy
  className?: string
}

/**
 * The shared section frame: sticky rail label + content column.
 *
 * `scroll-mt` clears the fixed header when a section is jumped to by anchor.
 */
function Block({
  label,
  heading,
  children,
}: {
  label: string
  heading?: string
  children: React.ReactNode
}) {
  return (
    <Reveal
      as="section"
      className="scroll-mt-[calc(var(--header-height)+var(--space-4))] grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-6"
    >
      <div className="md:col-span-3">
        <div className="md:sticky md:top-[calc(var(--header-height)+var(--space-4))]">
          <Text as="span" variant="overline" color="muted">
            {label}
          </Text>
        </div>
      </div>

      <div className="flex flex-col gap-3 md:col-span-9">
        {heading ? (
          <Heading as="h2" variant="h3" className="max-w-[var(--measure-sm)]">
            {heading}
          </Heading>
        ) : null}
        {children}
      </div>
    </Reveal>
  )
}

function ProseSection({
  section,
  label,
}: {
  section: CaseStudySectionData
  label: string
}) {
  return (
    <Block label={label} {...(section.heading ? { heading: section.heading } : {})}>
      <div className="flex flex-col gap-2">
        {section.body.map((paragraph) => (
          <Text key={paragraph} variant="base" measure="md">
            {paragraph}
          </Text>
        ))}
      </div>
    </Block>
  )
}

function DecisionList({ decisions }: { decisions: readonly EngineeringDecision[] }) {
  return (
    <Block label="Decisions" heading="Engineering decisions">
      <ol className="flex flex-col">
        {decisions.map((decision, index) => (
          <li
            key={decision.title}
            className="border-border flex flex-col gap-1 border-t py-4 first:border-t-0 first:pt-0 last:pb-0"
          >
            <div className="flex items-baseline gap-2">
              <Text as="span" variant="caption" color="muted" className="tnum">
                {String(index + 1).padStart(2, '0')}
              </Text>
              <Heading as="h3" variant="h5">
                {decision.title}
              </Heading>
            </div>
            <Text variant="base" measure="md">
              {decision.rationale}
            </Text>
            {decision.alternatives && decision.alternatives.length > 0 ? (
              <div className="gap-0-5 mt-1 flex flex-col">
                <Text as="span" variant="overline" color="muted">
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
      </ol>
    </Block>
  )
}

function ChallengeList({ challenges }: { challenges: readonly Challenge[] }) {
  return (
    <Block label="Challenges" heading="Challenges">
      <ul className="flex flex-col gap-4">
        {challenges.map((challenge) => (
          <li key={challenge.title} className="flex flex-col gap-1">
            <Heading as="h3" variant="h5">
              {challenge.title}
            </Heading>
            <Text variant="base" measure="md">
              {challenge.description}
            </Text>
            {challenge.resolution ? (
              // The resolution is the payoff — marked by a rule so it reads as
              // the answer to the problem stated above it, not a continuation.
              <div className="border-border-strong mt-1 border-l-2 pl-3">
                <Text variant="base" measure="md" color="secondary">
                  {challenge.resolution}
                </Text>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </Block>
  )
}

function ImpactList({ impact }: { impact: readonly ImpactMetric[] }) {
  return (
    <Block label="Impact" heading="Impact">
      <dl className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3">
        {impact.map((metric) => (
          <div
            key={metric.label}
            className="border-border gap-0-5 flex flex-col border-t py-3"
          >
            <dt>
              <Text as="span" variant="overline" color="muted">
                {metric.label}
              </Text>
            </dt>
            <dd className="gap-0-5 flex flex-col">
              <Text
                as="span"
                color="primary"
                weight="semibold"
                className="font-display tnum text-2xl leading-none tracking-tight"
              >
                {metric.value}
              </Text>
              {metric.detail ? (
                <Text as="span" variant="sm" color="tertiary">
                  {metric.detail}
                </Text>
              ) : null}
            </dd>
          </div>
        ))}
      </dl>
    </Block>
  )
}

/**
 * Technologies grouped by their `category` field.
 *
 * Uncategorised entries collect under a single unlabelled group rather than
 * being dropped, so a partially-categorised list still renders in full.
 */
function TechnologyList({ technology }: { technology: readonly Technology[] }) {
  const groups = new Map<string, Technology[]>()
  for (const item of technology) {
    const key = item.category ?? ''
    const existing = groups.get(key)
    if (existing) existing.push(item)
    else groups.set(key, [item])
  }

  return (
    <Block label="Stack" heading="Technology">
      <div className="flex flex-col gap-3">
        {[...groups.entries()].map(([category, items]) => (
          <div key={category || 'uncategorised'} className="flex flex-col gap-1">
            {category ? (
              <Text as="span" variant="overline" color="muted">
                {category}
              </Text>
            ) : null}
            <ul className="flex flex-wrap gap-1">
              {items.map((item) => (
                <li key={item.name}>
                  <Badge variant="outline" size="sm">
                    {item.name}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Block>
  )
}

function Gallery({ gallery }: { gallery: readonly GalleryItem[] }) {
  return (
    <Block label="Gallery">
      <ul className="flex flex-col gap-6">
        {gallery.map((item) => (
          <li key={item.src}>
            <figure className="flex flex-col gap-1">
              <div className="border-border bg-surface-subtle overflow-hidden rounded-lg border">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="h-auto w-full"
                  sizes="(min-width: 768px) 66vw, 100vw"
                />
              </div>
              {item.caption ? (
                <figcaption>
                  <Text variant="caption" color="muted">
                    {item.caption}
                  </Text>
                </figcaption>
              ) : null}
            </figure>
          </li>
        ))}
      </ul>
    </Block>
  )
}

function LinkList({ links }: { links: readonly ProjectLink[] }) {
  return (
    <Block label="Links">
      <ul className="flex flex-col">
        {links.map((link) => (
          <li key={link.href} className="border-border border-t last:border-b">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'group flex items-center justify-between gap-2 py-3',
                'duration-fast ease-out transition-colors',
                'hover:text-content-accent',
              )}
            >
              <span className="flex flex-col">
                <Text as="span" variant="base" color="primary" weight="medium">
                  {link.label}
                </Text>
                <Text as="span" variant="caption" color="muted">
                  {link.kind}
                </Text>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className={cn(
                  'text-content-muted size-2 shrink-0',
                  'duration-fast ease-out transition-transform',
                  'group-hover:-translate-y-px group-hover:translate-x-px',
                )}
              />
            </a>
          </li>
        ))}
      </ul>
    </Block>
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
    <article className={cn('flex flex-col gap-12 md:gap-16', className)}>
      {overview ? <ProseSection section={overview} label="Overview" /> : null}
      {problem ? <ProseSection section={problem} label="Problem" /> : null}
      {solution ? <ProseSection section={solution} label="Solution" /> : null}
      {architecture ? (
        <ProseSection section={architecture} label="Architecture" />
      ) : null}
      {decisions && decisions.length > 0 ? <DecisionList decisions={decisions} /> : null}
      {challenges && challenges.length > 0 ? (
        <ChallengeList challenges={challenges} />
      ) : null}
      {impact && impact.length > 0 ? <ImpactList impact={impact} /> : null}
      {technology && technology.length > 0 ? (
        <TechnologyList technology={technology} />
      ) : null}
      {gallery && gallery.length > 0 ? <Gallery gallery={gallery} /> : null}
      {links && links.length > 0 ? <LinkList links={links} /> : null}
      {reflection ? <ProseSection section={reflection} label="Reflection" /> : null}
    </article>
  )
}
