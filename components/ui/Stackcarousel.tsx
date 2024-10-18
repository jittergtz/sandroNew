"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { stack } from '../stack';

function Stackcarousel() {
  // Set up height for 5 visible items at a time

  const itemHeight = 62; // Assuming each item is about 62px tall

  // Animation variant
  const variants = {
    animate: {
      y: [-itemHeight * stack.length, 0], // Move up then restart
      transition: {
        y: {
          repeat: Infinity, // Infinite loop
          duration: 15,     // Duration for one full cycle
          ease: "linear",   // Smooth linear animation
        },
      },
    },
  };

  return (
    <div className='flex flex-col items-center justify-start w-full max-w-md h-[310px] overflow-hidden'>
      <motion.div
        className='flex flex-col gap-5'
        variants={variants}
        animate="animate"
      >
        {/* Repeat the stack items to make it appear seamless */}
        {stack.concat(stack).map((data) => (
          <div
            className='flex rounded-lg p-1.5 w-64 justify-center items-center gap-2'
            key={data.id} 
          >
            <div>{data.icon}</div>
            <h1 className='text-2xl  text-transparent bg-gradient-to-r from-white/70 to-neutral-200 bg-clip-text'>
            {data.title}
            </h1>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Stackcarousel;
