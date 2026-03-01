
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";


const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // search movie in TMDB
  const searchMovieTMDB = async(movie)=>{
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',API_OPTIONS
    )

    const json = await data.json();
    return json.results;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const query = searchText.current.value;
    const gptQuery = "Act as a movie recommandation system and suggest some movies for the query"+searchText.current.value+". only give me names of 5 movies, coma seprated like the example result given ahead.Example Result: Gadar ,Sholay ,Don ,Golmaal ,Koi Mil Gaya"

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer `+process.env.REACT_APP_OPENAI_KEY,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000", // required
          "X-Title": "Movie GPT App", // optional but recommended
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo", 
          messages: [
            { role: "user", content: gptQuery }
          ],
        }),
      });

      const gptResults = await response.json();

      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

      console.log(gptMovies)

      //For each Movies I will search TMDB API
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      
      // [Promise ,Promise ,Promise ,Promise ,Promise]

      const tmdbResults =await Promise.all(promiseArray);

      console.log(tmdbResults); 

      dispatch(addGptMovieResult({movieNames: gptMovies, movieResults:tmdbResults}))

    } catch (error) {
      console.error("OpenRouter Error:", error);
    }
  };

  return (
    <div className="pt-[12%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={handleSubmit}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-10"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          type="submit"
          className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-2 m-4"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;