import React from "react";
import { useSelector } from "react-redux";
import useTrailerVideo from "../../hooks/useTrailerVideo";

const VideoBackground = ({ id }) => {
  useTrailerVideo(id);

  const trailerVideo = useSelector((state) => state.movies?.trailerVideo);
  // add following in URL to autoplay youtube video ?&autoplay=1&mute=1
  return (
    <div>
      {trailerVideo && (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/WBAW8sybWp4?si=${trailerVideo?.key}?&autoplay=1&mute=1`}
          title="YouTube video player"
          au
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
