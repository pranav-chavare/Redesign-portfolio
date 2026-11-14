import { Github, Linkedin, Mail } from "lucide-react";
import { FOCUS_AREAS, INTRO, SITE } from "@/lib/data";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const initials = SITE.name
  .split(" ")
  .map((part) => part[0])
  .join("");

const LINKS = [
  { label: "GitHub", href: SITE.social.github, Icon: Github, external: true },
  { label: "LinkedIn", href: SITE.social.linkedin, Icon: Linkedin, external: true },
  { label: "Email", href: `mailto:${SITE.email}`, Icon: Mail, external: false },
];

// The first thing visitors see: name, role, links, a short intro and focus areas.
export function Profile() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative">
      <div className="ruler" aria-hidden />
      <div className="mx-auto max-w-page px-6 pb-12 pt-24 sm:pb-16 sm:pt-32">
        <div className="flex flex-col-reverse gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <h1
              id="about-title"
              className="text-[clamp(3.5rem,11vw,7rem)] font-bold leading-[0.92] tracking-[-0.045em]"
            >
              <span className="block animate-rise">Pranav</span>
              <span className="block animate-rise [animation-delay:90ms]">Chaware</span>
            </h1>
            <p className="mt-6 animate-rise font-display text-lg font-medium text-graphite [animation-delay:180ms] sm:text-xl">
              {SITE.role}
            </p>
            <ul className="mt-6 flex animate-rise flex-wrap gap-2 [animation-delay:240ms]">
              {LINKS.map(({ label, href, Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                    className="inline-flex items-center gap-2 rounded-full border border-rule bg-card px-3.5 py-2 font-display text-sm font-medium transition-colors hover:border-ballpoint hover:text-ballpoint"
                  >
                    <Icon size={16} aria-hidden />
                    {label}
                    {external && <span className="sr-only"> (opens in a new tab)</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Portrait: uses SITE.photo when provided, otherwise initials. */}
          <figure
            className="relative w-[148px] shrink-0 animate-rise rounded-[3px] border border-rule bg-card p-2 pb-7 [animation-delay:300ms] sm:w-[168px] md:rotate-[2.5deg]"
            style={{ boxShadow: "0 14px 26px -16px rgba(21,24,26,0.4)" }}
          >
            {SITE.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={`${BASE_PATH}/${SITE.photo}`}
                alt={`Portrait of ${SITE.name}`}
                width={152}
                height={152}
                className="aspect-square w-full object-cover"
              />
            ) : (
              <div
                aria-hidden
                className="flex aspect-square w-full items-center justify-center bg-ink/[0.06] font-display text-5xl font-bold tracking-tight text-ink/70"
              >
                {initials}
              </div>
            )}
            <figcaption className="absolute inset-x-0 bottom-1.5 text-center font-body text-[0.8125rem] italic text-graphite">
              {SITE.location}
            </figcaption>
          </figure>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-[1.15fr_1fr] md:gap-16">
          <p className="max-w-prose text-[1.375rem] leading-snug sm:text-[1.625rem]">{SITE.tagline}</p>
          <ul className="space-y-3 text-[1.0625rem] text-ink/85">
            {INTRO.map((line) => (
              <li key={line} className="flex gap-3">
                <span aria-hidden className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-ballpoint" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <ul aria-label="Focus areas" className="mt-12 flex flex-wrap gap-2">
          {FOCUS_AREAS.map((area) => (
            <li key={area} className="chip">
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
