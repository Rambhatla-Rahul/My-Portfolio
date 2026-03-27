'use client';
import React, { useEffect, useRef } from 'react';
import { SlHome } from "react-icons/sl";
import { GrAchievement } from "react-icons/gr";
import { GoProjectSymlink } from "react-icons/go";
import { Contact, Laptop, Phone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {

  const navbarRef = useRef(null);
  const isShrunk = useRef(false);
  const hasShrunkOnce = useRef(false);

  const scrollToSection = (id) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${id}`, offsetY: 10 },
      ease: 'power2.inOut',
    });
  };

  useEffect(() => {

    const el = navbarRef.current;
    const icons = el.querySelectorAll(".navbar-icon");

    gsap.set(el, { xPercent: -50 });
    gsap.set(icons, { opacity: 1 });

    const shrinkTL = gsap.timeline({
      paused: true,
      onStart: () => {
        gsap.to(icons, { opacity: 0, duration: 0.1 });
      },
      onComplete: () => {
        hasShrunkOnce.current = true;
      },
    });

    shrinkTL
      .to(el, {
        scale: 0.9,
        duration: 0.2,
        ease: "power2.out"
      })
      .to(el, {
        width: 70,
        height: 70,
        borderRadius: "50%",
        duration: 0.4,
        ease: "power2.inOut"
      })
      .to(el, {
        y: -100,
        duration: 0.4,
        ease: "power2.inOut"
      });

    const expandTL = gsap.timeline({ paused: true });

    expandTL
      .to(el, {
        y: 0,
        duration: 0.4,
        ease: "power2.inOut"
      })
      .to(el, {
        width: "auto",
        height: "auto",
        borderRadius: "1rem",
        scale: 1,
        duration: 0.4,
        ease: "power2.inOut"
      })
      .to(
        icons,
        {
          opacity: 1,
          duration: 0.2
        },
        "-=0.05" // appears when animation is ~95% done
      );

    let lastScrollY = window.scrollY;

    const handleScroll = () => {

      const currentScroll = window.scrollY;

      if (
        currentScroll > lastScrollY + 5 &&
        !isShrunk.current &&
        !shrinkTL.isActive()
      ) {
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

  const navItems = [
    { icon: <SlHome />, id: "hero-section" },
    { icon: <GoProjectSymlink />, id: "projects-section" },
    { icon: <Laptop />, id: "skills-section" },
    { icon: <GrAchievement />, id: "education-section" },
    {icon:<Phone size={20}/>,id:"contact-section"}
  ];

  return (
    <div
      ref={navbarRef}
      className="
      fixed top-6 left-1/2
      -translate-x-1/2
      bg-gray-800/30
      backdrop-blur-md
      border border-white/20
      shadow-lg
      rounded-xl
      flex items-center
      justify-center
      px-6 py-3
      gap-8
      text-white
      z-50
      w-fit
      max-w-[90vw]
      overflow-hidden
      "
    >

      {navItems.map((item, index) => (
        <div
          key={index}
          onClick={() => scrollToSection(item.id)}
          className="
          navbar-icon
          flex items-center justify-center
          text-[20px]
          hover:cursor-pointer
          hover:scale-110
          transition-transform
          "
        >
          {item.icon}
        </div>
      ))}

    </div>
  );
};

export default Navbar;