import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './components/body'
import Login from './components/login'
import { createBrowserRouter } from 'react-router-dom'
import Browse from './components/browse'
import { RouterProvider } from 'react-router-dom'


function App() {
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

export default App
