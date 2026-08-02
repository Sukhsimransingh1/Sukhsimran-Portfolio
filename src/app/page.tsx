import { Section } from '@/components/layout/section'
import { buildMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = buildMetadata({
  title: 'Home',
  description: 'Placeholder. Replaced in the content phase.',
  path: '/',
})

/**
 * HOME
 * ----------------------------------------------------------------------------
 * Structural shell only. Content and composition arrive in a later phase.
 */
export default function HomePage() {
  return <Section label="Home" />
}
