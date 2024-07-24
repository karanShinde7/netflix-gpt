import React, { useRef } from "react";
import { langaugeString } from "../../../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { openAIConfig } from "../../../utils/openAiConfig";
import { GET_MOVIES_URL } from "../../../utils/urls";
import { GET_API_OPTION } from "../../../utils/apiConstants";
import GptMovieSuggestion from "./gptMovieSuggestion";
import { addSearchedMovies } from "../../../redux/slice/gptSearchSlice";

const GptSearchBar = () => {
  const language = useSelector((state) => state.config.language);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieFromTMDB = async (movie) => {
    const data = await fetch(
      `${GET_MOVIES_URL}query=${movie}&include_adult=false&language=en-US&page=1`,
      GET_API_OPTION
    );
    const responseJson = await data.json();
    return responseJson; // it will return a Priomise not the result
  };

  const handleGptSearch = async () => {
    // Open AI API call
    // elaborate like this so we can get the exact result
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me name of 5 movies, comma separated like the example result given ahead. Examples: 3 Idiots, Don, Radhe, Lagaan, Golmaal";
    // const gptResult = await openAIConfig.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo", // use this only for free
    // });
    let gptMovies = "";
    // if(gptResult){
    //   console.log("gptResult", gptResult);
    //   gptMovies = [];
    // } else {
    gptMovies = "3 Idiots, Dhamaal, hera pheri, Ready, Partner, Andaz Apna Apna, Golmaal 3".split(", "); // gives it in array
    // }

    const promiseArray = gptMovies.map((movie) => searchMovieFromTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addSearchedMovies(tmdbResults));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-[50%] grid grid-cols-12 bg-black"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-2 m-2 col-span-9"
          placeholder={`${langaugeString[language].WhatDoYouWantWatch}`}
        />
        <button
          className="py-1 px-2 m-2 bg-red-700 col-span-3 text-white rounded-lg"
          onClick={handleGptSearch}
        >
          {langaugeString[language].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
