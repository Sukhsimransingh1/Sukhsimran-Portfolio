import { Badge } from '@/components/ui/badge'
import { Heading, Text } from '@/components/ui/typography'
import type { SkillGroup } from '@/content/types'
import { cn } from '@/lib/cn'

/**
 * SKILL CATEGORY
 * ----------------------------------------------------------------------------
 * One group of skills, rendered as a titled list.
 *
 * A `<ul>` rather than a run of badges in a div: this is a list of items, and
 * the semantics let a screen reader announce its length before reading it.
 *
 * Structural only.
 */

export interface SkillCategoryProps {
  group: SkillGroup
  className?: string
  as?: 'section' | 'li' | 'div'
}

export function SkillCategory({
  group,
  className,
  as: Tag = 'section',
}: SkillCategoryProps) {
  return (
    <Tag className={cn('flex flex-col gap-1', className)}>
      <Heading as="h3" variant="h5">
        {group.title}
      </Heading>

      {group.summary ? (
        <Text variant="sm" measure="md">
          {group.summary}
        </Text>
      ) : null}

      <ul className="flex flex-wrap gap-1">
        {group.skills.map((skill) => (
          <li key={skill.name}>
            <Badge variant="outline" size="sm">
              {skill.name}
            </Badge>
          </li>
        ))}
      </ul>
    </Tag>
  )
}
