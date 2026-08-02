import { Badge } from '@/components/ui/badge'
import { Heading, Text } from '@/components/ui/typography'
import type { Experience } from '@/content/types'
import { cn } from '@/lib/cn'

/**
 * EXPERIENCE CARD
 * ----------------------------------------------------------------------------
 * One role. Used on `/experience` and, in condensed form, on the About page.
 *
 * WHY DATES ARE RENDERED IN A `<time>`
 * The ISO string in the content layer (`'2024-06'`) is machine-readable but not
 * how a reader wants to see it. `<time dateTime={iso}>` keeps the machine value
 * in the markup while the visible text is formatted for humans — one element,
 * both audiences.
 *
 * A missing `end` means the role is current, rendered as "Present" rather than
 * an empty range.
 *
 * Structural only — date formatting is deliberately minimal here; the display
 * format is a content-phase decision.
 */

export interface ExperienceCardProps {
  experience: Experience
  className?: string
  as?: 'article' | 'li' | 'div'
}

export function ExperienceCard({
  experience,
  className,
  as: Tag = 'article',
}: ExperienceCardProps) {
  const { company, role, start, end, location, summary, highlights, stack } = experience

  return (
    <Tag className={cn('flex flex-col gap-1', className)}>
      <Heading as="h3" variant="h4">
        {role}
      </Heading>

      <div className="flex flex-wrap items-center gap-1">
        <Text as="span" variant="sm" color="primary">
          {company}
        </Text>

        <Text as="span" variant="sm" color="tertiary">
          <time dateTime={start}>{start}</time>
          {' — '}
          {end ? <time dateTime={end}>{end}</time> : 'Present'}
        </Text>

        {location ? (
          <Text as="span" variant="sm" color="tertiary">
            {location}
          </Text>
        ) : null}
      </div>

      {summary ? <Text measure="md">{summary}</Text> : null}

      {highlights && highlights.length > 0 ? (
        <ul className="gap-0-5 flex flex-col">
          {highlights.map((highlight) => (
            <li key={highlight}>
              <Text variant="sm" measure="md">
                {highlight}
              </Text>
            </li>
          ))}
        </ul>
      ) : null}

      {stack && stack.length > 0 ? (
        <ul className="flex flex-wrap gap-1">
          {stack.map((item) => (
            <li key={item}>
              <Badge variant="outline" size="sm">
                {item}
              </Badge>
            </li>
          ))}
        </ul>
      ) : null}
    </Tag>
  )
}
