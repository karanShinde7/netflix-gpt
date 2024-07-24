import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_NOW_PLAYING_MOVIES_URL } from "../utils/urls";
import { GET_API_OPTION } from "../utils/apiConstants";
import { addNowPlayingMovies } from "../redux/slice/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlaying = useSelector((state) => state.movies?.nowPlayingMovies)

  useEffect(() => {
    if(!nowPlaying) getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const moviesData = await fetch(GET_NOW_PLAYING_MOVIES_URL, GET_API_OPTION);
    const jsonResponse = await moviesData.json();
    dispatch(addNowPlayingMovies(jsonResponse?.results));
  };
};

export default useNowPlayingMovies;
