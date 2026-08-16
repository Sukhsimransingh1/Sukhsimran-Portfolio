"use client";

import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[17px] w-[17px]"
      fill="currentColor"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.5.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.58 9.58 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.594 1.028 2.687 0 3.848-2.339 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[17px] w-[17px]"
      fill="currentColor"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.849 3.37-1.849 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.555 20.452h3.558V8.999H3.555v11.453ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.201 24 24 23.227 24 22.271V1.729C24 .774 23.201 0 22.225 0Z" />
    </svg>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f5f1e9] px-6 py-28 text-[#171717] sm:py-36 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section heading */}
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-xs tracking-[0.3em] text-[#ef775f]">
            08
          </span>

          <span className="h-px w-12 bg-[#ef775f]/50" />

          <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#77736d]">
            Contact
          </span>
        </div>

        {/* Main content */}
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-24">
          {/* Large heading */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-5xl text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.84] tracking-[-0.07em]"
            >
              Let&apos;s build
              <br />
              <span className="text-[#99958e]">something</span>
              <br />
              intelligent.
            </motion.h2>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-md lg:pb-3"
          >
            <p className="text-lg leading-8 text-[#68645e] sm:text-xl">
              Open to AI/ML engineering opportunities, interesting technical
              problems, collaborations, and conversations around building
              useful AI systems.
            </p>
          </motion.div>
        </div>

        {/* Contact details */}
        <div className="mt-20 border-y border-[#171717]/15">
          {/* Email */}
          <a
            href="mailto:sukhsimransingh304@gmail.com"
            className="group flex flex-col gap-5 py-8 transition-colors duration-300 hover:bg-black/[0.025] sm:flex-row sm:items-center sm:justify-between sm:px-5"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#171717]/15">
                <Mail size={17} strokeWidth={1.6} />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8b8780]">
                  Email
                </p>

                <p className="mt-1 text-base font-medium sm:text-lg">
                  sukhsimransingh304@gmail.com
                </p>
              </div>
            </div>

            <ArrowUpRight
              size={20}
              strokeWidth={1.6}
              className="text-[#77736d] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#ef775f]"
            />
          </a>

          {/* Phone */}
          <a
            href="tel:+918968025594"
            className="group flex flex-col gap-5 border-t border-[#171717]/15 py-8 transition-colors duration-300 hover:bg-black/[0.025] sm:flex-row sm:items-center sm:justify-between sm:px-5"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#171717]/15">
                <Phone size={17} strokeWidth={1.6} />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8b8780]">
                  Phone
                </p>

                <p className="mt-1 text-base font-medium sm:text-lg">
                  +91 8968025594
                </p>
              </div>
            </div>

            <ArrowUpRight
              size={20}
              strokeWidth={1.6}
              className="text-[#77736d] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#ef775f]"
            />
          </a>
        </div>

        {/* Social links */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sukhsimran-singh1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Sukhsimran Singh's LinkedIn profile"
            className="group inline-flex items-center justify-between gap-8 rounded-full border border-[#171717]/15 px-6 py-4 text-sm font-medium transition-all duration-300 hover:border-[#171717] hover:bg-[#171717] hover:text-[#f5f1e9]"
          >
            <span className="flex items-center gap-3">
              <LinkedinIcon />
              LinkedIn
            </span>

            <ArrowUpRight
              size={16}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Sukhsimransingh1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Sukhsimran Singh's GitHub profile"
            className="group inline-flex items-center justify-between gap-8 rounded-full border border-[#171717]/15 px-6 py-4 text-sm font-medium transition-all duration-300 hover:border-[#171717] hover:bg-[#171717] hover:text-[#f5f1e9]"
          >
            <span className="flex items-center gap-3">
              <GithubIcon />
              GitHub
            </span>

            <ArrowUpRight
              size={16}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        
      </div>
    </section>
  );
}