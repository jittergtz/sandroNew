import Logo from "@/components/animations/bottomlogo";
import Contact from "@/components/ui/contact";
import Experience from "@/components/ui/experience";
import Hero from "@/components/ui/Hero";
import Projects from "@/components/ui/projects";
import Image from "next/image";


export default function Home() {


  return (
   <main>

       <Hero/>
    
        
       <Projects/>


     
      
      <Contact/>

      <div className='h-[450px] w-full'>
			<Logo/>
			</div>


      <Experience/>

      <div className="w-full mt-20">
      <Image
      src={"/sandro2.svg"}
      width={200}
      height={200}
      alt="sandro footer cover"
      className="w-full pointer-events-none"/>
      </div>

   
     </main>
  );
}
