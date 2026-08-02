import type { TimelineEntry } from './types'

/**
 * TIMELINE
 * ----------------------------------------------------------------------------
 * A single dated sequence interleaving roles, education and milestones, keyed
 * by `kind` so the renderer can distinguish them.
 *
 * Deliberately authored rather than derived from `experience` — the timeline is
 * an editorial selection, not a complete résumé, and generating it would remove
 * the ability to choose what appears.
 *
 * Empty by design — real entries arrive in the content phase.
 */

export const timeline: readonly TimelineEntry[] = []
