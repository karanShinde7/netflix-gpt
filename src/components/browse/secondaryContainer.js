import React from "react";
import MovieList from "./movieList";
import { useSelector } from "react-redux";
import { langaugeString } from "../../utils/languageConstants";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);
  const language = useSelector((state) => state.config.language);
  
  return (
    <div className="bg-black">
      <div className="-mt-52 relative pl-12 z-10">
        <MovieList
          title={langaugeString[language].NowPlayingMovies}
          movies={movies.nowPlayingMovies}
        />
        <MovieList
          title={langaugeString[language].TopRated}
          movies={movies.topRatedMovies}
        />
        <MovieList
          title={langaugeString[language].Popular}
          movies={movies.popularMovies}
        />
        <MovieList
          title={langaugeString[language].Upcoming}
          movies={movies.upcomingMovies}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
