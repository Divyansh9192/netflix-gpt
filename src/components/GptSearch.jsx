import React from "react";
import { useSelector } from "react-redux";
import GptSeachPage from "./GptSeachPage";
import GptSearchBar from "./GptSearchBar";
import { BgIMG_URL } from "../utils/constants";

const GptSearch = () => {
  const gptSearchState = useSelector((store) => store.gpt.showGptSearch);
  return <div>
            <div className="absolute -z-10">
                <img src={BgIMG_URL} alt="bg-img" />
              </div>
              <div className="absolute -z-10 inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
            <GptSeachPage/>
            <GptSearchBar/>
          </div>;
};

export default GptSearch;
