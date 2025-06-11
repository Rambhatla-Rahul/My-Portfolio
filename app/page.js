import EducationTimeline from "@/components/EducationTimeline";
import HeroSection from "@/sections/HeroSection";
import ProjectsSection from "@/sections/ProjectsSection";
import SkillsSection from "@/sections/SkillsSection";


export default function Home() {
  

  return (
    <div className="flex flex-col items-center justify-items-center w-full h-screen font-[family-name:var(--font-geist-sans)] pt-2 gap-20">
      <div className="absolute w-full z-[-10] pl-6 overflow-hidden">
        <CurvedPurpleDiv/>
      </div>

      <section id="hero-section" className="flex w-full p-10 h-screen">
        <HeroSection/>
      </section>


      <section className="flex w-full pt-30 p-6 h-full">
        <div className="flex flex-col w-full h-full bg-[rgba(213,199,199,0.43)] p-10 rounded-2xl gap-20 mb-10">
          <div className="flex flex-col w-full gap-10">
            <h1 className="w-full text-center  text-nowrap text-6xl font-extrabold text-gray-500">Skills I have Learnt?</h1>
            <div className="flex w-full h-full items-center justify-center">
              <SkillsSection/>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full pt-4 p-6 h-screen gap-10" id="projects-section">
        <div className="relative flex flex-col w-full h-full bg-[rgb(0,0,0)] p-10 py-20 rounded-2xl gap-20 overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl pointer-events-none" />

          <div className="absolute bottom-0 right-0 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl pointer-events-none" />

          <h1 className="w-full text-center text-nowrap text-6xl font-extrabold text-gray-500">Projects</h1>
          
          <ProjectsSection />
        </div>
      </section>

      <section id="education-section" className="px-4 w-full pb-4">
        <EducationTimeline />
      </section>
      
    </div>
  );
}
const CurvedPurpleDiv = () => (
  <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-[600px] rounded-2xl">
    <defs>
      <pattern
        id="imagePattern"
        patternUnits="userSpaceOnUse"
        width="100%"
        height="100%"
      >
        <image
          href="/blurred.png"
          x="0"
          y="0"
          width="100%"
          height="100%"
          preserveAspectRatio="xMinYMin slice"
        />
      </pattern>
    </defs>
    <path d="M0,100 Q50,0 100,1 L100,0 L0,0 Z" fill="url(#imagePattern)" />
  </svg>
);