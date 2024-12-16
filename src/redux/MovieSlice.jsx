import { createSlice } from "@reduxjs/toolkit";
const movieSlice=createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        MoviesTrailerState:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        MoviesTrailer:(state,action)=>{
            state.MoviesTrailerState = action.payload
        }
        }
})
export const {addNowPlayingMovies,MoviesTrailer}=movieSlice.actions
export default movieSlice.reducer