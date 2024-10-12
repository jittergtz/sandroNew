import Link from 'next/link'
import React from 'react'
import { IoMdContact } from 'react-icons/io';

type ButtonProps = {
    link: string;
    children: React.ReactNode
  };
  

function Button({ link, children}: ButtonProps) {
  return (
    <Link href={link} className='p-1.5 md:p-2.5 flex duration-300 hover:shadow-[inset_0_0px_27px_10px_rgb(40,40,40)] justify-center items-center gap-1 w-full rounded-xl  text-neutral-400 bg-black/10 font-medium text-lg  backdrop-blur-xl border border-neutral-800'>
   {children}
   </Link>
  )
}

export default Button


export function ContactButton() {
  return (
    <button className='rounded-xl text-neutral-300 flex justify-center items-center gap-1 bg-neutral-900 hover:shadow-[inset_0_0px_27px_10px_rgb(20,20,20)] hover:bg-neutral-800 hover:shadow-inner-red-500 duration-700 max-w-96 w-full p-2.5 border-[1px] border-neutral-800'>
     Get in touch <IoMdContact className='text-neutral-700' size={22} />
    </button>
  )
}

export function Shiny() {
  return (
    <button className='rounded-xl text-neutral-300 flex justify-center items-center gap-1 bg-neutral-900/30 backdrop-blur-xl max-w-96 w-full p-2.5 border-[1px] border-neutral-900/10'>
        take a look 
    </button>
  )
}


