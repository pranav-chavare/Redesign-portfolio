import { ArrowUpRight, Github } from "lucide-react";
import { SITE } from "@/lib/data";
import { Section } from "./section";

export function GithubSection() {
  return (
    <Section id="github" title="Around GitHub">
      <div className="github-panel">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-paper">
          <Github size={24} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-display text-xl font-semibold tracking-tight">Code, experiments and ongoing work.</p>
          <p className="mt-2 max-w-prose text-graphite">
            Explore repositories, project source code and the engineering work behind these builds.
            The profile is the live source of truth for current activity.
          </p>
        </div>
        <a className="action-button" href={SITE.social.github} target="_blank" rel="noreferrer noopener">
          View GitHub <ArrowUpRight size={15} />
        </a>
      </div>
    </Section>
  );
}
