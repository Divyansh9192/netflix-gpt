import { useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/useMovieTrailer";

const VideoBg = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  if (!trailerVideo) return;
  return (
    <div className=" pt-[30%]  bg-black md:pt-0 w-full overflow-x-hidden">
      <iframe
        className="w-screen overflow-x-hidden aspect-video pointer-events-none"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          `?&autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=${trailerVideo?.key}`
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBg;
