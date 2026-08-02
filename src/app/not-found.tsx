import Link from 'next/link'
import { Section } from '@/components/layout/section'
import { Heading, Text } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { routes } from '@/config/routes'

/**
 * NOT FOUND (404)
 * ----------------------------------------------------------------------------
 * Rendered for unmatched routes and for any `notFound()` call.
 *
 * Next serves this with a real HTTP 404 status. That matters for SEO: a
 * soft-404 (missing page returning 200) causes crawlers to index the error
 * page as legitimate content.
 *
 * Contains actual content rather than being an empty shell — unlike the route
 * pages, an error state with no escape route is a dead end. The recovery link
 * is the point of the page.
 */
export default function NotFound() {
  return (
    <Section spacing="xl" container="md">
      <div className="flex flex-col items-start gap-3">
        <Text variant="overline" color="muted">
          404
        </Text>

        <Heading as="h1" variant="h2">
          Page not found
        </Heading>

        <Text measure="sm">This page doesn&apos;t exist or has moved.</Text>

        <Button asChild variant="outline" className="mt-2">
          <Link href={routes.home}>Back to home</Link>
        </Button>
      </div>
    </Section>
  )
}
