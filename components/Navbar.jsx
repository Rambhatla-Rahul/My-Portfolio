'use client';
import React, { useEffect, useRef } from 'react';
import { SlHome } from "react-icons/sl";
import { GrAchievement } from "react-icons/gr";
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { GoProjectSymlink } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";


gsap.registerPlugin(ScrollToPlugin);


const Navbar = () => {
  const navbarRef = useRef(null);
  const isShrunk = useRef(false);
  const hasShrunkOnce = useRef(false); 
  const scrollToSection = (id) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${id}`, offsetY: 80 },
      ease: 'power2.inOut',
    });
  };
  useEffect(() => {
    const el = navbarRef.current;

    gsap.set(el, {
      xPercent: -50,
    });

    
    const shrinkTL = gsap.timeline({
      paused: true,
      onComplete: () => {
        hasShrunkOnce.current = true;
      },
    });

    shrinkTL
      .to(el, {
        width: 70,
        height: 70,
        borderRadius: '1rem',
        ease: 'power2.inOut',
        duration: 0.4,
      })
      .to(
        el,
        {
          borderRadius: '50%',
          ease: 'power2.inOut',
          duration: 0.1,
        },
        '-=0.2'
      )
      .to(el, {
        y: -100,
        ease: 'power2.inOut',
        duration: 0.4,
      });

    
    const expandTL = gsap.timeline({ paused: true });
    expandTL
      .to(el, {
        y: 0,
        ease: 'power2.inOut',
        duration: 0.4,
      })
      .to(
        el,
        {
          width: 300,
          height: 'auto',
          borderRadius: '1rem',
          ease: 'power2.inOut',
          duration: 0.4,
        },
        '-=0.2'
      );

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      
      if (currentScroll > lastScrollY + 5 && !isShrunk.current && !shrinkTL.isActive()) {
        shrinkTL.restart();
        isShrunk.current = true;
        hasShrunkOnce.current = false; 
      }

      
      else if (
        currentScroll < lastScrollY - 5 &&
        isShrunk.current &&
        hasShrunkOnce.current &&
        !expandTL.isActive()
      ) {
        expandTL.restart();
        isShrunk.current = false;
        hasShrunkOnce.current = false; 
      }

      lastScrollY = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={navbarRef}
      className="navbar-container fixed top-6 left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-md border border-white/40 shadow-lg rounded-xl flex flex-row w-[300px] items-center justify-center gap-14 p-4 font-light text-[20px] text-black z-50 overflow-hidden"
    >
      <div className='flex navbar-icon hover:cursor-pointer' onClick={()=>{scrollToSection('hero-section')}}>
        <SlHome />
      </div>
      <div className='flex navbar-icon hover:cursor-pointer' onClick={()=>{scrollToSection('projects-section')}}>
        <GoProjectSymlink />
      </div>
      <div className='flex navbar-icon hover:cursor-pointer' onClick={()=>{scrollToSection('education-section')}}>
        <GrAchievement/>
      </div>
    </div>
  );
};

export default Navbar;
