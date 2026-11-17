import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { SITE } from "@/lib/data";
import { Section } from "./section";

export function Connect() {
  return (
    <>
      <Section id="connect" title="Let's connect" note="Have a project or opportunity?">
        <p className="contact-lede">I'm always open to thoughtful conversations about engineering, cloud infrastructure, data and machine learning.</p>
        <a className="contact-email" href={`mailto:${SITE.email}`}>{SITE.email} <ArrowUpRight size={22}/></a>
        <div className="contact-socials">
          <a href={SITE.social.github} target="_blank" rel="noreferrer noopener"><Github size={16}/> GitHub</a>
          <a href={SITE.social.linkedin} target="_blank" rel="noreferrer noopener"><Linkedin size={16}/> LinkedIn</a>
          <a href={`mailto:${SITE.email}`}><Mail size={16}/> Email</a>
        </div>
      </Section>
      <footer className="site-footer"><span>© {new Date().getFullYear()} {SITE.name}</span><a href="#about">Back to top ↑</a><span>Designed & built with care.</span></footer>
    </>
  );
}
