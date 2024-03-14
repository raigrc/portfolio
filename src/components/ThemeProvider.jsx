import React, { useState } from 'react'
import ThemeContext from '../context/ThemeContext'

const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState('myDark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'myDark' ? 'myLight' : 'myDark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider