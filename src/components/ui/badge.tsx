import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "accent" | "sage";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variants = {
    default:
      "border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)]",

    accent:
      "border-[var(--accent)]/30 bg-[var(--accent)]/8 text-[var(--accent)]",

    sage:
      "border-[var(--sage)]/30 bg-[var(--sage)]/8 text-[var(--sage)]",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium tracking-wide",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}