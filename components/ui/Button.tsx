import Link from 'next/link'
import React from 'react'

type ButtonProps = {
    link: string;
    children: React.ReactNode
  };
  

function Button({ link, children}: ButtonProps) {
  return (
 <button className='p-1.5 md:p-2.5 flex justify-center items-center gap-1 w-full rounded-xl  text-neutral-500 bg-black font-medium text-lg  backdrop-blur-xl border border-neutral-800'>
   <Link href={link}>
    {children}
    </Link>
</button>
  )
}

export default Button