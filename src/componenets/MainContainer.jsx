import React from "react";
import useNowPlaying from "../../hook/useNowPlaying";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useNowPlaying();

  if (!movies || movies.length === 0) {
    return;
  }

  const randomMovie = movies[Math.floor(Math.random() * movies.length)];
  console.log(randomMovie)
  const { original_title, overview, id } = randomMovie;

  return (
    <div>
      <VideoBackground
        title={original_title}
        overview={overview}
        movieId={id}
      />
    </div>
  );
};

export default MainContainer;
