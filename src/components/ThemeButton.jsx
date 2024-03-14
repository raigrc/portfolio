import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";

const ThemeButton = () => {

  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        className="theme-controller"
        value={theme}
        onChange={toggleTheme}
      />
      {theme === 'myDark' ? (
        // sun icon
        <CiLight className='swap-off fill-current w-6 h-6' />
      ) : (
        // moon icon
        <MdOutlineDarkMode className='swap-on fill-current w-6 h-6' />
      )}
    </label>
  )
}

export default ThemeButton