import { Section } from '@/components/layout/section'

/**
 * CASE STUDY LOADING BOUNDARY
 * ----------------------------------------------------------------------------
 * Case studies are the longest pages on the site and the most likely to stream,
 * so they get their own boundary rather than inheriting the root one — this
 * keeps the header band from collapsing during navigation between projects.
 */
export default function Loading() {
  return <Section spacing="xl" label="Loading case study" />
}
