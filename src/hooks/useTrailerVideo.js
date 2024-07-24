import { useDispatch, useSelector } from "react-redux";
import { GET_MAIN_MOVIE_TRAILER_URL } from "../utils/urls";
import { GET_API_OPTION } from "../utils/apiConstants";
import { addTrailerVideo } from "../redux/slice/movieSlice";
import { useEffect } from "react";

const useTrailerVideo = (id) => {
  const dispatch = useDispatch();
  const trailer = useSelector((state) => state.movies?.trailerVideo);

  const getMovieTrailer = async () => {
    const movieTrailer = await fetch(
      `${GET_MAIN_MOVIE_TRAILER_URL}/${id}/videos?language=en-US`,
      GET_API_OPTION
    );
    const responseJson = await movieTrailer.json();
    const filterData = responseJson.results.filter(
      (video) => video.type === "Trailer"
    );
    // if trailer not found show any video
    const trailer = filterData.length ? filterData[1] : responseJson.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    if (!trailer) getMovieTrailer();
  }, []);
};

export default useTrailerVideo;
