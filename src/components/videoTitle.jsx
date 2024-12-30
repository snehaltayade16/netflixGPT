const VideoTitle =({title,description})=>
{
    return(
        <div className='absolute  text-white z-20 bottom-0 px-[7.5rem] py-20'>
            <p className="text-3xl fond-bold">{title}</p>
            <p className="w-1/4">{description}</p>
            <div className="flex pt-4"> 
                <button className="border py-1  px-14 bg-white text-black hover:opacity-80">Play</button>
                <button className="border py-1 px-14 ml-4 bg-slate-800 text-white">More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle