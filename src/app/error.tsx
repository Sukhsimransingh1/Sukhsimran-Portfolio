'use client'

import { useEffect } from 'react'
import { Section } from '@/components/layout/section'
import { Heading, Text } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'

/**
 * ERROR BOUNDARY
 * ----------------------------------------------------------------------------
 * Catches runtime errors in this segment and below.
 *
 * MUST be a Client Component — error boundaries rely on React class-component
 * lifecycle, which has no server equivalent. This is one of the few places the
 * directive is genuinely required rather than convenient.
 *
 * `reset()` re-renders the segment without a full page reload, so a transient
 * failure (a flaky fetch) can recover without losing client state elsewhere.
 *
 * The raw error message is deliberately NOT displayed. In production Next
 * redacts it to avoid leaking stack traces and internal paths to users; showing
 * `error.message` directly would reinstate that leak. `error.digest` is the
 * server-side correlation ID and is the safe thing to surface.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Error reporting hooks in here once observability is wired up.
    console.error(error)
  }, [error])

  return (
    <Section spacing="xl" container="md">
      <div className="flex flex-col items-start gap-3">
        <Text variant="overline" color="muted">
          Error
        </Text>

        <Heading as="h1" variant="h2">
          Something went wrong
        </Heading>

        <Text measure="sm">
          An unexpected error occurred. Try again, or return to the homepage.
        </Text>

        {error.digest ? (
          <Text variant="xs" color="muted">
            Reference: {error.digest}
          </Text>
        ) : null}

        <Button onClick={reset} variant="outline" className="mt-2">
          Try again
        </Button>
      </div>
    </Section>
  )
}
