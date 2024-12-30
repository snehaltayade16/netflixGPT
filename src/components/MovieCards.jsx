
const MovieCards=(moviePoster)=>
{
    console.log(moviePoster);
    return(
        <div>
            <div className="h-48 w-80">
                <img src={'https://image.tmdb.org/t/p/w500'+moviePoster.image} className="h-48  w-80 overflow-hidden "/>
            </div>
            
        </div>
    )
}
export default MovieCards