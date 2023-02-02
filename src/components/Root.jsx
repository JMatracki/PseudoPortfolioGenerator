import React from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer'
import Navbar from './Navbar'

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Root