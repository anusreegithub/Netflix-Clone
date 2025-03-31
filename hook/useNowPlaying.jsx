import { useEffect, useState } from "react";
import { Apioptions } from "../src/utils/constants";

const useNowPlaying = () => {
  const [movies, setMovies] = useState([]);

  const getNowPlayingMovie = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        Apioptions
      );
      const json = await data.json();
      setMovies(json.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getNowPlayingMovie();
  }, []);

  return movies;
};

export default useNowPlaying;
