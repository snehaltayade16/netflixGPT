import { useEffect, useState } from 'react'
import {onAuthStateChanged } from "firebase/auth";

import {auth} from "../firebase/firebase"

import Login from './login'
import { createBrowserRouter, useNavigate } from 'react-router-dom'
import Browse from './browse'
import { RouterProvider } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/userSlice';


function Body() {
    const dispatch =useDispatch()
    // const navigate =useNavigate()
  const appRouter= createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/browse',
      element:<Browse/>
    }
  ])
 
  //firbase/build/authentication/manage user
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const {email,uid,displayName,photoUrl}=user
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoUrl:photoUrl}))

           // redirect to browser page when user login
        //    navigate ('/browse')
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
        //   const uid = user.uid;
          // ...
        } else {
            dispatch(removeUser())
            // navigate ('/')
        }
      });
  } ,[])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
