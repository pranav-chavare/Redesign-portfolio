"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Stack" },
  { id: "playground", label: "Playground" },
  { id: "connect", label: "Contact" },
];

export function SiteNav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = LINKS.map((link) => document.getElementById(link.id)).filter(
      (element): element is HTMLElement => element !== null
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <nav aria-label="Main navigation" className="site-nav">
        <a href="#about" className="nav-mark" aria-label="Pranav Chaware — home">PC<span>.</span></a>
        <div className="nav-links">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? "location" : undefined}
              className={active === link.id ? "nav-link is-active" : "nav-link"}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a className="nav-resume" href="mailto:pranavchavare1008@gmail.com">
          Say hello <ArrowUpRight size={14} />
        </a>
      </nav>
    </header>
  );
}
