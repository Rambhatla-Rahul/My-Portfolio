'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';

const ExpandButton = ({ icon: Icon, text, textColor}) => {
  const containerRef = useRef(null);
  const iconRef = useRef(null);
  const textRef = useRef(null);
  let timeline = useRef(null);

  const handleMouseEnter = () => {
    if (timeline.current) timeline.current.kill();

    timeline.current = gsap.timeline();
    timeline.current
      .to(containerRef.current, {
        width: 200,
        duration: 0.3,
        ease: 'power2.out',
        borderRadius: '1rem',
      })
      .to(
        iconRef.current,
        {
          x: -10,
          duration: 0.3,
          ease: 'power2.out',
        },
        0
      )
      .set(textRef.current, { display: 'block' })
      .to(
        textRef.current,
        {
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
        },
        '-=0.1'
      );
  };

  const handleMouseLeave = () => {
    if (timeline.current) timeline.current.kill();

    timeline.current = gsap.timeline();
    timeline.current
      .to(textRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in',
      })
      .set(textRef.current, { display: 'none' })
      .to(
        iconRef.current,
        {
          x: 0,
          duration: 0.2,
          ease: 'power2.inOut',
        },
        0
      )
      .to(containerRef.current, {
        width: 60,
        duration: 0.3,
        ease: 'power2.inOut',
        borderRadius: '1rem',
      }).to(containerRef.current, {
        borderRadius:'1rem',
        duration: 0.3,
        ease: 'power2.inOut',
      });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex items-center bg-black/60 text-white backdrop-blur-lg cursor-pointer overflow-hidden px-4 py-3 rounded-2xl relative"
      style={{
        width: 60,
        height: 60,
        borderRadius: '1rem',
      }}
    >
        <div
            ref={iconRef}
            className={`text-xl rounded-2xl flex items-center justify-center w-full h-full ${textColor}`}
        >
            <Icon />
        </div>
        <div
            ref={textRef}
            className="ml-2 text-sm whitespace-nowrap"
            style={{ opacity: 0, display: 'none' }}
        >
            {text}
        </div>
      
    </div>
  );
};

export default ExpandButton;
