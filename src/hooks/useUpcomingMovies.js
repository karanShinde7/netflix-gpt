import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_UPCOMING_MOVIES_URL } from "../utils/urls";
import { GET_API_OPTION } from "../utils/apiConstants";
import { addUpcomingMovies } from "../redux/slice/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    const moviesData = await fetch(GET_UPCOMING_MOVIES_URL, GET_API_OPTION);
    const jsonResponse = await moviesData.json();
    dispatch(addUpcomingMovies(jsonResponse?.results));
  };
};

export default useUpcomingMovies;
