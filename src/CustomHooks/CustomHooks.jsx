import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {MoviesTrailer} from '../redux/MovieSlice'
import {API_OPTIONS} from '../movieAPI/movieAPI'

const customHooksOFBackgroundVedio = (movieId)=>
{
    const dispatch=useDispatch()
    const getMoviesVideos = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS)
        // console.log(data);
        const json=await data.json()
        const filterData =json.results.filter((res)=>res.type == "Trailer")
        const trailer=filterData.length ? filterData[0]:json.results[0]
        // console.log(trailer);
        dispatch(MoviesTrailer(trailer))
        }
           
        useEffect(()=>{
            getMoviesVideos();
        },[])
}
export default customHooksOFBackgroundVedio
