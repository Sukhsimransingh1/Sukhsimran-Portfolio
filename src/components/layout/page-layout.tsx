import type { ReactNode } from 'react'
import { Section } from '@/components/layout/section'
import { PageHeader } from '@/components/sections/page-header'
import type { ContainerProps } from '@/components/layout/container'

/**
 * PAGE LAYOUT
 * ----------------------------------------------------------------------------
 * The standard shape of a top-level page: a titled header band, then content.
 *
 * WHY THIS EXISTS ON TOP OF `Section`
 * Every page repeats the same three decisions — header spacing, the heading id
 * that names the landmark, and where the content band begins. Composing that
 * here means adding a page is one component, and a change to page rhythm is one
 * edit rather than six.
 *
 * The header heading gets a fixed `id` which is passed to the section as
 * `labelledBy`, so the header is exposed as a named landmark. A generated id
 * would differ between server and client render.
 *
 * Pages with a bespoke opening (the homepage, case studies) compose `Section`
 * directly instead — this is the default, not a requirement.
 */

const HEADER_HEADING_ID = 'page-title'

export interface PageLayoutProps {
  title: string
  eyebrow?: string
  description?: string
  /** Page body. Typically one or more `Section`s. */
  children?: ReactNode
  /** Slot beneath the header — breadcrumbs, filters, actions. */
  headerSlot?: ReactNode
  /** Width of the header's container. Body sections own their own. */
  container?: ContainerProps['size']
}

export function PageLayout({
  title,
  eyebrow,
  description,
  children,
  headerSlot,
  container = 'xl',
}: PageLayoutProps) {
  return (
    <>
      <Section spacing="lg" container={container} labelledBy={HEADER_HEADING_ID}>
        <PageHeader
          title={title}
          eyebrow={eyebrow}
          description={description}
          id={HEADER_HEADING_ID}
        >
          {headerSlot}
        </PageHeader>
      </Section>

      {children}
    </>
  )
}
