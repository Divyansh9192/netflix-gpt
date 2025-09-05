import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";
const MovieCard = ( {posterPath} ) => {
  if(!posterPath) return null;
  return (
    <div className="w-45 pr-4 transform transition duration-300 hover:scale-110 hover:shadow-xl">
      <img src={IMAGE_CDN_URL+posterPath} alt="photu" />
    </div>
  );
};

export default MovieCard;
