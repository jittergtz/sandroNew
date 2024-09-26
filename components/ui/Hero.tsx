import React from 'react'
import Spliner from '../animations/spline'

function Hero() {
  return (
    <div className='h-[100vh]  flex justify-center items-center w-full'>
        <div className='max-w-7xl w-full h-full relative '>
        <Spliner/>
        <div className='absolute m-4 p-1 rounded-xl md:left-5   top-28  '>
          <h1 className=' rounded-xl md:mb-4 text-5xl md:text-8xl text-neutral-100/70'>
            Hey, Sandro here
          </h1>
          <p className='md:text-xl text-white'>
            Im a Frontend Engineer with great interest in design. 
            </p>
         </div>
    </div>
    </div>
  )
}

export default Hero