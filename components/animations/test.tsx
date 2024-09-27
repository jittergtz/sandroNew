"use client"
import { motion, Variants } from 'framer-motion';
import React from 'react';

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const letters = Array.from(text);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: { opacity: 0, x: -20 },
  };

  return (
    <motion.div
      style={{ display: 'inline-block', overflow: 'hidden' }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const HeroText: React.FC = () => {
  return (
    <div className='absolute m-4 p-1 rounded-xl md:left-5 top-28 max-w-full md:max-w-[80%]'>
    <h1 className='rounded-xl md:mb-4 text-5xl md:text-8xl text-neutral-100/70 break-words'>
      <AnimatedText text="hey Sandro here" />
    </h1>
    <p className='md:text-xl text-white break-words'>
      <AnimatedText text="Im a Frontend Engineer with great interest in design." />
    </p>
  </div>
  );
};

export default HeroText;
