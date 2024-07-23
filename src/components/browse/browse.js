import React, { useEffect } from "react";
import Header from "../header/header";
import { GET_NOW_PLAYING_MOVIES_URL } from "../../utils/urls";
import { GET_API_OPTION } from "../../utils/apiConstants";

const Browse = () => {

  useEffect(() => {
    getNowPlayingMovies();
  }, [])

  const getNowPlayingMovies = async () => {
    const moviesData = await fetch(GET_NOW_PLAYING_MOVIES_URL, GET_API_OPTION);
    const jsonResponse = await moviesData.json();
    console.log("Response: ", jsonResponse);
  }

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
