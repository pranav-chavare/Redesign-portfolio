import { CERTIFICATIONS, SKILL_GROUPS } from "@/lib/data";
import { Section } from "./section";

export function Skills() {
  return (
    <Section id="skills" title="Skills and certifications">
      <div className="grid gap-x-14 gap-y-12 md:grid-cols-2">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="font-display text-xl font-semibold tracking-tight">{group.title}</h3>
            <p className="mt-1.5 text-graphite">{group.description}</p>
            <ul aria-label={`${group.title} tools`} className="mt-4 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="mb-5 font-display text-lg font-semibold">Certifications</h3>
        <ul className="border-b border-rule">
          {CERTIFICATIONS.map((cert) => (
            <li key={cert} className="border-t border-rule py-4 text-ink/90">
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
