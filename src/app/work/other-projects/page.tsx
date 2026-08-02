import { PageLayout } from '@/components/layout/page-layout'
import { Section } from '@/components/layout/section'
import { Breadcrumb } from '@/components/navigation/breadcrumb'
import { routes } from '@/config/routes'
import { otherProjects } from '@/content/projects'
import { buildMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

/**
 * OTHER PROJECTS
 * ----------------------------------------------------------------------------
 * Work that does not warrant a full case study.
 *
 * WHY A STATIC SEGMENT NEXT TO `[slug]`
 * Next resolves static segments before dynamic ones, so `/work/other-projects`
 * matches this file rather than the case study route. The name is reserved as a
 * slug by consequence — a project may not use it.
 *
 * The list is driven by `otherProjects`, currently empty. Adding entries
 * requires no change here.
 */

export const metadata: Metadata = buildMetadata({
  title: 'Other projects',
  description: 'Placeholder. Replaced in the content phase.',
  path: routes.otherProjects,
})

export default function OtherProjectsPage() {
  return (
    <PageLayout
      title="Other projects"
      eyebrow="Work"
      headerSlot={
        <Breadcrumb
          items={[
            { label: 'Home', href: routes.home },
            { label: 'Work', href: routes.work },
            { label: 'Other projects' },
          ]}
        />
      }
    >
      <Section spacing="lg" label="Other projects">
        {otherProjects.length > 0 ? (
          <ul>
            {otherProjects.map((project) => (
              <li key={project.name}>{project.name}</li>
            ))}
          </ul>
        ) : null}
      </Section>
    </PageLayout>
  )
}
