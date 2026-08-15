"use client";

import { ArrowUpRight, CalendarDays, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

import { SectionWrapper } from "@/components/layout/section-wrapper";

export function Education() {
  return (
    <section
      id="education"
      className="border-y border-[var(--border)] bg-[var(--graphite)] text-[var(--ivory)]"
    >
      <SectionWrapper
        number="02"
        eyebrow="Academic Foundation"
        className="overflow-hidden"
      >
        <div className="grid items-start gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Heading */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--coral)]">
              Education
            </p>

            <h2 className="mt-5 text-5xl font-medium leading-[0.94] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Strong
              <br />
              foundations.
            </h2>

            <p className="mt-7 max-w-md text-sm leading-6 text-[var(--ivory)]/55">
              Building a strong computer science foundation while
              applying it to machine learning, generative AI and
              intelligent software systems.
            </p>
          </div>

          {/* Academic card */}
          <div className="rounded-[2rem] border border-[var(--ivory)]/10 bg-[var(--ivory)]/[0.035] p-6 sm:p-8 lg:p-10">
            {/* Top row */}
            <div className="flex items-start justify-between gap-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--ivory)] text-[var(--graphite)]">
                <GraduationCap
                  size={23}
                  strokeWidth={1.5}
                />
              </div>

              <span className="rounded-full border border-[var(--sage)]/30 bg-[var(--sage)]/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--sage)]">
                In Progress
              </span>
            </div>

            {/* Degree */}
            <p className="mt-10 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--coral)]">
              Bachelor&apos;s Degree
            </p>

            <h3 className="mt-4 max-w-2xl text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">
              B.Tech in Computer Science &amp; Engineering
            </h3>

            <p className="mt-4 text-lg text-[var(--ivory)]/70">
              IKG Punjab Technical University
            </p>

            {/* Academic information */}
            <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-[var(--ivory)]/10 bg-[var(--ivory)]/10 sm:grid-cols-3">
              {/* Duration */}
              <div className="bg-[var(--graphite)] p-5">
                <div className="flex items-center gap-2 text-[var(--ivory)]/45">
                  <CalendarDays size={15} />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em]">
                    Duration
                  </span>
                </div>

                <p className="mt-3 text-sm">
                  July 2023 — June 2027
                </p>
              </div>

              {/* CGPA */}
              <div className="bg-[var(--graphite)] p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--ivory)]/45">
                  CGPA
                </p>

                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl font-medium text-[var(--coral)]">
                    9.05
                  </span>

                  <span className="text-xs text-[var(--ivory)]/40">
                    / 10
                  </span>
                </div>
              </div>

              {/* Focus */}
              <div className="bg-[var(--graphite)] p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--ivory)]/45">
                  Focus
                </p>

                <p className="mt-3 text-sm">
                  CS · AI/ML · Software
                </p>
              </div>
            </div>

            {/* Animated academic timeline */}
            <div className="mt-12">
              <div className="relative h-[2px] overflow-hidden rounded-full bg-[var(--ivory)]/10">
                {/* Animated progress */}
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "80%" }}
                  viewport={{
                    once: true,
                    amount: 0.6,
                  }}
                  transition={{
                    duration: 2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[var(--coral)] via-[var(--coral)] to-[var(--sage)]"
                />

                {/* Starting point */}
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{
                    once: true,
                    amount: 0.6,
                  }}
                  transition={{
                    delay: 0.1,
                    duration: 0.4,
                  }}
                  className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[var(--coral)] shadow-[0_0_18px_rgba(240,125,101,0.45)]"
                />

                {/* Graduation point */}
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{
                    once: true,
                    amount: 0.6,
                  }}
                  transition={{
                    delay: 1.5,
                    duration: 0.4,
                  }}
                  className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border border-[var(--sage)] bg-[var(--graphite)]"
                />
              </div>

              <div className="mt-4 flex justify-between text-[10px] uppercase tracking-[0.15em] text-[var(--ivory)]/40">
                <span>2023 · Started</span>

                <span>2027 · Expected Graduation</span>
              </div>
            </div>

            {/* Bottom identity */}
            <div className="mt-10 flex items-center justify-between gap-4 border-t border-[var(--ivory)]/10 pt-6">
              <p className="text-sm text-[var(--ivory)]/45">
                Computer Science &amp; Engineering
              </p>

              <ArrowUpRight
                size={15}
                className="text-[var(--ivory)]/40"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}