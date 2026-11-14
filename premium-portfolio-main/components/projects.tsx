import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { Section } from "./section";

const TILTS = ["tilt-a", "tilt-b", "tilt-c", "tilt-d"];

// Projects are "pinned up" as paper cards. Cards only become interactive
// (and lift on hover) when real links are added in lib/data.ts.
export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="grid gap-x-10 gap-y-12 md:grid-cols-2">
        {PROJECTS.map((project, i) => {
          const hasLinks = !!project.links && project.links.length > 0;
          return (
            <li key={project.title} className="pt-2">
              <article className={`pinned h-full ${TILTS[i % TILTS.length]} ${hasLinks ? "has-links" : ""}`}>
                <p className="font-display text-sm text-graphite">{project.category}</p>
                <h3 className="mt-2 text-[1.625rem] font-semibold leading-tight tracking-tight">{project.title}</h3>
                <p className="mt-3 text-ink/85">{project.description}</p>
                <ul aria-label={`${project.title} technologies`} className="mt-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <li key={tag} className="chip">
                      {tag}
                    </li>
                  ))}
                </ul>
                {hasLinks && (
                  <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-display text-sm font-medium">
                    {project.links!.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 text-ballpoint hover:underline"
                      >
                        {link.label}
                        <ArrowUpRight size={15} aria-hidden />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ))}
                  </p>
                )}
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
