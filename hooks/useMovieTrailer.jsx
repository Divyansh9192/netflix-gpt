import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../src/utils/movieSlice";
import { API_CONST } from "../src/utils/constants";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
      movieId + 
      "/videos?language=en-US",
      API_CONST
    );
    const json = await data.json();
    const trailer = json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
};
export default useMovieTrailer;
