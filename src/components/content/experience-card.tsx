import { Badge } from '@/components/ui/badge'
import { Heading, Text } from '@/components/ui/typography'
import type { Experience } from '@/content/types'
import { cn } from '@/lib/cn'

/**
 * EXPERIENCE CARD
 * ----------------------------------------------------------------------------
 * One role, laid out as a two-column record: dates in a left rail, the role and
 * its detail in the content column.
 *
 * WHY A RAIL RATHER THAN INLINE DATES
 * A reader scanning a résumé reads the date column first to place the role in
 * time. Inline dates force them to parse a sentence to answer "when". The rail
 * collapses above the content below `md`, where two columns would leave neither
 * enough width.
 *
 * WHY DATES ARE RENDERED IN A `<time>`
 * The ISO string in the content layer (`'2024-06'`) is machine-readable but not
 * how a reader wants to see it. `<time dateTime={iso}>` keeps the machine value
 * in the markup while the visible text is formatted for humans — one element,
 * both audiences.
 *
 * A missing `end` means the role is current, rendered as "Present" rather than
 * an empty range.
 */

export interface ExperienceCardProps {
  experience: Experience
  className?: string
  as?: 'article' | 'li' | 'div'
}

/**
 * `'2024-06'` → `'Jun 2024'`.
 *
 * `timeZone: 'UTC'` is load-bearing: `new Date('2024-06')` parses as midnight
 * UTC, and formatting that in any timezone behind UTC yields the previous
 * month. Unparseable input falls through unchanged rather than rendering
 * "Invalid Date".
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

export function ExperienceCard({
  experience,
  className,
  as: Tag = 'article',
}: ExperienceCardProps) {
  const { company, role, start, end, location, summary, highlights, stack } = experience

  return (
    <Tag className={cn('grid grid-cols-1 gap-2 md:grid-cols-12 md:gap-6', className)}>
      <div className="md:col-span-3">
        <Text as="span" variant="caption" color="muted" className="tnum">
          <time dateTime={start}>{formatMonth(start)}</time>
          {' — '}
          {end ? <time dateTime={end}>{formatMonth(end)}</time> : 'Present'}
        </Text>
        {location ? (
          <Text variant="caption" color="muted" className="mt-0-5">
            {location}
          </Text>
        ) : null}
      </div>

      <div className="flex flex-col gap-2 md:col-span-9">
        <div className="gap-0-5 flex flex-col">
          <Heading as="h3" variant="h4">
            {role}
          </Heading>
          <Text as="span" variant="base" color="tertiary">
            {company}
          </Text>
        </div>

        {summary ? (
          <Text variant="base" measure="md">
            {summary}
          </Text>
        ) : null}

        {highlights && highlights.length > 0 ? (
          <ul className="flex flex-col gap-1">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                {/* Decorative — the `<li>` already conveys list membership, so
                    announcing a bullet glyph would be noise. */}
                <span
                  aria-hidden="true"
                  className="bg-border-strong size-0-5 mt-[0.7em] shrink-0 rounded-full"
                />
                <Text variant="sm" measure="md">
                  {highlight}
                </Text>
              </li>
            ))}
          </ul>
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
    </Tag>
  )
}
