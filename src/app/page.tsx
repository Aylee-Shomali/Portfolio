import { HomeHero } from "@/components/home-hero";
import { HomeAbout } from "@/components/home-about";
import { HomeSkills } from "@/components/home-skills";
import { HomeProjects } from "@/components/home-projects";
import { HomeContact } from "@/components/home-contact";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeSkills />
      <HomeProjects />
      <HomeContact />
    </>
  );
}
