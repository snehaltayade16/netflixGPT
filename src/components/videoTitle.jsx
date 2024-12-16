const VideoTitle =({title,description})=>
{
    return(
        <div className='absolute  text-white z-20'>
            <p>{title}</p>
            <p className="w-1/4">{description}</p>
            <div className="flex "> 
                <button className="border p-4 bg-white text-black">Play</button>
                <button className="border p-4 ml-4 bg-slate-800 text-white">More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle