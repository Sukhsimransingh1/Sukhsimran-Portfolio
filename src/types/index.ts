import type { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react'

/**
 * SHARED TYPES
 * ----------------------------------------------------------------------------
 * Cross-cutting type utilities. Domain types (project, experience, case study)
 * live in their own modules and arrive with the content phase.
 */

/**
 * Props for a polymorphic component — one that can render as a different
 * element via an `as` prop while keeping full type safety.
 *
 * WHY THIS MATTERS
 * Typography components are the motivating case. `<Text as="label" htmlFor>`
 * must type-check `htmlFor`, while `<Text as="a" href>` must type-check `href`,
 * and neither should accept the other's props.
 *
 * `Omit<..., keyof Props | 'as'>` prevents a collision when the component's own
 * props share a name with a native attribute (e.g. `color`, `size`) — the
 * component's definition wins.
 */
export type PolymorphicProps<T extends ElementType, Props = object> = Props & {
  as?: T
} & Omit<ComponentPropsWithoutRef<T>, keyof Props | 'as'>

/** A component that only wraps children. */
export interface WithChildren {
  children: ReactNode
}

/** A component that accepts an external class override. */
export interface WithClassName {
  className?: string
}

/** The common base for presentational components. */
export interface BaseProps extends WithClassName {
  children?: ReactNode
}

/**
 * Makes selected keys required while leaving the rest untouched.
 * Useful when a generic type is optional in general but guaranteed in a
 * specific context.
 */
export type RequireKeys<T, K extends keyof T> = T & Required<Pick<T, K>>

/** Recursively marks every property optional. */
export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}

/** Extracts the element type of an array or readonly array. */
export type ArrayElement<T> = T extends readonly (infer E)[] ? E : never
