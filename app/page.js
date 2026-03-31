import EducationTimeline from "@/components/home/EducationTimeline";
import Navbar from "@/components/home/Navbar";
import ContactSection from "@/sections/ContactSection";
import HeroSection from "@/sections/HeroSection";
import ProjectsSection from "@/sections/ProjectsSection";
import SkillsSection from "@/sections/SkillsSection";


export default function Home() {
  

  return (
    <div className="w-full">
      <Navbar/>
      <HeroSection/>
      <ProjectsSection/>
      <SkillsSection/>
      <section id="education-section" className="">
        <EducationTimeline />
      </section>
      <ContactSection/>
      
    </div>
  );
}
