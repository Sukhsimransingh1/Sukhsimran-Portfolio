import { Reveal, Stagger, StaggerItem } from '@/animations'
import { ArrowUpRight } from 'lucide-react'
import { PageLayout } from '@/components/layout/page-layout'
import { Section } from '@/components/layout/section'
import { Breadcrumb } from '@/components/navigation/breadcrumb'
import { EmptyState } from '@/components/sections/empty-state'
import { Badge } from '@/components/ui/badge'
import { Text } from '@/components/ui/typography'
import { routes } from '@/config/routes'
import { otherProjects } from '@/content/projects'
import { buildMetadata } from '@/lib/metadata'
import { cn } from '@/lib/cn'
import type { Metadata } from 'next'

/**
 * OTHER PROJECTS
 * ----------------------------------------------------------------------------
 * Work that does not warrant a full case study.
 *
 * WHY A STATIC SEGMENT NEXT TO `[slug]`
 * Next resolves static segments before dynamic ones, so `/work/other-projects`
 * matches this file rather than the case study route. The name is reserved as a
 * slug by consequence — a project may not use it.
 *
 * WHY ROWS RATHER THAN THE `ProjectCard` GRID
 * These deliberately read as lighter than the featured work. Rendering them in
 * the same bordered cards would give a one-line experiment the same visual
 * weight as a full clinical platform, which is precisely the distinction the two
 * routes exist to draw. Rule-separated rows carry the same information at a
 * lower volume.
 *
 * Most entries carry no `href` — `OtherProject.href` is optional and none of
 * these have a URL on record — so the row is plain markup with no dead
 * affordance, matching how `CredentialList` handles the same situation. Setting
 * `href` on an entry in the registry turns its name into a link here with no
 * change to this file.
 */

export const metadata: Metadata = buildMetadata({
  title: 'Other projects',
  description:
    'Smaller machine learning builds and experiments — crop recommendation, churn prediction, student performance modelling and fake news classification.',
  path: routes.otherProjects,
})

export default function OtherProjectsPage() {
  return (
    <PageLayout
      title="Other projects"
      eyebrow="Work"
      description="Smaller builds and experiments. Real work, but not enough of a story to justify a case study."
      headerSlot={
        <Breadcrumb
          items={[
            { label: 'Home', href: routes.home },
            { label: 'Work', href: routes.work },
            { label: 'Other projects' },
          ]}
        />
      }
    >
      <Section spacing="lg" divider="top" label="Other projects">
        {otherProjects.length > 0 ? (
          <Stagger as="ul" className="flex flex-col">
            {otherProjects.map((project, index) => (
              <StaggerItem
                key={project.name}
                as="li"
                className="border-border border-t last:border-b"
              >
                <div
                  className={cn(
                    'grid grid-cols-1 items-baseline gap-2 py-6',
                    'md:grid-cols-12 md:gap-4',
                  )}
                >
                  <div className="md:col-span-1">
                    <Text as="span" variant="overline" color="muted" className="tnum">
                      {String(index + 1).padStart(2, '0')}
                    </Text>
                  </div>

                  <div className="flex flex-col gap-1 md:col-span-7">
                    <h2 className="font-display text-content-primary tracking-snug text-xl leading-snug font-semibold">
                      {project.href ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            'group inline-flex items-center gap-1',
                            'duration-fast ease-out transition-colors',
                            'hover:text-content-accent',
                          )}
                        >
                          {project.name}
                          <ArrowUpRight
                            aria-hidden="true"
                            className={cn(
                              'text-content-muted size-2 shrink-0',
                              'duration-fast ease-out transition-transform',
                              'group-hover:-translate-y-px group-hover:translate-x-px',
                            )}
                          />
                        </a>
                      ) : (
                        project.name
                      )}
                    </h2>
                    {project.summary ? (
                      <Text variant="base" measure="sm">
                        {project.summary}
                      </Text>
                    ) : null}
                  </div>

                  {project.stack && project.stack.length > 0 ? (
                    <ul className="flex flex-wrap gap-1 md:col-span-4 md:justify-end">
                      {project.stack.map((item) => (
                        <li key={item}>
                          <Badge variant="outline" size="sm">
                            {item}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        ) : (
          <Reveal>
            <EmptyState
              message="No additional projects listed yet."
              hint="Featured work lives under /work."
            />
          </Reveal>
        )}
      </Section>
    </PageLayout>
  )
}
