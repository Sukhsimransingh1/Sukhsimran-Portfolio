import { cva, type VariantProps } from 'class-variance-authority'
import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/cn'

/**
 * TYPOGRAPHY
 * ----------------------------------------------------------------------------
 * The type scale as components.
 *
 * WHY COMPONENTS RATHER THAN UTILITY CLASSES
 * A heading is four coordinated decisions — size, weight, leading, tracking —
 * and they are not independent. Display type needs tight leading and negative
 * tracking; body type needs loose leading and neutral tracking. Expressed as
 * loose utilities (`text-4xl font-semibold leading-tight tracking-tight`), the
 * combination has to be repeated correctly at every call site, and it will not
 * be. One wrong pairing and the page stops looking designed.
 *
 * Encoding the combinations here makes the correct pairing the only easy one.
 *
 * THE SIZE / SEMANTICS SPLIT — the important part of this API
 * `variant` controls appearance. `as` controls the HTML element. They are
 * deliberately independent, because visual hierarchy and document outline are
 * different concerns that only usually coincide.
 *
 *   <Heading as="h2" variant="display-lg">  // second-level, looks like a hero
 *   <Heading as="h1" variant="h3">          // page title, visually restrained
 *
 * Coupling them would force a choice between a broken heading outline (a real
 * screen-reader navigation failure) and a compromised layout. Splitting them
 * means neither has to give.
 */

const headingVariants = cva('text-balance', {
  variants: {
    variant: {
      // Display — hero moments only. Tighter leading and negative tracking
      // compensate for the optical looseness of large type.
      'display-xl': 'font-display text-6xl font-semibold leading-none tracking-tighter',
      'display-lg': 'font-display text-5xl font-semibold leading-none tracking-tighter',
      'display-md': 'font-display text-4xl font-semibold leading-tight tracking-tight',

      // Headings — the working scale.
      h1: 'font-display text-4xl font-semibold leading-tight tracking-tight',
      h2: 'font-display text-3xl font-semibold leading-tight tracking-tight',
      h3: 'font-display text-2xl font-semibold leading-snug tracking-snug',
      h4: 'font-display text-xl font-semibold leading-snug tracking-snug',
      h5: 'font-sans text-lg font-medium leading-snug tracking-normal',
      h6: 'font-sans text-md font-medium leading-snug tracking-normal',
    },
    color: {
      primary: 'text-content-primary',
      secondary: 'text-content-secondary',
      tertiary: 'text-content-tertiary',
      muted: 'text-content-muted',
      accent: 'text-content-accent',
      inverted: 'text-content-inverted',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    variant: 'h2',
    color: 'primary',
    align: 'left',
  },
})

export interface HeadingProps
  extends VariantProps<typeof headingVariants> {
  children: ReactNode
  className?: string
  /**
   * The rendered element. Choose by document outline — exactly one `h1` per
   * page, no skipped levels — never by how large the text should look.
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
  id?: string
}

export function Heading({
  children,
  className,
  variant,
  color,
  align,
  as: Tag = 'h2',
  id,
}: HeadingProps) {
  return (
    <Tag id={id} className={cn(headingVariants({ variant, color, align }), className)}>
      {children}
    </Tag>
  )
}

/* ==========================================================================
   TEXT
   ========================================================================== */

const textVariants = cva('', {
  variants: {
    variant: {
      // `leading-relaxed` on body sizes is a WCAG 1.4.12 consideration
      // (>= 1.5x) and materially improves sustained reading.
      lead: 'font-sans text-lg leading-relaxed tracking-normal',
      lg: 'font-sans text-md leading-relaxed tracking-normal',
      base: 'font-sans text-base leading-relaxed tracking-normal',
      sm: 'font-sans text-sm leading-normal tracking-normal',
      xs: 'font-sans text-xs leading-normal tracking-normal',

      // Caption — metadata, labels, figure captions.
      caption: 'font-sans text-xs leading-snug tracking-wide',

      // Overline — small all-caps eyebrow. Wide tracking is mandatory here:
      // caps at small sizes are unreadable at default spacing.
      overline: 'font-sans text-2xs font-medium uppercase leading-none tracking-widest',

      // Inline code.
      code: 'font-mono text-sm leading-normal tracking-normal',
    },
    color: {
      primary: 'text-content-primary',
      secondary: 'text-content-secondary',
      tertiary: 'text-content-tertiary',
      muted: 'text-content-muted',
      accent: 'text-content-accent',
      inverted: 'text-content-inverted',
    },
    weight: {
      light: 'font-light',
      regular: 'font-regular',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    /** Constrains line length to a comfortable reading measure. */
    measure: {
      none: '',
      sm: 'max-w-[var(--measure-sm)]',
      md: 'max-w-[var(--measure-md)]',
      lg: 'max-w-[var(--measure-lg)]',
    },
    /** `text-pretty` avoids orphaned final words in multi-line copy. */
    pretty: {
      true: 'text-pretty',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'base',
    color: 'secondary',
    align: 'left',
    measure: 'none',
    pretty: true,
  },
})

export interface TextProps extends VariantProps<typeof textVariants> {
  children: ReactNode
  className?: string
  as?: ElementType
  id?: string
}

/**
 * Body copy and everything below heading level.
 *
 * Defaults to `color="secondary"` rather than `primary`: at body sizes,
 * maximum-contrast text over a full page is fatiguing. Secondary still clears
 * WCAG AAA (~7.9:1) while reading as calmer. Use `primary` for emphasis.
 */
export function Text({
  children,
  className,
  variant,
  color,
  weight,
  align,
  measure,
  pretty,
  as: Tag = 'p',
  id,
}: TextProps) {
  return (
    <Tag
      id={id}
      className={cn(
        textVariants({ variant, color, weight, align, measure, pretty }),
        className,
      )}
    >
      {children}
    </Tag>
  )
}

/* ==========================================================================
   CODE
   ========================================================================== */

export interface CodeProps {
  children: ReactNode
  className?: string
}

/** Inline code. Block-level code formatting arrives with the content phase. */
export function Code({ children, className }: CodeProps) {
  return (
    <code
      className={cn(
        'rounded-sm border border-code-border bg-code-background px-0-5 py-px',
        'font-mono text-sm text-code-foreground',
        className,
      )}
    >
      {children}
    </code>
  )
}

export { headingVariants, textVariants }
