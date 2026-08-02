import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { AnimatedHeading, AnimatedParagraph, Magnetic, Reveal } from '@/animations'
import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/typography'
import { cn } from '@/lib/cn'

/**
 * HERO
 * ----------------------------------------------------------------------------
 * The first screen. Composition rather than decoration: an eyebrow, one display
 * headline, a standfirst at reading measure, and two actions.
 *
 * Animations run `immediate` because the hero is above the fold — a
 * `whileInView` trigger here would either fire on mount anyway or, worse, leave
 * the headline invisible if the viewport observer resolves late.
 */

export interface HeroProps {
  /** Display headline. Split into words and revealed on a stagger. */
  title: string
  /** Small label above the headline. */
  eyebrow?: string
  /** Standfirst beneath the headline. */
  description?: string
  /** Optional trailing line — availability, location, current focus. */
  meta?: string
  primaryAction?: { label: string; href: string }
  secondaryAction?: { label: string; href: string }
  className?: string
  id?: string
}

/**
 * Hairline grid, radially masked so it reads as texture at the edges and
 * vanishes behind the type. Purely decorative — `aria-hidden`, and it never
 * intercepts pointer events.
 */
function HeroBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="inert-visual z-behind absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-border-subtle) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-border-subtle) 1px, transparent 1px)
          `,
          backgroundSize: 'var(--space-10) var(--space-10)',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgb(0 0 0 / 0.5), transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgb(0 0 0 / 0.5), transparent 70%)',
        }}
      />
    </div>
  )
}

export function Hero({
  title,
  eyebrow,
  description,
  meta,
  primaryAction,
  secondaryAction,
  className,
  id,
}: HeroProps) {
  return (
    <section
      aria-labelledby={id}
      className={cn(
        'relative isolate flex w-full items-center',
        // Leaves the fold just short of the viewport so the next section peeks
        // through — a full 100dvh hero reads as a landing page, not a portfolio.
        'min-h-[calc(100dvh-var(--header-height))] py-16 md:min-h-[calc(88dvh-var(--header-height))]',
        className,
      )}
    >
      <HeroBackdrop />

      <Container>
        <div className="flex max-w-[var(--measure-xl)] flex-col items-start">
          {eyebrow ? (
            <Reveal immediate variant="fade" className="mb-3">
              <span className="border-border bg-surface/60 flex items-center gap-1 rounded-full border px-2 py-0-5">
                <span
                  aria-hidden="true"
                  className="bg-accent size-0-5 shrink-0 rounded-full"
                />
                <Text as="span" variant="overline" color="tertiary">
                  {eyebrow}
                </Text>
              </span>
            </Reveal>
          ) : null}

          <AnimatedHeading
            immediate
            as="h1"
            text={title}
            delay={0.08}
            className="font-display text-content-primary text-5xl leading-none font-semibold tracking-tighter text-balance"
          />

          {description ? (
            <AnimatedParagraph
              immediate
              delay={0.28}
              className="text-content-secondary mt-4 max-w-[var(--measure-sm)] font-sans text-lg leading-relaxed text-pretty"
            >
              {description}
            </AnimatedParagraph>
          ) : null}

          {primaryAction || secondaryAction ? (
            <Reveal immediate delay={0.4} className="mt-6">
              <div className="flex flex-wrap items-center gap-2">
                {primaryAction ? (
                  <Magnetic strength={0.18}>
                    <Button asChild size="lg" variant="primary">
                      <Link href={primaryAction.href}>
                        {primaryAction.label}
                        <ArrowRight aria-hidden="true" />
                      </Link>
                    </Button>
                  </Magnetic>
                ) : null}
                {secondaryAction ? (
                  <Magnetic strength={0.18}>
                    <Button asChild size="lg" variant="outline">
                      <Link href={secondaryAction.href}>{secondaryAction.label}</Link>
                    </Button>
                  </Magnetic>
                ) : null}
              </div>
            </Reveal>
          ) : null}

          {meta ? (
            <Reveal immediate delay={0.52} variant="fade" className="mt-8">
              <div className="border-border flex items-center gap-2 border-t pt-3">
                <Text variant="sm" color="muted">
                  {meta}
                </Text>
              </div>
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  )
}
