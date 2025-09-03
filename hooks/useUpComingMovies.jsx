import { useDispatch } from "react-redux";
import { API_CONST } from "../src/utils/constants";
import { useEffect } from "react";
import {addUpComingMovies } from "../src/utils/movieSlice";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_CONST
    );
    const json = await data.json();
    // console.log(json);
    dispatch(addUpComingMovies(json.results));
  };
  useEffect(() => {
    getUpComingMovies();
  }, []);
};
export default useUpComingMovies;
