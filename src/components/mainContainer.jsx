import { useSelector } from "react-redux"
import VedioBackground from "./videoBackground";
import VideoTitle from "./videoTitle";
const MainContainer=  ()=>
{
    const moviesData=useSelector((store=>(store.movie?.nowPlayingMovies)))
    if(!moviesData) return;
    const mainMovie=moviesData[0]
    console.log(mainMovie);
    const {original_title,overview ,id}=mainMovie
    console.log(original_title,overview);

       return(
        <div>
            <VideoTitle title={original_title} description={overview}/>
            <VedioBackground movieId={id} />
        </div>
    )
  
}
export default MainContainer
