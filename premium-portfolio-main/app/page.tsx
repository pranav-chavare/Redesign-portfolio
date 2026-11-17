import { Connect } from "@/components/connect";
import { Experience } from "@/components/experience";
import { Playground } from "@/components/playground";
import { Profile } from "@/components/profile";
import { Projects } from "@/components/projects";
import { SiteNav } from "@/components/site-nav";
import { Skills } from "@/components/skills";

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main id="content" className="portfolio">
        <Profile />
        <Projects />
        <Experience />
        <Skills />
        <Playground />
        <Connect />
      </main>
    </>
  );
}
