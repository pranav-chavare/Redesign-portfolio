import { Connect } from "@/components/connect";
import { Experience } from "@/components/experience";
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
        <Experience />
        <Projects />
        <Skills />
        <Connect />
      </main>
    </>
  );
}
