"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const activities = [
  {
    number: "01",
    title: "Hack on Hills 7.0",
    organization: "NIT Hamirpur",
    type: "Hackathon",
    description:
      "Built and explored an AI-driven solution in a competitive hackathon environment.",
    highlight: "",
  },
  {
    number: "02",
    title: "Innovate with TRAE Hackathon",
    organization: "NIT Jalandhar",
    type: "Hackathon",
    description:
      "Developed PranRakshak AI, an AI-powered sepsis early detection and clinical decision support system.",
    highlight: "TOP 15 TEAMS",
  },
  {
    number: "03",
    title: "Hackathon 4.0",
    organization: "GNA University",
    type: "Hackathon",
    description:
      "Participated in a collaborative hackathon focused on building and presenting technology-driven solutions.",
    highlight: "",
  },
];

export function Activities() {
  return (
    <section
      id="activities"
      className="relative overflow-hidden bg-[#171717] px-6 py-28 text-[#f5f1e9] md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.3em] text-[#ef775f]">
                07
              </span>

              <span className="h-px w-12 bg-[#ef775f]/50" />

              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#9d9991]">
                Activities
              </span>
            </div>

            <h2 className="max-w-[570px] text-5xl font-medium leading-[0.95] tracking-[-0.055em] md:text-7xl">
              Building,
              <br />
              <span className="text-[#77736d]">competing,</span>
              <br />
              experimenting.
            </h2>
          </div>

          <p className="max-w-[500px] text-base leading-7 text-[#aaa69f] md:ml-auto md:pb-2 md:text-lg">
            Hackathons have been a way to turn ideas into working systems,
            collaborate under constraints, and learn by building.
          </p>
        </div>

        {/* Activity timeline */}
        <div className="relative mt-24">
          {/* Central line */}
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-white/10 md:block" />

          <div className="space-y-20 md:space-y-0">
            {activities.map((activity, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={activity.number}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`relative md:flex md:min-h-[280px] ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-8 z-10 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[#171717] bg-[#ef775f] md:block" />

                  <div
                    className={`w-full md:w-[46%] ${
                      isLeft ? "md:pr-10" : "md:pl-10"
                    }`}
                  >
                    <div className="group">
                      {/* Number + type */}
                      <div className="mb-8 flex items-center justify-between">
                        <span className="font-mono text-xs tracking-[0.2em] text-[#ef775f]">
                          {activity.number}
                        </span>

                        <span className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#85817b]">
                          {activity.type}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl font-medium tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                        {activity.title}
                      </h3>

                      <p className="mt-2 text-base text-[#8f8b84]">
                        {activity.organization}
                      </p>

                      {/* Description */}
                      <p className="mt-7 max-w-[560px] text-sm leading-7 text-[#aaa69f] md:text-base">
                        {activity.description}
                      </p>

                      {/* Highlight */}
                      {activity.highlight && (
                        <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-[#ef775f]/30 bg-[#ef775f]/5 px-4 py-2.5">
                          <Trophy
                            size={15}
                            strokeWidth={1.7}
                            className="text-[#ef775f]"
                          />

                          <span className="font-mono text-[10px] tracking-[0.16em] text-[#ef775f]">
                            {activity.highlight}
                          </span>
                        </div>
                      )}

                      

                      <div className="mt-8 h-px w-full bg-white/10 md:hidden" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Footer statement */}
        <div className="mt-20 border-t border-white/10 pt-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#77736d]">
              Beyond the classroom
            </span>

            <span className="text-sm text-[#77736d]">
              Learn → Build → Compete → Iterate
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}