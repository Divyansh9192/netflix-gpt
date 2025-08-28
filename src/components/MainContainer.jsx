import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBg from "./VideoBg";
const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies || movies.length === 0) {
    return <h2>Loading...</h2>; // or return null
  }
  const mainMovie = movies[0];
  // console.log(mainMovie)
  const {original_title,overview ,id} = mainMovie;
  return (
    <div className="">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBg movieId={id}/>  
    </div>
  );
};

export default MainContainer
