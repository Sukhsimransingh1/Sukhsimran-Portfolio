import { Section } from '@/components/layout/section'
import { buildMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description: 'Placeholder. Replaced in the content phase.',
  path: '/contact',
})

export default function ContactPage() {
  return <Section label="Contact" />
}
