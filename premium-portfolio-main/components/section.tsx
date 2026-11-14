import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

// Shared wrapper so every section has the same width, rhythm and heading style.
export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-page px-6 py-14 sm:py-20">
      <h2
        id={`${id}-title`}
        className="mb-10 flex items-center gap-5 text-[1.75rem] font-semibold tracking-tight sm:text-[2rem]"
      >
        {title}
        <span aria-hidden className="h-px flex-1 bg-rule" />
      </h2>
      {children}
    </section>
  );
}
