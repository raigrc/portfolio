import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Button from '../components/Button';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
  return (
    <section className='z-10 w-full h-full pt-16'>
      <div className='flex flex-col-reverse justify-center w-full h-full max-w-screen-xl mx-auto lg:flex-row'>
        {/* left side / text */}
        <div className='flex justify-center w-full lg:items-center lg:justify-end lg:p-4'>
          <div className='flex flex-col items-center text-base md:text-xl lg:text-2xl'>
            <div className='flex flex-col items-center h-16 my-2 md:h-20 lg:h-24'>
              <h3>Hi, <span className='font-medium text-accent'>I am</span></h3>
              <h1>Raven Justin P. Garcia</h1>
              <h2 className='font-semibold text-accent lg:text-2xl'>
                <Typewriter
                  words={["Web Developer", "React Developer", "Laravel Developer", "MERN Developer"]}
                  loop={true}
                  typeSpeed={150}
                  deleteSpeed={100}
                />
              </h2>
            </div>

            <Button label="Let's Connect!" />

            <div className='flex my-2'>
              <a href="" className="mx-2 link link-primary">
                <FaLinkedin className='w-8 h-8' />
              </a>
              <a href="" className="mx-2 link link-primary">
                <FaGithub className='w-8 h-8' />
              </a>
              <a href="" className="mx-2 link link-primary">
                <FaFacebook className='w-8 h-8' />
              </a>
            </div>
          </div>

        </div>

        {/* right side / picture */}
        <div className='flex items-center justify-center w-full lg:justify-start lg:p-4'>
          <div className='w-56 h-56 rounded-full bg-primary'>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Banner