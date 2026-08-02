import { Timeline } from '@/components/ui/timeline'
import { Text } from '@/components/ui/typography'
import type { TimelineEntry, TimelineKind } from '@/content/types'
import { cn } from '@/lib/cn'

/**
 * TIMELINE LIST
 * ----------------------------------------------------------------------------
 * Renders the About page timeline over the existing `Timeline` primitive.
 *
 * `kind` drives a small text label rather than a colour: four coloured dots
 * would encode meaning in hue alone (WCAG 1.4.1), and the palette is
 * deliberately near-monochrome anyway.
 */

export interface TimelineListProps {
  entries: readonly TimelineEntry[]
  className?: string
}

const KIND_LABEL: Record<TimelineKind, string> = {
  experience: 'Role',
  education: 'Education',
  project: 'Project',
  achievement: 'Milestone',
}

/**
 * `'2024-06'` → `'Jun 2024'`. UTC-pinned — see `experience-card.tsx` for why.
 */
function formatMonth(iso: string): string {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return iso
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export function TimelineList({ entries, className }: TimelineListProps) {
  return (
    <Timeline className={cn(className)}>
      {entries.map((entry, index) => (
        <Timeline.Item
          key={`${entry.title}-${entry.start}`}
          isLast={index === entries.length - 1}
        >
          <Timeline.Marker />
          <Timeline.Content>
            <div className="flex flex-wrap items-baseline gap-2">
              <Text as="span" variant="caption" color="muted" className="tnum">
                <time dateTime={entry.start}>{formatMonth(entry.start)}</time>
                {entry.end ? (
                  <>
                    {' — '}
                    <time dateTime={entry.end}>{formatMonth(entry.end)}</time>
                  </>
                ) : null}
              </Text>
              <Text as="span" variant="overline" color="muted">
                {KIND_LABEL[entry.kind]}
              </Text>
            </div>

            <Text as="span" variant="base" color="primary" weight="medium">
              {entry.title}
            </Text>

            {entry.subtitle ? (
              <Text as="span" variant="sm" color="tertiary">
                {entry.subtitle}
              </Text>
            ) : null}

            {entry.description ? (
              <Text variant="sm" measure="md" className="mt-0-5">
                {entry.description}
              </Text>
            ) : null}
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline>
  )
}
