import { SITE } from "@/lib/data";
import { Section } from "./section";

export function Connect() {
  return (
    <>
      <Section id="connect" title="Connect">
        <p className="max-w-prose text-[1.375rem] leading-snug sm:text-[1.625rem]">
          For engineering opportunities, collaborations or a good technical conversation, reach out.
        </p>
        <a
          href={`mailto:${SITE.email}`}
          className="link mt-8 inline-block break-all font-display text-[clamp(1.25rem,4.4vw,2.5rem)] font-semibold tracking-tight"
        >
          {SITE.email}
        </a>
        <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-2 font-display text-base font-medium">
          <li>
            <a className="link" href={SITE.social.github} target="_blank" rel="noreferrer noopener">
              GitHub<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a className="link" href={SITE.social.linkedin} target="_blank" rel="noreferrer noopener">
              LinkedIn<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </Section>
      <footer className="mx-auto max-w-page px-6">
        <div className="flex items-center justify-between gap-4 border-t border-rule py-8 font-display text-sm text-graphite">
          <p>© {new Date().getFullYear()} {SITE.name}</p>
          <a className="link" href="#about">
            Back to top
          </a>
        </div>
      </footer>
    </>
  );
}
