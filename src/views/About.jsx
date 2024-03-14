import React from 'react'

const About = () => {
  return (
    <section className='z-10 w-full h-full pt-16'>
      <div className='relative flex justify-center w-full h-full max-w-screen-xl mx-auto lg:items-center'>
        {/* text about me */}
        <div className='p-4 space-y-4 text-base text-justify lg:w-1/2 md:py-8'>
          <h1 className='text-lg font-bold text-center uppercase md:text-4xl lg:text-7xl md:text-left text-accent'><span className='hidden md:inline-block'>&#8212;</span>About me</h1>
          <div className='space-y-4 '>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatibus non ab tempora quo laboriosam, saepe perferendis voluptas ut facilis, et optio. Voluptatem sed consequatur quos. Sed beatae excepturi similique doloremque placeat. Nesciunt, consectetur quo non fuga reiciendis provident? Voluptates doloribus quas sit in. Laudantium tempore accusamus consequuntur aliquam recusandae.</p>
          </div>
        </div>

        {/* picture */}
        <div className='absolute z-0 flex justify-center w-full h-full lg:h-auto lg:w-1/2 opacity-20 lg:static lg:opacity-100'>
          <div className='w-full h-full lg:w-72 lg:h-auto'>
            <img className='object-cover w-full h-full' src="../../public/portrait-img.jpg" alt="" />
          </div>

        </div>
      </div>

    </section>
  )
}

export default About