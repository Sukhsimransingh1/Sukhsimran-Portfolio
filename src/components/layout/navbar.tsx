import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  NAV_ITEMS,
  SITE_CONFIG,
} from "@/lib/constants";

export function Navbar() {
  const resumeUrl = "https://drivhttps://drive.google.com/file/d/1kfyXFu0iI7eD6achlUbN_nYdNN3a09y1/view?usp=sharinge.google.com/file/d/1VWCEgeNcgZe88AiVF_Knwio2XruCZbGa/view?usp=sharing";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-[1440px] px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between rounded-full border border-[var(--border)] bg-[var(--ivory)]/90 px-5 shadow-[0_12px_40px_rgba(23,23,23,0.06)] backdrop-blur-xl">

          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-semibold tracking-[-0.05em]"
          >
            {SITE_CONFIG.shortName}
            <span className="text-[var(--accent)]">.</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-7 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Resume */}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-1.5 rounded-full border border-[var(--border-strong)] px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-[var(--graphite)] hover:text-[var(--ivory)] sm:flex"
          >
            Resume

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          {/* Mobile menu placeholder */}
          <button
            type="button"
            aria-label="Open navigation menu"
            className="rounded-full border border-[var(--border)] p-2.5 md:hidden"
          >
            <div className="flex w-4 flex-col gap-1">
              <span className="h-px w-full bg-current" />
              <span className="h-px w-3/4 bg-current" />
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
}