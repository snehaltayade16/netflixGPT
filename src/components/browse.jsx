import { useEffect } from "react"
import { API_OPTIONS } from "../movieAPI/movieAPI"
import Header from "./header"
import { useDispatch } from "react-redux"
 import {addNowPlayingMovies} from "../redux/MovieSlice"
 import MainContainer from "./MainContainer"
import MovieListContainer from "./MovieListContainer"

const Browse =()=>{
    const dispatch = useDispatch()
    const getNowPlayingMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const json=await data.json()
        dispatch(addNowPlayingMovies(json.results))

    }
    useEffect(()=>{
        getNowPlayingMovies()
    },[])
    return(
        <div className="relative">
            {/* <div className="absolute z-20 w-full">
                <Header/>
            </div>
            <MainContainer/> */}
            <MovieListContainer/>
        </div>
    )
}

export default Browse