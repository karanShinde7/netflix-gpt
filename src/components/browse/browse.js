import React from "react";
import Header from "../header/header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import usePopularMovies from "../../hooks/usePopularMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import MainContainer from "./mainContainer";
import SecondaryContainer from "./secondaryContainer";
import GptContainer from "./gpt/gptContainer";
import { useSelector } from "react-redux";

const Browse = () => {
  const showSearchView = useSelector((state) => state.gptSearch.showGptSearch);

  // API call with custom hook
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showSearchView ? (
        <GptContainer />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
