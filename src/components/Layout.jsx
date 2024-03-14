import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <section className='relative flex flex-col w-full h-screen font-inter'>
      <Navbar />
      <Outlet />
    </section>
  )
}

export default Layout