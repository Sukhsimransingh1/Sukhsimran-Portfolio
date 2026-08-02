import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

/**
 * BUTTON
 * ----------------------------------------------------------------------------
 * The primary interactive primitive.
 *
 * WHY `asChild` (Radix Slot)
 * A link that looks like a button must still be an `<a>` — anchors navigate on
 * Enter, buttons activate on Space, and they expose different roles. Rendering
 * a `<button>` with an onClick that navigates breaks middle-click, "open in new
 * tab", and keyboard expectations.
 *
 * `asChild` merges these styles onto the child element instead of wrapping it,
 * so `<Button asChild><Link href="/work">…</Link></Button>` produces a single
 * correctly-typed anchor. The alternative — nesting an `<a>` inside a
 * `<button>` — is invalid HTML.
 *
 * FOCUS
 * No explicit focus styling here. `:focus-visible` in `base.css` handles every
 * focusable element uniformly; duplicating it per component is how focus
 * treatment drifts.
 *
 * TARGET SIZE
 * The `sm` variant is 32px tall, below the 44px in WCAG 2.5.5 (AAA). That is
 * acceptable under 2.5.8 (AA, 24px minimum) for inline and dense contexts, but
 * `sm` should not be used for primary actions on touch surfaces.
 */

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-1',
    'font-sans font-medium whitespace-nowrap',
    'rounded-md border border-transparent',
    'transition-[color,background-color,border-color,box-shadow,transform]',
    'duration-fast ease-out',
    'select-none',
    // `:disabled` covers real buttons; the attribute selector covers `asChild`
    // anchors, which cannot be disabled natively.
    'disabled:pointer-events-none disabled:opacity-40',
    '[&[aria-disabled=true]]:pointer-events-none [&[aria-disabled=true]]:opacity-40',
    // Icons inherit currentColor and never shrink in a flex row.
    '[&_svg]:size-2 [&_svg]:shrink-0',
  ],
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary-hover active:bg-secondary-active',
        outline:
          'border-border-strong text-content-primary hover:bg-hover hover:border-border-interactive active:bg-pressed',
        ghost: 'text-content-primary hover:bg-hover active:bg-pressed',
        accent:
          'bg-accent text-accent-foreground hover:bg-accent-hover active:bg-accent-active',
        danger: 'bg-danger text-content-inverted hover:opacity-90 active:opacity-80',
        // Underline offset keeps descenders legible.
        link: 'text-content-accent underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        sm: 'h-4 px-2 text-sm',
        base: 'h-5 px-3 text-sm',
        lg: 'h-6 px-4 text-base',
        /** Square. For a lone icon — `aria-label` is then mandatory. */
        icon: 'h-5 w-5 p-0',
      },
      full: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'base',
      full: false,
    },
  },
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  /** Merge styles onto the child element instead of rendering a `<button>`. */
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, size, full, asChild = false, type, ...props },
  ref,
) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      ref={ref}
      // Defaults to `button`. An unspecified `type` inside a form defaults to
      // `submit`, which silently submits the form on click.
      type={asChild ? undefined : (type ?? 'button')}
      className={cn(buttonVariants({ variant, size, full }), className)}
      {...props}
    />
  )
})

export { buttonVariants }
