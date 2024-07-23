import React from "react";
import Header from "../header/header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";

const Browse = () => {

  // API call with custom hook
  useNowPlayingMovies();

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
