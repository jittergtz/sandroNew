import React from 'react'
import Spliner from '../animations/spline'

function Hero() {
  return (
    <div className='h-[80vh] mt-20 flex justify-center items-center w-full relative'>
        <Spliner/>
        <div className='absolute  top-1/2 left-1/2 -translate-x-1/2 '>
          <h1 className='backdrop-blur-xl bg-black/10 p-5 rounded-xl text-3xl text-neutral-100'>
            hey, Sandro here
          </h1>
         </div>
    </div>
  )
}

export default Hero