import React from "react";
import MovieList from "./movieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);

  return (
    <div className="bg-black">
      <div className="-mt-52 relative pl-12 z-10">
      <MovieList
        title={"Now Playing movies"}
        movies={movies.nowPlayingMovies}
      />
      <MovieList
        title={"Top Rated"}
        movies={movies.topRatedMovies}
      />
      <MovieList
        title={"Popular"}
        movies={movies.popularMovies}
      />
      <MovieList
        title={"Upcoming"}
        movies={movies.upcomingMovies}
      />
    </div>
    </div>
  );
};

export default SecondaryContainer;
