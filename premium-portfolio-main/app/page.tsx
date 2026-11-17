import { Connect } from "@/components/connect";
import { Experience } from "@/components/experience";
import { GithubSection } from "@/components/github";
import { Playground } from "@/components/playground";
import { Profile } from "@/components/profile";
import { Projects } from "@/components/projects";
import { SiteNav } from "@/components/site-nav";
import { Skills } from "@/components/skills";

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main id="content">
        <Profile />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Playground />
        <div className="section-divider" />
        <GithubSection />
        <Connect />
      </main>
    </>
  );
}
