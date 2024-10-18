import { ReactElement } from "react"
import { FiFigma } from "react-icons/fi";
import { SiTypescript, SiDocker, SiSpline, SiThreedotjs, SiTailwindcss } from 'react-icons/si';

interface stack {
    title: string,

    img: string,
  
    id: number,
    icon?: ReactElement,

 }
 
 export const stack: stack[] = [
  {
    title: "Figma",
    img: "/Volume LP.webp",
    id: 1,
    icon: <FiFigma className="w-6 h-6 text-stone-600" />
  },
  {
    title: "Typescript",
    img: "/Volume LP.webp",
    id: 2,
    icon: <SiTypescript className="w-6 h-6 text-stone-600" />
  },
  {
    title: "Docker",
    img: "/Volume LP.webp",
    id: 3,
    icon: <SiDocker className="w-6 h-6 text-stone-600" />
  },
  {
    title: "Spline",
    img: "/Volume LP.webp",
    id: 4,
    icon: <SiTypescript className="w-6 h-6 text-stone-600" />
  },
  {
    title: "three.js",
    img: "/Volume LP.webp",
    id: 5,
    icon: <SiThreedotjs className="w-6 h-6 text-stone-600" />
  },
  {
    title: "Tailwind",
    img: "/Volume LP.webp",
    id: 6,
    icon: <SiTailwindcss className="w-6 h-6 text-stone-600" />
  }
]
