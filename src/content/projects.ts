import type { OtherProject, Project, ProjectLink, ProjectLinkKind } from './types'

/**
 * PROJECT REGISTRY
 * ----------------------------------------------------------------------------
 * The four featured projects. This array is the single source of truth for
 * which case study routes exist: `generateStaticParams`, the sitemap, the
 * `CaseStudySlug` union and `/work` all read from it.
 *
 * Adding a project is one entry here and nothing else.
 *
 * FIELDS ARE POPULATED ONLY WHERE A SOURCE EXISTS. `year`, `role` and `status`
 * are absent throughout: no authoritative record gives them, and inventing them
 * would put unverifiable metadata on every card. The renderers already treat
 * each as optional, so their absence costs nothing structurally.
 *
 * ⚠️  REPOSITORY AND DEMO URLS ARE NOT YET RECORDED. They belong in each
 * project's `caseStudy.links` array as `{ kind: 'repository' | 'demo', label,
 * href }` — the schema already carries them and every surface reads them
 * through `projectLink()` below. Adding one entry there lights up the button on
 * the card, the index row and the case study at once, with no component change.
 * They are omitted rather than guessed: a wrong repository URL is worse than an
 * absent one, because it looks authoritative.
 *
 * WHY `as const satisfies readonly Project[]` AND NOT AN ANNOTATION
 * `const projects: readonly Project[]` would widen `slug` from its literal to
 * `string`, and `ProjectSlug` would degrade to `string` — losing the compile-
 * time guarantee that `/work/<slug>` links point at a project that exists.
 * `satisfies` checks the shape against `Project` while `as const` preserves the
 * literals, so we get both validation and the union.
 */

export const projects = [
  {
    slug: 'pranrakshak-ai',
    title: 'PranRakshak AI',
    order: 1,
    summary: 'Sepsis early detection system for ICU clinicians.',
    description:
      'An end-to-end clinical AI platform delivering real-time sepsis risk scoring on the Sepsis-3 ICU dataset, pairing an optimised gradient-boosted model with SHAP explainability so clinicians can see which vitals drove a prediction.',
    stack: ['FastAPI', 'React', 'SQLite', 'SHAP', 'RAG', 'OCR'],
    caseStudy: {
      overview: {
        body: [
          'PranRakshak AI delivers real-time sepsis risk scoring on the Sepsis-3 ICU dataset. An optimised gradient-boosted model produces the score; SHAP explains it, attributing the prediction back to the individual vitals that moved it.',
          'Around the model sits the rest of the platform: an OCR pipeline for ingesting clinical documents, a retrieval-augmented clinical assistant, a FastAPI backend and a React frontend.',
        ],
      },
      technology: [
        { name: 'FastAPI', category: 'Backend' },
        { name: 'React', category: 'Frontend' },
        { name: 'SQLite', category: 'Data' },
        { name: 'SHAP', category: 'Explainability' },
        { name: 'RAG', category: 'Generative AI' },
        { name: 'OCR', category: 'Pipeline' },
      ],
    },
  },
  {
    slug: 'disastersense-ai',
    title: 'DisasterSense AI',
    order: 2,
    summary: 'AI-powered disaster intelligence and emergency response platform.',
    description:
      'A full-stack disaster intelligence platform combining generative AI, computer vision and vector search — emergency assistance, disaster image analysis, incident reporting and an analytics dashboard over one retrieval layer.',
    stack: [
      'React',
      'TypeScript',
      'FastAPI',
      'Google Gemini',
      'FAISS',
      'PostgreSQL',
      'Sentence Transformers',
    ],
    caseStudy: {
      overview: {
        body: [
          'DisasterSense AI is a full-stack platform for disaster intelligence and emergency response. It provides AI emergency assistance, disaster image analysis, incident reporting and an analytics dashboard.',
          'The retrieval layer pairs FAISS vector search with Sentence Transformers embeddings and Google Gemini generation; PostgreSQL holds chat history. Generative AI, computer vision and vector search meet in one system.',
        ],
      },
      technology: [
        { name: 'React', category: 'Frontend' },
        { name: 'TypeScript', category: 'Frontend' },
        { name: 'FastAPI', category: 'Backend' },
        { name: 'Google Gemini', category: 'Generative AI' },
        { name: 'FAISS', category: 'Retrieval' },
        { name: 'Sentence Transformers', category: 'Retrieval' },
        { name: 'PostgreSQL', category: 'Data' },
      ],
    },
  },
  {
    slug: 'omnirag-ai',
    title: 'OmniRAG AI',
    order: 3,
    summary: 'Multi-document RAG platform that turns PDFs into contextual conversations.',
    description:
      'A production-ready multi-document retrieval-augmented generation platform handling financial reports, research papers, legal documents, business files and resumes through a hybrid search layer with streaming responses.',
    stack: [
      'Python',
      'FastAPI',
      'LangChain',
      'ChromaDB',
      'Next.js',
      'TypeScript',
      'Groq',
      'HuggingFace',
    ],
    caseStudy: {
      overview: {
        body: [
          'OmniRAG AI transforms PDFs into contextual AI conversations across financial reports, research papers, legal documents, business files and resumes.',
          'Retrieval is hybrid — BM25 alongside dense vectors in ChromaDB — orchestrated through LangChain behind a FastAPI service. Generation runs on Groq-hosted Llama with streaming responses; the frontend is Next.js.',
        ],
      },
      technology: [
        { name: 'Python', category: 'Language' },
        { name: 'FastAPI', category: 'Backend' },
        { name: 'LangChain', category: 'Generative AI' },
        { name: 'ChromaDB', category: 'Retrieval' },
        { name: 'BM25', category: 'Retrieval' },
        { name: 'Groq', category: 'Generative AI' },
        { name: 'HuggingFace', category: 'Generative AI' },
        { name: 'Next.js', category: 'Frontend' },
        { name: 'TypeScript', category: 'Frontend' },
      ],
    },
  },
  {
    slug: 'resume-screening-ai',
    title: 'Resume Screening AI',
    order: 4,
    summary: 'BERT-based matching between resumes and job descriptions.',
    description:
      'An NLP resume evaluation platform using transformer embeddings to match resumes against job descriptions — semantic similarity, skill gap detection, section-wise scoring and generated suggestions.',
    stack: ['BERT', 'PyTorch', 'FastAPI', 'Flask', 'NLTK', 'Docker', 'HuggingFace'],
    caseStudy: {
      overview: {
        body: [
          'Resume Screening AI evaluates a resume against a job description using transformer embeddings rather than keyword overlap, so a candidate is matched on meaning rather than on whether they happened to use the posting’s vocabulary.',
          'The platform reports semantic similarity, detects skill gaps, scores each resume section independently and generates suggestions, served from a FastAPI backend.',
        ],
      },
      technology: [
        { name: 'BERT', category: 'Model' },
        { name: 'PyTorch', category: 'Model' },
        { name: 'HuggingFace', category: 'Model' },
        { name: 'NLTK', category: 'NLP' },
        { name: 'FastAPI', category: 'Backend' },
        { name: 'Flask', category: 'Backend' },
        { name: 'Docker', category: 'Deployment' },
      ],
    },
  },
] as const satisfies readonly Project[]

