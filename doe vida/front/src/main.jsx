import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import { RouterProvider } from 'react-router-dom'
import router from '../src/Router/Router.jsx'
import { GlobalContextProvider } from './contexts/GlobalContext.jsx'

createRoot(document.getElementById('root')).render(

  <GlobalContextProvider>
    <RouterProvider router={router}>
    </RouterProvider>
  </GlobalContextProvider>
)
