import { HomeHero } from "@/components/home-hero";
import { HomeProjects } from "@/components/home-projects";
import { HomeAbout } from "@/components/home-about";
import { HomeContact } from "@/components/home-contact";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeProjects />
      <HomeAbout />
      <HomeContact />
    </>
  );
}
