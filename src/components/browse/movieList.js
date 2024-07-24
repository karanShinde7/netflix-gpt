import React from "react";
import MovieCard from "./movieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4 text-white">
      <h1 className="text-xl font-medium pt-4 pb-2">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => {
            return <MovieCard posterPath={movie?.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
