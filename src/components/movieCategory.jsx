import MovieCards from "./MovieCards";

const MovieCategory=({title,movies})=>
    
    {
        console.log(title,movies);
        console.log(movies?.[0]?.poster_path);
        return(
            <div>
                <div>
                    <h1>{title}</h1>
                </div>
                <div>
                    <MovieCards image={movies[0].poster_path}/>
                </div>
            </div>
        )
    }
export default MovieCategory