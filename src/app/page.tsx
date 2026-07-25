import { HomeHero } from "@/components/home-hero";
import { HomeAbout } from "@/components/home-about";
import { HomeSkills } from "@/components/home-skills";
import { HomeExperience } from "@/components/home-experience";
import { HomeEducation } from "@/components/home-education";
import { HomeProjects } from "@/components/home-projects";
import { HomeContact } from "@/components/home-contact";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeSkills />
      <HomeExperience />
      <HomeEducation />
      <HomeProjects />
      <HomeContact />
    </>
  );
}
