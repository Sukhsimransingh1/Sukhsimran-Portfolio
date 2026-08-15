import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

interface SectionWrapperProps
  extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  number?: string;
  eyebrow?: string;
}

export function SectionWrapper({
  children,
  number,
  eyebrow,
  className,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      className={cn(
        "relative py-24 sm:py-32 lg:py-40",
        className,
      )}
      {...props}
    >
      <Container>
        {(number || eyebrow) && (
          <div className="mb-10 flex items-center gap-4">
            {number && (
              <span className="font-mono text-xs font-medium tracking-[0.2em] text-[var(--accent)]">
                {number}
              </span>
            )}

            {eyebrow && (
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                {eyebrow}
              </span>
            )}
          </div>
        )}

        {children}
      </Container>
    </section>
  );
}