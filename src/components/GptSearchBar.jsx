import { useRef } from "react";
import lang from "../utils/langConstant";
import { useDispatch, useSelector } from "react-redux";
import ai from "../utils/googleGemini";
import { API_CONST } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.configLang.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_CONST
    );
    const json = await data.json();
    return json.results;
  };

  const handleGeminiSearch = async () => {
    const geminiQuery =
      "Act a movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". only give me the names of 5 moviesd and no extra text just the movies and it should be comma seprated";
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: geminiQuery,
    });
    if (!response.candidates[0]) {
      console.log("NOT FOUND - 404");
    }
    const geminiMovies =
      response.candidates[0]?.content?.parts[0].text.split(",");
    const promiseArray = geminiMovies.map((movie) => searchTMDB(movie));

    const TMDBResults = await Promise.all(promiseArray);

    console.log(TMDBResults);
    dispatch(addGptMovieResult({movieNames:geminiMovies,movieResult:TMDBResults})); 
    
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        action=""
        className=" w-6/12 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9 bg-white"
          placeholder={lang[langKey].gptSearchPlaceholder}
          ref={searchText}
        />
        <button
          className="m-4 cursor-pointer py-2 px-4 col-span-3 bg-red-700 text-white rounded-lg"
          onClick={handleGeminiSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
