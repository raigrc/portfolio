import React from 'react'

const Button = ({ label, className }) => {
  return (
    <button className={`btn btn-primary my-2 ${className}`}>{label}</button>
  )
}

export default Button