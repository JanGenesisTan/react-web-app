import React, { useState, useEffect } from "react";
import "./PopularList.css";
import MovieCard from "./MovieCard";

const PopularList = () => {
  //state variable
  // do this after fetching the data
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // this is a custome function that will get the movies from TMDB

    fetchMovies();
  });

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=a80a84160ad2ce82f6cdb92ae79dde90"
    );

    const data = await response.json();

    console.log(data);

    setMovies(data.results);
  };

  return (
    <div className="popular_header">
      <h2>Popular Movies</h2>
    <div className="popular_grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
    </div>
  );
};

export default PopularList;
