"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "playground", label: "Lab" },
  { id: "connect", label: "Contact" },
];

export function SiteNav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = LINKS.map(({ id }) => document.getElementById(id)).filter(
      (element): element is HTMLElement => element !== null
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries.filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (current) setActive(current.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#about" className="nav-brand">PC<span>.</span></a>
        <div className="nav-links">
          {LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} className={active === link.id ? "nav-link active" : "nav-link"}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
