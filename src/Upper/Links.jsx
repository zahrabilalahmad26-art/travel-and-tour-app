import React from 'react'
import Header from "./Header.jsx"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "../Home/Home.jsx"
import Contact from "../Contact/Contact.jsx"
import Footer from './Footer.jsx'
import About from '../About/About.jsx'
import Hotels from '../Hotel/Hotels.jsx'
import News from '../News/News.jsx'
import Tours from '../Tours/Tours.jsx'
import Restaurants from '../Restaurants/Restaurants.jsx'
import Transports from '../Transport/Transports.jsx'
import FAQ from './FAQ.jsx'
import Blog1 from "../Blogs/Blog1.jsx"
import Blog3 from "../Blogs/Blog3.jsx"
import Blog4 from '../Blogs/Blog4.jsx'
import Blog5 from '../Blogs/Blog5.jsx'
import Blog7 from '../Blogs/Blog7.jsx'
import Blog9 from '../Blogs/Blog9.jsx'
import Blog10 from '../Blogs/Blog10.jsx'
import Blog12 from '../Blogs/Blog12.jsx'
import Signin from './Signin.jsx'
import Search from '../Home/Search.jsx'
import Cart from './Cart.jsx'

const Links = () => {
      const router = createBrowserRouter([
          {
    path: "/",
    element: <><Header /><Home /><Footer /></>
  },
    {
      path: "/Home",
      element: <><Header /><Home /><Footer /></>
    },
    {
      path: "/About",
      element: <><Header /><About /><Footer /></>
    },
    {
      path: "/Contact",
      element: <><Header /><Contact /><Footer /></>
    },
    {
      path: "/Hotels",
      element: <><Header /><Hotels /><Footer /></>
    },
        {
      path: "/Tours",
      element: <><Header /><Tours /><Footer /></>
    },        {
      path: "/Transports",
      element: <><Header /><Transports /><Footer /></>
    },        {
      path: "/Restaurants",
      element: <><Header /><Restaurants /><Footer /></>
    },        {
      path: "/News",
      element: <><Header /><News /><Footer /></>
    }      ,       {
    path: "/Blog1",
    element: <><Header /><Blog1  /><Footer /></>
  } ,       {
    path: "/Blog3",
    element: <><Header /><Blog3  /><Footer /></>
  },  {
    path: "/Blog4",
    element: <><Header /><Blog4  /><Footer /></>
  }
  ,  {
    path: "/Blog5",
    element: <><Header /><Blog5  /><Footer /></>
  }
  ,  {
    path: "/Blog7",
    element: <><Header /><Blog7  /><Footer /></>
  }
  ,  {
    path: "/Blog9",
    element: <><Header /><Blog9  /><Footer /></>
  }
  ,  {
    path: "/Blog10",
    element: <><Header /><Blog10  /><Footer /></>
  }
  ,  {
    path: "/Blog12",
    element: <><Header /><Blog12  /><Footer /></>
  }
   ,  {
    path: "/Signin",
    element: <><Signin  /></>
  }
  ,  {
    path: "/Search",
    element: <><Header /><Search  /><Footer /></>
  }
  ,  {
    path: "/Cart",
    element: <><Header /><Cart  /><Footer /></>
  }
    ,  {
      path: "/FAQ",
      element: <><Header /><FAQ /><Footer /></>
    },


  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Links
