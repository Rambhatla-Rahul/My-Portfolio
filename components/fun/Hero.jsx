"use client"

import React, { useEffect, useRef, useState } from 'react'

const videos = ["/Shadow.mp4", "/jjk_hollow_purple.mp4"]

const Hero = () => {

  const videoRef1 = useRef(null)
  const videoRef2 = useRef(null)

  const [active, setActive] = useState(0)
  const currentIndex = useRef(0)

  useEffect(() => {

    const v1 = videoRef1.current
    const v2 = videoRef2.current

    if (videos[1]) {
        v2.src = videos[1]
        v2.load()
    }

    const switchVideo = (videoEl, src, setActiveIndex) => {
        videoEl.src = src
        videoEl.load()

        const playWhenReady = () => {
        videoEl.play().catch(() => {})
        videoEl.removeEventListener("canplay", playWhenReady)
        }

        videoEl.addEventListener("canplay", playWhenReady)
        setActiveIndex()
    }

    const handleEnd = () => {

        const nextIndex = (currentIndex.current + 1) % videos.length
        currentIndex.current = nextIndex

        if (active === 0) {
        switchVideo(v2, videos[nextIndex], () => setActive(1))
        } else {
        switchVideo(v1, videos[nextIndex], () => setActive(0))
        }

    }

    v1.addEventListener("ended", handleEnd)
    v2.addEventListener("ended", handleEnd)

    return () => {
        v1.removeEventListener("ended", handleEnd)
        v2.removeEventListener("ended", handleEnd)
    }

    }, [active])

  return (
    <section className="relative h-screen w-full overflow-hidden">

        {/* VIDEO 1 */}
        <video
          ref={videoRef1}
          className={`fixed inset-0 w-full h-full object-cover ${active === 0 ? "opacity-100" : "opacity-0"}`}
          src={videos[0]}
          autoPlay
          muted
          playsInline
          preload="auto"
        />

        {/* VIDEO 2 */}
        <video
          ref={videoRef2}
          className={`fixed inset-0 w-full h-full object-cover ${active === 1 ? "opacity-100" : "opacity-0"}`}
          muted
          playsInline
          preload="auto"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6 max-w-3xl mx-auto">

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
            Welcome to Fun Centre
          </h1>

          <p className="text-secondary leading-relaxed text-sm md:text-base">
            A place to know more about e personally what i to do in my free time,
            explore about things i have seen or experienced.
            Get to know more about me.
          </p>

        </div>

    </section>
  )
}

export default Hero