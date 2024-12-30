import { useSelector } from "react-redux"
import MovieCategory from "./movieCategory"

const MovieListContainer =()=>{
    const movies=useSelector((store => (store.movie?.nowPlayingMovies)))
        if(!movies) return;
    console.log(movies);
    return(
        <div>
            <MovieCategory title={'Now playing movies'} movies={movies}/>
        </div>
    )
}
export default MovieListContainer