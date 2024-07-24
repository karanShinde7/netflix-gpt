import { createSlice } from "@reduxjs/toolkit";

const GptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showGptSearch: false,
    gptMovieList: [],
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addSearchedMovies: (state, action) => {
      state.gptMovieList = action.payload;
    },
    clearSearchedMovies: (state, action) => {
      state.gptMovieList = [];
    },
  },
});

export const { toggleGptSearchView, addSearchedMovies, clearSearchedMovies } =
  GptSearchSlice.actions;

export default GptSearchSlice.reducer;
