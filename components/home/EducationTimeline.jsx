'use client';

import { useEffect, useRef } from "react";
import { Timeline } from "primereact/timeline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const educationTimeline = [
  {
    title: '10th Grade – CBSE Board',
    institution: 'New Era Senior Secondary School',
    duration: '2019 – 2020',
    description: 'Completed 10th standard, scoring 86.6%',
  },
  {
    title: '12th Grade – Intermediate CBSE',
    institution: 'Shannen Kidz CBSE',
    duration: '2020 – 2022',
    description: 'Specialized in Mathematics, Physics, and Chemistry. Scored 73.2%',
  },
  {
    title: 'Bachelor of Technology – CSE',
    institution: 'Gandhi Institute of Technology and Management',
    duration: '2022 August – 2026 (On Going)',
    description: 'Pursuing degree in Computer Science and Engineering. CGPA: 8.7',
  },
  {
    title: 'Achievements',
    institution: '',
    duration: '',
    description: `2nd Place - Citizen-Hack Hackathon (2024)
Built AI-based prescription summarizer`,
  },
];

export default function EducationTimeline() {

  const cardsRef = useRef([]);
  const dotsRef = useRef([]);
  const lineRef = useRef(null);
  const progressRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      cardsRef.current.forEach((card, i) => {

        const dir = i % 2 === 0 ? -80 : 80;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: dir,
            scale: 0.96
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play reverse play reverse"
            }
          }
        );

        gsap.fromTo(
          dotsRef.current[i],
          { scale: 0 },
          {
            scale: 1,
            duration: 0.3,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play reverse play reverse"
            }
          }
        );

      });

      // timeline line fill
      gsap.fromTo(
        lineRef.current,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom bottom",
            scrub: true
          }
        }
      );

      // progress bar
      gsap.to(progressRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true
        }
      });

    });

    return () => ctx.revert();

  }, []);

  const marker = (_, i) => (
    <span
      ref={(el) => dotsRef.current[i] = el}
      className="w-4 h-4 bg-white rounded-full border border-black"
    />
  );

  const content = (item, i) => (
    <div
      ref={(el) => cardsRef.current[i] = el}
      className="
      timeline-card
      bg-white/10
      backdrop-blur-md
      border border-white/20
      p-6
      rounded-xl
      transition
      duration-300
      hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]
      hover:-translate-y-1
      "
    >

      <h3 className="text-xl font-semibold mb-1">
        {item.title}
      </h3>

      <p className="text-sm text-gray-400 mb-1">
        {item.institution}
      </p>

      <p className="text-sm text-white mb-2">
        {item.duration}
      </p>

      <p className="text-gray-200 whitespace-pre-line">
        {item.description}
      </p>

    </div>
  );

  return (
    <section className="py-24 bg-black text-white">


      <h2 className="heading mb-20">
        Education & Achievements
      </h2>

      <div
        ref={containerRef}
        className="relative max-w-4xl mx-auto px-6"
      >

        {/* animated timeline line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] bg-gray-700 h-full">
          <div
            ref={lineRef}
            className="absolute left-0 top-0 w-[2px] bg-white"
          />
        </div>

        <Timeline
          value={educationTimeline}
          align="alternate"
          content={content}
          marker={marker}
        />

      </div>

    </section>
  );
}