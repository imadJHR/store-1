import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}



const router = createBrowserRouter ([
  {
    path: "/",
    element: <Layout/>,
    children: [
     {
      path:'/',
      element: <Home/>
     },
     
     {
      path:'/products/:id',
      element: <Products/>
     },
     {
      path:'/product/:id',
      element: <Product/>
     }
    ]
  },
  

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode>,
)
