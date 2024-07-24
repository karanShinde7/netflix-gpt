import React from "react";
import MovieCard from "../movieCard";
import { useDispatch, useSelector } from "react-redux";
import { clearSearchedMovies } from "../../../redux/slice/gptSearchSlice";

const GptMovieSuggestion = () => {
  const gptSearchMovies = useSelector((state) => state.gptSearch.gptMovieList);
  const dispatch = useDispatch();

  const clearSearchResult = () => {
    dispatch(clearSearchedMovies());
  };

  if (gptSearchMovies?.length < 1) {
    return (
      <div className="flex justify-center w-1/2 m-auto">
        <label className="font-bold text-white">No Movies</label>
      </div>
    );
  }

  return (
    <>
      {gptSearchMovies?.length && (
        <div className="flex justify-between w-1/2 m-auto">
          <label className="font-bold text-white">Search Results</label>
          <label
            className="font-bold text-white hover:cursor-pointer"
            onClick={clearSearchResult}
          >
            Clear
          </label>
        </div>
      )}
      <div className="mt-3 grid grid-cols-4 gap-2 rounded-lg mx-auto w-[50%]">
        {gptSearchMovies.map((movie) => {
          return (
            <MovieCard
              key={movie.results[0].id}
              posterPath={movie.results[0]?.poster_path}
            />
          );
        })}
      </div>
    </>
  );
};

export default GptMovieSuggestion;
