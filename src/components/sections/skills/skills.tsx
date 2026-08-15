"use client";

type SkillGroup = {
  number: string;
  title: string;
  description: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    number: "01",
    title: "Languages & Core",
    description:
      "The programming foundations I use to build, experiment, and work with data.",
    skills: ["Python", "C++", "SQL"],
  },
  {
    number: "02",
    title: "Machine Learning",
    description:
      "Models and frameworks for predictive systems, deep learning, and natural language processing.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Scikit-learn",
      "XGBoost",
      "TensorFlow",
      "Keras",
      "NLP",
      "Transformers",
      "BERT",
    ],
  },
  {
    number: "03",
    title: "Generative AI",
    description:
      "Building grounded LLM applications with retrieval, embeddings, orchestration, and agents.",
    skills: [
      "LLMs",
      "RAG",
      "LangChain",
      "LangGraph",
      "AI Agents",
      "Embeddings",
      "Semantic Search",
      "HuggingFace",
      "Groq",
    ],
  },
  {
    number: "04",
    title: "AI Engineering",
    description:
      "Connecting intelligent models with APIs, databases, services, and application infrastructure.",
    skills: [
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "Docker",
      "Model Serving",
      "Data Pipelines",
      "API Integration",
    ],
  },
  {
    number: "05",
    title: "Vector Search & DevOps",
    description:
      "Infrastructure and developer tooling for retrieval systems and production-oriented workflows.",
    skills: [
      "ChromaDB",
      "FAISS",
      "Pinecone",
      "Git",
      "GitHub",
      "CI/CD",
      "Deployment",
    ],
  },
];

function SkillCard({ group }: { group: SkillGroup }) {
  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-black/10 bg-white/45 p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-white/65 sm:p-8 lg:p-9">
      {/* Decorative number */}
      <div className="pointer-events-none absolute -right-3 -top-8 select-none text-[9rem] font-medium leading-none tracking-[-0.08em] text-black/[0.025] transition-colors duration-500 group-hover:text-[#ef765d]/[0.07]">
        {group.number}
      </div>

      {/* Accent */}
      <div className="absolute left-0 top-0 h-full w-[2px] bg-[#ef765d]/0 transition-all duration-500 group-hover:bg-[#ef765d]" />

      <div className="relative z-10">
        {/* Number */}
        <span className="font-mono text-xs tracking-[0.25em] text-[#ef765d]">
          {group.number}
        </span>

        {/* Title */}
        <h3 className="mt-8 max-w-sm text-2xl font-medium tracking-[-0.035em] text-black sm:text-3xl">
          {group.title}
        </h3>

        {/* Description */}
        <p className="mt-4 max-w-md text-sm leading-6 text-black/55">
          {group.description}
        </p>

        {/* Skills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-black/10 bg-black/[0.02] px-3.5 py-2 text-xs text-black/60 transition-all duration-300 group-hover:border-black/15 group-hover:bg-white/70"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#f5f1e9] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="mb-16 flex flex-col gap-8 lg:mb-24 lg:flex-row lg:items-end lg:justify-between">
          <div>
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="font-mono text-xs tracking-[0.25em] text-[#ef765d]">
                05
              </span>

              <span className="h-px w-10 bg-[#ef765d]/50" />

              <span className="text-xs font-semibold tracking-[0.2em] text-black/45">
                HOW I BUILD
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-4xl text-5xl font-medium tracking-[-0.055em] text-black sm:text-6xl lg:text-8xl">
              Technical
              <br />
              <span className="text-black/35">Toolkit.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-black/55 lg:pb-3">
            The technologies and engineering practices I use to move from
            models and data to reliable AI applications.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <SkillCard key={group.number} group={group} />
          ))}
        </div>

        {/* Full-width final card */}
        <div className="mt-5">
          <article className="group relative overflow-hidden rounded-[1.75rem] border border-black/10 bg-black p-7 text-white transition-all duration-500 sm:p-9 lg:p-10">
            <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#ef765d]/15 blur-3xl transition-all duration-700 group-hover:bg-[#ef765d]/25" />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="font-mono text-xs tracking-[0.25em] text-[#ef765d]">
                  THE APPROACH
                </span>

                <h3 className="mt-5 max-w-3xl text-3xl font-medium tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                  From experimentation
                  <br />
                  to production.
                </h3>
              </div>

              <p className="max-w-md text-sm leading-6 text-white/55">
                I enjoy working across the full AI application lifecycle —
                understanding the data, building the model, connecting
                retrieval and intelligence, exposing reliable APIs, and
                turning the result into something people can actually use.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}