import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion';
import GptSearchBar from './GptSearchBar';
import { BG_URL } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
      <img
        className="absolute -z-10"
        src={BG_URL}
        alt="background-img"
      />
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  )
};

export default GptSearch;