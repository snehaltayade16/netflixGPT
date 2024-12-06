import Header from './header'
const  Login =()=>{
    return(
        <div>
            <div className='absolute'>
               <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_medium.jpg'  className="object-cover h-full w-full"></img>
            </div>
            <Header />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <form className=" bg-black text-white p-10 max-w-md w-full mx-auto my-auto right-0 left-0">
                    <input type="text" placeholder="Enter Email Address"></input>
                    <input type="password" placeholder="Enter Password"></input>
                    <button>Sign Inn</button>
                </form>
            </div>
        </div>
    )
}
export default Login