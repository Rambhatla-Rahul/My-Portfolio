import EducationTimeline from "@/components/EducationTimeline";
import ContactSection from "@/sections/ContactSection";
import HeroSection from "@/sections/HeroSection";
import ProjectsSection from "@/sections/ProjectsSection";
import SkillsSection from "@/sections/SkillsSection";


export default function Home() {
  

  return (
    <div className="w-full">
       
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
