import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_TOP_RATED_MOVIES_URL } from "../utils/urls";
import { GET_API_OPTION } from "../utils/apiConstants";
import { addTopRatedMovies } from "../redux/slice/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRated = useSelector((state) => state.movies?.topRatedMovies)

  useEffect(() => {
    if(!topRated) getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    const moviesData = await fetch(GET_TOP_RATED_MOVIES_URL, GET_API_OPTION);
    const jsonResponse = await moviesData.json();
    dispatch(addTopRatedMovies(jsonResponse?.results));
  };
};

export default useTopRatedMovies;
