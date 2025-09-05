import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if(!movies) return null;
  return (
    <div className="p-6">
      <h1 className="text-4xl py-6 text-white">{title}</h1>
      <div className="flex w-full overflow-y-hidden overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
