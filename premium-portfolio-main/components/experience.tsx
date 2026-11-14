import { EXPERIENCE, type ExperienceItem } from "@/lib/data";
import { Section } from "./section";

function Entry({ item, level = 3 }: { item: ExperienceItem; level?: 3 | 4 }) {
  const Heading = level === 3 ? "h3" : "h4";
  const isCurrent = item.period === "Present";
  return (
    <li className="grid gap-1.5 border-t border-rule py-7 md:grid-cols-[200px_1fr] md:gap-8">
      <p className="font-display text-sm font-medium text-graphite md:pt-1.5">
        {isCurrent ? <mark className="rounded-sm bg-highlighter px-1.5 py-0.5 text-ink">{item.period}</mark> : item.period}
      </p>
      <div>
        <Heading className="font-display text-[1.375rem] font-semibold leading-snug tracking-tight">{item.role}</Heading>
        <p className="text-graphite">{item.organization}</p>
        {item.summary && <p className="mt-3 max-w-prose text-ink/85">{item.summary}</p>}
        {item.details && item.details.length > 0 && (
          <ul className="mt-3 max-w-prose list-disc space-y-1.5 pl-5 text-ink/85 marker:text-ballpoint">
            {item.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

export function Experience() {
  const work = EXPERIENCE.filter((e) => e.type === "work");
  const education = EXPERIENCE.filter((e) => e.type === "education");
  return (
    <Section id="experience" title="Experience and education">
      <ul className="border-b border-rule">
        {work.map((item) => (
          <Entry key={`${item.organization}-${item.role}`} item={item} />
        ))}
      </ul>
      {education.length > 0 && (
        <div className="mt-14">
          <h3 className="mb-6 font-display text-lg font-semibold">Education</h3>
          <ul className="border-b border-rule">
            {education.map((item) => (
              <Entry key={`${item.organization}-${item.role}`} item={item} level={4} />
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}
