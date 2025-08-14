import { useState } from 'react'
import Navbar from './components/HomeComponents/Navbar/Navbar'
import Home from './components/HomeComponents/Home'
import Gallery from './components/GalleryComponents/Gallery';
import Enquiry from './components/EnquiryComponents/Enquiry';import Dashboard from './components/DashboardComponents/Dashboard';
import Contact from './components/ContacttUSComponents/Contact';
import Login from './components/LoginComponents/Login';
import Buyblood from './components/ChargesComponent/Buyblood';
import Employee from './components/EmployeeDashboard/Employee';
import User from './components/UserComponents/User';
import Policy from './components/PrivacyComponents/Policy';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import './App.css'


function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/gallery",
      element: <><Navbar /><Gallery /></>
    },
    {
      path: "/enquiry",
      element: <><Navbar /><Enquiry /></>
    },
    {
      path: "/dashboard",
      element: <><Navbar /><Dashboard /></>
    },
    {
      path: "/contactus",
      element: <><Navbar /><Contact /></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login /></>
    },
    {
      path: "/buyblood",
      element: <><Navbar /><Buyblood /></>
    },
    {
      path: "/dashboardlogin",
      element: <><Navbar /><Employee/></>
    },
    {
      path: "/user",
      element: <><Navbar /><User/></>
    },
    {
      path: "/policy",
      element: <><Navbar /><Policy/></>
    },
  ])

  return (
    <>
<RouterProvider router={router} />
    </>
  )
}

export default App
