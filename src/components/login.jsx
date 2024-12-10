import Header from './header';
import Footer from './footer';
import { useState,useRef } from 'react';
import checkValidation from './valiadtion'
const  Login =()=>{
    const [isSignInForm,isSetSignInForm]=useState(true)
    const [showErrorMsg,SetErrorMessage]=useState(null)
    const email=useRef(null)
    const password=useRef(null)

    const toogleSignInForm=()=>{
        isSetSignInForm(!isSignInForm)
    }

    const validateForm=()=>{
        const message=checkValidation(email.current.value,password.current.value)
        SetErrorMessage(message)
    }
    return(
        <div className="relative">
            <div className='absolute h-full w-full bg-black'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_medium.jpg'  className="object-cover h-full w-full opacity-50"></img>
            </div>
            <div className='relative'>
                <Header />
                <main className="pr-20 pl-20 pb-20 flex justify-center items-center">
                    <form onSubmit={(e)=>e.preventDefault()} className="bg-[#020202c9] text-white py-12 px-16 flex flex-col w-1/4">
                        <h1 className='text-4xl font-bold text-start'>
                            {
                                isSignInForm ? 'Sign In':'Sing Up'
                            }
                        </h1>
                        
                        {
                            !isSignInForm && (
                                <input type="text" placeholder="Enter Full Name" className='mt-4 pt-6 pb-2 pr-4 pl-4 text-[#ffffff] bg-[#141311a3]'></input>
                            )
                        }
                        <input ref={email} type="text" placeholder="Enter Email or mobile number" className='mt-4 pt-6 pb-2 pr-4 pl-4 text-[#ffffff] bg-[#141311a3]'></input>
                            {/* <p className='text-red-600'>{showErrorMsg}</p> */}
                        <input ref={password}  type="password" placeholder="Enter Password" className='mt-4 pt-6 pb-2 pr-4 pl-4 text-[#ffffff] bg-[#141311a3]'></input>
                            <p className='text-red-600'>{showErrorMsg}</p>
                        
                            {
                               isSignInForm ? <button className='mt-4 bg-red-600 p-3 text-base font-medium rounded-md ' onClick={validateForm}>Sign In </button>:<button className='mt-4 bg-red-600 p-3 text-base font-medium rounded-md ' onClick={validateForm}>Sign Up</button>
                            }

                        <p className='text-center mt-4 text-[#ffffff80]'>OR</p>
                        <button className='mt-4 p-3 bg-[#373337] text-base font-medium rounded-md '>Use Sign-In code</button>
                        <p className='text-center mt-4 underline'>Forgot-passowrd?</p>
                        <div>
                            <span className='mt-4 text-[#ffffff] flex'>
                                <input type="checkbox"/>
                                <p className='text-[#ffffff] pl-3'>Remember me</p> 
                            </span>
                            <p className='mt-4 text-[#ffffff80]'>New to Netflix? 
                                <span className='text-white cursor-pointer' onClick={toogleSignInForm}>{isSignInForm ? 'Sign up now' :'Already a user sign in now'}</span>
                            </p> 
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