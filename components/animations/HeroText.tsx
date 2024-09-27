"use client";
import { motion, Variants } from 'framer-motion';
import React from 'react';
import { ContactButton, Shiny } from '../ui/Button';

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const words = text.split(' '); // Split the text into words

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.04 * i },
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
      style={{ display: 'inline-block', overflow: 'hidden', whiteSpace: 'normal', wordWrap: 'break-word' }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {Array.from(word).map((letter, index) => (
            <motion.span key={index} variants={child}>
              {letter}
            </motion.span>
          ))}
          {'\u00A0' /* add a space after each word */}
        </span>
      ))}
    </motion.div>
  );
};

const HeroText: React.FC = () => {
  const buttonContainer: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        delay: 0.5, // Add a delay to start the button animation after the text
      },
    },
  };

  return (
    <div className='absolute m-4 p-1 rounded-xl md:left-5 top-28 max-w-full md:max-w-[80%]'>
      <h1 className='rounded-xl md:mb-4 text-5xl md:text-8xl text-neutral-100/70 break-words'>
        <AnimatedText text="Hey Sandro here" />
      </h1>
      <div className='md:text-xl'>
        <AnimatedText text="I'm a Frontend Engineer with great interest in design." />
      </div>
      <div className='mt-10 flex flex-col gap-2'>
        <motion.div variants={buttonContainer} initial="hidden" animate="visible">
          <Shiny />
        </motion.div>
        <motion.div variants={buttonContainer} initial="hidden" animate="visible">
          <ContactButton />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroText;
