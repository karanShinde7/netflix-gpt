import React from "react";
import GptMovieSuggestion from "./gptMovieSuggestion";
import GptSearchBar from "./gptSearchBar";
import { NETFLIX_BG_IMAGE_URL } from "../../../utils/urls";

const GptContainer = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={`${NETFLIX_BG_IMAGE_URL}`} className="opacity-60" alt="background-image" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptContainer;
