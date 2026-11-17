import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { INTRO, SITE } from "@/lib/data";

const LINKS = [
  { label: "GitHub", href: SITE.social.github, Icon: Github },
  { label: "LinkedIn", href: SITE.social.linkedin, Icon: Linkedin },
  { label: "Email", href: `mailto:${SITE.email}`, Icon: Mail },
];

export function Profile() {
  return (
    <section id="about" className="hero-section">
      <div className="eyebrow"><span className="status-dot" /> Available for meaningful engineering opportunities</div>
      <h1 className="hero-title">Pranav<br /><span>Chaware.</span></h1>
      <p className="hero-role">Software Engineer <span>·</span> Cloud, DevOps & MLOps</p>
      <div className="hero-intro">
        <p className="hero-lede">{SITE.tagline}</p>
        <div className="currently">
          <p className="section-kicker">Currently</p>
          <p>Software Engineer at <strong>VSpireInnovations</strong>, working across cloud, automation and modern engineering workflows.</p>
          <p className="location"><MapPin size={14} /> {SITE.location}</p>
        </div>
      </div>
      <div className="hero-bottom">
        <div className="social-links">
          {LINKS.map(({ label, href, Icon }) => (
            <a key={label} href={href} target={label === "Email" ? undefined : "_blank"} rel="noreferrer noopener">
              <Icon size={16} /> {label} <ArrowUpRight size={13} />
            </a>
          ))}
        </div>
        <a className="scroll-cue" href="#projects">Explore selected work <span>↓</span></a>
      </div>
      <div className="intro-notes">
        {INTRO.filter((line) => !line.startsWith("Software Engineer")).map((line) => <p key={line}>{line}</p>)}
      </div>
    </section>
  );
}
