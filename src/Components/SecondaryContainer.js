import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);
  return (
     <div className="bg-black">
      <div className='-mt-72 pl-4 relative z-20'>

        {movies.nowPlayingMovies && (
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        )}

        {movies.PopularMovies && (
          <MovieList title="Popular" movies={movies.PopularMovies} />
        )}

        {movies.TopRatedMovies && (
          <MovieList title="Top Rated" movies={movies.TopRatedMovies} />
        )}

        {movies.UpcomingMovies && (
          <MovieList title="Upcoming Movies" movies={movies.UpcomingMovies} />
        )}

      </div>
    </div>
    )
}

export default SecondaryContainer