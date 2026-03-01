import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  console.log("Rendering Suggestions", movieNames);

  return (
    <div className="w-1/2 mx-auto bg-black bg-opacity-80 text-white p-4 m-4 rounded-lg relative">
      <div>
        {movieNames.map((movieName,index) => (
          <MovieList
            title={movieName}
            key={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
