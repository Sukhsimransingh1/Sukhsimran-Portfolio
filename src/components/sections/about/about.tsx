import {
  ArrowDownRight,
  BrainCircuit,
  Code2,
  Layers3,
} from "lucide-react";

import { SectionWrapper } from "@/components/layout/section-wrapper";

const focusAreas = [
  {
    icon: BrainCircuit,
    title: "Intelligent Systems",
    description:
      "Machine learning, LLMs, RAG and agentic workflows focused on solving practical problems.",
  },
  {
    icon: Layers3,
    title: "AI Engineering",
    description:
      "Connecting models with retrieval, APIs, databases and application infrastructure.",
  },
  {
    icon: Code2,
    title: "Backend & APIs",
    description:
      "Building reliable services with Python, FastAPI, REST APIs and production-oriented architecture.",
  },
];

export function About() {
  return (
    <SectionWrapper
      id="about"
      number="01"
      eyebrow="About Me"
      className="overflow-hidden"
    >
      <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        {/* Intro */}
        <div>
          <p className="max-w-md text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
            Building with intelligence
          </p>

          <h2 className="mt-5 max-w-xl text-5xl font-medium leading-[0.94] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            I like turning
            <br />
            <span className="text-[var(--text-muted)]">
              ideas into
            </span>
            <br />
            systems.
          </h2>
        </div>

        {/* Profile */}
        <div className="max-w-2xl">
          <p className="text-xl leading-8 tracking-[-0.02em] text-[var(--text-primary)] sm:text-2xl sm:leading-9">
            I&apos;m Sukhsimran Singh, a Computer Science and
            Engineering student focused on AI/ML and Generative AI.
            I enjoy taking an idea from data and models all the way
            to a usable application.
          </p>

          <p className="mt-7 text-base leading-7 text-[var(--text-secondary)]">
            My work sits at the intersection of machine learning,
            LLM applications, retrieval systems and backend
            engineering. I&apos;m particularly interested in building
            AI systems that are not only intelligent, but also
            reliable, explainable and deployable.
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm font-medium text-[var(--text-primary)]">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-strong)]">
              <ArrowDownRight size={16} />
            </span>

            <span>
              From experimentation to production
            </span>
          </div>
        </div>
      </div>

      {/* Focus areas */}
      <div className="mt-20 grid gap-4 md:grid-cols-3">
        {focusAreas.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--text-muted)]">
                  0{index + 1}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--graphite)] text-[var(--ivory)] transition-transform duration-300 group-hover:rotate-6">
                  <Icon size={18} strokeWidth={1.6} />
                </div>
              </div>

              <h3 className="mt-12 text-xl font-medium tracking-[-0.03em]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}