import { CERTIFICATIONS, SKILL_GROUPS } from "@/lib/data";
import { Section } from "./section";

export function Skills() {
  return (
    <Section id="stack" title="Tools of the trade" note="Technologies I work with">
      <div className="stack-grid">
        {SKILL_GROUPS.map((group, index) => (
          <div className="stack-group" key={group.title}>
            <span className="stack-index">0{index + 1}</span>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <ul className="tag-list">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        ))}
      </div>
      <div className="cert-row">
        <p className="subsection-label">Certifications</p>
        <ul>{CERTIFICATIONS.map((cert) => <li key={cert}>{cert}</li>)}</ul>
      </div>
    </Section>
  );
}
