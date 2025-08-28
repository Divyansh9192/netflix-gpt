import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";
const MovieCard = ( {posterPath} ) => {
  return (
    <div className="w-40 pr-4">
      <img src={IMAGE_CDN_URL+posterPath} alt="photu" />
    </div>
  );
};

export default MovieCard;
