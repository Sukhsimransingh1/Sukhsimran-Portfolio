import type { Experience } from './types'

/**
 * EXPERIENCE
 * ----------------------------------------------------------------------------
 * Roles, most recent first. Consumed by `/experience` and by the About page
 * timeline.
 *
 * Dates are ISO month strings; `end` absent marks a role as ongoing, which the
 * renderer prints as "Present".
 */

export const experience = [
  {
    company: 'FlyRank AI',
    role: 'Backend AI Engineer Intern',
    start: '2026-07',
    summary:
      'Building Python backend services for production AI systems — LLM workflows, agentic pipelines and the REST surface around them.',
    highlights: [
      'Develop FastAPI services backing LLM and retrieval workflows',
      'Build RAG pipelines and agentic AI flows for production use',
      'Design REST APIs consumed by downstream product surfaces',
    ],
    stack: ['Python', 'FastAPI', 'LangChain', 'RAG', 'REST APIs'],
  },
  {
    company: 'Internshala Training (IITM Pravartak + NSDC)',
    role: 'Data Science Trainee',
    start: '2025-06',
    end: '2025-07',
    summary:
      'Training programme delivered with IITM Pravartak and NSDC, covering the analysis-to-model path end to end.',
    highlights: [
      'Data analysis and visualisation across applied datasets',
      'Machine learning model development and evaluation',
      'Recognised as a Top Performer on the programme',
    ],
    stack: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
  },
] as const satisfies readonly Experience[]

/**
 * The current role, if any. `end` absent marks a role as ongoing.
 *
 * Widened to `readonly Experience[]` first: `as const` narrows each entry to its
 * exact literal shape, and an entry with no `end` key has no `end` property to
 * read — so the predicate would be a type error against the literal type even
 * though it is exactly the intended check.
 */
export function getCurrentRole(): Experience | undefined {
  const roles: readonly Experience[] = experience
  return roles.find((entry) => entry.end === undefined)
}
