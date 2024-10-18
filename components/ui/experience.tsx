import Image from "next/image"
import React from "react"
import Stackcarousel from "./Stackcarousel"

function Experience() {
  return (
    <div className="min-h-[600px] flex flex-col ">
      {/* <div className="absolute  inset-0 -z-10 h-full w-full bg-[radial-gradient(#1D1D1D_1px,transparent_1px)] [background-size:16px_16px]"></div> */}
      <div className="flex justify-center">
        <div className="p-5 relative w-full max-w-3xl">
          <div className=" flex">
            <Image
              src={"/whiteblur.png"}
              width={400}
              height={400}
              alt="blue"
              className="bg-cover pointer-events-none z-0"
            />
            <div className="absolute top-40 ">
              <h1 className="text-3xl md:text-5xl text-transparent bg-gradient-to-r from-white/70 to-neutral-500 bg-clip-text">
                Experience
              </h1>
              <p className="text-neutral-400">
                tech stack
            </p>
            </div>
          </div>
        </div>

      
      </div>
      <div className="flex justify-center">
        <Stackcarousel/>
        </div>
    </div>
  )
}

export default Experience
