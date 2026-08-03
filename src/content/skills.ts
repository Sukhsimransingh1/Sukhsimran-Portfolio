import type { SkillGroup } from './types'

/**
 * SKILLS
 * ----------------------------------------------------------------------------
 * Skills clustered by discipline rather than listed flat, so the About page can
 * render one `SkillCategory` per group.
 *
 * `detail` is where the substance lives — `SkillCategory` sets it opposite the
 * name, so a group reads as "what it is, and what it was used for" rather than
 * as a list of nouns.
 */

export const skillGroups = [
  {
    title: 'Programming',
    summary: 'Core languages behind the pipelines and services.',
    skills: [
      { name: 'Python', detail: 'Primary language for ML and backend work' },
      { name: 'SQL', detail: 'Relational modelling and analytical queries' },
      { name: 'C++' },
      { name: 'C' },
    ],
  },
  {
    title: 'Machine Learning',
    summary: 'Model development from features through to evaluation.',
    skills: [
      { name: 'Scikit-learn', detail: 'Classical models and pipeline composition' },
      { name: 'TensorFlow', detail: 'Neural network training' },
      { name: 'Feature Engineering' },
      { name: 'Model Evaluation' },
    ],
  },
  {
    title: 'Generative AI',
    summary: 'Retrieval, orchestration and LLM application design.',
    skills: [
      { name: 'RAG', detail: 'Retrieval-augmented generation over document corpora' },
      { name: 'LangChain', detail: 'Chain and agent orchestration' },
      { name: 'LLM Integration' },
      { name: 'Prompt Engineering' },
    ],
  },
  {
    title: 'Data',
    summary: 'Processing, analysis and the modelling of sequences and text.',
    skills: [
      { name: 'Pandas' },
      { name: 'NumPy' },
      { name: 'Matplotlib' },
      { name: 'NLP', detail: 'Text classification and semantic similarity' },
      { name: 'Time Series' },
    ],
  },
  {
    title: 'Backend',
    summary: 'Serving models behind APIs.',
    skills: [
      { name: 'FastAPI', detail: 'Async services for inference and retrieval' },
      { name: 'Flask' },
    ],
  },
  {
    title: 'Deployment',
    summary: 'Getting systems into environments other people can use.',
    skills: [
      { name: 'Docker', detail: 'Reproducible builds for model services' },
      { name: 'Git' },
      { name: 'Render' },
      { name: 'Vercel' },
    ],
  },
  {
    title: 'Explainability',
    summary: 'Making predictions inspectable rather than opaque.',
    skills: [
      { name: 'SHAP', detail: 'Feature attribution for clinical risk scoring' },
      { name: 'Model Reliability' },
    ],
  },
] as const satisfies readonly SkillGroup[]
