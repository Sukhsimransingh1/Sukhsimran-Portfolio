import { Heading, Text } from '@/components/ui/typography'
import type { SkillGroup } from '@/content/types'
import { cn } from '@/lib/cn'

/**
 * SKILL CATEGORY
 * ----------------------------------------------------------------------------
 * One discipline and its skills, set as a typographic list rather than a wall
 * of pills.
 *
 * WHY NOT BADGES
 * A grid of identical badges flattens everything into one undifferentiated
 * texture — twenty pills read as twenty equally-weighted nouns, which is the
 * opposite of what a skills section should communicate. Rule-separated rows let
 * the optional `detail` field carry the substance (what was actually built with
 * it) and give the eye a vertical rhythm to scan.
 *
 * A `<ul>` rather than a run of divs: this is a list of items, and the
 * semantics let a screen reader announce its length before reading it.
 */

export interface SkillCategoryProps {
  group: SkillGroup
  className?: string
  as?: 'section' | 'li' | 'div'
  /** Ordinal shown beside the title. Omit to hide it. */
  index?: number
}

export function SkillCategory({
  group,
  className,
  as: Tag = 'section',
  index,
}: SkillCategoryProps) {
  return (
    <Tag className={cn('grid grid-cols-1 gap-2 md:grid-cols-12 md:gap-6', className)}>
      <div className="flex flex-col gap-1 md:col-span-4">
        <div className="flex items-baseline gap-2">
          {index !== undefined ? (
            <Text as="span" variant="caption" color="muted" className="tnum">
              {String(index + 1).padStart(2, '0')}
            </Text>
          ) : null}
          <Heading as="h3" variant="h5">
            {group.title}
          </Heading>
        </div>
        {group.summary ? (
          <Text variant="sm" color="tertiary" measure="sm">
            {group.summary}
          </Text>
        ) : null}
      </div>

      <ul className="flex flex-col md:col-span-8">
        {group.skills.map((skill) => (
          <li
            key={skill.name}
            className={cn(
              'border-border gap-0-5 flex flex-col border-b py-2',
              'first:pt-0 last:border-b-0 last:pb-0',
              'sm:flex-row sm:items-baseline sm:justify-between sm:gap-4',
            )}
          >
            <Text as="span" variant="base" color="primary" weight="medium">
              {skill.name}
            </Text>
            {skill.detail ? (
              <Text
                as="span"
                variant="sm"
                color="muted"
                className="sm:max-w-[var(--measure-xs)] sm:text-right"
              >
                {skill.detail}
              </Text>
            ) : null}
          </li>
        ))}
      </ul>
    </Tag>
  )
}
