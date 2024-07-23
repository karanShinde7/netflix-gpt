import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./videoTitle";
import VideoBackground from "./videoBackground";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);

  // early return -> if the movies are yet to store in redux
  if (!movies) return;

  // get one movie to show trailer in bg
  const heroMovie = movies[0];

  const { id, original_title, overview } = heroMovie;

  return (
    <div>
      <VideoTitle original_title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
