import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/Compontent/Root/Root.jsx'; 
import Home from './assets/Compontent/Pages/Home';
import Navber from './assets/Compontent/Header/Navber/Navber';
import Statistics from './assets/Compontent/Statistics/Statistics';
import Donations from './assets/Compontent/Donations/Donations';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:"/Navbar",
        element:<Navber/>
      },
      {
        path:"/home",
        element:<Home/>
      },
      {path:"/donation",
       element: <Donations/>
      },

      {
        path:"/statistics",
        element:<Statistics/>
      },


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
