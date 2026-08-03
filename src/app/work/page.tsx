import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Reveal } from '@/animations'
import { ProjectIndex } from '@/components/content/project-index'
import { ProjectGrid } from '@/components/content/project-grid'
import { PageLayout } from '@/components/layout/page-layout'
import { Section } from '@/components/layout/section'
import { SectionHeader } from '@/components/sections/section-header'
import { JsonLd } from '@/components/seo/json-ld'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/typography'
import { routes } from '@/config/routes'
import { orderedProjects, otherProjects } from '@/content/projects'
import { workCollectionJsonLd } from '@/lib/json-ld'
import { buildMetadata } from '@/lib/metadata'
import { cn } from '@/lib/cn'
import type { Metadata } from 'next'

/**
 * WORK — case study index
 * ----------------------------------------------------------------------------
 * Lists the featured projects. Reads the registry rather than a local list, so
 * adding a project here requires no change to this file.
 *
 * WHY TWO VIEWS OF THE SAME FOUR PROJECTS
 * They are not redundant — they are the index and the previews. `ProjectIndex`
 * is the table of contents: numbered rows, scannable in one pass, answering
 * "what is here". `ProjectGrid` below it is the preview layer, where each card
 * carries the standfirst and the stack — answering "is this one worth opening".
 *
 * A visitor who already knows what they want uses the rows; a visitor browsing
 * reads the cards. Collapsing them into one component would force a choice
 * between density and substance, and four case studies is too few to justify
 * pagination or filtering as the alternative.
 *
 * The trailing band links to `/work/other-projects` rather than inlining it: a
 * long list of minor work directly beneath the featured cards flattens the
 * distinction the two routes exist to draw.
 */

export const metadata: Metadata = buildMetadata({
  title: 'Work',
  description:
    'Case studies in applied machine learning and generative AI — clinical risk scoring, disaster intelligence, multi-document RAG and semantic resume matching.',
  path: routes.work,
})

const INDEX_HEADING_ID = 'work-index'
const PREVIEW_HEADING_ID = 'work-previews'
const MORE_HEADING_ID = 'work-more'

export default function WorkPage() {
  return (
    <>
      <JsonLd data={workCollectionJsonLd(orderedProjects)} />

      <PageLayout
        title="Work"
        eyebrow="Case studies"
        description="Systems built end to end — data, model, service, deployment. Each one written up as the decisions behind it rather than a feature list."
      >
        <Section spacing="lg" divider="top" labelledBy={INDEX_HEADING_ID}>
          <Reveal>
            <SectionHeader id={INDEX_HEADING_ID} eyebrow="Index" title="Selected work" />
          </Reveal>

          <ProjectIndex projects={orderedProjects} className="mt-8" />
        </Section>

        <Section spacing="lg" divider="top" labelledBy={PREVIEW_HEADING_ID}>
          <Reveal>
            <SectionHeader
              id={PREVIEW_HEADING_ID}
              eyebrow="Previews"
              title="In more detail"
              description="A standfirst and the stack for each, before you commit to the full case study."
            />
          </Reveal>

          <ProjectGrid projects={orderedProjects} className="mt-8" />
        </Section>

        {otherProjects.length > 0 ? (
          <Section spacing="lg" divider="top" labelledBy={MORE_HEADING_ID}>
            <Reveal>
              <div className="flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
                <div className="flex flex-col gap-1">
                  <Text variant="overline" color="tertiary">
                    Beyond the case studies
                  </Text>
                  <h2
                    id={MORE_HEADING_ID}
                    className={cn(
                      'font-display text-content-primary text-3xl leading-tight font-semibold tracking-tight text-balance',
                    )}
                  >
                    {otherProjects.length} more projects
                  </h2>
                  <Text variant="base" measure="md">
                    Smaller builds and experiments that do not carry a full write-up.
                  </Text>
                </div>

                <Button asChild variant="outline">
                  <Link href={routes.otherProjects}>
                    Browse all
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </Section>
        ) : null}
      </PageLayout>
    </>
  )
}
