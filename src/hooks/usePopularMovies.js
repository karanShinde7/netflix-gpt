import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_POPULAR_MOVIES_URL } from "../utils/urls";
import { GET_API_OPTION } from "../utils/apiConstants";
import { addPopularMovies } from "../redux/slice/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popular = useSelector((state) => state.movies?.popularMovies)

  useEffect(() => {
    if(!popular) getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const moviesData = await fetch(GET_POPULAR_MOVIES_URL, GET_API_OPTION);
    const jsonResponse = await moviesData.json();
    dispatch(addPopularMovies(jsonResponse?.results));
  };
};

export default usePopularMovies;
