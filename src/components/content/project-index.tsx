'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { Stagger } from '@/animations'
import { Badge } from '@/components/ui/badge'
import { Text } from '@/components/ui/typography'
import { caseStudyPath } from '@/config/routes'
import type { Project } from '@/content/types'
import { cn } from '@/lib/cn'

/**
 * PROJECT INDEX
 * ----------------------------------------------------------------------------
 * Featured work as an editorial index rather than a card grid.
 *
 * WHY ROWS AND NOT CARDS
 * Four case studies in a card grid read as four equivalent tiles. As numbered
 * rules-separated rows they read as a table of contents — which is what a body
 * of case-study work actually is, and it scales down to one column without
 * changing character.
 *
 * The whole row is the hit target via an `::after` overlay on the title link,
 * so there is exactly one tab stop per project and no nested-interactive
 * violation.
 */

export interface ProjectIndexProps {
  projects: readonly Project[]
  className?: string
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const { slug, title, summary, year, role, stack } = project

  return (
    <Link
      href={caseStudyPath(slug)}
      className={cn(
        'grid grid-cols-1 items-baseline gap-2 py-6',
        'md:grid-cols-12 md:gap-4 md:py-8',
        // Stretches the hit target across the whole rule-to-rule band. The
        // parent `<li>` is `relative`, so this resolves against the row.
        'after:absolute after:inset-0 after:content-[""]',
        'duration-base ease-out transition-[padding]',
        'md:group-hover:pl-2',
      )}
    >
      {/* Index — a quiet ordinal, not a bullet. */}
      <div className="md:col-span-1">
        <Text as="span" variant="overline" color="muted" className="tnum">
          {String(index + 1).padStart(2, '0')}
        </Text>
      </div>

      <div className="flex flex-col gap-1 md:col-span-6">
        <h3
          className={cn(
            'font-display text-content-primary text-2xl leading-snug font-semibold tracking-tight',
            'duration-base ease-out transition-colors',
            'group-hover:text-content-accent',
          )}
        >
          {title}
        </h3>
        {summary ? (
          <Text variant="base" measure="sm">
            {summary}
          </Text>
        ) : null}
        {stack && stack.length > 0 ? (
          <ul className="mt-1 flex flex-wrap gap-1">
            {stack.map((item) => (
              <li key={item}>
                <Badge variant="outline" size="sm">
                  {item}
                </Badge>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {/* Metadata column — right-aligned on desktop to create a second
          vertical rhythm against the ordinal on the left. */}
      <div className="flex items-baseline gap-3 md:col-span-4 md:justify-end">
        {role ? (
          <Text as="span" variant="sm" color="tertiary">
            {role}
          </Text>
        ) : null}
        {year ? (
          <Text as="span" variant="sm" color="muted" className="tnum">
            {year}
          </Text>
        ) : null}
      </div>

      <div className="hidden md:col-span-1 md:flex md:justify-end">
        <ArrowUpRight
          aria-hidden="true"
          className={cn(
            'text-content-muted size-2 shrink-0',
            'duration-base ease-out transition-[transform,color]',
            'group-hover:text-content-accent group-hover:-translate-y-px group-hover:translate-x-px',
          )}
        />
      </div>
    </Link>
  )
}

export function ProjectIndex({ projects, className }: ProjectIndexProps) {
  return (
    <Stagger gap="loose" as="ul" className={cn('flex flex-col', className)}>
      {projects.map((project, index) => (
        <Stagger.Item
          key={project.slug}
          as="li"
          className="border-border group relative border-t last:border-b"
        >
          <ProjectRow project={project} index={index} />
        </Stagger.Item>
      ))}
    </Stagger>
  )
}
