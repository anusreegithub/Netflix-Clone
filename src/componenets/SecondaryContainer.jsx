import { Image, Info, X } from 'lucide-react'
import React from 'react'

const SecondaryContainer = () => {
  return (
    <div>
       {/* Content Rows */}
      <section className="relative z-10 mt-[-100px] px-4 pb-12 md:px-12">
        {/* Trending Now */}
        <div className="mb-12">
          <h2 className="mb-2 text-xl font-bold text-white md:text-2xl">Trending Now</h2>
          <div className="relative">
            <div className="flex gap-2 overflow-x-auto pb-4 pt-2 scrollbar-hide">
              {[
                "Stranger Things",
                "The Witcher",
                "Money Heist",
                "Squid Game",
                "Bridgerton",
                "Dark",
                "The Queen's Gambit",
                "Ozark",
                "Narcos",
                "Breaking Bad",
              ].map((title, index) => (
                <div
                  key={`trending-${index}`}
                  className="relative flex-none transition-transform duration-300 hover:scale-110 hover:z-10"
                >
                  <div className="group relative h-[250px] w-[350px] cursor-pointer overflow-hidden rounded-md bg-gray-900">
                    <Image
                      src={`/placeholder.svg?height=150&width=250&text=${title}`}
                      alt={title}
                      width={350}
                      height={250}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:opacity-75"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="text-sm font-medium text-white">{title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Popular on Netflix */}
        <div className="mb-12">
          <h2 className="mb-2 text-xl font-bold text-white md:text-2xl">Popular on Netflix</h2>
          <div className="relative">
            <div className="flex gap-2 overflow-x-auto pb-4 pt-2 scrollbar-hide">
              {[
                "Wednesday",
                "You",
                "Peaky Blinders",
                "The Crown",
                "Stranger Things",
                "Black Mirror",
                "The Umbrella Academy",
                "Cobra Kai",
                "Lucifer",
                "Sex Education",
              ].map((title, index) => (
                <div
                  key={`popular-${index}`}
                  className="relative flex-none transition-transform duration-300 hover:scale-110 hover:z-10"
                >
                  <div className="group relative h-[150px] w-[250px] cursor-pointer overflow-hidden rounded-md bg-gray-900">
                    <Image
                      src={`/placeholder.svg?height=150&width=250&text=${title}`}
                      alt={title}
                      width={250}
                      height={150}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:opacity-75"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="text-sm font-medium text-white">{title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Continue Watching */}
        <div className="mb-12">
          <h2 className="mb-2 text-xl font-bold text-white md:text-2xl">Continue Watching for Profile 1</h2>
          <div className="relative">
            <div className="flex gap-2 overflow-x-auto pb-4 pt-2 scrollbar-hide">
              {[
                { title: "Stranger Things", progress: 75 },
                { title: "The Witcher", progress: 45 },
                { title: "Money Heist", progress: 90 },
                { title: "Squid Game", progress: 30 },
                { title: "Bridgerton", progress: 60 },
                { title: "Dark", progress: 20 },
                { title: "The Queen's Gambit", progress: 85 },
                { title: "Ozark", progress: 50 },
                { title: "Narcos", progress: 40 },
                { title: "Breaking Bad", progress: 95 },
              ].map((item, index) => (
                <div
                  key={`continue-${index}`}
                  className="relative flex-none transition-transform duration-300 hover:scale-110 hover:z-10"
                >
                  <div className="group relative h-[150px] w-[250px] cursor-pointer overflow-hidden rounded-md bg-gray-900">
                    <Image
                      src={`/placeholder.svg?height=150&width=250&text=${item.title}`}
                      alt={item.title}
                      width={250}
                      height={150}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:opacity-75"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="text-sm font-medium text-white">{item.title}</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0">
                      <div className="h-1 w-full bg-gray-600">
                        <div className="h-full bg-red-600" style={{ width: `${item.progress}%` }} />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 flex opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <button className="mr-1 rounded-full bg-black/60 p-1 text-white hover:bg-black/80">
                        <Info className="h-4 w-4" />
                      </button>
                      <button className="rounded-full bg-black/60 p-1 text-white hover:bg-black/80">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* New Releases */}
        <div className="mb-12">
          <h2 className="mb-2 text-xl font-bold text-white md:text-2xl">New Releases</h2>
          <div className="relative">
            <div className="flex gap-2 overflow-x-auto pb-4 pt-2 scrollbar-hide">
              {[
                "The Sandman",
                "Dahmer",
                "The Midnight Club",
                "The Watcher",
                "From Scratch",
                "Cabinet of Curiosities",
                "All Quiet on the Western Front",
                "The School for Good and Evil",
                "The Good Nurse",
                "Enola Holmes 2",
              ].map((title, index) => (
                <div
                  key={`new-${index}`}
                  className="relative flex-none transition-transform duration-300 hover:scale-110 hover:z-10"
                >
                  <div className="group relative h-[150px] w-[250px] cursor-pointer overflow-hidden rounded-md bg-gray-900">
                    <div className="absolute top-0 right-0 z-10 bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      NEW
                    </div>
                    <Image
                      src={`/placeholder.svg?height=150&width=250&text=${title}`}
                      alt={title}
                      width={250}
                      height={150}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:opacity-75"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="text-sm font-medium text-white">{title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top 10 TV Shows */}
        <div className="mb-12">
          <h2 className="mb-2 text-xl font-bold text-white md:text-2xl">Top 10 TV Shows in the U.S. Today</h2>
          <div className="relative">
            <div className="flex gap-8 overflow-x-auto pb-4 pt-2 scrollbar-hide">
              {[
                "Stranger Things",
                "Wednesday",
                "The Witcher",
                "Squid Game",
                "Money Heist",
                "Bridgerton",
                "The Queen's Gambit",
                "Ozark",
                "Dark",
                "Narcos",
              ].map((title, index) => (
                <div
                  key={`top10-${index}`}
                  className="relative flex-none pl-12 transition-transform duration-300 hover:scale-110 hover:z-10"
                >
                  <div className="absolute -left-4 bottom-0 top-0 flex items-center">
                    <span
                      className="text-[130px] font-bold text-black"
                      style={{
                        WebkitTextStroke: "2px white",
                        textShadow: "0 0 10px rgba(0,0,0,0.5)",
                      }}
                    >
                      {index + 1}
                    </span>
                  </div>
                  <div className="group relative h-[200px] w-[150px] cursor-pointer overflow-hidden rounded-md bg-gray-900">
                    <Image
                      src={`/placeholder.svg?height=200&width=150&text=${title}`}
                      alt={title}
                      width={150}
                      height={200}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:opacity-75"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="text-sm font-medium text-white">{title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SecondaryContainer