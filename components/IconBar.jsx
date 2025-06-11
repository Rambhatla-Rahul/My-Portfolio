'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from 'react-icons/si';
import { IoDocumentText } from 'react-icons/io5';

gsap.registerPlugin(ScrollToPlugin);

const IconBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const iconRef = useRef(null);
  const isShrunk = useRef(false);
  const hasShrunkOnce = useRef(false);

  useEffect(() => {
    const el = iconRef.current;
    gsap.set(el, { xPercent: -50 });

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
        y: 100,
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
      } else if (
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
    <>
      
      {isModalOpen && (
        <div className="fixed bottom-[110px] left-1/2 -translate-x-1/2 w-[300px] h-[401px] 
                        bg-white/30 backdrop-blur-lg border border-white/30 rounded-2xl 
                        shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] z-[60] overflow-hidden p-4">
        <iframe
            src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
            width="100%"
            height="100%"
            className="rounded object-center"
        ></iframe>
        </div>
        )
       }

      <div
        ref={iconRef}
        className="icon-container fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-md border border-white/40 shadow-lg rounded-xl flex flex-row w-[300px] items-center justify-center gap-14 p-4 font-light text-[20px] text-black z-50 overflow-hidden"
      >
        <div className='flex icon-icon hover:cursor-pointer text-blue-500'>
          <a
            href="https://www.linkedin.com/in/rahul-rambhatla-a38049310"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className='flex icon-icon hover:cursor-pointer text-red-900'>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rrambhat@gitam.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGmail />
          </a>
        </div>

        <div
          className="flex icon-icon hover:cursor-pointer relative text-green-500"
          onMouseEnter={() => setIsModalOpen(true)}
          onMouseLeave={() => setIsModalOpen(false)}
        >
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <IoDocumentText />
          </a>
        </div>
      </div>
    </>
  );
};

export default IconBar;
