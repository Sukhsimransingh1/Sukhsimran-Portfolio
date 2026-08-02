import { extendTailwindMerge } from 'tailwind-merge'
import { clsx, type ClassValue } from 'clsx'

/**
 * tailwind-merge, taught our scales.
 *
 * WHY THIS CONFIGURATION IS REQUIRED
 * `theme.css` resets Tailwind's stock scales (`--color-*: initial`) and
 * replaces them with token-derived names. tailwind-merge ships with the
 * *default* scales baked in, so out of the box it misreads our classes.
 *
 * The `text-*` namespace is the sharpest example: Tailwind uses it for both
 * font-size and text-colour, and tailwind-merge tells them apart by checking
 * the value against known scales. `text-content-primary` matches neither its
 * default colour list nor its default size list, so an unconfigured merge can
 * classify it as a font-size and have it silently erase `text-lg` — a colour
 * override quietly deleting a size.
 *
 * Declaring the real scales below makes conflict resolution exact.
 */
const twMerge = extendTailwindMerge({
  override: {
    classGroups: {
      'font-size': [
        {
          text: [
            '2xs',
            'xs',
            'sm',
            'base',
            'md',
            'lg',
            'xl',
            '2xl',
            '3xl',
            '4xl',
            '5xl',
            '6xl',
          ],
        },
      ],
      'text-color': [
        {
          text: [
            'content-primary',
            'content-secondary',
            'content-tertiary',
            'content-muted',
            'content-inverted',
            'content-accent',
            'content-on-accent',
            'primary',
            'primary-foreground',
            'secondary',
            'secondary-foreground',
            'accent',
            'accent-foreground',
            'muted',
            'muted-foreground',
            'success',
            'success-foreground',
            'warning',
            'warning-foreground',
            'danger',
            'danger-foreground',
            'inherit',
            'current',
            'transparent',
          ],
        },
      ],
      rounded: [{ rounded: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full'] }],
      shadow: [{ shadow: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] }],
      leading: [{ leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'] }],
      tracking: [
        {
          tracking: ['tighter', 'tight', 'snug', 'normal', 'wide', 'wider', 'widest'],
        },
      ],
      'font-weight': [{ font: ['light', 'regular', 'medium', 'semibold', 'bold'] }],
      'font-family': [{ font: ['sans', 'display', 'mono'] }],
    },
  },
})

/**
 * Compose class names with conflict resolution.
 *
 * `clsx` flattens conditionals and arrays; `twMerge` then resolves Tailwind
 * conflicts by *last-wins* rather than by CSS source order.
 *
 * This matters for component APIs. Given:
 *
 *   <Button className="px-8" />   // the base variant already sets px-4
 *
 * plain concatenation yields `"px-4 px-8"`, and the winner is decided by
 * whichever rule lands later in the generated stylesheet — not by the caller's
 * intent. `cn` resolves it to `"px-8"`, so a consumer override always wins.
 * Without this, every component would need a bespoke escape hatch.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
