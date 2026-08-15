import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface PortfolioButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

export function PortfolioButton({
  className,
  variant = "primary",
  ...props
}: PortfolioButtonProps) {
  const variants = {
    primary:
      "bg-[var(--graphite)] text-[var(--ivory)] hover:-translate-y-0.5 hover:bg-[var(--graphite-soft)]",

    secondary:
      "border border-[var(--border-strong)] bg-transparent text-[var(--text-primary)] hover:-translate-y-0.5 hover:bg-[var(--surface)]",

    ghost:
      "text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}