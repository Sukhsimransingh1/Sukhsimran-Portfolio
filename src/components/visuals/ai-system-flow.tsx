"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  BrainCircuit,
  Boxes,
  Database,
  Network,
  Server,
  Sparkles,
} from "lucide-react";
import { useRef } from "react";

const nodes = [
  {
    id: "data",
    label: "DATA",
    description: "Signals & knowledge",
    icon: Database,
    x: "8%",
    y: "16%",
  },
  {
    id: "models",
    label: "MODELS",
    description: "ML & Transformers",
    icon: BrainCircuit,
    x: "55%",
    y: "8%",
  },
  {
    id: "retrieval",
    label: "RETRIEVAL",
    description: "Embeddings & RAG",
    icon: Network,
    x: "68%",
    y: "43%",
  },
  {
    id: "intelligence",
    label: "INTELLIGENCE",
    description: "LLMs & Agents",
    icon: Sparkles,
    x: "29%",
    y: "50%",
  },
  {
    id: "api",
    label: "APIs",
    description: "FastAPI & Services",
    icon: Server,
    x: "5%",
    y: "72%",
  },
  {
    id: "product",
    label: "PRODUCT",
    description: "Useful AI systems",
    icon: Boxes,
    x: "63%",
    y: "78%",
  },
];

const connections = [
  {
    x1: "15%",
    y1: "24%",
    x2: "59%",
    y2: "16%",
  },
  {
    x1: "63%",
    y1: "20%",
    x2: "72%",
    y2: "47%",
  },
  {
    x1: "67%",
    y1: "55%",
    x2: "44%",
    y2: "57%",
  },
  {
    x1: "34%",
    y1: "62%",
    x2: "13%",
    y2: "76%",
  },
  {
    x1: "39%",
    y1: "66%",
    x2: "67%",
    y2: "82%",
  },
];

export function AISystemFlow() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  function handleMouseMove(
    event: React.MouseEvent<HTMLDivElement>,
  ) {
    if (!containerRef.current) return;

    const rect =
      containerRef.current.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x * 18);
    mouseY.set(y * 18);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: smoothX,
        y: smoothY,
      }}
      className="relative aspect-square w-full max-w-[500px] lg:max-w-[520px]"
    >
      {/* Outer frame */}
      <div className="absolute inset-0 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] backdrop-blur-sm" />

      {/* Inner grid */}
      <div
        className="absolute inset-4 overflow-hidden rounded-[1.5rem] border border-[var(--border)] sm:inset-5"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(23,23,23,0.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(23,23,23,0.045) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[35%] top-[32%] h-48 w-48 rounded-full bg-[var(--coral)] blur-3xl"
      />

      {/* Connection layer */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="flow-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="var(--coral)"
              stopOpacity="0.15"
            />
            <stop
              offset="50%"
              stopColor="var(--coral)"
              stopOpacity="0.65"
            />
            <stop
              offset="100%"
              stopColor="var(--sage)"
              stopOpacity="0.3"
            />
          </linearGradient>
        </defs>

        {connections.map((connection, index) => (
          <motion.line
            key={`${connection.x1}-${connection.y1}`}
            x1={connection.x1}
            y1={connection.y1}
            x2={connection.x2}
            y2={connection.y2}
            stroke="url(#flow-gradient)"
            strokeWidth="0.25"
            strokeDasharray="1.5 1.5"
            initial={{
              strokeDashoffset: 0,
            }}
            animate={{
              strokeDashoffset: -12,
            }}
            transition={{
              duration: 3 + index * 0.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>

      {/* Nodes */}
      {nodes.map((node, index) => {
        const Icon = node.icon;

        return (
          <motion.div
            key={node.id}
            className="absolute z-10"
            style={{
              left: node.x,
              top: node.y,
            }}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15 + index * 0.1,
            }}
          >
            <motion.div
              whileHover={{
                y: -5,
                scale: 1.04,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="group relative"
            >
              {/* Node */}
              <div className="flex min-w-[145px] items-center gap-3 rounded-2xl border border-[var(--border-strong)] bg-[var(--ivory)]/90 px-4 py-3 shadow-[0_16px_40px_rgba(23,23,23,0.08)] backdrop-blur-md">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--graphite)] text-[var(--ivory)]">
                  <Icon size={17} strokeWidth={1.7} />
                </div>

                <div>
                  <p className="text-[10px] font-bold tracking-[0.14em] text-[var(--text-primary)]">
                    {node.label}
                  </p>

                  <p className="mt-0.5 text-[9px] text-[var(--text-muted)]">
                    {node.description}
                  </p>
                </div>
              </div>

              {/* Pulse */}
              <motion.span
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  delay: index * 0.35,
                }}
                className="absolute -inset-1 -z-10 rounded-2xl border border-[var(--coral)]/20"
              />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Center label */}
      <div className="absolute left-1/2 top-[32%] z-20 -translate-x-1/2 text-center">
        <motion.div
          animate={{
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[var(--coral)]/30 bg-[var(--ivory)]/80 shadow-[0_20px_60px_rgba(233,120,95,0.15)] backdrop-blur-xl"
        >
          <BrainCircuit
            size={30}
            strokeWidth={1.25}
            className="text-[var(--accent)]"
          />
        </motion.div>

        <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--text-muted)]">
          AI SYSTEM
        </p>
      </div>

      {/* Technical label */}
      <div className="absolute bottom-6 left-6 z-20">
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
          SYSTEM / 001
        </p>

        <p className="mt-1 text-xs text-[var(--text-secondary)]">
          From intelligence to product
        </p>
      </div>

      {/* Status */}
      <div className="absolute right-6 top-6 z-20 flex items-center gap-2 rounded-full border border-[var(--sage)]/30 bg-[var(--ivory)]/80 px-3 py-1.5 backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--sage)] opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--sage)]" />
        </span>

        <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[var(--text-secondary)]">
          Building
        </span>
      </div>
    </motion.div>
  );
}