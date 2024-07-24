import React from "react";
import { GET_TMDB_IMAGE_PATH } from "../../utils/urls";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 h-40 p-1">
      <img
        alt="c"
        className="h-[100%] w-[100%] aspect-auto"
        src={`${GET_TMDB_IMAGE_PATH}${posterPath}`}
      />
    </div>
  );
};

export default MovieCard;
