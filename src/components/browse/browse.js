import React from "react";
import Header from "../header/header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import usePopularMovies from "../../hooks/usePopularMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import MainContainer from "./mainContainer";
import SecondaryContainer from "./secondaryContainer";

const Browse = () => {
  // API call with custom hook
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
