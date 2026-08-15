"use client";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";

import { SectionWrapper } from "@/components/layout/section-wrapper";

const experiences = [
  {
    number: "01",
    type: "Internship",
    status: "Current",
    title: "AI Backend Engineer Intern",
    organization: "FlyRank AI",
    period: "Jul 2026 — Present",
    location: "Remote",
    description:
      "Building backend systems for AI-powered applications with a focus on APIs, databases, integrations and production-oriented AI workflows.",
    highlights: [
      "Developing backend services and REST APIs for AI application workflows.",
      "Integrating LLM-powered functionality with application services and backend architecture.",
      "Working across databases, debugging, integrations and production-oriented backend development.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "LLMs",
    ],
    featured: true,
  },
  {
    number: "02",
    type: "Training",
    status: "Completed",
    title: "Data Science with AI Trainee",
    organization: "Internshala Trainings",
    period: "Jun 2025 — Aug 2025",
    location: "Online",
    description:
      "Completed an 8-week structured training program covering data analysis, visualization, machine learning, predictive analytics and applied AI.",
    highlights: [
      "Worked with data analysis and visualization techniques to explore datasets and derive insights.",
      "Applied machine learning concepts to predictive analytics problems.",
      "Completed a capstone project integrating concepts covered throughout the training program.",
    ],
    technologies: [
      "Python",
      "Data Analysis",
      "Machine Learning",
      "Data Visualization",
      "Predictive Analytics",
    ],
    featured: false,
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="bg-[var(--ivory)] text-[var(--ink)]"
    >
      <SectionWrapper
        number="03"
        eyebrow="Professional Journey"
        className="overflow-hidden"
      >
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--coral)]">
              Experience
            </p>

            <h2 className="mt-5 max-w-xl text-5xl font-medium leading-[0.94] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              From learning
              <br />
              to building.
            </h2>
          </div>

          <div className="max-w-2xl lg:pt-10">
            <p className="text-xl leading-8 text-[var(--ink)]/60 sm:text-2xl">
              A progression from structured learning into real-world AI
              engineering, backend development and production-oriented
              systems.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-20 lg:mt-28">
          {/* Vertical timeline */}
          <div className="absolute bottom-10 left-[7px] top-10 hidden w-px bg-[var(--ink)]/10 md:block" />

          <div className="space-y-16 md:space-y-24">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative md:pl-14"
              >
                {/* Timeline point */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{
                    once: true,
                    amount: 0.5,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.15 + 0.2,
                  }}
                  className={`absolute left-0 top-10 hidden h-4 w-4 rounded-full border-4 border-[var(--ivory)] md:block ${
                    experience.featured
                      ? "bg-[var(--coral)]"
                      : "bg-[var(--sage)]"
                  }`}
                />

                {experience.featured ? (
                  /* =========================
                     FLYRANK AI
                     ========================= */
                  <div className="rounded-[2rem] border border-[var(--coral)]/20 bg-white/45 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.04)] sm:p-8 lg:p-10">
                    {/* Top metadata */}
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--ink)] text-[var(--ivory)]">
                          <BriefcaseBusiness
                            size={21}
                            strokeWidth={1.5}
                          />
                        </div>

                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--coral)]">
                            {experience.type}
                          </p>

                          <p className="mt-1 text-xs text-[var(--ink)]/45">
                            {experience.location}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-[var(--sage)]/30 bg-[var(--sage)]/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--sage)]">
                          {experience.status}
                        </span>

                        <span className="text-xs text-[var(--ink)]/45">
                          {experience.period}
                        </span>
                      </div>
                    </div>

                    {/* Main content */}
                    <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
                      <div>
                        <h3 className="text-3xl font-medium leading-tight tracking-[-0.04em] text-[var(--ink)] sm:text-4xl lg:text-5xl">
                          {experience.title}
                        </h3>

                        <p className="mt-3 text-xl text-[var(--coral)]">
                          {experience.organization}
                        </p>

                        <div className="mt-7 h-px w-16 bg-[var(--coral)]" />

                        <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--ink)]/60">
                          {experience.description}
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--ink)]/40">
                          What I&apos;m building
                        </p>

                        <ul className="mt-5 space-y-5">
                          {experience.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex gap-3 text-sm leading-6 text-[var(--ink)]/65"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--coral)]" />

                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Technology pills */}
                    <div className="mt-10 flex flex-wrap gap-2 border-t border-[var(--ink)]/10 pt-7">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-[var(--ink)]/10 bg-[var(--ink)]/[0.025] px-3.5 py-2 text-xs text-[var(--ink)]/55"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="mt-7 flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.14em] text-[var(--ink)]/30">
                        AI Backend Engineering
                      </span>

                      <ArrowUpRight
                        size={17}
                        className="text-[var(--coral)]"
                      />
                    </div>
                  </div>
                ) : (
                  /* =========================
                     INTERNSHALA
                     ========================= */
                  <div className="rounded-[2rem] border border-[var(--ink)]/10 bg-white/30 p-6 sm:p-8 lg:p-9">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--ink)]/10 bg-white/50">
                          <GraduationCap
                            size={20}
                            strokeWidth={1.5}
                          />
                        </div>

                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--sage)]">
                            {experience.type}
                          </p>

                          <p className="mt-1 text-xs text-[var(--ink)]/40">
                            {experience.location}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-[var(--sage)]/25 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--sage)]">
                          {experience.status}
                        </span>

                        <span className="text-xs text-[var(--ink)]/40">
                          {experience.period}
                        </span>
                      </div>
                    </div>

                    <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                      <div>
                        <h3 className="text-2xl font-medium tracking-[-0.035em] text-[var(--ink)] sm:text-3xl">
                          {experience.title}
                        </h3>

                        <p className="mt-2 text-base text-[var(--coral)]">
                          {experience.organization}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm leading-6 text-[var(--ink)]/55">
                          {experience.description}
                        </p>

                        <ul className="mt-6 space-y-3">
                          {experience.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex gap-3 text-sm leading-6 text-[var(--ink)]/60"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--sage)]" />

                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-7 flex flex-wrap gap-2">
                          {experience.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="rounded-full border border-[var(--ink)]/10 px-3 py-1.5 text-xs text-[var(--ink)]/50"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-[var(--ink)]/10 pt-6">
                      <span className="text-xs uppercase tracking-[0.14em] text-[var(--ink)]/30">
                        Foundation &amp; Learning
                      </span>

                      <ArrowUpRight
                        size={16}
                        className="text-[var(--ink)]/35"
                      />
                    </div>
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}