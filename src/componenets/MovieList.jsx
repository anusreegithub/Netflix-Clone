import React from "react";
import MovieCard from "./MovieCard";
import useNowPlaying from "../../hook/useNowPlaying";
import useNowPopular from "../../hook/useNowPopular";
import useUpcoming from "../../hook/useUpcoming";
import useToprated from "../../hook/useToprated";

const MovieList = () => {
  const movies = useNowPlaying();
  const popularMovie = useNowPopular();
  const upComingMovies = useUpcoming();
  const topRatedMovies = useToprated()
  if (movies === null) {
    return;
  }
  return (
    <div className="space-y-20">
      <MovieCard title={"Trending Now"} movies={movies} titleColor="text-white" topRated={false}/>
      <MovieCard title={"Top Rated Movies"} movies={topRatedMovies} titleColor="text-black" topRated={true}/>
      <MovieCard title={"Popular on Netflix"} movies={popularMovie} titleColor="text-black" topRated={false}/>
      <MovieCard title={"Upcoming Movies"} movies={upComingMovies} titleColor="text-black" topRated={false}/>

    </div>
  );
};

export default MovieList;
