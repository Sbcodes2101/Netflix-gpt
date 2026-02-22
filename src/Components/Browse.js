import Header from "./Header"; 
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
const Browse = ()=>{
    // Fetch data from TMDB API and update store
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return(
    <div>
        <div className="relative z-10 bg-gradient-to-b from-black/90 to-black/50">
        <Header />
        <MainContainer />
        <SecondaryContainer />
        {/* 
           Main-container
             - videoBackground
             - videoTitle
           Secondary-container
                - MovieList *n
                  - MovieCard *n
        */}
        </div>
    </div>
    )
}

export default Browse;