import React from 'react'
import Spliner from '../animations/spline'

function Hero() {
  return (
    <div className='h-[100vh]  flex justify-center items-center w-full relative'>
        <Spliner/>
        <div className='absolute m-4 p-1 rounded-xl   top-28  '>
          <h1 className=' rounded-xl text-5xl text-neutral-100/70'>
            Hey, Sandro here
          </h1>
          <p>Im a Frontend Engineer with great interest in design. </p>
         </div>
    </div>
  )
}

export default Hero