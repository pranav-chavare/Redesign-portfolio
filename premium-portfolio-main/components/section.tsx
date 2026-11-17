import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  note?: string;
}

export function Section({ id, title, children, note }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="content-section">
      <div className="section-heading">
        <div><p className="section-kicker">{note ?? "A closer look"}</p><h2 id={`${id}-title`}>{title}</h2></div>
        <span className="section-index">{String(["projects","experience","stack","playground","connect"].indexOf(id) + 1).padStart(2,"0")}</span>
      </div>
      {children}
    </section>
  );
}
