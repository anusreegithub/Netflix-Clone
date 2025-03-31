import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movies, title, titleColor, topRated }) => {
  return (
    <div>
      <section className="relative z-10 mt-[-100px] px-4 pb-12 md:px-12">
        <h2 className={`mb-4 text-xl font-bold md:text-2xl ${titleColor}`}>
          {title}
        </h2>
        <div
          className="relative overflow-x-scroll  whitespace-nowrap"
          style={{
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="flex gap-4">
            {movies.map((movie, index) => (
              <div
                key={movie.id || `top10-${index}`}
                className="relative flex-none  transition-transform duration-300 hover:scale-110 hover:z-10"
              >
                {topRated === true && (
                  <div className="absolute pl-1 bottom-0  mt-5 flex items-center  z-50">
                    <span
                      className="text-[90px] font-bold text-black"
                      style={{
                        WebkitTextStroke: "2px white",
                        textShadow: "0 0 10px rgba(0,0,0,0.5)",
                      }}
                    >
                      {index + 1}
                    </span>
                  </div>
                )}
                <div className="group relative h-[240px] w-[190px] cursor-pointer overflow-hidden rounded-md bg-gray-900">
                  <img
                    src={IMG_CDN_URL + movie.poster_path}
                    alt={movie.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-sm font-medium text-white">
                      {movie.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieCard;
