"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Dot } from "lucide-react";

const ProjectCard = ({ project }) => {

  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="relative grid md:grid-cols-2 gap-8 p-6 md:p-8
                 bg-black/50 backdrop-blur-lg
                 border border-white/10
                 rounded-2xl
                 shadow-xl
                 transition-all duration-300
                 "
    >
      
        
          <div className={`absolute right-4 top-0 z-50 flex items-center`}>
            <Dot size={48} className={`${project.status === "Live" ? "text-green-500": "text-amber-500"}`}/> {project.status}
          </div>
        
        
        
      
      {/* Image */}
      {/* <div className="relative w-full h-[250px] md:h-[320px] overflow-hidden rounded-xl">
        <Image
          src={project.image}
          fill
          alt={project.title}
          className="object-cover"
        />
      </div> */}
      <div className="relative w-full h-[350px] overflow-hidden rounded-xl border border-white/10">

        {
          project.live === "" ? 
          (
            <div className="w-full h-full flex items-center justify-center">
              <Code/>
            </div>
          ):
          (
            <iframe
              src={project.live}
              className="absolute top-0 left-0 w-[1440px] h-[900px] scale-[0.4] origin-top-left pointer-events-none border-0"
            />

          )
        }
      </div>
      {/* Content */}
      <div className="flex flex-col justify-center gap-4">

        <h2 className="text-2xl md:text-3xl font-semibold">
          {project.title}
        </h2>

        <p className="text-gray-300 text-sm md:text-base">
          {project.description}
        </p>

        <div className="flex gap-4 mt-2">
          <a
            href={project.live}
            target="_blank"
            className={`px-5 py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition ${project.status === "Live" ? "": "disabled"}`}
          >
            View Project
          </a>

          <a
            href={project.github}
            target="_blank"
            className="px-5 py-2 rounded-lg border border-white/20 hover:border-white/40 transition"
          >
            Source Code
          </a>
        </div>

      </div>


      {/* Tech Stack */}
      {expanded && (
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:col-span-2 border-t border-white/10 pt-6"
        >

          <h3 className="text-lg font-semibold mb-4 text-center">
            Tech Stack
          </h3>

          <div className="flex flex-wrap justify-center gap-3">

            {project.stack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm rounded-lg
                           bg-white/5 border border-white/10
                           hover:border-white/30 transition"
              >
                {tech}
              </span>
            ))}

          </div>

        </motion.div>
      )}

      {/* Expand Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="absolute left-1/2 -bottom-5 -translate-x-1/2
                   px-5 py-2 rounded-full
                   bg-white text-black text-sm font-medium
                   shadow-lg hover:bg-gray-200 transition"
      >
        {expanded ? "Collapse" : "Expand"}
      </button>

    </motion.div>
  );
};

export default ProjectCard;