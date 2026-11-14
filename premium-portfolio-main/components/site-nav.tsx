"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "connect", label: "Connect" },
];

// Floating pill navigation. Highlights the section currently in view.
export function SiteNav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-30 flex justify-center px-2">
      <nav
        aria-label="Main"
        className="flex items-center rounded-full border border-rule bg-card/90 p-1 shadow-[0_8px_24px_-14px_rgba(21,24,26,0.45)] backdrop-blur"
      >
        {LINKS.map((link) => {
          const isActive = active === link.id;
          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={isActive ? "true" : undefined}
              className={`rounded-full px-2.5 py-1.5 font-display text-[0.8125rem] font-medium transition-colors sm:px-4 sm:text-sm ${
                isActive ? "bg-ink text-paper" : "text-ink/75 hover:bg-ink/5 hover:text-ink"
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
