import { Section } from '@/components/layout/section'
import { buildMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = buildMetadata({
  title: 'Work',
  description: 'Placeholder. Replaced in the content phase.',
  path: '/work',
})

export default function WorkPage() {
  return <Section label="Work" />
}
