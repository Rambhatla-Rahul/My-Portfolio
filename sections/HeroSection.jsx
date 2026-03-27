'use client'
import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import { GoProjectSymlink } from 'react-icons/go';
import { socials_list } from '@/constants/Socials';
import { LinkedinIcon } from '@/components/ui/linkedin-icon';
import { MailIcon } from '@/components/ui/mail-icon';
import { GithubIcon } from '@/components/ui/github-icon';
import gsap from 'gsap';
import { Download } from 'lucide-react';


const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handle_icon = (icon_label)=>{
    switch(icon_label){
      case "LinkedIn":
        return(
          <LinkedinIcon/>
        )
      case "Gmail":
        return(
          <MailIcon/>
        )
      case "Github":
        return(
          <GithubIcon/>
        )
      default:
        return(
          <>
          </>
        )
    }
  }
  return (
    <section
      id="hero-section"
      className="w-full min-h-screen bg-black text-white flex flex-1 md:flex items-center px-4 container-bg"
    >
      <div className='w-full py-38 mx-auto rounded-2xl'>
        <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Intro Section */}
          <div id="intro-container" className="flex flex-col gap-6 order-2 md:order-1">

            <h1
              id="intro-title"
              className="text-gray-300 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
            >
              Rambhatla Rahul
            </h1>

            <h2
              id="intro-sub-title"
              className="flex flex-wrap gap-3 text-gray-400 text-sm sm:text-base md:text-lg"
            >
              <span>Full Stack Developer</span>
              <span className="text-gray-600">|</span>
              <span>Gen-AI Developer</span>
              <span className="text-gray-600">|</span>
              <span>MERN Stack Developer</span>
            </h2>

            <p
              id="intro"
              className="text-gray-300 max-w-xl text-sm sm:text-base leading-relaxed"
            >
              Full Stack Engineer building scalable web applications powered by
              modern backend architecture and AI capabilities. Focused on
              developing intelligent systems that combine strong backend
              engineering with AI-driven features.
            </p>
            <p className='text-gray-300 max-w-xl text-sm sm:text-base leading-relaxed'>
              Experienced in designing robust APIs, event-driven systems, 
              and <span className='font-semibold'>Genrative-AI</span> applications. 
              Comfortable working across the MERN stack, distributed backend services,
              and AI integrations to translate complex data into practical, user-focused solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mt-4">

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition flex gap-4 self-center items-center"
                onClick={() =>
                  gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: "#projects-section", offsetY: 10 },
                    ease: "power2.inOut",
                  })
                }
              >
                <GoProjectSymlink />
                View Projects
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 border border-gray-700 rounded-lg hover:border-gray-400 transition"
                onClick={() =>
                  gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: "#contact-section", offsetY: 10 },
                    ease: "power2.inOut",
                  })
                }
              >
                Contact Me
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 border border-gray-700 rounded-lg hover:border-gray-400 transition flex gap-4 self-center items-center font-medium"
                href='/resume.pdf'
                target='_blank'
              >
                <Download/> Get My Resume
              </motion.a>

            </div>

            {/* Social Icons */}
            <div className='flex gap-4 mt-4'>
              {socials_list.map((social) => {
                return (
                  <motion.div
                    key={social.id}
                    whileHover={{ y: -3 }}
                    className={`flex hover:cursor-pointer ${social?.icon_color} bg-gray-900/80 p-4 rounded-lg transition`}
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='flex'
                    >
                      {/* <social.icon /> */}
                      {
                        
                        handle_icon(social.label)
              
                      }
                    </a>
                  </motion.div>
                )
              })}
            </div>

          </div>

          {/* Profile Section */}
          <div
            id="profile-container"
            className="flex justify-center md:justify-end order-1 md:order-2"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 flex items-center justify-center text-gray-400 relative overflow-hidden"
            >
              <Image
                src={'/profile-photo.png'}
                alt="Profile Photo"
                fill
                className='object-cover transition duration-300 hover:scale-105'
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection