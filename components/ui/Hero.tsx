import React from 'react'
import Spliner from '../animations/spline'
import HeroText from '../animations/test'

function Hero() {
  return (
    <div className='h-[100vh] flex justify-center items-center w-full'>
        <div className='max-w-7xl w-full relative h-full  '>
        <Spliner/>
         
         <HeroText/>
    </div>
    </div>
  )
}

export default Hero