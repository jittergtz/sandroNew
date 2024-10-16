import Logo from "@/components/animations/bottomlogo";
import Contact from "@/components/ui/contact";
import Hero from "@/components/ui/Hero";
import Projects from "@/components/ui/projects";


export default function Home() {


  return (
   <main>

       <Hero/>
    
        
       <Projects/>


     
      
      <Contact/>

      <div className='h-[450px] w-full'>
			<Logo/>
			</div>

   
     </main>
  );
}
