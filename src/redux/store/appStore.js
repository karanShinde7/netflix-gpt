import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import movieReducer from "../slice/movieSlice";
import gptSearchReducer from "../slice/gptSearchSlice";
import configSliceReducer from "../slice/configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gptSearch: gptSearchReducer,
    config: configSliceReducer
  },
});

export default appStore;
