import AnimeExplore from '@/components/fun/AnimeExplore'
import Hero from '@/components/fun/Hero'
import React from 'react'

const FunCentre = () => {
  return (
    <div className="bg-[#E2E2E2] w-full">

      {/* HERO SECTION */}
      <Hero/>
      {/* CONTENT PANEL */}
      <AnimeExplore/>

    </div>
  )
}

export default FunCentre