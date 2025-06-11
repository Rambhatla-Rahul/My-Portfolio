import React from "react";

const MetallicText = () => {
  return (
    <div>
      <div className="relative inline-block uppercase tracking-widest font-extrabold text-6xl">
        
        <span className="relative text-transparent bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400 bg-clip-text drop-shadow-xl">
          Full-Stack Web Developer
        </span>
        <span className="absolute top-0 left-0 text-white opacity-20 translate-x-1 translate-y-1 blur-sm pointer-events-none">
          Full-Stack Web Developer
        </span>
        <span
          className="absolute top-0 left-0 w-full h-full pointer-events"
        >
          Full-Stack Web Developer
        </span>
      </div>
    </div>
  );
};

export default MetallicText;
