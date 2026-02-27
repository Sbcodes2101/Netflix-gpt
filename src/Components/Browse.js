import Header from "./Header"; 
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
const Browse = ()=>{
    const showGptSearch = useSelector(store=>store.gpt.showGptSearch)
    // Fetch data from TMDB API and update store
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return(
    <div>
        <div className="z-10 bg-gradient-to-b">
        <Header />
        {
          showGptSearch ?(
             <GptSearch />
            ):(
            <>
              <MainContainer/>
            <SecondaryContainer />
            </>            
          ) 
        }
        
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