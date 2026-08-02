import { notFound } from 'next/navigation'
import { CaseStudyLayout } from '@/components/layout/case-study-layout'
import { Section } from '@/components/layout/section'
import { Breadcrumb } from '@/components/navigation/breadcrumb'
import { ScrollProgress } from '@/components/navigation/scroll-progress'
import { CaseStudyHero } from '@/components/sections/case-study-hero'
import { JsonLd } from '@/components/seo/json-ld'
import { routes } from '@/config/routes'
import { getProjectBySlug, projectSlugs } from '@/content/projects'
import { caseStudyJsonLd } from '@/lib/json-ld'
import { buildMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

/**
 * CASE STUDY — dynamic route
 * ----------------------------------------------------------------------------
 * One route file serves every case study. Duplicating it per project would
 * multiply the maintenance cost of every structural change to the case study
 * layout.
 *
 * `generateStaticParams` pre-renders each slug at build time from the project
 * registry, so these ship as static HTML with no server work per request, and
 * adding a project to `src/content/projects.ts` adds its route automatically.
 *
 * `dynamicParams = false` makes any slug outside the registry a 404 at the
 * routing layer. Without it, Next would attempt to render unknown slugs on
 * demand — which for a fixed, content-driven set is never correct.
 *
 * In Next 15 `params` is a Promise and must be awaited. This is the async
 * request API change: params are no longer available synchronously because the
 * router may stream them.
 */

interface PageProps {
  params: Promise<{ slug: string }>
}

const HERO_HEADING_ID = 'case-study-title'

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return buildMetadata({
      title: 'Not found',
      description: 'This case study does not exist.',
      path: `${routes.work}/${slug}`,
      noIndex: true,
    })
  }

  return buildMetadata({
    title: project.title,
    description: project.summary ?? project.description ?? '',
    path: `${routes.work}/${project.slug}`,
    type: 'article',
    ...(project.cover ? { image: project.cover.src } : {}),
  })
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params

  // Lookup doubles as the existence guard. `dynamicParams` blocks unknown slugs
  // at the routing layer; this protects the render path and narrows the type
  // from `Project | undefined` for everything below.
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <JsonLd data={caseStudyJsonLd(project)} />
      <ScrollProgress />

      <Section spacing="lg" labelledBy={HERO_HEADING_ID}>
        <Breadcrumb
          items={[
            { label: 'Home', href: routes.home },
            { label: 'Work', href: routes.work },
            { label: project.title },
          ]}
        />

        <CaseStudyHero project={project} id={HERO_HEADING_ID} />
      </Section>

      {project.caseStudy ? (
        <Section spacing="lg" container="prose">
          <CaseStudyLayout caseStudy={project.caseStudy} />
        </Section>
      ) : null}
    </>
  )
}
