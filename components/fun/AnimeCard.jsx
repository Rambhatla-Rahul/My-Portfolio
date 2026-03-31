import React from 'react'

const AnimeCard = ({anime}) => {
  return (

        <div
        className="
            group
            bg-white/5
            rounded-xl
            overflow-hidden
            transition-all duration-300
            hover:border-white/30
            hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
            hover:-translate-y-1
        "
        >

        {/* Image */}
        <div className="relative w-full h-48 overflow-hidden">
            <img
            src={anime.image}
            alt={anime.title}
            className="
                w-full h-full object-cover
                transition-transform duration-500
                group-hover:scale-105
            "
            />

            {/* subtle overlay */}
            <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col gap-2">

            <h3 className="text-lg font-semibold text-white/90">
            {anime.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
            {anime.description}
            </p>

        </div>

        </div>

  )
}

export default AnimeCard
