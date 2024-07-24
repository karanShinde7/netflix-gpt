import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_POPULAR_MOVIES_URL } from "../utils/urls";
import { GET_API_OPTION } from "../utils/apiConstants";
import { addPopularMovies } from "../redux/slice/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const moviesData = await fetch(GET_POPULAR_MOVIES_URL, GET_API_OPTION);
    const jsonResponse = await moviesData.json();
    dispatch(addPopularMovies(jsonResponse?.results));
  };
};

export default usePopularMovies;
