import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_UPCOMING_MOVIES_URL } from "../utils/urls";
import { GET_API_OPTION } from "../utils/apiConstants";
import { addUpcomingMovies } from "../redux/slice/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcoming = useSelector((state) => state.movies?.upcomingMovies)

  useEffect(() => {
    if(!upcoming) getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    const moviesData = await fetch(GET_UPCOMING_MOVIES_URL, GET_API_OPTION);
    const jsonResponse = await moviesData.json();
    dispatch(addUpcomingMovies(jsonResponse?.results));
  };
};

export default useUpcomingMovies;
