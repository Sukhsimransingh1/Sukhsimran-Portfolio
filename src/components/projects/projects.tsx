"use client";

import { ArrowUpRight, ExternalLink } from "lucide-react";
type FeaturedProject = {
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  image:string;
};

type MoreProject = {
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
};

const featuredProjects: FeaturedProject[] = [
  {
    number: "01",
    category: "CLINICAL AI · RAG · MACHINE LEARNING",
    title: "PranRakshak AI",
    description:
      "An intelligent clinical decision support system for early sepsis detection, explainable risk assessment, and AI-assisted medical reasoning.",
    technologies: [
      "FastAPI",
      "React",
      "PostgreSQL",
      "LangGraph",
      "RAG",
      "Groq",
      "SHAP",
      "OCR",
    ],
    image: "/images/projects/pranrakshak.png",
    // Replace these placeholders with your actual URLs.
    liveUrl: "https://pranrakshak-ai.vercel.app/",
    githubUrl: "https://github.com/Sukhsimransingh1/PRANRAKSHAK_AI",
  },
  {
    number: "02",
    category: "DISASTER INTELLIGENCE · RAG · VISION AI",
    title: "DisasterSense AI",
    description:
      "An AI-powered disaster intelligence platform combining emergency assistance, retrieval-augmented generation, and vision-based disaster analysis.",
    technologies: [
      "FastAPI",
      "React",
      "PostgreSQL",
      "FAISS",
      "Sentence Transformers",
      "Gemini",
    ],
    image: "/images/projects/disastersense.png",
    // Replace these placeholders with your actual URLs.
    liveUrl: "https://disaster-sense-ai.vercel.app/",
    githubUrl: "https://github.com/Sukhsimransingh1/DisasterSense-AI",
  },
  {
    number: "03",
    category: "GENERATIVE AI · RAG · DOCUMENT INTELLIGENCE",
    title: "OmniRAG AI",
    description:
      "A multi-document research assistant designed for contextual conversations, semantic retrieval, and scalable document ingestion.",
    technologies: [
      "FastAPI",
      "Next.js",
      "LangChain",
      "ChromaDB",
      "HuggingFace",
      "Llama 3",
    ],
     image: "/images/projects/omnirag.png",
    // Replace these placeholders with your actual URLs.
    liveUrl: "https://omnirag-ai.vercel.app/",
    githubUrl: "https://github.com/Sukhsimransingh1/OmniRAG-AI",
  },
  {
    number: "04",
    category: "NLP · EMBEDDINGS · AI EVALUATION",
    title: "Resume Screening AI",
    description:
      "An NLP-based candidate evaluation system that semantically matches resumes with job descriptions and provides candidate scoring and skill-gap insights.",
    technologies: [
      "FastAPI",
      "Sentence Transformers",
      "BERT",
      "Scikit-learn",
      "Streamlit",
    ],image: "/images/projects/resume-screening.png",
    // Replace these placeholders with your actual URLs.
    liveUrl: "https://sukhsimran-singh-resume-screening-ai.hf.space/",
    githubUrl: "https://github.com/Sukhsimransingh1/Resume_screening_AI",
  },
];

const moreProjects: MoreProject[] = [
  
  {
    number: "05",
    category: "DEEP LEARNING · MACHINE LEARNING",
    title: "Customer Churn Prediction",
    description:
      "A neural-network-based system for predicting customer churn using structured telecom-style data.",
    technologies: ["ANN", "TensorFlow", "Keras", "Scikit-learn"],
  },
  {
    number: "06",
    category: "MACHINE LEARNING · MLOPS",
    title: "Student Performance Prediction",
    description:
      "An end-to-end machine learning pipeline covering data processing, model training, validation, and API-based serving.",
    technologies: ["Python", "Scikit-learn", "Flask", "MLOps"],
  },
  {
    number: "07",
    category: "NLP · TEXT CLASSIFICATION",
    title: "Fake News Detection",
    description:
      "A natural language processing system that classifies news articles using text preprocessing, TF-IDF, and probabilistic classification.",
    technologies: ["NLP", "TF-IDF", "Naive Bayes", "Scikit-learn"],
  },
  {
    number: "08",
    category: "DEEP LEARNING · NLP",
    title: "Next Word Prediction",
    description:
      "An LSTM-based language modelling project for predicting the next likely word from a given text sequence.",
    technologies: ["LSTM", "TensorFlow", "Keras", "NLP"],
  }

];

