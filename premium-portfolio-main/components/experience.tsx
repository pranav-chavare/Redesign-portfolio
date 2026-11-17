import { EXPERIENCE, type ExperienceItem } from "@/lib/data";
import { Section } from "./section";

function Entry({ item }: { item: ExperienceItem }) {
  return (
    <article className="timeline-row">
      <p className="timeline-date">{item.period}</p>
      <div>
        <h3>{item.role}</h3>
        <p className="timeline-org">{item.organization}</p>
        {item.summary && <p className="timeline-summary">{item.summary}</p>}
        {item.details?.length ? <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul> : null}
      </div>
    </article>
  );
}

export function Experience() {
  const work = EXPERIENCE.filter((item) => item.type === "work");
  const education = EXPERIENCE.filter((item) => item.type === "education");
  return (
    <Section id="experience" title="Experience & education" note="The path so far">
      <div className="timeline">
        {work.map((item) => <Entry key={item.organization + item.role} item={item} />)}
      </div>
      <p className="subsection-label">Education</p>
      <div className="timeline">
        {education.map((item) => <Entry key={item.organization + item.role} item={item} />)}
      </div>
    </Section>
  );
}
