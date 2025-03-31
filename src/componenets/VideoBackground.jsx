import { Info, Play } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Apioptions } from "../utils/constants";

const VideoBackground = ({ movieId, title, overview }) => {
  const [trailerId, setTrailerId] = useState(null);
  const getMovieVideo = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;

    try {
      const response = await fetch(url, Apioptions);
      const json = await response.json();
      console.log(json);
      const filterData = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData.length ? filterData[0] : json.results[0];
      setTrailerId(trailer.key);
    } catch (error) {
      console.error("Error fetching movie video:", error);
    }
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
  return (
     <section className="relative h-[56.25vw] min-h-[500px] max-h-[800px] w-full overflow-hidden">
      {/* YouTube Trailer */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          className="w-full h-full absolute inset-0 object-cover"
          src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&loop=1&playlist=${trailerId}&controls=0&showinfo=0&rel=0`}
          title="Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Gradient Overlay - Netflix style */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end px-4 md:px-12 lg:px-24 pb-[10%]">
        <div className="max-w-xl">
          {/* Title logo - in real Netflix this would be a custom image */}
          <h1 className="mb-5 text-5xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">{title}</h1>

      

          <p className="mb-6 text-lg font-medium leading-relaxed text-white md:text-xl">{overview}</p>

       
          <div className="flex gap-3">
            <button className="inline-flex items-center gap-2 rounded bg-white px-6 py-3 text-base font-bold text-black transition hover:bg-white/90 md:text-lg">
              <Play className="h-6 w-6 fill-black" />
              <span>Play</span>
            </button>
            <button className="inline-flex items-center gap-2 rounded bg-gray-600/80 px-6 py-3 text-base font-bold text-white transition hover:bg-gray-600/90 md:text-lg">
              <Info className="h-6 w-6" />
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default VideoBackground;
