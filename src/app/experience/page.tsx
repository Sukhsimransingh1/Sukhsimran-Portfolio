import { Section } from '@/components/layout/section'
import { buildMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = buildMetadata({
  title: 'Experience',
  description: 'Placeholder. Replaced in the content phase.',
  path: '/experience',
})

export default function ExperiencePage() {
  return <Section label="Experience" />
}