/** Union of the four literal slugs. Not `string`. */
export type ProjectSlug = (typeof projects)[number]['slug']

/** Every slug, in registry order. Drives static params and the sitemap. */
export const projectSlugs: readonly ProjectSlug[] = projects.map(
  (project) => project.slug,
)

/**
 * Projects in display order.
 *
 * `order` is optional on `Project`, so a missing value sorts last rather than
 * coercing `undefined` into `NaN` and corrupting the comparison.
 */
export const orderedProjects: readonly Project[] = [...projects].sort(
  (a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER),
)

/**
 * Looks up a project by slug.
 *
 * Returns `undefined` on miss rather than throwing: the case study route needs
 * to call `notFound()`, which is Next's own control flow, and an exception
 * there would surface as a 500 instead of a 404.
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

/** Narrows an arbitrary string to a known slug. */
export function isProjectSlug(slug: string): slug is ProjectSlug {
  return projects.some((project) => project.slug === slug)
}

/**
 * The first link of a given kind on a project, or `undefined`.
 *
 * WHY THIS LIVES HERE RATHER THAN IN EACH COMPONENT
 * The card, the index row and the case study hero all need "the repository URL,
 * if there is one". Each reaching into `project.caseStudy?.links?.find(...)`
 * independently is three chances to spell the predicate differently, and it
 * leaks the storage decision — that links live under `caseStudy` — into three
 * presentation components.
 *
 * `caseStudy.links` is the schema's only home for outbound project URLs, so a
 * project with no case study block has no links by construction. That is
 * correct rather than a limitation: a project with a repository worth linking
 * has enough substance to carry a case study.
 */
export function projectLink(
  project: Project,
  kind: ProjectLinkKind,
): ProjectLink | undefined {
  return project.caseStudy?.links?.find((link) => link.kind === kind)
}

/**
 * Projects without a case study, listed on `/work/other-projects`.
 *
 * `year` is absent throughout — not recorded anywhere authoritative.
 *
 * ⚠️  `href` IS THE SINGLE OUTBOUND URL SLOT ON THESE. `OtherProject` carries
 * one link rather than a repository/demo pair, which is the right shape for
 * work at this weight: these are experiments, and the repository is the only
 * destination any of them actually has. Setting `href` on an entry renders its
 * row as a link with no component change. Left empty because no URL is
 * recorded.
 */
export const otherProjects: readonly OtherProject[] = [
  {
    name: 'FarmCulture',
    summary:
      'AI-powered crop recommendation platform built on machine learning and ensemble models.',
    stack: ['Python', 'Scikit-learn', 'Ensemble Models'],
  },
  {
    name: 'Customer Churn Prediction',
    summary: 'Artificial neural network reaching 87.73% accuracy on churn classification.',
    stack: ['Python', 'TensorFlow', 'Pandas'],
  },
  {
    name: 'Student Performance Prediction',
    summary: 'Production-style ML pipeline deployed behind Flask.',
    stack: ['Python', 'Scikit-learn', 'Flask'],
  },
  {
    name: 'Fake News Detection',
    summary:
      'TF-IDF and Multinomial Naive Bayes classifier reaching approximately 95% accuracy.',
    stack: ['Python', 'Scikit-learn', 'NLP'],
  },
]
