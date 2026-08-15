"use client";

import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { PortfolioButton } from "@/components/ui/portfolio-button";
import { AISystemFlow } from "@/components/visuals/ai-system-flow";
import { SITE_CONFIG } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100svh-2rem)] items-center overflow-hidden pt-24 lg:pt-28"
    >
      {/* Decorative vertical line */}
      <div className="pointer-events-none absolute bottom-0 left-[7%] top-0 hidden w-px bg-[var(--border)] lg:block" />

      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.92fr] lg:gap-8">
          {/* Content */}
          <div className="relative z-20 max-w-3xl">
            {/* Role / availability */}
            <Badge variant="accent">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-50" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              </span>

              AI/ML Engineer
              <span className="mx-2 text-[var(--accent)]">·</span>
              AI Backend Engineer
            </Badge>

            {/* Personal introduction */}
            <h1 className="mt-8 text-[clamp(3.8rem,7vw,7rem)] font-medium leading-[0.88] tracking-[-0.075em]">
              <span className="block">Hi, I&apos;m</span>

              <span className="mt-2 block text-[var(--accent)]">
                Sukhsimran
              </span>

              <span className="block">Singh.</span>
            </h1>

            {/* Main positioning statement */}
            <h2 className="mt-9 max-w-2xl text-[clamp(1.8rem,3vw,3.2rem)] font-medium leading-[1.05] tracking-[-0.045em] text-[var(--text-primary)]">
              Building intelligent systems
              <br className="hidden sm:block" />
              <span className="text-[var(--accent)]">
                from models to products.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
              I build AI applications across machine learning, LLMs,
              RAG, agentic systems, and backend engineering — connecting
              intelligent models with retrieval, APIs, and reliable
              software systems.
            </p>

            {/* CTA buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              {/* Explore Work */}
              <a href="#projects">
                <PortfolioButton>
                  Explore my work

                  <ArrowDownRight
                    size={17}
                    className="ml-2 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </PortfolioButton>
              </a>

              {/* GitHub */}
              <Link
                href={SITE_CONFIG.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PortfolioButton variant="secondary">
                  GitHub

                  <ArrowUpRight size={16} className="ml-2" />
                </PortfolioButton>
              </Link>
            </div>

            {/* Technology strip */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[var(--text-muted)] sm:text-sm">
              <span>Python</span>

              <span className="h-1 w-1 rounded-full bg-[var(--beige)]" />

              <span>LLMs</span>

              <span className="h-1 w-1 rounded-full bg-[var(--beige)]" />

              <span>RAG</span>

              <span className="h-1 w-1 rounded-full bg-[var(--beige)]" />

              <span>FastAPI</span>

              <span className="h-1 w-1 rounded-full bg-[var(--beige)]" />

              <span>PostgreSQL</span>
            </div>
          </div>

          {/* System visual */}
          <div className="relative z-10 flex justify-center lg:justify-end">
            <AISystemFlow />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 lg:flex">
        <span className="h-px w-8 bg-[var(--border-strong)]" />

        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
          Scroll to explore
        </span>

        <span className="h-px w-8 bg-[var(--border-strong)]" />
      </div>
    </section>
  );
}