import React from "react";
import { useSelector } from "react-redux";
import GptSearchBar from "./GptSearchBar";
import { BgIMG_URL } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearch = () => {
  const gptSearchState = useSelector((store) => store.gpt.showGptSearch);
  if(!gptSearchState) return null;  
  return <div>
            <div className="fixed -z-10">
                <img className="h-screen object-cover w-screen" src={BgIMG_URL} alt="bg-img" />
            </div>
            <div className=""></div>
              <GptSearchBar/>
              <GptMovieSuggestion/>
            </div>;
};

export default GptSearch;
