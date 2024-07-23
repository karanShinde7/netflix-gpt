import React from "react";
import Header from "../header/header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "./mainContainer";
import SecondaryContainer from "./secondaryContainer";

const Browse = () => {

  // API call with custom hook
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
