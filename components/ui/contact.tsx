"use client"
import React from 'react'
import { Github, Mail } from "lucide-react";
import { Card } from './card';
import Link from 'next/link';

const socials = [

	{
		icon: <Mail size={20} />,
		href: "mailto:sandro.gantze@gmail.com",
		label: "Email",
		handle: "sandro.gantze@gmail.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/jittergtz",
		label: "Github",
		handle: "Sandro",
	},
];

export default function Contact() {
	return (
		<div className='flex flex-col items-center gap-5'>

			<div className=" flex flex-col gap-10  items-center justify-center px-4 mx-auto">
      <h1 className='text-3xl mt-20 text-center  text-transparent bg-clip-text bg-gradient-to-b from-zinc-200 to-zinc-500/70'>
        Contact
        </h1>
				<div className="grid w-96  sm:w-auto grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-2 lg:gap-16">
    
					{socials.map((s, i) => (
						<Card key={i}>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
