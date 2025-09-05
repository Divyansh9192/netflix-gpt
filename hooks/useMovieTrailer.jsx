import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../src/utils/movieSlice";
import { API_CONST } from "../src/utils/constants";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const movieTrailer = useSelector(store => store.movies.movieTrailer);
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
    !movieTrailer && getMovieVideo();
  }, []);
};
export default useMovieTrailer;
