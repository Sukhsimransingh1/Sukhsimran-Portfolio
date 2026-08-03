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
 * Ordered most recent first, matching the reading order of the page. Only
 * entries with a real recorded start date appear; undated credentials live in
 * the certifications and achievements lists instead.
 */

export const timeline = [
  {
    kind: 'experience',
    title: 'Backend AI Engineer Intern',
    subtitle: 'FlyRank AI',
    start: '2026-07',
    description:
      'Python and FastAPI services for production AI — LLM workflows, agentic pipelines and RAG.',
  },
  {
    kind: 'education',
    title: 'B.Tech, Computer Science & Engineering',
    subtitle: 'IK Gujral Punjab Technical University',
    start: '2023-08',
    end: '2027-06',
    description: 'CGPA 9.01 / 10. Specialising in machine learning and generative AI.',
  },
] as const satisfies readonly TimelineEntry[]
