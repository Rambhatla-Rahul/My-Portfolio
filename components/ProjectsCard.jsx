'use client';
import Image from 'next/image';
import React from 'react';

const ProjectCard = ({ projectName, projectDesc, projectImg, projectUrl }) => {
  return (
    <div
      className="bg-white/10 backdrop-blur-[10px] border border-white/20 
                 shadow-[0_4px_30px_rgba(255,255,255,0.1)] rounded-2xl 
                 p-5 w-full max-w-md mx-auto text-white transition-all duration-300 
                 hover:bg-white/20 flex flex-col justify-between items-center min-h-[350px] max-h-[350px] hover:cursor-pointer"
        onClick={()=>{
            window.open(`${projectUrl}`)
        }}
    >
      
      <div className="w-full rounded-xl mb-4">
        <Image
          src={projectImg}
          alt={projectName}
          width={388.938}
          height={162.413}
          className="object-cover rounded-xl"
        />
      </div>

      
      <div className="flex flex-col items-center text-center flex-1">
        <h2 className="text-2xl font-bold mb-2">{projectName}</h2>
        <p className="text-gray-300 mb-4 px-2">{projectDesc}</p>

      
        
      </div>
    </div>
  );
};

export default ProjectCard;
