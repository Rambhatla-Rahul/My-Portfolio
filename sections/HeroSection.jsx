'use client'
import React from 'react'
import CoinFlip from '@/components/CoinFlip';
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import MetallicText from "@/components/MetallicText";
import { SiGmail } from "react-icons/si";
const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
      <>
        <div className="flex flex-col w-1/2 h-full p-10">
          <div className='flex flex-col items-center justify-center pr-80'>
            <CoinFlip size={250} />
          </div>
        </div>
        <div className="flex flex-col  h-full px-10 font-bold w-1/2 pt-40">
          <MetallicText />
          <div className="w-full h-full flex flex-col mt-6">
              <p className="text-wrap max-w-[600px] roboto-font font-extralight">I'm <span className='font-extrabold'>Rambhatla Rahul</span> Full Stack MERN Developer from <span className='font-extrabold'>India</span> focused on building fast, scalable, and user-friendly web applications.</p>
              <br/>
              <p className="text-wrap shadows-into-light-regular max-w-[600px] roboto-font font-extralight">I'm currently open to work, seeking opportunities to apply my skills in <span className='font-extrabold'>real-time</span>, <span className='font-extrabold'>practical environments</span> while contributing to impactful, real-world projects.</p>
          </div>
        </div>
      </>  
  )
}

export default HeroSection