import React, { useEffect, useState } from 'react'
import { Apioptions } from '../src/utils/constants';

const useUpcoming = () => {
 const [movies, setMovies] = useState([]);
 
   const getNowPopularMovie = async () => {
     try {
       const data = await fetch(
         "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
         Apioptions
       );
       const json = await data.json();
       setMovies(json.results);
     } catch (error) {
       console.error("Error fetching movies:", error);
     }
   };
 
   useEffect(() => {
     getNowPopularMovie();
   }, []);
 
   return movies;
}

export default useUpcoming