function ProjectButton({
  href,
  children,
  variant = "secondary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const isPlaceholder = href === "#";

  return (
    <a
      href={isPlaceholder ? undefined : href}
      target={isPlaceholder ? undefined : "_blank"}
      rel={isPlaceholder ? undefined : "noopener noreferrer"}
      aria-disabled={isPlaceholder}
      onClick={(event) => {
        if (isPlaceholder) {
          event.preventDefault();
        }
      }}
      className={[
        "inline-flex items-center gap-2 rounded-full border px-5 py-3",
        "text-sm font-medium transition-all duration-300",
        variant === "primary"
          ? "border-transparent bg-black text-white hover:-translate-y-0.5 hover:bg-[#ef765d]"
          : "border-black/10 bg-white/50 text-black hover:-translate-y-0.5 hover:border-black/20 hover:bg-white",
        isPlaceholder ? "cursor-default opacity-70" : "",
      ].join(" ")}
    >
      {children}
      <ArrowUpRight size={16} strokeWidth={1.8} />
    </a>
  );
}

function FeaturedProjectCard({
  project,
}: {
  project: FeaturedProject;
}) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/45 p-6 sm:p-8 lg:p-10">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#ef765d]/8 blur-3xl transition-all duration-700 group-hover:bg-[#ef765d]/15" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-6">
          <span className="font-mono text-xs tracking-[0.25em] text-black/45">
            {project.number}
          </span>

          <span className="max-w-[55%] text-right text-[10px] font-semibold tracking-[0.2em] text-black/40 sm:text-xs">
            {project.category}
          </span>
        </div>

        {/* Project title */}
        <div className="mt-12 max-w-4xl">
          <h3 className="text-4xl font-medium tracking-[-0.045em] text-black sm:text-5xl lg:text-6xl">
            {project.title}
          </h3>

          <p className="mt-6 max-w-3xl text-base leading-7 text-black/60 sm:text-lg sm:leading-8">
            {project.description}
          </p>
        </div>

        {/* Project image */}
        <div className="relative mt-10 h-64 overflow-hidden rounded-[1.5rem] border border-black/10 bg-[#f7f4ee] sm:h-80 lg:h-[25rem]">
        <img
            src={project.image}
            alt={`${project.title} project screenshot`}
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </div>

        {/* Technologies */}
        <div className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-black/10 bg-black/[0.025] px-3.5 py-2 text-xs text-black/55"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap gap-3">
          <ProjectButton href={project.githubUrl}>
            GitHub
          </ProjectButton>

          <ProjectButton href={project.liveUrl} variant="primary">
            <ExternalLink size={17} strokeWidth={1.8} />
            Live Demo
          </ProjectButton>
        </div>
      </div>
    </article>
  );
}

function MoreProjectCard({
  project,
}: {
  project: MoreProject;
}) {
  return (
    <article className="group relative min-h-[270px] overflow-hidden rounded-[1.75rem] border border-black/10 bg-white/40 p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white/60 sm:p-8">
      <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#ef765d]/0 blur-3xl transition-all duration-500 group-hover:bg-[#ef765d]/10" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-xs tracking-[0.2em] text-black/40">
            {project.number}
          </span>

          <span className="text-right text-[9px] font-semibold tracking-[0.18em] text-black/35 sm:text-[10px]">
            {project.category}
          </span>
        </div>

        <div className="mt-auto pt-12">
          <h3 className="text-2xl font-medium tracking-[-0.035em] text-black sm:text-3xl">
            {project.title}
          </h3>

          <p className="mt-4 max-w-xl text-sm leading-6 text-black/55">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-black/10 px-3 py-1.5 text-[11px] text-black/50"
              >
                {technology}
              </span>
            ))}
          </div>

          
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#f5f1e9] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="mb-16 flex flex-col gap-8 lg:mb-24 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="font-mono text-xs tracking-[0.25em] text-[#ef765d]">
                04
              </span>

              <span className="h-px w-10 bg-[#ef765d]/50" />

              <span className="text-xs font-semibold tracking-[0.2em] text-black/45">
                SELECTED WORK
              </span>
            </div>

            <h2 className="max-w-4xl text-5xl font-medium tracking-[-0.055em] text-black sm:text-6xl lg:text-8xl">
              Systems I&apos;ve
              <br />
              <span className="text-black/35">built.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-black/55 lg:pb-3">
            A selection of AI systems, machine learning applications, and
            engineering projects built from experimentation through
            deployment.
          </p>
        </div>

        {/* Featured projects */}
        <div className="space-y-8">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard
              key={project.number}
              project={project}
            />
          ))}
        </div>

        {/* More projects */}
        <div className="mt-32 sm:mt-40">
          <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="font-mono text-xs tracking-[0.25em] text-[#ef765d]">
                  MORE WORK
                </span>
              </div>

              <h2 className="text-4xl font-medium tracking-[-0.045em] text-black sm:text-5xl lg:text-6xl">
                More Projects
              </h2>
            </div>

            {/* ONLY collective GitHub link for More Projects */}
            <a
              href="https://github.com/Sukhsimransingh1?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 self-start text-sm font-medium text-black/60 transition-colors hover:text-black sm:self-auto"
            >
              View all on GitHub
              <ArrowUpRight
                size={17}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Compact project grid */}
          <div className="grid gap-5 md:grid-cols-2">
            {moreProjects.map((project) => (
              <MoreProjectCard
                key={project.number}
                project={project}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}