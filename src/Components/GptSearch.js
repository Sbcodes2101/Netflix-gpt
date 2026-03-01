import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BG_URL } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
      <img
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        src={BG_URL}
        alt="background-img"
      />

      <div className="pt-[6%]">
        <GptSearchBar />
        <GptMovieSuggestion />  
      </div>
    </div>
  )
};

export default GptSearch;