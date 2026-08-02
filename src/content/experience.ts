import type { Experience } from './types'

/**
 * EXPERIENCE
 * ----------------------------------------------------------------------------
 * Roles, most recent first. Consumed by `/experience` and by the About page
 * timeline.
 *
 * Empty by design — real history arrives in the content phase. The `/experience`
 * route maps this array, so populating it requires no component change.
 */

export const experience: readonly Experience[] = []

/** The current role, if any. `end` absent marks a role as ongoing. */
export function getCurrentRole(): Experience | undefined {
  return experience.find((entry) => entry.end === undefined)
}
