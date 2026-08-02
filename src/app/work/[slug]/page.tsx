import { notFound } from 'next/navigation'
import { Section } from '@/components/layout/section'
import { buildMetadata } from '@/lib/metadata'
import { caseStudySlugs, type CaseStudySlug } from '@/config/routes'
import type { Metadata } from 'next'

/**
 * CASE STUDY — dynamic route
 * ----------------------------------------------------------------------------
 * One route file serves all three case studies. Duplicating it per project
 * would triple the maintenance cost of every structural change to the case
 * study layout.
 *
 * `generateStaticParams` pre-renders each slug at build time, so these ship as
 * static HTML with no server work per request.
 *
 * `dynamicParams = false` makes any slug outside the known set a 404 at the
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

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params

  return buildMetadata({
    title: slug,
    description: 'Placeholder. Replaced in the content phase.',
    path: `/work/${slug}`,
    type: 'article',
  })
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params

  // Runtime guard in addition to `dynamicParams`. The static-params check runs
  // at build; this protects the render path itself and narrows the type.
  if (!caseStudySlugs.includes(slug as CaseStudySlug)) {
    notFound()
  }

  return <Section label="Case study" />
}
