"use client"

import { animeList } from "@/constants/AnimeList"
import AnimeCard from "./AnimeCard"



const AnimeExplore = () => {
  return (
    <section className="relative">

      <div className="
        bg-black/90 backdrop-blur-3xl
        text-white
        rounded-t-[2rem]
        -mt-42
        pt-16 px-6 pb-20
        min-h-screen
      ">

        <div className="max-w-6xl mx-auto flex flex-col gap-10">

          {/* Heading */}
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-semibold text-white/90">
              Explore Anime
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Check out some of the anime series that I have watched and liked
            </p>
          </div>


          {/* Grid */}
          <div className="
            grid
            grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            gap-6
          ">

            {
                animeList.map((anime,i)=>{
                    return(
                        <AnimeCard anime={anime} key={anime.title}/>
                    )
                })
            }

          </div>

        </div>

      </div>

    </section>
  )
}

export default AnimeExplore