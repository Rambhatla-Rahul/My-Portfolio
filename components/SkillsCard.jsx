'use client';
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandNodejs } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import Image from "next/image";

const SkillsCard = ({ skillName, skillDesc, skillLink }) => {
  const handleSkillIcon = () => {
    if (skillName === 'JavaScript') {
      return <RiJavascriptFill className="text-yellow-400 text-4xl" />;
    }
    else if(skillName === 'NodeJs'){
      return <TbBrandNodejs className="text-green-500 text-4xl" />;
    }
    else if(skillName === 'NextJS'){
      return <RiNextjsFill className="text-black text-4xl" />;
    }
    else if(skillName === 'Python'){
      return <FaPython className="text-blue-700 text-4xl" />;
    }
    else if(skillName === 'Java'){
      return <FaJava  className="text-red-500 text-4xl" />;
    }
    else if(skillName === 'C'){
      return <Image src={'/icons8-c-programming.svg'} alt ='C-programming' className="object-cover" width={36} height={36} priority/>;
    }
    return null;
  };

  return (
    <div
      className="flex w-[200px] p-2 text-white bg-black/60 backdrop-blur-[10px] border border-white/20 
                 shadow-[0_4px_30px_rgba(255,255,255,0.1)] rounded-2xl cursor-pointer items-center justify-center"
      onClick={() => window.open(skillLink, '_blank')}
    >
      <div className="flex items-center justify-center border-r-2 pr-4">
        {handleSkillIcon()}
      </div>
      <div className="h-full mx-2" />
      <div className="flex flex-col h-full justify-center items-center">
        <h1 className="font-semibold">{skillName}</h1>
      </div>
    </div>
  );
};

export default SkillsCard;
