import Header from './header';
import Footer from './footer';




const  Login =()=>{
    return(
        <div className="relative">
            <div className='absolute h-full w-full bg-black'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_medium.jpg'  className="object-cover h-full w-full opacity-50"></img>
            </div>
            <div className='relative'>
                <Header />
                <main className="pr-20 pl-20 pb-20 flex justify-center items-center">
                    <form className="bg-[#020202c9] text-white py-12 px-16 flex flex-col w-1/4">
                        <h1 className='text-4xl font-bold text-start'>Sign In</h1>
                        <input type="text" placeholder="Enter Email or mobile number" className='mt-4 pt-6 pb-2 pr-4 pl-4 text-[#ffffff] bg-[#141311a3]'></input>
                        <input type="password" placeholder="Enter Password" className='mt-4 pt-6 pb-2 pr-4 pl-4 text-[#ffffff] bg-[#141311a3]'></input>
                        <button className='mt-4 bg-red-600 p-3 text-base font-medium rounded-md '>Sign In</button>
                        <p className='text-center mt-4 text-[#ffffff80]'>OR</p>
                        <button className='mt-4 p-3 bg-[#373337] text-base font-medium rounded-md '>Use Sign-In code</button>
                        <p className='text-center mt-4 underline'>Forgot-passowrd?</p>
                        <div>
                            <span className='mt-4 text-[#ffffff] flex'>
                                <input type="checkbox"/>
                                <p className='text-[#ffffff] pl-3'>Remember me</p> 
                            </span>
                            <p className='mt-4 text-[#ffffff80]'>New to Netflix? <span className='text-white'>Sign up now.</span> </p> 
                            <p className='mt-4 text-[#ffffff80] font-normal text-sm'>This page is protected by Google reCAPTCHA to ensure you're not a bot</p>
                            <a className='mt-4 text-sm text-blue-600'>Learn more</a>
                        </div>
                        
                    </form>
                </main>
            </div>
            <Footer />
        </div>
    )
}
export default Login