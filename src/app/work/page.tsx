import { PageLayout } from '@/components/layout/page-layout'
import { Section } from '@/components/layout/section'
import { ProjectGrid } from '@/components/content/project-grid'
import { JsonLd } from '@/components/seo/json-ld'
import { routes } from '@/config/routes'
import { orderedProjects } from '@/content/projects'
import { workCollectionJsonLd } from '@/lib/json-ld'
import { buildMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

/**
 * WORK — case study index
 * ----------------------------------------------------------------------------
 * Lists the featured projects. Reads the registry rather than a local list, so
 * adding a project here requires no change to this file.
 */

export const metadata: Metadata = buildMetadata({
  title: 'Work',
  description: 'Placeholder. Replaced in the content phase.',
  path: routes.work,
})

export default function WorkPage() {
  return (
    <>
      <JsonLd data={workCollectionJsonLd(orderedProjects)} />

      <PageLayout title="Work" eyebrow="Case studies">
        <Section spacing="lg">
          <ProjectGrid projects={orderedProjects} />
        </Section>
      </PageLayout>
    </>
  )
}
