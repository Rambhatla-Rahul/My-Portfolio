"use client"

import { PersonStanding } from 'lucide-react'
import Link from 'next/link'
import React, { useRef, useState } from 'react'

const FunButton = () => {

  const [showToolTip, setShowToolTip] = useState(false)
  const tooltipRef = useRef(null)

  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0)

  const handleMouseMove = (e) => {

    if (isTouchDevice) return

    const x = e.clientX - 155
    const y = e.clientY - 4

    requestAnimationFrame(() => {
      if (tooltipRef.current) {
        tooltipRef.current.style.transform =
          `translate(${x}px, ${y}px)`
      }
    })

  }

  const handleClick = () => {

    if (isTouchDevice) {
      setShowToolTip(prev => !prev)
    }

  }

  return (
    <div className='fixed bottom-6 right-6'>

      <Link
        className="
          group
          bg-gray-800/30 backdrop-blur-md
          border border-white/15
          shadow-[0_4px_20px_rgba(0,0,0,0.4)]
          rounded-xl
          flex items-center justify-center
          px-4 py-4 text-white z-50 cursor-pointer
          transition-all duration-300 ease-out
          hover:bg-gray-800/50
          hover:border-white/30
          hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
          hover:-translate-y-[2px]
        "
        onMouseEnter={() => !isTouchDevice && setShowToolTip(true)}
        onMouseLeave={() => !isTouchDevice && setShowToolTip(false)}
        onMouseMove={handleMouseMove}
        href={`/fun`}
        
      >
        <PersonStanding className="transition-transform duration-300 group-hover:scale-110"/>
      </Link>

      {showToolTip && (
        <div
          ref={tooltipRef}
          className={`
            ${isTouchDevice ? "bottom-16 right-0" : "top-0 left-0"}
            fixed
            px-3 py-2 text-sm
            bg-black/90 text-white
            border border-white/20
            rounded-md
            pointer-events-none
            whitespace-nowrap
            will-change-transform
          `}
        >
          Go to Fun Mode.
        </div>
      )}

    </div>
  )
}

export default FunButton