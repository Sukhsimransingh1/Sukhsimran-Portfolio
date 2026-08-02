import { Section } from '@/components/layout/section'
import { buildMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = buildMetadata({
  title: 'About',
  description: 'Placeholder. Replaced in the content phase.',
  path: '/about',
})

export default function AboutPage() {
  return <Section label="About" />
}
