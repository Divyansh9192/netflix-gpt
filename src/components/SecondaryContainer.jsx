import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies || movies.length === 0) {
    return <h2>Loading...</h2>; // or return null
  }
  return (
    <div className="bg-black ">  
      <div className="relative -mt-60 z-10 px-12 ">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Top-Rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Upcoming"} movies={movies?.upComingMovies} />
        {/* <MovieList title={"Horror"} movies={movies?.nowPlayingMovies} /> */}
      </div>
    </div>
  );
};
export default SecondaryContainer;
