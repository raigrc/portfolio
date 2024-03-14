import React from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import ThemeProvider from './ThemeProvider';
import ThemeButton from './ThemeButton';
import { Link, NavLink } from 'react-router-dom';
import { IoPersonCircleOutline } from "react-icons/io5";

const Navbar = () => {

  return (
    <nav className='fixed z-50 border-b navbar border-primary bg-base-100'>
      <div className='w-full max-w-screen-xl mx-auto '>
        <div className="flex navbar-start">
          <div className=" dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <RiMenu2Fill className='w-6 h-6' />
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/portfolio'>Home</Link></li>
              <li><Link to='/portfolio/about'>About</Link></li>
              <li><Link to='/portfolio/skills'>Skills</Link></li>
              <li><Link to='/portfolio/projects'>Projects</Link></li>
              <li><Link to='/portfolio/contacts'>Contacts</Link></li>
            </ul>
          </div>
          <Link to='/' className="flex items-center text-xl font-semibold cursor-pointer"><IoPersonCircleOutline className='mr-2' />Rai.<span className='text-primary'>Dev</span></Link>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
            <li>
              <NavLink
                to='/' className={({ isActive }) => isActive ? "text-accent  font-semibold" : ""}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about' className={({ isActive }) => isActive ? "text-accent  font-semibold" : ""}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/skills' className={({ isActive }) => isActive ? "text-accent  font-semibold" : ""}>
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/projects' className={({ isActive }) => isActive ? "text-accent  font-semibold" : ""}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/contacts' className={({ isActive }) => isActive ? "text-accent  font-semibold" : ""}>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="text-end navbar-end">
          <ThemeProvider>
            <ThemeButton />
          </ThemeProvider>
        </div>
      </div>
    </nav>
  )
}

export default Navbar