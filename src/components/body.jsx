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
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
