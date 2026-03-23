"use client";

import ProjectCard from "@/components/ProjectsCard";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {projects} from "@/constants/Projects";


const slideVariants = {
enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.96
  }),
    center: {
    x: 0,
    opacity: 1,
    scale: 1
  },
    exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.96
  })
};

const ProjectsSection = () => {

    const [[index, direction], setIndex] = useState([0, 0]);

    const nextProject = () => {
      setIndex(([prev]) => [
      (prev + 1) % projects.length,
      1
      ]);
      };

    const prevProject = () => {
        setIndex(([prev]) => [
        prev === 0 ? projects.length - 1 : prev - 1,
        -1
        ]);
        };

    return ( 
    <section
      id="projects-section"
      className="w-full min-h-screen flex flex-col items-center px-4 py-20 bg-black text-white container-bg"
    >


      <div className="max-w-6xl w-full flex flex-col gap-12">

        {/* Title */}
        <h2 className="text-6xl text-gray-600 font-bold text-center">Projects</h2>

        {/* Slider Container */}
        <div className="relative flex items-center justify-center">
          
          {/* Prev */}
          <button
            onClick={prevProject}
            className="absolute left-0 md:-left-14
                      w-10 h-10 rounded-full
                      bg-white/10 hover:bg-white/20
                      border border-white/10
                      flex items-center justify-center
                      transition"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Project */}
          <div className="w-full max-w-8xl relative h-full ">
            
            <AnimatePresence custom={direction} mode="wait">

              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 26
                }}
                className="w-full"
              >
                <ProjectCard project={projects[index]} />
              </motion.div>

            </AnimatePresence>

          </div>

          {/* Next */}
          <button
            onClick={nextProject}
            className="absolute right-0 md:-right-14
                      w-10 h-10 rounded-full
                      bg-white/10 hover:bg-white/20
                      border border-white/10
                      flex items-center justify-center
                      transition"
          >
            <ChevronRight size={18} />
          </button>

        </div>

      </div>

    </section>


    );
};

export default ProjectsSection;
