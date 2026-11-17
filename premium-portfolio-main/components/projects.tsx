import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { Section } from "./section";

export function Projects() {
  return (
    <Section id="projects" title="Selected work" note="Things I've built and explored">
      <div className="project-list">
        {PROJECTS.map((project, index) => (
          <article key={project.title} className="project-row">
            <span className="project-number">{String(index + 1).padStart(2,"0")}</span>
            <div className="project-main">
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="tag-list">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </div>
            <div className="project-links">
              {project.links?.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer noopener">{link.label} <ArrowUpRight size={15}/></a>)}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
