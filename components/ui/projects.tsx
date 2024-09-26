"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { projects } from "@/components/projects";
import { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import Button from "./Button";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa";

type ModalProps = {
  onClose: () => void;
  content: {
    title: string;
    img?: string;
    description: string;
  };
};



function Modal({ onClose, content }: ModalProps) {
  const [showButtons, setShowButtons] = useState(false);
  const placeholder = "https://utfs.io/f/mQNDgQBdulFSYrcfiLGCfIoZlwKa7ObVEykHUeWuxBDidcPr";

  return (
    <div className='fixed top-0 inset-0 z-50 flex items-center justify-center bg-black/50 h-screen Scroller bg-opacity-90'>
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.2 }}
        transition={{ duration: 0.3 }}
        onAnimationComplete={() => setShowButtons(true)}
        className='relative p-5 backdrop-blur-xl m-2 max-w-[750px] w-full max-h-[70vh] lg:max-h-[85vh] h-full overflow-y-auto overflow-x-hidden border border-neutral-600 rounded-xl'
      >
        <div className="sticky top-0 flex justify-end">
          <button onClick={onClose} className="p-1 bg-white/10 backdrop-blur-xl rounded-full">
            <IoIosClose size={26} className='text-white/70' />
          </button>
        </div>

        <h2 className="text-lg md:text-3xl text-neutral-200 tracking-tight mb-4">
          {content.title}
        </h2>
        <Image
          src={content.img || placeholder}
          width={600}
          height={400}
          alt="project image"
          className="w-full rounded-xl"
        />
        <p className="text-md md:text-lg mt-5 text-gray-300">{content.description}</p>

        {showButtons && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="sticky bottom-0 flex gap-2"
          >
            <Button link="/"><FiGithub size="22" /></Button>
            <Button link="/">
            <div className="flex justify-center items-center gap-1">
              Live <FaLocationArrow size="14" />
              </div>
            </Button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}


export default function Projects() {
  const [activeModal, setActiveModal] = useState(null);


  const openModal = (project) => {
    setActiveModal(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const placeholder =  "https://utfs.io/f/mQNDgQBdulFSbgVPooiQAJx5dsog9iEOYch1PnqFGKeyar7I"

  return (
    <>
    <div className="font-[family-name:var(--font-geist-sans)] p-5 flex justify-center ">
     <div className="w-full max-w-6xl">
          <h2 className="text-3xl mb-7 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-900 sm:text-4xl">
            Projekte
          </h2>
          <div className="h-[1px] mb-10 w-full bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-900"></div>
    
      <div className="grid grid-cols-1 gap-8 mx-auto max-w-6xl w-full md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id}>
            <article
              className="relative w-full h-full p-2 cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs flex w-full justify-between text-zinc-100 mb-5">
                  <span className="flex gap-1 text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-900 group-hover:text-zinc-300 items-start text-lg">
                  {project.title}
                  </span>
                </div>
              </div>

              <Image
                alt={project.title}
                src={project.img || placeholder}
                className="object-cover pointer-events-none rounded-lg z-0 w-full"
                width={1080}
                height={640}
                quality={85}
                priority
              />
              <p className="mt-4 overflow-hidden line-clamp-2 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                {project.description}
              </p>
            </article>
          </Card>
        ))}
      </div>

      {activeModal && (
        <Modal onClose={closeModal} content={activeModal} />
      )}
        </div> 
        </div>
    </>
  );
}