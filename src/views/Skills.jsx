import React from 'react'

// images
import ReactLogo from '../../public/react-2.svg'
import HTMLLogo from '../../public/html-1.svg'
import CSSLogo from '../../public/css-3.svg'
import JSLogo from '../../public/logo-javascript.svg'
import TailwindLogo from '../../public/tailwind-css-2.svg'
import LaravelLogo from '../../public/laravel-2.svg'

const Skills = () => {
  return (
    <section className='relative z-10 w-full h-full pt-16'>
      <div className='flex flex-col items-center w-full h-full max-w-screen-xl mx-auto'>
        <h1 className='py-4 text-xl font-semibold text-accent md:text-2xl lg:text-4xl lg:pb-10'>Experience and Skills</h1>

        <div className='experience'>
          <div className='experience-item'>
            <img className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20' src={ReactLogo} alt="" />
            <h3 className='py-2'>React JS</h3>
          </div>
          <div className='experience-item'>
            <img className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20' src={HTMLLogo} alt="" />
            <h3 className='py-2'>HTML</h3>
          </div>
          <div className='experience-item'>
            <img className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20' src={CSSLogo} alt="" />
            <h3 className='py-2'>CSS</h3>
          </div>
          <div className='experience-item'>
            <img className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20' src={JSLogo} alt="" />
            <h3 className='py-2'>Javascript</h3>
          </div>
          <div className='experience-item'>
            <img className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20' src={TailwindLogo} alt="" />
            <h3 className='py-2'>Tailwind CSS</h3>
          </div>
          <div className='experience-item'>
            <img className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20' src={LaravelLogo} alt="" />
            <h3 className='py-2'>Laravel</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills