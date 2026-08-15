"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Certification = {
  number: string;
  title: string;
  provider: string;
  details: string;
  topics: string[];
  url: string;
};

const certifications: Certification[] = [
  {
    number: "01",
    title: "Data Science Training",
    provider: "Internshala",
    details: "Data Science training program",
    topics: ["Data Science", "Machine Learning"],
    url: "https://trainings.internshala.com/view_certificate/guafzqhhy0h/fc8yd880q99/",
  },
  {
    number: "02",
    title: "Data Science Course",
    provider: "Udemy",
    details: "Data Science, ML, DL & NLP",
    topics: ["Python", "ML", "DL", "NLP"],
    url: "https://sukhsimransingh1.github.io/certificates/",
  },
  {
    number: "03",
    title: "Generative AI with LangChain & HuggingFace",
    provider: "Udemy",
    details: "Generative AI and LLM application development",
    topics: ["GenAI", "LangChain", "HuggingFace"],
    url: "https://www.udemy.com/certificate/UC-be6628f8-c545-4c70-8973-5d7cef572939/",
  },
  {
    number: "04",
    title: "LangChain Course",
    provider: "LangChain Academy",
    details: "LangChain and LLM application development",
    topics: ["LLMs", "LangChain", "AI"],
    url: "https://academy.langchain.com/certificates/myq2ggyfiq",
  },
];

export function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-[#f5f1e9] px-6 py-28 text-[#171717] md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section header */}
        <div className="mb-20 grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.3em] text-[#ef775f]">
                07
              </span>

              <span className="h-px w-12 bg-[#ef775f]/50" />

              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#77736d]">
                Certifications
              </span>
            </div>

            <h2 className="max-w-[560px] text-5xl font-medium leading-[0.95] tracking-[-0.055em] md:text-7xl">
              Learning that
              <br />
              <span className="text-[#99958e]">compounds.</span>
            </h2>
          </div>

          <div className="flex items-end justify-between gap-8 md:pb-2">
            <p className="max-w-[470px] text-base leading-7 text-[#68645e] md:text-lg">
              Certifications and structured learning across data science,
              machine learning, generative AI, and modern LLM applications.
            </p>

            <span className="hidden whitespace-nowrap font-mono text-xs tracking-[0.18em] text-[#8c8881] md:block">
              2024 — 2026
            </span>
          </div>
        </div>

        {/* Certification list */}
        <div className="border-t border-[#171717]/15">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative border-b border-[#171717]/15 py-9 md:py-11"
            >
              <div className="grid gap-7 md:grid-cols-[80px_minmax(0,1.1fr)_minmax(260px,0.8fr)_auto] md:items-center md:gap-8">
                {/* Number */}
                <div className="font-mono text-xs tracking-[0.2em] text-[#ef775f]">
                  {cert.number}
                </div>

                {/* Main title */}
                <div>
                  <h3 className="max-w-[650px] text-2xl font-medium tracking-[-0.035em] transition-transform duration-500 group-hover:translate-x-2 md:text-3xl lg:text-4xl">
                    {cert.title}
                  </h3>

                  <p className="mt-2 text-base text-[#77736d]">
                    {cert.provider}
                  </p>
                </div>

                {/* Details + topics */}
                <div>
                  <p className="mb-4 text-sm leading-6 text-[#6d6963]">
                    {cert.details}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cert.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full border border-[#171717]/12 px-3 py-1.5 font-mono text-[10px] tracking-[0.08em] text-[#77736d]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credential link */}
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${cert.title} credential`}
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-[#171717]/20 px-5 py-3 text-sm font-medium transition-all duration-300 hover:border-[#ef775f] hover:bg-[#171717] hover:text-[#f5f1e9]"
                >
                  View credential
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </a>
              </div>

              {/* Hover accent */}
              <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-[#ef775f] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 flex flex-col justify-between gap-4 text-xs text-[#8a867f] md:flex-row md:items-center">
          <span className="font-mono uppercase tracking-[0.2em]">
            Continuous learning
          </span>

          <span>
            Data Science · Machine Learning · Generative AI · LLMs
          </span>
        </div>
      </div>
    </section>
  );
}